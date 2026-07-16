import { companies } from "@/lib/data";

export default function TrustedCompanies() {
  const loop = [...companies, ...companies];

  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-12">
      <div className="section-shell mb-6 text-center">
        <p className="text-sm font-medium text-slate-500">
          Preparation content built around the hiring processes of
        </p>
        <p className="mx-auto mt-1 max-w-2xl text-xs text-slate-400">
          Company names are used for reference only. This kit is an independent
          preparation resource and is not affiliated with or endorsed by any
          company listed.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50/60 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50/60 to-transparent z-10" />

        <div className="flex w-max animate-marquee gap-10">
          {loop.map((company, i) => (
            <div
              key={`${company}-${i}`}
              className="flex h-14 min-w-[140px] items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-500 shadow-sm"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
