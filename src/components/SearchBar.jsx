const SearchBar = (props) => {

   const buscar = props.onSearch;


   return (
      <div>
         <input type='search' />
         <button onClick={buscar}>Agregar</button>
      </div>
   );
}

export default SearchBar;