import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { Inputs } from '../RegisterInstitute';
import { StepShell } from './StepShell';
import Errors from '@/components/common/Errors';

interface StepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const InstitutionalIdentityStep = ({ register, errors }: StepProps) => {
  return (
    <StepShell
      step="Step 01"
      title="Institutional identity"
      description="Capture the core identity for the institute so the rest of the setup can inherit the correct name, type, and location."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 md:col-span-1">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
            Institute name
          </span>
          <input
            type="text"
            placeholder="e.g. Stanford University"
            className="h-11 w-full rounded-none border border-(--border) bg-[color:var(--bg-primary)] px-4 text-sm text-[color:var(--text-primary)] outline-none transition-colors placeholder:text-[color:var(--text-tertiary)] focus:border-[color:var(--accent-primary)]"
            {...register('instituteName', { required: true })}
          />
          {errors.instituteName && <Errors messages={['Institute name is required']} />}
        </label>

        <label className="space-y-2 md:col-span-1">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
            Institute type
          </span>
          <select
            defaultValue="university"
            className="h-11 w-full rounded-none border border-[color:var(--border)] bg-[color:var(--bg-primary)] px-4 text-sm text-[color:var(--text-primary)] outline-none transition-colors focus:border-[color:var(--accent-primary)]"
            {...register('instituteType', { required: true })}
          >
            <option value="school">School</option>
            <option value="college">College</option>
            <option value="university">University</option>
            <option value="institute">Institute</option>
          </select>
          {errors.instituteType && <Errors messages={['Institute type is required']} />}
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
            Headquarters location
          </span>
          <input
            type="text"
            placeholder="City, Country"
            className="h-11 w-full rounded-none border border-(--border) bg-[color:var(--bg-primary)] px-4 text-sm text-[color:var(--text-primary)] outline-none transition-colors placeholder:text-[color:var(--text-tertiary)] focus:border-[color:var(--accent-primary)]"
            {...register('location', { required: true })}
          />
          {errors.location && <Errors messages={['Location is required']} />}
        </label>
      </div>
    </StepShell>
  );
};
