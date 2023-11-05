import { CardProps } from '../../../types/interfaces';

import styles from '../../../styles/Card.module.css';

const Card = ({ beers }: CardProps) => {
  return (
    <main className={styles.container}>
      {beers ? (
        beers.map((el) => (
          <div key={el.id} className={styles.card}>
            <img src={el.image_url} alt="Character" className={styles.img} />
            <div className={styles.description}>
              <h2>{el.name}</h2>
            </div>
          </div>
        ))
      ) : (
        <h2 className={styles.error}>This character doesn't exist</h2>
      )}
    </main>
  );
};

export default Card;
