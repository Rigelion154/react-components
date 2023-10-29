import { Component } from 'react';

import { AppProps, AppState } from './types/appTypes';

import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component<AppProps, AppState> {
  state = {
    searchValue: '',
  };

  handleOnSearch = (userValue: string) => {
    this.setState({ searchValue: userValue });
  };

  render() {
    return (
      <div className="container">
        <ErrorBoundary>
          <SearchBar handleOnSearch={this.handleOnSearch} />
          <Card userInput={this.state.searchValue} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
