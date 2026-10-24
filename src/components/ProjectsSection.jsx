export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="content-section">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work that balances creativity and function.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="stack-row">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
