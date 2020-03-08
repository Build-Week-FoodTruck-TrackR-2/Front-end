import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 0;
  align-items: center;

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

export default function FoodieLogin() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {console.log(data)}

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