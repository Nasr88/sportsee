
import { NavLink, } from "react-router-dom";
import { useContext } from 'react'
import { UserContext } from "../../contexts/UserContext";
const Nav = () => {
    const { userId } = useContext(UserContext);

    
    return (
        <nav className="header__nav">
                <ul className="header__nav-list">
                <li className="header__nav-item">
                    <NavLink to="/" className="header__nav-link" activeclassname="header__nav-link--active">Accueil</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to={`/user/`+userId} className="header__nav-link" activeclassname="header__nav-link--active">Profil</NavLink>
                
                </li>
                <li className="header__nav-item">
                    <NavLink to="/settings" className="header__nav-link" activeclassname="header__nav-link--active">Réglages</NavLink>
                </li>
                <li className="header__nav-item">
                    <NavLink to="/community" className="header__nav-link" activeclassname="header__nav-link--active">Communauté</NavLink>
                </li>
                </ul>
        </nav>
   );
};
export default Nav;