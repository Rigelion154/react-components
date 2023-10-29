import { Component } from 'react';
import { CardProps, CardState } from '../../types/cardTypes';

import getCharacters from '../../utils/services/getCharacters';

import styles from '../../styles/Card.module.css';

class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    this.fetchData(
      localStorage.getItem('userInputValue') || this.props.userInput
    );
  }

  componentDidUpdate(prevProps: CardProps) {
    if (prevProps.userInput !== this.props.userInput) {
      this.fetchData(this.props.userInput);
    }
  }

  fetchData(userInput: string | null) {
    getCharacters(userInput)
      .then((res) => {
        this.setState({ characters: res });
      })
      .catch(() => {});
  }

  render() {
    return (
      <main className={styles.container}>
        {this.state.characters &&
          this.state.characters.map((el) => (
            <div key={el.id} className={styles.card}>
              <img src={el.image} alt="Character" className={styles.img} />
              <div className={styles.description}>
                <h2>{el.name}</h2>
                <h4>Gender: {el.gender}</h4>
                <h4>Status: {el.status}</h4>
                <h4>Species: {el.species}</h4>
              </div>
            </div>
          ))}
      </main>
    );
  }
}

export default Card;
