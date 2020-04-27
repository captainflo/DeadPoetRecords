import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from './actions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Header from './utils/Header';
import Welcome from './pages/Welcome';
import Footer from './utils/Footer';

import Signout from './auth/Signout';
import Signin from './auth/Signin';
import Signup from './auth/Signup';
import UserShow from './user/UserShow';
import UserEdit from './user/UserEdit';
import Music from './pages/Music';
import RegisterMusic from './pages/RegisterMusic';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
    // Sidebar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/signout" component={Signout} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/music" component={Music} />

          {this.props.authenticated ? (
            <div>
              <Route exact path="/user/:id" component={UserShow} />
              <Route exact path="/user/edit/:id" component={UserEdit} />
              <Route exact path="/register/music" component={RegisterMusic} />
            </div>
          ) : (
            ''
          )}
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToPros(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToPros, actions)(App);
