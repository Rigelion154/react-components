export interface DataResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export default async function getCharacters(
  value: string | null = localStorage.getItem('userInputValue')
) {
  const baseUrl = `https://rickandmortyapi.com/api/character/?name=${value}`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  const { results } = data;

  console.log(results);
  return results as DataResponse[];
}
