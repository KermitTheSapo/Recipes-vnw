import React from "react";
import Hamburguer from "../imgs/header/hamburguer-icon.svg"
import * as S from "../styles/Header.js"

export default function Header(){
    return(
        <S.Header>
            <S.GlobalStyle/>
            <S.Top>                
                <S.Icon>RC</S.Icon>
                <S.Nav>
                    <S.Ul>
                        <S.Li>About</S.Li>
                        <S.Li>Recipes</S.Li>
                        <S.Li>Subscribe</S.Li>
                    </S.Ul>
                </S.Nav>
                <S.Img src={Hamburguer} alt="" />
            </S.Top>
            <S.Bottom>
                <S.Title>Recipes</S.Title>
            </S.Bottom>
        </S.Header>        
    )
}