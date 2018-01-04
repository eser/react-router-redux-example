import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { changeLanguage } from './actions';

import logo from './logo.svg';
import './Layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <header className="Layout-header">
          <img src={logo} className="Layout-logo" alt="logo" />
          <h1 className="Layout-title">Welcome to React</h1>
          <nav className="Layout-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <p className="Layout-intro">
          {this.props.children}

          <br />
          <br />
          <br />

          Language: {this.props.currentLanguage}
        </p>
      </div>
    );
  }
}

export default connect(
  state => ({ currentLanguage: state.layout.language }),
  {
    changeLanguage,
  }
)(Layout);
