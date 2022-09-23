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
;
export const Footer= styled.footer`
 background-color: #F2F4F1;
 width: 100%;
`

export const Section = styled.section`
    
    display: flex;
    justify-content: space-between;
    @media  (max-width: 1023px) {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
   

`
export const Figure = styled.figure`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 20vw;
    height: 40vh;
    margin-left: 30px;
img{
    width: 37px;
    height: 37px;
    cursor: pointer;
}
@media  (max-width: 1023px){
 

    width: 250px;

}

`

export const Nav=styled.nav`
    width: 35vw;
ul{
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
}
li{
    width: 20vw;
    font-family: "Regular";
    list-style:none;
}
@media  (max-width: 1023px){
    height: 200px;
    ul{
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }
    li{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    }


`
export const Div= styled.div`
        background-color: #446061;
        width: 100%;
        height: 45px;
        display: flex;
        justify-content: center;
    @media  (max-width: 1023px){
        height: 10vh;
    }
`

export const Paragraph = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    font-size: 0.6rem;
`