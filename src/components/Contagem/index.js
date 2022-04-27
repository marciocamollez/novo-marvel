import React from 'react';
import './style.css';

export const Contagem = ({contagem, carregando}) => {

    return(
        <span className="personagem--count">

            {carregando ? "" : <p>Encontrados {contagem} heróis</p>}
        </span>

    );
}
