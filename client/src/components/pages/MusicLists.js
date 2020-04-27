import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Music.css';

const audio = new Audio(
  'https://res.cloudinary.com/dxeiiwxha/video/upload/v1587734345/audio/kzeffgwliqlcgmil26eg.m4a'
);

const time = audio.duration;

class Music extends React.Component {
  state = {
    image: '',
    publicId: '',
    Sound: '',
  };

  playAudio = () => {
    audio.play();
  };

  pauseAudio = () => {
    audio.pause();
  };

  stopAudio = () => {
    audio.pause();
    audio.currentTime = 0;
  };

  durationAudio = () => {
    console.log(audio.duration);
  };

  deletePhoto = async () => {
    const sound = {
      audio: this.state.publicId,
    };
    this.props.deleteAudio(sound);
    this.setState({ image: '' });
  };

  uploadWidgetAudio = () => {
    const image = process.env.PUBLIC_URL + '/images/icon-sound.png';
    window.cloudinary.openUploadWidget(
      { cloud_name: 'dxeiiwxha', upload_preset: 'mqdda5jq', tags: ['m4a'] },
      (error, result) => {
        if (result) {
          console.log(result[0]);
          this.setState({ image: image });
          this.setState({ publicId: result[0].public_id });
        }
      }
    );
  };

  downloadAudio = () => {
    return (
      <div>
        <p
          onClick={this.uploadWidgetAudio.bind(this)}
          className="upload-button"
        >
          <i className="fas fa-headphones-alt"></i>
        </p>
      </div>
    );
  };

  render() {
    console.log(time);
    return (
      <div>
        <div className="box-play" onClick={this.playAudio}>
          <i className="far fa-play-circle"></i>
        </div>
        <div className="box-play" onClick={this.pauseAudio}>
          <i className="far fa-pause-circle"></i>
        </div>
        <div className="box-play" onClick={this.stopAudio}>
          <i className="far fa-stop-circle"></i>
        </div>
        <div onClick={this.durationAudio}>here</div>

        {this.downloadAudio()}
        <a
          href={`https://res.cloudinary.com/dxeiiwxha/video/upload/fl_attachment/v1587734345/audio/kzeffgwliqlcgmil26eg`}
        >
          <img
            src={process.env.PUBLIC_URL + '/images/icon-sound.png'}
            alt="W3Schools"
            width="104"
            height="142"
          />
        </a>

        {this.state.image ? (
          <div>
            <div className="delete-picture" onClick={this.deletePhoto}>
              <i className="far fa-times-circle"></i>
            </div>
            <img className="photo-show" src={this.state.image} alt="avatar" />
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default connect(null, actions)(Music);
