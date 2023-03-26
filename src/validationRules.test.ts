import { validationRules } from './validationRules';

describe('Validation Rules', () => {
  test('required - returns invalid  when value is empty string', () => {
    const { valid } = validationRules.required('');
    expect(valid).toBe(false);
  });

  test('required - returns valid when value is non-empty string', () => {
    const { valid } = validationRules.required('test');
    expect(valid).toBe(true);
  });

  test('required - returns valid when value is non-empty array', () => {
    const { valid } = validationRules.required(['test']);
    expect(valid).toBe(true);
  });

  test('capital - returns invalid when value is empty string', () => {
    const { valid } = validationRules.capital('');
    expect(valid).toBe(false);
  });

  test('capital - returns invalid  when value is an array', () => {
    const { valid } = validationRules.capital(['test']);
    expect(valid).toBe(false);
  });

  test('capital - returns invalid when value does not start with capital letter', () => {
    const { valid } = validationRules.capital('test');
    expect(valid).toBe(false);
  });

  test('capital - returns valid when value starts with capital letter', () => {
    const { valid } = validationRules.capital('Test');
    expect(valid).toBe(true);
  });
});
