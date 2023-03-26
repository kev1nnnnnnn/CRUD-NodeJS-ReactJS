import { Form } from "react-bootstrap";
import styled from "styled-components";

export const FormContainer = styled.div`
    margin: 2em auto;
    width: 50%;
 
`
export const FormLabel = styled(Form.Label)`
  color: #FFF;
  font-size: 20px;
  margin-top: 10px;
`;

export const ButtonUpdate = styled.button`
    background-color: #F3732F;
    color: #f5f5f5;
    padding: 0.5em 3em;
    text-align: center;    
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;  
    font-family: 'Poppins', sans-serif;
    transition: 0.5s;
    text-decoration: none;
    cursor: pointer;
    transform: 0.5s;
    border: none;

    &:hover {
        background-color: #f5f5f5;
        color: #F3732F;
        

    }
 
`
export const ErrorMessage = styled.p`
    color: red;
`