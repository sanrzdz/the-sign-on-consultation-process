import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';


class Complexity extends Component {
  constructor(props){
    super(props);
    this.setComplexityLevel = this.setComplexityLevel.bind(this);  
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
            <Link to="/roles-involved"><Button raised primary data-complexity="high" className="btn full-width" onTouchTap={this.setComplexityLevel}>High</Button></Link>
            <Link to="/roles-involved"><Button raised primary data-complexity="medium" className="btn full-width" onTouchTap={this.setComplexityLevel}>Medium</Button></Link>
            <Link to="/roles-involved"><Button raised primary data-complexity="low" className="btn full-width" onTouchTap={this.setComplexityLevel}>Low</Button></Link>
          </Layout>
        </Layout>  
      </div>
    );
  }
}

export default Complexity;