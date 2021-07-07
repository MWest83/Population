import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import MetroInfo from './MetroInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { metroArea } from '../shared/metroArea';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metroArea: metroArea,
        };
    }


  render() {

    const HomePage = () => {
        return (
            <Home />
        );
    }
      return (
          <div>
              <Header />
              <Switch>
                  <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory metroArea={this.state.metroArea}/>} />
                <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
