import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

import { Busca } from '../../components/Busca';
import { ResultadoBuscaInterna } from '../../components/ResultadoBuscaInterna';

//hash = timestamp (1) + private key + public key convertido em md5
const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"

export const Personagem = () => {

    const [query, setQuery] = useState('');
    const [resultadosBusca, setResultadosBusca] = useState([]);  

    const [items, setItems] = useState([]);  
    const [quadrinhos, setQuadrinhos] = useState([]);
    let { id } = useParams(); //Pegar id pela URL com o react router dom v6
    //console.log(id);


    useEffect(() => {
        const fetch = async()=>{
            const result = await axios(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${apikey}&hash=${hash}`);
            //console.log(result.data.data.results);
            setItems(result.data.data.results);  
  
  
            //console.log(result.data.data.results[0].comics.items);
            //Para conseguir o array dentro do array e ver quais são todos os quadrinhos que o personagem participou
            setQuadrinhos(result.data.data.results[0].comics.items);
      }
  
      fetch()
    },[items]); //A cada clique feito na busca interna, vai ser preciso refatorar o items

    //Busca da página de personagens
    useEffect(() => {
        const fetch3 = async() => {
            if(query){
                const result = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`);
                setResultadosBusca(result.data.data.results);
                
            } 
        }

        fetch3();
    },[query]);

    return(
        <div className='background-green'>
            <div className="container">
                <div className="cabecalho--personagem">
                    <header className="header--personagem">
                        <div className="logo--personagem"><Link to="/"><img src="/logo_menor.svg" alt="Marvel" title="Marvel" /></Link></div>
                        <Busca search={(q) => setQuery(q)}></Busca>
                        
                    </header>
                </div>
                <ResultadoBuscaInterna resultadosBusca={resultadosBusca} />
                
                {/*<h3>Personagem nº{params.id}</h3>*/}

                <section>
                    {
                        items.map(item => (
                            <div key={item.id} className="personagem--box">
                                <div className="personagem--details">
                                <h1>{item.name}</h1>
                                <p>{item.description}</p>

                                <div className="personagem--numbers">
                                    <div className="personagem--numbers__quadrinhos">
                                        <p><strong>Quadrinhos:<br /></strong> 
                                        <img src="/ic_quadrinhos.svg" alt="Quadrinhos" /> <span>{item.comics.available}</span></p>
                                    </div>

                                    <div>
                                        <p><strong>Filmes:<br /></strong> 
                                        <img src="/ic_trailer.svg" alt="Filmes" /> <span>{item.series.available}</span></p>
                                    </div>
                                </div>
                                
                                {/*<p><strong>Último lançamento:</strong> {item.comics.items[0].name}</p>*/}
                                </div>

                                <div className="personagem--image">
                                    <div><img src={item.thumbnail.path + "/detail.jpg"} alt={item.name} /></div>
                                </div>

                                
                            
                            </div>
                            
                        ))
                    }

                    <section className="personagem--aparicoes">
                        <h2>Todas as aparições:</h2>
                        {
                            quadrinhos.map(item => (
                            <div key={item.name}>
                                <p>{item.name}</p>
                            </div>
                            ))
                        }
                    </section>

                </section>

            </div>
        </div>
    )
}