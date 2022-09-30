import axios from 'axios';
import BaseApi from './BaseApi';

class PdfApi extends BaseApi
{
    constructor(apiKey, accessToken)
    {
        if(!apiKey)
        {
            apiKey = null;
        }
        if(!accessToken)
        {
            accessToken = null;
        }
        super(apiKey, accessToken, '');
    }

    convert(data)
    {
        console.log(this.config);
        this.config.headers = 
        {
            ...this.config.headers,
            Connection: 'keep-alive',
            'Keep-Alive': 'timeout=1500, max=100'
        }
        return axios.post(`${this.apiUrl}/convert/`, data, {...this.config , responseType: 'arraybuffer'});
    }
}

export default PdfApi;