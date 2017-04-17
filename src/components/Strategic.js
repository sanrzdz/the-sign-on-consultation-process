import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';

class Strategic extends Component {
  constructor(props){
    super(props);
    this.setStrategicOportunity = this.setStrategicOportunity.bind(this);  
  }
  
  setStrategicOportunity(e){
    var strategic = e.target;
    var val = (strategic.getAttribute('data-strategic') === "true") || (strategic.parentNode.getAttribute("data-strategic") === "true");
    this.props.HandleStrategic(val);
  }

  render() {
    return (
      <div className="App-content">
        <h1>Is the oportunity strategic?</h1>
        <Link to="/the-sign-on-consultation-process/roles-involved"><Button raised primary data-strategic={true} className="btn" onTouchTap={this.setStrategicOportunity}>Yes</Button></Link>
        <Link to="/the-sign-on-consultation-process/value-level"><Button raised primary data-strategic={false} className="btn" onTouchTap={this.setStrategicOportunity}>No</Button></Link>
      </div>
    );
  }
}

export default Strategic;