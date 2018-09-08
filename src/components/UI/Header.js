import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default class FlashCardMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <Navbar light expand="md">
        <NavbarBrand href="/#">Flash Cards</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="random">
                Random Card
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink disabled tag={Link} to="react">
                React Card
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Cards
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem disabled tag={Link} to="add">
                  Add
                </DropdownItem>
                <DropdownItem disabled tag={Link} to="modify">
                  Modify
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled tag={Link} to="delete">
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Settings
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem disabled tag={Link} to="">
                  Profile
                </DropdownItem>
                <DropdownItem tag={Link} to="about">
                  About
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem disabled>
                  Log out
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
