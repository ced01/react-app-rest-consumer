import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class AppNavbar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {isOpen : false};
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
        <Navbar color="dark" dark expand="md">
            <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
            <NavbarBrand tag={Link} to="/groups">Groups</NavbarBrand>
            <NavbarBrand tag={Link} to="/charts">Charts</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                
                </Nav>
            </Collapse>
        </Navbar>
        );
      }
}