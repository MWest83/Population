import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import MetroInfo from './MetroInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Topstate from './TopstateComponent';
import StateInfo from './StateInfoComponent';
import Zipcode from './ZipcodeComponent';
import ZipInfo from './ZipInfoComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { metroArea } from '../shared/metroArea';
import { topState } from '../shared/topState';
import { zip } from '../shared/zip.js';
import { suburb } from '../shared/suburb';
import { attraction } from '../shared/attraction';
import { county } from '../shared/county';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metroArea: metroArea,
            topState: topState,
            zip: zip,
            suburb: suburb,
            attraction: attraction,
            county: county,
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

    const StateWithId = ({match}) => {
         return(
            <StateInfo 
                top={this.state.topState.filter(top => top.id === 
                +match.params.topId)[0]}
                county={this.state.county.filter(county => county.topId ===
                +match.params.topId)}
            />
        );
    }

    const ZipWithId = ({match}) => {
        return(
           <ZipInfo 
               zip={this.state.zip.filter(zip => zip.id ===
               +match.params.topId)[0]}
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
                            <Route path='/topstate/:topId' component={StateWithId} />
                            <Route exact path='/zip' render={() => <Zipcode zip={this.state.zip} />} />
                            <Route path='/zip/:zipId' component={ZipWithId} />
                            <Redirect to='/home' />
                        </Switch>
              <Footer />
          </div>
      );
  }
}

export default Main;
