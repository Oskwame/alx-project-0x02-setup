import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function AboutPage() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black`}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-24 px-16 bg-white dark:bg-black sm:items-start">
        <Header title="About" />
        <div className="mt-6 w-full">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">About</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">This is the About page.</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button size="small" shape="rounded-sm">Small sm</Button>
            <Button size="medium" shape="rounded-md">Medium md</Button>
            <Button size="large" shape="rounded-full">Large full</Button>
          </div>
        </div>
      </main>
    </div>
  );
}