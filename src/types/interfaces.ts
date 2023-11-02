import React from 'react';

export interface CharactersResponse {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
  };
  results: CharactersData[];
}

export interface CharactersData {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface HeaderProps {
  setCharacters: React.Dispatch<React.SetStateAction<CharactersData[]>>;
}

export interface SearchBarProps {
  handleOnSearch: React.Dispatch<React.SetStateAction<CharactersData[]>>;
}

export interface CardProps {
  characters: CharactersData[];
}
