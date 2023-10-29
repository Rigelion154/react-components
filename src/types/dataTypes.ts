export interface DataResponse {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
  };
  results: Data[];
}

export interface Data {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}
