import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';


class Complexity extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setNextStep = this.setNextStep.bind(this);        
    this.setComplexityLevel = this.setComplexityLevel.bind(this);  
  }

  handleClick(e){
    this.setComplexityLevel(e);
    this.setNextStep(); 
  }
  setNextStep(){
    this.props.HandleStep(5);
  }    
  setComplexityLevel(e){
    var complexityString = e.target.getAttribute('data-complexity');
    if (complexityString == null) {
      complexityString = e.target.parentNode.getAttribute('data-complexity');
    }
    this.props.HandleComplexity(this.getComplexityNumber(complexityString));  
  }
  getComplexityNumber(complexityString){
    if(complexityString === 'high'){
      return 2;
    } else if (complexityString === 'medium') {
      return 1;
    } else {
      return 0;
    }
  }

  render() {
    return (
      <div className="App-content">
        <h1>What is the complexity of the oportunity?</h1>
        <Layout container justify="center" align="stretch" gutter={0}>
          <Layout item sm={8} xs={10} >
            <Button raised primary data-complexity="high" className="btn full-width" onTouchTap={this.handleClick}>High</Button>
            <Button raised primary data-complexity="medium" className="btn full-width" onTouchTap={this.handleClick}>Medium</Button>
            <Button raised primary data-complexity="low" className="btn full-width" onTouchTap={this.handleClick}>Low</Button>
          </Layout>
        </Layout>  
      </div>
    );
  }
}

export default Complexity;