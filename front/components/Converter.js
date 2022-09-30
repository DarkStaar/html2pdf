import { Button } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Document } from 'react-pdf';
import { useRouter } from "next/router";
import fileDownload from 'js-file-download';

import AppContext from "../lib/AppContext";

const Converter = () => 
{
        const { register, handleSubmit } = useForm();
        const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

        const router = useRouter();

        const onSubmit = async (data) => 
        {
                if(isLoggedIn)
                {
                        try 
                        {
                                const accessToken = localStorage.getItem('token');
                                const apiKey = localStorage.getItem('apiKey');

                                console.log(data);
                                
                                const base64Str = await axios.post('/api/v1/convert', {accessToken: accessToken, apiKey: apiKey, html: data.html});
                                
                                let linkSource = `data:application/pdf;base64,${base64Str.data}`

                                var downloadLink = document.createElement('a');
                                const fileName = "converted_pdf.pdf";
                                downloadLink.href = linkSource;
                                downloadLink.download = fileName;
                                downloadLink.click();
                        }       
                        catch (error) 
                        {
                                toast.error(error.message);        
                        }
                }
        }

        return(
        <div className="converter-group">
                <div className="group1">
                <div className="section">
                        <p className="section-text">HTML to PDF </p>
                        <p className="section-text-footer">HTML2PDF is an online document converter. 
                        Amongst many others, we support PDF, DOCX, PPTX, XLSX. 
                        Thanks to our advanced conversion technology the quality of the output will be as good as if the file was saved through the latest Microsoft Office 2019 suite.</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                        <textarea resize="none" placeholder="Text area" className="section-input form-control" {...register("html", { required: true, maxLength: 200000 })}/>
                        <br />
                        <Button target="_blank" className="section-button" type="submit">Convert</Button>
                </form>
                </div>
                </div>
        </div>
        );
}
export default Converter;