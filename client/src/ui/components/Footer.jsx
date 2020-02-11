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
// import { Link } from 'react-router-dom';

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
                        href='https://www.instagram.com/ollie_raps/'
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
                        href='https://twitter.com/ollie_raps'
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
                        href='https://www.facebook.com/OllieRaps/'
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
                    href='https://open.spotify.com/artist/5OyoCvyau6TiGqcCKnDBCR'>
                    <img width='40px' src={spotify}/>
                </a>
                <a className='listenicon' target='_blank' rel='noopener noreferrer'
                    href='https://music.apple.com/us/artist/ollie/1325387508'>
                    <img width='40px' src={applemusic}/>
                </a>
                <a className='listenicon' target='_blank' rel='noopener noreferrer'
                    href='https://soundcloud.com/olly-raps'>
                    <img width='40px' src={soundcloud}/>
                </a>
                <a className='listenicon' target='_blank' rel='noopener noreferrer'
                    href='https://www.youtube.com/user/OfficialOllyMusic'>
                    <img width='40px' src={youtube}/>
                </a>
            </div>
            <div className='menu-items'>
                <a href='/stream' className='subtitle'><p>Stream</p></a>
                <a href='#tour' className='subtitle'><p>Shows</p></a>
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
