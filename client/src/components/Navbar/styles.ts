import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: start;
  align-items: center;
  background: linear-gradient(to right, #03052C, #03052C);
  padding: 18px;
`;

export const Logo = styled.img`
  max-height: 50px;
`;

export const NavLinksWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavLinksItem = styled.li`
  margin-left: 20px;
`;

export  const NavLink = styled(Link)`
  color: #FFF;
  text-decoration: none;
  transition: 0.5s;
  font-size: 18px;

  &:hover {
    text-decoration: none;
    color: #F3732F
  }
`;