import "./ServiceSlide.css";

export default function ServiceSlide() {
  return (
    <section className="services-page">
      <div className="service-main-title-container">
        <h2 className="service-main-title">Service Spectrum</h2>
      </div>
      <div className="boxes-container">
        <div className="service-box">
          <div className="animation-box"></div>
          <div className="service-text-container">
            <h3 className="service-title">Web Apps & Corporate Sites</h3>
            <p className="service-description">
              This is where problem solving meets visual impact. I will unite
              products and users, design and experiences.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="animation-box"></div>
          <div className="service-text-container">
            <h3 className="service-title">Mobile App Design</h3>
            <p className="service-description">
              Using iOS, Android and an expert vision, I will take your
              application to the next level.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="animation-box"></div>
          <div className="service-text-container">
            <h3 className="service-title">Front End Development</h3>
            <p className="service-description">
              I will help you to bridge the gap between design and development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
