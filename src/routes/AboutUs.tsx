import React from 'react';
import { TitleContext, type Props } from './Root';

class AboutUs extends React.Component<Props> {
  static contextType = TitleContext;
  declare context: React.ContextType<typeof TitleContext>;

  componentDidMount() {
    this.context!(this.props.title);
  }

  render() {
    return (
      <>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quasi, recusandae ipsa
          deserunt exercitationem aliquid consequatur esse blanditiis beatae neque quia dolore quis
          facilis voluptatum. Animi exercitationem temporibus eaque laudantium minima doloribus
          atque modi nihil numquam, aliquam laborum a assumenda repudiandae officia est fuga quia
          dignissimos facere delectus unde voluptate deserunt? Recusandae aperiam debitis impedit
          reprehenderit ad tempora eaque odit minus, distinctio fugit! Exercitationem perferendis
          doloribus, natus tempore quos unde provident enim debitis ullam harum, quae itaque
          repellendus, illum ducimus soluta nihil corporis reprehenderit recusandae iusto. Assumenda
          quisquam iste, sequi necessitatibus amet deserunt veritatis qui voluptate ipsum,
          consectetur, harum quaerat!
        </p>
      </>
    );
  }
}

export default AboutUs;
