import { Link } from "react-router-dom";
import "../Home/home.scss";

export const Home = () => {
  return (
    <div className="hero">
      <div className="hero__textContainer">
        <p className="hero__textContainer__nameText">Hej, mitt namn är Tove!</p>
        <p className="hero__textContainer__jobText">
          Jag är en blivande webbutvecklare
        </p>
      </div>
      <div className="hero__buttonContainer">
        <button className="hero__buttonContainer__projectButton">
          {" "}
          <Link className="project" to={"/projects"}>
            Projects
          </Link>
        </button>
        <button className="hero__buttonContainer__aboutButton">
          <Link className="about" to={"/about"}>
            About
          </Link>
        </button>
      </div>
    </div>
  );
};
