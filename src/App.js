import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';

// cambiar en onsearch y en el componente Detail
// const URL_BASE = 'blablablablablabalabl';
// const API_KEY = ' blablablabalblalla';
// reemplazar en axios (`${URL_BASE}${id}?key=${API_KEY}`)

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then (({data}) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
           window.alert('¡No hay personajes con este ID!');
        }
     });
   }

   const onClose = (id) => {
      const charactersFilter = characters.filter(character => 
         character.id !== Number(id))
      setCharacters(charactersFilter)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         
         </Routes>
      </div>
   );
}

export default App;
