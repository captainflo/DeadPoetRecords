import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import '../css/Music.css';
import SoundBar from '../utils/SoundBar';

class Music extends React.Component {
  render() {
    return (
      <div>
        <h3>Hello</h3>
        <SoundBar />
      </div>
    );
  }
}

export default connect(null, actions)(Music);
