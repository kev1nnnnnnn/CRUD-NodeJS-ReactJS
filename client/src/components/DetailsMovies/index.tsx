import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { MOVIES_URL } from '../PathImage';
import * as Styled from './styles';

// TIPAGEM DE DADOS
interface Movie {
  id: number;
  autor: string;
  title: string;
  description: string;
  image: string;
};

export function DetailsMovies() {

  const { id } = useParams();
  const [data, setData] = useState<Movie>();

  // API
  function showMovie() {
    api.get(`/filmes/${id}`)
    .then((res) => {
        setData(res.data.results[0]);
        console.log(res.data.results[0]);
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    showMovie();
  }, [id]);
      
  return (
    <Styled.Container>
    <Styled.Image src={`${MOVIES_URL}${data?.image}`}></Styled.Image>
      <Styled.ContainerChildren>
        <Styled.Autor>{data?.autor}</Styled.Autor>
        <Styled.Title>{data?.title}</Styled.Title>
        <Styled.Sinopse>Sinopse & info</Styled.Sinopse>
        <Styled.Description>{data?.description}</Styled.Description>
      </Styled.ContainerChildren>
    </Styled.Container>
  );
}

