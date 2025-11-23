import React from "react";
import type { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  const addr = [address.street, address.suite, address.city, address.zipcode]
    .filter(Boolean)
    .join(", ");
  return (
    <div className="rounded-xl border border-black/[.08] p-5 shadow-sm dark:border-white/[.145]">
      <h2 className="text-xl font-semibold text-black dark:text-zinc-50">{name}</h2>
      <p className="mt-1 text-zinc-700 dark:text-zinc-400">{email}</p>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">{addr}</p>
    </div>
  );
};

export default UserCard;