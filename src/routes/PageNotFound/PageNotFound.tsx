import React from 'react';
import { TitleContext, type Props } from '../Root';

export default class NotFoundPage extends React.Component<Props> {
  static contextType = TitleContext;
  declare context: React.ContextType<typeof TitleContext>;

  componentDidMount() {
    this.context!(this.props.title);
  }

  render() {
    return (
      <div>
        <h2>
          <i>404</i> page not found
        </h2>
      </div>
    );
  }
}
