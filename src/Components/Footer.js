import RedesSocialeslogo from '../img/REDES SOCIALES.png'
import Rectangulo from '../img/RECTANGULO 2.png'
import cccbrLogo from '../img/cccbrlogo.png'
import realtorLogo from '../img/logo-realtor.png'

import {Col, Row} from "react-bootstrap";

function Footer(){
    return(
        <div>
            <Row className="text-center mx-auto" style={{marginTop: "2em"}}>
                <Col md="12" style={{backgroundColor: "transparent", marginBottom:"1em"}} >
                    <img src={RedesSocialeslogo} alt="Redes sociales" width="150em" height="45em"/>
                    <img src={cccbrLogo} alt="CCCBR" width="50em" height="50em" 
                             style={{position: "absolute", left: "90%", top: "auto", zindex: "-1", backgroundColor:'white', marginLeft:'1em'}}/>
                    <img src={realtorLogo} alt="Realtor" width="50em" height="50em"
                             style={{position: "absolute", left: "85%", top: "auto", zindex: "-1", backgroundColor:'white'}}/>
                </Col>
                <img src={Rectangulo} className="img-fluid" alt="Rectangulo" width="150em" height="150em"/>
            </Row>
        </div>
    )
}

export default Footer;