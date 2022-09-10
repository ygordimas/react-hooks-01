import React, { useState, useEffect } from 'react';
import RestartButton from './RestartButton';
import './TicTacToe.css';

function TicTacToe() {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(
    JSON.parse(localStorage.getItem('cells')) || Array(9).fill('*')
  );
  const [victory, setVictory] = useState(false);

  const [enableRestart, setEnableRestart] = useState(true);

  useEffect(() => {
    localStorage.setItem('cells', JSON.stringify(cells));
  }, [cells]);

  const checkForWinners = squares => {
    let combos = {
      horizontal: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],
      vertical: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
      diagonal: [
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach(pattern => {
        if (
          squares[pattern[0]] === '*' ||
          squares[pattern[1]] === '*' ||
          squares[pattern[2]] === '*'
        ) {
          //do nothing
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setVictory(true);
        }
      });
    }
  };

  const handleClick = num => {
    if (cells[num] !== '*') {
      alert('already clicked!');
      return;
    }

    let squares = [...cells];

    if (turn === 'x') {
      squares[num] = 'x';
      setTurn('o');
    } else {
      squares[num] = 'o';
      setTurn('x');
    }

    setCells(squares);
    checkForWinners(squares);
    setEnableRestart(false);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div className="container">
      {victory === true ? (
        <p>Victory!</p>
      ) : (
        <p>Player {turn.toUpperCase()}, it's your turn!</p>
      )}
      <table>
        <tbody>
          <tr>
            <Cell num={0} />
            <Cell num={1} />
            <Cell num={2} />
          </tr>
          <tr>
            <Cell num={3} />
            <Cell num={4} />
            <Cell num={5} />
          </tr>
          <tr>
            <Cell num={6} />
            <Cell num={7} />
            <Cell num={8} />
          </tr>
        </tbody>
      </table>
      <RestartButton
        disabled={enableRestart}
        handleClick={() => console.log(enableRestart)}
        text={'Restart Button'}
      />
    </div>
  );
}

export default TicTacToe;
