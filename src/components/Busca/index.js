import React, { useState } from 'react';
import './style.css';

export const Busca = ({search}) => {

    const [text, setText] = useState('');

    const onSearch = (q) => {
        setText(q);
        search(q);
    }
    return(
        <section className="busca--box">
            <form className="busca--form">
                <img src="/ic_busca.svg" alt="Busca" />
                <input type="text" placeholder="Procure por heróis" autoFocus onChange={(e) => onSearch(e.target.value)} value={text} className="busca--input" />
            </form>
        </section>
    );
}
