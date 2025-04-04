'use client'

import SignOut from "@/components/sign-out";
import { useSession } from 'next-auth/react'

export default function Home() {

  const { data: session } = useSession()

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">

        <div>{session?.user?.username}</div>
        <div>{session?.user?.email}</div>
        <div>{session?.user?.role}</div>

        <br />

        {
          session?.user?.role === 'WEBMASTER' ? <a href='/controlpanel'><button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">Control Panel</button></a> : session?.user?.role === 'ADMIN' ? <a href='/adminpanal'><button className="bg-gray-300 ml-2 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">Admin Dashboard</button></a> : <div />
        }

        <br />

        <SignOut />
    </div>
  );
}
