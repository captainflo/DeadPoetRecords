import React from 'react';
import '../css/Welcome.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import CarouselWelcome from '../utils/CarouselWelcome';
import SoundBar from '../utils/SoundBar';
import M from 'materialize-css/dist/js/materialize.min.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
class Welcome extends React.Component {
  state = {
    audio: [],
  };
  componentDidMount() {
    this.props.getAllMusic();
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, { height: '200px' });
  }

  play = (music) => {
    this.setState({ audio: [music] });
  };

  render() {
    return (
      <div>
        <div className="box-welcome">
          <div className="banner-welcome">
            <div className="box-form-search-welcome">
              <img
                className="logo-brand"
                src={
                  process.env.PUBLIC_URL + '/images/DeadPoetRecords-logo.png'
                }
              />
            </div>
          </div>
          <div className="block-beats">
            <h2 className="center">Browse Luxury Catalogue</h2>
            <ScrollAnimation className="btn-beats center" animateIn="heartBeat">
              <Link style={{ color: 'black' }} to={'/music/list/All'}>
                Beats
              </Link>
            </ScrollAnimation>
            <h2 className="title-font center">
              Live Free, Travel the World, Create Art
            </h2>
            <h2 className="title-font center">-Deadpoet Records</h2>
          </div>
        </div>
        <hr></hr>
        {this.props.music ? (
          <CarouselWelcome music={this.props.music} play={this.play} />
        ) : (
          <div style={{ marginTop: '20px' }} className="center">
            <div class="preloader-wrapper big active">
              <div class="spinner-layer spinner-red-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div>
                <div class="gap-patch">
                  <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.audio.length !== 0 ? (
          <SoundBar audio={this.state.audio} />
        ) : (
          ''
        )}
      </div>
    );
  }
}
function mapStateToPros(state) {
  console.log(state);
  return {
    music: state.music.allMusic,
  };
}

export default connect(mapStateToPros, actions)(Welcome);
