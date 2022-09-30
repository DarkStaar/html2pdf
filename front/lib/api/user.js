import axios from 'axios';
import BaseApi from './BaseApi';

class UserApi extends BaseApi
{
    constructor(apiKey, accessToken)
    {
        if(!accessToken)
        {
            accessToken=null;
        }
        if(!apiKey)
        {
            apiKey = null;
        }
        super(apiKey, accessToken, '/user');
    }

    login(data)
    {
        // console.log(this.apiUrl);
        // console.log(this.accessToken);
        // console.log(this.apiKey);
        // console.log(this.config);
        // console.log(data);
        return axios.post(`${this.apiUrl}/login/`, data, this.config);
    }

    register(data)
    {
        return axios.post(`${this.apiUrl}/register/`, data, this.config);
    }

    logout()
    {
        console.log(this.config);
        return axios.get(`${this.apiUrl}/logout/`, this.config);
    }

    generateKey()
    {
        console.log(this.config);
        return axios.get(`${this.apiUrl}/generate_key/`, this.config);
    }
}

export default UserApi;