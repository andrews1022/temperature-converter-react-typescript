import React from 'react';

interface HeaderProps {
	headingText: string;
}

const Header = ({ headingText }: HeaderProps) => (
	<header className='header'>
		<h1 className='header__title'>{headingText}</h1>
	</header>
);

export default Header;
