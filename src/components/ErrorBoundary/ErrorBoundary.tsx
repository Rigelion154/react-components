import { Component } from 'react';

import {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from '../../types/errorBoundaryTypes';

import styles from '../../styles/ErrorBoundary.module.css';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h2 className={styles.error}>Something went wrong!</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
