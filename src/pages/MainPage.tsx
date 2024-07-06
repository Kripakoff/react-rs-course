import { Component } from 'react';
import Search from '../components/Search.tsx';
import { ResponseData } from '../http/interfaces.ts';
import { fetchCharacters } from '../http/charactersApi.ts';

export interface MainProps {
  showPageName?: (name: string) => void;
}

interface MainState {
  response: ResponseData | null;
  isLoader: boolean;
}

class MainPage extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.queryHandler = this.queryHandler.bind(this);
    this.state = {
      response: null,
      isLoader: false,
    };
  }

  async componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    await this.queryHandler(searchValue);
  }

  async queryHandler(value: string | null) {
    try {
      this.setState({ isLoader: true });
      const response = await fetchCharacters(value);
      response && setTimeout(() => this.setState({ response }), 1000);
    } catch {
      console.log('Request error');
    }
    setTimeout(() => this.setState({ isLoader: false }), 1000);
  }

  render() {
    return (
      <div className="main-container">
        <div>
          <Search query={this.queryHandler} />
        </div>
        <div className="main-content">
          <div className="character-list">
            {this.state.response?.results?.map((item) => (
              <div className="character-item" key={item.id}>
                {item.name}
                <div className="character-image">
                  <img src={item.image} alt={'character image' + item.name} />
                </div>
                <div>Location: {item.location.name}</div>
                <div>Species: {item.species}</div>
                <div>Status: {item.status}</div>
              </div>
            ))}
          </div>
          {this.state.isLoader && (
            <>
              <div className="loader-wrapper"></div>
              <span className="loader"></span>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default MainPage;
