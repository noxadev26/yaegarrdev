export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="small-title">WEB DEVELOPER</p>

        <h1>
          TE<span>GAR</span>
          <br />
          TRI ABADI
        </h1>

        <p className="hero-description">
          Pelajar TKJ yang tertarik pada web development,
          teknologi, dan pengembangan berbagai project digital.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary">
            Lihat Project
          </a>

          <a href="#feedback" className="button secondary">
            Saran & Kritik
          </a>
        </div>
      </div>

      <div className="hero-terminal">
        <div className="terminal-header">
          <span />
          <span />
          <span />
        </div>

        <div className="terminal-content">
          <p>&gt; whoami</p>
          <p className="accent">Tegar Tri Abadi</p>

          <p>&gt; role</p>
          <p className="accent">Web Developer</p>

          <p>&gt; school</p>
          <p className="accent">SMK PGRI 6 Ngawi</p>

          <p>&gt; status</p>
          <p className="accent">Building...</p>
        </div>
      </div>
    </section>
  );
}