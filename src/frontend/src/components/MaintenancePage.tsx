export default function MaintenancePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <span className="text-5xl" aria-hidden="true">
            🔒
          </span>
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-3">
          Site Unavailable
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          This site is temporarily offline. Please check back later.
        </p>
      </div>
    </main>
  );
}
