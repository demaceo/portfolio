import React from "react";
import { motion } from "framer-motion";
import projectData from "../../utilities/projectData.js";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="projects-container">
      {projectData.map(
        ({ id, image, name, description, link, icon }, index) => (
          <motion.article
            key={id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15, // <--- 🌟 Cascading effect here!
            }}
            viewport={{ once: true }}
          >
            <a
              className="project-image-link"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image ? (
                <img
                  className="project-image"
                  src={image}
                  alt={name}
                  onError={(e) => (e.target.style.display = "none")}
                />
              ) : (
                <i className={`${icon} project-icon`} aria-hidden="true"></i>
              )}
            </a>
            <div className="project-info">
              <h2 className="project-title">{name}</h2>
              <p className="project-description">{description}</p>
            </div>
          </motion.article>
        )
      )}
    </section>
  );
}
