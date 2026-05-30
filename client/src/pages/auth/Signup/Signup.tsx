import Footer from '@/components/common/Footer';
import { useForm } from 'react-hook-form';
import SignupForm from './SignupForm';
import { lazy,Suspense } from 'react';

const SignupDetails = lazy(() => import('./SignupDetails'))

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="min-h-screen bg-[var(--background)] flex flex-col justify-center items-center p-4 sm:p-8 lg:p-12">
        <div className="w-full max-w-md sm:max-w-xl lg:max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
         <Suspense fallback={'loading...'}>
          <SignupDetails />

         </Suspense>
          <div className="w-full lg:w-1/2 bg-(--card) shadow-(--shadow-md)  p-6 sm:p-10 border border-[var(--border-light)]">
            <SignupForm register={register} handleSubmit={handleSubmit} errors={errors} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
