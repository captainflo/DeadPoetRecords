import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import ReactJkMusicPlayer from 'react-jinke-music-player';
import '../css/SoundBar.css';

const audioList1 = [
  {
    name: 'Ufo beat',
    singer: 'Fumnanya',
    cover: '//cdn.lijinke.cn/nande.jpg',
    musicSrc:
      'https://res.cloudinary.com/dxeiiwxha/video/upload/v1587734345/audio/kzeffgwliqlcgmil26eg.m4a',
  },
  {
    name: 'Despacito',
    singer: 'Luis Fonsi',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
  },
  {
    name: 'Bedtime Stories',
    singer: 'Jay Chou',
    cover:
      'http://res.cloudinary.com/alick/image/upload/v1502375978/bedtime_stories_bywggz.jpg',
    musicSrc:
      'http://res.cloudinary.com/alick/video/upload/v1502375674/Bedtime_Stories.mp3',
  },
];

class SoundBar extends React.Component {
  constructor() {
    super();
    this.audioInstance = null;
  }
  render() {
    return (
      <>
        <ReactJkMusicPlayer
          autoPlay={false}
          playIndex={0}
          audioLists={audioList1}
          showDownload={false}
          showReload={false}
          mode={'full'}
          getAudioInstance={(instance) => (this.audioInstance = instance)}
        />
      </>
    );
  }
}

export default connect(null, actions)(SoundBar);
