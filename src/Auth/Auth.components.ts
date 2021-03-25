import styled from 'styled-components';

const Pink_Color  = "#f67187";

//main
export const AuthForm = styled.form`
display: flex;
align-items: center;
flex-direction: column;  
margin: 0 auto;
width: 50%;
font-size: 20px;

Input: first-of-type{
    font-weight: bold;
}
`;
export const AuthWrapper = styled.main`
display: flex;
min-height: 100vh;
`;

export const Field = styled.div`
flex: 3;
background-color: #290358;
`

export const FormWrapper = styled.div`
flex: 1;
`;

//Containers

export const TopContainer = styled.div`

`; 

export const BottomContainer = styled.div`
`;

export const FormContainer = styled.div `
`;


export const TopSentense =styled.p `

font-size: 18px;
color: white;
`;

export const Separator = styled.hr`
heigth: 3px;
background-color: ${Pink_Color};
`;
export const Footer =styled.p `
text-align: center;
font-weight: 500;
font-size: 18px;
color: white;

a{
    color: ${Pink_Color};
    font-weight: bold;
    text-decoration: none;s
}
`;

export const Input = styled.input`
border: none;
border-bottom: 2px solid ${Pink_Color};
padding: 4px;
mon-width: 300px;
font-size: 20px;
margin: 8px 0;
`
export const Label = styled.label`
text-align: center;
font-weight: 500;
font-size: 18px;
color: white;
`


