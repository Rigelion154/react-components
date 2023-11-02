import { useState } from 'react';

import { CharactersData } from '../types/interfaces';

import Header from '../components/layouts/Header/Header';
import Card from '../components/layouts/Card/Card';

const MainPage = () => {
  const [characters, setCharacters] = useState<CharactersData[]>([]);
  return (
    <>
      <Header setCharacters={setCharacters} />
      <Card characters={characters} />
    </>
  );
};

export default MainPage;
