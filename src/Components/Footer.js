import RedesSocialeslogo from '../img/REDES SOCIALES.png'
import Rectangulo from '../img/RECTANGULO 2.png'

import {Row} from "react-bootstrap";

function Footer(){
    return(
        <div>
            <Row className="text-center mx-auto" style={{marginTop: "2em"}}>
                <div className="card-body" style={{backgroundColor: "transparent"}} width="150em" height="150em">
                    <img src={RedesSocialeslogo} alt="Redes sociales" width="150em" height="45em"/>
                </div>
                <img src={Rectangulo} className="img-fluid" alt="Rectangulo" width="150em" height="150em"/>
            </Row>
        </div>
    )
}

export default Footer;