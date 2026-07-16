export default function Loading() {
  return (
    <div className="min-h-screen bg-white px-6 pt-32">
      <div className="section-shell animate-pulse space-y-6">
        <div className="mx-auto h-4 w-32 rounded-full bg-slate-200" />
        <div className="mx-auto h-10 w-2/3 rounded-full bg-slate-200" />
        <div className="mx-auto h-4 w-1/2 rounded-full bg-slate-200" />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 rounded-2xl bg-slate-100" />
          ))}
        </div>
      </div>
    </div>
  );
}
