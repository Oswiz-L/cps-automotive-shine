import { Award, Leaf, Globe2, Gem, Zap } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "10 años de experiencia",
    text: "Una década perfeccionando tecnología de recubrimientos para repintado.",
  },
  {
    icon: Leaf,
    title: "Fórmulas ecológicas",
    text: "Bajo COV y libre de plomo en toda la línea de productos.",
  },
  {
    icon: Globe2,
    title: "Diseñado en California, hecho en México",
    text: "Investigación y desarrollo internacional con manufactura local.",
  },
  {
    icon: Gem,
    title: "Resultados de nivel profesional",
    text: "Máximo brillo, resistencia UV y protección anti-rayado.",
  },
  {
    icon: Zap,
    title: "Rapidez",
    text: "Primarios y esmaltes de secado rápido que aumentan la productividad del taller.",
  },
];

export function WhyCPS() {
  return (
    <section id="porque" className="surface-navy">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Ventajas
          </span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">¿Por qué elegir CPS?</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/12 bg-white/[0.06] p-7 backdrop-blur transition-colors hover:border-accent/60 hover:bg-white/[0.1]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/15">
                <r.icon className="h-6 w-6 text-accent" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
