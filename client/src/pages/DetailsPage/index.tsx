import React from 'react';

import { NavbarMenu } from '../../components/Navbar';
import { Rodape } from '../../components/Footer';
import { DetailsMovies } from '../../components/DetailsMovies';

export function DetailsPage() {

    return(
    <>
        <NavbarMenu />
        <DetailsMovies />
        <Rodape />
        
    </>

    )
}