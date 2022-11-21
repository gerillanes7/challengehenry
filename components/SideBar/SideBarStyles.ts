import styled from "styled-components";

interface IMenuItem {
    active: boolean;
}

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #FFF;
`

export const ItemsContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const MenuItem = styled.div<IMenuItem>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-shadow: ${(props) => props.active && '-5px 0px 0px #F2F2F2 inset'};
    font-weight: ${(props) => props.active && '700'};
    color: ${(props) => props.active ? '#fff' : "rgba(255, 255, 255, 0.3)"};
    cursor: pointer;
`

export const MenuTitle = styled.span`
    margin-top: 10px;
    font-family: 'Lato', sans-serif;
`

export const LogOutButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 255, 255, 0.3);
`