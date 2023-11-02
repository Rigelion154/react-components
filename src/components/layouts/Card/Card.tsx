import { CardProps } from '../../../types/interfaces';

import styles from '../../../styles/Card.module.css';

const Card = ({ characters }: CardProps) => {
  return (
    <main className={styles.container}>
      {characters ? (
        characters.map((el) => (
          <div key={el.id} className={styles.card}>
            <img src={el.image} alt="Character" className={styles.img} />
            <div className={styles.description}>
              <h2>{el.name}</h2>
              <h4>Gender: {el.gender}</h4>
              <h4>Status: {el.status}</h4>
              <h4>Species: {el.species}</h4>
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
