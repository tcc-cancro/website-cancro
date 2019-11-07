import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Sintomas do Cancro Brotacao e Floracao/1.JPG';
import imagem2 from '../../../imagens/galerias/Sintomas do Cancro Brotacao e Floracao/2.JPG';
import imagem3 from '../../../imagens/galerias/Sintomas do Cancro Brotacao e Floracao/3.JPG';
import imagem4 from '../../../imagens/galerias/Sintomas do Cancro Brotacao e Floracao/4.JPG';
import imagem5 from '../../../imagens/galerias/Sintomas do Cancro Brotacao e Floracao/5.JPG';
import imagem6 from '../../../imagens/galerias/Sintomas do Cancro Brotacao e Floracao/6.JPG';

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
        ]

const CancroFloracaoBrotacao = () => (
        <div className="divTitulo">
                <span>Sintomas do Cancro na Brotação e Floração</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default CancroFloracaoBrotacao

