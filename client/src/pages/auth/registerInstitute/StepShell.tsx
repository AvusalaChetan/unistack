import type { ReactNode } from 'react';

type StepShellProps = {
  step: string;
  title: string;
  description: string;
  children: ReactNode;
};

export const StepShell = ({ step, title, description, children }: StepShellProps) => {
  return (
    <section className="rounded-xl border border-(--border-light) bg-(--bg-secondary)/70 p-4 md:p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[color:var(--accent-primary)]">
            {step}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-[color:var(--text-primary)]">{title}</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[color:var(--muted-foreground)]">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  );
};
