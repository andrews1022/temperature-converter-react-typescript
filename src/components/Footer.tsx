import React from 'react';

interface Props {
  url: string;
}

const Footer: React.FC<Props> = ({ url }) => {
  const generateRandomHeartColor = (): string => {
    const heartColors: string[] = ['#c382d3', '#349dbd', '#e28255', '#96e6a1'];
    const randomHeartColor: string = heartColors[Math.floor(Math.random() * heartColors.length)];
    return randomHeartColor;
  };

  return (
    <footer className='footer'>
      <p className='footer__copy'>
        made with{' '}
        <i className='footer__heart fas fa-heart' style={{ color: generateRandomHeartColor() }}></i>{' '}
        by andrew shearer
      </p>
      <a className='footer__link' href={url} target='_blank' rel='noopener noreferrer'>
        <i className='footer__github fab fa-github'></i>
      </a>
    </footer>
  );
};

export default Footer;
