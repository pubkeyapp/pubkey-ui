import { addDependenciesToPackageJson, formatFiles, generateFiles, Tree } from '@nx/devkit'
import { runPackageManagerInstall } from '@nx/plugin/testing'
import { applicationCleanup } from '../../'
import * as path from 'path'
import { ThemeGeneratorSchema } from './schema'

export async function themeGenerator(tree: Tree, options: ThemeGeneratorSchema) {
  applicationCleanup(tree, options.directory, [
    'src/app/app.module.css',
    'src/app/app.spec.tsx',
    'src/app/nx-welcome.tsx',
  ])
  generateFiles(tree, path.join(__dirname, 'files'), options.directory, options)
  addDependenciesToPackageJson(
    tree,
    {
      '@mantine/core': '^7.2.2',
      '@mantine/dates': '^7.2.2',
      '@mantine/dropzone': '^7.2.2',
      '@mantine/form': '^7.2.2',
      '@mantine/hooks': '^7.2.2',
      '@mantine/modals': '^7.2.2',
      '@mantine/notifications': '^7.2.2',
      '@mantine/spotlight': '^7.2.2',
      dayjs: '^1.11.10',
    },
    {
      postcss: '^8.4.31',
      'postcss-preset-mantine': '^1.11.0',
      'postcss-simple-vars': '^7.0.1',
    },
  )
  await formatFiles(tree)
  return () => {
    runPackageManagerInstall()
  }
}

export default themeGenerator
