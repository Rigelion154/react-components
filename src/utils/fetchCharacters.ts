import { Beer } from '../types/interfaces';
import getCharacters from './services/getCharacters';
import React from 'react';

export function fetchCharacters(
  setCharacters: React.Dispatch<React.SetStateAction<Beer[]>>,
  name: string,
  page: number,
  itemsOnPage: number
) {
  getCharacters(name, page, itemsOnPage)
    .then((res) => {
      setCharacters(res);
    })
    .catch(() => {});
}
