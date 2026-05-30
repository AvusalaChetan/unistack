import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { Inputs } from './RegisterInstitute';
import { StepShell } from '../../../components/common/StepShell';
import Errors from '@/components/common/Errors';
import { useState } from 'react';

interface StepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const InstitutionalBrandingStep = ({ register, errors }: StepProps) => {
  const [instituteLogo, setInstituteLogo] = useState<File | null>(null);

  console.log(instituteLogo);

  return (
    <StepShell
      step="Step 03"
      title="Institutional branding"
      description="Add the institute logo so the workspace can start with the right visual identity from day one."
    >
      {!instituteLogo ? (
        <label
          className={`flex min-h-48 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed bg-(--bg-primary) px-6 py-10 text-center transition-colors hover:border-(--accent-primary) ${instituteLogo ? 'border-green-800' : 'border-(--border)'}`}
        >
          <span className="text-3xl text-(--accent-primary)">⬆</span>
          <span className="text-sm font-medium text-(--text-primary)">
            Drag and drop institute logo
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-(--muted-foreground)">
            Max 2MB · WebP, PNG, JPG
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-(--accent-primary)">
            Browse files
          </span>
          <input
            type="file"
            accept="image/png,image/jpeg,image/webp"
            className="hidden"
            {...register('institute_logo', {
              required: true,
              onChange: (e) => {
                console.log(e.target.files);
                const file = e.target.files?.[0];
                if (file) setInstituteLogo(file);
              },
            })}
          />
          {instituteLogo && (
            <span className="text-green-800 font-semibold text-sm">logo received successfully</span>
          )}
        </label>
      ) : (
        <div className="">
          <p className="text-sm font-medium text-(--text-primar)">Preview</p>
          <img src={URL.createObjectURL(instituteLogo)} alt="" className="max-w-48" />
        </div>
      )}
      {errors.institute_logo && !instituteLogo && (
        <Errors messages={['institute logo is required']} />
      )}
    </StepShell>
  );
};
