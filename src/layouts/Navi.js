import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navi() {

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#">
                    <AiFillGithub style={{ marginLeft: "1rem" }} />GitHub Finder
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav >
            </Container>
        </Navbar>
    )

}
export default Navi;