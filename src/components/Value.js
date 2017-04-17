import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';


class Value extends Component {
  constructor(props){
    super(props);
    this.setValueLevel = this.setValueLevel.bind(this);  
  }

  setValueLevel(e){
    var levelString = e.target.getAttribute('data-level');
    if (levelString == null) {
      levelString = e.target.parentNode.getAttribute('data-level');
    }
    console.log(levelString);
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

  render() {
    return (
      <div className="App-content">
        <h1>What is the value of the oportunity?</h1>
        <Layout container justify="center" align="stretch" gutter={0}>
          <Layout item sm={8} xs={10} >
            <Link to="/the-sign-on-consultation-process/complexity-level"><Button raised primary data-level="high" className="btn full-width" onTouchTap={this.setValueLevel}>High</Button></Link>
            <Link to="/the-sign-on-consultation-process/complexity-level"><Button raised primary data-level="medium" className="btn full-width" onTouchTap={this.setValueLevel}>Medium</Button></Link>
            <Link to="/the-sign-on-consultation-process/complexity-level"><Button raised primary data-level="low" className="btn full-width" onTouchTap={this.setValueLevel}>Low</Button></Link>
          </Layout>
        </Layout>  
      </div>
    );
  }
}

export default Value;