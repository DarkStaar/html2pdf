
import UserApi from '../../../lib/api/user';

export default async function logout(req, res)
{
    try 
    {
        const accessToken = req.body.authToken;
        const json = await new UserApi(null, accessToken).logout();
        return res.json(json.data);
    }
    catch (error) 
    {
        return res.json(error.message);
    }
    
}