
import axios, { AxiosRequestConfig  } from 'axios';



const API_BASE_URL = axios.post('http://localhost:3000/')


export interface Credentials{
    username: string;
    password: string;
    email: string;
}

interface LoginApiResponse {
    created: string;
    id: string;
    token: string;
    username: string;
  }


  
interface LoginResponse  {
    error?: string
    token?: string;
  }





export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: API_BASE_URL +  'login',
        data
    }


    try {
    const {data: response} = await axios.request<LoginApiResponse>(requestConfig);  
    storeToken(response.token);
    
    }catch (e) {
        console.error(e);
        return {error: e.response.data.message}
    }
}

export const onRegister = async(data: Credentials) => {
    const requestConfig: AxiosRequestConfig ={
        method:'post',
        url: API_BASE_URL + 'register',
        data
    }

    try{
        const {data: response} = await axios.request(requestConfig)  
    }catch (e){
        console.error(e.response);
        return {error: e.response.data.message};
        }
}   


export const BOUNCE_IT_TOKEN_KEY = 'bounce_it_token_key';

const storeToken = (token : string) =>{
    localStorage.setItem(BOUNCE_IT_TOKEN_KEY, token);
}