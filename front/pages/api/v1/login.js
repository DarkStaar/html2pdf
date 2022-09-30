import { useState } from 'react';
import dynamic from 'next/dynamic'

import UserApi from '../../../lib/api/user';


export default async function login(req, res)
{
    if(req.method === 'POST')
    {
        try 
        {
            const json = await new UserApi().login(req.body);
            return res.json(json.data);
        } 
        catch (error) 
        {
            return res.json(error.message);
        }
    }
}