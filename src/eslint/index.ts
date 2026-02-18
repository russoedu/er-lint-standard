import { _configs } from './configs'
import { _files } from './helpers'
import { _rules } from './rules'

/**
 * LintErAll is a comprehensive collection of ESLint configurations, file patterns, and rules designed to provide a standardized linting setup for various types of projects. It includes configurations for JavaScript, TypeScript, React, JSON, and YAML, along with specific rules to enforce code quality and consistency across different file types.
 */
export const lintErAll = {
  /**
  * All LintErAll configs for each file type and purpose. This includes configs for TypeScript, JSON, YAML and global ignores. Each config is designed to be used with __ESLint's flat config__ system, and can be extended or customized as needed.
   */
  configs: _configs,
  /**
   * File patterns for different types of files (e.g., TypeScript, JavaScript, tests) that can be used in ESLint configurations or scripts.
  */
  files:   _files,
  /**
   * All LintErAll rules separated by type
   */
  rules:   _rules,
}
