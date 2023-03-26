import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

// API
import { api } from '../../services/api';
import { CardComponent } from '../CardComponent';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
import { MOVIES_URL } from '../PathImage';

// TIPAGEM DE DADOS
interface dataProps {
    id: string;
    autor: string;
    title: string;
    description: string;
    image: string;
}

export function Catalogue() {

    const [data, setData] = useState<dataProps[]>([]);

    // api filmes
    function getMovies() {
        api.get('/filmes')
        .then((res) => {
            setData(res.data.results)
        })
        .catch((error) => console.log(error));
    }
    useEffect(() => {
        getMovies()
    }, []);

    // pagination
    const [postsPerPage] = useState(12); // Quantidade de filmes por página páginas.
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
               
            <Row className='mt-4'>
                { currentPosts.map((item) => (
                <Col md={3}>
                        <Link to={`/filmes/${item.id}`} className="text-decoration-none">

                            <CardComponent
                            title={item.title}
                            image={`${MOVIES_URL}${item.image}`}
                            />
                    </Link>
                </Col>
                ))}   
            </Row>

            {/* Paginação*/}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={data.length}
                paginate={paginate}
                />
        </Container>  
        </>
    );
}

