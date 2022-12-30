import { BsCaretDownFill, BsClock, BsHeart, BsList, BsSearch } from 'react-icons/bs';
import logo from './assets/logo.png';
import logoColor from './assets/logo-color.png';
import hero from './assets/hero.png';
import heroDesktop from './assets/hero-desktop.png';
import bisnis from './assets/bisnis.png';
import trending from './assets/trending.png';
import flashSale from './assets/flash-sale.png';
import keuangan from './assets/keuangan.png';
import karir from './assets/karier.png';
import sertifikasi from './assets/sertifikasi.png';
import teknologi from './assets/teknologi.png';
import hobi from './assets/hobi.png';
import bahasa from './assets/bahasa.png';
import lembaga1 from './assets/lembaga-1.png';
import lembaga2 from './assets/lembaga-2.png';
import lembaga3 from './assets/lembaga-3.png';
import lembaga4 from './assets/lembaga-4.png';
import lembaga5 from './assets/lembaga-5.png';
import lembaga6 from './assets/lembaga-6.png';
import lembaga7 from './assets/lembaga-7.png';
import lembaga8 from './assets/lembaga-8.png';
import lembaga9 from './assets/lembaga-9.png';
import lembaga10 from './assets/lembaga-10.png';
import lembaga11 from './assets/lembaga-11.png';
import lembaga12 from './assets/lembaga-12.png';
import lembaga13 from './assets/lembaga-13.png';
import lembaga14 from './assets/lembaga-14.png';
import quoteIcon from './assets/quote-icon.png';
import testimoniAvatar from './assets/testimoni-avatar.png';
import footerImg from './assets/footer-img.png';
import akselerator1 from './assets/akselerator-1.png';
import akselerator2 from './assets/akselerator-2.png';
import akselerator3 from './assets/akselerator-3.png';
import akselerator4 from './assets/akselerator-4.png';
import pembayaran1 from './assets/pembayaran-1.png';
import pembayaran2 from './assets/pembayaran-2.png';
import pembayaran3 from './assets/pembayaran-3.png';
import pembayaran4 from './assets/pembayaran-4.png';
import pembayaran5 from './assets/pembayaran-5.png';
import pembayaran6 from './assets/pembayaran-6.png';
import pembayaran7 from './assets/pembayaran-7.png';
import pembayaran8 from './assets/pembayaran-8.png';
import pembayaran9 from './assets/pembayaran-9.png';
import pembayaran10 from './assets/pembayaran-10.png';
import pembayaran11 from './assets/pembayaran-11.png';
import pembayaran12 from './assets/pembayaran-12.png';
import pembayaran13 from './assets/pembayaran-13.png';
import facebook from './assets/facebook.png';
import youtube from './assets/youtube.png';
import instagram from './assets/instagram.png';
import linkedin from './assets/linkedin.png';
import googlePlay from './assets/google-play.png';
import appStore from './assets/app-store.png';
import { SlideNav, ProductCard, CategoryCard, LembagaCard } from './components';

function App() {
  return (
    <>
      {/* header */}
      <div className="px-4 md:px-36 py-3 bg-gradient-to-b from-[#1C88CE] to-[#0977BE]">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap md:gap-10">
          <img src={logo} alt="logo" className="h-5 md:h-6" />
          <div className="w-full mt-3 md:mt-0 order-last md:order-none p-2.5 flex items-center gap-2.5 bg-white rounded-[10px]">
            <BsSearch color="#0977BE" />
            <input type="text" placeholder="Cari kelas" className="w-full bg-white text-[#ACAEB2] font-medium text-[10px] md:text-xs focus:outline-none" />
          </div>
          <div className="flex items-center gap-5 md:gap-10">
            <a href="#"><BsHeart color="white" /></a>
            <div className="flex gap-1.5 md:gap-2">
              <a href="#" className="px-3 py-2 md:px-5 md:py-2.5 bg-white text-[#0977BE] rounded font-bold text-[9px] md:text-sm">Masuk</a>
              <a href="#" className="px-3 py-2 md:px-5 md:py-2.5 bg-[#1E95DD] text-white rounded font-bold text-[9px] md:text-sm">Daftar</a>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className="px-4 md:px-36 my-4 w-full flex justify-between items-center md:justify-start md:gap-14">
        <a href="#" className="font-bold text-xs flex items-center gap-2 md:mr-11">Kategori <BsCaretDownFill/></a>
        <a href="#" className="font-medium text-xs">Bisnis</a>
        <a href="#" className="font-medium text-xs">Keuangan</a>
        <a href="#" className="font-medium text-xs hidden md:block">Pengembangan Karier</a>
        <a href="#" className="font-medium text-xs hidden lg:block">Sertifikasi</a>
        <a href="#" className="font-medium text-xs hidden lg:block">Teknologi</a>
        <a href="#" className="font-medium text-xs hidden lg:block">Bahasa</a>
        <a href="#" className="font-medium text-xs hidden lg:block">Korporat</a>
        <a href="#" className="font-medium text-xs hidden lg:block">Hobi</a>
        <a href="#" className="font-medium text-xs md:hidden"><BsList color="#ACAEB2" size={15} /></a>
      </div>

      {/* hero */}
      <div className="px-4 md:px-36">
        <div className="relative mb-3.5">
          <img src={hero} alt="hero img" className="w-full md:hidden" />
          <img src={heroDesktop} alt="hero img" className="w-full hidden md:block" />
          {/* left */}
          <SlideNav position="left"/>
          {/* right */}
          <SlideNav position="right"/>
          {/* dot */}
          <div className="absolute w-full flex justify-center gap-1.5 bottom-3">
            <button className="h-1.5 w-1.5 rounded-full bg-white"></button>
            <button className="h-1.5 w-1.5 rounded-full bg-white opacity-30"></button>
            <button className="h-1.5 w-1.5 rounded-full bg-white opacity-30"></button>
          </div>
        </div>
      </div>

      {/* banner */}
      <div className="px-4 md:px-36">
        <div className="relative">
          <div className="flex gap-6 mb-3.5 overflow-x-auto snap-mandatory snap-x">
            <div className={`snap-center flex-shrink-0 md:flex-1 relative h-[91px] w-full bg-gradient-to-r from-[#F1F3F5] via-[#ECEDEF] to-transparent rounded-lg flex items-center after:content-[''] after:bg-[url(./assets/banner-1.png)] after:bg-cover after:rounded-lg after:w-full after:h-full after:absolute after:z-[-1] `}>
              <h3 className="font-extrabold text-sm md:text-base mx-6">Menjadi Ahli <span className="text-[#0977BE]">Akuntansi</span></h3>
              {/* decoration */}
              <div className="absolute top-0 left-0 w-[61px] h-[7px] rounded-tl-lg rounded-br-lg bg-gradient-to-b from-[#1C88CE] to-[#0977BE]"></div>
            </div>
            <div className={`snap-center flex-shrink-0 md:flex-1 relative h-[91px] w-full bg-gradient-to-r from-[#F1F3F5] via-[#ECEDEF] to-transparent rounded-lg flex items-center after:content-[''] after:bg-[url(./assets/banner-2.png)] after:bg-cover after:rounded-lg after:w-full after:h-full after:absolute after:z-[-1] `}>
              <h3 className="font-extrabold text-sm md:text-base mx-6">Menjadi Ahli <span className="text-[#0977BE]">K3 (Kesehatan & Keselamatan Kerja)</span></h3>
              {/* decoration */}
              <div className="absolute top-0 left-0 w-[61px] h-[7px] rounded-tl-lg rounded-br-lg bg-gradient-to-b from-[#1C88CE] to-[#0977BE]"></div>
            </div>
            <div className={`snap-center flex-shrink-0 md:flex-1 relative h-[91px] w-full bg-gradient-to-r from-[#F1F3F5] via-[#ECEDEF] to-transparent rounded-lg flex items-center after:content-[''] after:bg-[url(./assets/banner-3.png)] after:bg-cover after:rounded-lg after:w-full after:h-full after:absolute after:z-[-1] `}>
              <h3 className="font-extrabold text-sm md:text-base mx-6">Menjadi Ahli <span className="text-[#0977BE]">Kesehatan, Keselamatan Kerja & Perlindungan Lingkungan (K3LL)</span></h3>
              {/* decoration */}
              <div className="absolute top-0 left-0 w-[61px] h-[7px] rounded-tl-lg rounded-br-lg bg-gradient-to-b from-[#1C88CE] to-[#0977BE]"></div>
            </div>
            {/* left */}
            <SlideNav position="left"/>
            {/* right */}
            <SlideNav position="right"/>
        </div>
        </div>
        <center>
          <button className="px-4 py-2 rounded-md border border-[#ACAEB2] font-bold text-xs">Lihat Semua Spesialisasi</button>
        </center>
      </div>

      {/* trending */}
      <section className="pt-9">
        <div className="px-4 md:px-36 flex items-center gap-2.5 mb-3.5">
          <img src={trending} alt="trending icon" className="w-[22px] md:w-[26px]" />
          <h1 className="font-extrabold text-lg md:text-2xl">Trending</h1>
        </div>
        <div className="relative px-4 md:mx-36 flex md:justify-center gap-4 overflow-x-auto md:overflow-x-visible pb-5">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          {/* left */}
            <SlideNav position="left"  className="hidden md:flex" />
          {/* right */}
            <SlideNav position="right"  className="hidden md:flex" />
        </div>
      </section>
      {/* flash sale */}
      <section className="pt-5">
        <div className="px-4 md:px-36 flex items-start gap-2.5 mb-3.5">
          <img src={flashSale} alt="flash sale icon" className="w-[22px] md:w-[26px]" />
          <div className="flex flex-col md:flex-row md:gap-4">
            <h1 className="font-extrabold text-lg text-2xl">Flash Sale</h1>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-[12px] md:text-sm">Berakhir dalam</span>
              <div className="px-1.5 py-1 rounded-lg bg-gradient-to-b from-[#FFAA5D] to-[#F63C3C] font-semibold text-white text-[9px] md:text-sm flex items-center gap-1"><BsClock/> 08 : 52 : 05</div>
            </div>
          </div>
        </div>
        <div className="relative px-4 md:mx-36 flex md:justify-center gap-4 overflow-x-auto md:overflow-x-visible pb-5">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          {/* left */}
          <SlideNav position="left"  className="hidden md:flex" />
          {/* right */}
            <SlideNav position="right"  className="hidden md:flex" />
        </div>
      </section>
      {/* kategori */}
      <section className="px-4 md:px-36 pt-5">
        <h1 className="font-extrabold text-lg md:text-xl mb-3.5">Kategori Terpopuler</h1>
        <div className="flex flex-wrap md:flex-nowrap gap-2 mb-6">
          <CategoryCard icon={bisnis} text="Bisnis" />
          <CategoryCard icon={keuangan} text="Keuangan" />
          <CategoryCard icon={karir} text="Pengembangan Karier" />
          <CategoryCard icon={sertifikasi} text="Sertifikasi" />
          <CategoryCard icon={teknologi} text="Teknologi" />
          <CategoryCard icon={hobi} text="Hobi" />
          <CategoryCard icon={bahasa} text="Bahasa" />
        </div>
        <center>
          <button className="px-4 py-2 rounded-md border border-[#ACAEB2] font-bold text-xs mb-5">Lihat Semua Spesialisasi</button>
        </center>
      </section>
      {/* promo */}
      <section className="pt-5">
        <h1 className="px-4 md:px-36 font-extrabold text-lg md:text-xl mb-3.5">Promo Spesial Untukmu</h1>
        <div className="px-4 md:px-36 flex gap-4 overflow-x-auto pb-5">
          <div className="flex-shrink-0 md:flex-1 rounded-lg w-[283px] h-[145px] md:h-[200px] bg-[#0977BE]"></div>
          <div className="flex-shrink-0 md:flex-1 rounded-lg w-[283px] h-[145px] md:h-[200px] bg-[#2BA0E7]"></div>
          <div className="flex-shrink-0 md:flex-1 rounded-lg w-[283px] h-[145px] md:h-[200px] bg-[#22BB3E]"></div>
        </div>
      </section>
      {/* lembaga */}
      <section className="px-4 md:px-36 py-5">
        <div className="flex items-center justify-between mb-3.5">
          <h1 className="font-extrabold text-lg md:text-xl">Lembaga</h1>
          <a href="#" className="font-extrabold text-[11px] md:text-[15px] text-[#2BA0E7]">Lihat Semua</a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-4">
          <LembagaCard logo={lembaga1} text="MEDIA CIPTA PRESTASI" />
          <LembagaCard logo={lembaga2} text="REWATA CONSULTANT" />
          <LembagaCard logo={lembaga3} text="MITRA POLRI" />
          <LembagaCard logo={lembaga4} text="LPK SUVI TRAINING" />
          <LembagaCard logo={lembaga5} text="SURYA COMPUTER" />
          <LembagaCard logo={lembaga6} text="YES STUDY" />
          <LembagaCard logo={lembaga7} text="GADJAH MADA YOGYAKARTA" />
          <LembagaCard logo={lembaga8} text="LPK GLOBAL BONTANG" />
          <LembagaCard logo={lembaga9} text="LKP DUTA" />
          <LembagaCard logo={lembaga10} text="SMART BRAIN" />
          <LembagaCard logo={lembaga11} text="AVICENNA CIPTA TRAINING" />
          <LembagaCard logo={lembaga12} text="LKP MSI" />
          <LembagaCard logo={lembaga13} text="SENJA HASTA AZIZAN" className="hidden md:flex" />
          <LembagaCard logo={lembaga14} text="GLOBAL ANTUSIAS SEMESTA" className="hidden md:flex" />
        </div>
      </section>
      {/* terbaru */}
      <section className="pt-5">
        <div className="px-4 md:px-36 flex items-center justify-between mb-3.5">
          <h1 className="font-extrabold text-lg md:text-xl">Terbaru</h1>
          <a href="#" className="font-extrabold text-[11px] md:text-[15px] text-[#2BA0E7]">Lihat Semua</a>
        </div>
        <div className="relative px-4 md:mx-36 flex md:justify-center gap-4 overflow-x-auto md:overflow-x-visible pb-5">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/> 
          {/* left */}
            <SlideNav position="left"  className="hidden md:flex" />
          {/* right */}
            <SlideNav position="right"  className="hidden md:flex" />
        </div>
      </section>
      {/* bisnis */}
      <section className="pt-5">
        <div className="px-4 md:px-36 flex items-center justify-between mb-3.5">
          <h1 className="font-extrabold text-lg md:text-xl">Bisnis</h1>
          <a href="#" className="font-extrabold text-[11px] md:text-[15px] text-[#2BA0E7]">Lihat Semua</a>
        </div>
        <div className="relative px-4 md:mx-36 flex md:justify-center gap-4 overflow-x-auto md:overflow-x-visible pb-5">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          {/* left */}
            <SlideNav position="left"  className="hidden md:flex" />
          {/* right */}
            <SlideNav position="right"  className="hidden md:flex" />
        </div>
      </section>
      {/* karier */}
      <section className="py-5">
        <div className="px-4 md:px-36 flex items-center justify-between mb-3.5">
          <h1 className="font-extrabold text-lg md:text-xl">Pengembangan Karier</h1>
          <a href="#" className="font-extrabold text-[11px] md:text-[15px] text-[#2BA0E7]">Lihat Semua</a>
        </div>
        <div className="relative px-4 md:mx-36 flex md:justify-center gap-4 overflow-x-auto md:overflow-x-visible pb-5">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          {/* left */}
            <SlideNav position="left"  className="hidden md:flex" />
          {/* right */}
            <SlideNav position="right"  className="hidden md:flex" />
        </div>
      </section>
      {/* testimoni */}
      <section className="pt-11 pb-5 bg-gradient-to-b from-[#F3F5F7] to-[#FFFFFF]">
        <h1 className="px-4 md:px-36 font-extrabold text-2xl md:text-[41px] text-[#C0C2C6] text-center mb-7">Testimoni</h1>
        <div className="px-4 md:px-36 flex gap-8 overflow-x-auto snap-mandatory snap-x">
          <div className="snap-center flex-shrink-0 w-full md:flex-1 p-8 rounded-xl bg-white shadow-lg mb-4">
            <img src={quoteIcon} alt="quote icon" width={27} className="mb-3" />
            <p className="font-semibold italic text-xs md:text-sm mb-5">Kursus online di Arkademi sangat berkesan, materinya simple tidak berbelit-belit. Mudah dicerna bagi para pemula seperti saya. Apalagi dengan sertifikat yang diberi setelah lulus dalam kuis. Sukses terus buat Arkademi!</p>
            <div className="flex items-center gap-3">
              <img src={testimoniAvatar} alt="avatar" width="35" height="35" className="rounded-full" />
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-xs md:text-sm">Nizar Putra (Bandung)</h6>
                <span className="font-semibold text-[9px] md:text-[11px] text-[#94969B]">Siswa kelas Botstrap</span>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 w-full md:flex-1 p-8 rounded-xl bg-white shadow-lg mb-4">
            <img src={quoteIcon} alt="quote icon" width={27} className="mb-3" />
            <p className="font-semibold italic text-xs md:text-sm mb-5">Materi kursus online di Arkademi sangat menarik, isinya daging semua dan layak dipelajari. Pematerinya juga berkompeten di bidangnya. Ditambah penyajian kelas sangat ciamik dan user friendly. Solusi buat pebisnis.</p>
            <div className="flex items-center gap-3">
              <img src={testimoniAvatar} alt="avatar" width="35" height="35" className="rounded-full" />
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-xs md:text-sm">Fuad Hasan (Cilegon)</h6>
                <span className="font-semibold text-[9px] md:text-[11px] text-[#94969B]">Siswa kelas Inbound Marketing</span>
              </div>
            </div>
          </div>
          <div className="snap-center flex-shrink-0 w-full md:flex-1 p-8 rounded-xl bg-white shadow-lg mb-4">
            <img src={quoteIcon} alt="quote icon" width={27} className="mb-3" />
            <p className="font-semibold italic text-xs md:text-sm mb-5">Saya beruntung bergabung ke kursus online di Arkademi. Metode penyampaian sangat jelas singkat dan memudahkan belajar. Ditambah lagi tampilan presentasi yang membuat kita tidak jenuh dalam belajar online.</p>
            <div className="flex items-center gap-3">
              <img src={testimoniAvatar} alt="avatar" width="35" height="35" className="rounded-full" />
              <div className="flex flex-col gap-1">
                <h6 className="font-bold text-xs md:text-sm">Dewi Wijayanti (Jakarta)</h6>
                <span className="font-semibold text-[9px] md:text-[11px] text-[#94969B]">Siswa kelas Brevet Pajak A/B</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center gap-1.5 bottom-3">
          <button className="h-1.5 w-1.5 rounded-full bg-[#333539]"></button>
          <button className="h-1.5 w-1.5 rounded-full bg-[#E5E6E9]"></button>
          <button className="h-1.5 w-1.5 rounded-full bg-[#E5E6E9]"></button>
        </div>
      </section>
      {/* footer */}
      <section className="pt-18 pb-14 px-4 md:px-36">
        <div className="flex flex-col md:flex-row md:gap-[120px] md:items-center">
          <img src={footerImg} alt="footer image" className="w-[269px] md:w-[385px] mb-4" />
          <div>
            <img src={logoColor} alt="logo" className="h-[29px] mb-4" />
            <p className="font-semibold text-[11px] mb-6">Arkademi adalah massive open online course (MOOC) platform karya anak bangsa Indonesia. Pembelajaran di Arkademi dikhususkan untuk skill based learning atau pembelajaran berbasis keahlian yang diantarkan melalui kelas belajar dan kursus online melalui aplikasi Arkademi berbasis mobile app dan web. Di Arkademi setiap individu dan lembaga kursus dapat membuka dan mengkomersialkan kelas onlinenya dan menjangkau siswa dari seluruh Indonesia.</p>
            <h6 className="font-extrabold text-sm mb-2">Akselerator</h6>
            <p className="text-[11px] text-[#5A5C60] mb-3.5">Arkademi adalah bagian program inkubasi dan akselerator dari perusahaan top-level dunia: SOSV MOX (Mobile Only Accelerator), Amazon Web Service (Edstart Program) dan Y Combinator (Startup School) yang dipilih dari tech startup edukasi terbaik dunia.</p>
            <div className="flex items-center gap-3.5">
              <img src={akselerator1} alt="akselerator 1" className="h-[20px]" />
              <img src={akselerator2} alt="akselerator 2" className="h-[20px]" />
              <img src={akselerator3} alt="akselerator 3" className="h-[20px]" />
              <img src={akselerator4} alt="akselerator 4" className="h-[20px]" />
            </div>
          </div>
        </div>
      </section>
      <hr className="color-[#F1F2F4] border-t-[3px]" />
      <section className="pt-11 pb-7 px-4 md:pt-[79px] md:pb-[59px] md:px-36 flex flex-col md:flex-row md:justify-between gap-9">
        <div className="flex flex-col md:flex-row gap-9 md:gap-[73px]">
          <div className="flex flex-col gap-4">
            <h6 className="font-extrabold text-sm">Kategori Populer</h6>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Keuangan</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Perpajakan</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Bisnis</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Marketing</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Kewirausahaan</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Investasi</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-extrabold text-sm">Lainnya</h6>
            <div className="flex flex-col gap-3">
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Panduan</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">FAQ</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Tentang Kami</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Karier</a>
              <a href="#" className="font-semibold text-xs text-[#5A5C60]">Privacy Policy</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-extrabold text-sm">Metode Pembayaran</h6>
            <div className="flex gap-3">
              <img src={pembayaran1} alt="pembayaran 1" className="h-[20px]" />
              <img src={pembayaran2} alt="pembayaran 2" className="h-[20px]" />
              <img src={pembayaran3} alt="pembayaran 3" className="h-[20px]" />
              <img src={pembayaran4} alt="pembayaran 4" className="h-[20px]" />
              <img src={pembayaran5} alt="pembayaran 5" className="h-[20px]" />
            </div>
            <div className="flex gap-3">
              <img src={pembayaran6} alt="pembayaran 6" className="h-[20px]" />
              <img src={pembayaran7} alt="pembayaran 7" className="h-[20px]" />
              <img src={pembayaran8} alt="pembayaran 8" className="h-[20px]" />
              <img src={pembayaran9} alt="pembayaran 9" className="h-[20px]" />
            </div>
            <div className="flex gap-3">
              <img src={pembayaran10} alt="pembayaran 10" className="h-[20px]" />
              <img src={pembayaran11} alt="pembayaran 11" className="h-[20px]" />
              <img src={pembayaran12} alt="pembayaran 12" className="h-[20px]" />
              <img src={pembayaran13} alt="pembayaran 13" className="h-[20px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <h6 className="font-extrabold text-sm">Ikuti Kami</h6>
            <div className="flex gap-2.5">
              <img src={facebook} alt="facebook" className="h-[33px] w-[33px]" />
              <img src={youtube} alt="youtube" className="h-[33px] w-[33px]" />
              <img src={instagram} alt="instagram" className="h-[33px] w-[33px]" />
              <img src={linkedin} alt="linkedin" className="h-[33px] w-[33px]" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h6 className="font-extrabold text-sm">Arkademi Mobile App</h6>
            <div className="flex gap-2">
              <a href="#"><img src={googlePlay} alt="google play" className="h-[41px]" /></a>
              <a href="#"><img src={appStore} alt="app store" className="h-[41px]" /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 md:px-36 py-6 bg-[#F6F7F9] flex flex-col items-center md:flex-row md:justify-between">
        <p className="text-[9px] text-[#94969B] text-center mb-3.5 md:mb-0">© 2022 PT Arkademi Daya Indonesia</p>
        <div className="flex justify-center gap-8">
          <a href="#" className="font-semibold text-[11px] text-[#5A5C60]">Ketentuan Layanan</a>
          <a href="#" className="font-semibold text-[11px] text-[#5A5C60]">Kontak</a>
        </div>
      </section>
    </>
  );
}

export default App;
