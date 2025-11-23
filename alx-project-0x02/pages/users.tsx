import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { useEffect, useState } from "react";
import type { UserProps } from "@/interfaces";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data: {
          id: number;
          name: string;
          email: string;
          address: { street: string; suite?: string; city: string; zipcode?: string };
        }[] = await res.json();
        setUsers(
          data.map((u) => ({ name: u.name, email: u.email, address: u.address })),
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
        <Header title="Users" />
        <div className="mt-6 w-full">
          <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">Users</h1>
          {loading ? (
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Loading users...</p>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4">
              {users.map((u, idx) => (
                <UserCard key={idx} name={u.name} email={u.email} address={u.address} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}