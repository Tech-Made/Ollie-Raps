import React from 'react';
import '../../styles/home.scss';
import Top from '../components/Home/Top';
import Tour from '../components/Home/Tour';
import Project from '../components/Home/Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

// import Modal from '@material-ui/core/Modal';
// import logofullwhite from '../../assets/logos/logo-black.svg';

const Home = () => {
  return (
    <div className='home'>
      <Top/>
      <Tour/>
      <Project/>
    </div>
  );
}

export default Home;
