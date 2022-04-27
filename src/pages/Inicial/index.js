import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import logo from '../../logo.svg';

import { Tabela } from '../../components/Tabela';
import { Busca } from '../../components/Busca';
import { Contagem } from '../../components/Contagem';
import { Ordenacao } from '../../components/Ordenacao';

//hash = timestamp (1) + private key + public key convertido em md5
const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"


export const Inicial = () => {

    const [items, setItems] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [query, setQuery] = useState('');
    const [contagem, setContagem] = useState([]);
    const [order, setOrder] = useState(true);

    useEffect(() => {
        const fetch = async() => {
            if(query===''){
                const result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);
                setItems(result.data.data.results);
                setCarregando(false);
                setContagem(result.data.data.count);
            } else {
                const result = await axios(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${apikey}&hash=${hash}`);
                setItems(result.data.data.results);
                setCarregando(false);
                setContagem(result.data.data.count);
                
            }
        }

        fetch();
    },[query]);

    //Ordenacao
    useEffect(() => {
        const fetch2 = async()=>{
    
          //Inicialmente deixa marcado a ordenação original que já é por nome
          if(order){
            const result = await axios(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}`);
            setItems(result.data.data.results);
            setOrder(true);
            setCarregando(false);
    
            //Caso a caixa seja desmarcada, faz a requisição para ser ordenado por item modificado
          }else{
            const result = await axios(`https://gateway.marvel.com/v1/public/characters?orderBy=modified&ts=1&apikey=${apikey}&hash=${hash}`);
            setItems(result.data.data.results);
            setOrder(false);
            setCarregando(false);
          }
        
      }
    
      fetch2()
      },[order]);

    return(
        <div className="container">
            <header className="inicial">
                <div><img src={logo} alt="Marvel" title="Marvel" /></div>
                <h1>Explore o Universo</h1>
                <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
            </header>

            <Busca search={(q) => setQuery(q)}></Busca>

            <div className="widget">
                <Contagem contagem={contagem} carregando={carregando} />

                <Ordenacao check={() => setOrder(!order)} /> {/*envia a props do check pra lá (true ou false)*/}
                
            </div>

            <Tabela items={items} carregando={carregando} />
        </div>
    )
}