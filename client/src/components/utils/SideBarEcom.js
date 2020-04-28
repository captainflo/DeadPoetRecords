import React from 'react';
import { connect } from 'react-redux';

class SidebarEcom extends React.Component {
  render() {
    return (
      <ul
        style={{ color: 'black' }}
        id="slide-ecom"
        className="sidenav sidenavEcom"
      >
        <li className="center">Shopping Cart</li>
        <li>
          <div className="divider"></div>
        </li>
        <div>
          <p>item: {this.props.quantity}</p>
          <p>Total: ${this.props.total}</p>
          <button>here</button>
        </div>
      </ul>
    );
  }
}

function mapStateToPros(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToPros)(SidebarEcom);
