import React from 'react';
import logo from '../../assets/navbar.png';
import * as Styled from './styles';

export function NavbarMenu() {
  
  return (
    <Styled.NavbarWrapper>
    <Styled.Logo src={logo} alt="logo creathus" />
    <Styled.NavLinksWrapper>
      <Styled.NavLinksItem>
      <Styled.NavLink to="/">Painel</Styled.NavLink>
      </Styled.NavLinksItem>
      <Styled.NavLinksItem>
        <Styled.NavLink to="/catalogo">Catálogo de filmes</Styled.NavLink>
      </Styled.NavLinksItem>
    </Styled.NavLinksWrapper>
  </Styled.NavbarWrapper>
  );
}

