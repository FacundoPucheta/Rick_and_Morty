import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

// put here the const for API_KEy and URL :) => this to modify the axios call
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '801572c236c6.d06f329bd8c71dd3a937';

const Detail = () => {

    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
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
            <h3>STATUS -- {character?.status}</h3>
            <h3>GENDER -- {character?.gender}</h3>
            <h3>SPECIE -- {character?.species}</h3>
            <h3>ORIGIN -- {character?.origin?.name}</h3>
            <img src={character?.image} alt={character?.name} />
                
        </div>
    )
}

export default Detail;