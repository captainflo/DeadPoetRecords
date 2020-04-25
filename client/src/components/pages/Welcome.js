import React from 'react';
import '../css/Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + '/images/soundWaves.gif'}
          alt="gif"
        />
      </div>
    );
  }
}

export default Welcome;
