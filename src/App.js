import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <Logo className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="App-link this"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="badges">
          <div className="badge red">Red</div>
          <div className="badge green">Green</div>
          <div className="badge blue">Blue</div>
          <div className="badge yellow">Yellow</div>
          <div className="badge black">Black</div>
          <div className="badge light">Light</div>
        </div>
      </header>
    </div>
  );
}

export default App;
