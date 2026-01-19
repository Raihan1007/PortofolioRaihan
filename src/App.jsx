import {motion} from "framer-motion";
import IdCard from "./components/IdCard/IdCard";
import GlobalBackground from "./components/Background/GlobalBackground";
import {listTools, listProyek} from "./data"

function App() {
  return ( 
    <>
      <GlobalBackground  />
      
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
             <img src="raihan.png" alt="Hero Image" className="w-10 rounded-md" loading="lazy"/>
             <q>Apa yang kita usahakan tidak akan sia-sia, jika kita bersungguh-sungguh🏋️</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, Saya Raihan Rafi Azhar</h1>
          <p className="text-base/loose mb-6 opacity-50">Saya mempunyai ketertarikan dalam bidang Programming terutama pada pembuatan Website, keteratrikan pada bidang ini berlangsung karna saya sangat suka mengimplementasikan Design dalam bentuk Website </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-500">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500">Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
          <div className="w-[500px] md:ml-auto">
            <IdCard />
          </div>
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10">
        <div className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img src="/raihan.png" alt="Hero Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
          <p className="text-base/loose mb-10">
            Perkenalkan saya Raihan Rafi Azhar, saya adalah seorang Mahasiswa Semester 5 di Institut Bisnis dan Informatika Kesatuan Bogor. Saya sedang mendalami dunia Programming dengan fokus utama saat ini pada Frontend Development. Ketertarikan saya terletak pada proses membangun tampilan website yang tidak hanya menarik secara visual, tetapi juga memberikan pengalaman pengguna yang baik
          </p>
          <div className="flex items-center justify-between">
            <img src="/raihan.png" alt="Hero Image" className="w-12 rounded-md sm:block hidden" loading="lazy"/>
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
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full md:text-base/loose opacity-50">Berikut ini beberapa tool yang biasa saya pakai untuk pembuatan Website apapun</p>
          <div className="tools-box mt-14 grid sm:grid-cols-2 gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

           {listTools.map((tool) => (
              <div className="flex items-center gap-2 p-3 border border-zinc-500 rounded-md hover:bg-zinc-800 group" key={tool.id}> 
                  <img src={tool.gambar} alt="Tool Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-800"  loading="lazy"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
           ))}

          </div>       
        </div>
      </div>

      {/* Project */}
      <div className="proyek mt-32 py-10">
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">Berikut adalah beberapa proyek yang telah saya kerjakan</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
           {listProyek.map((proyek) => (
              <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md">
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                <div>
                  <h1 className="txt-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p className="py-1 px-3 border border-zinc-600 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                      ))}
                  </div>
                  <div className="mt-8 text-center">
                    <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-500">Lihat Website</a>
                  </div>
                </div>
              </div>
           ))}
        </div>
      </div>

      {/* Kontak */}
      <div className="kontak mt-32 p-10">
        <h1 className="text-4xl m-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center opacity-50">Mari Hubungi Saya</p>
        <form action="https://formsubmit.co/raihanazz880@gmail.com" method="POST" className="bg-zinc-800 p-10 w-fit mx-auto rounded-md" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..."  className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan..."  className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="text-center">
              <button type="submit" className="font-semibold bg-violet-700 p-3 rounded-lg w-fll cursor-pointer border border-zinc-600 hover:bg-violet-500">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </> 
  );
}

export default App;