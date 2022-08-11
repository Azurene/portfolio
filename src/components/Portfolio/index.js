import React from 'react';
import Project from '../Project';

function Portfolio() {
  const projectList = [
    {
      title: "AniBite",
      github: "https://github.com/blakee-marcus/turbo-octo-spoon",
      live: "https://blakee-marcus.github.io/turbo-octo-spoon/homepage.html",
      imageLink: "https://user-images.githubusercontent.com/98633770/165019443-90d7d21a-5c59-4c0e-8e10-c8f32f3f89ee.png",
      description: "Can't decide on what to do after a long day? Or just want a random suggestion for an anime to watch and some food to eat? This website is for you!"
    },
    {
      title: "Sanchez Auto Detailing",
      github: "https://github.com/santosangel1126/Sanchez-Detailing",
      live: "https://github.com/santosangel1126/Sanchez-Detailing/",
      imageLink: "https://user-images.githubusercontent.com/98633770/173752258-be918722-2b95-4823-b59e-d918cf9c312b.png",
      description: "Have you been eating in the car again? Is your vehicle looking more like a lemon? Sanchez Auto Detailing, a combination of quality and class will bring your car back to life. A website that creates a User friendly service to book an appointment , connect to the owners Social media and past clients. As well as enabling a user login to update on current promos and updates."
    },
    {
      title: "Ever After Bakery",
      github: "https://github.com/Azurene/ever-after-bakery",
      live: "https://ever-after-bakery.herokuapp.com/",
      imageLink: "https://github.com/Azurene/ever-after-bakery/raw/main/client/src/assets/images/logo/logo.JPEG",
      description: "Create Delightful Creations, indulge in desired goodies. Leaving a Ever After Memory. No place better made then a home kitchen!"

    }
  ]

  return (
    <section className='container justify-content-center'>
      <div className='row'>
        <h2>Portfolio</h2>
        <p>Examples of some projects that I've worked on:</p>
      </div>
      <div className="row">
        <Project
          title={projectList[0].title}
          github={projectList[0].github}
          live={projectList[0].live}
          imageLink={projectList[0].imageLink}
          description={projectList[0].description}
        />
        <Project
          title={projectList[1].title}
          github={projectList[1].github}
          live={projectList[1].live}
          imageLink={projectList[1].imageLink}
          description={projectList[1].description}
        />
        <Project
          title={projectList[2].title}
          github={projectList[2].github}
          live={projectList[2].live}
          imageLink={projectList[2].imageLink}
          description={projectList[2].description}
        />
      </div>
    </section>
  )
}

export default Portfolio;