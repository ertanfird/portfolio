import React from 'react';

const Skills = ({props}) => {
    const skills = ["HTML", "CSS", "Sass/Scss", "JS", "React", "PHP", "Wordpress", "Figma"];
    return (
        <div className="bash__item bash__skills">
            {skills.map((i) =>
                <p className="bash__skill" key={i}>{i}</p>
            )}
        </div>
    );
}

export default Skills;
