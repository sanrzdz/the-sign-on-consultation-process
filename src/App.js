import React, { Component } from 'react';

/* COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import EndUser from './components/EndUser';
import Strategic from './components/Strategic';
import Value from './components/Value';
import Complexity from './components/Complexity';
import Roles from './components/Roles';
import NotFound from './components/NotFound';

/* DATA */
import persons from './data/persons.json';
import matrix from './data/matrix.json';


/* STYLES */
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';


import './css/App.css';

injectTapEventPlugin();

var PERSONS = persons;
var MATRIX = matrix;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 0,
      endUser: false,
      strategic: false,
      value: 0,
      complexity: 0,
    };

    this.handleStep                 = this.handleStep.bind(this);    
    this.handleEndUserInvolved      = this.handleEndUserInvolved.bind(this);    
    this.handleStrategicOportunity  = this.handleStrategicOportunity.bind(this);    
    this.handleValueLevel           = this.handleValueLevel.bind(this);    
    this.handleComplexityLevel      = this.handleComplexityLevel.bind(this);    
  }


  handleStep(NextStep){
    this.setState({
      step: NextStep
    });
  }
  handleEndUserInvolved(EndUserInvolved){
    this.setState({
      endUser: EndUserInvolved
    });
  }
  handleStrategicOportunity(StrategicOportunity){
    this.setState({
      strategic: StrategicOportunity
    });
  }
  handleValueLevel(ValueLevel){
    this.setState({
      value: ValueLevel
    });
  }
  handleComplexityLevel(ComplexityLevel){
    this.setState({
      complexity: ComplexityLevel
    });
  }
  
  

  getDepartmentsInvolved(){
    var departments = ["Technical"];
    (this.state.endUser === true) ? departments.push("Brand") : '';
    
    return departments;
  }

  getRoleInvolved(){
    if(this.state.strategic === true) {
      return "Head";
    }

    return MATRIX[this.state.value][this.state.complexity];
  }
  
  render() {
    const appBarStyle = { position: 'relative', textAlign: 'center' };
    var content
    switch (this.state.step) {
      case 0:
        content = <Welcome HandleStep={this.handleStep} />
        break;
      case 1:
        content = <EndUser HandleStep={this.handleStep} HandleEndUser={this.handleEndUserInvolved} />
        break;
      case 2:
        content = <Strategic HandleStep={this.handleStep} HandleStrategic={this.handleStrategicOportunity} endUser={this.state.endUser} strategic={this.state.strategic}/>
        break;
      case 3:
        content = <Value HandleStep={this.handleStep} HandleValue={this.handleValueLevel} endUser={this.state.endUser} strategic={this.state.strategic} />
        break;
      case 4:
        content = <Complexity HandleStep={this.handleStep} HandleComplexity={this.handleComplexityLevel} />
        break;   
      case 5:
        content = <Roles HandleStep={this.handleStep} Role={this.getRoleInvolved()} Department={this.getDepartmentsInvolved()} Persons={PERSONS} />
        break;                                                                                                       
      default:
        content = <NotFound />                    
        break;
    }         

    return (
      <MuiThemeProvider>
        <Layout container justify="center" align="stretch" gutter={0}>
          <Layout item sm={6} xs={12} >
            <Paper className="paper-wrapper">
              <div className="App">
                <Header />
                {content}                           
                <Footer />
              </div>  
            </Paper>
          </Layout>
        </Layout>
      </MuiThemeProvider>
    );
  }
}

export default App;
