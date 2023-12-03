import { getProjects, Tree, updateJson } from '@nx/devkit'
import { anchorApplicationGenerator } from '@solana-developers/preset-anchor'
import { join } from 'path'
import { generateReactApplication } from '../../utils/generate-react-application'
import {
  normalizeApplicationGeneratorSchema,
  NormalizedApplicationGeneratorSchema,
} from '../../utils/normalize-application-schema'
import { reactApplicationRunScripts } from '../../utils/react-application-run-scripts'
import featuresGenerator from '../features/features-generator'
import themeGenerator from '../theme/theme-generator'
import { ApplicationGeneratorSchema } from './application-generator-schema'

export async function applicationGenerator(tree: Tree, rawOptions: ApplicationGeneratorSchema) {
  // Best prettier config ever.
  tree.write(
    '.prettierrc',
    JSON.stringify(
      {
        singleQuote: true,
        printWidth: 120,
        semi: false,
        trailingComma: 'all',
        arrowParens: 'always',
      },
      null,
      2,
    ),
  )
  tree.write('.prettierignore', ['/dist', '/coverage', 'tmp', '/.yarn', '/.nx/cache'].join('\n'))

  const options: NormalizedApplicationGeneratorSchema = normalizeApplicationGeneratorSchema(rawOptions)
  // const npmScope = getNpmScope(tree)
  // Set up the base project.
  const project = await generateReactApplication(tree, options)

  await themeGenerator(tree, {
    directory: project.root,
  })
  await featuresGenerator(tree, {
    directory: join(project.sourceRoot, 'app', 'features'),
    uiImport: '../../ui',
  })

  if (options.anchor !== 'none' && !getProjects(tree).has(options.anchorName)) {
    // Add the anchor application.
    await anchorApplicationGenerator(tree, {
      name: options.anchorName,
      skipFormat: true,
      template: options.anchor,
    })

    if (options.anchor === 'counter') {
      // // Generate the counter files
      // await reactTemplateGenerator(tree, {
      //   name: options.webName,
      //   npmScope,
      //   template: 'anchor-counter',
      //   anchor: options.anchor,
      //   anchorName: options.anchorName,
      //   webName: options.webName,
      //   directory: join(project.root, 'src', 'app', 'counter'),
      // })
    }
  }

  updateJson(tree, 'package.json', (json) => {
    json.scripts = {
      ...json.scripts,
      ...reactApplicationRunScripts({ anchorName: options.anchorName, webName: options.webName }),
    }
    return json
  })
}

export default applicationGenerator
