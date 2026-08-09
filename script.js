// DARK MODE
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

// PROJECTS DATA
const projects=[
  {
    judul:"Tahoo - Katalog Resep Masakan",
    deskripsi:"Katalog resep Nusantara dengan pencarian, filter, favorit permanen dan sambutan personal sesuai nama kamu.",
    thumb:"https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&q=80",
    badge:"Web App • 12 Resep",
    link:"tahoo.html",
    color:"#ff7a00"
  },
  {
    judul:"Dompet Pelajar - Catatan Keuangan",
    deskripsi:"Pencatatan pemasukan pengeluaran harian dengan saldo otomatis dan sapaan personal di dashboard.",
    thumb:"https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&auto=format&q=80",
    badge:"Web App • Keuangan",
    link:"dompet.html",
    color:"#10b981"
  },
  {
    judul:"Jadwal Pelajaran - Kelas 10 TKJ",
    deskripsi:"Jadwal Kelas 10 TKJ SMK PGRI 6 Ngawi dengan tambah, hapus, reset dan greeting personal.",
    thumb:"https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&auto=format&q=80",
    badge:"Web App • Pendidikan",
    link:"jadwal.html",
    color:"#2563eb"
  },
  {
    judul:"TKJCalc - Kalkulator Jaringan",
    deskripsi:"Konversi bilangan dan perhitungan subnet untuk pembelajaran TKJ, sekarang dengan sapaan nama.",
    thumb:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&q=80",
    badge:"Web App • Jaringan",
    link:"tkjcalc.html",
    color:"#22c55e"
  },
  {
    judul:"NihongoFlash - Hiragana Katakana",
    deskripsi:"Flashcard Hiragana Katakana interaktif dengan progres hafalan dan greeting personal.",
    thumb:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&auto=format&q=80",
    badge:"Web App • Edukasi",
    link:"nihongo.html",
    color:"#ec4899"
  },
  {
    judul:"Fokus Belajar - Pomodoro Timer",
    deskripsi:"Manajemen waktu belajar Pomodoro dengan tugas, statistik dan sambutan personal untuk semangat belajar.",
    thumb:"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&q=80",
    badge:"Web App • Produktivitas",
    link:"fokus.html",
    color:"#8b5cf6"
  }
];

const container=document.getElementById("project-container");
if(container){
  container.innerHTML="";
  projects.forEach((p,i)=>{
    const card=document.createElement("div");
    card.className="project-card fade-in";
    card.style.animationDelay=`${0.05*i}s`;
    card.style.borderTop=`4px solid ${p.color}`;
    card.innerHTML=`
      <div class="project-thumb"><img src="${p.thumb}" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&q=80'"><span class="badge" style="background:${p.color}">${p.badge}</span></div>
      <div class="project-body">
        <h3>${p.judul}</h3>
        <p>${p.deskripsi}</p>
        <div class="project-foot"><div class="tags"><span class="tag">Responsive</span><span class="tag">Personal</span><span class="tag">JS</span></div><div class="arrow"><i class="ri-arrow-right-line"></i></div></div>
      </div>`;
    card.addEventListener("click",()=>{window.location.href=p.link});
    container.appendChild(card);
  });
}

// GLOBAL GREETING HELPER - dipakai di semua project
function yaegarGetGreeting(){
  const h=new Date().getHours();
  if(h<11) return "Selamat pagi";
  if(h<15) return "Selamat siang";
  if(h<18) return "Selamat sore";
  return "Selamat malam";
}
function yaegarGetName(){
  return localStorage.getItem('yaegar_name') || '';
}
