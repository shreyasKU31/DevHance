export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] text-gray-400 mt-24">
      <div className="mx-auto max-w-7xl px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex gap-2 items-center mb-2">
            <img
              className="w-10"
              src="/DHLogo.webp"
              alt="Devhance Logo"
              width="40"
              height="40"
            />
            <span className="font-syne text-xl font-bold text-white">
              DevHance
            </span>
          </div>
          <p className="max-w-xs text-sm text-gray-300/70 mb-4 md:mb-0">
            Providing a canvas for the world's creators to tell the story behind
            their work.
          </p>
          <p className="text-xs text-gray-400/50">
            © 2025 devhance. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <a href="#" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Showcase
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22 5.924c-.793.352-1.646.59-2.54.698a4.48 4.48 0 0 0 1.965-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 12.03 9.5c0 .352.04.695.116 1.022C8.728 10.37 5.7 8.74 3.671 6.25a4.48 4.48 0 0 0-.607 2.257c0 1.557.793 2.933 2.002 3.74a4.48 4.48 0 0 1-2.03-.56v.057a4.48 4.48 0 0 0 3.6 4.393c-.193.053-.397.08-.607.08-.148 0-.292-.014-.432-.04a4.48 4.48 0 0 0 4.18 3.11A8.98 8.98 0 0 1 2 19.07a12.67 12.67 0 0 0 6.88 2.017c8.26 0 12.78-6.84 12.78-12.77 0-.195-.004-.39-.013-.583A9.13 9.13 0 0 0 24 4.59a8.93 8.93 0 0 1-2.57.7Z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.652 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.38.202 2.399.1 2.652.64.7 1.028 1.594 1.028 2.687 0 3.847-2.338 4.695-4.566 4.944.36.31.68.92.68 1.855 0 1.338-.012 2.42-.012 2.75 0 .267.18.577.688.48A10.02 10.02 0 0 0 22 12.021C22 6.484 17.523 2 12 2Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
