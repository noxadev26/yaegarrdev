const projects = [
  {
    title: "Tahoo",
    description: "Project website dengan tampilan modern.",
    category: "WEB",
  },
  {
    title: "Dompet Pelajar",
    description: "Konsep pengelolaan keuangan untuk pelajar.",
    category: "FINANCE",
  },
  {
    title: "Jadwal Pelajaran 10 TKJ",
    description: "Website jadwal pelajaran kelas TKJ.",
    category: "EDUCATION",
  },
  {
    title: "TKJCalc",
    description: "Kalkulator untuk kebutuhan pembelajaran TKJ.",
    category: "TOOL",
  },
  {
    title: "NihongoFlash",
    description: "Media belajar kosakata bahasa Jepang.",
    category: "EDUCATION",
  },
  {
    title: "Fokus Belajar",
    description: "Website pendukung kegiatan belajar.",
    category: "PRODUCTIVITY",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-title">
        <span>03</span>
        <h2>PROJECT</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <span className="project-number">
              0{index + 1}
            </span>

            <span className="project-category">
              {project.category}
            </span>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <button className="project-button">
              VIEW PROJECT →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}