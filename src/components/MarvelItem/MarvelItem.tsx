import React from 'react';
import { Hero } from '../../types';
import './MarvelItem.scss';

type Props = {
  hero: Hero;
};

export default class MarvelItem extends React.Component<Props> {
  render() {
    const { hero } = this.props;
    return (
      <li className="marvel-item">
        <div className="marvel-item__img-wrap">
          <img
            className="marvel-item__img"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={hero.name}
          />
        </div>
        <div className="marvel-item__info">
          <div className="marvel-item__name">{hero.name}</div>
          <a className="marvel-item__link" href={hero.urls[0].url} target="_blank" rel="noreferrer">
            link
          </a>
        </div>
      </li>
    );
  }
}
