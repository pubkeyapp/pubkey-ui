import { addDependenciesToPackageJson, formatFiles, generateFiles, installPackagesTask, Tree } from '@nx/devkit'
import * as path from 'path'
import { join } from 'path'
import { applicationCleanup } from '../../'
import componentsGenerator from '../components/components-generator'
import { ThemeGeneratorSchema } from './theme-generator-schema'

export async function themeGenerator(tree: Tree, options: ThemeGeneratorSchema) {
  applicationCleanup(tree, options.directory, [
    'src/app/app.module.css',
    'src/app/app.spec.tsx',
    'src/app/nx-welcome.tsx',
  ])
  generateFiles(tree, path.join(__dirname, 'files'), options.directory, options)

  await componentsGenerator(tree, {
    directory: join(options.directory, 'src', 'app', 'ui'),
    prefix: 'ui',
  })

  addDependenciesToPackageJson(
    tree,
    {
      '@mantine/core': '^7.2.2',
      '@mantine/dates': '^7.2.2',
      '@mantine/form': '^7.2.2',
      '@mantine/hooks': '^7.2.2',
      '@mantine/modals': '^7.2.2',
      '@mantine/notifications': '^7.2.2',
      '@tabler/icons-react': '^2.42.0',
      clsx: '2.0.0',
      dayjs: '^1.11.10',
      'react-router-dom': '6.20.1',
      'timeago-react': '^3.0.6',
    },
    {
      postcss: '^8.4.31',
      'postcss-preset-mantine': '^1.11.0',
      'postcss-simple-vars': '^7.0.1',
    },
  )
  await formatFiles(tree)
  return () => {
    installPackagesTask(tree)
  }
}

export default themeGenerator
