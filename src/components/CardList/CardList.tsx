import Card from '../Card/Card';
import { CardType } from '../../routes/Feedback/Feedback';

import './CardList.scss';

type Props = {
  cards: CardType[];
};

const CardList = ({ cards }: Props) => {
  return (
    <div className="card-list">
      {cards.map((card: CardType) => (
        <Card key={card.id as string} card={card} />
      ))}
    </div>
  );
};

export default CardList;
