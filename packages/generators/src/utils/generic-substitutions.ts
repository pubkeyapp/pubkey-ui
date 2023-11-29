import { names, Tree } from '@nx/devkit'
import { getNpmScope } from '@nx/js/src/utils/package-json/get-npm-scope'

export interface GenericSubstitutions {
  tree: Tree
  name: string
  prefix?: string
  user?: string
}
export function genericSubstitutions({
  tree,
  name,
  prefix,
  user = process.env['USER'] ?? 'anon',
}: GenericSubstitutions) {
  const npmScope = getNpmScope(tree)
  const prefixNames = names(prefix ?? 'ui')
  return {
    ...names(name),
    npmScope,
    prefixFileName: prefixNames.fileName,
    prefix: prefixNames,
    user,
  }
}
