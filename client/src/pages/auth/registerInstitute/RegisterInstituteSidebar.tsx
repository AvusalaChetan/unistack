
export const RegisterInstituteSidebar = () => {
  return (
    <aside className="grid gap-6 xl:sticky xl:top-6 xl:self-start">
      <section className="overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--card)] p-5 shadow-[var(--shadow-sm)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[color:var(--muted-foreground)]">
              Verification status
            </p>
            <p className="mt-2 text-lg font-semibold text-[color:var(--text-primary)]">
              Global reach
            </p>
          </div>
          <div className="text-3xl font-semibold text-[color:var(--accent-primary)]">142+x</div>
        </div>

        <div className="mt-6 grid grid-cols-5 items-end gap-3">
          <div className="h-8 bg-[color:var(--border-light)]/90" />
          <div className="h-14 bg-[color:var(--border-light)]/90" />
          <div className="h-24 bg-[color:var(--accent-primary)]/90" />
          <div className="h-10 bg-[color:var(--border-light)]/90" />
          <div className="h-28 bg-[color:var(--secondary)]/85" />
        </div>

        <p className="mt-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
          Keep this section for trust signals, completion stats, or support links as the flow grows.
        </p>
      </section>

      <section className="overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[image:linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5 shadow-[var(--shadow-sm)]">
        <div className="mb-5 h-44 rounded-xl border border-[color:var(--border-light)] bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_65%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))]" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-primary)]">
          Looking ahead
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-[color:var(--text-primary)]">
          Precision management
        </h3>
        <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
          A compact preview card for future product highlights, onboarding tips, or a live status
          summary.
        </p>
      </section>
    </aside>
  );
};
