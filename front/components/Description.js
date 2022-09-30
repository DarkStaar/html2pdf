import { Button } from "reactstrap";
import { prettyPrintJson } from "pretty-print-json"; 
import { useState } from "react";

import { FaPhp } from 'react-icons/fa';

const Description = () => 
{
    const [button1, setColorB1] = useState("#18344B");
    const [button2, setColorB2] = useState("#F4F5F7");
    const [button3, setColorB3] = useState("#F4F5F7");
    const [button4, setColorB4] = useState("#F4F5F7");


    const data = 
    {
        "tasks": {
            "capture-my-website": {
            "operation": "capture-website",
            "url": "https://cloudconvert.com",
            "output_format": "pdf",
            "css_media_type": "screen"
            },
            "export-my-file": {
            "operation": "export/url",
            "input": "capture-my-website"
            }
        },
        "redirect": true
    }

    const handleClick = (id) =>
    {
        switch (id) {
            case "1":
                setColorB1("#18344B");
                setColorB2("#F4F5F7");
                setColorB3("#F4F5F7");
                setColorB4("#F4F5F7");
                break;

            case "2":
                setColorB1("#F4F5F7");
                setColorB2("#18344B");
                setColorB3("#F4F5F7");
                setColorB4("#F4F5F7");
                break;
            case "3":
                setColorB1("#F4F5F7");
                setColorB2("#F4F5F7");
                setColorB3("#18344B");
                setColorB4("#F4F5F7");
                break;
            case "4":
                setColorB1("#F4F5F7");
                setColorB2("#F4F5F7");
                setColorB3("#F4F5F7");
                setColorB4("#18344B");
                break;    
            default:
                break;
        }
    };
    
    return(
    <div className="description-wrapper">
        <div className="description-header">
            <h3>Description how to use API, simple text with code samples</h3>
        </div>
        <br />
        <div className="description-footer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare interdum nunc, lectus dignissim fringilla. Porttitor quam venenatis nulla non proin quisque sit mi risus. At id consequat, non lobortis tellus.</p>
            <br />
            <p>Vitae sit scelerisque lectus ac. Quis mi, libero, urna eleifend magna. Libero purus tempor non hac. Eget neque viverra morbi eleifend volutpat a pellentesque faucibus. Mauris sociis ornare fames risus cursus.</p>

        </div>
        <div className="description-buttons-div">
            <Button onClick={() => handleClick("1")} style={{background: button1, color: button1 === "#18344B" ? "#FFFFFF": "#41526E"}} className="description-button"><FaPhp size={30} color={button1 == "#18344B" ? "white" : "#41526E"}/> PHP</Button>
            <Button onClick={() => handleClick("2")} style={{background: button2, color: button2 === "#18344B" ? "#FFFFFF": "#41526E"}} className="description-button"><FaPhp size={30} color={button2 == "#18344B" ? "white" : "#41526E"}/> PHP</Button>
            <Button onClick={() => handleClick("3")} style={{background: button3, color: button3 === "#18344B" ? "#FFFFFF": "#41526E"}} className="description-button"><FaPhp size={30} color={button3 == "#18344B" ? "white" : "#41526E"}/> PHP</Button>
            <Button onClick={() => handleClick("4")} style={{background: button4, color: button4 === "#18344B" ? "#FFFFFF": "#41526E"}} className="description-button"><FaPhp size={30} color={button4 == "#18344B" ? "white" : "#41526E"}/> PHP</Button>
        </div>
            <textarea disabled className="description-textarea" value={JSON.stringify(data, null, 3)}>
            </textarea>
    </div>
    );
}

export default Description;