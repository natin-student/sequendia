import logo from './logo.svg';
import './styles/App.css';
import { useState } from 'react';
import Intro from './Introduction';

export default function App(props) {
  const [game, setGame] = useState(props.game);

  if (game) {
    return <Intro/>
  }

  return (
    <div className="App">
      <header className="App-header" onClick={() => setGame(true)}>
        <div className='App-hero'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sequendia</h1>
        <p
          className="App-link"
        >
          Learn Sequence Diagrams
        </p>
        </div>
      </header>
    </div>
  );
}
