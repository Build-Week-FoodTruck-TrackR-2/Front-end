import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import {StyledForm} from "./Styled"


export default function DriverLogin() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {console.log(data)}

    // APPLY WHEN DATABASE CALL IS READY 
    
    // const onSubmit = async data => {
    //     if (data.password === data.confirmpassword) {
    //         setUserCredentials({
    //             'username': data.username,
    //             'password': data.password,
    //             'email': data.email
    //         })
    //     }
    // }

    console.log(watch('example'))

    return (
        <StyledForm onSubmit ={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input 
                name="username" 
                ref={register({ required: true})} 
            />
            <label>Password</label>
            <input
                name="Password"
                ref={register({ required: true })}
            />

            {/* {errors.firstName && <span>first name is required</span>}
            {errors.lastName && <span>last name is required</span>}
            {errors.email && <span>email is required</span>}    
            {errors.username && <span>username name is required</span>}
            {errors.password && <span>password is required</span>} */}


            < input type="submit"/>
        </StyledForm>
    )
}