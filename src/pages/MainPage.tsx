import { Component } from 'react';
import Search from '../components/Search.tsx';
import { ResponseData } from '../http/interfaces.ts';
import { fetchCharacters } from '../http/charactersApi.ts';

export interface MainProps {
  showPageName?: (name: string) => void;
}

interface MainState {
  response: ResponseData | null;
}

class MainPage extends Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.queryHandler = this.queryHandler.bind(this);
    this.state = {
      response: null,
    };
  }

  async componentDidMount() {
    await this.queryHandler();
  }

  async queryHandler(value?: string) {
    console.log(value);
    const response = await fetchCharacters();
    response && this.setState({ response });
  }

  render() {
    return (
      <div className="main-container">
        <div>
          <Search query={this.queryHandler} />
        </div>
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
      </div>
    );
  }
}

export default MainPage;
