import { useState } from 'react';

import styles from '../../styles/ErrorButton.module.css';

const ErrorButton = () => {
  const [error, setError] = useState(false);

  const getError = () => {
    setError(true);
  };

  if (error) throw new Error('The Error');

  return (
    <button type="button" onClick={getError} className={styles.button}>
      Get an <span>Error</span>
    </button>
  );
};

export default ErrorButton;
