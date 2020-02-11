import React, { useState } from 'react';
import '../../styles/stream.scss';
import art0 from '../../assets/images/epbg.jpg';
import art1 from '../../assets/images/stream/1.png';
import art101 from '../../assets/images/stream/1.2.png';
import art2 from '../../assets/images/stream/2.png';
import art3 from '../../assets/images/stream/3.png';
import art4 from '../../assets/images/stream/4.png';
import art5 from '../../assets/images/stream/5.png';
import art6 from '../../assets/images/stream/6.png';
import art7 from '../../assets/images/stream/7.png';
import art8 from '../../assets/images/stream/8.png';
import art9 from '../../assets/images/stream/9.png';
import art10 from '../../assets/images/stream/10.png';
import art11 from '../../assets/images/stream/11.png';
import spotify from '../../assets/images/buttons/spotify.png';
import apple from '../../assets/images/buttons/applemusic.png';
import soundcloud from '../../assets/images/buttons/soundcloud.png';
import youtube from '../../assets/images/buttons/youtube.png';
import close from '../../assets/images/close.png';
import { Link } from 'react-router-dom';
import { Modal } from '@material-ui/core';

const Stream = () => {
  const [data, setData] = useState({
    art: '',
    name: '',
    spotifyUrl: '',
    applemusicUrl: '',
    soundcloudUrl: '',
    youtubeUrl: '',
  });
  const [open, setOpen] = useState(false);

  const openDisplay = (song) => {
    setData(song);
    setOpen(true);
  }

  const res = [
    {
      art: art0,
      name: 'Twenty Four EP',
      spotifyUrl: 'https://open.spotify.com/album/3USUE5q6KICToSTyrepBen?si=sVan5XnEQ9mqChRDE3GJdg',
      applemusicUrl: 'https://music.apple.com/album/twenty-four-ep/1495088883?app=music',
      soundcloudUrl: 'https://soundcloud.com/olly-raps/sets/twenty-four-ep',
      youtubeUrl: 'https://youtu.be/ocTpDEcB5tg'
    },
    {
      art: art1,
      name: 'Broken Down',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art101,
      name: 'Stuck',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art2,
      name: 'Better Me',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art3,
      name: 'Leave Me Alone',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art4,
      name: 'Lost. EP',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art5,
      name: 'Love Sick',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art6,
      name: 'Need Someone',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art7,
      name: 'Better With You',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art8,
      name: 'Outsider',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art9,
      name: 'Casket',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art10,
      name: 'Almost',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    },
    {
      art: art11,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: ''
    }
  ]

  return (
    <>
      <div className='stream'>

        <div className='top'>
            <Link to='/'><p className='title'>Ollie</p></Link>
            <p className='subtitle slogan'>More Than Music.</p>
        </div>

        <div className='songs'>
          {
            res.slice(0, res.length -1).map((song, index) => {
              const _song = {
                art: res[index].art,
                name: res[index].name,
                spotifyUrl: res[index].spotifyUrl,
                applemusicUrl: res[index].applemusicUrl,
                soundcloudUrl: res[index].soundcloudUrl,
                youtubeUrl: res[index].youtubeUrl
              }
              const nextSong = {
                art: res[index+1].art,
                name: res[index+1].name,
                spotifyUrl: res[index+1].spotifyUrl,
                applemusicUrl: res[index+1].applemusicUrl,
                soundcloudUrl: res[index+1].soundcloudUrl,
                youtubeUrl: res[index+1].youtubeUrl
              }
              if (index % 2 !== 0) {
                return null;
              }
              return (
                <div className='song-container'>
                  <img onClick={
                    () => openDisplay(_song)}
                    className='left' src={song.art} alt={song.name}/>
                  <img
                    onClick={
                      () => openDisplay(nextSong)}
                    className='right' src={nextSong.art} alt={nextSong.name}
                  />
                </div>
              )
            })
          }
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        // className='display'
      >
        <>
        <img onClick={() => setOpen(false)} className='close' src={close} alt='X'/>
        <div className='display'>
          <div className='left'>
            <div className='hover-data'>
              <h1 className='hover1 hover1-1 subtitle'>{data.name}</h1>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href={data.spotifyUrl}>
                <img src={spotify} alt='spotify'/>
              </a>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href={data.applemusicUrl}>
                <img src={apple} alt='apple'/>
              </a>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href={data.soundcloudUrl}>
                <img className='hover1 hover1-1' src={soundcloud} alt='soundcloud'/>
              </a>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href={data.youtubeUrl}>
                <img className='hover1 hover1-1' src={youtube} alt='youtube'/>
              </a>
            </div>
          </div>
        <div onClick={() => {}} className='right'>
          <img className='artwork' src={data.art} alt='More Than Music'/>
        </div>
        </div>
        </>
      </Modal>

    </>
  );
}

export default Stream;
