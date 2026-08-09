import logo from "@/assets/logo-automotive.png.asset.json";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#productos", label: "Líneas de producto" },
  { href: "#porque", label: "¿Por qué CPS?" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="CPS Automotive"
            className="h-9 w-auto shrink-0 sm:h-11"
            width={220}
            height={110}
          />
        </a>
        <nav className="flex items-center gap-1 sm:gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a href="#productos" className="btn-primary px-4 py-2 text-sm sm:px-6">
            Ver productos
          </a>
        </nav>
      </div>
    </header>
  );
}
