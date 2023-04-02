import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  const testCard = {
    name: 'John Smith',
    avatar: 'https://example.com/avatar.png',
    date: '01/01/1990',
    male: 'male',
    country: 'USA',
    condition: ['healthy', 'happy'],
  };

  test('renders card with correct data', () => {
    const { getByText } = render(<Card card={testCard} />);
    expect(getByText(`Name: ${testCard.name}`)).toBeInTheDocument();
    expect(getByText(`Avatar link: ${testCard.avatar}`)).toBeInTheDocument();
    expect(getByText(`Birthday: ${testCard.date}`)).toBeInTheDocument();
    expect(getByText(`Condition: ${testCard.condition.join(', ')}`)).toBeInTheDocument();
    expect(getByText(`Male: ${testCard.male}`)).toBeInTheDocument();
    expect(getByText(`Country: ${testCard.country}`)).toBeInTheDocument();
  });
});
