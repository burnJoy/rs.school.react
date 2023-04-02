import React from 'react';
import { render, screen } from '@testing-library/react';
import MarvelList, { type Props } from './MarvelList';
import { vi } from 'vitest';

vi.mock('../MarvelItem/MarvelItem', () => {
  return { default: vi.fn(() => <div data-testid="mocked-marvel-item"></div>) };
});

describe('MarvelList', () => {
  it('loading working correct', () => {
    render(<MarvelList heros={[]} isLoading={true} />);
    expect(screen.getByText('Loading...'));
    expect(screen.queryByText('no result')).toBeNull();
  });

  it('loading working correct', () => {
    render(<MarvelList heros={[]} isLoading={false} />);
    expect(screen.queryByText('Loading...')).toBeNull();
  });

  it('massage for empty list', () => {
    render(<MarvelList heros={[]} isLoading={false} />);
    expect(screen.getByText('no result'));
  });

  const props: Props = {
    heros: [
      {
        id: '123',
        name: 'Spider-Man',
        thumbnail: {
          extension: 'jpg',
          path: 'https://www.example.com/spider-man',
        },
        urls: [{ url: 'https://www.example.com/spider-man' }],
      },
    ],
    isLoading: false,
  };

  it('renders the list of heroes', () => {
    render(<MarvelList {...props} />);
    expect(screen.getAllByTestId('mocked-marvel-item')).toHaveLength(props.heros.length);
  });
});
