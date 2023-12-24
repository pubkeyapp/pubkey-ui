import { execSync } from 'child_process'
import { join, dirname } from 'path'
import { mkdirSync, rmSync } from 'fs'

describe('generators', () => {
  let projectDirectory: string

  beforeAll(() => {
    projectDirectory = createTestProject()

    // The plugin has been built and published to a local registry in the jest globalSetup
    // Install the plugin built with the latest source code into the test repo
    execSync(`pnpm install @pubkey-ui/generators@e2e`, {
      cwd: projectDirectory,
      stdio: 'pipe',
      env: process.env,
    })
  })

  afterAll(() => {
    // Cleanup the test project
    rmSync(projectDirectory, {
      recursive: true,
      force: true,
    })
  })

  it('should be installed', () => {
    // pnpm why will fail if the package is not installed properly
    const result = execSync('pnpm why @pubkey-ui/generators', {
      cwd: projectDirectory,
      stdio: 'pipe',
    })
    const output = result?.toString('utf-8')

    if (!output?.length) {
      throw new Error('The plugin was not installed properly')
    }
    expect(output).toContain('@pubkey-ui/generators')
  })
})

/**
 * Creates a test project with create-nx-workspace and installs the plugin
 * @returns The directory where the test project was created
 */
function createTestProject() {
  const projectName = 'test-project'
  const projectDirectory = join(process.cwd(), 'tmp', projectName)

  // Ensure projectDirectory is empty
  rmSync(projectDirectory, {
    recursive: true,
    force: true,
  })
  mkdirSync(dirname(projectDirectory), {
    recursive: true,
  })

  execSync(`pnpx create-nx-workspace@latest ${projectName} --preset apps --no-nxCloud --no-interactive --pm pnpm`, {
    cwd: dirname(projectDirectory),
    stdio: 'inherit',
    env: process.env,
  })
  console.log(`Created test project in "${projectDirectory}"`)

  return projectDirectory
}
