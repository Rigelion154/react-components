import { Component } from 'react';

import { AppProps, AppState } from './types/appTypes';

import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';

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
        <SearchBar handleOnSearch={this.handleOnSearch} />
        <Card userInput={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
