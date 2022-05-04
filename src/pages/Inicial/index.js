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

//Hash da segunda conta criada. Deixar como backup
//const hash = "e8a129eee49b78fd4436bf9bb8102b3d";
//const apikey = "0b9047fa3f3f24bdf3933db0deb25d35";

export const Inicial = () => {

    const [items, setItems] = useState([]);
    const [carregando, setCarregando] = useState(true);

    //Busca
    const [query, setQuery] = useState('');

    //Contagem
    const [contagem, setContagem] = useState([]);

    //Ordenacao
    const [order, setOrder] = useState(true);

    //Paginação
    const [total, setTotal] = useState(0);
    const [limit] = useState(20);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);

    //Busca
    useEffect(() => {
        const fetchSearch = async() => {
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
        fetchSearch();
        
    },[query]);

    //Ordenacao
    useEffect(() => {
        const fetchOrder = async()=>{
    
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
    
        fetchOrder();
        
      },[order]);

      //Paginação
      useEffect(() => {
        const fetchPages = async()=>{
          const result = await axios(
            `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${apikey}&hash=${hash}&offset=${offset}&limit=${limit}` + {currentPage}
          );
          setTotal(result.data.data.total);
          const totalPages = Math.ceil(total / limit);
    
          const arrayPages = [];
          for (let i = 1; i <= totalPages; i++) {
            arrayPages.push(i);
          }
    
          setPages(arrayPages);
          setItems(result.data.data.results);
          setOffset(offset + 20); //Offset de 20 em 20 personagens para trocar a página
          
        }
    
        fetchPages();
        
      },[currentPage, limit, total]);

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

            

            <section className="paginacao">
                {currentPage > 1 && (
                    <div onClick={() => setCurrentPage(currentPage - 1)}>Página Anterior</div>
                )}
                {/*Caso queira exibir todos os botões
                {pages.map((page) => (
                    <div key={page} onClick={() => setCurrentPage(page)} > {page} </div>
                ))}*/}
                {currentPage < pages.length && (
                    <div onClick={() => setCurrentPage(currentPage + 1)}>Próxima Página</div>
                )}
            </section>

        </div>
    )
}