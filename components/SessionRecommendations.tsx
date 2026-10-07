"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { BlogPost } from "@/lib/data";
import {
  getSessionReadSlugs,
  subscribeToReadingUpdates,
} from "@/lib/reading-session";

export default function SessionRecommendations({ posts }: { posts: BlogPost[] }) {
  const [readSlugs, setReadSlugs] = useState<string[]>([]);
  const validSlugs = useMemo(() => posts.map((post) => post.slug), [posts]);

  useEffect(() => {
    const refresh = () => {
      const history = getSessionReadSlugs(validSlugs);
      setReadSlugs(history ?? []);
    };
    refresh();
    return subscribeToReadingUpdates(refresh);
  }, [validSlugs]);

  const recommendations = useMemo(() => {
    const read = new Set(readSlugs);
    const unread = posts.filter((post) => !read.has(post.slug));
    if (read.size === 0) return unread.slice(0, 3);

    const interests = new Map<string, number>();
    for (const post of posts) {
      if (!read.has(post.slug)) continue;
      for (const topic of post.topics) interests.set(topic, (interests.get(topic) ?? 0) + 1);
    }

    return unread
      .map((post, index) => ({
        post,
        index,
        score: post.topics.reduce((total, topic) => total + (interests.get(topic) ?? 0), 0),
      }))
      .sort((a, b) => b.score - a.score || a.index - b.index)
      .slice(0, 3)
      .map(({ post }) => post);
  }, [posts, readSlugs]);

  return (
    <section aria-labelledby="recommended-heading" className="mb-10 border-y border-line py-7">
      <div className="mb-5">
        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-hot">Explore</p>
          <h2 id="recommended-heading" className="text-[clamp(1.5rem,3vw,2rem)]">Recommended for you</h2>
        </div>
      </div>
      <ul className="grid gap-4 sm:grid-cols-3">
        {recommendations.map((post) => (
          <li key={post.slug} className="border border-line">
            <a href={`/blog/${post.slug}`} className="block no-underline">
              <Image
                src={post.image}
                alt={post.imageAlt}
                width={600}
                height={360}
                sizes="(max-width: 640px) 100vw, 30vw"
                className="aspect-[5/3] w-full object-cover"
              />
              <span className="block p-3 font-semibold leading-snug text-ink hover:text-hot">{post.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
