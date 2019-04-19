import React from 'react';

//tmp
import ProjectCard from 'components/ProjectCard';
import disorientis_banner_no_title from '../imgs/disorientis-banner-no-title.png';
import candy_crush from '../imgs/candy-crush.png';


const projects = [
    {
        id: 0,
        title: "Ed Devs Webpage",
        links: {
          github: {
            newTab: true,
            href: "https:github.com/reddtoric/reddtoric.github.io"
          }
        },
        summary: "Project that showcases my past and current projects. Built using React. I'm still learning JS and React, and is looking for challenges and opportunities to grow."
    },
    {
        id: 1,
        title: "Disorientis",
        image: disorientis_banner_no_title,
        links: {
            more: "/projects/disorientis",
            playstore: {
                newTab: true,
                href: "https://play.google.com/store/apps/details?id=com.eddevs.disorientis"
            }
        },
        summary: "An indie project started in April 2017, Disorientis is a single-player high-score mobile arcade game with an unusual control pad and constant random directional changes. Developed in Unity using C#."
    },
    {
        id: 2,
        title: "Two-player Snake",
        links: {
            github: {
                newTab: true,
                href: "https://github.com/reddtoric/2-player-snake"
            }
        },
        summary: "Two-player snake was my final project for Advance Additive Manufacturing course at UIC. Programmed in C++ for the Arduino. The Arduion Mega, 32x32 RGB LED matrix, a custom shield, and 2 custom 4 button D-pad controllers were used in this project."
    },
    {
        id: 3,
        title: "Candy Crush",
        image: candy_crush,
        links: {
            github: {
                newTab: true,
                href: "https://github.com/reddtoric/candy-crush/"
            },
            webgame: {
                newTab: true,
                href: "/candy-crush"
            }
        },
        summary: "Candy Crush implemented for the User Interface Design and Programming course at UIC. Languages used: HTML, CSS, JavaScript, and jQuery. Responsive design and functional for touchscreen devices."
    }
];

export default () => (
  <main>
    <section>
      <h1 className="hidden">Projects</h1>
      {projects.map(project => (
        <ProjectCard
          key={project.id}
          title={project.title}
          links={project.links}
          summary={project.summary}
          image={project.image}
        />
      ))}
    </section>
  </main>
)