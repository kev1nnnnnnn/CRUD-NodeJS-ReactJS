import styled from "styled-components";
import Card from 'react-bootstrap/Card';


// export const Title = styled.p`
//     text-decoration: none;
//     color: #F3732F;
//     font-weight: bold;
//     font-size: 18px;
//     text-align: left;
//     margin-top: 5px;

// `
export const StyledCard = styled(Card)`
  width: 17rem;
  margin-top: 20px;
  background-color: transparent;

`;
 
export const Title = styled(Card.Title)`
  color: white;
  font-weight: bold;
  color: #F3732F;
  margin-top: 0.5em;
  text-transform: lowercase;
  line-height: 1.2em;
  letter-spacing: 1.5px;
`;
export const CardBody = styled(Card.Body)`
  height: 115px;
  background: linear-gradient(to bottom, #03052C, #0C223F);
  border-end-start-radius: 15px;
  border-end-end-radius: 15px;
`;