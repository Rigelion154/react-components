import React from 'react';
import { IBeer } from '../types/interfaces';

interface ContextType {
  beers: IBeer[];
  searchValue: string;
}

export const AppContext = React.createContext({} as ContextType);
