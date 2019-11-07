import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Uso de quebra ventos/1.JPG';
import imagem2 from '../../../imagens/galerias/Uso de quebra ventos/2.JPG';
import imagem3 from '../../../imagens/galerias/Uso de quebra ventos/3.JPG';

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
        }]

const QuebraVentos = () => (
        <div className="divTitulo">
                <span>Uso de quebra ventos</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default QuebraVentos

