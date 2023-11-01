import { CharactersResponse } from '../../types/interfaces';

export default async function getCharacters(
  value: string | null = localStorage.getItem('userInputValue')
) {
  const baseUrl = `https://rickandmortyapi.com/api/character/?name=${value}`;
  const response = await fetch(baseUrl);
  const data: CharactersResponse = await response.json();
  const { results } = data;

  return results;
}
