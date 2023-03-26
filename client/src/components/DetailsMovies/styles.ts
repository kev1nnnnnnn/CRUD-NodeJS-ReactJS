import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 800px; 
    width: 100%;
    height: 100vh;
    gap: 3em;

    @media (max-width: 768px) {
        height: auto;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100vh;
    }
`

export const Image = styled.img`
    max-width: 50%; 
    margin-right: 1em; 
    
`
export const ContainerChildren = styled.div`
    display: flex;
    flex-direction: column;

`
export const Autor = styled.h2`
    color: #fff;
    border-bottom: 1px dotted #fff;
    position: absolute;
    font-size: 1.5em;
    margin-bottom: 0.5em;

    @media (max-width: 768px) {  
        margin: 0em 2em;
    }

`
export const Title = styled.h1`
    color: #F3732F;
    margin: 1em 0 1em 0;
    font-size: 2em;

    @media (max-width: 768px) {  
        margin: 1.5em 1em 0.5em 1.2em;
    }
    
`
export const Sinopse = styled.h2`
    color: #FFF;
    margin: 0 0 0.5em 0;

    @media (max-width: 768px) {  
        margin: 0.3em 1em 1.5em 2em;
    }
    
`
export const Description = styled.p`
    color: #fff;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 1.5em;

    @media (max-width: 768px) {  
        margin-left: 2em;
        text-align: left;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2em;
    }

`