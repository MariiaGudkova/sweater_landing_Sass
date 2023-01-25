import headerLogo from "../../images/header__logo.svg";

function Header() {
  return (
    <header className="header blue light-text">
      <img className="header__logo" src={headerLogo} alt="logo" />
      <nav className="header__menu">
        <ul className="header__gender">
          <li className="header__gender-item">
            {" "}
            <a className="light-text" href="#">
              Women
            </a>
          </li>
          <li className="header__gender-item">
            {" "}
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
      </nav>
      <div className="header__buttons"></div>
    </header>
  );
}

export default Header;
