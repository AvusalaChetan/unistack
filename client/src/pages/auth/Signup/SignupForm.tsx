import PillLabel from '@/components/common/PillLabel';

import { useFormSubmit } from '@/hooks/FormSubmit';
import {
  GraduationCap, 
  UserRound
} from "lucide-react";
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// {name, email, role, password, instituteCode}

const SignupForm = ({ register, handleSubmit }) => {
  const [role, setRole] = useState<string | null>(null);
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const api: string = `${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`;
  const { onSubmit: handleApiSubmit, IsLoading } = useFormSubmit({ api });

  return (
    <div className="w-full h-full">  

         <form
        className=""
        onSubmit={handleSubmit((data) => {
          handleApiSubmit({ role, ...data });
        })}
      >
        <div className="flex gap-4 justify-center mb-10">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`w-1/2 md:w-1/3 flex justify-center items-center py-3 rounded-sm font-bold tracking-wider uppercase text-xs transition-all border ${
              role === 'student'
                ? 'bg-(--accent-primary)/10 border-(--accent-primary) text-(--accent-primary)'
                : 'bg-transparent border-(--border-color) text-(--text-secondary) hover:border-(--accent-primary)/50'
            }`}
          >
            <span className="mr-2 text-lg">
              <GraduationCap /> {/* student */}
            </span>
            Student
          </button>
          <button
            type="button"
            onClick={() => setRole('teacher')}
            className={`w-1/2 md:w-1/3 flex justify-center items-center py-3 rounded-sm font-bold tracking-wider uppercase text-xs transition-all border ${
              role === 'teacher'
                ? 'bg-(--accent-primary)/10 border-(--accent-primary) text-(--accent-primary)'
                : 'bg-transparent border-(--border-color) text-(--text-secondary) hover:border-(--accent-primary)/50'
            }`}
          >
            <span className="mr-2 text-lg">
              <UserRound />{/* teacher  */}
            </span>
            Teacher
          </button>
        </div>

        <div className="flex flex-col w-full mb-10">
          <PillLabel text="01. Identity Core" />
          <div className="flex flex-col md:flex-row gap-6 w-full mt-6">
            <div className="flex-1 flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-[11px] font-bold uppercase tracking-wider text-(--text-secondary)"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="ramash"
                className="w-full bg-[#1c1c1c] border border-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--accent-primary)] transition-colors rounded-sm"
                {...register('name', { required: true })}
              />
            </div>
            <div className="flex-1 flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-[11px] font-bold uppercase tracking-wider text-(--text-secondary)"
              >
                your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full bg-[#1c1c1c] border border-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--accent-primary)] transition-colors rounded-sm"
                {...register('email', { required: true })}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-10">
          <PillLabel text="02. Institutional Binding" />
          <div className="flex flex-col md:flex-row gap-6 w-full mt-6">
            <div className="flex-1 flex flex-col gap-3">
              <label
                htmlFor="instituteCode"
                className="text-[11px] font-bold uppercase tracking-wider text-(--text-secondary)"
              >
                Institute Code
              </label>
              <div className="flex relative">
                <input
                  type="text"
                  id="instituteCode"
                  placeholder="Enter Institute Code"
                  className="w-full bg-[#1c1c1c] border border-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--accent-primary)] transition-colors rounded-l-sm"
                  {...register('instituteCode')}
                />
                <button
                  type="button"
                  className="bg-[#2a2a2a] hover:bg-[#333333] transition-colors px-6 font-bold uppercase tracking-wider text-[11px] text-[var(--accent-secondary)] rounded-r-sm border border-transparent"
                >
                  Fetch
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full mb-10">
          <PillLabel text="03. Access Security" />
          <div className="flex flex-col md:flex-row gap-6 w-full mt-6">
            <div className="flex-1 flex flex-col gap-3">
              <label
                htmlFor="password"
                className="text-[11px] font-bold uppercase tracking-wider text-(--text-secondary)"
              >
                Password
              </label>
              <div className="flex relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  autoComplete=""
                  placeholder="Enter your password"
                  className="w-full bg-[#1c1c1c] border border-transparent px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[var(--accent-primary)] transition-colors rounded-l-sm"
                  {...register('password', { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setshowPassword(!showPassword)}
                  className="bg-[#2a2a2a] hover:bg-[#333333] transition-colors px-5 flex items-center justify-center text-[var(--text-secondary)] hover:text-white rounded-r-sm border border-transparent"
                >
                  {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>

{/* here after creating acc first go to request Model  */}
        <button
          type="submit"
          className="
            w-full py-[18px] px-8
            bg-gradient-to-r from-[#e08800] via-[#f5a623] to-[#e69520]
            text-[#1a1208] text-[13px] font-semibold uppercase tracking-[0.18em]
            rounded-[4px] border-none cursor-pointer
            transition-all duration-200
            hover:brightness-110 hover:-translate-y-px
            active:brightness-95 active:translate-y-0
          "
        >
          {IsLoading?'loading...':'create Account'}
        </button>
      </form>

    </div>
  );
};

export default SignupForm;
