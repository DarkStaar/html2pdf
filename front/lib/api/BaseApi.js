import axios from 'axios';

class BaseApi 
{

    constructor(apiKey, accessToken, path) 
    {
        this.config = {}

        if(accessToken)
        {
            this.config.headers = {
                authorization: `Token ${accessToken}`
            }
        }
        
        if(apiKey)
        {
            this.config.headers = 
            {
                ...this.config.headers,
                apikey: `${apiKey}`
            }
        }

        this.apiUrl = 'http://localhost:8000' + path;
    }
}

export default BaseApi;