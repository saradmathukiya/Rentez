// Your React component file (IconBtn.js)

import React from 'react';

const IconBtn = ({
  text,
  onclick,
  children,
  disabled,
  outline = false,
  customClasses,
  type,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onclick}
      className={`icon-btn ${outline ? 'outline' : ''} ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span className={`${outline && 'outline-text'}`}>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default IconBtn;
