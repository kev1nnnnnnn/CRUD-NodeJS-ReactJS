import React from "react";
import * as Styled from './styles';
import logo from '../../assets/logo.png'

export function Rodape() {

    return(

        <Styled.Footer>
            <Styled.Copyright>
                &copy; {new Date().getFullYear()} Todos os direitos reservados.
            </Styled.Copyright>
            <Styled.Logo src={logo} alt="Logo da Empresa creathus" />
        </Styled.Footer>
    )

}