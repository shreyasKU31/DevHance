import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FeaturedPost from "../components/FeaturedPost";
import CategoryFilters from "../components/CategoryFilters";
import BlogGrid from "../components/BlogGrid";
import { useState } from "react";

// Mock data for demonstration
const posts = [
  {
    href: "/blog/featured-case-study",
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
    category: "Case Study",
    title: "How We Designed the Next-Gen Portfolio Platform",
    excerpt:
      "A behind-the-scenes look at the design process, challenges, and solutions that shaped devhance into a platform for creators.",
    date: "August 20, 2025",
    featured: true,
  },
  {
    href: "/blog/design-systems",
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    category: "Design",
    title: "Design Systems for Fast-Moving Teams",
    excerpt:
      "How to build and scale a design system that empowers both designers and engineers.",
    date: "August 18, 2025",
  },
  {
    href: "/blog/engineering-culture",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    category: "Engineering",
    title: "Engineering Culture at devhance",
    excerpt:
      "What makes a great engineering team? Lessons from building a product with heart.",
    date: "August 15, 2025",
  },
  {
    href: "/blog/community-growth",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    category: "Community",
    title: "Growing a Creative Community from Scratch",
    excerpt:
      "How we fostered a vibrant, supportive community for creators worldwide.",
    date: "August 10, 2025",
  },
  {
    href: "/blog/announcing-beta",
    image:
      "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?auto=format&fit=crop&w=600&q=80",
    category: "Announcements",
    title: "Announcing devhance Beta Launch",
    excerpt:
      "We're live! Here's what you can expect from the beta and how to get involved.",
    date: "August 5, 2025",
  },
];

const categories = [
  { label: "All Posts", value: "all" },
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Community", value: "community" },
  { label: "Announcements", value: "announcements" },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const featured = posts.find((p) => p.featured);
  const filtered =
    activeCategory === "all"
      ? posts.filter((p) => !p.featured)
      : posts.filter(
          (p) => p.category.toLowerCase() === activeCategory && !p.featured
        );

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <NavBar />
      {/* Hero Section with animated gradient background */}
      <section className="relative flex flex-col items-center justify-center py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[700px] h-[400px] rounded-full blur-3xl opacity-60 bg-gradient-to-tr from-[#a5b4fc] via-[#f472b6] to-[#38bdf8] animate-gradient-move" />
        </div>
        <h1 className="font-syne font-bold text-[56px] text-primary mb-4">
          The devhance Logbook
        </h1>
        <p className="font-lexend text-[20px] text-secondary max-w-xl">
          Insights on design, engineering, and the art of showcasing creative
          work.
        </p>
      </section>
      <FeaturedPost post={featured} />
      <CategoryFilters active={activeCategory} onChange={setActiveCategory} />
      <BlogGrid posts={filtered} />
      <Footer />
    </div>
  );
}
