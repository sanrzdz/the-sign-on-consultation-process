import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
      endUser: false,
      strategic: false,
      value: 0,
      complexity: 0,
    };

    this.handleEndUserInvolved      = this.handleEndUserInvolved.bind(this);    
    this.handleStrategicOportunity  = this.handleStrategicOportunity.bind(this);    
    this.handleValueLevel           = this.handleValueLevel.bind(this);    
    this.handleComplexityLevel      = this.handleComplexityLevel.bind(this);    
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

    return (
      <MuiThemeProvider>
        <Layout container justify="center" align="stretch" gutter={0}>
          <Layout item sm={6} xs={12} >
            <Paper className="paper-wrapper">
              <div className="App">
                <Header />
                <Router>
                  <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/end-user-involved" render={ () =>
                      <EndUser HandleEndUser={this.handleEndUserInvolved} />
                    } />
                    <Route path="/is-strategic-oportunity" render={ () =>
                      <Strategic HandleStrategic={this.handleStrategicOportunity} />
                    } />  
                    <Route path="/value-level" render={ () =>
                      <Value HandleValue={this.handleValueLevel} />
                    } />  
                    <Route path="/complexity-level" render={ () =>
                      <Complexity HandleComplexity={this.handleComplexityLevel} />
                    } />  
                    <Route path="/roles-involved" render={ () =>
                      <Roles Role={this.getRoleInvolved()} Department={this.getDepartmentsInvolved()} Persons={PERSONS} />
                    } />  
                    <Route path="/*" component={NotFound} />
                  </Switch>  
                </Router>
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
