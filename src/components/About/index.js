import React from 'react';

function About() {

  return (
    <section>
      <div className='container'>
        <h2 className='row'>About Me</h2>
        <p className='row'>I like to imagine that I'm a friendly, helpful, and positive influence in people's lives; though I'll admit my self-esteem could do with some work, as well as my social skills. I'm a second-generation American, raised by parents who both originated from the Philipines. I've lived in New England for a time, but it became apparent that, while I could take this California-girl out of California, I couldn't take the California out of the California-girl. And thus, I've returned to never-snow SoCal.</p>

        <h3>Hobbies</h3>
        <ul>
          <li>Piano</li>
          <li>Crochet</li>
          <li>Writing</li>
          <li>Gaming</li>
          <li>Video editing</li>
        </ul>
        <h3>Plans</h3>
        <ul>
          <li>Majoring in Psychology, hoping to complete my graduate degree down the line.</li>
          <li>Completing a Web Development Bootcamp and hope to get a snazzy certification this year.</li>
          <li>Combine the above to either conduct my own research or help other psychologists with theirs.</li>
          <li>Publish a novel.</li>
        </ul>
        <h3>Not-So-Interesting Random Facts</h3>
        <ul>
          <li>I collect folding fans and lightsabers.</li>
          <li>Gluten-free by necessity. I miss normal fried chicken the most.</li>
          <li>I have three A.A. General Studies degrees, all of them in a different emphasis.</li>
          <li>My friends have forced a chicken-themed collection on me because of a recurring joke that I'm "the Chicken Queen." It's gotten to the point where I've accepted it as part of my life now.</li>
        </ul>
        <a className='row' href='https://github.com/Azurene' target="_blank" rel='noreferrer noopener'>Link to my GitHub.</a>
        <p></p>
      </div>
    </section>
  )
}

export default About;