import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Arqueamento de ramos/1.JPG';
import imagem2 from '../../../imagens/galerias/Arqueamento de ramos/2.JPG';

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
        }]

const Arqueamento = () => (
        <div className="divTitulo">
                <span>Arqueamento de ramos</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default Arqueamento

