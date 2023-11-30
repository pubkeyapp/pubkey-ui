import { Tree } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { getRecursiveFileContents } from '../../'
import { components } from '../components/components'

import { componentGenerator } from './component-generator'
import { ComponentGeneratorSchema } from './component-generator-schema'

describe('component generator', () => {
  let tree: Tree
  const options: ComponentGeneratorSchema = { directory: 'test', type: 'alert' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it.each(components)('should create files for %s', async (type) => {
    await componentGenerator(tree, { ...options, type })

    const contents = getRecursiveFileContents(tree, '.')
    expect(contents).toMatchSnapshot()
  })
})
