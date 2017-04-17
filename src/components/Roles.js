import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Button from 'material-ui/Button';
import Layout from 'material-ui/Layout';
import Chip from 'material-ui/Chip';

class Roles extends Component {
  
  render() {
    var roles = [];
    var brandPersons = [];
    var technicalPersons = [];
    var brandList;

    const chipStyles = { display: 'inline-block', borderRadius: 0, margin: '0.5em', fontSize: '1em'}

    this.props.Department.forEach((department) => {
      roles.push(<Chip key={department} style={chipStyles} label={department + " " + this.props.Role} />);
    });
    
    /* Fill persons arrays that match */
    this.props.Persons.forEach((person) => {
      if ((this.props.Department.indexOf('Brand') !== -1) && (person.Department.indexOf('Brand') !== -1) && (person.Role === this.props.Role)) {
        brandPersons.push(
          <ListItem  gutter={0} key={person.Name}>
            <ListItemIcon>
               <Avatar className="big-avatar"><AccountCircle /></Avatar>
            </ListItemIcon>
            <ListItemText 
              primary={person.Name}
              secondary={person.Role}
            />
          </ListItem>
        );
      } else if ((this.props.Department.indexOf('Technical') !== -1) && (person.Department.indexOf('Technical') !== -1) && (person.Role === this.props.Role)) {
        technicalPersons.push(
          <ListItem key={person.Name}>
            <ListItemIcon>
               <Avatar className="big-avatar"><AccountCircle /></Avatar>
            </ListItemIcon>
            <ListItemText 
              primary={person.Name}
              secondary={person.Role}
            />
          </ListItem>
        );
      }
    });
    
    return (
      <div className="App-content Roles">
        <h1>The roles involved are:</h1>
        <Layout container justify="space-around" align="center" gutter={0}>
          <Layout item sm={10} xs={10} >
            {roles}
          </Layout>
        </Layout>  
        <h2>You should to consult to:</h2>
        <Layout container justify="center" gutter={0}>
          <Layout item sm={8} xs={11} >
            <List className="list">
              <ListSubheader>Technical persons</ListSubheader>
              {technicalPersons}
              {brandPersons.length > 0 ? (
                <div>
                  <Divider />
                  <ListSubheader>Brand persons</ListSubheader>
                  {brandPersons}
                </div>
              ) : '' }
            </List>
          </Layout>
        </Layout>
    
        <Link to="/"><Button raised primary className="btn">Back to Start</Button></Link>
      </div>
    );
  }
}

export default Roles;