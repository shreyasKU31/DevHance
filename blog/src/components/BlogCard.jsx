import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <a
      href={post.href}
      className="group block bg-card shadow-soft rounded-xl overflow-hidden transition-transform hover:-translate-y-1 focus:outline-accent"
    >
      <div className="w-full h-48 relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="font-syne font-bold text-[20px] text-primary group-hover:text-accent mb-2 transition-colors">
          {post.title}
        </h3>
        <div className="font-lexend text-[14px] text-secondary mb-1">
          {post.date}
        </div>
        <p className="font-lexend text-[16px] text-secondary line-clamp-2">
          {post.excerpt}
        </p>
      </div>
    </a>
  );
}
