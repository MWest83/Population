import React, {Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

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
                <Navbar dark sticky="top" expand="md">
                <div className="container">
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/peoplelogo.jpg" 
                    height="30" width="30" alt="Population Logo" /></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink classname="nav=link" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink classname="nav=link" to="/directory">
                                    <i className="fa fa-list fa-lg" /> 10 Most Populated Cites
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink classname="nav=link" to="/topstate">
                                    <i className="fa fa-info fa-lg" />10 Most Populated States 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink classname="nav=link" to="/zip">
                                    <i className="fa fa-address-card fa-lg" /> 10 Most Populated Zip Codes
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;