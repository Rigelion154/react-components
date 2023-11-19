import React from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

export interface IBeer {
  id: number;
  name: string;
  description: string;
  image_url: string;
  // tagline: string;
  // first_brewed: string;
  // abv: number;
  // ibu: number;
  // target_fg: number;
  // target_og: number;
  // ebc: number;
  // srm: number;
  // ph: number;
  // attenuation_level: number;
  // volume: {
  //   value: number;
  //   unit: string;
  // };
  // boil_volume: {
  //   value: number;
  //   unit: string;
  // };
  // method: {
  //   mash_temp: {
  //     temp: {
  //       value: number;
  //       unit: string;
  //     };
  //     duration: number;
  //   }[];
  //   fermentation: {
  //     temp: {
  //       value: number;
  //       unit: string;
  //     };
  //   };
  //   twist: null | string;
  // };
  // ingredients: {
  //   malt: {
  //     name: string;
  //     amount: {
  //       value: number;
  //       unit: string;
  //     };
  //   }[];
  //   hops: {
  //     name: string;
  //     amount: {
  //       value: number;
  //       unit: string;
  //     };
  //     add: string;
  //     attribute: string;
  //   }[];
  //   yeast: string;
  // };
  // food_pairing: string[];
  // brewers_tips: string;
  // contributed_by: string;
}

export interface HeaderProps {
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export interface SearchBarProps {
  handleOnSearch: React.Dispatch<React.SetStateAction<string>>;
}

export interface CardProps {
  error: FetchBaseQueryError | SerializedError | undefined;
  loading: boolean;
  beers: IBeer[] | undefined;
  page: number;
}
