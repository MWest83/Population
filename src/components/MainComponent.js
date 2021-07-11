import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import MetroInfo from './MetroInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Topstate from './TopstateComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { metroArea } from '../shared/metroArea';
import { topState } from '../shared/topState';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metroArea: metroArea,
            topState: topState,
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
                <Route exact path='/topstate' render={() => <Topstate topState={this.state.topState} />} />
                <Redirect to='/home' />
              </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
