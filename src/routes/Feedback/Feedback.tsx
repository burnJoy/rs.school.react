import React from 'react';
import { TitleContext, type Props } from '../Root';
import FeedBackForm from '../../components/FeedBackForm/FeedBackForm';
import CardList from '../../components/CardList/CardList';
import './Feedback.scss';

export type CardType = Record<string, string | string[]>;

type State = {
  cards: CardType[];
};

export default class Feedback extends React.Component<Props, State> {
  static contextType = TitleContext;
  declare context: React.ContextType<typeof TitleContext>;

  state = {
    cards: [] as CardType[],
  };

  saveToLocalStorage = () => {
    localStorage.setItem('cards', JSON.stringify(this.state.cards));
  };

  loadFromLocalStorage = () => {
    const localCard = localStorage.getItem('cards');
    if (!localCard) return;
    this.setState({ cards: JSON.parse(localCard) });
  };

  addCard = async (card: CardType) => {
    let id = 0;
    const lastCard = this.state.cards.at(-1);
    if (lastCard && typeof lastCard.id === 'string') {
      id = parseInt(lastCard.id) + 1;
    }
    await this.setState({
      cards: [...this.state.cards, { ...card, id: id.toString() }],
    });

    this.saveToLocalStorage();
  };

  componentDidMount() {
    this.context!(this.props.title);
    this.loadFromLocalStorage();
  }

  render() {
    return (
      <div className="feedback">
        <FeedBackForm addCard={this.addCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
