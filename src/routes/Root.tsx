import React from 'react';
import { Outlet } from 'react-router-dom';

class Root extends React.Component {
  setPageTitle(title: string) {
    console.log(title);
  }
  render() {
    return (
      <>
        <h1>page title</h1>
        <div className="content">
          <Outlet context={[this.setPageTitle]} />
        </div>
      </>
    );
  }
}
export default Root;
