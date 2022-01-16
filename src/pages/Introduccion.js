import GoldenLuxlogo from '../img/GOLDEN LUX 1.png'
import RealEstatelogo from '../img/GOLDEN LUX REAL ESTATE.png'
import HomeStanginglogo from '../img/HOME & OFFICE STANGING.png'
import InteriorDesinglogo from '../img/GOLDEN LUX INTERIOR DESING.png'

import { Col, Container, Row} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

function Introduccion(){
    return(
        <div>
            <Container style={{marginTop: "2em"}}>
                <div className="d-flex bd-highlight">
                    <div className="text-center p-2 w-100 bd-highlight">
                        <img src={GoldenLuxlogo} class="img-fluid" alt="Golden Lux" width="350em" height="350em"/>
                    </div>
                </div>
            </Container>

            <Container>
                <Row className="text-center mx-auto">
                    <Col md="4" style={{marginBottom:"1em"}}>
                        <LinkContainer to="/test">
                            <img id='RealEstatelogo' src={RealEstatelogo} class="img-fluid" alt="Real state" width="150em" height="150em"/>
                        </LinkContainer>
                    </Col>

                    <Col md="4" style={{marginBottom:"1em"}}>
                        <LinkContainer to="/test">
                            <img id='HomeStanginglogo' src={HomeStanginglogo} class="img-fluid" alt="Home staging" width="150em" height="150em"/>
                        </LinkContainer>
                    </Col>

                    <Col md="4">
                        <LinkContainer to="/test">
                            <img id='InteriorDesinglogo' src={InteriorDesinglogo} class="img-fluid" alt="Desing" width="150em" height="150em"/>
                        </LinkContainer>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Introduccion;