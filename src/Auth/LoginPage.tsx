import React, { useState } from 'react';
import { onLogin } from './auth.api';
import { AuthForm, AuthWrapper, BottomContainer, Field, Footer, FormContainer, FormWrapper, Input, Label, Separator, TopContainer, TopSentense } from './Auth.components';
import { Link, useNavigation } from 'react-navi';


const LoginPage = () => {
    const navigation = useNavigation();
    const [{ username, email,  password }, setCredentials] = useState({
        username: '',
        email: '',
        password: ''
        
    })

    const [error, setError] = useState('');

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await onLogin({
            username,
            email,
            password
            
        })

        if (response && response.error) {
            setError(response.error);
        } else {
            navigation.navigate("/");
        }
    }

    return (
        <AuthWrapper>
            <Field>
                <FormWrapper>
                    <TopContainer>
                        <TopSentense>Mira lo nuevo q hay para tí</TopSentense>
                        <Separator />
                    </TopContainer>
                    <FormContainer>
                        <AuthForm onSubmit={login}>
                            <Label htmlFor="username">Username</Label>
                            <Input placeholder="Username" value={username} onChange={(event) => setCredentials({
                                username: event.target.value,
                                email,
                                password
                            })} />
                            <Label htmlFor="password">Password</Label>
                            <Input placeholder="Password" type="password" value={password} onChange={(event) => setCredentials({
                                username,
                                email,
                                password: event.target.value,
                            })} />
                            <Label htmlFor="email">Email</Label>
                            <Input placeholder="Email" type="pemail" value={email} onChange={(event) => setCredentials({
                                username,
                                password,
                                email: event.target.value,
                            })} />
                            <button type="submit" className="btn btn-success px-5">Login</button>
                            {error.length > 0 && <p> {error} </p>}

                        </AuthForm>
                    </FormContainer>
                    <BottomContainer>
                        <Separator />
                        <Footer>Crear cuenta <Link href="/register">Registrate</Link></Footer>
                    </BottomContainer>
                </FormWrapper>
                </Field>
        </AuthWrapper>
        
    )
}

export default LoginPage;