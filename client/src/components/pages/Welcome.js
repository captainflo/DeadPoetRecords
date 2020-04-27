import React from 'react';
import '../css/Welcome.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FormSearch from '../utils/FormSearch';

class Welcome extends React.Component {
  componentDidMount() {
    this.props.getAllMusic();
  }
  render() {
    console.log(this.props.music);
    return (
      <div>
        <FormSearch />
      </div>
    );
  }
}
function mapStateToPros(state) {
  return {
    music: state.music.allMusic,
  };
}

export default connect(mapStateToPros, actions)(Welcome);
