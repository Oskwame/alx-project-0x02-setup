import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { useEffect, useState } from "react";
import type { PostProps } from "@/interfaces";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data: { userId: number; id: number; title: string; body: string }[] = await res.json();
        setPosts(
          data.map((p) => ({ title: p.title, content: p.body, userId: p.userId })),
        );
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-start justify-center bg-zinc-50 font-sans dark:bg-black`}>
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-24 px-16 bg-white dark:bg-black sm:items-start">
        <Header title="Posts" />
        <div className="mt-6 w-full">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">Posts</h1>
          {loading ? (
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Loading posts...</p>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4">
              {posts.map((p, idx) => (
                <PostCard key={idx} title={p.title} content={p.content} userId={p.userId} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}