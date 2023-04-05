import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

// cambiar en onsearch y en el componente Detail
// reemplazar en axios (`${URL_BASE}${id}?key=${API_KEY}`)
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '801572c236c6.d06f329bd8c71dd3a937';

function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
         character.id !== id)
      setCharacters(charactersFilter)
      
   }

   const location = useLocation().pathname;
   
   
   
   return (
      
      <div className='App'>
         
         {location !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form/>} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         
         </Routes>
      </div>
   );
}

export default App;
