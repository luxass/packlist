// these should always be ignored
const _STRICT_DEFAULTS = [
  ".git",
];

export const DEFAULT_IGNORE = [
  ".npmignore",
  ".gitignore",
  "**/.git",
  "**/.svn",
  "**/.hg",
  "**/CVS",
  "**/.git/**",
  "**/.svn/**",
  "**/.hg/**",
  "**/CVS/**",
  "/.lock-wscript",
  "/.wafpickle-*",
  "/build/config.gypi",
  "npm-debug.log",
  "**/.npmrc",
  ".*.swp",
  ".DS_Store",
  "**/.DS_Store/**",
  "._*",
  "**/._*/**",
  "*.orig",
  "/archived-packages/**",
];

export interface Options {
  /**
   * List of ignore patterns
   *
   * @default DEFAULT_IGNORE
   */
  ignores: string[];

  /**
   * List of .ignore files to include
   *
   * @default ['.gitignore','.npmignore']
   */
  ignoreFiles?: string[];
}

export interface PacklistOptions {
  /**
   * The root directory of the package
   */
  cwd: string;
}

type Packlist = (options: PacklistOptions) => Promise<string[]>;

export function createPacklist(options: Options): Packlist {
  return async function packlist(options: PacklistOptions) {
    return [];
  };
}

export const packlist = createPacklist({
  ignores: DEFAULT_IGNORE,
});
