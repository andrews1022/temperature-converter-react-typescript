import React from 'react';

interface Props {
	title: string;
}

const Header: React.FC<Props> = ({ title }) => <h1 className='temp__heading'>{title}</h1>;

export default Header;
