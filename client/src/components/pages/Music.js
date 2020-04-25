import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Music.css';

class Music extends React.Component {
  state = {
    image: '',
    publicId: '',
    play: '',
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

  playAudio = () => {
    this.setState({
      play:
        'https://res.cloudinary.com/dxeiiwxha/video/upload/v1587734345/audio/kzeffgwliqlcgmil26eg.m4a',
    });
  };

  stopAudio = () => {
    console.log('hello');
  };

  render() {
    return (
      <div>
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
        <audio src={this.state.play} controls></audio>

        <div className="box-play" onClick={this.playAudio}>
          <i className="far fa-play-circle"></i>
        </div>
        <div className="box-play" onClick={this.stopAudio}>
          <i className="far fa-pause-circle"></i>
        </div>

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
