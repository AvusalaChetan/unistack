import { FoundryAdministratorStep } from './registerInstitute/FoundryAdministratorStep';
import { InstitutionalBrandingStep } from './registerInstitute/InstitutionalBrandingStep';
import { InstitutionalIdentityStep } from './registerInstitute/InstitutionalIdentityStep';
import { RegisterInstituteSidebar } from './registerInstitute/RegisterInstituteSidebar';
import Errors from '@/components/common/Errors';
import { useForm, type SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

export type Inputs = {
  instituteName: string;
  instituteType: 'school' | 'college' | 'university' | 'institute';
  location: string;
  name: string;
  email: string;
  password: string;
  institute_logo: FileList;
};

const RegisterInstitute = () => {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      setServerMessage(null);
      setIsLoading(true);

      const formData = new FormData();
      formData.append('instituteName', data.instituteName);
      formData.append('instituteType', data.instituteType);
      formData.append('location', data.location);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('institute_logo', data.institute_logo[0]);

      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/institute/register-institute`,
        formData
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        setServerMessage(error.response?.data?.message ?? 'Unable to register institute.');
        return;
      }

      setServerMessage('Unable to register institute.');
    }
  };

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-6 px-4 py-6 md:px-6 lg:px-8">
      <header
        className="rounded-2xl border border-(--border-light) p-6 md:p-8"
        style={{
          background:
            'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 40%, rgba(245,158,11,0.04) 100%)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-(--accent-primary)">
          Foundry Onboarding
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          Register your <span className="text-(--accent-primary)">institute</span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-(--muted-foreground) md:text-base">
          Establish your digital campus within the UniStack ecosystem. The flow is split into
          focused steps so each part of the setup is easier to scan, validate, and extend later.
        </p>
      </header>

      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 rounded-2xl border border-(--border-light) bg-(--card) p-4 shadow-(--shadow-sm) md:p-6"
        >
          {serverMessage ? <Errors messages={[serverMessage]} /> : null}

          <InstitutionalIdentityStep register={register} errors={errors} />
          <FoundryAdministratorStep register={register} errors={errors} />
          <InstitutionalBrandingStep register={register} errors={errors} />

          <div className="flex flex-col gap-3 border-t border-(--border-light) pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-widest text-(--muted-foreground)">
              Already have a setup? Continue from the admin portal.
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex h-11 items-center justify-center rounded-none bg-(image:--btn-gradient) px-6 text-sm font-semibold uppercase tracking-[0.18em] text-(--primary-foreground) transition-transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  Creating...
                </>
              ) : (
                'create Institute'
              )}
            </button>
          </div>
        </form>

        <RegisterInstituteSidebar />
      </section>
    </div>
  );
};

export default RegisterInstitute;
