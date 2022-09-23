import styled, {createGlobalStyle} from "styled-components";
import Regular from "../../fonts/HurmeGeometricSans1/Regular.otf";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    @font-face {
        font-family: "Regular";
        src: url(${Regular});
    }
`

export const Borda = styled.div`
    width: 100px;
    height: 6px;
    background-color: black;
`

export const Div = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #F2F4F1;
`

export const Title = styled.h2`
    width: 100%;
    text-align: center;
    justify-content: center;
    font-size: 2.5rem;
    letter-spacing: 1.72px;
`

export const Inicio = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const opcoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50vh;
    @media screen and (max-width: 1023px){
        flex-direction: column;
        gap: 20px;
        height: 130vh;
    }
`

export const Ingrediente = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: white;
    width: 25%;
    height: 90%;
    box-shadow: 0px 7px 6px #00000029;
    @media screen and (max-width: 1023px){
        height:90%;
        width: 90%;
    }
`

export const Linha = styled.div`
    width: 50px;
    height: 4px;
    background-color: black;
`

export const Img = styled.img`
    width: 100%;
`

export const Nome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50%;
    gap: 30px;
    font-family: "Regular";
    @media screen and (max-width: 1023px){
        height: 25%;
    }
`
