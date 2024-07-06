import './App.css';
import MainPage from './pages/MainPage.tsx';
import ErrorBoundary from './errorBoundary/ErrorBoundary.tsx';

const App = () => (
  <div className="wrapper">
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  </div>
);

export default App;
