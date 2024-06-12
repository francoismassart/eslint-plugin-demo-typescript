import { RuleCreator } from '@typescript-eslint/utils/eslint-utils';
export { ESLintUtils } from '@typescript-eslint/utils';

// The Rule creator returns a function that is used to create a well-typed ESLint rule
// The parameter passed into RuleCreator is a URL generator function.
export const createRule = RuleCreator(name => `https://my-website.io/eslint/${name}`);

export const myRule= createRule({
  name: 'my-rule',
  meta: {
    docs: {
      description: 'An example ESLint rule',
    },
    type: 'suggestion',
    messages: {
      // Message IDs don't need to be prefixed, I just find it easier to keep track of them this way
      'issue:var': 'Prefer using `let` or `const`',
      'fix:let': 'Replace this `var` declaration with `let`',
      'fix:const': 'Replace this `var` declaration with `const`',
    },
    schema: [],
  },
  defaultOptions: [],
  create: context => {
    return {
      VariableDeclaration: node => {
        if (node.kind === 'var') {
          context.report({
            node,
              messageId: 'issue:var', // Prints the message with this ID when a problem is found
              suggest: [
                {
                  messageId: 'fix:let',
                  fix: fixer => fixer.replaceText(node, 'let'),
                },
                {
                  messageId: 'fix:const',
                  fix: fixer => fixer.replaceText(node, 'const'),
                },
              ],
            })
          }
        },
      };
    },
});