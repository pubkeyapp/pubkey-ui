import { Tree } from '@nx/devkit'
import { components } from '../component/components'
import componentGenerator from '../component/generator'
import { ComponentsGeneratorSchema } from './components-generator-schema'
import { join } from 'path'

export async function componentsGenerator(tree: Tree, options: ComponentsGeneratorSchema) {
  const exports: string[] = []
  for (const component of components) {
    await componentGenerator(tree, {
      directory: join(options.directory, `${options.prefix}-${component}`),
      prefix: options.prefix,
      type: component,
    })
    exports.push(`export * from './${options.prefix}-${component}'`)
  }
  tree.write(join(options.directory, 'index.ts'), exports.join('\n') + '\n')
}

export default componentsGenerator
