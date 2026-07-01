"use client";

import React from 'react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { Camera, Eye } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const SignupPage = () => {

  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log ({name, image, email, password})

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    })
    if (error) {
      toast.error(error.message || "An error occurred during signup");
    } else {
      toast.success("Account created successfully!");
      router.push('/login');
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error(err.message || "Google sign-in failed!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#f8f9fa] to-[#e6ecec] p-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-md sm:p-10">

        {/* Heading*/}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-widest text-[#007d7d]">SUNCART</h1>
          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-[#007d7d] to-[#e6be8a]"></div>
          <h2 className="mt-4 text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">
            Create New Account
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={onSubmit}>
          {/* Details */}
          <div>
            <label className="mb-1.5 block text-xs font-bold tracking-wider text-[#8b7355] uppercase">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full rounded-xl bg-[#f4f5f6] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#007d7d]/20"
            />
          </div>


          <div>
            <label className="mb-1.5 block text-xs font-bold tracking-wider text-[#8b7355] uppercase">
              Photo URL
            </label>
            <div className="relative">
              <input
                type="url"
                name="image"
                placeholder="https://example.com/photo.jpg"
                className="w-full rounded-xl bg-[#f4f5f6] py-3.5 pl-4 pr-10 text-sm text-gray-800 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#007d7d]/20"
              />
              <div className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                <Camera size={18} />
              </div>
            </div>
          </div>


          <div>
            <label className="mb-1.5 block text-xs font-bold tracking-wider text-[#8b7355] uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full rounded-xl bg-[#f4f5f6] px-4 py-3.5 text-sm text-gray-800 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#007d7d]/20"
            />
          </div>


          <div>
            <label className="mb-1.5 block text-xs font-bold tracking-wider text-[#8b7355] uppercase">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full rounded-xl bg-[#f4f5f6] py-3.5 pl-4 pr-10 text-sm text-gray-800 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-[#007d7d]/20"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-[#007d7d] transition-colors"
              >
                <Eye size={18} />
              </button>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-[#007d7d] py-3.5 text-sm font-bold tracking-widest text-white shadow-md transition-all hover:bg-[#006868] hover:shadow-lg active:scale-[0.98] uppercase"
          >
            Sign Up
          </button>
        </form>

        {/* 2nd part */}
        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-200"></div>
          <span className="px-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Or register with
          </span>
          <div className="flex-1 border-t border-gray-200"></div>
        </div>

        {/* Google */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#fce4c4] py-3.5 text-sm font-bold tracking-widest text-gray-900 transition-all hover:bg-[#fbd6a6] active:scale-[0.98] uppercase"
        >
          <FcGoogle className="text-xl" />
          Google
        </button>

        {/* Have account? */}
        <p className="mt-8 text-center text-xs font-medium tracking-wider text-gray-500 uppercase">
          Already have an account?{' '}
          <Link href="/login" className="ml-1 font-bold text-gray-900 border-b-2 border-gray-900 hover:text-[#007d7d] hover:border-[#007d7d] transition-colors pb-0.5">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
