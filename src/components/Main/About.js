import React from "react";
import * as S from "../../styles/Main/About"
import colher from '..//../imgs/about/pexels-karolina-grabowska-4199094.png'

export default function About() {
    return (
        <div>
            <S.GlobalStyle />

            <S.FigureAbout>
                <img src={colher} alt="colher" />
                <S.DivAbout>
                    <S.TituloAbout>
                        <h2>ABOUT</h2>
                        <S.Barra></S.Barra>
                    </S.TituloAbout>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies sapien facilisis aliquam.</p>
                </S.DivAbout>
            </S.FigureAbout>

        </div>
    )
}