// MODE GELAP
const toggleBtn=document.getElementById("toggle-dark");
const body=document.body;
if(localStorage.getItem("theme")==="dark"){body.classList.add("dark-mode"); if(toggleBtn) toggleBtn.textContent="☀️";}
if(toggleBtn){
  toggleBtn.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
    const isDark=body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark?"dark":"light");
    toggleBtn.textContent=isDark?"☀️":"🌙";
  });
}

// DAFTAR PROYEK
const projects=[
  {
    judul:"Tahoo - Katalog Resep Masakan",
    deskripsi:"Aplikasi katalog resep masakan Nusantara dengan fitur pencarian, filter kategori, dan penyimpanan resep favorit berbasis local storage.",
    thumb:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80",
    badge:"Web App • 12 Resep",
    link:"tahoo.html",
    color:"#ff7a00"
  },
  {
    judul:"Dompet Pelajar - Catatan Keuangan",
    deskripsi:"Aplikasi pencatatan pemasukan dan pengeluaran harian untuk pelajar dengan ringkasan saldo otomatis, filter periode, dan kategori transaksi.",
    thumb:"https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80",
    badge:"Web App • Keuangan",
    link:"dompet.html",
    color:"#10b981"
  },
  {
    judul:"Jadwal Pelajaran - Kelas 10 TKJ",
    deskripsi:"Aplikasi jadwal pelajaran Kelas 10 TKJ SMK PGRI 6 Ngawi dengan fitur tambah, hapus, dan atur ulang ke jadwal default serta penanda hari aktif.",
    thumb:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    badge:"Web App • Pendidikan",
    link:"jadwal.html",
    color:"#2563eb"
  },
  {
    judul:"TKJCalc - Kalkulator Jaringan",
    deskripsi:"Kalkulator untuk konversi bilangan desimal, biner, oktal, dan heksadesimal serta perhitungan subnet mask, network, broadcast, dan jumlah host.",
    thumb:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    badge:"Web App • Jaringan",
    link:"tkjcalc.html",
    color:"#22c55e"
  },
  {
    judul:"NihongoFlash - Belajar Hiragana Katakana",
    deskripsi:"Aplikasi flashcard untuk mempelajari huruf Hiragana dan Katakana dengan mode belajar interaktif, sistem progres, dan kuis untuk menguji pemahaman.",
    thumb:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
    badge:"Web App • Edukasi",
    link:"nihongo.html",
    color:"#ec4899"
  },
  {
    judul:"Fokus Belajar - Pomodoro Timer",
    deskripsi:"Aplikasi manajemen waktu belajar dengan metode Pomodoro, dilengkapi daftar tugas, pelacakan durasi fokus, dan statistik harian.",
    thumb:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    badge:"Web App • Produktivitas",
    link:"fokus.html",
    color:"#8b5cf6"
  }
];

const container=document.getElementById("project-container");
if(container){
  container.innerHTML="";
  projects.forEach(p=>{
    const card=document.createElement("div");
    card.className="project-card";
    card.style.borderTop=`4px solid ${p.color}`;
    card.innerHTML=`
      <div class="project-thumb"><img src="${p.thumb}" loading="lazy"><span class="badge" style="background:${p.color}">${p.badge}</span></div>
      <div class="project-body">
        <h3>${p.judul}</h3>
        <p>${p.deskripsi}</p>
        <div class="project-foot"><div class="tags"><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span></div><div class="arrow"><i class="ri-arrow-right-line"></i></div></div>
      </div>`;
    card.addEventListener("click",()=>{window.location.href=p.link});
    container.appendChild(card);
  });
}
