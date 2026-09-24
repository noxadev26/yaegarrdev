const skills = [
  {
    name: "HTML",
    value: 90,
  },
  {
    name: "CSS",
    value: 40,
  },
  {
    name: "JavaScript",
    value: 25,
  },
];

export default function Skills() {
  return (
    <section className="section skills-section">
      <div className="section-title">
        <span>02</span>
        <h2>SKILLS</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <strong>{skill.value}%</strong>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}