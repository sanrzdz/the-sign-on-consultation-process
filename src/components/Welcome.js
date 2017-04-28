import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';


class Welcome extends Component {
  constructor(props){
    super(props);

    this.setNextStep = this.setNextStep.bind(this);
  }

  setNextStep(){
    this.props.HandleStep(1);
  }

  render() {
    return (
      <div className="App-content">
      	<Layout container justify="space-around" align="center" gutter={0}>
          <Layout item sm={10} xs={10} >
		        <h1>Welcome to Sysdoc Consultation Process</h1>
		        <p>Answers the following questions to know who you should go to in the consulting process</p>
		        <Button raised primary className="btn" onTouchTap={this.setNextStep}>Start</Button>
          </Layout>
        </Layout>     
      </div>
    );
  }
}

export default Welcome;