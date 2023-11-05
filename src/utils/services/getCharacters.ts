import { Beer } from '../../types/interfaces';

export default async function getCharacters(
  name: string,
  page: number,
  itemsOnPage: number
) {
  const baseUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${itemsOnPage}&${
    name ? `beer_name=${name}` : ''
  }`;
  const response = await fetch(baseUrl);
  const data: Beer[] = await response.json();
  console.log(data);
  return data;
}
