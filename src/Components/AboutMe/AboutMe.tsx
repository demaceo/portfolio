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
          clear, practical, and sometimes even fun. Whether it’s diving into the details
          or zooming out to see the bigger picture, I’m just as comfortable
          navigating ambiguity as I am making things happen.
        </p>
        <p>
          People know me for my adaptability, empathy, and reliability. I get
          things done - solo or in a team - and I’m always ready to jump into new
          tech, new conversations, or whatever challenge comes next. I don’t
          just collect knowledge; I put it to work, always aiming to make a positive
          impact.
        </p>
        <p>
          Untangling messy problems, finding unexpected connections, and getting
          to the root of “why” is where I do my best work. I genuinely enjoy
          rolling with change and seeing what new perspectives have to offer.
          For me, complexity isn’t a roadblock - it’s an open-invite to grow.
        </p>
        <p>
          I bring a big-picture mindset and an eye for patterns that others
          might miss, but I never lose sight of the people involved. Real
          conversations, honest collaboration, and a sense of purpose are what
          energize me, and I believe in showing up with integrity, always.
        </p>
        <p>
          Empathy isn’t just a buzzword for me - it’s how I approach
          relationships, team dynamics, and even the toughest projects. I listen
          deeply, value different viewpoints, and naturally enjoy building bridges. My
          north star is growth: personal, professional, and collective. If I can
          use what I know to help others and create change for good, I’m in!
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
        <br />
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
            <strong>Continuous Learner:</strong>
            Motivated by curiosity, growth, and the pursuit of understanding.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
