import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { Inputs } from '../RegisterInstitute';
import { StepShell } from './StepShell';
import Errors from '../../../components/common/Errors';

interface StepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const FoundryAdministratorStep = ({ register, errors }: StepProps) => {
  return (
    <StepShell
      step="Step 02"
      title="Foundry administrator"
      description="Set up the primary administrator who will manage the institute after registration."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 md:col-span-1">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
            Admin full name
          </span>
          <input
            type="text"
            placeholder="John Doe"
            className="h-11 w-full rounded-none border border-[color:var(--border)] bg-[color:var(--bg-primary)] px-4 text-sm text-[color:var(--text-primary)] outline-none transition-colors placeholder:text-[color:var(--text-tertiary)] focus:border-[color:var(--accent-primary)]"
            {...register('name', { required: true })}
          />
          {errors.name && <Errors messages={['Admin name is required']} />}
        </label>

        <label className="space-y-2 md:col-span-1">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-(--muted-foreground)">
            Admin email
          </span>
          <input
            type="email"
            placeholder="admin@institute.edu"
            className="h-11 w-full rounded-none border border-(--border) bg-[color:var(--bg-primary)] px-4 text-sm text-[color:var(--text-primary)] outline-none transition-colors placeholder:text-[color:var(--text-tertiary)] focus:border-[color:var(--accent-primary)]"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address',
              },
            })}
          />
          {errors.email && <Errors messages={[errors.email.message || 'Invalid email']} />}
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
            Admin password
          </span>
          <input
            type="password"
            placeholder="Create a secure password"
            className="h-11 w-full rounded-none border border-[color:var(--border)] bg-[color:var(--bg-primary)] px-4 text-sm text-[color:var(--text-primary)] outline-none transition-colors placeholder:text-[color:var(--text-tertiary)] focus:border-[color:var(--accent-primary)]"
            autoComplete="new-password"
            {...register('password', { required: true })}
          />
          {errors.password && <Errors messages={['Password is required']} />}
        </label>
      </div>
    </StepShell>
  );
};
