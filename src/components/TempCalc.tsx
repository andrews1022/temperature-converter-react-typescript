import React, { useState } from 'react';
import TempInput from './TempInput';
import TempReset from './TempReset';

interface Temperatures {
  celsius: number;
  fahrenheit: number;
  kelvin: number;
}

const TempCalc: React.FC = () => {
  const [temp, updateTemp] = useState<Temperatures>(() => ({
    celsius: 0,
    fahrenheit: 0,
    kelvin: 0,
  }));

  const convertFromCelsius = (e: { target: { value: React.ReactText } }) =>
    updateTemp({
      celsius: +e.target.value,
      fahrenheit: +(+e.target.value * 1.8 + 32).toFixed(2),
      kelvin: +(+e.target.value + 273.15).toFixed(2),
    });

  const convertFromFahrenheit = (e: { target: { value: React.ReactText } }) =>
    updateTemp({
      celsius: +((+e.target.value - 32) / 1.8).toFixed(2),
      fahrenheit: +e.target.value,
      kelvin: +((+e.target.value - 32) / 1.8 + 273.15).toFixed(2),
    });

  const convertFromKelvin = (e: { target: { value: React.ReactText } }) =>
    updateTemp({
      celsius: +(+e.target.value - 273.15).toFixed(2),
      fahrenheit: +((+e.target.value - 273.15) * 1.8 + 32).toFixed(2),
      kelvin: +e.target.value,
    });

  const resetTemps = (): void => updateTemp({ celsius: 0, fahrenheit: 0, kelvin: 0 });

  return (
    <div className='temp__calc'>
      <TempInput type='celsius' value={temp.celsius} convertTemp={convertFromCelsius} />
      <TempInput type='fahrenheit' value={temp.fahrenheit} convertTemp={convertFromFahrenheit} />
      <TempInput type='kelvin' value={temp.kelvin} convertTemp={convertFromKelvin} />
      <TempReset buttonText='reset' resetTemps={resetTemps} />
    </div>
  );
};

export default TempCalc;
