import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, setCharacters, setAccess}) => {
    
    const handleLogOut = () => {
        setAccess(false);
        // setCharacters([]); esta linea es para que no aparezcan las cartas 
        
    }

    return(
        <nav>
            <SearchBar onSearch={onSearch} />
           
            <NavLink to='/about'>
             <button >About</button>
                 </NavLink>
            
            <NavLink to='/home'>
             <button >Home</button>
                 </NavLink>

            <NavLink to='/favorites'>
             <button >Favorites</button>
                </NavLink>

            <br></br>

            <NavLink to='/'>
                <button onClick={handleLogOut} >LOG OUT</button>
                    </NavLink>
            
            
        </nav>
    )
}

export default Nav;