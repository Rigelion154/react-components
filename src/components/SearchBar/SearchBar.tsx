import { ChangeEvent, useEffect, useState } from 'react';

import { SearchBarProps } from '../../types/interfaces';
import { fetchCharacters } from '../../utils/fetchCharacters';

import ErrorButton from '../ErrorButton/ErrorButton';
import LOGO from '../../assets/logo.webp';

import styles from '../../styles/Header.module.css';

const SearchBar = ({ handleOnSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') || ''
  );
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem('searchValue') || ''
  );

  useEffect(() => {
    fetchCharacters(searchValue, handleOnSearch);
  }, [searchValue, handleOnSearch]);

  const searchButtonHandler = () => {
    setSearchValue(inputValue);
  };

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    localStorage.setItem('searchValue', inputValue);
  };

  return (
    <header className={styles.container}>
      <div>
        <img src={LOGO} alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.input__container}>
        <input
          type="text"
          value={inputValue || ''}
          onChange={searchChange}
          placeholder="Character name"
          className={styles.input}
        />
        <button
          type="button"
          onClick={searchButtonHandler}
          className={styles.button}
        >
          Search
        </button>
      </div>
      <ErrorButton />
    </header>
  );
};

export default SearchBar;
