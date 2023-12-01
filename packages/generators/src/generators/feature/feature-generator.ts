import { formatFiles, generateFiles, Tree } from '@nx/devkit'
import * as path from 'path'
import { genericSubstitutions } from '../../'
import { FeatureGeneratorSchema } from './feature-generator-schema'

export async function featureGenerator(tree: Tree, options: FeatureGeneratorSchema) {
  const source = path.join(__dirname, 'files', options.type)
  generateFiles(
    tree,
    source,
    options.directory,
    genericSubstitutions({
      tree,
      name: options.type,
      prefix: options.prefix,
      options: {
        uiImport: options.uiImport ?? '@pubkey-ui/core',
      },
    }),
  )

  await formatFiles(tree)
}

export default featureGenerator
