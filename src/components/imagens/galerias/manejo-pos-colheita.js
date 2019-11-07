import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Manejo de Pos-Colheita/1.JPG';
import imagem2 from '../../../imagens/galerias/Manejo de Pos-Colheita/2.JPG';
import imagem3 from '../../../imagens/galerias/Manejo de Pos-Colheita/3.JPG';
import imagem4 from '../../../imagens/galerias/Manejo de Pos-Colheita/4.JPG';
import imagem5 from '../../../imagens/galerias/Manejo de Pos-Colheita/5.JPG';
import imagem6 from '../../../imagens/galerias/Manejo de Pos-Colheita/6.JPG';
import imagem7 from '../../../imagens/galerias/Manejo de Pos-Colheita/7.JPG';
import imagem8 from '../../../imagens/galerias/Manejo de Pos-Colheita/8.JPG';
import imagem9 from '../../../imagens/galerias/Manejo de Pos-Colheita/9.JPG';

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
        },

        {
                src: imagem8,
                thumbnail: imagem8,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem9,
                thumbnail: imagem9,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        }]

const ManejoPosColheita = () => (
        <div className="divTitulo">
                <span>Manejo de Pós Colheita</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default ManejoPosColheita

