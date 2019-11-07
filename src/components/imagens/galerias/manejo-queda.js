import React from 'react';
import Gallery from 'react-grid-gallery';
import imagem1 from '../../../imagens/galerias/Manejo de queda de folhas/1.JPG';

const IMAGES =
        [{
                src: imagem1,
                thumbnail: imagem1,
                thumbnailWidth: 320,
                thumbnailHeight: 174,

        }]

const ManejoQueda = () => (
        <div className="divTitulo">
                <span>Manejo de queda de folhas</span>
                <Gallery images={IMAGES} enableLightbox={true}/>
        </div>
);

export default ManejoQueda

