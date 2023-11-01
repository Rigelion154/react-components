import { useState } from 'react';

import { CharactersData } from './types/interfaces';

import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
  const [characters, setCharacters] = useState<CharactersData[]>([]);

  return (
    <div className="container">
      <ErrorBoundary>
        <SearchBar handleOnSearch={setCharacters} />
        <Card characters={characters} />
      </ErrorBoundary>
    </div>
  );
};

export default App;
