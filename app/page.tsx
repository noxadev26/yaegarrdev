"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const projects = [
  {
    title: "Tahoo",
    description: "Website dengan tampilan modern dan responsif.",
    tag: "Web",
  },
  {
    title: "Dompet Pelajar",
    description: "Konsep aplikasi pengelolaan keuangan untuk pelajar.",
    tag: "Finance",
  },
  {
    title: "Jadwal Pelajaran 10 TKJ",
    description: "Website jadwal pelajaran untuk kelas TKJ.",
    tag: "Education",
  },
  {
    title: "TKJCalc",
    description: "Kalkulator sederhana untuk kebutuhan pembelajaran TKJ.",
    tag: "Tool",
  },
  {
    title: "NihongoFlash",
    description: "Media belajar kosakata bahasa Jepang.",
    tag: "Education",
  },
  {
    title: "Fokus Belajar",
    description: "Website untuk membantu kegiatan belajar.",
    tag: "Productivity",
  },
];

export default function Home() {
  const [type, setType] = useState("Saran");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  async function sendFeedback(e: React.FormEvent) {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("Tulis saran atau kritik terlebih dahulu.");
      return;
    }

    setStatus("Mengirim...");

    try {
      await addDoc(collection(db, "feedback"), {
        name: name.trim() || "Anonim",
        type,
        message: message.trim(),
        createdAt: serverTimestamp(),
      });

      setName("");
      setMessage("");
      setStatus("Saran berhasil dikirim. Terima kasih.");
    } catch (error) {
      console.error(error);
      setStatus("Gagal mengirim. Coba lagi.");
    }
  }

  return (
    <main>
      <nav className="navbar">
        <div className="logo">YAEGAR<span>.DEV</span></div>

        <div className="nav-links">
          <a href="#home">Beranda</a>
          <a href="#about">Tentang</a>
          <a href="#projects">Project</a>
          <a href="#feedback">Saran & Kritik</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="small-title">WEB DEVELOPER</p>

          <h1>
            TE<span>GAR</span>
            <br />
            TRI ABADI
          </h1>

          <p className="hero-description">
            Membangun website sederhana, modern, dan fungsional.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="button primary">
              Lihat Project
            </a>

            <a href="#feedback" className="button secondary">
              Beri Saran
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="terminal-top">
            <span />
            <span />
            <span />
          </div>

          <div className="terminal-text">
            <p>&gt; whoami</p>
            <p className="accent">Tegar Tri Abadi</p>
            <p>&gt; role</p>
            <p className="accent">Web Developer</p>
            <p>&gt; location</p>
            <p className="accent">Ngawi, Indonesia</p>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-title">
          <span>01</span>
          <h2>TENTANG</h2>
        </div>

        <div className="about-card">
          <p>
            Saya Tegar Tri Abadi, siswa SMK PGRI 6 Ngawi jurusan TKJ yang
            tertarik pada pengembangan website dan teknologi.
          </p>

          <div className="skills">
            <div>
              <span>HTML</span>
              <strong>90%</strong>
              <div className="skill-bar">
                <i style={{ width: "90%" }} />
              </div>
            </div>

            <div>
              <span>CSS</span>
              <strong>40%</strong>
              <div className="skill-bar">
                <i style={{ width: "40%" }} />
              </div>
            </div>

            <div>
              <span>JavaScript</span>
              <strong>25%</strong>
              <div className="skill-bar">
                <i style={{ width: "25%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="section-title">
          <span>02</span>
          <h2>PROJECT</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">
                //
              </div>

              <span className="project-tag">{project.tag}</span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <button className="project-button">
                View Project →
              </button>
            </article>
          ))}
        </div>
      </section>

      <section id="feedback" className="section feedback-section">
        <div className="section-title">
          <span>03</span>
          <h2>SARAN & KRITIK</h2>
        </div>

        <div className="feedback-container">
          <div className="feedback-info">
            <p className="small-title">FEEDBACK SYSTEM</p>

            <h2>
              Bantu saya
              <br />
              mengembangkan website.
            </h2>

            <p>
              Sampaikan saran, kritik, atau ide mengenai website ini.
            </p>
          </div>

          <form onSubmit={sendFeedback} className="feedback-form">
            <label>Nama</label>

            <input
              type="text"
              placeholder="Nama kamu (opsional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Jenis</label>

            <div className="type-buttons">
              <button
                type="button"
                className={type === "Saran" ? "selected" : ""}
                onClick={() => setType("Saran")}
              >
                Saran
              </button>

              <button
                type="button"
                className={type === "Kritik" ? "selected" : ""}
                onClick={() => setType("Kritik")}
              >
                Kritik
              </button>
            </div>

            <label>Pesan</label>

            <textarea
              placeholder="Tulis saran atau kritik..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />

            <button type="submit" className="submit-button">
              KIRIM FEEDBACK →
            </button>

            {status && <p className="status">{status}</p>}
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-logo">YAEGAR.DEV</div>
        <p>© 2026 Tegar Tri Abadi</p>
      </footer>
    </main>
  );
}