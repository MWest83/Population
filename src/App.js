import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { metroArea } from './shared/metroArea';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metroArea: metroArea
        };
    }
  render() {
      return (
          <div className="App">
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Victory</NavbarBrand>
              </div>
              </Navbar>
              <Directory metroArea={this.state.metroArea} />
          </div>
      );
  }
}

export default App;
