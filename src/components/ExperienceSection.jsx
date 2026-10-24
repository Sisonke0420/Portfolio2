export default function ExperienceSection({ experience }) {
  return (
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
  );
}
