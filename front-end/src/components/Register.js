import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import {StyledForm} from "./Styled"

import axios from 'axios'



export default function DriverLogin() {
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    // axios
    //   .post('https://git.heroku.com/food-trackr-2/api/users/register', data)
    //   .then(res => console.log(res.firstName))
  }

  //   console.log(watch('example'))

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      {errors.firstName && <span>first name is required</span>}
      <input name="firstName" ref={register({ required: true })} />
      

      <label>Last Name</label>
      <input name="lastName" ref={register({ required: true })} />
      {errors.lastName && <span>last name is required</span>}

      <label>Email</label>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <span>email is required</span>}

      <label>Username</label>
      <input name="username" ref={register({ required: true })} />
      {errors.username && <span>username name is required</span>}

      <label>Password</label>
      <input name="Password" ref={register({ required: true })} />
      {errors.password && <span>password is required</span>}

      <input name="submitForm" type="submit" />
      {errors.any && <span>Oops! You're missing a field. Check above</span>}
    </StyledForm>
  )
}
