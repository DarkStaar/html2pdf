import UserApi from '../../../lib/api/user';

export default async function register(req, res)
{
    try 
    {
        const json = await new UserApi().register(req.body);
        //console.log(json.data);
        return res.json(json.data);
    } 
    catch (error) 
    {
        return res.json(error.message);
    }
    
}