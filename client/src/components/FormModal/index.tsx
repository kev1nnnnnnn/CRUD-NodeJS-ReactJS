import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Styled from '../styles';
import { api } from '../../services/api';

export function FormModal() {

  const [autor, setAutor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();
  
  // Validação
  const [autorError, setAutorError] = useState<string>("");
  const [titleError, setTitleError] = useState<string>("");
  const [descriptionError, setDescriptionError] = useState<string>("");
  const [imageError, setImageErorr] = useState<string>("")

  const formData = new FormData();
  formData.append('autor', autor);
  formData.append('title', title);
  formData.append('description', description);
  
  //verifica se existe
  if(image) {
    formData.append('image', image);
  }

  interface Headers {
    [key: string]: string;
  }
  
  const headers: Headers = {
    'Content-Type': 'multipart/form-data',
  };


  // realiza o insert
  const handlePost = async (e:React.MouseEvent<HTMLButtonElement>) => {

    e.preventDefault();

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

    await api.post('/filmes', formData, headers)
    .then((res) => {
      console.log(res.data.results);
    })
    .catch(error => console.log(error));

    navigate('/catalogo');
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  }
  
  return (
    <>
     <Form encType="multipart/form-data">

      <Form.Group className="mb-3">
        <Form.Label>Autor</Form.Label>
        <Form.Control type="text" name='autor' value={autor} onChange={(e) => [setAutor(e.target.value)]}/>
        {autorError && <Styled.ErrorMessage>{autorError}</Styled.ErrorMessage>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Título</Form.Label>
        <Form.Control type="text" name='title' value={title} onChange={(e) => [setTitle(e.target.value)]}/>
        {titleError && <Styled.ErrorMessage>{titleError}</Styled.ErrorMessage>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Descricao</Form.Label>
        <Form.Control style={{resize: 'none'}} as="textarea" rows={3} type="text" name='description' value={description} onChange={(e) => [setDescription(e.target.value)]}/>
        {descriptionError && <Styled.ErrorMessage>{descriptionError}</Styled.ErrorMessage>}
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Imagem</Form.Label>
        <Form.Control type="file" name='image' onChange={handleImageChange}/>
        {imageError && <Styled.ErrorMessage>{imageError}</Styled.ErrorMessage>}
      </Form.Group>

      <Styled.ButtonSave type='submit' onClick={handlePost}>Adicionar</Styled.ButtonSave>
    </Form>
    </>
  );
}

