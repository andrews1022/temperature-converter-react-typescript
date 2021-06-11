import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

interface FooterProps {
	socialLinks: string[];
}

const Footer = ({ socialLinks }: FooterProps) => {
	const [gitHubLink, twitterLink] = socialLinks;

	return (
		<footer className='footer'>
			<p className='footer__text'>
				© {new Date().getFullYear()} all rights reserved. designed and built and andrew shearer
			</p>
			<div className='footer__icon-row'>
				<a
					className='footer__icon-link'
					href={gitHubLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon className='footer__icon' icon={faGithub} size='lg' />
				</a>
				<a
					className='footer__icon-link'
					href={twitterLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon className='footer__icon' icon={faTwitter} size='lg' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
