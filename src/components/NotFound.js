import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class Welcome extends Component {
  render() {
    return (
      <div className="App-content">
        <h1>The page you are looking for doesn't exist.<br /> Please go back to Start.</h1>
        <Link to="/"><Button raised primary className="btn">Start</Button></Link>
      </div>
    );
  }
}

export default Welcome;