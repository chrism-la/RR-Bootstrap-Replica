import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavbarCollapse, Nav } from 'react-bootstrap';

function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle></Navbar.Toggle>
                <NavbarCollapse>
                    <Nav></Nav>
                    <Nav>
                        <Nav.Link>Log In</Nav.Link>
                        <Button>Sign Up</Button>
                    </Nav>
                </NavbarCollapse>
            </Navbar>
            ;
        </div>
    );
}

export default TopBar;
