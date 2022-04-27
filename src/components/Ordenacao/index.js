import React from 'react';

/* recebe o valor true ou false e armazena na variável check */

export const Ordenacao = ({order, check}) => {
    
    return(
        <>
            <span className="personagem--ordenacao">
              <span><img src="/ic_heroi.svg" alt="Ordenar" /></span>
              <span className="personagem--ordenacao__check">
                  <p>Ordenar por nome A-Z:</p> 
                  <input id="checkbutton" type="checkbox" defaultChecked={order} onChange={check} /><label htmlFor="checkbutton"></label>
                 
              </span>
            </span>
        </>
    );
}
