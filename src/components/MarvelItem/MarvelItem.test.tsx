import React from 'react';
import { render, screen } from '@testing-library/react';
import MarvelItem from './MarvelItem';
import type { Hero } from '../../types';

describe('MarvelItem', () => {
  const hero: Hero = {
    id: '123',
    name: 'Spider-Man',
    thumbnail: {
      path: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg',
    },
    urls: [
      {
        url: 'http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=0d3db3a575ecd5ce4491ee1295b966c5',
      },
    ],
  };

  it('renders the hero name', () => {
    render(<MarvelItem hero={hero} />);
    expect(screen.getByText('Spider-Man')).toBeInTheDocument();
  });

  it('renders the hero image', () => {
    render(<MarvelItem hero={hero} />);
    expect(screen.getByAltText('Spider-Man')).toBeInTheDocument();
  });

  it('renders the hero link', () => {
    render(<MarvelItem hero={hero} />);
    expect(screen.getByText('link')).toHaveAttribute('href', hero.urls[0].url);
  });

  it('matches the snapshot', () => {
    const { container } = render(<MarvelItem hero={hero} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
