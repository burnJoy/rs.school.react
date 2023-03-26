import React from 'react';
import './SearchBar.scss';

type Props = {
  searchQuery: string;
  isLoading: boolean;
  updateSearchQuery: (searchQuery: string) => void;
  searchHandler: () => void;
};

export default class SearchBar extends React.Component<Props> {
  handleKeyPress = (evt: React.KeyboardEvent<HTMLElement>) => {
    if (evt.key === 'Enter') {
      this.props.searchHandler();
    }
  };
  render() {
    return (
      <>
        <div className="search-bar">
          <input
            className="search-bar__input"
            value={this.props.searchQuery}
            onChange={(evt) => {
              this.props.updateSearchQuery(evt.target.value);
            }}
            onKeyDown={this.handleKeyPress}
            type="text"
            placeholder="example enter man"
          />

          <button
            type="button"
            className="search-bar__button"
            disabled={this.props.isLoading}
            onClick={() => {
              this.props.searchHandler();
            }}
          >
            search
          </button>
        </div>
      </>
    );
  }
}
