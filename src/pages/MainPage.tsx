import { useEffect, useState } from 'react';

import { Beer } from '../types/interfaces';

import Header from '../components/layouts/Header/Header';
import Card from '../components/layouts/Card/Card';
import { fetchCharacters } from '../utils/fetchCharacters';
import Pagination from '../components/ui/Pagination/Pagination';

const MainPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );
  const [page, setPage] = useState(1);
  const [itemsOnPage, setItemsOnPage] = useState(10);

  useEffect(() => {
    fetchCharacters(setBeers, searchValue, page, itemsOnPage);
  }, [searchValue, page, setBeers, itemsOnPage]);

  return (
    <>
      <Header setSearchValue={setSearchValue} />
      <Pagination
        page={page}
        setPage={setPage}
        beers={beers}
        itemsOnPage={itemsOnPage}
        setItemsOnPage={setItemsOnPage}
      />
      <Card beers={beers} />
    </>
  );
};

export default MainPage;
