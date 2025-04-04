import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-100 to-neutral-300">
      <br />
      <h1 className="text-4xl font-extrabold">Rishi C. Edupalli</h1>
      <br />
      <div className="flex flex-wrap justify-center">
        <div className="w-1/4 md:w-1/6 px-4">
          <img src="/resources/profile.jpeg" alt="Profile Picture" className="shadow rounded-full max-w-full h-auto align-middle border-none" />
        </div>
      </div>
      <br />
      <h1 className="text-2xl px-10 text-center font-bold">Hello! I am a student interested in theoretical math, physics, computer science and classical music.</h1>
      <br />
      <p className="text-xl px-10 text-center font-semibold">In my free time, I enjoy creating free educational content which can be found <a href="/teaching" className="text-red-500 font-bold">here</a>.</p>
      <br />
      <p className="text-xl px-10 text-center font-semibold">If you are interested in my ramblings on a multitude of topics, check out my <a href="/blog" className="text-red-500 font-bold">blog</a>.</p>
      <br />
      <p className="text-xl px-10 text-center font-semibold">Check out some of my other projects <a href="/portfolio" className="text-red-500 font-bold">here</a> or <a href="/repertoire" className="text-red-500 font-bold">listen to some of my performances</a>.</p>
    </div>
  );
}
