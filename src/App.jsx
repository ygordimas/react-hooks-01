import { useState } from 'react';
import TicTacToe from './TicTacToe.jsx';
import { GlobalStyle } from './styles/global.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TicTacToe />
    </div>
  );
}

export default App;
