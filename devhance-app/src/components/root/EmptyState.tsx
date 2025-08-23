import { Star } from "lucide-react";

const EmptyState = ({ onCreate }: { onCreate: () => void }) => (
  <div className="flex flex-col items-center justify-center text-center">
    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/5">
      <Star className="h-12 w-12 text-white/50" />
    </div>
    <h2 className="font-['Syne'] text-3xl font-bold text-white">
      Your Stage is Set.
    </h2>
    <p className="mt-2 max-w-sm text-gray-300/80">
      Transform your first project into a compelling story. Let's begin.
    </p>
    <button
      onClick={onCreate}
      className="brand mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white transition-transform hover:scale-105"
    >
      Create New Project
    </button>
  </div>
);

export default EmptyState;
