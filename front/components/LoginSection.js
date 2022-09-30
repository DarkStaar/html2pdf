import React from "react";
import { useForm } from "react-hook-form";
import { Button } from 'reactstrap';
import { useRouter } from "next/router";
import { useContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

import AppContext from "../lib/AppContext";

const Login = () =>
{
    const { register, handleSubmit } = useForm();
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    const router = useRouter();

    const onSubmit = async data => 
    {
        if(isLoggedIn)
        {
            toast.error("You are already logged in!");
        }
        else
        {
            const loginData = await axios.post('/api/v1/login', data);
            setIsLoggedIn(true);
            localStorage.setItem('token', loginData.data.token);
            router.push('/'); 
        }
    }
    return (
        <div className="loginbox">
            <p className="logintext">Login</p>
            <form className="login-inner" onSubmit={handleSubmit(onSubmit)}>
                <label className='inputlabel'>Username</label>
                <br />
                <input className='inputbox' {...register("username", { required: true, maxLength: 20 })} />
                <br />
                <label className='inputlabel'>Password</label>
                <br />
                <input className='inputbox' type="password" {...register("password", { required: true })}/>
                <br />
                <Button className='login-button button-textl' type="submit">Log In</Button>
            </form>
        </div>
    );
}

export default Login;