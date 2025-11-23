import React from "react";
import type { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="rounded-xl border border-black/[.08] p-5 shadow-sm dark:border-white/[.145]">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-black dark:text-zinc-50">{title}</h2>
        <span className="text-sm text-zinc-600 dark:text-zinc-400">User #{userId}</span>
      </div>
      <p className="mt-2 text-zinc-700 dark:text-zinc-400">{content}</p>
    </div>
  );
};

export default PostCard;