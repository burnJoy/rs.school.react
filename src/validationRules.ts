export type ValidationFunction = (value: string | string[]) => { valid: boolean; message: string };
export const validationRules: Record<string, ValidationFunction> = {
  required: (value: string | string[]) => {
    if (Array.isArray(value)) {
      const valid = value.length > 0;
      return { valid, message: 'This field is required' };
    }
    return { valid: Boolean(value), message: 'This field is required' };
  },

  capital: (value: string | string[]) => {
    if (Array.isArray(value)) {
      return { valid: false, message: 'Array is taken' };
    }
    const valid = /^[A-Z]$/.test(value[0]);
    return { valid, message: 'Should start with Capital' };
  },
};

export type RulesTypes = keyof typeof validationRules;
