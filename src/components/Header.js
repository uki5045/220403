import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../action/userActions";

const Header = () => {

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin
    console.log(userInfo)


    return (
        <header>
            <Navbar bg={'dark'} variant={'dark'} expand={'lg'} collapseOnSelect>
                <Container>
                    <LinkContainer to={'/'}>
                        <Navbar.Brand>220403</Navbar.Brand>
                    </LinkContainer>
                    <Nav>
                        <LinkContainer to={'/login'}>
                            <Nav.Link>
                                지역별
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/signup'}>
                            <Nav.Link>
                                업종별
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
                    <Navbar.Collapse id={'basic-navbar-nav'}>
                        <Nav className={'ml-auto'}>

                            {userInfo && userInfo.role === "admin" && (
                                <NavDropdown title={'admin'} id={'adminmenu'}>
                                    <LinkContainer to={'/products'}>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to={'/users'}>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                            )}
                            {userInfo
                                ? (
                                    <NavDropdown title={userInfo.name} id={'username'}>
                                        <LinkContainer to={'/mypage'}>
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>
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