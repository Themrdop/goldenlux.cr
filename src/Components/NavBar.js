import { Container, Navbar, Nav, Form } from "react-bootstrap";

import LogoImage from '../img/RECTANGULO.png';

var sectionStyle = {
   backgroundImage: `url(${LogoImage})`
}

function NavBar(){
    return(
        <div style={sectionStyle}>
            <Navbar className="navbar-expand-md navbar-dark" bg="" expand="lg" variant="dark">
            <Container className="container-fluid">
                <Navbar.Collapse collapseOnSelect>
                    <Nav
                        className="me-auto nav-links justify-content-beging"
                        style={{ width: "100%" }}>

                        <Nav.Link href="#" className="navbar-brand">INICIO</Nav.Link>
                        <Nav.Link href="#" className="navbar-brand">¿QUIENES SOMOS?</Nav.Link>
                        <Nav.Link href="#" className="navbar-brand">SERVICIOS</Nav.Link>
                        <Nav.Link href="#" className="navbar-brand">CONTACTÉNOS</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
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