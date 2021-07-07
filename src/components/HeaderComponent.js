import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div classname="col">
                                <h1>Top 10 most Populated</h1>
                                <h2>Most populated cities</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top">
                <div className="container">
                    <NavbarBrand href="/">Victory</NavbarBrand>
                </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;