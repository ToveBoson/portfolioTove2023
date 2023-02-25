import { Link } from "react-router-dom";
import "../Nav/Nav.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export const Nav = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  return (
    <nav className="navbar">
      <div>
        {" "}
        <Link className="navbar__logo" to={"/"}>
          Portfolio
        </Link>{" "}
      </div>
      <ul className="navbar__container">
        <li className="navbar__container__list">
          {" "}
          <Link
            to={"/"}
            className={isHidden ? "navbar__container__list__link" : "linkShow"}
          >
            Hem{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/projects"}
            className={isHidden ? "navbar__container__list__link" : "linkShow"}
          >
            Projekt{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/contact"}
            className={isHidden ? "navbar__container__list__link" : "linkShow"}
          >
            Kontakt{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            to={"/about"}
            className={isHidden ? "navbar__container__list__link" : "linkShow"}
          >
            Om{" "}
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="navbar__hamburger">
        <RxHamburgerMenu />
      </div>
    </nav>
  );
};
