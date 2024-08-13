import React from 'react';

const CorrectionDisplay = ({ correctedText }) => {
  return (
    <div>
      <h2>Corrected Text</h2>
      <p>{correctedText}</p>
    </div>
  );
};

export default CorrectionDisplay;
