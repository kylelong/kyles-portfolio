import React from 'react';
import resume from './kyle_long_resume.docx.pdf';

const Menu = () => {
    return (
        <div className="menu">
             <h3 className='name'>Kyle Long</h3>
             <p className='title'>Software Engineer</p>
             <div className='navBar'>
                 <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                 <a href="https://github.com/kylelong" target="_blank" rel="noreferrer">Github</a>
                 <a href="https://www.linkedin.com/in/kylel95" target="_blank" rel="noreferrer">LinkedIn</a>
                 <a href="mailto:kylelong9506@gmail.com">Email</a>
             </div>
        </div>
    )
}

export default Menu;