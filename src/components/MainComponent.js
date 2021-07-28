import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import MetroInfo from './MetroInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Topstate from './TopstateComponent';
import Zipcode from './ZipcodeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { metroArea } from '../shared/metroArea';
import { topState } from '../shared/topState';
import { zip } from '../shared/zip';
import { suburb } from '../shared/suburb';
import { attraction } from '../shared/attraction';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metroArea: metroArea,
            topState: topState,
            zip: zip,
            suburb: suburb,
            attraction: attraction,
        };
    }


  render() {

    const HomePage = () => {
        return (
            <Home 
                metroarea={this.state.metroArea.filter(metroarea => metroarea.featured)[0]}
                topstate={this.state.topState.filter(topstate => topstate.featured)[0]}
                zip={this.state.zip.filter(zip => zip.featured)[0]}
            />
        );
    }

    const MetroWithId = ({match}) => {
        return(
            
            <MetroInfo 
                metro={this.state.metroArea.filter(metro => metro.id === 
                +match.params.metroId)[0]} 
                suburb={this.state.suburb.filter(suburb => suburb.metroId === 
                +match.params.metroId)}
                attraction={this.state.attraction.filter(attraction => attraction.metroId ===
                +match.params.metroId)} 
            />
            
        );
    }


      return (
          <div>
              <Header />
                        <Switch>
                            <Route path='/home' component={HomePage} />
                            <Route exact path='/directory' render={() => <Directory metroArea={this.state.metroArea}/>} />
                            <Route path='/directory/:metroId' component={MetroWithId} />
                            <Route exact path='/topstate' render={() => <Topstate topState={this.state.topState} />} />
                            <Route exact path='/zip' render={() => <Zipcode zip={this.state.zip} />} />
                            <Redirect to='/home' />
                        </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
