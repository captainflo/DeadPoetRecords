import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import Payments from './Payments';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router-dom';

class ModalAgreement extends React.Component {
  state = {
    agree: false,
  };
  componentDidMount() {
    var elemModal = document.querySelectorAll('.modal');
    M.Modal.init(elemModal, {});
  }

  agree = () => {
    this.setState({ agree: true });
  };

  render() {
    return (
      <div id="modalPayment" className="modal">
        <div style={{ color: 'black' }} className="modal-content">
          {this.props.auth ? (
            <div>
              <h5 className="center">Agreement License</h5>
              <p>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              {this.state.agree ? (
                <Payments
                  total={this.props.total}
                  paymentSucces={this.props.paymentSucces}
                />
              ) : (
                <div className="center">
                  <div
                    style={{ margin: '10px' }}
                    onClick={() => this.agree()}
                    className="btn"
                  >
                    I Agree
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="center">
              <h5>You must Log in before Checkout</h5>
              <br></br>
              <br></br>
              <Link to="/signin" className="btn-signin-cart modal-close">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}
export default connect(mapStateToProps, actions)(ModalAgreement);
