import { Tree } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { getRecursiveFileContents } from '../../'
import { themeGenerator } from './generator'
import { ThemeGeneratorSchema } from './schema'

describe('theme generator', () => {
  let tree: Tree
  const options: ThemeGeneratorSchema = { directory: 'test-target' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await themeGenerator(tree, options)

    const contents = getRecursiveFileContents(tree, '.')
    expect(contents).toMatchSnapshot()
  })
})
