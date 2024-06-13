import { RuleModule } from '@typescript-eslint/utils/ts-eslint';
import { ESLint } from 'eslint';
import { rules } from './rules';

type RuleKey = keyof typeof rules;

interface Plugin extends Omit<ESLint.Plugin, 'rules'> {
  rules: Record<RuleKey, RuleModule<any, any, any>>;
}

const plugin: Plugin = {
  meta: {
    name: 'eslint-plugin-demo-typescript', // or `@my-scope/eslint-plugin`
    version: '0.0.1',
  },
  rules
};

export default plugin;