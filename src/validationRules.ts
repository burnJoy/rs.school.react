export type ValidationFunction = (value: string) => { valid: boolean; message: string };
export const validationRules: Record<string, ValidationFunction> = {
  required: (value: string) => {
    return { valid: Boolean(value), message: 'This field is required' };
  },
  capital: (value: string) => {
    const valid = /^[A-Z]$/.test(value[0]);
    return { valid, message: 'Should start with Capital' };
  },
};

export type RulesTypes = keyof typeof validationRules;
