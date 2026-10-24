const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'Node.js',
  'UI/UX Design',
  'Responsive Design',
  'API Integration',
  'Git & GitHub',
  'Figma',
  'CSS & Tailwind',
];

const projects = [
  {
    title: 'StudioFlow',
    category: 'Productivity App',
    description:
      'A collaborative workspace app that helps teams organize tasks, track projects, and streamline communication in real time.',
    stack: ['React', 'Node', 'Firebase'],
  },
  {
    title: 'Luma Commerce',
    category: 'E-commerce Platform',
    description:
      'A sleek online store experience built for modern brands, focused on conversion, user flow, and mobile shopping.',
    stack: ['React', 'Stripe', 'API'],
  },
  {
    title: 'Pixel Portfolio',
    category: 'Creative Portfolio',
    description:
      'A personal portfolio that blends storytelling and visuals to showcase design, code, and product thinking.',
    stack: ['React', 'CSS', 'Vite'],
  },
];

const experience = [
  {
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2023 - Present',
    details: 'Designing and shipping responsive user interfaces for startups and small businesses.',
  },
  {
    role: 'UI Developer',
    company: 'Creative Studio',
    period: '2021 - 2023',
    details: 'Built elegant web experiences and contributed to design systems for diverse digital products.',
  },
  {
    role: 'Web Designer',
    company: 'Independent',
    period: '2019 - 2021',
    details: 'Created brand-driven digital experiences combining visual design, UX strategy, and front-end work.',
  },
];

export default function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">Sisonke</div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button small" href="#contact">
          Hire Me
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Frontend Developer • Designer • Builder</p>
            <h1>
              I create digital experiences that feel <span>modern</span>, clear, and memorable.
            </h1>
            <p className="lead">
              I turn ideas into polished web products with thoughtful design, fluid interactions,
              and clean code.
            </p>
            <div className="cta-row">
              <a className="button" href="#projects">
                View Projects
              </a>
              <a className="button secondary" href="#about">
                About Me
              </a>
            </div>
            <ul className="stats">
              <li>
                <strong>4+</strong>
                <span>Years Experience</span>
              </li>
              <li>
                <strong>15+</strong>
                <span>Projects Delivered</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>Client Focus</span>
              </li>
            </ul>
          </div>

          <div className="hero-visual">
            <div className="profile-card">
              <div className="avatar">S</div>
              <div className="profile-meta">
                <span className="tag">Available for work</span>
                <h3>Sisonke</h3>
                <p>Product-focused developer</p>
              </div>
            </div>
            <div className="mini-panel panel-one">
              <span>UI Systems</span>
              <strong>12 Components</strong>
            </div>
            <div className="mini-panel panel-two">
              <span>Performance</span>
              <strong>95 Lighthouse</strong>
            </div>
          </div>
        </section>

        <section id="about" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Designing products people genuinely enjoy using.</h2>
          </div>
          <div className="about-grid">
            <p>
              I’m a developer who enjoys blending visual storytelling with practical engineering.
              My work focuses on creating interfaces that are not only beautiful but also intuitive,
              accessible, and easy to use.
            </p>
            <p>
              I love building polished frontend experiences, collaborating on product strategy, and
              turning complex ideas into simple user journeys that drive real value.
            </p>
          </div>
        </section>

        <section id="skills" className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2>Tools I use to build and ship meaningful experiences.</h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="skill-item">
                {skill}
              </div>
            ))}
          </div>
        </section>

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

        <section className="content-section">
          <div className="section-heading">
            <p className="eyebrow">Experience</p>
            <h2>My path from creative design to thoughtful engineering.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <div key={`${item.role}-${item.company}`} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <h3>{item.role}</h3>
                    <span>{item.period}</span>
                  </div>
                  <p className="company-name">{item.company}</p>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s build something meaningful together.</h2>
        </div>
        <div className="footer-actions">
          <a className="button" href="mailto:sisonke@example.com">
            sisonke@example.com
          </a>
          <a className="button secondary" href="https://github.com/Sisonke0420" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
