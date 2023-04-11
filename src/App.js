import './styles_app/App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

// cambiar en onsearch y en el componente Detail
// reemplazar en axios (`${URL_BASE}${id}?key=${API_KEY}`)
const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '801572c236c6.d06f329bd8c71dd3a937';

function App() {

   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

   const email = 'facundopucheta94@gmail.com';
   const password = 'Facumon94';
   const location = useLocation().pathname;
   const navigate = useNavigate();


   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true);
         navigate('/home');
      }
   }


   useEffect(
      () => {
         !access && navigate('/');
      }, [access]);


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

   
   
   
   return (
      
      <div className='App'>
         
         {location !== '/' && <Nav onSearch={onSearch} setCharacters={setCharacters} setAccess={setAccess} />} 
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About/>} />
            <Route path='/detail/:id' element={<Detail/>} />
         
         </Routes>
      </div>
   );
}

export default App;
