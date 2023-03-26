import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import * as Styled from './styles';
import { NavbarMenu } from '../Navbar';

interface RouteParams extends Record<string, string | undefined> {
  id: string;
}

interface FormData {
  autor: string;
  title: string;
  description: string;
  image: File | null;
}

export const FormUpdate = () => {
  const navigate = useNavigate();
  const { id } = useParams<RouteParams>();
  const [formData, setFormData] = useState<FormData>({
    autor: '',
    title: '',
    description: '',
    image: null,
  });

    // Validação
    const [autorError, setAutorError] = useState<string>("");
    const [titleError, setTitleError] = useState<string>("");
    const [descriptionError, setDescriptionError] = useState<string>("");
    const [imageError, setImageErorr] = useState<string>("")

  useEffect(() => {
    // Faz uma requisição para a API para obter os dados de um item com o ID específico
    api.get(`/filmes/${id}`).then((res) => {
      const { autor, title, description } = res.data.results[0];
      setFormData({ autor, title, description, image: null });
      console.log({ autor, title, description, image: null });
    });
  }, [id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!autor) {
      setAutorError('Por favor, preencha o nome do autor');
      return;
    }
    if(!title) {
      setTitleError('Por favor, preencha título');
      return;
    }
    if(!description) {
      setDescriptionError('Por favor, preencha a descrição');
      return;
    }
    if(!image) {
      setImageErorr('Por favor, realize o upload.');
      return;
    }

    // Cria um objeto FormData para enviar os dados, incluindo a imagem selecionada
    const data = new FormData();
    data.append('autor', formData.autor);
    data.append('title', formData.title);
    data.append('description', formData.description);
    if (formData.image) {
      data.append('image', formData.image);
    }

    // Faz uma requisição para a API para atualizar os dados do item
    api
      .put(`/filmes/${id}`, data)
      .then(() => {
        // Redireciona o usuário para a página do item atualizado
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setFormData({ ...formData, image: file || null });
  };

  const { autor, title, description, image } = formData;

  return (
    <>
    <NavbarMenu />
    <Styled.FormContainer>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group className="mb-3">
          <Styled.FormLabel>Autor:</Styled.FormLabel>
          <Form.Control type="text" name="autor" value={autor} onChange={handleInputChange} />
          {autorError && <Styled.ErrorMessage>{autorError}</Styled.ErrorMessage>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Styled.FormLabel>Título:</Styled.FormLabel>
          <Form.Control type="text" name="title" value={title} onChange={handleInputChange} />
          {titleError && <Styled.ErrorMessage>{titleError}</Styled.ErrorMessage>}
        </Form.Group>

        <Styled.FormLabel>Descrição:</Styled.FormLabel>
          <Form.Control as="textarea" rows={3} name="description" value={description} onChange={handleInputChange} />
          {descriptionError && <Styled.ErrorMessage>{descriptionError}</Styled.ErrorMessage>}
        <Form.Group className="mb-3" >

        <Styled.FormLabel>Imagem</Styled.FormLabel>
        <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
        {imageError && <Styled.ErrorMessage>{imageError}</Styled.ErrorMessage>}
        </Form.Group>
        <Styled.ButtonUpdate type="submit">Salvar</Styled.ButtonUpdate>
      </Form>
    </Styled.FormContainer>
    </>
  );
};

