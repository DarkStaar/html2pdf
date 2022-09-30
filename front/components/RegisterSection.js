import React from "react";
import { useForm } from "react-hook-form";
import {Button} from 'reactstrap';
import { useRouter } from "next/router";
import { useContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

import { useRegisterUser } from '../actions/user';
import UserApi from "../lib/api/user";
import AppContext from "../lib/AppContext";


const Register = () => 
{
    const { register, handleSubmit, formState } = useForm();
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);

    const router = useRouter();

    const onSubmit = async data => 
    {
        const registerData = await axios.post('/api/v1/register', data);
        router.push('/');   
    }
    return(
        <div className="registerbox">
            <h2 className="registertext">Registration</h2>
            <div className="register-inner">
                <form onSubmit={handleSubmit(async (rdata) => 
                    {
                        if(isLoggedIn)
                        {
                        toast.error("You are logged in!"); 
                        }
                        else
                        {
                            await onSubmit(rdata);
                        }
                    })}>
                    <label className="inputlabelr" >Username</label>
                    <br />
                    <input className="inputboxr" {...register("username", { required: true, maxLength: 20 })} />
                    <br />
                    <label className="inputlabelr">Email</label>
                    <br />
                    <input className="inputboxr" type="email" {...register("email", { required: true })} />
                    <br />
                    <label className="inputlabelr">Password</label>
                    <br />
                    <input className="inputboxr" type="password" {...register("password", { required: true })}/>
                    <br />
                    <label className="inputlabelr">Confirm Password</label>
                    <br />
                    <input className="inputboxr" type="password" {...register("password_confirmation", { required: true })}/>
                    <br />
                    <Button className="register-button button-textr" type="submit">Register </Button>
                </form>
            </div>
        </div>
    )
}

export default Register;