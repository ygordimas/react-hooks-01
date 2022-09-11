import React from 'react';

function BoardsButtons({ boards }) {
  const buttons = Array(boards)
    .fill(null)
    .map((_, i) => <button key={i}>{i}</button>);
  return <div>{buttons}</div>;
}

export default BoardsButtons;
