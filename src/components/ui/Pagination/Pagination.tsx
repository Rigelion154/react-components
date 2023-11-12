import React from 'react';
import { Beer } from '../../../types/interfaces';

import styles from '../../../styles/Pagination.module.css';

const Pagination = ({
  page,
  setPage,
  beers,
  itemsOnPage,
  setItemsOnPage,
}: {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  beers: Beer[];
  itemsOnPage: number;
  setItemsOnPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <button
          className={styles.control__button}
          disabled={page <= 1}
          type="button"
          onClick={() => setPage((prevPage) => prevPage - 1)}
        >
          &#60;
        </button>
        <h3>{page}</h3>
        <button
          className={styles.control__button}
          disabled={beers.length < itemsOnPage}
          type="button"
          onClick={() => setPage((prevPage) => prevPage + 1)}
        >
          &#62;
        </button>
      </div>
      <div className={styles.input__container}>
        <h4>Items per page</h4>
        <input
          className={styles.input}
          type="number"
          value={itemsOnPage}
          onChange={(e) => {
            setItemsOnPage(Number(e.target.value));
            setPage(1);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
