import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/tailwind.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/github.png";
import Tools6 from "/assets/tools/figma.png";
import Tools7 from "/assets/tools/css.png";
import Tools8 from "/assets/tools/html.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "CSS3",
    ket: "Styling Language",
    dad: "1300",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "HTML",
    ket: "Markup Language",
    dad: "1500",
  },
];

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.png";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.png";
import Proyek5 from "/assets/proyek/proyek5.png";
import { link } from "framer-motion/client";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Perhitungan Suara",
    desk: "Website untuk menghitung suara pada sebuah pemilihan ketua dan wakil ketua himpunan mahasiswa",
    tools: ["HTML", "CSS", "Javascript",],
    dad: "200",
    link:"https://e-voting-henna.vercel.app/"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Sebuah website company profile untuk sebuah perusahaan fiktif untuk proyek saat studi independen",
    tools: ["HTML", "CSS"],
    dad: "300",
    link:"https://kosfinder.vercel.app/"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Manajemen Keuangan",
    desk: "Website Manajemen Keuangan adalah web yang membantu mengelola pemasukan serta pengeluaran",
    tools: ["HTML", "CSS", "Javascript"],
    dad: "400",
    link:"https://kasera-fe.vercel.app/"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Booking Tempat Olahraga",
    desk: "Website untuk memesan atau booking tempat olahraga secara online",
    tools: ["HTML", "CSS", "Javascript", "Code Igniter"],
    dad: "500",
    link:"https://github.com/Raihan1007/SportSpace"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Website pribadi untuk menampilkan profil serta proyek yang telah saya kerjakan",
    tools: ["JavaScript", "React JS", "Tailwind CSS"],
    dad: "600",
    link:"https://portofolio-raihanrafi.vercel.app/"
  },
];
