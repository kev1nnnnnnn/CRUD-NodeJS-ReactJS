import styled from "styled-components";
import { Link } from "react-router-dom";
export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 2em;
`;

export const Th = styled.th`
  font-weight: bold;
  padding: 10px;
  color: #fff;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  color: #FFF;
  text-align: center;
  text-transform: lowercase;
  &:nth-last-child(2) {
    width: 50px;
  }
  &:nth-last-child(1) {
    width: 50px;
  }
  &:nth-child(1) {
    width: 10em;
  }
`;
// TIPO TAG LINK
export const Button = styled.a` 
  background-color: #F3732F;
  color: #f5f5f5;
  padding: 0.8em 3em;
  text-align: center;    
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.5s;
  text-decoration: none;
  cursor: pointer;
  transform: 0.5s;
&:hover {
  background-color: #f5f5f5;
  color: #F3732F;
  

}
`;
export const Image = styled.img`
    width: 50px;
    height: auto;
`
export const ButtonUpdate = styled(Link)` 
  background-color: #F3732F;
  color: #f5f5f5;
  padding: 0.2em 1em;
  text-align: center;    
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.5s;
  text-decoration: none;
  cursor: pointer;
  transform: 0.5s;
  color: #f5f5f5;
&:hover {
  background-color: #f5f5f5;
  color: #F3732F;
  

}
`;