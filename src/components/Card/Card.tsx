import React from 'react';
import { CardType } from '../../routes/Feedback/Feedback';
import './Card.scss';

type Props = {
  card: CardType;
};

const Card = (props: Props) => {
  const {
    card: { name, avatar, date, male, country, condition },
  } = props;

  return (
    <div className="card">
      <ul className="card__list">
        <li>Name: {name}</li>
        <li>Avatar link: {avatar}</li>
        <li>Birthday: {date}</li>
        <li>Condition: {(condition as string[]).join(', ')}</li>
        <li>Male: {male}</li>
        <li>Country: {country}</li>
      </ul>
    </div>
  );
};

export default Card;
