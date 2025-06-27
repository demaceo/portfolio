import React from "react";
import "./AboutMe.css";

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-container">
      <div className="about-me-title-container">
        <h1 className="about-me-title">About Demaceo</h1>
      </div>
      <div className="about-me-content">
        <p>
          Curious, adaptive, and deeply insightful, I thrive at the intersection
          of ideas, people, and purpose. I naturally combine versatility, keen
          observation, and a love for lifelong learning. These qualities that
          drive me to explore new frontiers and solve problems in creative,
          practical ways.
        </p>
        <p>
          My thinking style is Intuitive-Conceptual: I excel at spotting
          connections, clarifying complexity, and uncovering the "why" behind
          challenges. Whether I’m mapping out a new project or helping a team
          untangle ambiguity, I’m energized by fresh insights and innovative
          solutions. As a Transformer, I embrace change and variety, seeking out
          adventure, spontaneity, and new perspectives. Complexity doesn’t
          rattle me - I see it as a jungle gym for growth.
        </p>
        <p>
          Rooted in empathy, I build genuine connections and listen deeply,
          intuitively understanding the experiences and motivations of others.
          This allows me to bridge diverse perspectives and foster
          collaboration, always with a focus on meaningful impact. My approach
          is grounded in Wisdom & Knowledge: I’m passionate about personal
          growth, authentic living, and using knowledge not just for its own
          sake, but to enrich lives and communities.
        </p>
        <h2>In a nutshell:</h2>
        <ul className="about-me-list">
          <li>
            <strong>Intuitive-Conceptual Thinker:</strong> See patterns,
            simplify the complex, and generate creative, actionable solutions
          </li>
          <li>
            <strong>Transformer:</strong> Energized by change, challenge, and
            continuous learning
          </li>
          <li>
            <strong>Empathetic Connector:</strong> Listen deeply, build trust,
            and foster inclusive collaboration
          </li>
          <li>
            <strong>Lover of Wisdom:</strong> Pursue growth, purpose, and
            authentic action in everything I do
          </li>
        </ul>
        <p>
          Whether I’m leading a project, supporting a team, or exploring new
          ideas, I bring together curiosity, reliability, and a genuine desire
          to make a difference. I’m at my best where insight meets action, and
          where growth is both the journey and the goal.
        </p>
        <h2>Strengths at a Glance:</h2>
        <ul className="about-me-list">
          <li>
            <strong>Adaptable Communicator:</strong> Quick to understand and
            articulate new concepts; skilled at building rapport with people
            from all walks of life.
          </li>
          <li>
            <strong>Analytical & Reliable:</strong> Detail-oriented, organized,
            and steady - someone you can count on to follow through.
          </li>
          <li>
            <strong>Empathetic Problem Solver:</strong> Intuitive, caring, and
            always willing to help; values making a difference through service.
          </li>
          <li>
            <strong>Continuous Learner:</strong>
             Motivated by curiosity, growth, and the pursuit of understanding.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
