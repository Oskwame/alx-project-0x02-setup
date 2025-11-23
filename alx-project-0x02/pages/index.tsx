import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-24 px-16 bg-white dark:bg-black sm:items-start">
        <Header title="Welcome to My App" />
        <div className="mt-8 flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome! Your Next.js application is up and running on port 3000.
          </p>
        </div>
      </main>
    </div>
  );
}
