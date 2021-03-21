import React, { useState } from 'react';
import { onRegister } from './auth.api';
import { AuthForm } from './Auth.components';


const RegisterPage = () => {
    const [{ username, password, repeatPassword }, setRegisterData] = useState({
        username: '',
        password: '',
        repeatPassword: ''

    })

    const [error, seterror] = useState('')

    const register = async (event: React.FormEvent) => {
        event.preventDefault ();
        const response = await onRegister({
            username,
            password})
            
        if (response && response.error) {
            seterror(response.error);

        } else {
            seterror('password y repeat password tiene que ser iguales')

        }
    }

    return (
        <AuthForm onSubmit={register}>
            <label htmlFor="username">Username</label>
            <input value={username} name="username" onChange={(event) => setRegisterData({
                username: event.target.value,
                password,
                repeatPassword
            })} />
            <label htmlFor="password">Password</label>
            <input value={password} name="password" type="password" onChange={(event) => setRegisterData({
                username,
                password: event.target.value,
                repeatPassword
            })} />
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input value={repeatPassword} name="repeatPassword" type="password" onChange={(event) => setRegisterData({
                username,
                password,
                repeatPassword: event.target.value,
            })} />

            <button type="submit" className="btn btn-success px-5">Register</button>
           {error.length > 0 && <p>{error}</p>}

        </AuthForm>
    )
}

export default RegisterPage;