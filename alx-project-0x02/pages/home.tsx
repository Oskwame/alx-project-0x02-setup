import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { useState } from "react";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([
    { title: "Getting Started", content: "This is your first card on the Home page." },
    { title: "Features", content: "Add posts via the modal and see them listed here." },
  ]);

  const handleSubmit = (data: { title: string; content: string }) => {
    setPosts((prev) => [{ title: data.title, content: data.content }, ...prev]);
    setOpen(false);
  };

  return (
    <div className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black`}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-24 px-16 bg-white dark:bg-black sm:items-start">
        <Header title="Home" />
        <div className="mt-6 w-full">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">Home</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Use the button to add a new post.</p>
          <button
            className="mt-4 inline-flex items-center rounded-full bg-foreground px-5 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            onClick={() => setOpen(true)}
          >
            Add Post
          </button>
          <div className="mt-8 grid w-full grid-cols-1 gap-4">
            {posts.map((p, idx) => (
              <Card key={idx} title={p.title} content={p.content} />
            ))}
          </div>
        </div>
        <PostModal open={open} onClose={() => setOpen(false)} onSubmit={handleSubmit} />
      </main>
    </div>
  );
}