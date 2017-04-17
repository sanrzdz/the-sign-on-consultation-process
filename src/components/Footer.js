import React, { Component } from 'react';
import logo from '../img/sysdoc-logo.png';
import Layout from 'material-ui/Layout';

class Footer extends Component {
  render() {
    return (
      <Layout container justify="center" align="center" gutter={0} className="footer-wrapper">
        <Layout item sm={6} xs={10} >  
          <footer>
            <p>developed for <a target="_blank" href="http://www.sysdocgroup.com/" title="Go to Sysdoc website"><img className="logo-sysdoc" src={logo} /></a></p>
          </footer>
        </Layout>
      </Layout>
    );
  }
}

export default Footer;
			