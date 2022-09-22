import styled, {createGlobalStyle} from "styled-components";
import SemiBold from "../fonts/HurmeGeometricSans1/SemiBold.otf"
import Regular from "../fonts/HurmeGeometricSans1/Regular.otf"
import Background from "../imgs/header/background-header.png"

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
        font-family: "semiBold";
    }
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8vh;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: 100%;
    @media screen and (max-width: 1023px) {
        justify-content: flex-end;
    }
    
`
export const Nav = styled.nav`
    width: 35%;    
    @media screen and (max-width: 1023px) {
        display: none;
    }
`

export const Icon = styled.h2`
    font-size: 3rem;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1023px) {
        display: none;
    }
`

export const Ul = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
`

export const Li = styled.li`
    font-size: 1.5rem;
    cursor: pointer;
    font-family: "Regular";
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    width: 8vw;
    text-transform: uppercase;
    &:hover{
        border: solid;
    }
`