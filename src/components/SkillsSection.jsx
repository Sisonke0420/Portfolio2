export default function SkillsSection({ skills }) {
  return (
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
  );
}
