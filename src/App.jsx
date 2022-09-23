import { useState } from 'react';
import TicTacToe from './TicTacToe.jsx';
import { GlobalStyle } from './styles/global.js';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <TicTacToe />
    </div>
  );
}

export default App;
