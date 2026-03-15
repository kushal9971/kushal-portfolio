import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>The Heart of Europe</h5>
              </div>
              <h3>Jul 2025 — Present</h3>
            </div>
            <p>
              Dubai, UAE. Building enterprise-grade web applications with React, .NET Core, 
              and Node.js. Delivering scalable, high-performance solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Brombeer IT Systems LLC</h5>
              </div>
              <h3>Nov 2023 — Jun 2025</h3>
            </div>
            <p>
              Abu Dhabi, UAE. Developed robust web applications using C#, ASP.NET Core, 
              Entity Framework, Angular, and React. Implemented Azure AD authentication, 
              Power BI data models, and optimized SQL Server databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Ohara IT Solutions</h5>
              </div>
              <h3>Nov 2022 — Oct 2023</h3>
            </div>
            <p>
              Mumbai, India. Built responsive UIs with Angular, React, and TypeScript. 
              Designed database schemas, integrated Crystal Reports, and deployed 
              applications to production.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Full-Stack Developer</h4>
                <h5>Aj Infotechs Services</h5>
              </div>
              <h3>Aug 2021 — Oct 2022</h3>
            </div>
            <p>
              Delhi, India. Developed web applications with ASP.NET Core MVC & Web API, 
              Entity Framework, and Angular. Led teams using Azure DevOps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
