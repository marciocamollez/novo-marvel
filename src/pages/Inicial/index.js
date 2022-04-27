import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import logo from '../../logo.svg';

import { Tabela } from '../../components/Tabela';
import { Busca } from '../../components/Busca';
import { Contagem } from '../../components/Contagem';

//hash = timestamp (1) + private key + public key convertido em md5
const hash = "21beb75ca82b20e52c8910f3e6599d79"
const apikey = "eb8c78fd1e6e98315a9d42fff3b5c040"


export const Inicial = () => {

    const [items, setItems] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [query, setQuery] = useState('');
    const [contagem, setContagem] = useState([]);

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
            </div>

            <Tabela items={items} carregando={carregando} />
        </div>
    )
}