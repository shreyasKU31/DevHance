import "@fontsource/syne/700.css";
import "@fontsource/lexend/400.css";

export default function BlogLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e0e7ef]">
      {children}
    </div>
  );
}
