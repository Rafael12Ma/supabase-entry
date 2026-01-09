"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditorPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  const supabase = createClient();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSave = async () => {};

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-8 ">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              {postId ? "Edit post" : "New post"}
            </h1>
            <div className="flex gap-2">
              {mounted && (
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="border-zinc-300 dark:border-zinc-700"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              )}
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-zinc-300 dark:border-zinc-700"
                >
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
