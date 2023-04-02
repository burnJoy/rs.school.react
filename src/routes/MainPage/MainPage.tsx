import { useContext, useEffect, useState } from 'react';
import apiMarvel from '../../api/apiMarvel';

import { TitleContext, type Props } from '../Root';
import SearchBar from '../../components/SearchBar/SearchBar';
import MarvelList from '../../components/MarvelList/MarvelList';
import type { Hero } from '../../types';

const MainPage = ({ title }: Props) => {
  const setTitle = useContext(TitleContext);

  const localSearchQuery = window.localStorage.getItem('searchQuery') || '';

  const [searchQuery, setSearchQuery] = useState(localSearchQuery);
  const [heros, setHeros] = useState<Hero[]>([]);
  const [isHeroesLoading, setIsHeroesLoading] = useState(false);

  const updateSearchQuery = (value: string) => {
    window.localStorage.setItem('searchQuery', value);
    setSearchQuery(value);
  };

  const searchHandler = async () => {
    setIsHeroesLoading(true);
    const list = (await apiMarvel.getList()) as Hero[];
    const filteredList = list
      .filter((item) => item.name.toLowerCase().includes(searchQuery.trim().toLowerCase()))
      .slice(0, 20);

    setHeros(filteredList);
    setIsHeroesLoading(false);
  };

  useEffect(() => {
    setTitle && setTitle(title);
  }, [title, setTitle]);

  useEffect(() => {
    searchHandler();
  }, []);

  return (
    <>
      <SearchBar
        searchQuery={searchQuery}
        updateSearchQuery={updateSearchQuery}
        searchHandler={searchHandler}
        isLoading={isHeroesLoading}
      />
      <MarvelList heros={heros} isLoading={isHeroesLoading} />
    </>
  );
};

export default MainPage;
