import { Route, Routes } from 'react-router-dom';

import ROUTES from './routes';

import NotFound from '../pages/NotFound';
import MainPage from '../pages/MainPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
