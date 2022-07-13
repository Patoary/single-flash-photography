import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import lo from '../../../images/lo.png'
const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
            <nav className='navbar sticky-top'>
                <h3 className='logo'>SF PHOTOS</h3>

                <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                    onClick={() => setIsMobile(false)}
                >
                    <Link to='/' className='home'>Home</Link>
                    <Link to='/about' className='about'>About</Link>
                    <Link to='/service' className='service'>Service</Link>
                    <Link to='/contact' className='contact'>Contact</Link>
                    <Link to='/login' className='login'>Log In</Link>
                </ul>
                <button className='mobile-menu-icon'
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? (<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>)
                        :
                        (<FontAwesomeIcon icon={faBars}></FontAwesomeIcon>)}

                </button>

            </nav>
        </>
    );
};

export default Header;