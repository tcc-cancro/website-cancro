import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Conscientizacao dos fruticultores/1.jpg';
import imagem2 from '../../../imagens/galerias/Conscientizacao dos fruticultores/2.jpg';
import imagem3 from '../../../imagens/galerias/Conscientizacao dos fruticultores/3.jpg';
import imagem4 from '../../../imagens/galerias/Conscientizacao dos fruticultores/4.jpg';
import imagem5 from '../../../imagens/galerias/Conscientizacao dos fruticultores/5.jpg';
import imagem6 from '../../../imagens/galerias/Conscientizacao dos fruticultores/6.jpg';
import imagem7 from '../../../imagens/galerias/Conscientizacao dos fruticultores/7.jpg';
import imagem8 from '../../../imagens/galerias/Conscientizacao dos fruticultores/8.jpg';

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
        }]

const Fruticultores = () => (
        <div className="divTitulo">
                <span>Ações para conscientizaç̃ao dos fruticultores</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default Fruticultores

