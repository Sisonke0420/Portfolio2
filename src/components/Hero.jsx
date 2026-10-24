export default function Hero({ name }) {
  return (
    <section className="hero">
      <div className="hero-copy reveal-up">
        <p className="eyebrow">Frontend Developer • Designer • Builder</p>
        <h1>
          Hi, I’m <span>{name}</span>
        </h1>
        <p className="lead">
          I design and build modern digital experiences that are visually striking, smooth to use,
          and made to convert ideas into real products.
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

      <div className="hero-visual reveal-up" aria-label="Decorative profile illustration">
        <div className="hero-art">
          <div className="orb orb-large" />
          <div className="orb orb-small" />
          <div className="floating-card card-one">
            <span>UI Systems</span>
            <strong>12 Components</strong>
          </div>
          <div className="floating-card card-two">
            <span>Performance</span>
            <strong>95 Lighthouse</strong>
          </div>

          <div className="profile-card">
            <div className="avatar">S</div>
            <div className="profile-meta">
              <span className="tag">Available for work</span>
              <h3>{name}</h3>
              <p>Product-focused developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
