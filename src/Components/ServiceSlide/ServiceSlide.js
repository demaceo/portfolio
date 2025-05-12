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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 160"
          width="220"
          height="160"
        >
          {/* Static rectangles */}
          <rect
            x="9"
            y="9"
            width="62"
            height="62"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />
          <rect
            x="71"
            y="9"
            width="140"
            height="140"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />
          <rect
            x="9"
            y="71"
            width="31"
            height="31"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />
          <rect
            x="9"
            y="102"
            width="31"
            height="49"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />
          <rect
            x="40"
            y="71"
            width="31"
            height="80"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />

          {/* Animated path */}
          <path
            d="M71 0 L0 0 L0 142 L71 142 L141 72"
            fill="none"
            stroke="#264653"
            strokeWidth="2"
            strokeDasharray="385"
            strokeDashoffset="385"
            // className="animate"
            className="glow-path"
            transform="translate(9 9)"
          />
        </svg>
      ),
    },
    {
      id: "sb2",
      title: "Mobile App Design",
      description:
        "Using iOS, Android, and an expert vision, I elevate applications to the next level.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 160"
          width="220"
          height="160"
        >
          {/* Static mobile wireframe */}
          <rect
            x="60"
            y="10"
            width="100"
            height="140"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="3"
            rx="10"
          />
          <circle cx="110" cy="25" r="4" fill="#b0b0b0" />
          <rect x="70" y="40" width="80" height="20" fill="#b0b0b0" rx="5" />
          <rect x="70" y="70" width="80" height="20" fill="#b0b0b0" rx="5" />
          <rect x="70" y="100" width="80" height="20" fill="#b0b0b0" rx="5" />

          {/* Animated path */}
          <path
            d="M0,0 L114,77"
            fill="none"
            stroke="#264653"
            strokeWidth="2"
            strokeDasharray="138"
            strokeDashoffset="138"
            // className="animate"
            className="glow-path"
            transform="translate(46 28)"
          />
        </svg>
      ),
    },
    {
      id: "sb3",
      title: "Front End Development",
      description:
        "Bridging the gap between beautiful design and seamless functionality.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 220 160"
          width="220"
          height="160"
        >
          {/* Static frontend wireframe */}
          <path
            d="M40 50 L110 20 L180 50 L180 110 L110 140 L40 110 Z"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M40 80 L110 50 L180 80"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M40 110 L110 80 L180 110"
            stroke="#b0b0b0"
            fill="none"
            strokeWidth="2"
          />

          {/* Animated path */}
          <path
            d="M0.4,0.4 L31.2,34.5 C32,35.3 33.5,36 34.6,36 L120.5,36"
            fill="none"
            stroke="#264653"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeDasharray="138"
            strokeDashoffset="138"
            // className="animate"
            className="glow-path"
            transform="translate(26 111)"
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
        <svg width="80" height="80" viewBox="0 0 24 24">
          <path d="M4 4h16v4H4z" fill="#264653" />
          <path d="M4 10h16v4H4z" fill="#60a5fa" />
          <path d="M4 16h16v4H4z" fill="#264653" />
        </svg>
      ),
    },
    {
      id: "sb5",
      title: "Cloud & DevOps",
      description:
        "Automating CI/CD pipelines on AWS/Azure, containerizing with Docker & Kubernetes for rock-solid deployments.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#264653"
            fill="none"
            strokeWidth="2"
          />
          <path d="M12 6v12M6 12h12" stroke="#60a5fa" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "sb6",
      title: "Data & Database Design",
      description:
        "Modeling and optimizing SQL/NoSQL databases (MongoDB, PostgreSQL), ensuring data integrity and lightning-fast queries.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 24 24">
          <rect
            x="4"
            y="4"
            width="16"
            height="16"
            stroke="#264653"
            fill="none"
            strokeWidth="2"
          />
          <path d="M4 10h16M4 14h16" stroke="#60a5fa" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: "sb7",
      title: "Automation & Scripting",
      description:
        "Building custom scripts and tools to automate repetitive tasks, boost developer productivity, and eliminate manual errors.",
      svg: (
        <svg width="80" height="80" viewBox="0 0 24 24">
          <polygon points="4,4 20,12 4,20" fill="#60a5fa" />
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
      {" "}
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
