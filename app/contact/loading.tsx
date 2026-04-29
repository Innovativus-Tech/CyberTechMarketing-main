export default function Loading() {
  return (
    <main className="min-h-screen bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="mx-auto h-8 w-48 rounded-full bg-red-100" />
        <div className="mx-auto mt-6 h-16 max-w-3xl rounded-3xl bg-slate-200" />
        <div className="mx-auto mt-12 grid gap-6 lg:grid-cols-3">
          <div className="h-72 rounded-[1.75rem] bg-slate-100" />
          <div className="h-72 rounded-[1.75rem] bg-slate-100" />
          <div className="h-72 rounded-[1.75rem] bg-slate-100" />
        </div>
      </div>
    </main>
  );
}
