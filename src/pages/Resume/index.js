import React from 'react';
import Information from '../../components/Information';
import work from '../../utils/work';
import education from '../../utils/education';
import skill from '../../utils/skill';
import awards from '../../utils/awards';
function Resume() {

  return (
    <section className='container'>
      <div>
        <h2>Curriculum Vitae</h2>
        <h3>Education</h3>
        {education.map(education => (
          <Information
            title={education.title}
            time={education.time}
            location={education.location}
          />
        ))}
        <h3>Experience</h3>
        {work.map(work => (
          <Information
            title={work.jobTitle}
            company={work.company}
            time={work.time}
            location={work.location}
          />
        ))}
        <h3>Skills and Certifications</h3>
        {skill.map(skill => (
          <Information
            title={skill.skillName}
            time={skill.time}
            location={skill.location}
            description={skill.description}
          />
        ))}
        <h3>Awards and Grants</h3>
        {awards.map(award => (
          <Information
            title={award.awardName}
            location={award.organization}
            time={award.date}
            description={award.amount}
          />
        ))}
      </div>
    </section>
  )
}

export default Resume;