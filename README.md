# Writing a custom ESLint plugin with TypeScript code

This repo is based on the "[Writing a custom ESLint plugin with Typescript](https://thesonofthomp.medium.com/writing-a-custom-eslint-plugin-with-typescript-08d0e01726d2)" Medium article written by [Adam Thompson
](https://github.com/thesonofthomp).

## Why this repo?

I was expecting to find a link to a repo with the full code explained in Adam's article but I could not find it.

It will be a quick way to browse the full code on its own and possibly to enhance it by fixing issues.

## Getting started

### Install

`pnpm i`

### Build

`pnpm build`

### Test

`pnpm test`


NB: In order to use, the [`RuleTester`](https://typescript-eslint.io/packages/rule-tester) from `@typescript-eslint/rule-tester`, we must:

- Have a `tsconfig.json` with:
  ```
  {
    "compilerOptions": {
      "module": "nodenext",
      "moduleResolution": "nodenext"
    }
  }
  ```
  More info can be found on [`v6`: Cannot find module `@typescript-eslint/*` or its corresponding type declarations](https://github.com/typescript-eslint/typescript-eslint/issues/7284).
  > You can use `bundler`, `node16`, or `nodenext` for `moduleResolution`.
- Use `eslint` with `v8`, [`typescript-eslint` does not support `v9` yet](https://github.com/typescript-eslint/typescript-eslint/issues/8211)

### Docs

`npx eslint-doc-generator --init-rule-docs`

`npx eslint-doc-generator`

### Rules

<!-- begin auto-generated rules list -->

💡 Manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

| Name                             | Description            | 💡 |
| :------------------------------- | :--------------------- | :- |
| [my-rule](docs/rules/my-rule.md) | An example ESLint rule | 💡 |

<!-- end auto-generated rules list -->