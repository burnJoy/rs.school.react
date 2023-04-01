import './SearchBar.scss';

type Props = {
  searchQuery: string;
  isLoading: boolean;
  updateSearchQuery: (searchQuery: string) => void;
  searchHandler: () => void;
};

const SearchBar = (props: Props) => {
  const handleKeyPress = (evt: React.KeyboardEvent<HTMLElement>) => {
    if (evt.key === 'Enter') {
      props.searchHandler();
    }
  };

  const { searchQuery, isLoading, updateSearchQuery, searchHandler } = props;

  return (
    <>
      <div className="search-bar">
        <input
          className="search-bar__input"
          value={searchQuery}
          onChange={(evt) => {
            updateSearchQuery(evt.target.value);
          }}
          onKeyDown={handleKeyPress}
          type="text"
          placeholder="example enter man"
        />

        <button
          type="button"
          className="search-bar__button"
          disabled={isLoading}
          onClick={() => {
            searchHandler();
          }}
        >
          search
        </button>
      </div>
    </>
  );
};

export default SearchBar;
