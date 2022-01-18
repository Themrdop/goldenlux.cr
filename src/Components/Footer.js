import RedesSocialeslogo from '../img/REDES SOCIALES.png'
import Rectangulo from '../img/RECTANGULO 2.png'
import cccbrLogo from '../img/cccbrlogo.png'
import realtorLogo from '../img/logo-realtor.png'

import {Col, Row} from "react-bootstrap";

function Footer(){
    return(
        <div>
            <Row className="text-center mx-auto" style={{marginTop: "2em"}}>
                <Col md="12" style={{backgroundColor: "transparent", marginBottom:"1em", marginRight:"-25em"}} >
                    <img src={RedesSocialeslogo} alt="Redes sociales" width="150em" height="45em" align="middle"/>
                </Col>
                <Col md="2" align="right">
                    <img src={cccbrLogo} alt="CCCBR" width="50em" height="50em" align="right" 
                             style={{backgroundColor:'white'}}/>
                    <img src={realtorLogo} alt="Realtor" width="50em" height="50em" align="right" 
                             style={{backgroundColor:'white'}}/>
                </Col>
            </Row>
            <Row>
                <img src={Rectangulo} className="img-fluid" alt="Rectangulo" width="150em" height="150em"/>
            </Row>
        </div>
    )
}

export default Footer;