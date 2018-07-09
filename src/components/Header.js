import React from 'react';

import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';



class Header extends React.Component {

  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }


    renderLinks() {
        if (this.props.authenticated) {
            return (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/signout">Sign Out</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/feature">Feature</NavLink>
                </NavItem>
              </Nav>
            );
        }
        return (
          <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href ="/signup">Sign Up</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href ="/signin">Sign In</NavLink>
            </NavItem>
          </Nav>
        );
    }
    render() {
        return (
         
          <div>
                  <Navbar color="primary" dark expand="md">
                    <NavbarBrand href="/">Condominio</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                     


                        {this.renderLinks()}


                     
                    </Collapse>
                  </Navbar>
                </div>




        );
    }
}
const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
};
export default connect(mapStateToProps, null)(Header);
