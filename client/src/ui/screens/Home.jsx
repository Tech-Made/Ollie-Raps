import React from 'react';
import '../../styles/home.scss';
import Top from '../components/Home/Top';
import Tour from '../components/Home/Tour';
import Project from '../components/Home/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import TourBg from '../../assets/images/tourbg.jpg';
import MyTourBg from '../../assets/images/mytourbg.jpeg';

// import Modal from '@material-ui/core/Modal';
// import logofullwhite from '../../assets/logos/logo-black.svg';

const Home = () => {
  return (
    <div className='home'>
      <Top/>
      <Tour
        linkColor={'#D77E8B'}
        title='MAYBE WE WERE SUPPOSED TO TOUR'
        linkDisplay='ON PRESALE FOR SPOTIFY FANS.'
        url=''
        bg={MyTourBg}
      />
      <Project/>
      <Tour
        linkColor={'#6A8788'}
        title='Love Yourself Tour Tickets.'
        linkDisplay='OFFICIALPHORA.COM'
        url='https://officialphora.com/'
        bg={TourBg}
      />
    </div>
  );
}

export default Home;
