"use client";

import { useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

export default function Feedback() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Saran");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    if (!message.trim()) {
      setStatus("Pesan belum diisi.");
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
      setType("Saran");

      setStatus("Feedback berhasil dikirim.");
    } catch (error) {
      console.error(error);
      setStatus("Gagal mengirim feedback.");
    }
  }

  return (
    <section id="feedback" className="section">
      <div className="section-title">
        <span>05</span>
        <h2>SARAN & KRITIK</h2>
      </div>

      <div className="feedback-container">
        <div className="feedback-info">
          <p className="small-title">
            FEEDBACK SYSTEM
          </p>

          <h3>
            Bantu mengembangkan
            <br />
            YAEGAR.DEV
          </h3>

          <p>
            Kirim saran, kritik, atau ide mengenai
            website ini.
          </p>
        </div>

        <form
          className="feedback-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Nama (opsional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="feedback-types">
            <button
              type="button"
              className={type === "Saran" ? "selected" : ""}
              onClick={() => setType("Saran")}
            >
              SARAN
            </button>

            <button
              type="button"
              className={type === "Kritik" ? "selected" : ""}
              onClick={() => setType("Kritik")}
            >
              KRITIK
            </button>
          </div>

          <textarea
            rows={6}
            placeholder="Tulis saran atau kritik..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="submit-button"
          >
            KIRIM →
          </button>

          {status && (
            <p className="feedback-status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}