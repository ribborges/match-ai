'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

import AnimatedBackground from "@/components/AnimatedBackground";
import AnimatedButton from "@/components/AnimatedButton";
import Footer from "@/components/Footer";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatedBackground />
      <header
        className="
          fixed top-0 left-0 right-0 z-50
          flex items-center justify-center gap-4
          p-8
          bg-gradient-to-b from-black/50 to-black/0 dark:from-white/10 dark:to-white/0
        "
      >
        <Image
          src="/logoLight.svg"
          alt="Match.AI Logo"
          width={48}
          height={48}
          className="dark:hidden"
        />
        <Image
          src="/logoDark.svg"
          alt="Match.AI Logo"
          width={48}
          height={48}
          className="hidden dark:block"
        />
        <h1 className="text-4xl font-black">match.ai</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center gap-6 p-4 min-h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">Encontre pessoas como você</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">Matchmaking feito por inteligência artifical</h2>
        <AnimatedButton onClick={() => router.push("match")}>Comece agora</AnimatedButton>
      </main>
      <Footer />
    </div>
  );
}