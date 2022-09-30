import Header from "../components/shared/Header";


import { useState, useContext } from 'react';
import AppContext from '../lib/AppContext';
import Footer from "../components/shared/Footer";
import { Button } from "reactstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Generate = () =>
{
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
    const [isGenerated, setIsGenerated] = useState(false);
    const [apiKey, setApiKey] = useState("");
    
    const handleClick = async () => 
    {
        if(isLoggedIn)
        {
            if(!isGenerated)
            {
                console.log(isLoggedIn);
                const accessToken = localStorage.getItem('token');
                console.log(accessToken);
                const json = await axios.post('/api/v1/generate', {authToken: accessToken});
                console.log(json.data);
                localStorage.setItem('apiKey', json.data.apikey);
                
                setApiKey(json.data.apikey);
                setIsGenerated(true);

                toast.success("Api Key generated");
            }
            else
            {
                const apiKey = localStorage.getItem('apiKey');
                navigator.clipboard.writeText(apiKey);
                console.log("Already Generated");
                toast.success("Copied to clipboard");
            }
        }
        else
        {
            toast.error("You are not logged in!");
        }
    }

    return (
            <div className="container-wrap">
            <Header/>
                <div className="box">
                    <div className="generate-box">
                        <h2 className="generate-text-header">Generating API Key</h2>
                        <br />
                        <p className="generate-text">Vitae sit scelerisque lectus ac. Quis mi, libero, urna eleifend magna. Libero purus tempor non hac. Eget neque viverra morbi eleifend volutpat a pellentesque faucibus. Mauris sociis ornare fames risus.</p>
                        <br />
                        {isGenerated &&
                            <textarea disabled className="generated-area" defaultValue={localStorage.getItem('apiKey')}></textarea>
                        }
                        <Button className={isGenerated ? "generated-button" : "generate-button" } onClick={handleClick}>{isGenerated ? "Copy" : "Create a key"}</Button>
                    </div>
                    <ToastContainer />
                    <img className="generate-image" src="/api1.png"/>
                </div>
            <Footer />
            </div>
    );
}

export default Generate;