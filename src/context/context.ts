import React from 'react';
import { Beer } from '../types/interfaces';

interface ContextType {
  beers: Beer[];
  searchValue: string;
}

export const AppContext = React.createContext({} as ContextType);
