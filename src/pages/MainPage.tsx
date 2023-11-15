import { useEffect, useState } from 'react';

import { fetchCharacters } from '../utils/fetchCharacters';
import { Beer } from '../types/interfaces';

import Header from '../components/layouts/Header/Header';
import Card from '../components/layouts/Card/Card';
import Pagination from '../components/ui/Pagination/Pagination';
import { Outlet, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/context';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const MainPage = () => {
  const [beers, setBeers] = useState<Beer[]>([]);
  const { searchValue } = useSelector(
    (state: RootState) => state.searchReducer
  );
  const [page, setPage] = useState(1);
  const [itemsOnPage, setItemsOnPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCharacters(setBeers, searchValue, page, itemsOnPage);
    navigate(`?page=${page}`);
  }, [searchValue, page, setBeers, itemsOnPage, navigate]);

  return (
    <AppContext.Provider value={{ beers, searchValue }}>
      <>
        <Header />
        <Pagination
          page={page}
          setPage={setPage}
          beers={beers}
          itemsOnPage={itemsOnPage}
          setItemsOnPage={setItemsOnPage}
        />
        <main className="main">
          <Card page={page} />
          <Outlet />
        </main>
      </>
    </AppContext.Provider>
  );
};

export default MainPage;
