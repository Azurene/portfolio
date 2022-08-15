import React from 'react';
import Information from '../../components/Information';

function Resume() {

  return (
    <section className='container'>
      <div>
        <h2>Resume</h2>
        <h3>Education</h3>
        <Information />
        <h3>Work Experience</h3>
        <Information />
        <h3>Skills</h3>
        <Information />
      </div>
    </section>
  )
}

export default Resume;