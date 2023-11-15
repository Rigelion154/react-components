import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AppRouter from './routes/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <div className="container">
            <AppRouter />
          </div>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
