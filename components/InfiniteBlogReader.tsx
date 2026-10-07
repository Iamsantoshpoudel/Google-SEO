"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { BlogPost } from "@/lib/data";
import { LINK } from "@/lib/data";
import { recordSessionRead } from "@/lib/reading-session";

export default function InfiniteBlogReader({
  posts,
  initialSlug,
}: {
  posts: BlogPost[];
  initialSlug: string;
}) {
  const feedPosts = useMemo(() => {
    const startIndex = posts.findIndex((post) => post.slug === initialSlug);
    if (startIndex < 0) return [];
    return [...posts.slice(startIndex), ...posts.slice(0, startIndex)];
  }, [initialSlug, posts]);
  const [visibleCount, setVisibleCount] = useState(1);
  const sentinel = useRef<HTMLDivElement>(null);
  const reader = useRef<HTMLDivElement>(null);
  const hasMore = visibleCount < feedPosts.length;

  useEffect(() => {
    const root = reader.current;
    if (!root) return;
    const articles = root.querySelectorAll<HTMLElement>("[data-post-slug]");
    if (!("IntersectionObserver" in window)) {
      const firstSlug = articles[0]?.dataset.postSlug;
      if (firstSlug) recordSessionRead(firstSlug, posts.map((post) => post.slug));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const slug = (entry.target as HTMLElement).dataset.postSlug;
        if (slug) recordSessionRead(slug, posts.map((post) => post.slug));
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    articles.forEach((article) => observer.observe(article));
    return () => observer.disconnect();
  }, [posts, visibleCount]);

  useEffect(() => {
    const target = sentinel.current;
    if (!target || !hasMore || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisibleCount((count) => Math.min(count + 1, feedPosts.length));
      },
      { rootMargin: "700px 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [feedPosts.length, hasMore, visibleCount]);

  return (
    <div ref={reader} className="mt-6">
      {feedPosts.slice(0, visibleCount).map((post, index) => (
        <article
          key={post.slug}
          id={`article-${post.slug}`}
          aria-label={post.title}
          data-post-slug={post.slug}
          className={index === 0 ? "" : "mt-20 border-t border-line pt-12"}
        >
          {index > 0 && (
            <h2 id={`heading-${post.slug}`} className="mb-5 text-[clamp(1.8rem,5vw,3.5rem)] leading-tight text-ink">
              <a className="no-underline hover:text-hot" href={`/blog/${post.slug}`}>{post.title}</a>
            </h2>
          )}
          <p className="text-[.9rem]">
            By Santosh Poudel &middot; <time dateTime={post.date}>{post.label} {post.date.slice(0, 4)}</time>
          </p>
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={900}
            priority={index === 0}
            sizes="(max-width: 900px) 100vw, 900px"
            className="my-5 aspect-[4/3] w-full object-cover"
          />
          <div className="grid gap-5">
            {post.body.map((paragraph, paragraphIndex) => <p key={`intro-${paragraphIndex}`}>{paragraph}</p>)}
            {post.sections?.map((section) => (
              <section key={section.heading} className="grid gap-4">
                <h2 className="mt-5 text-[clamp(1.4rem,2.8vw,2rem)] text-ink">{section.heading}</h2>
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`${section.heading}-${paragraphIndex}`}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
          {post.references && (
            <section aria-label="References and further reading" className="mt-6 border-t border-line pt-5">
              <h2 className="text-[1.2rem] text-ink">References and further reading</h2>
              <ul className="mt-3 grid list-disc gap-2 pl-5">
                {post.references.map((reference) => (
                  <li key={reference.url}>
                    <a className={LINK} href={reference.url} target="_blank" rel="noopener noreferrer">{reference.label}</a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </article>
      ))}

      {hasMore ? (
        <div ref={sentinel} className="mt-10 flex justify-center py-4">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => Math.min(count + 1, feedPosts.length))}
            className="border border-line px-5 py-3 font-semibold transition-colors hover:border-hot hover:text-hot"
          >
            Load next article
          </button>
        </div>
      ) : (
        <p className="mt-12 border-t border-line pt-6">
          You&apos;ve reached the end of the articles. <a className={LINK} href="/blog">Browse all posts</a>.
        </p>
      )}
    </div>
  );
}
