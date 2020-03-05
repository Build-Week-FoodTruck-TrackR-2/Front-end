import React from 'react';
import { useForm } from 'react-hook-form';

export default function FoodieLogin() {
    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => {console.log(data)}

    console.log(watch('example'))

    return (
        <form onSubmit ={handleSubmit(onSubmit)}>
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
        </form>
    )
}