import { Container, Modal } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FormModal } from '../FormModal';
import * as Styled from './styles';
import { api } from '../../services/api';
import { MOVIES_URL } from '../PathImage/index'
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { Trash, PencilSimpleLine } from 'phosphor-react';


// TIPAGEM DE DADOS
interface dataProps {
    id: number;
    autor: string;
    title: string;
    description: string;
    image: string;
}


export function Panel() {
    const [data, setData] = useState<dataProps[]>([]);
    const [show, setShow] = useState(false);
    
    // modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // api filmes
    async function getMovies() {
        await api.get('/filmes')
        .then((res) => {
            setData(res.data.results)
        })
        .catch((error) => console.log(error));
    }
   
    // Deletar
    async function handleDelete(id: number) {
        try {
          await api.delete(`/filmes/${id}`);
          setData(data.filter((item) => item.id !== id));
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        getMovies()
    }, []);


    // pagination
    const [postsPerPage] = useState(10); // Quantidade de filmes por página páginas.
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
      };

    return (
        <>
        <Container className='catalogue'>
            <Styled.Button onClick={handleShow}>Adicionar</Styled.Button>
                
            <Styled.Table>
                <thead>
                    <tr>
                    <Styled.Th>Autor</Styled.Th>
                    <Styled.Th>Título</Styled.Th>
                    <Styled.Th>Descrição</Styled.Th>
                    <Styled.Th>Imagem</Styled.Th>
                    <Styled.Th>Editar</Styled.Th>
                    <Styled.Th>Excluir</Styled.Th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((item) => (
                    <tr key={item.id}>
                        <Styled.Td>{item.autor}</Styled.Td>
                        <Styled.Td>{item.title}</Styled.Td>
                        <Styled.Td>{item.description}</Styled.Td>
                        <Styled.Td>
                            <Styled.Image src={`${MOVIES_URL}${item.image}`} />
                        </Styled.Td>
                        <Styled.Td>
                            <Link  to={{pathname:`/editar/${item.id}`}}>
                                <PencilSimpleLine
                                style={{margin: 'auto'}} 
                                size={25} 
                                color='#4364f7'
                                />
                            </Link>
                        </Styled.Td>
                        <Styled.Td>
                            <Trash style={{margin: 'auto'}} size={22} color='#FF0000'
                            onClick={() => {if(window.confirm('Deseja excluir realmente este item?')){ handleDelete(item.id)};}} 
                            />
                        </Styled.Td>
                    </tr>
                    ))}
                </tbody>
            </Styled.Table>
        
            {/* Pagination */}
            <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginate={paginate}
            />
        </Container>

       {/* Modal */}
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Filmes</Modal.Title>
        </Modal.Header>
        {/* form */}
        <Modal.Body>
            <FormModal />
        </Modal.Body>
    </Modal>
    </>
);
}

