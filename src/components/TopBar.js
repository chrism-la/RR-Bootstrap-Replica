import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavbarCollapse, Nav } from 'react-bootstrap';
import '../App.css';

function TopBar() {
    return (
        <div>
            <Navbar className="parent-div" bg="light" expand="lg">
                <div>
                    <Navbar.Brand style={{ margin: '5px 0 0 20px' }} href="#home">
                        <img src="instacart.png" width="300px" />
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <div className="second-nav-child">
                    <NavbarCollapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                            <Nav.Link href="#LogIn">Log In</Nav.Link>
                            <Button className="signup">Sign Up</Button>
                            {''}
                        </Nav>
                    </NavbarCollapse>
                </div>
            </Navbar>
        </div>
    );
}

export default TopBar;
