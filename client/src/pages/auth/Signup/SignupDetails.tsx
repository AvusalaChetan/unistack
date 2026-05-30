
const SignupDetails = () => {
  return (
    <div className="hidden lg:flex w-full lg:w-1/2 flex-col justify-center bg-(--card) p-8 xl:p-12 shadow-(--shadow-md) border border-[var(--border-light)]">
      <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--accent-primary)]">
        Onboarding Protocol
      </p>
      <h1 className="text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
        Forge Your <br />
        <span className="text-[var(--accent-primary)]">Academic Identity</span>
      </h1>

      <p className="text-[var(--text-secondary)] text-base xl:text-lg mb-12 max-w-md">
        Join the integrated ecosystem for higher education. Precise data management for the
        modern student and educator.
      </p>

      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <span className="w-3 h-3 mt-1.5 bg-[var(--accent-primary)] shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.3)]"></span>
          <div>
            <h5 className="text-sm font-bold mb-1 tracking-wider uppercase text-[var(--text-primary)]">
              Verified Institutes
            </h5>
            <p className="text-sm font-medium text-[var(--text-tertiary)] max-w-sm">
              Connect directly with your organization using secure access codes.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <span className="w-3 h-3 mt-1.5 bg-[var(--accent-primary)] shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.3)]"></span>
          <div>
            <h5 className="text-sm font-bold mb-1 tracking-wider uppercase text-[var(--text-primary)]">
              Precision Metrics
            </h5>
            <p className="text-sm font-medium text-[var(--text-tertiary)] max-w-sm">
              Access real-time attendance and academic performance analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupDetails;