# Next.js boilerplate code generator

## Description

VS Code Extension for new feature development boilerplate code in Next.js.

## ChangeLog

### [Click here](CHANGELOG.md)

## Configuration

You can change to the extension's settings through VS Code settings. You can customize:

### `NextjsBoilerplateGenerator.default.structure`

A list of folders to create, excluding pages, where `$domin` is the input domain name value.

- `array`

```
[
	"src/features/$domain/components",
	"src/features/$domain/types",
	"src/features/$domain/hooks",
	"src/features/$domain/queries"
]
```

### `NextjsBoilerplateGenerator.default.monorepo`

Folder names containing projects when using monorepo

- `array`

```
[
	"packages",
	"apps"
]
```

### `NextjsBoilerplateGenerator.pages.dir`

Path to the folder directory where the page will be created. $dir is the input page name value.

- `string`

```
"src/pages/$dir"
```

### `NextjsBoilerplateGenerator.pages.filename`

The name of the pages files.

- `string`

```
"index"
```

### `NextjsBoilerplateGenerator.pages.extension`

How to declare a function component. function or const

- `enum`
  <br/><br/>
- `tsx` (default)
- `js`
- `jsx`

## Bugs

Please report [here](https://github.com/sh031224/vscode-nextjs-boilerplate-generator/issues)
