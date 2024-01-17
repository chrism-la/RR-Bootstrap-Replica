import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavbarCollapse, Nav } from 'react-bootstrap';

function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{ margin: '5px 0 0 20px' }} href="#home">
                    <img src="instacart.png" width="300px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>
                        {''}
                    </Nav>
                </NavbarCollapse>
            </Navbar>
        </div>
    );
}

export default TopBar;
