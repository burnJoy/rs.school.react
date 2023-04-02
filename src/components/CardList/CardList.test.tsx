import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { vi } from 'vitest';

vi.mock('../Card/Card', () => {
  return { default: vi.fn(() => <div data-testid="card-item"></div>) };
});

describe('CardList Component', () => {
  const testCards = [
    {
      id: '1',
      name: 'John Smith',
      avatar: 'https://example.com/avatar1.png',
      date: '01/01/1990',
      male: 'male',
      country: 'USA',
      condition: ['healthy', 'happy'],
    },
    {
      id: '2',
      name: 'Jane Doe',
      avatar: 'https://example.com/avatar2.png',
      date: '02/02/1991',
      male: 'male',
      country: 'Canada',
      condition: ['sick'],
    },
  ];

  it('renders the list of cards', () => {
    render(<CardList cards={testCards} />);
    expect(screen.getAllByTestId('card-item')).toHaveLength(testCards.length);
  });
});
