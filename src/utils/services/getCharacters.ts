import { IBeer } from '../../types/interfaces';

export default async function getCharacters(
  name: string | null,
  page: number,
  itemsOnPage: number
) {
  const baseUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsOnPage}&${
    name ? `beer_name=${name}` : ''
  }`;
  const response = await fetch(baseUrl);
  const data: IBeer[] = await response.json();
  return data;
}
