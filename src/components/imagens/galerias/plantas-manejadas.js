import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/1.JPG';
import imagem2 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/2.JPG';
import imagem3 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/3.JPG';
import imagem4 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/4.JPG';
import imagem5 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/5.JPG';
import imagem6 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/6.JPG';
import imagem7 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/7.JPG';
import imagem8 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/8.JPG';
import imagem9 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/9.JPG';
import imagem10 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/10.JPG';
import imagem11 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/11.JPG';
import imagem12 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/12.JPG';
import imagem13 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/13.JPG';
import imagem14 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/14.JPG';
import imagem15 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/15.JPG';
import imagem16 from '../../../imagens/galerias/Plantas manejadas para controle do Cancro Europeu/16.JPG';

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
        },

        {
                src: imagem10,
                thumbnail: imagem10,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem11,
                thumbnail: imagem11,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem12,
                thumbnail: imagem12,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem13,
                thumbnail: imagem13,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem14,
                thumbnail: imagem14,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem15,
                thumbnail: imagem15,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        },

        {
                src: imagem16,
                thumbnail: imagem16,
                thumbnailWidth: 320,
                thumbnailHeight: 174,
        }]

const PlantasManejadas = () => (
        <div className="divTitulo">
                <span>Plantas manejadas para controle do Cancro Europeu</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default PlantasManejadas

