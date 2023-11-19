import { useState } from 'react';
import Header from '../components/layouts/Header/Header';
import Card from '../components/layouts/Card/Card';
import Pagination from '../components/ui/Pagination/Pagination';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { beerApi } from '../services/BeerService';

const MainPage = () => {
  const { searchValue, itemsPerPage } = useSelector(
    (state: RootState) => state.searchReducer
  );
  const [page, setPage] = useState(1);
  const { error, isLoading, data } = beerApi.useGetBeersQuery({
    searchValue,
    page,
    itemsPerPage,
  });

  return (
    <>
      <Header />
      <Pagination
        page={page}
        setPage={setPage}
        beers={data}
        itemsOnPage={itemsPerPage}
      />
      <main className="main">
        <Card error={error} loading={isLoading} beers={data} page={page} />
        <Outlet />
      </main>
    </>
  );
};

export default MainPage;
