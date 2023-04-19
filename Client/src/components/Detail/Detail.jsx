import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

// put here the const for API_KEy and URL :) => this to modify the axios call
// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '801572c236c6.d06f329bd8c71dd3a937';

const Detail = () => {

    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);



    return(
        <div>
    
            <h1>{character?.name}</h1>
            <hr></hr>
            <label>- STATUS -</label> <p>{character?.status}</p>
            <label>- GENDER -</label> <p>{character?.gender}</p>
            <label>- SPECIE -</label> <p>{character?.species}</p>
            <label>- ORIGIN -</label> <p>{character?.origin?.name}</p>
           
            <img src={character?.image} alt={character?.name} />
                
        </div>
    )
}

export default Detail;