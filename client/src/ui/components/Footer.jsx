import React from 'react';
import '../../styles/footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faInstagram,
    faFacebook,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import soundcloud from '../../assets/icons/soundcloud.png';
import spotify from '../../assets/icons/spotify.png';
import applemusic from '../../assets/icons/applemusic.png';
import youtube from '../../assets/icons/youtube.png';
import lightning from '../../assets/images/lightning.png';

const Footer = () => {
    return (
        <>
        <footer>
            <div className='info'>
                <p className='title footer-title'>Ollie</p>
                <p className='subtitle footer-slogan'>More Than Music.</p>
                <div className='social-icons'>
                    <a
                        className='listenicon igIcon'
                        rel='noopener noreferrer'
                        target='_blank'
                        href='https://instagram.com/the_groveaurora'
                    >
                        <FontAwesomeIcon
                            icon={faInstagram }
                            size="2x"
                        />
                    </a>
                    <a
                        className='listenicon igIcon'
                        rel='noopener noreferrer'
                        target='_blank'
                        href='https://instagram.com/the_groveaurora'
                    >
                        <FontAwesomeIcon
                            icon={faTwitter }
                            size="2x"
                        />
                    </a>
                    <a
                        className='listenicon igIcon'
                        rel='noopener noreferrer'
                        target='_blank'
                        href='https://instagram.com/the_groveaurora'
                    >
                        <FontAwesomeIcon
                            icon={faFacebook }
                            size="2x"
                        />
                    </a>
                </div>
            </div>
            <div className='listen-icons'>

                <a className='listenicon' target='_blank' rel='noopener noreferrer'
                    href='https://instagram.com/ollie_raps'>
                    <img width='40px' src={spotify}/>
                </a>
                <a className='listenicon' target='_blank' rel='noopener noreferrer'
                    href='https://instagram.com/ollie_raps'>
                    <img width='40px' src={applemusic}/>
                </a>
                <a className='listenicon' target='_blank' rel='noopener noreferrer'
                    href='https://instagram.com/ollie_raps'>
                    <img width='40px' src={soundcloud}/>
                </a>
                <a className='listenicon' target='_blank' rel='noopener noreferrer'
                    href='https://instagram.com/ollie_raps'>
                    <img width='40px' src={youtube}/>
                </a>
            </div>
            <div className='menu-items'>
                <p className='subtitle'>Stream</p>
                <p className='subtitle'>Shows</p>
                <p className='subtitle'>Merch</p>
            </div>
        </footer>
        <div className='tm-container'>
            <a href='https://techmade.co/' target='_blank'>
            <img className='techmadeLogo' src={lightning} alt='Built By Techmade'/>
            </a>
        </div>
        </>

    )
}

export default Footer;
