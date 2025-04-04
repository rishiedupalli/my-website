'use client'

import Image from "next/image";
import LoadingDots from "@/components/loading-dots";
import Link from "next/link";
import toast from "react-hot-toast";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">
      <div className="flex flex-col space-y-4 bg-neutral-100 items-center px-4 py-8 sm:px-16 rounded-md shadow-2xl">
        <Link href="/">
            <Image
              src="/resources/logo.png"
              priority
              alt="R"
              className="h-10 w-10"
              width={20}
              height={20}
            />
          </Link>

          <h1 className="text-center text-neutral-950 text-2xl font-semibold">Register</h1>
          <p>(not much to do yet, this is mainly for internal use)</p>

        <form
        
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          
          fetch('/api/auth/register', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: e.currentTarget.email.value,
              username: e.currentTarget.username.value,
              password: e.currentTarget.password.value,
              subscribed: e.currentTarget.subscribe.checked
            }),
          }).then(async (res) => {
            setLoading(false);
            if (res.status === 200) {
              toast.success("Account created! Redirecting to login...");
              setTimeout(() => {
                router.push("/login");
              }, 2000);
            } else {
              const { error } = await res.json();
              toast.error(error);
            }
          });
        }}

        >
          <div>          
            <label className="block text-xs text-neutral-600 uppercase">EMAIL ADDRESS</label>
            <input 
            id="email"
            name="email"
            type="email"
            placeholder="someone@example.com"
            autoComplete="email"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-neutral-300 px-3 py-2 placeholder-neutral-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >
              
            </input>
          </div>

          <div>
            <label className="block text-xs text-neutral-600 uppercase">USERNAME</label>
            <input
            id="username"
            name="username"
            type="text"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-neutral-300 px-3 py-2 placeholder-neutral-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >
            </input>
          </div>

          <div> 
            <label className="block text-xs text-neutral-600 uppercase">PASSWORD</label>
            <input
            id="password"
            name="password"
            type="password"
            placeholder="all passwords hashed, can not reset/recover (yet)"
            required
            className="mt-1 block w-full appearance-none rounded-md border border-neutral-300 px-3 py-2 placeholder-neutral-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
            >

            </input>
          </div>

          <br />

          <div className="flex">
            <div className="flex items-center h-5">
                <input id="subscribe" type="checkbox" value="true" className="w-4 h-4 text-neutral-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div className="ml-2 text-sm">
                <label htmlFor="helper-checkbox" className="font-medium text-neutral-850">Subscribe to email notifications</label>
                <p id="helper-checkbox-text" className="text-xs font-normal text-neutral-850">(this is completely optional and can be changed at any time)</p>
            </div>
          </div>

        <br />

        <button
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed border-neutral-200 bg-neutral-100"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? (
            <LoadingDots color="#808080" />
          ) : (
            <p>Sign Up</p>
          )}
        </button>

        <br />

          <p className="text-center text-sm text-neutral-600">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-neutral-800">
                Sign in
              </Link>{" "}
            instead.
          </p>
        </form>
      </div>
    </div>
  );
}
