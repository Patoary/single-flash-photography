import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import lo from '../../../images/lo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth);
    const [isMobile, setIsMobile] = useState(false);
    const handleSignout = () =>{
        signOut(auth);
    }
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
                    {
                        user? 
                    <button onClick={handleSignout} className='signout border-0'>Sign Out</button>
                         :
                        <Link to='/login' className='login'>Log In</Link>
                    }
                    
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