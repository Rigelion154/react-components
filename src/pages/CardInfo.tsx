import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IBeer } from '../types/interfaces';
import getBeerById from '../utils/services/getBeerById';
import styles from '../styles/CardInfo.module.css';

const CardInfo = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<IBeer[]>([]);

  useEffect(() => {
    if (id)
      getBeerById(id)
        .then((res) => {
          setBeer(res);
        })
        .catch(() => {});
  }, [id]);
  return (
    <>
      {beer.length > 0 ? (
        beer.map((el) => (
          <div key={el.id} className={styles.container}>
            <h2>{el.name}</h2>
            <p>{el.description}</p>
            <Link className={styles.close} to={'/'}>
              &#10005;
            </Link>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default CardInfo;
