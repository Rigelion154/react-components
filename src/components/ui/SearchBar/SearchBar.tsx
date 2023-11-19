import { ChangeEvent, useState } from 'react';

import styles from '../../../styles/Header.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { searchConfigureSlice } from '../../../store/reducers/SearchConfigureSlice';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(
    localStorage.getItem('searchValue') || ''
  );
  const { setValue } = searchConfigureSlice.actions;
  const dispatch = useDispatch<AppDispatch>();

  const searchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    localStorage.setItem('searchValue', inputValue);
  };

  return (
    <form className={styles.container}>
      <div className={styles.input__container}>
        <input
          type="text"
          value={inputValue || ''}
          onChange={searchChange}
          placeholder="Beer name"
          className={styles.input}
        />
        <button
          type="button"
          onClick={() => dispatch(setValue(inputValue))}
          className={styles.button}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
