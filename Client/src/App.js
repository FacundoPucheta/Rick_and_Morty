import './styles_app/App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


// const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
// const API_KEY = '801572c236c6.d06f329bd8c71dd3a937';
const email = 'facundopucheta94@gmail.com';
const password = 'Facumon94';

function App() {

   const [access, setAccess] = useState(false);
   const [characters, setCharacters] = useState([]);

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
      }, [access, navigate]);


      function onSearch(id) {          
         axios(`http://localhost:3001/rickandmorty/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               let exist = characters.find((ch) => ch.id === data.id)
               if (exist) {
                  alert("Ya existe el personaje")
               } else {
                  setCharacters((oldChars) => [...oldChars, data]);
               }
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         })
         .catch((error) => {
            console.log('Error: ', error);
            window.alert('Se ah producido un ERROR !');
         });
            
      }

      const onClose = (id) => {

      const charactersFilter = characters.filter(character => character.id !== id)
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
            <Route path='/favorites' element={<Favorites/>} />
         </Routes>
         
      </div>
   );
}

export default App;
