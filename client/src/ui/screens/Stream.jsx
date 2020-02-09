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
      name: 'Broken Down',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art1,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art101,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art2,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art3,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art4,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art5,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art6,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art7,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art8,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art9,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art10,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
    {
      art: art11,
      name: 'song',
      spotifyUrl: '',
      applemusicUrl: '',
      soundcloudUrl: '',
      youtubeUrl: '',
    },
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
            res.slice(0, res.length - 2).map((song, index) => {
              const _song = {
                art: song.art,
                name: song.name,
                spotifyUrl: song.spotifyUrl,
                applemusicUrl: song.applemusicUrl,
                soundcloudUrl: song.soundcloudUrl,
                youtubeUrl: song.youtubeUrl
              }
              const nextSong = {
                art: res[index+1].art,
                name: res[index+1].name,
                spotifyUrl: res[index+1].spotifyUrl,
                applemusicUrl: res[index+1].applemusicUrl,
                soundcloudUrl: res[index+1].soundcloudUrl,
                youtubeUrl: res[index+1].youtubeUrl
              }

              return (
                <div className='song-container'>
                  <img onClick={
                    () => openDisplay(_song)}
                    className='left' src={song.art} alt={song.name}/>
                  <img
                    onClick={
                      () => openDisplay(nextSong)}
                    className='right' src={res[index+1].art} alt={res[index+1].name}
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
        className='display'
      >
        <>
        <img onClick={() => setOpen(false)} className='close' src={close} alt='X'/>
          <div className='left'>
            <div className='hover-data'>
              <h1 className='hover1 hover1-1 subtitle'>{data.name}</h1>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href='https://spotify.com'>
                <img src={spotify} alt='spotify'/>
              </a>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href='https://youtube.com'>
                <img src={apple} alt='apple'/>
              </a>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href='https://youtube.com'>
                <img className='hover1 hover1-1' src={soundcloud} alt='soundcloud'/>
              </a>
            </div>
            <div className='hover-data'>
              <a className='hover1 hover1-1' href='https://youtube.com'>
                <img className='hover1 hover1-1' src={youtube} alt='youtube'/>
              </a>
            </div>
          </div>
        <div onClick={() => {}} className='right'>
          <img className='artwork' src={data.art} alt='More Than Music'/>
        </div>
        </>
      </Modal>

    </>
  );
}

export default Stream;
