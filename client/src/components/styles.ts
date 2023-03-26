import styled from 'styled-components';

// TIPO TAG LINK
export const Button = styled.a` 
  background-color: #F3732F;
  color: #f5f5f5;
  padding: 0.8em 3em;
  text-align: center;    
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Poppins', sans-serif;
  transition: 0.5s;
  text-decoration: none;
  cursor: pointer;
  transform: 0.5s;

&:hover {
  background-color: #f5f5f5;
  color: #F3732F;
  

}
`
// TIPO BUTTON
export const ButtonSave = styled.button` 
  background-color: #F3732F;
  color: #f5f5f5;
  padding: 0.8em 3em;
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