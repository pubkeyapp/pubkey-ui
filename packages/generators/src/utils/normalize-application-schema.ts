import { ApplicationGeneratorSchema } from '../generators/application/application-generator-schema'

export type NormalizedApplicationGeneratorSchema = Required<ApplicationGeneratorSchema>

export function normalizeApplicationGeneratorSchema(
  options: ApplicationGeneratorSchema,
): NormalizedApplicationGeneratorSchema {
  return {
    ...options,
    anchor: options.anchor,
    anchorName: options.anchorName ?? 'anchor',
    skipFormat: options.skipFormat ?? false,
    webName: options.webName ?? options.name,
  }
}
