import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Icon from 'react-icon';

const Menu = React.createClass({
    render() {
        return (
            <Navbar inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">TimeSheet</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}>Cadastro de horas</NavItem>
                        <LinkContainer to="/produtos">
                            <NavItem eventKey={2}>Produtos</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/login">
                            <NavItem eventKey={1} href="#"><Icon glyph="start" />Login</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

});

export default Menu;
