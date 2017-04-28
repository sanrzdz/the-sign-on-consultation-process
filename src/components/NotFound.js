import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Welcome extends Component {
  constructor(props){
    super(props);

    this.setNextStep = this.setNextStep.bind(this);
  }

  setNextStep(){
    this.props.HandleStep(0);
  }
  	
  render() {
    return (
      <div className="App-content">
        <h1>The page you are looking for doesn't exist.<br /> Please go back to Start.</h1>
        <Button raised primary className="btn" onTouchTap={this.setNextStep}>Start</Button>
      </div>
    );
  }
}

export default Welcome;