import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    return (
        <header>
            <Navbar bg={'dark'} variant={'dark'} expand={'lg'} collapseOnSelect>
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>220403</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
                    <Navbar.Collapse id={'basic-navbar-nav'}>
                        <Nav className={'ml-auto'}>
                            {userInfo
                             ? (
                                 <NavDropdown title={userInfo.name} id={'username'}>
                                     <LinkContainer to={'/mypage'}>
                                         <NavDropdown.Item>Profile</NavDropdown.Item>
                                     </LinkContainer>
                                     <NavDropdown.Item>
                                         Logout
                                     </NavDropdown.Item>
                                 </NavDropdown>
                                )
                             : (
                                 <>
                                    <LinkContainer to={'/login'}>
                                        <Nav.Link>
                                            Log In
                                        </Nav.Link>
                                    </LinkContainer>
                                <LinkContainer to={'/signup'}>
                                    <Nav.Link>
                                        Sign up
                                    </Nav.Link>
                                </LinkContainer>
                                 </>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;