import React from 'react';
import apiMarvel from '../../api/apiMarvel';

import { TitleContext, type Props } from '../Root';
import SearchBar from '../../components/SearchBar/SearchBar';
import MarvelList from '../../components/MarvelList/MarvelList';
import type { Hero } from '../../types';

type State = {
  searchQuery: string;
  heros: Hero[];
  isHeroesLoading: boolean;
};

class MainPage extends React.Component<Props, State> {
  static contextType = TitleContext;
  declare context: React.ContextType<typeof TitleContext>;

  state = {
    searchQuery: '',
    heros: [],
    isHeroesLoading: false,
  };

  componentDidMount() {
    this.context!(this.props.title);
    const searchQuery = window.localStorage.getItem('searchQuery') || '';
    if (!searchQuery) return;
    this.setState({ searchQuery });
    this.searchHandler();
  }

  updateSearchQuery(value: string) {
    window.localStorage.setItem('searchQuery', value);
    this.setState({ searchQuery: value });
  }

  setHerosLoader(value: boolean) {
    this.setState({ isHeroesLoading: value });
  }

  async searchHandler() {
    this.setHerosLoader(true);
    const list = (await apiMarvel.getList()) as Hero[];
    const filteredList = list
      .filter((item) =>
        item.name.toLowerCase().includes(this.state.searchQuery.trim().toLowerCase())
      )
      .slice(0, 20);
    this.setState({ heros: filteredList });
    this.setHerosLoader(false);
  }

  render() {
    return (
      <>
        <SearchBar
          searchQuery={this.state.searchQuery}
          updateSearchQuery={(value) => this.updateSearchQuery(value)}
          searchHandler={() => this.searchHandler()}
          isLoading={this.state.isHeroesLoading}
        />

        <MarvelList heros={this.state.heros} isLoading={this.state.isHeroesLoading} />
      </>
    );
  }
}

export default MainPage;
