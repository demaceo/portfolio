import React from 'react'
import './bubbles.css';

export default function Bubbles() {
    return (
      <section className="bubble-container">
        <div className="bubble x1">
          <div className="text-container">
            <h1 className="project-1">What's Cookin</h1>
          </div>
        </div>
        <div className="bubble x2">
          <div className="text-container">
            <h1 className="project-2">Moody Tunes</h1>
          </div>
        </div>
        <div className="bubble x3">
          <div className="text-container">
            <h1 className="project-3">Rancid Tomatillos</h1>
          </div>
        </div>
      </section>
    );
}
