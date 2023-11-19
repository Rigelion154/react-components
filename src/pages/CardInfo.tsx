import { Link, useParams } from 'react-router-dom';

import { beerApi } from '../services/BeerService';

import styles from '../styles/CardInfo.module.css';

const CardInfo = () => {
  const { id } = useParams();
  const { data, isLoading, error } = beerApi.useGetBeerByIdQuery(id);

  return (
    <>
      {isLoading && <h2>Details is loading...</h2>}
      {error && <h2>Error</h2>}
      {data &&
        data.map((el) => (
          <div key={el.id} className={styles.container}>
            <h2>{el.name}</h2>
            <p>{el.description}</p>
            <Link className={styles.close} to={'/'}>
              &#10005;
            </Link>
          </div>
        ))}
    </>
  );
};

export default CardInfo;
