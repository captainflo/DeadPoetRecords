import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Music.css';

class Music extends React.Component {
  renderList = () => {
    return this.props.audio.map((sound, idx) => {
      return (
        <div key={idx} className="list-audio">
          <button
            className="btn-play"
            onClick={() => this.props.selectSound(idx)}
          >
            <i className="far fa-play-circle"></i>
          </button>
          <img className="cover-audio" src={sound.cover} alt="cover" />
          <div>
            {sound.name} <br></br>
            {sound.singer}
          </div>
          <div className="add-cart">
            <i className="fas fa-cart-arrow-down"></i>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h4>List of tracks</h4>
        {this.renderList()}
      </div>
    );
  }
}

export default connect(null, actions)(Music);
