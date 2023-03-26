import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { DetailsPage }          from '../pages/DetailsPage';
import { MovieCataloguePage }   from '../pages/MovieCataloguePage';
import { PanelPage }            from '../pages/PanelPage';
import {FormUpdate}         from '../components/FormUpdate'

const RouterWeb = () => {

    return(
        <Router>
            <Routes>
                <Route path='/catalogo' element={<MovieCataloguePage/>} />
                <Route path='/' element={<PanelPage/>} />

                {/* Rota para atualizar dados */}
                <Route path='/filmes/:id' element={<DetailsPage/>} />
                <Route path='/editar/:id' element={<FormUpdate/>} />
            </Routes>
        </Router>
    )
}

export default RouterWeb;