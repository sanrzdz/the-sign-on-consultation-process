import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';

class Header extends Component {
  render() {
    return (
      <AppBar className="appBar-style">
        <Toolbar>
          <Text type="title" colorInherit>The Sign On Consultation Process</Text>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
			