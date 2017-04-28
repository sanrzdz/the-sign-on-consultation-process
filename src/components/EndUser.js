import React, { Component } from 'react';
import Button from 'material-ui/Button';

class EndUser extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setNextStep = this.setNextStep.bind(this);
    this.setEndUserInvolved = this.setEndUserInvolved.bind(this);  
  }

  handleClick(e){
    this.setEndUserInvolved(e);
    this.setNextStep(); 
  }
  setNextStep(){
    this.props.HandleStep(2);
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
        <Button raised primary data-enduser={true} className="btn" onTouchTap={this.handleClick}>Yes</Button>
        <Button raised primary data-enduser={false} className="btn" onTouchTap={this.handleClick}>No</Button>
      </div>
    );
  }
}

export default EndUser;