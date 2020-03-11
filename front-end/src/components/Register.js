import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import {StyledForm} from "./Styled"

import axios from 'axios'



export default function DriverLogin() {
  const [userCredentials, setUserCredentials] = useState({})
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => {

      setUserCredentials({
        'firstname': data.firstName,
        'lastname': data.lastName,
        'email': data.email,
        'username': data.username,
        'password': data.password,
      })
    // axios
    //   .post('https://git.heroku.com/food-trackr-2/api/users/register', data)
    //   .then(res => console.log(res.firstName))
  };

  useEffect (() => {
    axios
      .post("",userCredentials)
      .then(response => {
        console.log("user registered", response.data);
      })
      .catch(error => console.log(error));
  }, [userCredentials]);

  //   console.log(watch('example'))

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input 
        name="firstName" 
        ref={register({ required: true })} />
      {errors.firstName && <span>first name is required</span>}
      
      <label>Last Name</label>
      <input 
        name="lastName" 
        ref={register({ required: true })} />
      {errors.lastName && <span>last name is required</span>}

      <label>Email</label>
      <input 
        name="email" 
        ref={register({ required: true })} />
      {errors.email && <span>email is required</span>}

      <label>Username</label>
      <input 
        name="username" 
        ref={register({ required: true })} />
      {errors.username && <span>username name is required</span>}

      <label>Password</label>
      <input 
        name="password" 
        type="password" 
        ref={register({ required: true })} />
      {errors.password && <span>password is required</span>}

      <input name="submitForm" type="submit" />
      {errors.any && <span>Oops! You're missing a field. Check above</span>}
    </StyledForm>
  )
}
