import React from 'react';

function BoardsButtons({
  boards,
  handleCurrentBoard,
  setCurrentBoardId,
  activeId,
}) {
  const buttons = Array(boards)
    .fill(null)
    .map((_, i) => (
      <button
        key={i}
        onClick={() => {
          handleCurrentBoard(i);
          setCurrentBoardId(i);
        }}
        disabled={i == activeId}
      >
        {i}
      </button>
    ));
  return <div>{buttons}</div>;
}

export default BoardsButtons;
