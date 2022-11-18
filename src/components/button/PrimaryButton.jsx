import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button onClick={handler} className={`text-white bg-primary hover:bg-secondary ${classes}`}>
      {children}
    </button>
  )
};

export default PrimaryButton;