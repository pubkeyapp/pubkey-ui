import { Tree } from '@nx/devkit'
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing'
import { getRecursiveFileContents } from '../../'
import { featuresGenerator } from './features-generator'
import { FeaturesGeneratorSchema } from './features-generator-schema'

describe('features generator', () => {
  let tree: Tree
  const options: FeaturesGeneratorSchema = { directory: 'test', prefix: 'ui' }

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace()
  })

  it('should run successfully', async () => {
    await featuresGenerator(tree, { ...options })

    const contents = getRecursiveFileContents(tree, '.')
    expect(contents).toMatchSnapshot()
  })
})
