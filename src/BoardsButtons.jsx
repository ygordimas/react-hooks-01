import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  text-align: center;
`;

const Button = styled.button`
  background: var(--accent);
  width: 2rem;
  height: 2rem;
  padding: 0px;
  margin-inline: 0.4rem;
`;

function BoardsButtons({
  boards,
  handleCurrentBoard,
  setCurrentBoardId,
  activeId,
}) {
  const buttons = Array(boards)
    .fill(null)
    .map((_, i) => (
      <Button
        key={i}
        onClick={() => {
          handleCurrentBoard(i);
          setCurrentBoardId(i);
        }}
        disabled={i == activeId}
      >
        {i}
      </Button>
    ));
  return <ButtonWrapper>{buttons}</ButtonWrapper>;
}

export default BoardsButtons;
