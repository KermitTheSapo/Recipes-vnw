import React from "react";
import * as S from "../../styles/Main/Subscribe"

export default function Subscribe(){
    return(
        <S.SectionSub>
            <S.GlobalStyle/>
            <h2>Subscribe</h2>
            <p>Sign up for newsletter</p>
            <S.Form>
            <label for="email">
                <S.Email type="email" id="email" placeholder="Your Email" name="email" required/>
                <S.Botao type='submit' value="SUBMIT" name="enviar" />
            </label>
            </S.Form>
        </S.SectionSub>
    )
}