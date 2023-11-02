import { HeaderProps } from '../../../types/interfaces';

import ErrorButton from '../../ui/ErrorButton/ErrorButton';
import SearchBar from '../../ui/SearchBar/SearchBar';
import LOGO from '../../../assets/logo.webp';

import styles from '../../../styles/Header.module.css';

const Header = ({ setCharacters }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <div>
        <img src={LOGO} alt="Logo" className={styles.logo} />
      </div>
      <SearchBar handleOnSearch={setCharacters} />
      <ErrorButton />
    </header>
  );
};

export default Header;
