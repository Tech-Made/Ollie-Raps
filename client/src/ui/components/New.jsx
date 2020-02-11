import React, { useState } from 'react';
import epbg from '../../assets/images/epbg.jpg';
import '../../styles/new.scss';
import { Modal } from '@material-ui/core';
import spotify from '../../assets/images/buttons/spotify.png';
import apple from '../../assets/images/buttons/applemusic.png';
import soundcloud from '../../assets/images/buttons/soundcloud.png';
import youtube from '../../assets/images/buttons/youtube.png';
import close from '../../assets/images/close.png';

const New = () => {


    const [open, setOpen] = useState(false);

    if (open) {
        return (
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                className='display'
            >
                <>
                    <img onClick={() => setOpen(false)} className='close' src={close} alt='X'/>
                    <div className='left'>
                        <div className='hover-data'>
                        <h1 className='hover1 hover1-1 subtitle'>Twenty Four</h1>
                        </div>
                        <div className='hover-data'>
                        <a className='hover1 hover1-1' target='_blank' href='https://open.spotify.com/album/3USUE5q6KICToSTyrepBen?si=sVan5XnEQ9mqChRDE3GJdg'>
                            <img src={spotify} alt='spotify'/>
                        </a>
                        </div>
                        <div className='hover-data'>
                        <a className='hover1 hover1-1' target='_blank' href='https://music.apple.com/album/twenty-four-ep/1495088883?app=music'>
                            <img src={apple} alt='apple'/>
                        </a>
                        </div>
                        <div className='hover-data'>
                        <a className='hover1 hover1-1' target='_blank' href='https://soundcloud.com/olly-raps/sets/twenty-four-ep'>
                            <img className='hover1 hover1-1' src={soundcloud} alt='soundcloud'/>
                        </a>
                        </div>
                        <div className='hover-data'>
                        <a className='hover1 hover1-1' target='_blank' href='https://youtu.be/ocTpDEcB5tg'>
                            <img className='hover1 hover1-1' src={youtube} alt='youtube'/>
                        </a>
                        </div>
                    </div>
                    <div onClick={() => {}} className='right'>
                        <img className='artwork' src={epbg} alt='More Than Music'/>
                    </div>
                </>
            </Modal>
        )
    }

    return (
        <div className='new-container'>
            <div onClick={() => setOpen(true)} className='new'>
                <img src={epbg} alt='Song'/>
                <div className='content'>
                    <p>New EP Out Now!</p>
                </div>
            </div>
        </div>
    )
}

export default New;