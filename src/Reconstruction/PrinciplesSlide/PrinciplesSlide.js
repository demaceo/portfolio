import "./PrinciplesSlide.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFigma,
  faWebflow,
  faGit,
  faReact,
  faJs,
  faCss3,
  faHtml5,
  faGithub,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

export default function PrinciplesSlide() {
  return (
    <section className="principles-page">
      <div className="principle-main-title-container">
        <h2 className="principle-main-title">Principles & Strategies</h2>
      </div>
      <div className="principle-boxes-container">
        <div className="principle-box">
          {/* <div className="animation-box"></div> */}
          <div className="principle-text-container">
            <h3 className="principle-title">UX is the sum of all things.</h3>
            <p className="principle-description">
              There’s no style over substance here. I bring together form and
              the function to create something that looks good and performs
              brilliantly. Simple.
            </p>
          </div>
        </div>
        <div className="principle-box">
          {/* <div className="animation-box"></div> */}
          <div className="principle-text-container">
            <h3 className="principle-title">Creator. Partner. Collaborator.</h3>
            <p className="principle-description">
              Ideas are far from linear. As designer and developer, I can
              spearhead, support or polish your project or product at any stage
              it needs it.
            </p>
          </div>
        </div>
        <div className="principle-box">
          {/* <div className="animation-box"></div> */}
          <div className="principle-text-container">
            <h3 className="principle-title">Clean - In thinking, in style.</h3>
            <p className="principle-description">
              Simple, minimal and effective. This is my mantra and method. Clean
              code, fuss-free interfaces and expert execution, design as it
              should be.
            </p>
          </div>
        </div>
      </div>
      <div className="tools-icons-container">
        <FontAwesomeIcon id="figma-icon" icon={faFigma} />
        <FontAwesomeIcon icon={faWebflow} />
        <FontAwesomeIcon icon={faGit} />
        <FontAwesomeIcon icon={faNode} />
        <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </section>
  );
}
