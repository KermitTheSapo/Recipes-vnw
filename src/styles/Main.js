import styled, {createGlobalStyle} from "styled-components";
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
    display: flex;
    justify-content: space-between;
    img{
        width: ;
    }
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
        border: solid ;
    @media  (max-width: 1023px){
        width: 60px;
        border: solid;
        
    }

`
export const DivAbout= styled.div`
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        p{
        font-family: 'Regular';
         font-size: 0.9rem;
         text-align: justify;
        width: 450px;
        }
        @media  (max-width: 1023px) {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 60%;
        width: 100%;
        p{
            width: 100%;
            font-family: Regular;
            font-size: 1.2rem;
            padding-left: 10px;
            padding-right: 10px;
        }
       
    }

`
    export const TituloAbout = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 70px;
        h2{
            font-size: 2.5rem;
        }
        @media  (max-width: 1023px){
           
        }
`