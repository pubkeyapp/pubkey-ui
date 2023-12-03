import { Tree } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { getRecursiveFileContents } from '../../'
import { featureTypes } from './feature-types'

import { featureGenerator } from './feature-generator'
import { FeatureGeneratorSchema } from './feature-generator-schema'

describe('feature generator', () => {
  let tree: Tree
  const options: FeatureGeneratorSchema = { directory: 'test', type: 'demo' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it.each(featureTypes)('should create files for %s', async (type) => {
    await featureGenerator(tree, { ...options, type })

    const contents = getRecursiveFileContents(tree, '.')
    expect(contents).toMatchSnapshot()
  })
})
