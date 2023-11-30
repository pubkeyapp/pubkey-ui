import { formatFiles, Tree } from '@nx/devkit'
import { join } from 'path'
import featureGenerator from '../feature/feature-generator'
import { FeaturesGeneratorSchema } from './features-generator-schema'
import { features } from './features'

export async function featuresGenerator(tree: Tree, options: FeaturesGeneratorSchema) {
  const prefix = options.prefix ?? 'ui'
  const exports: string[] = []
  for (const type of features) {
    const target = type
    await featureGenerator(tree, {
      directory: join(options.directory, target),
      prefix,
      type,
    })
    exports.push(`export * from './${target}/${type}-feature'`)
  }
  tree.write(join(options.directory, 'index.ts'), exports.join('\n') + '\n')
  await formatFiles(tree)
}

export default featuresGenerator
