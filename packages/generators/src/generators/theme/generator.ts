import { addProjectConfiguration, formatFiles, generateFiles, Tree } from '@nx/devkit'
import * as path from 'path'
import { ThemeGeneratorSchema } from './schema'

export async function themeGenerator(tree: Tree, options: ThemeGeneratorSchema) {
  const projectRoot = `libs/${options.name}`
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'library',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  })
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options)
  await formatFiles(tree)
}

export default themeGenerator
