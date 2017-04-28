import React, { Component } from 'react';
import Button from 'material-ui/Button';

class Strategic extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setNextStep = this.setNextStep.bind(this);    
    this.setStrategicOportunity = this.setStrategicOportunity.bind(this);  
  }
  
  handleClick(e){
    this.setStrategicOportunity(e);
    this.setNextStep();
  }
  setStrategicOportunity(e){
    var strategic = e.target;
    var val = (strategic.getAttribute('data-strategic') === "true") || (strategic.parentNode.getAttribute("data-strategic") === "true");
    this.props.HandleStrategic(val);
  }
  setNextStep(){ 
      this.props.HandleStep(3);
  }   

  render() {
    return (
      <div className="App-content">
        <h1>Is the oportunity strategic?</h1>
        <Button raised primary data-strategic={true} className="btn" onTouchTap={this.handleClick}>Yes</Button>
        <Button raised primary data-strategic={false} className="btn" onTouchTap={this.handleClick}>No</Button>
      </div>
    );
  }
}

export default Strategic;