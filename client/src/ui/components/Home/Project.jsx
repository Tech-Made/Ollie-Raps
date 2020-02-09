import React from 'react';
import EPBg from '../../../assets/images/epbg.jpg';

const Project = () => {
    return (
        <div className='item-cross-section flip-section'>
            <img className='tourbg' src={EPBg} alt='Twenty Four'/>
            <div className='info'>
                <div className='hover-data'>
                <p className='hover2 hover1-1 subtitle'>New EP Available Everywhere.</p>
                </div>
                <iframe
                    src="https://open.spotify.com/embed/album/3USUE5q6KICToSTyrepBen"
                    width="300"
                    height="380"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
                </iframe>
            </div>
        </div>
    )
}

export default Project;
