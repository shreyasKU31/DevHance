import Image from "next/image";

export default function FeaturedPost({ post }) {
  if (!post) return null;
  return (
    <section className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto bg-card shadow-soft rounded-xl overflow-hidden mb-12">
      <div className="w-full md:w-2/5 h-64 md:h-auto relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="flex-1 p-8 flex flex-col gap-4">
        <span className="inline-block px-3 py-1 bg-blue-50 text-accent font-lexend text-xs rounded-full w-fit mb-2">
          {post.category}
        </span>
        <h2 className="font-syne font-bold text-[36px] text-primary leading-tight">
          {post.title}
        </h2>
        <p className="font-lexend text-[18px] text-secondary leading-relaxed">
          {post.excerpt}
        </p>
        <a
          href={post.href}
          className="font-lexend text-accent text-base mt-2 hover:underline"
        >
          Read Full Story &rarr;
        </a>
      </div>
    </section>
  );
}
