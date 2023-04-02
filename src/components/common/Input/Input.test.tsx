import React from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

const mockOnChange = vi.fn();

const testProps = {
  name: 'some',
  label: 'the label of input',
  type: 'text' as const,
  value: 'default value',
  onChange: mockOnChange,
};

describe('Input', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('testing input attrs', () => {
    render(<Input {...testProps} />);
    expect(screen.getByText('the label of input')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('name', testProps.name);
    expect(screen.getByDisplayValue(testProps.value)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('type', testProps.type);
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
  });

  it('errors is rendering', () => {
    render(<Input {...testProps} {...{ error: 'test error message' }} />);
    expect(screen.getByText('test error message')).toBeInTheDocument();
  });

  it('call on change', async () => {
    render(<Input {...testProps} value="" />);
    const input = screen.getByRole('textbox');
    const value = 'testA';

    await userEvent.type(input, value);
    expect(mockOnChange).toBeCalledTimes(5);
    expect(mockOnChange).toHaveBeenNthCalledWith(5, testProps.name, 'A');
  });
});
