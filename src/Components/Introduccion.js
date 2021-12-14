import GoldenLuxlogo from '../img/GOLDEN LUX 1.png'
import RealEstatelogo from '../img/GOLDEN LUX REAL ESTATE.png'
import HomeStanginglogo from '../img/HOME & OFFICE STANGING.png'
import InteriorDesinglogo from '../img/GOLDEN LUX INTERIOR DESING.png'
import RedesSocialeslogo from '../img/REDES SOCIALES.png'
import Rectangulo from '../img/RECTANGULO 2.png'

import { Col, Container, Row} from "react-bootstrap";

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

            <Row className="text-center mx-auto" style={{width: "30em"}}>
                <Col md="4">
                    <img src={RealEstatelogo} class="img-fluid" alt="Real state" width="150em" height="150em"/>
                </Col>

                <Col md="4">
                    <img src={HomeStanginglogo} class="img-fluid" alt="Home staging" width="150em" height="150em"/>
                </Col>

                <Col md="4">
                    <img src={InteriorDesinglogo} class="img-fluid" alt="Desing" width="150em" height="150em"/>
                </Col>
            </Row>

            <Row className="text-center mx-auto" style={{marginTop: "2em"}}>
                <div className="card-body" style={{backgroundColor: "transparent"}} width="150em" height="150em">
                    <img src={RedesSocialeslogo} alt="Redes sociales" width="150em" height="45em"/>
                </div>
                <img src={Rectangulo} className="img-fluid" alt="Rectangulo" width="150em" height="150em"/>
            </Row>
        </div>
    );
}

export default Introduccion;