import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Beer } from '../types/interfaces';
import getBeerById from '../utils/services/getBeerById';
import styles from '../styles/CardInfo.module.css';

const CardInfo = () => {
  const { id } = useParams();
  const [beer, setBeer] = useState<Beer[]>([]);

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
      {beer.map((el) => (
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
