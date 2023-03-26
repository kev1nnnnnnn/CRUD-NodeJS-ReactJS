import React from 'react';
import { Card } from 'react-bootstrap';
import { StarRating } from '../Star';
import * as Styled from './styles';

interface CardProps {
    title: string;
    image: string;
}

export function CardComponent(props: CardProps) {

    const { title, image } = props;

    return(
        <Styled.StyledCard>
            <>
            <Card.Img variant="top" src={image} /> 
            <Styled.CardBody>
                <StarRating 
                rating={0}
                color="#F3732F"
                size={18}
                />
                <Styled.Title>{title}</Styled.Title>
            </Styled.CardBody>
            </>
        </Styled.StyledCard>    
       
    )
}