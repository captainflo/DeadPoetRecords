import React from 'react';
import '../App.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col m3"></div>
            <div className="col m2 center">
              <div className="img-ico center">
                <a
                  style={{ color: 'white' }}
                  href="https://www.instagram.com/deadpoet.records"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col m2">
              <div className="img-ico center">
                <a
                  style={{ color: 'white' }}
                  href="https://soundcloud.com/poetwave"
                  target="_blank"
                >
                  <i className="fab fa-soundcloud"></i>
                </a>
              </div>
            </div>
            <div className="col m2">
              <div className="img-ico center">
                <a
                  style={{ color: 'white' }}
                  href="https://www.youtube.com/channel/UCZVfddNZfDvwiHObzXyrj4A"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col m3"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
