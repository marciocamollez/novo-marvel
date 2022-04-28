import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

export const ResultadoBuscaInterna = ({resultadosBusca}) => {
    return( 
        <section className="personagem--box__interno">
            {
                resultadosBusca.map(resultado => (
                    <div key={resultado.id} className="personagem--item__interno">
                        

                        <div className="personagem--nomes__interno">
                            <div><Link to={`/personagem/${resultado.id}`}><p>{resultado.name}</p></Link></div>
                            
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

