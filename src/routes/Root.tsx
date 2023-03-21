import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export const TitleContext = React.createContext<((title: string) => void) | null>(null);

export type Props = {
  title: string;
};

class Root extends React.Component<Readonly<unknown>, Props> {
  state = {
    title: 'Main page',
  };

  setPageTitle(title: string) {
    this.setState(() => ({ title: title }));
  }

  render() {
    return (
      <div className="root">
        <Header title={this.state.title} />
        <div className="content">
          <TitleContext.Provider value={(title) => this.setPageTitle(title)}>
            <Outlet />
          </TitleContext.Provider>
        </div>
      </div>
    );
  }
}

export default Root;
