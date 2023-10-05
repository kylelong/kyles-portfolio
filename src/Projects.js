import React from "react";

const Projects = () => {
  return (
    <div className="projectContainer">
      <h3 className="projectSectionHeader">Projects</h3>
       <div className="project">
        <p className="projectTitle">Loopy</p>
        <div className="projectLinks">
          <a
            href="https://loopy.fm/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            website
          </a>
        </div>

        <p className="projectDescription">
          Share and discover music you love
        </p>
      </div>
      <div className="project">
        <p className="projectTitle">Blossom</p>
        <div className="projectLinks">
          <a
            href="https://blossomsurveys.io/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            website
          </a>
        </div>

        <p className="projectDescription">
          Create beautiful surveys that help you understand your audience.
        </p>
      </div>
      <div className="project">
        <p className="projectTitle">Corked Up</p>
        <div className="projectLinks">
          <a
            href="https://www.corkedup.wine/"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            website
          </a>
          <div>|</div>
          <a
            href="https://github.com/kylelong/corkedup"
            target="_blank"
            rel="noreferrer"
            className="projectLinkTwo"
          >
            github
          </a>
        </div>

        <p className="projectDescription">
          Catering to wine lovers: find local events, daily flash deals on nice
          bottles, and recipes for pairiing. All to enhance your wine drinking
          experience.
        </p>
      </div>
    </div>
  );
};

export default Projects;
