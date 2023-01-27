import footerLogo from "../../images/footer__logo.svg";
import instagramLogo from "../../images/instagram.png";
import facebookLogo from "../../images/facebook.png";

function Footer() {
  return (
    <footer className="footer white dark-text">
      <img className="footer__logo" src={footerLogo} alt="logo" />
      <nav className="footer__menu">
        <ul className="footer__main-links">
          <li className="footer__gender-item">
            <a className="footer__gender-link dark-text" href="#">
              Men
            </a>
          </li>
          <li className="footer__gender-item">
            <a className="footer__gender-link dark-text" href="#">
              Women
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              Our Heritage
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              Care
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              Collections
            </a>
          </li>
          <li className="footer__main-item">
            <a className="footer__main-link dark-text" href="#">
              Responsibility
            </a>
          </li>
        </ul>
        <ul className="footer__add-links">
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              Stores and Showroom
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              Shipping & Delivery
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              Returns & Exhanges
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              Terms & Conditions
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="footer__add-item">
            <a className="footer__add-link dark-text" href="#">
              Customer service
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
