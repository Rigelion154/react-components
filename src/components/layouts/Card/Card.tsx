import { CardProps } from '../../../types/interfaces';

import styles from '../../../styles/Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({ beers, page }: CardProps) => {
  return (
    <main className={styles.container}>
      {beers ? (
        beers.map((el) => (
          <Link
            to={`/details/${el.id}?page=${page}`}
            key={el.id}
            className={styles.card}
          >
            <div className={styles.description}>
              <h2>{el.name}</h2>
            </div>
            <img src={el.image_url} alt="Character" className={styles.img} />
          </Link>
        ))
      ) : (
        <h2 className={styles.error}>This character doesn't exist</h2>
      )}
    </main>
  );
};

export default Card;
