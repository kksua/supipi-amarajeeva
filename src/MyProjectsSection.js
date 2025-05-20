import { FaGithub } from 'react-icons/fa';
import projectsImage from './assets/dev.jpeg';

const projects = [
  {
    title: 'Quiz Platform',
    description:
      'An Android-based quiz platform supporting real-time user interaction.',
    tech: ['Java EE', 'Spring Boot', 'Hibernate', 'MySQL'],
    github: 'https://github.com/hfreshnel/quizAndroid',
  },
  {
    title: 'Social Networking App',
    description:
      'Android app for carpooling and group travel among ESIGELEC students using geolocation.',
    tech: ['Android Studio', 'Java', 'Firestore', 'OpenRouteService'],
    github: 'https://github.com/kksua/GoToESIG',
  },
  {
    title: 'Sports Club Info Platform',
    description:
      'Platform to manage information about French sports clubs. Built with SCRUM methodology.',
    tech: ['JavaEE', 'SQL', 'HTML', 'JavaScript', 'PowerBI'],
    github: 'https://github.com/AkoffonFifa/Projet-Club-de-Sport',
  },
  {
    title: 'Speech-to-Text API (Hackathon)',
    description:
      'AI-based API to support speech disorder patients. Recognized during the Med’ing Hackathon.',
    tech: ['AI', 'Python', 'NLP', 'Phonetic Algorithms','Docker'],
    github: 'https://github.com/kksua/PING',
  },
];

export default function MyProjectsSection() {
  return (
    <section id="projects" className="my-projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={projectsImage} alt="Project thumbnail" className="project-gif" />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div className="card-bottom">
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span className="tech" key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
