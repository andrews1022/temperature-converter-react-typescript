import React from 'react';

// components
import Footer from './components/Footer';
import Header from './components/Header';
import TempCalc from './components/TempCalc';

// data
import socialLinks from './data/social-links';

// styles
import './scss/app.min.css';

const App = () => {
	return (
		<div className='app'>
			<Header headingText='Temperature Converter' />
			<TempCalc />
			<Footer socialLinks={socialLinks} />
		</div>
	);
};

export default App;
