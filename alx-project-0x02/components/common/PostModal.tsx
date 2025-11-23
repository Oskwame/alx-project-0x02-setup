import React, { useState } from "react";

type PostModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
};

const PostModal: React.FC<PostModalProps> = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-900">
        <h3 className="text-lg font-semibold text-black dark:text-zinc-50">Add New Post</h3>
        <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black dark:text-zinc-200">Title</label>
            <input
              className="w-full rounded-md border border-black/[.08] px-3 py-2 text-black outline-none focus:ring-2 focus:ring-foreground dark:border-white/[.145] dark:bg-zinc-800 dark:text-zinc-50"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-black dark:text-zinc-200">Content</label>
            <textarea
              className="w-full rounded-md border border-black/[.08] px-3 py-2 text-black outline-none focus:ring-2 focus:ring-foreground dark:border-white/[.145] dark:bg-zinc-800 dark:text-zinc-50"
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter content"
            />
          </div>
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="rounded-full border border-black/[.08] px-4 py-2 text-black transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-[#1a1a1a]"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-foreground px-5 py-2 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;