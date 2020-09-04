import ts from 'typescript';

import React from 'react';

interface Props {
  buttonText: string;
  resetTemps: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | undefined;
}

const TempReset: React.FC<Props> = ({ buttonText, resetTemps }) => (
  <button className='temp__btn' onClick={resetTemps}>
    {buttonText}
  </button>
);

export default TempReset;
