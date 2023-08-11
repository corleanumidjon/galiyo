import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
	return (
		<>
			<footer className='site-footer'>
				<div className='container'>
					<div className='site-footer__box'>
						<Link to='/'>
							<h2 className='site-footer__logo'>GeoLearning</h2>
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
};
