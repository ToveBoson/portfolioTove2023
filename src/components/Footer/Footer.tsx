import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import "../Footer/footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__contactContainer">
          <li className="footer__contactContainer__contact">Tove Boson</li>
          <li className="footer__contactContainer__contact">
            S:t Olofsgatan 62A
          </li>
          <li className="footer__contactContainer__contact">753 30 Uppsala</li>
        </ul>

        <ul className="footer__mailContainer">
          <li>
            <a
              className="footer__mailContainer__link"
              href="mailto:tove.boson@medieinstitutet.se"
            >
              tove.boson@medieinstitutet.se
            </a>
          </li>
        </ul>

        <ul className="footer__phone">
          <li>076-105 05 94</li>
        </ul>

        <ul className="footer__socialsContainer">
          <li>
            <FaLinkedin />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaFacebook />
          </li>
        </ul>
      </div>
    </footer>
  );
};
