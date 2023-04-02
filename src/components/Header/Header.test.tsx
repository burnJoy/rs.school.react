import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

describe('Header component', () => {
  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Header title="My App" />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About us');
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders navigation links with correct classes', async () => {
    act(() => {
      render(
        <BrowserRouter>
          <Header title="My App" />
        </BrowserRouter>
      );
    });

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass('active');

    const aboutLink = screen.getByText('About us');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).not.toHaveClass();

    act(() => {
      aboutLink.click();
    });
    expect(aboutLink).toHaveClass('active');
    expect(homeLink).not.toHaveClass('active');

    act(() => {
      homeLink.click();
    });
    expect(homeLink).toHaveClass('active');
    expect(aboutLink).not.toHaveClass('active');
  });
});
