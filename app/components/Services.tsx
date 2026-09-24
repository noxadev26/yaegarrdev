const services = [
  {
    title: "Landing Page",
    description:
      "Website landing page sederhana dan responsif.",
  },
  {
    title: "Portfolio",
    description:
      "Website portfolio personal untuk menampilkan karya.",
  },
  {
    title: "Website Sekolah",
    description:
      "Website sederhana untuk kebutuhan informasi sekolah.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="section-title">
        <span>04</span>
        <h2>JASA WEB</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#feedback">
              Hubungi →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}