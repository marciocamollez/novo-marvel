import React, { useState, useEffect } from 'react';
import './style.css';


const LikeButton = ({items}) => {


    const [like, setLike] = useState(100);
    const [isLike, setIsLike] = useState();

    const personagensDb = localStorage['personagens'];
    const personagens = personagensDb ? JSON.parse(personagensDb) : [];
    

    const handleLike = () => {
        setLike(like + (isLike?-1:1));

        if(like === 100){
            setIsLike(true);
            console.log('clicou no true');
            personagens.push(items);
            localStorage['personagens'] = JSON.stringify(personagens);
            
        }
        else{
            setIsLike(false);
            console.log('clicou no false');
            personagens.pop(items);
            localStorage['personagens'] = JSON.stringify(personagens);
        }
        //setIsLike(!isLike);
        //console.log(items);

    }

    /*useEffect(() => {
        
    }, [isLike]);*/

    return(
        <div>
            <button onClick={handleLike} className={"bt-like like-button " + (isLike ? "liked" : "")}>
                {/*{like}*/}
            </button>
        </div>
    );
};

export default LikeButton;