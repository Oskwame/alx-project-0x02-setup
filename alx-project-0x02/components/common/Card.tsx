import React from "react";
import type { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded-xl border border-black/[.08] p-5 shadow-sm dark:border-white/[.145]">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50">{title}</h2>
      <p className="mt-2 text-zinc-700 dark:text-zinc-400">{content}</p>
    </div>
  );
};

export default Card;