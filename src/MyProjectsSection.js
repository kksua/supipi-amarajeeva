import { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Quiz Platform',
    description: 'The Quiz Platform allows users to participate in live quizzes with immediate feedback and scoring. Users can view questions in real-time, select answers from multiple choices, and receive their results instantly. The platform supports timer-based questions and leaderboard displays, making it ideal for competitive and educational events.',
    tech: ['Java EE', 'Spring Boot', 'Hibernate', 'MySQL'],
    github: 'https://github.com/hfreshnel/quizAndroid',
  },
  {
    title: 'Social Networking App',
    description: 'This app enables students to organize and join carpool or group travel sessions. Users can create travel listings with destination and time, view nearby trips, and join them based on compatibility. It supports geolocation, user profiles, and trip tracking for a safe and efficient travel coordination experience.',
    tech: ['Android Studio', 'Java', 'Firestore', 'OpenRouteService'],
    github: 'https://github.com/kksua/GoToESIG',
  },
  {
    title: 'Sports Club Info Platform',
    description: 'The platform centralizes information about various sports clubs including their teams, schedules, and performance stats. It allows administrators to update club data and visualize trends over time. Users can search for clubs, view recent match outcomes, and explore analytics through interactive dashboards. The project was developed using the Agile methodology, allowing the team to iterate quickly, incorporate feedback regularly, and ensure the platform met both user and organizational needs throughout its development.',
    tech: ['JavaEE', 'SQL', 'HTML', 'JavaScript', 'PowerBI'],
    github: 'https://github.com/AkoffonFifa/Projet-Club-de-Sport',
  },
  {
    title: 'Station-Service Finder Web App',
    description: 'The app helps users find nearby fuel stations based on their location and service needs. It displays station addresses, fuel prices, and services like air pumps or EV charging. Users can input how much fuel they plan to purchase, and the app suggests the most cost-effective station factoring in price and distance.',
    tech: ['JavaEE', 'MySQL', 'Apache Tomcat', 'Data.gouv.fr API'],
    github: 'https://github.com/kksua/IRVE',
  },
  {
    title: 'Media Management API',
    description: 'This C# API provides an interface to manage media content including movies, TV shows, and music albums. It includes user authentication, role-based access for administrators, and functionalities to add, edit, or delete media entries. Users can also search and filter media records based on genre, release year, or creator.',
    tech: ['C#', 'ASP.NET', 'SQL', 'UML'],
    github: 'https://github.com/kksua/APIWeb_ISN',
  },
];

// Hook to detect mobile view responsively
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

export default function MyProjectsSection() {
  const isMobile = useIsMobile();
  const [selected, setSelected] = useState(projects[0]);
  const [openProjects, setOpenProjects] = useState([]);

  const toggleProject = (title) => {
    setOpenProjects((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  return (
    <section id="projects" className="my-projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>A collection of projects I've worked on.</p>
      </div>

      <div className="new-layout">
        {isMobile ? (
          <div className="project-right">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div onClick={() => toggleProject(project.title)}>
                  <span>{project.title}</span>
                </div>
                {openProjects.includes(project.title) && (
                  <div className="project-desc-mobile">
                    <p className="project-description">{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech, i) => (
                        <span className="tech" key={i}>{tech}</span>
                      ))}
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <FaGithub /> GitHub ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="project-left">
              <h3 className="project-title">{selected.title}</h3>
              <p className="project-description">{selected.description}</p>
              <div className="tech-stack">
                {selected.tech.map((tech, i) => (
                  <span className="tech" key={i}>{tech}</span>
                ))}
              </div>
              <a href={selected.github} target="_blank" rel="noopener noreferrer" className="github-link">
                <FaGithub /> GitHub ↗
              </a>
            </div>

            <div className="project-right">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`project-item ${selected.title === project.title ? 'selected' : ''}`}
                  onClick={() => setSelected(project)}
                >
                  <span>{project.title}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
