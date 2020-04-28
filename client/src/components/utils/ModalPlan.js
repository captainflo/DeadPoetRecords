import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

class ModalPlan extends React.Component {
  componentDidMount() {
    var elemModal = document.querySelectorAll('.modal');
    M.Modal.init(elemModal, {});
  }
  render() {
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
                    <span className="white-text content-plan">
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively. I am similar to what is
                      called a panel in other frameworks.
                    </span>
                    <hr></hr>
                    <div className="btn-add center">Add Cart</div>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="card-panel black">
                    <h6 className="center">Basic $50</h6>
                    <hr></hr>
                    <span className="white-text content-plan">
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively. I am similar to what is
                      called a panel in other frameworks.
                    </span>
                    <hr></hr>
                    <div className="btn-add center">Add Cart</div>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="card-panel black">
                    <h6 className="center">Basic $100</h6>
                    <hr></hr>
                    <span className="white-text content-plan">
                      I am a very simple card. I am good at containing small
                      bits of information.
                    </span>
                    <hr></hr>
                    <div className="btn-add center">Add Cart</div>
                  </div>
                </div>
                <div className="col s12 m3">
                  <div className="card-panel black">
                    <h6 className="center">Basic $200</h6>
                    <hr></hr>
                    <span className="white-text content-plan">
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively. I am similar to what is
                      called a panel in other frameworks.
                    </span>
                    <hr></hr>
                    <div className="btn-add center">Add Cart</div>
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
