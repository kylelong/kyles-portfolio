import React from "react";

const Projects = () => {
  return (
    <div className="projectContainer">
      <h3 className="projectSectionHeader">Projects</h3>
      <div className="project">
        <p className="projectTitle">JoJo</p>
        <div className="projectLinks">
          <a
            href="https://jojo.so"
            target="_blank"
            rel="noreferrer"
            className="projectLink"
          >
            website
          </a>
        </div>

        <p className="projectDescription">Conversational language learning</p>
      </div>
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

        <p className="projectDescription">Share and discover music you love</p>
      </div>
    </div>
  );
};

export default Projects;
