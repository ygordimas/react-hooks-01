import React from 'react';
import styled from 'styled-components';

const StyledRestart = styled.button`
  margin: 0.6rem auto 0;
  padding-top: 0.6rem;
  display: flex;
  border-bottom: 1px solid black;
`;

function RestartButton({ handleClick, text, disabled }) {
  return (
    <StyledRestart disabled={disabled} onClick={handleClick}>
      {text}
    </StyledRestart>
  );
}

export default RestartButton;
