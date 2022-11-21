import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-columns: repeat(12, minmax(0, 1fr));
`

export const FirstColumn = styled.div`
    grid-column: span 1 / span 1;
`

export const SecondColumn = styled.div`
    grid-column: span 5 / span 5;
    background-color: #F2F2F2;
    margin: 20px 0px 20px 0px;
    margin-bottom: 20px;
    border-radius: 20px 0px 0px 20px;
    padding: 20px;
`

export const ThirdColumn = styled.div`
    grid-column: span 6 / span 6;
    background-color: #fff;
    margin: 20px 20px 20px 0px;
    border-radius: 0px 20px 20px 0px;
    padding: 20px;
`