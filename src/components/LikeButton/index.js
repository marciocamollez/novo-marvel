import React, { useState, useEffect } from 'react';
import './style.css';


const LikeButton = ({items}) => {

    const [dark, setDark] = useState(
        localStorage.getItem('dark-mode') === 'true'
    );

    const personagensDb = localStorage['personagens'];
    const personagens = personagensDb ? JSON.parse(personagensDb) : [];
    
    
    const toggleDarkMode = () => {
        setDark(!dark);
        personagens.push(items);
        localStorage['personagens'] = JSON.stringify(personagens);
    }

    useEffect(() => {
        localStorage.setItem('dark-mode', dark);
        
    }, [dark]);

    

    /*const taskMessage = 'Oi';
    const taskName = 'Mundo';

    const handleLike = () => {

        localStorage.setItem("message", taskMessage);
        localStorage.setItem("name", taskName);

        var obj = {
            "message": taskMessage,
            "name": taskName
        }

        localStorage.setItem("task", JSON.stringify(obj));
        var val = localStorage.getItem('obj');

        console.log('retrievedValue', JSON.parse(val));

    }*/


    /*const [like, setLike] = useState(100);
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

    useEffect(() => {
        
    }, [isLike]);*/

    return(
        <div>
            <button onClick={toggleDarkMode} className={"bt-like like-button " + (dark ? "liked" : "")}>
                {/*{like}*/}
            </button>
        </div>
    );
};

export default LikeButton;