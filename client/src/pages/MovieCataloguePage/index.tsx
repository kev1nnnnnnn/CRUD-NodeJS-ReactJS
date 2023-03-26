import React from 'react';
import { Catalogue } from '../../components/Catalogue';
import { NavbarMenu } from '../../components/Navbar';
import { Rodape } from '../../components/Footer';

export function MovieCataloguePage() {

    return(
    <>
        <NavbarMenu />
        <Catalogue />
        <Rodape />
       
    </>

    )
}