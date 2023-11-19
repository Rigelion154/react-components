import { IBeer } from '../../types/interfaces';

export default async function getBeerById(id: string) {
  const baseUrl = `https://api.punkapi.com/v2/beers/${id}`;
  const response = await fetch(baseUrl);
  const data: IBeer[] = await response.json();
  return data;
}
