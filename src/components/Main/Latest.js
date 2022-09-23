import React from "react";
import * as S from "../../styles/Main/Latest.js"
import Red from "../../imgs/main/red-velvet.png"
import Pizza from "../../imgs/main/pizza.png"
import Peanut from "../../imgs/main/peanut.png"

export default function Latest(){
    return(
        <S.Div>
            <S.GlobalStyle/>
            <S.Inicio>
                <S.Title>Latest Recipes</S.Title>
                <S.Borda></S.Borda>
            </S.Inicio>
            <S.opcoes>
                <S.Ingrediente>
                    <S.Img src={Red} alt="" />
                    <S.Nome>
                        <S.Linha></S.Linha>
                        <h2>Red Velvet Cake</h2>
                    </S.Nome>                    
                </S.Ingrediente>
                <S.Ingrediente>
                    <S.Img src={Pizza} alt="" />
                    <S.Nome>
                        <S.Linha></S.Linha>
                        <h2>Red Velvet Cake</h2>
                    </S.Nome>
                </S.Ingrediente>
                <S.Ingrediente>
                    <S.Img src={Peanut} alt="" />
                    <S.Nome>
                        <S.Linha></S.Linha>
                        <h2>Red Velvet Cake</h2>
                    </S.Nome>
                </S.Ingrediente>
            </S.opcoes>
        </S.Div>
    )
}