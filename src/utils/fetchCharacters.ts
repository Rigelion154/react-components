import getCharacters from './services/getCharacters';
import { CharactersData } from '../types/interfaces';

export function fetchCharacters(
  inputValue: string,
  handleOnSearch: (charactersArray: CharactersData[]) => void
) {
  getCharacters(inputValue)
    .then((res) => {
      handleOnSearch(res);
    })
    .catch(() => {});
}
