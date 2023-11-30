import { formatFiles, generateFiles, Tree } from '@nx/devkit'
import * as path from 'path'
import { genericSubstitutions } from '../..'
import { ComponentGeneratorSchema } from './component-generator-schema'

export async function componentGenerator(tree: Tree, options: ComponentGeneratorSchema) {
  const source = path.join(__dirname, 'files', options.type)
  generateFiles(
    tree,
    source,
    options.directory,
    genericSubstitutions({
      tree,
      name: options.type,
      prefix: options.prefix,
    }),
  )
  await formatFiles(tree)
}

export default componentGenerator
