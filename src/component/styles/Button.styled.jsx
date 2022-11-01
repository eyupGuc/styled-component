import styled from "styled-components";

const Button=styled.button`
background-color: ${({bg})=>bg || "white" };
color: ${({color})=> color || "white"};
border:1px solid #a62440;
padding: 1rem;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
font-size:1.1rem;
margin-right:0.5rem;
margin: 2rem 0.5rem;
cursor: pointer;
&:hover{
    transform: scale(0.97);
    opacity: 0.9;
}

`;
 export default Button; 