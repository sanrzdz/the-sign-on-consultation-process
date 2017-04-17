import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class EndUser extends Component {
  constructor(props){
    super(props);
    this.setEndUserInvolved = this.setEndUserInvolved.bind(this);  
  }
  
  setEndUserInvolved(e){
    var enduser = e.target;
    var val = (enduser.getAttribute('data-enduser') === "true") || (enduser.parentNode.getAttribute("data-enduser") === "true");
    this.props.HandleEndUser(val);
  }

  render() {
    return (
      <div className="App-content">
        <h1>Is end user involved?</h1>
        <Link to="/is-strategic-oportunity"><Button raised primary data-enduser={true} className="btn" onTouchTap={this.setEndUserInvolved}>Yes</Button></Link>
        <Link to="/is-strategic-oportunity"><Button raised primary data-enduser={false} className="btn" onTouchTap={this.setEndUserInvolved}>No</Button></Link>
      </div>
    );
  }
}

export default EndUser;