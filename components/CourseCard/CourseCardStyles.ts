import styled from "styled-components";

export const CardContainer = styled.div`
    max-height: 12rem;
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 20px;
    margin-bottom: 20px;
`

export const ImageContainer = styled.div`
    grid-column: span 4 / span 4;
    height: 150px;
    background-color: #333;
    border-radius: 10px;
`

export const CardContentContainer = styled.div`
    grid-column: span 8 / span 8;   
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const CardTitle = styled.h3`
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
`

export const CardDescription = styled.span`
    font-size: 16px;
    color: #A4A4A4;
    font-family: 'Lato', sans-serif;
`

export const CardInfo = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`