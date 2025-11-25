import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState({
    show: false,
    key: "",
  });

  const renderSubMenu = (title: string, list: Array<string>) => {
    return (
      <>
        <li
          onClick={() =>
            setShowSubMenu((prev) => ({
              show: showSubMenu.key !== title ? true : !prev.show,
              key: title,
            }))
          }
          className="header__item menu-li"
        >
          <p>{title}</p>
          <span className="material-icons medium">add</span>
        </li>
        <div
          className={`menu-sub${
            showSubMenu.show && showSubMenu.key === title ? "" : "--show"
          }`}
        >
          {list.map((item: string) => (
            <li key={item} className="header__item sub-li">
              {item}
            </li>
          ))}
        </div>
      </>
    );
  };

  return (
    <header>
      <nav className="nav">
        <span className="material-icons primary">language</span>
        <div className="header__navigation">
          <li className="header__item">Destinos</li>
          <li className="header__item logo">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </li>
          <li className="header__item">Cultura</li>
        </div>
        <span className="material-icons primary">search</span>
      </nav>

      <div className="header__nav-list">
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="material-icons primary menu"
        >
          menu
        </span>
        <nav className={`nav-list${showMenu ? "--show" : ""}`}>
          {renderSubMenu("Destino", ["Tokio", "Kyoto", "Osaka", "Takayama"])}
          {renderSubMenu("Cultura", [
            "Santuarios",
            "Templos",
            "Comida y Bebidas",
            "Manga y Anime",
          ])}
        </nav>
      </div>
    </header>
  );
};

export default Header;
