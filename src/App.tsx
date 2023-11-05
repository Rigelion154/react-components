import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <div className="container">
          <AppRouter />
        </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
