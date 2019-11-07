import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Peritecios Ascas e Ascosporos/1.JPG';
import imagem2 from '../../../imagens/galerias/Peritecios Ascas e Ascosporos/2.JPG';
import imagem3 from '../../../imagens/galerias/Peritecios Ascas e Ascosporos/3.JPG';
import imagem4 from '../../../imagens/galerias/Peritecios Ascas e Ascosporos/4.jpg';
import imagem5 from '../../../imagens/galerias/Peritecios Ascas e Ascosporos/5.jpg';
import imagem6 from '../../../imagens/galerias/Peritecios Ascas e Ascosporos/6.jpg';
import imagem7 from '../../../imagens/galerias/Peritecios Ascas e Ascosporos/7.jpg';

const IMAGES =
        [{
                src: imagem1,
                thumbnail: imagem1,
                thumbnailWidth: 320,
                thumbnailHeight: 174,

        },

        {
                src: imagem2,
                thumbnail: imagem2,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem3,
                thumbnail: imagem3,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem4,
                thumbnail: imagem4,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem5,
                thumbnail: imagem5,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem6,
                thumbnail: imagem6,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem7,
                thumbnail: imagem7,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        }]

const Peritecios = () => (
        <div className="divTitulo">
                <span>Peritécios, Ascas e Asćosporos</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default Peritecios

