import {createGlobalStyle} from "styled-components";
import SemiBold from "../fonts/HurmeGeometricSans1/SemiBold.otf"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "teste";
        src: url(${SemiBold});
    }
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "teste";
    }
`