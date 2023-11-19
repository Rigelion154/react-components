import { CardProps } from '../../../types/interfaces';

import styles from '../../../styles/Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ error, loading, beers, page }: CardProps) => {
  return (
    <main className={styles.container}>
      {error && <h2>Error</h2>}
      {loading && <h2>Loading...</h2>}
      {beers &&
        beers.map((el) => (
          <Link
            to={`/details/${el.id}?page=${page}`}
            key={el.id}
            className={styles.card}
          >
            <div className={styles.description}>
              <h2>{el.name}</h2>
            </div>
            <img src={el.image_url} alt="Beer" className={styles.img} />
          </Link>
        ))}
    </main>
  );
};

export default Card;
