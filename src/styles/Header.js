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
    flex-direction: column;
    height: 100%;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media screen and (max-width: 1023px) {
        justify-content: flex-end;
        background-position: -680px 0px;
        background-size: cover; 
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
    padding: 10px;
    text-transform: uppercase;
    border: solid transparent;
    &:hover{
        border: solid;
    }
`

export const Img = styled.img`
    display: none;
    @media screen and (max-width: 1023px) {
        display: flex;
    }
`
export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 1023px) {
        justify-content: flex-end;
    }
`
export const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 95vh;
`
export const Title = styled.h1`
    font-size: 9.4rem;
    color: #373737;
    letter-spacing: 15.75px;
    text-transform: uppercase;
    @media screen and (max-width: 1023px) {
        font-size: 2.5rem;
        letter-spacing: 4.2px;
    }
`