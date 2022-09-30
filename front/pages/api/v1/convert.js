
import PdfApi from '../../../lib/api/pdf';

import axios from 'axios';

export default async function convert(req, res)
{
    try 
    {
        const { apiKey, accessToken, html } = req.body;
        console.log(accessToken);
        console.log(apiKey);
        

        let reqInstance = axios.create({
            headers:
            {
                Authorization: `Token ${accessToken}`,
                apikey: `${apiKey}`,
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/json',
                Connection: 'keep-alive'
            },
            responseType: 'arraybuffer'
        });

        const json = await reqInstance.post('http://localhost:8000/convert/', {html: html});
        //const json = await new PdfApi(apiKey, accessToken).convert(html);
        let base64 = Buffer.from(json.data, 'binary').toString('base64');

        return res.json(base64);
    }
    catch (error) 
    {
        return res.json(error.message);
    }
    
}