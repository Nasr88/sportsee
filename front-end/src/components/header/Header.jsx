
import Nav from "../nav/Nav";
//import './Header.scss';
import logo from "../../assets/images/logo.svg";
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="SportSee Logo" />
      </div>
      <Nav className="header__nav" />
    </header>
  );
}

export default Header;
