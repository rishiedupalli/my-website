'use client'

import Image from "next/image";
import LoadingDots from "@/components/loading-dots";
import Link from "next/link";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">
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

          <h1 className="text-center text-neutral-950 text-2xl font-semibold">Log In</h1>
          <p>(not much to do yet, this is mainly for internal use)</p>

        <form

        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);

            signIn("credentials", {
              redirect: false,
              email: e.currentTarget.email.value,
              password: e.currentTarget.password.value,
              // @ts-ignore
            }).then(({ error }) => {
              if (error) {
                setLoading(false);
                toast.error(error);
              } else {
                router.refresh();
                router.push("/account");
              }
            });
            }
          }

        >
          <div>          
            <label className="block text-xs text-neutral-600 uppercase">EMAIL ADDRESS</label>
            <input 
            id="email"
            name="email"
            type="text"
            placeholder="someone@example.com"
            autoComplete="email"
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
            <p>Sign In</p>
          )}
        </button>

        <br />

          <p className="text-center text-sm text-neutral-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-semibold text-neutral-800">
                Sign Up
              </Link>{" "}
            instead.
          </p>
        </form>
      </div>
    </div>
  );
}
