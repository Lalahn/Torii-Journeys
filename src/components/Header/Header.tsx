import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="header">
        <li className="header__item">Destinos</li>
        <li className="header__item logo">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </li>
        <li className="header__item">Cultura</li>
      </nav>
    </header>
  );
};

export default Header;
