import React from 'react';

const Projects = () => {
    return (
        <div className="projectContainer">
            <h3 className='projectSectionHeader'>Projects</h3>
            <div className="project">
                <p className='projectTitle'>Corked Up</p>
                <a href="https://www.corkedup.wine/" target="_blank" rel="noreferrer">https://www.corkedup.wine/</a>
                <p className="projectDescription">Catering to wine lovers: find events, daily flash deals on nice bottles, and recipes for pairiing. 
                    All to enhance your wine drinking experience.
                </p>
            </div>
        </div>
    )
}

export default Projects;