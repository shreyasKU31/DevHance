import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  if (!posts?.length) return null;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {posts.map((post) => (
        <BlogCard key={post.href} post={post} />
      ))}
    </section>
  );
}
