import { Component } from 'react';
import Search from '../components/Search.tsx';

class MainPage extends Component {
  render() {
    return (
      <div className="main-container">
        <div>
          <Search query={(value: string) => console.log(value)} />
        </div>
        <div></div>
      </div>
    );
  }
}

export default MainPage;
