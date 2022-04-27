import logo from './logo.svg';
import './App.css';
import DiceGame from './container/dice-game/DiceGame';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HangmanGame from './container/hangman-game/HangmanGame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <nav>
          <Link to="/">Home</Link>
          <Link to="/dice-game">Dice Game</Link>
          <Link to="/hangman-game">Hangman Game</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Hello</h1>}></Route>
          <Route path="/dice-game" element={<DiceGame></DiceGame>}></Route>
          <Route path="/hangman-game" element={<HangmanGame></HangmanGame>}></Route>
        </Routes>
        
      </div>   
    </BrowserRouter>
  );
}

export default App;
