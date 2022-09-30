import UserApi from '../../../lib/api/user';

export default async function generate(req, res)
{
    try 
    {
        const accessToken = req.body.authToken;
        console.log(accessToken);
        const json = await new UserApi(null, accessToken).generateKey();
        console.log(json.data);
        return res.json(json.data);
    } 
    catch (error) 
    {
        return res.json(error.message);
    }
    
}