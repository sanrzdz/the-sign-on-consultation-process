import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';


class Value extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.setNextStep = this.setNextStep.bind(this);    
    this.setValueLevel = this.setValueLevel.bind(this);  
  }

  handleClick(e){
    this.setValueLevel(e);
    this.setNextStep(); 
  }
  setNextStep(){
    this.props.HandleStep(4);
  }    
  setValueLevel(e){
    var levelString = e.target.getAttribute('data-level');
    if (levelString == null) {
      levelString = e.target.parentNode.getAttribute('data-level');
    }
    this.props.HandleValue(this.getLevelNumber(levelString));  
  }
  getLevelNumber(levelString){
    if(levelString === 'high'){
      return 2;
    } else if (levelString === 'medium') {
      return 1;
    } else {
      return 0;
    }
  }
  componentWillMount(){
    if (this.props.endUser == true && this.props.strategic == true) {
      this.props.HandleStep(5);
    } else {
      this.props.HandleStep(3);
    }
  }


  render() {
    return (
      <div className="App-content">
        <h1>What is the value of the oportunity?</h1>
        <Layout container justify="center" align="stretch" gutter={0}>
          <Layout item sm={8} xs={10} >
            <Button raised primary data-level="high" className="btn full-width" onTouchTap={this.handleClick}>High</Button>
            <Button raised primary data-level="medium" className="btn full-width" onTouchTap={this.handleClick}>Medium</Button>
            <Button raised primary data-level="low" className="btn full-width" onTouchTap={this.handleClick}>Low</Button>
          </Layout>
        </Layout>  
      </div>
    );
  }
}

export default Value;