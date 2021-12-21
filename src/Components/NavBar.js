import { Container, Navbar, Nav, Form } from "react-bootstrap";

import { LinkContainer } from 'react-router-bootstrap';

import LogoImage from '../img/RECTANGULO.png';

var BackgroundStyle = {
   backgroundImage: `url(${LogoImage})`
}

function NavBar(){
    return(
        <div style={BackgroundStyle}>
            <Navbar className="navbar-expand-md navbar-dark" bg="" expand="lg" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav
                            className="me-auto nav-links justify-content-beging"
                            style={{ width: "100%" }}>
                            <LinkContainer className="navbar-brand" to="/">
                                <Nav.Link>INICIO</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="navbar-brand" to="/Test">
                                <Nav.Link>¿QUIENES SOMOS?</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="navbar-brand" to="/Test">
                                <Nav.Link>SERVICIOS</Nav.Link>
                            </LinkContainer>
                            <LinkContainer className="navbar-brand" to="/Test">
                                <Nav.Link>CONTACTENOS</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav className="me-auto justify-content-end">
                            <Form className="navbar-form navbar-right">
                                <input className="form-control" placeholder="BUSCAR"/>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;