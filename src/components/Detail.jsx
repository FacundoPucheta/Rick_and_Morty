import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';

// put here the const for API_KEy and URL :) => this to modify the axios call

const Detail = () => {

    const [character, setCharacter] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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