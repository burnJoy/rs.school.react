import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';

describe('Header component', () => {
  test('renders navigation links', () => {
    render(
      <Router>
        <Header title="My App" />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About us');
    expect(aboutLink).toBeInTheDocument();
  });

  test('renders navigation links with correct classes', () => {
    render(
      <Router>
        <Header title="My App" />
      </Router>
    );

    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveClass('active');

    const aboutLink = screen.getByText('About us');
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).not.toHaveClass();

    // homeLink.click();
    // expect(homeLink).toHaveClass('active');
    // expect(aboutLink).not.toHaveClass();

    // aboutLink.click();
    // expect(aboutLink).toHaveClass('active');
    // expect(homeLink).not.toHaveClass('active');
  });
});
