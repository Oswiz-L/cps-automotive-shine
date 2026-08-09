import { ArrowRight, Sparkles } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";
import poster from "@/assets/supreme-poster.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden surface-navy">
      <img
        src={heroCar}
        alt="Carrocería de auto de lujo con acabado brillante en cabina de pintura"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.18_0.05_245/0.95)_10%,oklch(0.18_0.05_245/0.6)_55%,transparent_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            <Sparkles className="h-3.5 w-3.5" /> Premium Refinish System
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            CPS Automotive
            <span className="block text-gradient-brand">Supreme Refinish</span>
          </h1>
          <p className="mt-5 text-2xl font-semibold text-white/90 sm:text-3xl">
            Logra un acabado sorprendente.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Recubrimientos automotrices premium diseñados para alto desempeño, durabilidad y un
            brillo impecable diseñados en California y fabricados con orgullo en México.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#productos" className="btn-primary">
              Conoce la línea Supreme Refinish
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#nosotros" className="btn-ghost">
              Sobre la marca
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <img
            src={poster.url}
            alt="Línea Supreme Refinish de CPS Automotive: primer, clearcoat y basecoat"
            loading="lazy"
            className="w-full rounded-2xl border border-white/15 shadow-[0_40px_90px_-40px_rgba(0,0,0,0.9)]"
          />
        </div>
      </div>
    </section>
  );
}
