import styled, {createGlobalStyle} from "styled-components";
import SemiBold from "../../fonts/HurmeGeometricSans1/SemiBold.otf";
import Regular from "../../fonts/HurmeGeometricSans1/Regular.otf";

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



export const SectionSub = styled.section`
    background-color: #DFE4DE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 400px;
    p{
        font-family: "Regular";
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
        color: #373737;
     }   
     h2{
        color: #373737;
        font-size: 2rem;
     }
    @media  (max-width: 1023px){
        h2{
            font-size: 3.5rem;
            width: 100%;
            text-align: center;
            color: #373737;
        }
     p{
        font-family: "Regular";
        font-size: 2rem;
        width: 100%;
        text-align: center;

     }   
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    label{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 30vh;
    }
    
`
export const Email= styled.input`
    width: 50px;
    width: 40vw;
    height: 10vh;
    border: none;
    background-color: #EFF1EE;
    ::placeholder{
        color: #707070;
        padding-left: 20px;
        font-family: "Regular";
    }
    @media  (max-width: 1023px){
    width: 95%;
    height: 10vh;
    border: none;
    background-color: #EFF1EE;
    ::placeholder{
        color: #707070;
        padding-left: 20px;
        font-family: "Regular";
    }
}

`

export const Botao= styled.input`
        background-color: #DFE4DE ;
        color: #373737;
        width: 11vw;
        height: 8vh;
        border: solid #373737;

    @media  (max-width: 1023px){
        background-color: #DFE4DE ;
        color: #373737;
        width: 95%;
        height: 8vh;
        border: solid #373737;
        }
    
`