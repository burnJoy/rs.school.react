import React from 'react';
import type { Hero } from '../../types';
import MarvelItem from '../MarvelItem/MarvelItem';

import './MarvelList.scss';

type Props = {
  heros: Hero[];
  isLoading: boolean;
};

export default class extends React.Component<Props> {
  render() {
    const { heros, isLoading } = this.props;

    if (isLoading) return <p>Loading...</p>;
    if (heros.length === 0) return <p>no result</p>;
    return (
      <>
        <ul className="marvel-list">
          {heros.map((hero) => {
            return <MarvelItem key={hero.id} hero={hero} />;
          })}
        </ul>
      </>
    );
  }
}
