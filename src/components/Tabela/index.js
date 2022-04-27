import React from "react";
import './style.css';
import { Link } from 'react-router-dom';

export const Tabela = ({items, carregando}) => {
    return carregando ? <h1>Carregando...</h1> : 
        <section className="personagem--box">
            {
                items.map(item => (
                    <div className="personagem--item">
                        <div>
                            <Link to={`/personagem/${item.id}`}>
                                <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt={item.name} />
                            </Link>
                            <div className="personagem--barra"></div>
                        </div>
            
                        <div className="personagem--nomes">
                            <div><Link to={`/personagem/${item.id}`}><h2>{item.name}</h2></Link></div>
                            
                        </div>
                    </div>
                ))
            }
        </section>
    
}

