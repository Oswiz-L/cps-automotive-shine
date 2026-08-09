import { Check, CalendarDays, MapPin, Factory } from "lucide-react";

const facts = [
  { icon: CalendarDays, label: "Fundada hace", value: "10 años" },
  { icon: MapPin, label: "Diseñada en", value: "California, EE. UU." },
  { icon: Factory, label: "Fabricada en", value: "México" },
];

const pillars = [
  "Libre de plomo",
  "Amigable con el ambiente / Bajo COV",
  "Diseñado en California, hecho en México",
  "Fórmulas de secado rápido y fácil lijado",
  "Alto brillo con protección UV",
];

export function About() {
  return (
    <section id="nosotros" className="border-y border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <div className="min-w-0">
          <span className="eyebrow">Sobre nosotros</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
            Tecnología de repintado con ADN mexicano
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            CPS Automotive es una marca mexicana de recubrimientos con 10 años de experiencia en
            tecnología de repintado automotriz. Combinamos estándares de diseño internacionales con
            excelencia en manufactura local para ofrecer recubrimientos ecológicos y de alto
            rendimiento, en los que confían talleres profesionales y plantas industriales.
          </p>
          <p className="mt-5 rounded-xl border-l-4 border-accent bg-card p-4 text-sm font-medium text-foreground sm:text-base">
            <span className="font-bold">Enfoque:</span> Repintado automotriz, acabados industriales
            y recubrimientos para flotillas.
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="card-elevated p-5">
                <f.icon className="h-5 w-5 text-primary" />
                <dt className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="mt-1 text-lg font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="min-w-0 self-center">
          <div className="card-elevated p-7 sm:p-9">
            <span className="eyebrow">Pilares de marca</span>
            <ul className="mt-6 space-y-4">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <span className="min-w-0 text-base font-medium">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
