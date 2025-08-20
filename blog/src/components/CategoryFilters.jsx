const categories = [
  { label: "All Posts", value: "all" },
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Community", value: "community" },
  { label: "Announcements", value: "announcements" },
];

export default function CategoryFilters({ active, onChange }) {
  return (
    <nav className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`px-5 py-2 rounded-full font-lexend text-sm transition-colors
            ${
              active === cat.value
                ? "bg-accent text-white"
                : "bg-gray-100 text-secondary hover:bg-accent/10"
            }`}
          onClick={() => onChange(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </nav>
  );
}
