import React from 'react';
import Card from '../Card/Card';
import { CardType } from '../../routes/Feedback/Feedback';

import './CardList.scss';

type Props = {
  cards: CardType[];
};

export default class CardList extends React.Component<Props> {
  render() {
    const { cards } = this.props;
    return (
      <div className="card-list">
        {cards.map((card: CardType) => (
          <Card key={card.id as string} card={card} />
        ))}
      </div>
    );
  }
}
