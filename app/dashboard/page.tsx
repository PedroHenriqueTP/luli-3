"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface WriterPost {
  id: string;
  title: string;
  excerpt?: string;
  published: boolean;
  createdAt: string;
}

export default function WriterDashboard() {
  const [posts, setPosts] = useState<WriterPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data.posts || []);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-white text-center mt-20">Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] to-[#1a1a1a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          Writer <span className="text-[#00FF66]">Luciana</span>
        </h1>
        <p className="text-white/60 mb-8">Seus artigos e histórias</p>

        <Link
          href="/editor"
          className="inline-block mb-8 px-6 py-3 bg-[#00FF66] text-black font-bold rounded hover:bg-[#00CC52] transition-all"
        >
          ✍️ Novo Artigo
        </Link>

        <div className="space-y-4">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div
                key={post.id}
                className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-[#00FF66]/50 transition-all"
              >
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                {post.excerpt && <p className="text-white/60 mb-4">{post.excerpt}</p>}
                <div className="flex justify-between items-center">
                  <span
                    className={`text-sm font-bold ${post.published ? "text-green-400" : "text-yellow-400"}`}
                  >
                    {post.published ? "✅ Publicado" : "⏳ Rascunho"}
                  </span>
                  <span className="text-white/40 text-sm">
                    {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-white/60">
              <p className="mb-4">Nenhum artigo publicado ainda</p>
              <Link href="/editor" className="text-[#00FF66] hover:underline">
                Criar seu primeiro artigo →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
