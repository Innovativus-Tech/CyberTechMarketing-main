export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f8f6f3] animate-pulse">
      <div className="h-[420px] bg-slate-900" />
      <div className="mx-auto -mt-12 grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.65fr] lg:px-8">
        <div className="h-[420px] rounded-[2rem] bg-white shadow-sm" />
        <div className="space-y-6">
          <div className="h-60 rounded-[1.75rem] bg-white shadow-sm" />
          <div className="h-72 rounded-[1.75rem] bg-white shadow-sm" />
        </div>
      </div>
    </main>
  );
}
