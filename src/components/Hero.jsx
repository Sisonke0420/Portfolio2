export default function Hero({ name }) {
  return (
    <section className="hero">
      <div className="hero-copy reveal-up">
        <p className="eyebrow">Creative developer / visual thinker / builder</p>
        <h1>
          I build <span>minimal, expressive</span> digital stories.
        </h1>
        <p className="lead">
          I’m {name}, a designer and developer creating tactile, emotionally clear experiences with a strong visual point of view.
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
        <div className="portrait-stage">
          <div className="portrait-glow portrait-glow-one" />
          <div className="portrait-glow portrait-glow-two" />
          <img
            src="/SonkeV5.png"
            alt="Portrait of Sisonke Miya"
            className="portrait-image"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = '/SonkeV5.svg';
            }}
          />
        </div>
      </div>
    </section>
  );
}
