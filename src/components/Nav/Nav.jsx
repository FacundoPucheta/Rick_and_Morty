import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({onSearch, logout}) => {

    const handleLogOut = (event) => {
        logout();
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
                <button onClick={handleLogOut} >Log out</button>
            </NavLink>
            
        </nav>
    )
}

export default Nav;