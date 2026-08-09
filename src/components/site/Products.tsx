import { Check, Truck, Timer } from "lucide-react";
import clearcoats from "@/assets/clearcoats.png.asset.json";
import profleet from "@/assets/profleet.png.asset.json";
import rapid from "@/assets/rapid.png.asset.json";

const supremeRows = [
  ["Primer 1K", "Primario acrílico", "Fácil de lijar y de secado rápido, bajo COV"],
  ["Basecoat", "—", "Base de color de alta calidad"],
  ["Clearcoat 2K Uretano HS", "S-2020 (2:1:1)", "Máximo brillo, filtros UV, anti-rayado"],
  ["Clearcoat 2K Uretano MS", "S-2022 (4:1:1)", "Máximo brillo, filtros UV, anti-rayado"],
  ["Clearcoat 2K Uretano MS", "S-2024 (4:1)", "Buen brillo, filtros UV, anti-rayado"],
];

const supremeFeatures = [
  "Máximo brillo",
  "Filtros UV",
  "Anti-rayado",
  "Bajo COV",
  "Disponible en 1 Galón (3.78 L)",
];

export function Products() {
  return (
    <section id="productos" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="max-w-2xl">
        <span className="eyebrow">Líneas de producto</span>
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
          Sistemas completos para cada tipo de acabado
        </h2>
      </div>

      {/* Supreme Refinish */}
      <article className="card-elevated mt-12 overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="surface-navy relative flex items-center justify-center p-8">
            <img
              src={clearcoats.url}
              alt="Latas de clearcoat 2K uretano Supreme Refinish S-2020, S-2022 y S-2024"
              loading="lazy"
              className="w-full max-w-md"
            />
          </div>
          <div className="p-7 sm:p-10">
            <span className="eyebrow">Línea automotriz insignia</span>
            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">Supreme Refinish</h3>
            <p className="mt-3 text-muted-foreground">
              Sistema de repintado 2K premium para un acabado automotriz de calidad showroom.
            </p>

            <div className="mt-7 overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[36rem] text-left text-sm">
                <thead className="bg-surface">
                  <tr>
                    <th className="px-4 py-3 font-bold">Producto</th>
                    <th className="px-4 py-3 font-bold">Código</th>
                    <th className="px-4 py-3 font-bold">Características</th>
                  </tr>
                </thead>
                <tbody>
                  {supremeRows.map((r) => (
                    <tr key={r[0] + r[1]} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-semibold">{r[0]}</td>
                      <td className="px-4 py-3 font-mono text-primary">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2">
              {supremeFeatures.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary"
                >
                  <Check className="h-3.5 w-3.5" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      {/* Secondary lines */}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <article className="card-elevated overflow-hidden">
          <div className="surface-navy flex items-center justify-center p-8">
            <img
              src={profleet.url}
              alt="Lata ProFleet PSS-604 esmalte poliuretano azul dinámico"
              loading="lazy"
              className="h-64 w-auto object-contain"
            />
          </div>
          <div className="p-7 sm:p-9">
            <Truck className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-2xl font-extrabold">ProFleet Industrial Finishes 800</h3>
            <p className="mt-3 text-muted-foreground">
              Esmalte poliuretano de una sola etapa, hecho para productividad y alto desempeño en
              flotillas comerciales.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                'PFU-604 / PSS-604 — "Azul dinámico"',
                "Bajo COV, amigable con el ambiente",
                "Diseñado para vehículos pesados y camiones de flotilla",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 font-medium">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="card-elevated overflow-hidden">
          <div className="surface-navy flex items-center justify-center p-8">
            <img
              src={rapid.url}
              alt="Lata Rapid RAE-305 esmalte de secado rápido amarillo seguridad"
              loading="lazy"
              className="h-64 w-auto object-contain"
            />
          </div>
          <div className="p-7 sm:p-9">
            <Timer className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-2xl font-extrabold">Rapid (CPS Industrial)</h3>
            <p className="mt-3 text-muted-foreground">
              Esmalte de secado rápido para aplicaciones industriales.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "RAE-305 — Amarillo seguridad",
                "Acabado brillante 1K",
                "Seco en 15 minutos",
                "Ideal para estructuras de acero, equipo de seguridad y fabricación industrial",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span className="min-w-0 font-medium">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
