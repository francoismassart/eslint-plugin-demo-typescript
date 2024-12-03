# Writing a custom ESLint plugin with TypeScript code

This repo is based on the "[Writing a custom ESLint plugin with Typescript](https://thesonofthomp.medium.com/writing-a-custom-eslint-plugin-with-typescript-08d0e01726d2)" Medium article written by [Adam Thompson
](https://github.com/thesonofthomp).

## Why this repo?

I was expecting to find a link to a repo with the full code explained in Adam's article but I could not find it.

It will be a quick way to browse the full code on its own and possibly to enhance it by fixing issues.

## Getting started

I worked on this repo using `pnpm` but it should work with other package manager.

### Install

`pnpm i`

### Build

`pnpm build`

### Test

Tests were setup to work with `jest` and `vitest` both comes with pros and cons...

I would recommend Vitest but I also added Jest in case you want it.

| Jest                     | Vitest                                         |
| :----------------------- | :--------------------------------------------- |
| Based on `commonjs`      | Based on `ESM`                                 |
| ✅ Mocking               | ✅ Mocking                                     |
| ✅ Snapshots             | ✅ Snapshots                                   |
| ✅ Parallel testing      | ✅ Parallel testing                            |
| ✅ Fast                  | ✅ Often faster                                |
| -                        | ✅ Support benches                             |
| ❌ Require `ts-jest` lib | ❌ Requires `setupFile` and `vitest.config.ts` |

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

#### Using `vitest`

`pnpm test`

#### Using `jest`

`pnpm test:jest`

### Docs

`pnpm docs:init` will create new files for each rule if necessary.

`pnpm docs:update` will update existing files and the rules list.

You can see an example of generated documentation in the next section.

### Rules

<!-- begin auto-generated rules list -->

💡 Manually fixable by [editor suggestions](https://eslint.org/docs/latest/use/core-concepts#rule-suggestions).

| Name                             | Description            | 💡 |
| :------------------------------- | :--------------------- | :- |
| [my-rule](docs/rules/my-rule.md) | An example ESLint rule | 💡 |

<!-- end auto-generated rules list -->

## Additional resources

See [`eslint-plugin-example-typed-linting`](https://github.com/typescript-eslint/examples/tree/main/packages/eslint-plugin-example-typed-linting) for an example plugin that supports typed linting.

## TODO

- fix: `docs:update`
