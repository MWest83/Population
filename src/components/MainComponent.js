import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import MetroInfo from './MetroInfoComponent';
import { metroArea } from '../shared/metroArea';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metroArea: metroArea,
            selectedMetro: null
        };
    }


    onMetroSelect(metroId) {
        this.setState({selectedMetro: metroId});
    }

  render() {
      return (
          <div>
              <Navbar dark color="primary">
              <div className="container">
                  <NavbarBrand href="/">Victory</NavbarBrand>
              </div>
              </Navbar>
              <Directory metroArea={this.state.metroArea} onClick={(metroId) => this.onMetroSelect(metroId)} />
              <MetroInfo metro={this.state.metroArea.filter(metro => metro.id === this.state.selectedMetro)[0]} />
          </div>
      );
  }
}

export default Main;
