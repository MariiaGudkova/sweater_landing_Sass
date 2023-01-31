import React from "react";
import headerLogo from "../../images/header__logo.svg";
import buttonArrow from "../../images/header_button_arrow.svg";
import basketLogo from "../../images/basket_logo.svg";

function MobileHeader(props) {
  const {
    isBurgerMenuOpen,
    setIsBurgerMenuOpen,
    isLanguagesSelectOpen,
    setIsLanguagesSelectOpen,
    pageLanguage,
    setPageLanguage,
    lang,
  } = props;

  function closeByEscape(evt) {
    if (evt.key === "Escape") {
      close();
    }
  }

  function closeByClick(evt) {
    if (evt.target.className === "overlay_active") {
      close();
    }
  }

  function onBurgerClick() {
    document.addEventListener("keydown", closeByEscape);
    document.addEventListener("click", closeByClick);
    setIsBurgerMenuOpen(true);
  }

  function close() {
    document.removeEventListener("keydown", closeByEscape);
    document.removeEventListener("click", closeByClick);
    return setIsBurgerMenuOpen(false);
  }

  function selectLanguage() {
    return setIsLanguagesSelectOpen(!isLanguagesSelectOpen);
  }

  function changeLanguage(lang) {
    setPageLanguage(lang);
    setIsLanguagesSelectOpen(false);
  }

  React.useEffect(() => {
    return () => {
      setIsBurgerMenuOpen(false);
    };
  }, []);

  return (
    <header className="mobile-header blue light-text">
      <img className="mobile-header__logo" src={headerLogo} alt="logo" />
      <ul
        className={
          !isBurgerMenuOpen
            ? "mobile-header__burger mobile-header__burger_active"
            : "mobile-header__burger"
        }
        onClick={onBurgerClick}
      >
        <li className="mobile-header__burger-line"></li>
        <li className="mobile-header__burger-line"></li>
        <li className="mobile-header__burger-line"></li>
      </ul>

      <nav
        className={
          isBurgerMenuOpen
            ? "mobile-header__menu_active light-blue"
            : "mobile-header__menu light-blue"
        }
      >
        <ul className="mobile-header__cross" onClick={close}>
          <li className="mobile-header__cross-line"></li>
          <li className="mobile-header__cross-line"></li>
        </ul>
        <ul className="mobile-header__gender-links">
          <li className="mobile-header__gender-link">
            <a className="light-text" href="#">
              {lang.WOMEN}
            </a>
          </li>
          <li className="mobile-header__gender-link">
            <a className="light-text" href="#">
              {lang.MEN}
            </a>
          </li>
        </ul>
        <ul className="mobile-header__nav-links">
          <li className="mobile-header__nav-link">
            <a className="light-text" href="#">
              {lang.OUR_HERITAGE}
            </a>
          </li>
          <li className="mobile-header__nav-link">
            <a className="light-text" href="#">
              {lang.CARE}
            </a>
          </li>
          <li className="mobile-header__nav-link">
            <a className="light-text" href="#">
              {lang.COLLECTIONS}
            </a>
          </li>
          <li className="mobile-header__nav-link">
            <a className="light-text" href="#">
              {lang.RESPONSIBILITY}
            </a>
          </li>
        </ul>
        <div className="mobile-header__buttons">
          <button className="mobile-header__button-dropdown light-text">
            <span
              className={
                pageLanguage === "EN"
                  ? "mobile-header__button-dropdown-item_select"
                  : "mobile-header__button-dropdown-item"
              }
            >
              {lang.EN}
            </span>
            {" / "}
            <span
              className={
                pageLanguage === "RU"
                  ? "mobile-header__button-dropdown-item_select"
                  : "mobile-header__button-dropdown-item"
              }
            >
              {lang.RU}
            </span>
            <img
              className="mobile-header__button-arrow"
              src={buttonArrow}
              alt="arrow"
              onClick={selectLanguage}
            />
          </button>
          <ul
            className={
              isLanguagesSelectOpen
                ? "mobile-header__dropdown-content mobile-header__dropdown-content_active light-blue"
                : "mobile-header__dropdown-content"
            }
          >
            <li
              className="mobile-header__dropdown-lang"
              onClick={() => changeLanguage("EN")}
            >
              {lang.EN}
            </li>
            <li
              className="mobile-header__dropdown-lang"
              onClick={() => changeLanguage("RU")}
            >
              {lang.RU}
            </li>
          </ul>
          <a className="mobile-header__basket-link" href="#">
            <img src={basketLogo} alt="basket logo" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default MobileHeader;
