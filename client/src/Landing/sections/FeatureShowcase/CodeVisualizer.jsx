import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const CodeVisualizer = () => (
  <motion.div
    key="code"
    className="p-8 font-mono text-sm text-left text-gray-300"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* UPDATED: Simple, understandable auth code example */}
    <TypeAnimation
      sequence={[
        `// A simple function to check if a user has access.\n\nfunction canUserAccess(user) {\n  // 1. Check if the user is logged in.\n  if (!user.isLoggedIn) {\n    return "Access Denied: Please log in.";\n  }\n\n  // 2. Check if the user has the 'admin' role.\n  if (user.role === "admin") {\n    return "Welcome, Admin! Full access granted.";\n  }\n\n  // If not an admin, grant basic access.\n  return "Welcome! Basic access granted.";\n}`,
      ]}
      wrapper="pre"
      speed={60}
      cursor={true}
      repeat={0}
      style={{ whiteSpace: "pre-line" }}
    />
  </motion.div>
);

export default CodeVisualizer;
