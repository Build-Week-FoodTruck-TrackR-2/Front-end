import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import axios from 'axios'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10% 25% 0 25%;
  padding: 0 0 10px 0;
  align-items: center;
  border: 3px solid #CD5C5C; 

    label{
      display: flex;
      justify-content: center;
      align-items: center;
      color: #6699cc;
      font-size: 1.5rem;
      margin: 5px 5px 0px 5px;
      width: 50%;
      font-weight: bold
    }
    input {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #6699cc;
      font-size: 1.5rem;
      margin: 5px;
      width: 50%;
      font-weight: bold
    }
    span {
      color: #CD5C5C;
      border: 2px solid #CD5C5C;
      padding: 2px 5px 2px 5px; 
      text-transform: uppercase;
    }

  `

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
