import React, { useState, useEffect } from 'react';
import RestartButton from './RestartButton';
import BoardsButtons from './BoardsButtons';
import './TicTacToe.css';

function TicTacToe() {
  const [turn, setTurn] = useState('x');
  const [cells, setCells] = useState(
    JSON.parse(localStorage.getItem('cells')) || Array(9).fill('*')
  );
  const [victory, setVictory] = useState(false);
  const [enableRestart, setEnableRestart] = useState(true);
  const [storedBoards, setStoredBoards] = useState(
    JSON.parse(localStorage.getItem('storedBoards')) || [[cells, turn]]
  );
  const [currentBoardId, setCurrentBoardId] = useState(0);

  useEffect(() => {
    localStorage.setItem('currentPlayer', JSON.stringify(turn));
    localStorage.setItem('cells', JSON.stringify(cells));
    localStorage.setItem('storedBoards', JSON.stringify(storedBoards));
  }, [cells, storedBoards]);

  const handleRestart = () => {
    setTurn('x');
    setCells(Array(9).fill('*'));
    localStorage.setItem('cells', JSON.stringify(cells));
    setStoredBoards([[Array(9).fill('*'), 'x']]);
    localStorage.setItem('storedBoards', JSON.stringify(storedBoards));
    setVictory(false);
    setCurrentBoardId(0);
  };

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

    setCurrentBoardId(storedBoards.length);

    let squares = [...cells];

    if (currentBoardId !== storedBoards.length - 1) {
      setCells(storedBoards[currentBoardId][0]);
      squares = [...cells];
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
      setStoredBoards(prevValue => [
        ...prevValue.slice(0, currentBoardId + 1),
        [squares, turn],
      ]);
      setCurrentBoardId(storedBoards.length - 1);

      return;
    }

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
    setStoredBoards(prevValue => [...prevValue, [squares, turn]]);
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  const handleCurrentBoard = id => {
    if (id === 0 || storedBoards[id][1] === 'o') {
      setTurn('x');
    } else {
      setTurn('o');
    }
    setCells(storedBoards[id][0]);
    setCurrentBoardId(id);
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
      <BoardsButtons
        boards={storedBoards.length}
        handleCurrentBoard={handleCurrentBoard}
        setCurrentBoardId={setCurrentBoardId}
        activeId={currentBoardId}
      />
      <RestartButton
        disabled={enableRestart}
        handleClick={() => handleRestart()}
        text={'Restart Button'}
      />
    </div>
  );
}

export default TicTacToe;
