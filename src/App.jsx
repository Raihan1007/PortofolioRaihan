import { motion } from "framer-motion";
import IdCard from "./components/IdCard/IdCard";
import GlobalBackground from "./components/Background/GlobalBackground";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <GlobalBackground />

      {/* HERO */}
      <div className="hero grid md:grid-cols-2 grid-cols-1 items-center pt-10 gap-6">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src="/raihan.png"
              alt="Hero"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>
              Apa yang kita usahakan tidak akan sia-sia, jika kita
              bersungguh-sungguh 🏋️
            </q>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Raihan Rafi Azhar
          </h1>

          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programming terutama pada
            pembuatan Website, karena saya sangat suka mengimplementasikan design
            ke dalam bentuk website yang interaktif dan responsif.
          </p>

          <div className="flex items-center gap-3">
            {/* DOWNLOAD CV */}
            <a
              href="/RaihanRafiAzhar_CV.pdf"
              download
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500 flex items-center gap-2"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>

            {/* LIHAT PROYEK */}
            <a
              href="#proyek"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500 flex items-center gap-2"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>

        <div className="w-[500px] md:ml-auto">
          <IdCard />
        </div>
      </div>

      {/* TENTANG */}
      <div className="tentang mt-32 py-10">
        <div className="w-full lg:w-3/4 mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src="/raihan.png"
            alt="Tentang"
            className="w-12 rounded-md mb-10 sm:hidden"
          />

          <p className="text-base/loose mb-10">
            Perkenalkan saya Raihan Rafi Azhar, mahasiswa semester 5 di Institut
            Bisnis dan Informatika Kesatuan Bogor. Saya mendalami dunia
            Programming dengan fokus utama Frontend Development dan senang
            membangun website yang nyaman digunakan.
          </p>

          <div className="flex items-center justify-between">
            <img
              src="/raihan.png"
              alt="Avatar"
              className="w-12 rounded-md hidden sm:block"
            />

            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  5<span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">5</h1>
                <p>Bulan Pengalaman</p>
              </div>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="tools mt-32">
          <h1 className="text-4xl font-bold mb-4">Tools yang dipakai</h1>
          <p className="opacity-50 md:w-2/3">
            Berikut beberapa tools yang biasa saya gunakan dalam pengembangan
            website
          </p>

          <div className="tools-box mt-14 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                className="flex items-center gap-3 p-3 border border-zinc-500 rounded-md hover:bg-zinc-800"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-14 bg-zinc-800 p-1 rounded-md"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROYEK */}
      <div id="proyek" className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-center opacity-50">
          Beberapa proyek yang telah saya kerjakan
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
              <img src={proyek.gambar} alt={proyek.nama} />

              <h1 className="text-xl font-bold my-4">{proyek.nama}</h1>
              <p className="mb-4 opacity-50">{proyek.desk}</p>

              <div className="flex flex-wrap gap-2">
                {proyek.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-zinc-600 rounded-md text-sm font-semibold"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href={proyek.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-700 p-3 rounded-lg block hover:bg-violet-500"
                >
                  Lihat Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* KONTAK */}
      <div className="kontak mt-32 p-10">
        <h1 className="text-4xl font-bold text-center mb-2">Kontak</h1>
        <p className="text-center opacity-50 mb-6">Mari Hubungi Saya</p>

        <form
          action="https://formsubmit.co/raihanazz880@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 mx-auto rounded-md max-w-lg"
        >
          <div className="flex flex-col gap-6">
            <input
              type="text"
              name="nama"
              placeholder="Nama Lengkap"
              className="p-2 rounded-md border border-zinc-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 rounded-md border border-zinc-500"
              required
            />
            <textarea
              name="pesan"
              rows="6"
              placeholder="Pesan..."
              className="p-2 rounded-md border border-zinc-500"
              required
            />
            <button className="bg-violet-700 p-3 rounded-lg hover:bg-violet-500">
              Kirim Pesan
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
