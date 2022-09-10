import React from 'react';

function RestartButton({ handleClick, text, disabled }) {
  return (
    <button disabled={disabled} onClick={handleClick}>
      {text}
    </button>
  );
}

export default RestartButton;
