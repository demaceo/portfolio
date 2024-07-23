import "./ServiceSlide.css";

export default function ServiceSlide() {
  return (
    <section className="services-page" id="services-slide">
      <div className="service-main-title-container">
        <h2 className="service-main-title">Service Spectrum</h2>
      </div>
      <div className="service-boxes-container">
        <div className="service-box">
          <div className="illustration-container">
            <div className="col-12 col-lg-4 spectrum-illustration">
              <div className="illustration illustration-web">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="220"
                  height="160"
                  viewBox="0 0 220 160"
                >
                  <path
                    id="line-web"
                    fill="none"
                    stroke="#264653"
                    strokeWidth="2"
                    d="M71 0 0 0 .066 142 71.217 142 141.009 72.207"
                    transform="translate(9 9)"
                    strokeDashoffset="385"
                    strokeDasharray="385"
                    className="animate"
                  ></path>
                </svg>
                <span id="blob-1" className="blob animate"></span>
              </div>
            </div>
          </div>
          <div className="service-text-container">
            <h3 className="service-title">Web Apps & Corporate Sites</h3>
            <p className="service-description">
              This is where problem solving meets visual impact. I will unite
              products and users, design and experiences.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="illustration-container">
            <div className="illustration illustration-mobile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="160"
                viewBox="0 0 220 160"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="220"
                  height="160"
                  viewBox="0 0 220 160"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    transform="translate(46 28)"
                  >
                    <path
                      id="line-mobile"
                      stroke="#264653"
                      strokeWidth="2"
                      d="M0,0 L114,77"
                      strokeDashoffset="138"
                      strokeDasharray="138"
                      className="animate"
                    ></path>
                    <path
                      stroke="#faf3e9"
                      strokeDasharray="3 6"
                      strokeWidth="3"
                      d="M0,0 L114,77"
                    ></path>
                  </g>
                </svg>
              </svg>
              <span id="blob-2" className="blob animate"></span>
            </div>
          </div>
          <div className="service-text-container">
            <h3 className="service-title">Mobile App Design</h3>
            <p className="service-description">
              Using iOS, Android and an expert vision, I will take your
              application to the next level.
            </p>
          </div>
        </div>
        <div className="service-box">
          <div className="illustration-container">
            <div className="illustration illustration-dev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="220"
                height="160"
                viewBox="0 0 220 160"
              >
                <path
                  id="line-dev"
                  fill="none"
                  stroke="#264653"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDashoffset="138"
                  strokeDasharray="138"
                  strokeWidth="2"
                  d="M0.386206897,0.379310345 L31.2568263,34.5147736 C31.9986406,35.3350415 33.4982916,36 34.6003615,36 L120.468966,36"
                  transform="translate(26 111)"
                  className="animate"
                ></path>
              </svg>
              <span id="blob-3" className="blob animate"></span>
            </div>
          </div>
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
