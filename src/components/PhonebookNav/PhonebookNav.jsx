import { Nav, Navbar } from "react-bootstrap";
import './PhonebookNav.css'

function PhonebookNav(){
    return(
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">Phonebook-react-app</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">Login</Nav.Link>
                    <Nav.Link href="">Orders</Nav.Link>
                    <Nav.Link href="">Pricing</Nav.Link>
                    <Nav.Link href="">Update Profile</Nav.Link>
                    <Nav.Link href="">Reset Password</Nav.Link>
                    <Nav.Link href="">FAQ</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default PhonebookNav;