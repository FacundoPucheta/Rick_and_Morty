import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, setCharacters, setAccess}) => {
    
    const handleLogOut = () => {
        setAccess(false);
        setCharacters([]);
        
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
            <br></br>

            <NavLink to='/'>
            <button onClick={handleLogOut} >LOG OUT</button>
                </NavLink>
            
            
        </nav>
    )
}

export default Nav;