import { HeaderProps } from '../../../types/interfaces';

import ErrorButton from '../../ui/ErrorButton/ErrorButton';
import SearchBar from '../../ui/SearchBar/SearchBar';

import styles from '../../../styles/Header.module.css';

const Header = ({ setSearchValue }: HeaderProps) => {
  return (
    <header className={styles.container}>
      <SearchBar handleOnSearch={setSearchValue} />
      <ErrorButton />
    </header>
  );
};

export default Header;
