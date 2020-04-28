import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class ModalPlan extends React.Component {
  componentDidMount() {
    var elemModal = document.querySelectorAll('.modal');
    M.Modal.init(elemModal, {});
  }
  render() {
    const audio = {
      name: this.props.name,
      singer: this.props.singer,
      cover: this.props.cover,
    };
    return (
      <div>
        <a
          className="modal-trigger btn-cart hoverable"
          href={`#${this.props.name}`}
        >
          <i className="fas fa-cart-arrow-down"></i>
        </a>

        <div id={this.props.name} className="modal">
          <div className="modal-content">
            <div>
              <h4 style={{ color: 'black' }} className="center">
                License: {this.props.name} - {this.props.singer}
              </h4>
              <div className="row">
                <div className="col s12 m3">
                  <div className="card-panel black">
                    <h6 className="center">Basic $25</h6>
                    <hr></hr>
                    <div className="white-text content-plan">
                      <p>MP3 + WAV</p>
                      <p>5,000 sales</p>
                      <p>50,000 streams</p>
                      <p>Non-exclusive (lease)</p>
                    </div>
                    <hr></hr>
                    <div
                      onClick={() => this.props.addItem(25, audio, 'Basic')}
                      className="btn-add center modal-close"
                    >
                      Add Cart
                    </div>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="card-panel black">
                    <h6 className="center">Premium $50</h6>
                    <hr></hr>
                    <div className="white-text content-plan">
                      <p>MP3 + WAV</p>
                      <p>10,000 sales</p>
                      <p>100,000 streams</p>
                      <p>Non-exclusive (lease)</p>
                    </div>
                    <hr></hr>
                    <div
                      onClick={() => this.props.addItem(50, audio, 'Premium')}
                      className="btn-add center modal-close"
                    >
                      Add Cart
                    </div>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="card-panel black">
                    <h6 className="center">Trackout $100</h6>
                    <hr></hr>
                    <div className="white-text content-plan">
                      <p>MP3 + WAV + Trackout</p>
                      <p>Unlimited sales</p>
                      <p>Unlimited sales</p>
                      <p>Non-exclusive (lease)</p>
                    </div>
                    <hr></hr>
                    <div
                      onClick={() => this.props.addItem(100, audio, 'Trackout')}
                      className="btn-add center modal-close"
                    >
                      Add Cart
                    </div>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="card-panel black">
                    <h6 className="center">Exclusive $200</h6>
                    <hr></hr>
                    <div className="white-text content-plan">
                      <p>MP3 + WAV + Trackout</p>
                      <p>Unlimited sales</p>
                      <p>Unlimited sales</p>
                      <p>Full ownership</p>
                    </div>
                    <hr></hr>
                    <div
                      onClick={() =>
                        this.props.addItem(200, audio, 'Exclusive')
                      }
                      className="btn-add center modal-close "
                    >
                      Add Cart
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalPlan;
