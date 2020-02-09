import React from 'react';
import TourBg from '../../../assets/images/tourbg.jpg';

const Tour = () => {
    return (
        <div id='tour' className='item-cross-section'>
            <div className='info'>
                <p className='subtitle'>Love Yourself Tour Tickets.</p>
                <a className='tourlink' target='_blank' href='https://officialphora.com/'>OFFICIALPHORA.COM</a>
            </div>
            <img className='tourbg' src={TourBg} alt='Tour Flier'/>
        </div>
    )
}

export default Tour;
