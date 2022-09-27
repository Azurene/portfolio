import React from 'react';
import Information from '../../components/Information';
import work from '../../utils/work';
import education from '../../utils/education';

function Resume() {

  return (
    <section className='container'>
      <div>
        <h2>Resume</h2>
        <h3>Education</h3>
        {education.map(education => (
          <Information
            title={education.title}
            time={education.time}
            location={education.location}
          />
        ))}
        <h3>Work Experience</h3>
        {work.map(work => (
          <Information
            title={work.jobTitle}
            company={work.company}
            time={work.time}
            location={work.location}
          />
        ))}
        <h3>Skills</h3>
        <Information />
      </div>
    </section>
  )
}

export default Resume;