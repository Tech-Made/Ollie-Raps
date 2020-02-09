import React from 'react';
import HomeBg from '../../../assets/images/homebg.jpg';
import { Link } from 'react-router-dom';

const Top = () => {
    return (
        <div className='top-section'>
            <div className='top'>
                <p className='title'>Ollie</p>
                <p className='subtitle slogan'>More Than Music.</p>
            </div>
            <div className='top-sides'>
                <img className='homebg' src={HomeBg} alt='Ollie'/>
                <div className='menu'>
                <div className='menu-items'>
                    <Link to='/stream'>
                    <div className='hover-data'><p className='hover1 hover1-1 subtitle'>Stream</p></div>
                    </Link>
                    <a href='#tour'><div className='hover-data'><p className='hover1 hover1-1 subtitle'>Shows</p></div></a>
                    {/* <div className='hover-data'><p className='hover1 hover1-1 subtitle'>Merch</p></div> */}
                </div>
                </div>
            </div>
        </div>
    )
}


export default Top;
