#!/usr/bin/env node

import { createWorkspace } from 'create-nx-workspace'
import { execAndWait } from 'create-nx-workspace/src/utils/child-process-utils'
import { detectInvokedPackageManager } from 'create-nx-workspace/src/utils/package-manager'
import { getPackageManagerCommand } from 'nx/src/utils/package-manager'

async function main() {
  const pm = detectInvokedPackageManager()
  const name = process.argv[2] // TODO: use libraries like yargs or enquirer to set your workspace name
  if (!name) {
    throw new Error('Please provide a name for the workspace')
  }

  // This assumes "@pubkey-ui/generators" and "create-pubkey-ui-app" are at the same version
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const presetVersion = require('../package.json').version
  const presetName = '@pubkey-ui/generators'
  const preset = `${presetName}@${presetVersion}`
  console.log(`Creating the workspace: ${name} with preset: ${preset}`)

  // TODO: update below to customize the workspace
  const { directory } = await createWorkspace(preset, {
    name,
    nxCloud: 'skip',
    packageManager: pm,
    webName: 'web',
    commit: {
      name: '',
      email: '',
      message: 'chore: initial commit',
    },
  })

  console.log('Installing dependencies...')
  await execAndWait(getPackageManagerCommand(pm).install, directory)

  console.log(`Successfully created the workspace: ${directory}.`)
}

main()
