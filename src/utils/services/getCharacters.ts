import { DataResponse } from '../../types/dataTypes';

export default async function getCharacters(
  value: string | null = localStorage.getItem('userInputValue')
) {
  const baseUrl = `https://rickandmortyapi.com/api/character/?name=${value}`;
  const response = await fetch(baseUrl);
  const data: DataResponse = await response.json();
  const { results } = data;

  return results;
}
