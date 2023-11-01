import { Data } from './dataTypes';

export interface CardProps {
  userInput: string | null;
}

export interface CardState {
  characters: Data[];
}
