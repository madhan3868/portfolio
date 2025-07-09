import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce ",
    description: `Created a functional UI clone of the Myntra website using React-Redux. 
Integrated server communication to fetch product data 
Developed a fully functional cart with add/remove product capabilities and a responsive pricing summary.`,
    image: "/screenshots/myntra.jpg",
    tags: ["React", "Redux", "Router", "Tailwind CSS"],
    demoUrl: "https://example.com/project1",
    githubUrl: "https://github.com/madhan3868/Mintra-Clone",
  },
  {
    id: 2,
    title: "Music Player App",
    description: `Designed and built a functional UI clone of Spotify, replicating core features and user experience. 
Integrated with a backend server to fetch and play songs, showcasing API integration skills. 
Developed interactive and responsive playback controls, including play/pause, forward/backward, and a seek 
bar, ensuring a seamless user experience. `,
    image: "/screenshots/spotify.jpg",
    tags: ["JavaScript", "HTML5", "CSS3", "API Integration"],
    demoUrl: "https://example.com/project2",
    githubUrl: "https://github.com/madhan3868/Spotify-Clone",
  },
  {
    id: 3,
    title: "Social Media App",
    description: `Developed a social media application using React and React Router, featuring a simple, functional, and 
responsive UI. 
Implemented CRUD operations for posts, demonstrating robust data interaction and management.`,
    image: "screenshots/social.jpg",
    tags: ["React", "Router", "Tailwind CSS"],
    demoUrl: "https://example.com/project3",
    githubUrl: "https://github.com/madhan3868/Social-media",
  },
  {
    id: 4,
    title: "Currency Converter ",
    description: `Built a currency converter application using open-source APIs with an intuitive user interface. 
Enabled users to comparison currency exchange rates and calculation of conversion amounts based on global 
exchange rates. `,
    image: "/screenshots/converter.jpg",
    tags: ["JavaScript", "HTML5", "CSS3", "API Integration"],
    demoUrl: "https://example.com/project3",
    githubUrl: "https://github.com/madhan3868/Currency-Converter",
  },
];
const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"></span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I have worked on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="font-medium border bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href=""
                      target="_blank"
                      className="text-foreground/80  hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80  hover:text-primary transition-colors duration-300"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/madhan3868 "
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
