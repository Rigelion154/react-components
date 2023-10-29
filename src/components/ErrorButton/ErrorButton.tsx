import { Component } from 'react';

import { ButtonProps, ButtonState } from '../../types/errorButtonsType';

import styles from '../../styles/ErrorButton.module.css';

class ErrorButton extends Component<ButtonProps, ButtonState> {
  state = {
    isError: false,
  };

  getError = () => {
    this.setState({ isError: true });
  };

  render() {
    if (this.state.isError) throw new Error('The Error');

    return (
      <button type="button" onClick={this.getError} className={styles.button}>
        Get an <span>Error</span>
      </button>
    );
  }
}

export default ErrorButton;
