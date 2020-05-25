import React from 'react';

const ButtonSecondary = ({ text, handleClick }) => {
  return (
    <button
      data-name={text}
      onClick={handleClick}
      className='btn-category w-100 text-left text-decoration-none border-0 px-2 py-1 text-dk'
    >
      {text}
    </button>
  )
}

export default ButtonSecondary;
