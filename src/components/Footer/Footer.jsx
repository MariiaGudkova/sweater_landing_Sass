import footerLogo from "../../images/footer__logo.svg";
import instagramLogo from "../../images/instagram.png";
import facebookLogo from "../../images/facebook.png";

function Footer(props) {
  const { lang } = props;
  return (
    <footer className="footer white dark-text">
      <img className="footer__logo" src={footerLogo} alt="logo" />
      <nav className="footer__menu">
        <ul className="footer__main-links">
          <li className="footer__gender-item">
            <a className="footer__gender-link dark-text" href="#">
              {lang.MEN}
            </a>
          </li>
          <li className="footer__gender-item">
            <a className="footer__gender-link dark-text" href="#">
              {lang.WOMEN}
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              {lang.OUR_HERITAGE}
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              {lang.CARE}
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              {lang.COLLECTIONS}
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              {lang.RESPONSIBILITY}
            </a>
          </li>
        </ul>
        <ul className="footer__add-links">
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              {lang.STORES_AND_SHOWROOM}
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              {lang.DELIVERY}
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              {lang.RETURNS}
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              {lang.TERMS}
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              {lang.PRIVACY}
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              {lang.CUSTOMER_SERVICE}
            </a>
          </li>
        </ul>
        <ul className="footer__social-links">
          <li className="footer__social-item">
            <a
              className="footer__social-link dark-text"
              href="https://www.instagram.com/"
            >
              <img
                className="footer__social-logo"
                src={instagramLogo}
                alt="Instagram"
              />
            </a>
            <a
              className="footer__social-link dark-text"
              href="https://www.facebook.com/"
            >
              <img
                className="footer__social-logo"
                src={facebookLogo}
                alt="Facebook"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
