import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

type Props = {
  title: string;
};

export default class Header extends React.Component<Props> {
  navClass({ isActive }: { isActive: boolean; isPending: boolean }) {
    return isActive ? 'active' : '';
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          <NavLink className={this.navClass} to="/">
            Home
          </NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/feedback">Feed back</NavLink>
        </nav>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}
