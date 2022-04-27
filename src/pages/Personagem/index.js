import { useParams } from 'react-router-dom';

export const Personagem = () => {

    let params = useParams(); //Pegar id pela URL com o react router dom

    return(
        <div>
            <h1>Personagem nº{params.id}</h1>
            
        </div>
    )
}