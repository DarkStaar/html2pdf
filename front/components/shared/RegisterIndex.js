import { Button } from "reactstrap";

const RegIndex = () =>
    <div className="reg-index">
        <p className="reg-index-text">Do you need API for converting HTML to PDF?</p>
        <Button href="/login" className="reg-index-button">Register</Button>
        <div className="image-div">
            <img className="reg-image" src="html.png"/>
            <img className="reg-image" src="pdf-1.png">
                {/*<img className="pdf-name" src="pdf-2.png"/> */}
            </img>
        </div>
    </div>


export default RegIndex;