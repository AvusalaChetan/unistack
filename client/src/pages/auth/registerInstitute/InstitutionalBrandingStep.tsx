import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { Inputs } from '../RegisterInstitute';
import { StepShell } from './StepShell';
import Errors from '@/components/common/Errors';

interface StepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const InstitutionalBrandingStep = ({ register, errors }: StepProps) => {
  return (
    <StepShell
      step="Step 03"
      title="Institutional branding"
      description="Add the institute logo so the workspace can start with the right visual identity from day one."
    >
      <label className="flex min-h-48 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-[color:var(--border)] bg-[color:var(--bg-primary)] px-6 py-10 text-center transition-colors hover:border-[color:var(--accent-primary)]">
        <span className="text-3xl text-[color:var(--accent-primary)]">⬆</span>
        <span className="text-sm font-medium text-[color:var(--text-primary)]">
          Drag and drop institute logo
        </span>
        <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--muted-foreground)]">
          Max 2MB · WebP, PNG, JPG
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--accent-primary)]">
          Browse files
        </span>
        <input
          type="file"
          accept="image/png,image/jpeg,image/webp"
          className="hidden"
          {...register('institute_logo', { required: true })}
        />
      </label>
      {errors.institute_logo && <Errors messages={['institute logo is required']} />}
    </StepShell>
  );
};
