import React from "react";
import * as S from '../styles/Footer.js'
import instagram from '../imgs/Footer/InstagramEllipse.png'
import twiter from '../imgs/Footer/Twitterellipse.png'
import Facebook from '../imgs/Footer/Facebook Ellipse.png'
import Pinterest from '../imgs/Footer/PinterestEllipse.png'

export default function Footer() {
    return (

        <S.Footer>
            <S.GlobalStyle />
            <S.Section>
                <S.Figure>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" title="Instagram" > 
                    <img src={instagram} alt="X" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" title="twiter">
                    <img src={twiter} alt="X" />
                    </a>
                    <a href="www.facebook.com" target="_blank" rel="noreferrer" title="Facebook">
                    <img src={Facebook} alt="X" />
                    </a>
                    <a target= "_blank" rel="noreferrer" href="https://br.pinterest.com/"  title="pinterest">
                    <img src={Pinterest} alt="X" />
                    </a>
                </S.Figure>
                <S.Nav>
                    <ul>
                        <li>ABOUT</li>
                        <li>RECIPES</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                </S.Nav>
            </S.Section>
            <S.Div>
                <p>
                Layout produzido por Vai na Web para fins exclusivamente educacionais. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/
                </p>
            </S.Div>
        </S.Footer>

    )
}