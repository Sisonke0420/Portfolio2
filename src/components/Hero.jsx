export default function Hero({ name }) {
  return (
    <section className="hero">
      <div className="hero-copy reveal-up">
        <p className="eyebrow">Creative developer / visual thinker / builder</p>
        <h1>
          I craft <span>quietly bold</span> digital experiences.
        </h1>
        <p className="lead">
          I’m {name}, a developer and designer focused on creating minimal, expressive, and highly usable digital products.
        </p>

        <div className="cta-row">
          <a className="button" href="#work">
            View work
          </a>
          <a className="button secondary" href="#about">
            About me
          </a>
        </div>

        <ul className="stats">
          <li>
            <strong>4+</strong>
            <span>Years</span>
          </li>
          <li>
            <strong>15+</strong>
            <span>Projects</span>
          </li>
          <li>
            <strong>100%</strong>
            <span>Intentional</span>
          </li>
        </ul>
      </div>

      <div className="hero-visual reveal-up" aria-label="Portrait of Sisonke Miya">
        <div className="portrait-frame">
          <img src="/SonkeV5.svg" alt="Portrait of Sisonke Miya" className="portrait-image" />
        </div>
      </div>
    </section>
  );
}
