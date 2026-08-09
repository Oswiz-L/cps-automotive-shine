import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { WhyCPS } from "@/components/site/WhyCPS";
import { Footer } from "@/components/site/Footer";

const title = "CPS Automotive | Supreme Refinish — Recubrimientos Premium";
const description =
  "Recubrimientos automotrices premium CPS: Supreme Refinish 2K, ProFleet y Rapid. Alto brillo, filtros UV, bajo COV. Diseñado en California, hecho en México.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyCPS />
      </main>
      <Footer />
    </div>
  );
}
