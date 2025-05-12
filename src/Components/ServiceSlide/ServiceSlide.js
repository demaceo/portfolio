import "./ServiceSlide.css";
import { motion } from "framer-motion";

export default function ServiceSlide() {
  const services = [
    {
      id: "sb1",
      title: `Web Apps & Corporate Sites`,
      description:
        "Where problem-solving meets visual impact. I unite products and users, design and experiences.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
          <rect x="4" y="12" width="56" height="40" rx="4" fill="#264653" />
          <rect x="8" y="16" width="48" height="32" rx="2" fill="white" />
          <rect x="12" y="20" width="12" height="4" rx="1" fill="#facc15" />
          <rect x="12" y="28" width="24" height="4" rx="1" fill="#60a5fa" />
          <rect x="12" y="36" width="32" height="4" rx="1" fill="#60a5fa" />
        </svg>
      ),
    },
    {
      id: "sb2",
      title: "Mobile App Design",
      description:
        "Using iOS, Android, and an expert vision, I elevate applications to the next level.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
          <rect x="20" y="8" width="24" height="48" rx="4" fill="#264653" />
          <rect x="24" y="12" width="16" height="28" rx="2" fill="white" />
          <circle cx="32" cy="46" r="2" fill="#facc15" />
        </svg>
      ),
    },
    {
      id: "sb3",
      title: "Front End Development",
      description:
        "Bridging the gap between beautiful design and seamless functionality.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
          <rect x="4" y="12" width="56" height="40" rx="4" fill="#264653" />
          <rect x="8" y="16" width="48" height="32" rx="2" fill="white" />
          <path
            d="M18 26 L24 32 L18 38"
            stroke="#facc15"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M46 26 L40 32 L46 38"
            stroke="#60a5fa"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "sb4",
      title: "API & Microservices",
      description:
        "Designing and building RESTful & GraphQL APIs with Node.js/Express, ensuring secure data exchange and scalability.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="#264653" strokeWidth="3" />
          <path
            d="M20 32h24"
            stroke="#60a5fa"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <circle cx="20" cy="32" r="3" fill="#facc15" />
          <circle cx="44" cy="32" r="3" fill="#facc15" />
        </svg>
      ),
    },
    {
      id: "sb5",
      title: "Cloud & DevOps",
      description:
        "Automating CI/CD pipelines on AWS/Azure, containerizing with Docker & Kubernetes for rock-solid deployments.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
          <path
            d="M20 44h24c6 0 10-4 10-9s-4-9-10-9c-1-8-10-13-18-10-5 2-8 6-8 11-6 0-10 4-10 9s4 9 10 9z"
            fill="#60a5fa"
            stroke="#264653"
            strokeWidth="2"
          />
          <path
            d="M28 32l4 4 8-8"
            stroke="#facc15"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "sb6",
      title: "Data & Database Design",
      description:
        "Modeling and optimizing SQL/NoSQL databases (MongoDB, PostgreSQL), ensuring data integrity and lightning-fast queries.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
          <ellipse
            cx="32"
            cy="16"
            rx="20"
            ry="8"
            fill="#60a5fa"
            stroke="#264653"
            strokeWidth="2"
          />
          <path
            d="M12 16v24c0 4.4 8.9 8 20 8s20-3.6 20-8V16"
            fill="none"
            stroke="#264653"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="28"
            x2="52"
            y2="28"
            stroke="#facc15"
            strokeWidth="2"
          />
          <line
            x1="12"
            y1="36"
            x2="52"
            y2="36"
            stroke="#facc15"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      id: "sb7",
      title: "Automation & Scripting",
      description:
        "Building custom scripts and tools to automate repetitive tasks, boost developer productivity, and eliminate manual errors.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="#264653" strokeWidth="3" />
          <path d="M24 24l16 8-16 8v-16z" fill="#facc15" />
          {/* <circle cx="32" cy="32" r="4" fill="#60a5fa" /> */}
        </svg>
      ),
    },
  ];

  return (
    <motion.section
      className="services-page"
      id="services-slide"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="service-main-title-container">
        <h2 className="service-main-title">Service Spectrum</h2>
      </div>
      <div className="service-boxes-container">
        {services.map(({ id, title, description, svg }, index) => (
          <div
            className="service-box"
            id={id}
            key={id}
            style={{ "--i": index }}
          >
            <div className="illustration-container">
              <div className="illustration">{svg}</div>
            </div>
            <div className="service-text-container">
              <h3 className="service-title">{title}</h3>
              <p className="service-description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
