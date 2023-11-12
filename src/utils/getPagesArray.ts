import React from 'react';

export default function getPagesArray(
  totalPages: number,
  setPagesArray: React.Dispatch<React.SetStateAction<number[]>>
) {
  const result: number[] = [];
  for (let i = 1; i < totalPages; i++) {
    result.push(i);
  }
  setPagesArray(result);
}
