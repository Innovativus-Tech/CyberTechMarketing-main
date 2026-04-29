export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f8f6f3] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1400px] animate-pulse">
        <div className="h-8 w-40 rounded-full bg-red-100" />
        <div className="mt-6 h-16 max-w-4xl rounded-3xl bg-slate-200" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.6fr_0.9fr]">
          <div className="h-[540px] rounded-[2rem] bg-white shadow-sm" />
          <div className="space-y-6">
            <div className="h-40 rounded-[1.75rem] bg-white shadow-sm" />
            <div className="h-72 rounded-[1.75rem] bg-white shadow-sm" />
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="h-[360px] rounded-[1.75rem] bg-white shadow-sm" />
          <div className="h-[360px] rounded-[1.75rem] bg-white shadow-sm" />
        </div>
      </div>
    </main>
  );
}
