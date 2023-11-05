import { Route, Routes } from 'react-router-dom';

import ROUTES from './routes';

import NotFound from '../pages/NotFound';
import MainPage from '../pages/MainPage';
import CardInfo from '../pages/CardInfo';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainPage />}>
        <Route path={ROUTES.DETAILS} element={<CardInfo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
