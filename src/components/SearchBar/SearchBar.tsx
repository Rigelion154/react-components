import { ChangeEvent, Component } from 'react';
import styles from '../../styles/Header.module.css';
import LOGO from '../../assets/RAM-XLHeroBanner-logo-desktop.webp';

interface SearchBarProps {
  handleOnSearch: (userValue: string) => void;
}

interface SearchBarState {
  userInput: string | null;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  state = {
    userInput: localStorage.getItem('userInputValue') || '',
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    this.setState({ userInput: value });
    localStorage.setItem('userInputValue', value);
  };

  handleSearch = () => {
    this.props.handleOnSearch(this.state.userInput);
  };

  render() {
    return (
      <header className={styles.container}>
        <div>
          <img src={LOGO} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.input__container}>
          <input
            type="text"
            value={this.state.userInput}
            onChange={this.handleInputChange}
            className={styles.input}
          />
          <button
            type="button"
            onClick={this.handleSearch}
            className={styles.button}
          >
            Search
          </button>
        </div>
      </header>
    );
  }
}

export default SearchBar;
