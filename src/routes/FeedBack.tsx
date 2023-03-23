import React from 'react';
import { TitleContext, type Props } from './Root';
import FeedBackForm from '../components/FeedBackForm/FeedBackForm';

export default class FeedBack extends React.Component<Props> {
  static contextType = TitleContext;
  declare context: React.ContextType<typeof TitleContext>;

  componentDidMount() {
    this.context!(this.props.title);
  }

  render() {
    return <FeedBackForm />;
  }
}
