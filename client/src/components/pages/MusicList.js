import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Music.css';
import SoundBar from '../utils/SoundBar';

class MusicList extends React.Component {
  state = {
    image: '',
    publicId: '',
  };

  deleteSound = async () => {
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

  uploadAudio = () => {
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
    return (
      <div>
        <SoundBar />
        {this.uploadAudio()}
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
            <div className="delete-picture" onClick={this.deleteSound}>
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

export default connect(null, actions)(MusicList);
