import React, { useState } from 'react';
import { onRegister } from './auth.api';
import { AuthForm } from './Auth.components';
import { Link } from 'react-navi';

const RegisterPage = () => {
    const [{ username, email, password, repeatPassword }, setRegisterData] = useState({
        username: '',
        password: '',
        repeatPassword: '',
        email: ''

    })

    const [error, seterror] = useState('')

    const register = async (event: React.FormEvent) => {
        event.preventDefault ();
        const response = await onRegister({
            username,
            email,
            password
        })
            
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
                email,
                repeatPassword
            })} />
            <label htmlFor="password">Password</label>
            <input value={password} name="password" type="password" onChange={(event) => setRegisterData({
                username,
                email,
                password: event.target.value,
                repeatPassword
            })} />
            <label htmlFor="email">Email</label>
            <input value={email} name="email" type="email" onChange={(event) => setRegisterData({
                username,
                password,
                repeatPassword,
                email: event.target.value,
            })} />
           
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input value={repeatPassword} name="repeatPassword" type="password" onChange={(event) => setRegisterData({
                username,
                password,
                email,
                repeatPassword: event.target.value,
            })} />

            <button type="submit" className="btn btn-success px-5">Register</button>
           {error.length > 0 && <p>{error}</p>}
           <p>Tienes cuenta?<Link href="/">Click aqui</Link></p>
        </AuthForm>
    )
}

export default RegisterPage;