import React from 'react';
import '../../styles/navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar">
            <input type='checkbox' id='nav' className='hidden'/>
            <label htmlFor="nav" className="nav-btn">
                <i></i>
                <i></i>
                <i></i>
            </label>
    
            <div className="nav-wrapper">
                <ul>
                    <div>
                        <li>
                            {/* <img
                                className='c'
                                target='_blank'
                                rel='noopener noreferrer'
                                alt='Ollie Raps'
                                src={logo}
                            /> */}
                            <p className='subtitle nav-logo'>Ollie Raps. </p>
                        </li>
                        <li><a href='/' className="header-text hover">Home</a></li>
                        <li><a href='/stream' className="header-text hover">Stream</a></li>
                        {/* <li><a href='/contact' className="header-text hover">Contact</a></li> */}
                        <div className='nav-socials'>
                            <li>
                                <a
                                    className='igIcon'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    href='https://www.instagram.com/ollie_raps/'>
                                    <FontAwesomeIcon
                                        icon={faInstagram}
                                        size="2x"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='igIcon'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    href='https://twitter.com/ollie_raps'>
                                    <FontAwesomeIcon
                                        icon={faTwitter }
                                        size="2x"
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    className='igIcon'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    href='https://www.facebook.com/OllieRaps/'>
                                    <FontAwesomeIcon
                                        icon={faFacebook}
                                        size="2x"
                                    />
                                </a>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar
