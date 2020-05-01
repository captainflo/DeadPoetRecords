import React from 'react';
import '../css/Welcome.css';
import { connect } from 'react-redux';
import * as actions from '../actions';
import FormSearch from '../utils/FormSearch';
import M from 'materialize-css/dist/js/materialize.min.js';

class Welcome extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
    this.props.getAllMusic();
  }

  cover = () => {
    if (this.props.music.length >= 3) {
      return this.props.music((sound) => {
        return <div>{sound.cover}</div>;
      });
    } else {
      return <div>hello</div>;
    }
  };

  render() {
    return (
      <div>
        <div className="banner-welcome">
          <h4 className="center">Download the beat of DJ FUMFUM</h4>
          <div className="box-form-search-welcome">
            <FormSearch />
          </div>
        </div>
        {/* {this.cover()} */}
        <div class="carousel">
          <a class="carousel-item" href="#one!">
            <img src="https://res.cloudinary.com/dxeiiwxha/image/upload/v1588004433/cover/formn7q6tebwbizxudja.jpg" />
          </a>
          <a class="carousel-item" href="#one!">
            <img src="https://res.cloudinary.com/dxeiiwxha/image/upload/v1588020965/cover/wrdu0tkwelxpi64xbkab.png" />
          </a>
          <a class="carousel-item" href="#one!">
            <img src="https://res.cloudinary.com/dxeiiwxha/image/upload/v1588003389/cover/jeeoanl6qitnph2svbf7.jpg" />
          </a>
        </div>
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
