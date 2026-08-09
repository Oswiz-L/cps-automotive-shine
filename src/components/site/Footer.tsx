import logo from "@/assets/logo-automotive.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <img src={logo.url} alt="CPS Automotive" className="h-9 w-auto shrink-0" loading="lazy" />
        </div>
        <p className="text-sm text-muted-foreground">
          Diseñado en California · Hecho en México · Libre de plomo · Bajo COV
        </p>
        <p className="text-sm font-semibold">www.cps-coatings.com</p>
      </div>
    </footer>
  );
}
