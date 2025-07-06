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
          I’m endlessly curious and thrive on connecting the dots between ideas,
          people, and possibilities. At my core, I’m a lifelong learner who
          loves breaking down big problems and turning complexity into something
          clear, practical, and sometimes even fun. Whether it’s diving into the
          details or zooming out to see the bigger picture, I’m just as
          comfortable navigating ambiguity as I am making things happen.
        </p>
        <p>
          People know me for my adaptability, empathy, and reliability. Whether
          working solo or collaborating closely with a team, I deliver results.
          I'm always eager to dive into new tech, spark fresh conversations, and
          tackle whatever comes my way. I don’t just collect knowledge; I put it
          to work, always aiming to make a tangible, positive impact.
        </p>
        <p>
          Untangling messy problems, finding unexpected connections, and getting
          to the root of “why” is where I do my best work. I genuinely enjoy
          rolling with change and seeing what new perspectives have to offer.
          For me, complexity isn’t a roadblock - it’s an open invitation to grow.
        </p>
        <p>
          I naturally take a big picture approach, noticing patterns others
          might overlook while always keeping the human element front and
          center. Genuine conversations, honest collaboration, and a shared
          sense of purpose energize me, and integrity is fundamental to how I
          show up.
        </p>
        <p>
          Empathy isn’t just a buzzword in my vocabulary; it guides how I build
          relationships, navigate team dynamics, and tackle challenging
          projects. I listen deeply, value diverse viewpoints, and am naturally
          drawn toward creating connections. My north star is continuous growth:
          personal, professional, and collective. If I can leverage what I know
          to help others and spark meaningful change, count me in!
        </p>
        <br />
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
        <br />
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
            <strong>Continuous Learner: </strong>
            Motivated by curiosity, growth, and the pursuit of understanding.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
