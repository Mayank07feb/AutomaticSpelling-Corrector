import React from 'react';

const CorrectionStepper = ({ nextStep, hasMoreCorrections }) => {
  return (
    <div>
      <button onClick={nextStep} disabled={!hasMoreCorrections}>
        Next Correction Step
      </button>
    </div>
  );
};

export default CorrectionStepper;
