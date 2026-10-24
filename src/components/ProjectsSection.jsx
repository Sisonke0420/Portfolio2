import { useState } from 'react';

export default function ProjectsSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section id="projects" className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected work that balances creativity and function.</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card reveal-up">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="stack-row">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <button type="button" className="inline-link" onClick={() => setSelectedProject(project)}>
                View details
              </button>
            </article>
          ))}
        </div>
      </section>

      {selectedProject ? (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedProject(null)}>
              ×
            </button>

            <span className="project-category">{selectedProject.category}</span>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>

            <div className="modal-stack">
              {selectedProject.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <ul className="modal-points">
              <li>Responsive interface built for real users and business goals.</li>
              <li>Clean interaction design that feels refined and intuitive.</li>
              <li>Focused on performance, usability, and product clarity.</li>
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
}
