import { Tree } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { getRecursiveFileContents } from '../../'
import { componentTypes } from './component-types'

import { componentGenerator } from './component-generator'
import { ComponentGeneratorSchema } from './component-generator-schema'

describe('component generator', () => {
  let tree: Tree
  const options: ComponentGeneratorSchema = { directory: 'test', type: 'alert' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it.each(componentTypes)('should create files for %s', async (type) => {
    await componentGenerator(tree, { ...options, type })

    const contents = getRecursiveFileContents(tree, '.')
    expect(contents).toMatchSnapshot()
  })
})
