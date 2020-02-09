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

  // const [ section, setSection ] = useState('#tour');
  return (
    <div className='home'>
      {/* <div className='arrow-container'>
        <a
          className='homeArrow'
          rel='noopener noreferrer'
          href={section}>
          <FontAwesomeIcon
              icon={faChevronDown}
              size="2x"
          />
        </a>
      </div> */}
      <Top/>
      <Tour/>
      <Project/>
    </div>
  );
}

export default Home;
