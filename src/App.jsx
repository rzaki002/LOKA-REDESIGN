import { useState } from "react";

const projects = [
  {
    name: "Ruang Rasa",
    category: "Strategi brand · Digital",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-7",
    imageClass: "h-[280px] md:h-[420px]",
    number: "01",
  },
  {
    name: "Sela Living",
    category: "Identitas visual · E-commerce",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    className: "md:col-span-5 md:mt-24",
    imageClass: "h-[280px] md:h-[340px]",
    number: "02",
  },
  {
    name: "Akar Kolektif",
    category: "Strategi brand · Kampanye",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-5",
    imageClass: "h-[280px] md:h-[350px]",
    number: "03",
  },
  {
    name: "Kopi Pagi",
    category: "Identitas visual · Kemasan",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85",
    className: "md:col-span-7 md:mt-24",
    imageClass: "h-[280px] md:h-[420px]",
    number: "04",
  },
];

const services = [
  {
    number: "01",
    title: "Strategi brand",
    description:
      "Menemukan apa yang membuat brand-mu berarti, lalu merangkainya menjadi arah yang jelas.",
  },
  {
    number: "02",
    title: "Identitas visual",
    description:
      "Sistem visual yang khas, konsisten, dan terasa seperti kamu di setiap titik temu.",
  },
  {
    number: "03",
    title: "Pengalaman digital",
    description:
      "Website dan produk digital yang cantik dipandang, nyaman digunakan, dan bekerja keras.",
  },
];

function ArrowIcon({ diagonal = false, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
    >
      {diagonal ? (
        <path
          d="M7 17 17 7M7 7h10v10"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M4 12h15m-6-6 6 6-6 6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

function Logo({ light = false }) {
  return (
    <a
      href="#home"
      aria-label="Loka Studio, kembali ke beranda"
      className={`inline-flex items-center gap-2.5 font-display text-[19px] font-extrabold tracking-[-0.07em] ${
        light ? "text-white" : "text-ink"
      }`}
    >
      <span className="grid size-8 place-items-center rounded-full bg-lime text-[15px] text-ink">
        l.
      </span>
      loka<span className="ml-[-9px] font-medium tracking-[-0.06em]">studio</span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="overflow-hidden">
      <header className="relative z-20 bg-paper">
        <nav
          aria-label="Navigasi utama"
          className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 lg:px-20"
        >
          <Logo />

          <div className="hidden items-center gap-9 md:flex">
            <a className="text-sm text-muted transition hover:text-ink" href="#tentang">
              Tentang
            </a>
            <a className="text-sm text-muted transition hover:text-ink" href="#layanan">
              Layanan
            </a>
            <a className="text-sm text-muted transition hover:text-ink" href="#karya">
              Karya
            </a>
            <a className="text-sm text-muted transition hover:text-ink" href="#kontak">
              Kontak
            </a>
          </div>

          <a
            href="#kontak"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest md:inline-flex"
          >
            Mulai proyek <ArrowIcon className="size-4" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid size-11 place-items-center rounded-full border border-ink/10 md:hidden"
          >
            <span className="flex w-[18px] flex-col gap-[5px]">
              <span className={`h-[1.5px] bg-ink transition ${menuOpen ? "translate-y-[3px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] bg-ink transition ${menuOpen ? "-translate-y-[3px] -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>

        {menuOpen && (
          <div className="absolute inset-x-0 top-full border-t border-ink/10 bg-paper px-6 py-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Tentang", "#tentang"],
                ["Layanan", "#layanan"],
                ["Karya", "#karya"],
                ["Kontak", "#kontak"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-muted hover:bg-white hover:text-ink"
                >
                  {label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
              >
                Mulai proyek <ArrowIcon className="size-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 pb-16 pt-10 md:px-12 md:pb-24 md:pt-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-20 lg:pb-28"
        >
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              <span className="size-2 rounded-full bg-[#90b948]" />
              Studio kreatif independen · Jakarta
            </div>
            <h1 className="max-w-[760px] font-display text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[0.99] tracking-[-0.075em] text-ink">
              Brand baik
              <br />
              punya <span className="font-serif font-medium italic">cerita.</span>
            </h1>
            <p className="mt-7 max-w-[490px] text-base leading-7 text-muted md:text-lg md:leading-8">
              Kami merancang strategi, identitas, dan pengalaman digital untuk
              brand yang ingin tumbuh dengan cara berbeda.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#kontak"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-forest"
              >
                Ceritakan idemu <ArrowIcon />
              </a>
              <a
                href="#karya"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:gap-3"
              >
                Lihat karya kami <ArrowIcon className="size-4" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3" aria-hidden="true">
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1500648767791-00dcc994a43e",
                  "photo-1531123897727-8f129e1688ce",
                ].map((photo) => (
                  <img
                    key={photo}
                    className="size-9 rounded-full border-[3px] border-paper object-cover"
                    src={`https://images.unsplash.com/${photo}?auto=format&fit=crop&w=80&h=80&q=80`}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-xs leading-5 text-muted">
                Partner tumbuh untuk
                <br />
                <span className="font-semibold text-ink">30+ brand lokal</span>
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[610px] lg:ml-auto">
            <div className="absolute -right-3 -top-2 z-10 flex size-[94px] rotate-12 flex-col items-center justify-center rounded-full bg-lime text-center text-[10px] font-bold uppercase leading-4 tracking-[0.08em] text-ink shadow-lg md:-right-6 md:-top-6 md:size-[112px]">
              <span className="text-[20px] leading-6">✳</span>
              Made with
              <br />
              intention
            </div>
            <div className="relative h-[390px] overflow-hidden rounded-[180px_180px_24px_24px] bg-[#d4d7c8] md:h-[560px]">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
                alt="Studio kreatif yang terang dengan tanaman dan ruang kerja bersama"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between rounded-2xl border border-white/30 bg-white/85 p-4 backdrop-blur-md md:bottom-7 md:left-7 md:right-7 md:p-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                    Misi kami
                  </p>
                  <p className="mt-1 font-display text-base font-semibold tracking-tight text-ink md:text-lg">
                    Bikin yang bermakna.
                  </p>
                </div>
                <span className="grid size-10 place-items-center rounded-full bg-lime text-ink">
                  <ArrowIcon diagonal />
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-2 -z-0 h-28 w-28 rounded-full border border-ink/15 md:-bottom-8 md:-left-8 md:h-40 md:w-40" />
          </div>
        </section>

        <section
          id="tentang"
          className="border-y border-ink/10 bg-[#f0f1e9] px-6 py-8 md:px-12 md:py-10 lg:px-20"
        >
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-7 md:flex-row">
            <p className="max-w-[160px] text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.15em] text-muted md:text-left">
              Bersama brand yang bertumbuh
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-4 font-display text-lg font-bold tracking-[-0.06em] text-ink/45 md:gap-x-12 md:text-xl">
              <span>ruang<span className="font-medium">rasa</span></span>
              <span className="font-serif italic">sela living</span>
              <span className="tracking-[-0.09em]">akar®</span>
              <span className="font-medium tracking-[-0.03em]">KOPI PAGI</span>
            </div>
          </div>
        </section>

        <section
          id="layanan"
          className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28 lg:px-20"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                Apa yang kami lakukan
              </p>
              <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.065em] text-ink md:text-6xl">
                Dari ide jadi
                <br />
                sesuatu yang <span className="font-serif font-medium italic">nyata.</span>
              </h2>
              <p className="mt-6 max-w-[390px] text-sm leading-7 text-muted md:text-base">
                Pendekatan yang tepat untuk menjadikan brand-mu lebih jelas,
                lebih relevan, dan sulit dilupakan.
              </p>
              <a
                href="#kontak"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink"
              >
                Kenali cara kami bekerja <ArrowIcon className="size-4" />
              </a>
            </div>
            <div className="border-t border-ink/15">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="grid gap-2 border-b border-ink/15 py-6 md:grid-cols-[52px_1fr_1.1fr] md:items-start md:gap-5 md:py-8"
                >
                  <span className="pt-1 text-xs font-semibold text-muted">
                    {service.number}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-[-0.04em] text-ink md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="max-w-[350px] text-sm leading-6 text-muted">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="karya" className="bg-forest px-6 py-20 text-white md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                  Sedikit yang sudah kami buat
                </p>
                <h2 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.065em] md:text-6xl">
                  Kerja baik,
                  <br />
                  <span className="font-serif font-medium italic text-lime">
                    cerita baik.
                  </span>
                </h2>
              </div>
              <p className="max-w-[330px] text-sm leading-6 text-white/65">
                Setiap proyek dimulai dari mendengarkan. Ini beberapa cerita
                brand yang tumbuh bersama kami.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-7 gap-y-12 md:grid-cols-12 md:gap-y-16">
              {projects.map((project) => (
                <a
                  href="#kontak"
                  key={project.number}
                  className={`group block ${project.className}`}
                >
                  <div
                    className={`overflow-hidden rounded-[18px] bg-white/10 ${project.imageClass}`}
                  >
                    <img
                      src={project.image}
                      alt={`Proyek ${project.name}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-semibold tracking-[-0.035em] md:text-xl">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/55">
                        {project.category}
                      </p>
                    </div>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 transition group-hover:border-lime group-hover:bg-lime group-hover:text-ink">
                      <ArrowIcon diagonal />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[980px] text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-lime text-2xl text-ink">
              “
            </span>
            <blockquote className="mt-7 font-display text-2xl font-medium leading-[1.35] tracking-[-0.05em] text-ink md:text-4xl md:leading-[1.3]">
              “Loka bukan cuma membuat brand kami terlihat lebih baik. Mereka
              membantu kami memahami{" "}
              <span className="font-serif italic">siapa kami</span> dan ingin
              membawa bisnis ini ke mana.”
            </blockquote>
            <div className="mt-7">
              <p className="text-sm font-semibold text-ink">Nadia Putri</p>
              <p className="mt-1 text-xs text-muted">Founder, Ruang Rasa</p>
            </div>
          </div>
        </section>

        <section id="kontak" className="px-6 pb-20 md:px-12 md:pb-28 lg:px-20">
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[26px] bg-lime px-7 py-12 md:px-14 md:py-16 lg:px-20">
            <div className="absolute -right-8 -top-20 size-64 rounded-full border border-ink/10 md:right-14 md:size-80" />
            <div className="absolute -right-2 -top-14 size-48 rounded-full border border-ink/10 md:right-20 md:size-64" />
            <div className="relative z-10 max-w-[700px]">
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/60">
                Punya sesuatu dalam pikiran?
              </p>
              <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-0.07em] text-ink md:text-6xl">
                Yuk, bikin sesuatu yang berarti.
              </h2>
              <p className="mt-5 max-w-[420px] text-sm leading-6 text-ink/70 md:text-base">
                Ceritakan tantanganmu. Kami akan bantu menemukan langkah
                berikutnya bersama.
              </p>
              <a
                href="mailto:halo@lokastudio.id?subject=Yuk%20kolaborasi"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-forest"
              >
                halo@lokastudio.id <ArrowIcon />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-6 py-8 text-white md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Logo light />
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Loka Studio. Dibuat dengan niat baik.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/65">
            <a className="transition hover:text-lime" href="mailto:halo@lokastudio.id">
              Email
            </a>
            <a
              className="transition hover:text-lime"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
