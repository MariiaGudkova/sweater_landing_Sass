import React from "react";
import headerLogo from "../../images/header__logo.svg";
import buttonArrow from "../../images/header_button_arrow.svg";
import basketLogo from "../../images/basket_logo.svg";

function Header(props) {
  const { isLanguagesSelectOpen, setIsLanguagesSelectOpen } = props;
  const [pageLanguage, setPageLanguage] = React.useState("EN");

  function onClick() {
    return setIsLanguagesSelectOpen(!isLanguagesSelectOpen);
  }

  function changeLanguage(lang) {
    setPageLanguage(lang);
    setIsLanguagesSelectOpen(false);
  }

  return (
    <header className="header blue light-text">
      <img className="header__logo" src={headerLogo} alt="logo" />
      <nav className="header__menu">
        <ul className="header__gender-links">
          <li className="header__gender-link">
            <a className="light-text" href="#">
              Women
            </a>
          </li>
          <li className="header__gender-link">
            <a className="light-text" href="#">
              Men
            </a>
          </li>
        </ul>
        <ul className="header__nav-links">
          <li className="header__nav-link">
            <a className="light-text" href="#">
              OUR HERITAGE
            </a>
          </li>
          <li className="header__nav-link">
            <a className="light-text" href="#">
              CARE
            </a>
          </li>
          <li className="header__nav-link">
            <a className="light-text" href="#">
              COLLECTIONS
            </a>
          </li>
          <li className="header__nav-link">
            <a className="light-text" href="#">
              RESPONSIBILITY
            </a>
          </li>
        </ul>
        <div className="header__buttons">
          <button className="header__button-dropdown light-text">
            <span
              className={
                pageLanguage === "NO"
                  ? "header__button-dropdown-item_select"
                  : "header__button-dropdown-item"
              }
            >
              NO
            </span>
            {" / "}
            <span
              className={
                pageLanguage === "EN"
                  ? "header__button-dropdown-item_select"
                  : "header__button-dropdown-item"
              }
            >
              EN
            </span>
            <img
              className="header__button-arrow"
              src={buttonArrow}
              alt="arrow"
              onClick={onClick}
            />
          </button>
          <ul
            className={
              isLanguagesSelectOpen
                ? "header__dropdown-content header__dropdown-content_active light-blue"
                : "header__dropdown-content"
            }
          >
            <li
              className="header__dropdown-lang"
              onClick={() => changeLanguage("NO")}
            >
              NO
            </li>
            <li
              className="header__dropdown-lang"
              onClick={() => changeLanguage("EN")}
            >
              EN
            </li>
          </ul>
          <a className="header__basket-link" href="#">
            <img src={basketLogo} alt="basket logo" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
