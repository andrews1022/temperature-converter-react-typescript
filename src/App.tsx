import React from 'react';
import Header from './components/Header';
import TempCalc from './components/TempCalc';
import Footer from './components/Footer';
import './scss/App.min.css';

function App() {
  return (
    <div className='temp'>
      <Header title='temperature converter' />
      <TempCalc />
      <Footer url='https://github.com/andrews1022/temperature-converter-react-typescript' />
    </div>
  );
}

export default App;
