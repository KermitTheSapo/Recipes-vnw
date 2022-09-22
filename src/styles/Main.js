import {createGlobalStyle} from "styled-components";
import SemiBold from "../fonts/HurmeGeometricSans1/SemiBold.otf"
import Regular from "../fonts/HurmeGeometricSans1/Regular.otf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "semiBold";
        src: url(${SemiBold});
    }
    @font-face {
        font-family: "Regular";
        src: url(${Regular});
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Regular";
    }
`

export const FigureAbout = styled.figure`
    background-color: #ffffff;
    border: solid blue;
    display: flex;
    @media  (max-width: 1023px) {
        display: flex;
        height: 1050px;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        img{
            width: 100%;
        }
    }

`
export const Barra = styled.div`
        width: 40px;
        border: solid;
    @media  (max-width: 1023px){
        width: 30px;
        border: solid;
    }

`
export const DivAbout= styled.div`
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-family: 'Regular';
        font-weight: lighter;
        
        @media  (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        height: 100%;
        font-family: 'Regular';
        border: solid red;
        width: 100%;
        p{
            border: solid pink;
            width: 45vw;
        }
       
    }

`