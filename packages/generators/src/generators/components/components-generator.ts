import { formatFiles, Tree } from '@nx/devkit'
import { componentTypes } from '../component/component-types'
import componentGenerator from '../component/component-generator'
import { ComponentsGeneratorSchema } from './components-generator-schema'
import { join } from 'path'

export async function componentsGenerator(tree: Tree, options: ComponentsGeneratorSchema) {
  const prefix = options.prefix ?? 'ui'
  const exports: string[] = []
  for (const type of componentTypes) {
    const target = `${prefix}-${type}`
    await componentGenerator(tree, {
      directory: join(options.directory, target),
      prefix,
      type,
    })
    exports.push(`export * from './${target}'`)
  }
  tree.write(join(options.directory, 'index.ts'), exports.join('\n') + '\n')
  await formatFiles(tree)
}

export default componentsGenerator
