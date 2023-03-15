import React from 'react';

type MyProps = {
  title: string;
};
export default class AboutUs extends React.Component<MyProps> {
  componentDidMount(): void {
    // this.setPageTitle('About us page');
    // const MyContext = React.createContext('');

    console.log(this.props.title);
  }
  render() {
    return <h1>About us</h1>;
  }
}
