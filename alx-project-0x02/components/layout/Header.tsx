import React from "react";
import Link from "next/link";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title = "Welcome" }) => {
  return (
    <header className="w-full py-4 px-6 border-b border-black/[.08] dark:border-white/[.145]">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-tight text-black dark:text-zinc-50">{title}</h1>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link className="text-black hover:underline dark:text-zinc-50" href="/home">Home</Link>
          <Link className="text-black hover:underline dark:text-zinc-50" href="/about">About</Link>
          <Link className="text-black hover:underline dark:text-zinc-50" href="/posts">Posts</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;