import { Component } from 'react';
import Card from './components/Card/Card';
import SearchBar from './components/SearchBar/SearchBar';

interface AppProps {}

interface AppState {
  searchValue: string;
}

class App extends Component<AppProps, AppState> {
  state = {
    searchValue: '',
  };

  handleOnSearch = (userValue: string) => {
    this.setState({ searchValue: userValue });
  };

  render() {
    console.log(this.state.searchValue);
    return (
      <div className="container">
        <SearchBar handleOnSearch={this.handleOnSearch} />
        <Card userInput={this.state.searchValue} />
      </div>
    );
  }
}

export default App;
