import { Component, FormEvent } from 'react';
import { ButtonWithError } from './ButtonWithError.tsx';

type SearchState = {
  searchValue: string;
};

type SearchProps = {
  query: (value: string) => void;
};

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  inputHandler(e: FormEvent<HTMLInputElement>) {
    const searchValue = e.currentTarget.value;
    this.setState({ searchValue });
  }

  searchHandler() {
    const value = this.state.searchValue;
    localStorage.setItem('searchValue', value);
    this.props.query(value);
  }

  render() {
    return (
      <div className="search-wrapper">
        <ButtonWithError />
        <input
          type="text"
          className="search-input"
          value={this.state.searchValue}
          onInput={this.inputHandler}
        />
        <button type="button" className="search-button" onClick={this.searchHandler}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
