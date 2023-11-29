import { Tree } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { getRecursiveFileContents } from '../../'
import { componentsGenerator } from './components-generator'
import { ComponentsGeneratorSchema } from './components-generator-schema'

describe('components generator', () => {
  let tree: Tree
  const options: ComponentsGeneratorSchema = { directory: 'test', prefix: 'ui' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await componentsGenerator(tree, { ...options })

    const contents = getRecursiveFileContents(tree, '.')
    expect(contents).toMatchSnapshot()
  })
})
