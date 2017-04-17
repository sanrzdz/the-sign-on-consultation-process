import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';


class Welcome extends Component {
  render() {
    return (
      <div className="App-content">
        <h1>Welcome to Sysdoc Consultation Process</h1>
        <Link to="/end-user-involved"><Button raised primary className="btn">Start</Button></Link>
      </div>
    );
  }
}

export default Welcome;