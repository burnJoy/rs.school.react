import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { vi } from 'vitest';
import FeedBackForm from './FeedBackForm';

describe('FeedBackForm', () => {
  it('renders form', () => {
    render(<FeedBackForm addCard={vi.fn()} />);
    expect(screen.getByText('form')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('Country')).toBeInTheDocument();
    expect(screen.getByText('Choose conditions')).toBeInTheDocument();
    expect(screen.getByText('Gender')).toBeInTheDocument();
    expect(screen.getByText('Load your Avatar')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });

  it('shows error messages for invalid form submission', async () => {
    const addCard = vi.fn();
    render(<FeedBackForm addCard={addCard} />);
    const submitButton = screen.getByRole('button', { name: 'submit' });

    await userEvent.click(submitButton);

    expect(screen.getAllByText('This field is required')).toHaveLength(6);

    expect(addCard).not.toHaveBeenCalled();
  });
});
