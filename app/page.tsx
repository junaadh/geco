import Image from "next/image";
import Link from "next/link";
import heroImg from "./assets/hero.png";

export default function Home() {
  return (
    <div className="relative h-full">
      <div className="flex flex-col items-center justify-center text-center h-full">
        <h1 className="font-title text-7xl lg:text-9xl">Welcome to Geco</h1>
        <p className="text-lg lg:text-2xl pb-12">
          We strive to achieve environmental sustainability
        </p>
        <button className="font-title text-2xl px-8 py-4 rounded-full bg-white border hover:border-transparent hover:shadow-lg transition-all duration-300">
          <Link href={"/shop"}>Get Started</Link>
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-30 w-[80dvw] lg:w-auto lg:h-[calc(80dvh)] aspect-square">
        <Image src={heroImg} alt="Hero image" fill={true} />
      </div>
    </div>
  );
}
