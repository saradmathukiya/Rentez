import React, { useState } from 'react';

function ReadMore({ text, maxLength }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  if (!text) {
    return null; // Render nothing if text is undefined
  }

  return (
    <div className='read-more-div'>
      {isTruncated ? (
        <>
          <p>{`${text.slice(0, maxLength)}...`}</p>
          <button onClick={toggleTruncate}>
            Read More</button>
        </>
      ) : (
        <>
          <p>{text}</p>
          <button onClick={toggleTruncate}
          style={{border:'none',
          background:'transparent',
          fontSize:'18px',
          color:'#3770FF',
          cursor:'pointer',
          textDecoration:'underline',
        }}
          >
            Read Less</button>
        </>
      )}
    </div>
  );
}

export default ReadMore;
