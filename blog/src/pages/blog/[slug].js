import { useRouter } from "next/router";

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query; // This gets the slug from the URL

  return (
    <div>
      <h1>This is the post: {slug}</h1>
      <p>The content for this blog post will go here.</p>
    </div>
  );
}
