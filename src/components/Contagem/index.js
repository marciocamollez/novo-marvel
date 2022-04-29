import React from 'react';
import './style.css';

export const Contagem = ({contagem, carregando}) => {

    return(
        <span className="personagem--count">

            {carregando ? "" : <p data-testid="contar-herois">Encontrados {contagem} heróis</p>}
        </span>

    );
}
