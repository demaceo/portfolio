import React from 'react'
import './bubbles.css';
import { Link } from "react-router-dom";


export default function Bubbles() {
    return (
      <section className="bubble-container">
        {/* <Link to="https://demaceo.github.io/whats-cookin/"> */}
          <div className="bubble x1">
            <div className="text-container">
              <h1 className="project-1">
                <i class="fas fa-cookie-bite icon" />
                What's <br />
                Cookin
              </h1>
            </div>
          </div>
        {/* </Link> */}
        <div className="bubble x2">
          <div className="text-container">
            <h1 className="project-2">
              <i class="fas fa-music icon" />
              Moody Tunes
            </h1>
          </div>
        </div>
        <div className="bubble x3">
          <div className="text-container">
            <h1 className="project-3">
              <i class="fas fa-film icon" />
              Rancid <br />
              Tomatillos
            </h1>
          </div>
        </div>
      </section>
    );
}
