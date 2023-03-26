import React from 'react';

interface PaginationProps {
    postsPerPage: number;
    totalPosts: number;
    paginate: (pageNumber: number) => void;
}

const Pagination = (props: PaginationProps) => {
    
    const { postsPerPage, totalPosts, paginate } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
        <ul className='pagination'>
            {pageNumbers.map(number => (
            <li key={number} className='page-item' style={{cursor: 'pointer', marginTop: 10, marginLeft: 5}}>
                <a onClick={() => paginate(number)}  className='page-link'>
                {number}
                </a>
            </li>
            ))}
        </ul>
        </nav>
    );
};

export default Pagination;
