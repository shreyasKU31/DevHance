/**
 * @file create.tsx
 * @module CreateProject
 * @description The page for creating a new project story with a full-featured Tiptap editor.
 * @requires react, lucide-react, @tiptap/react, @tiptap/starter-kit, @tiptap/extension-link, @tiptap/extension-image, @tiptap/extension-code-block-lowlight, lowlight
 */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import Image from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
import { MenuBar } from "@/components/createProject/Menubar";
// --- SYNTAX HIGHLIGHTING IMPORTS ---
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { Loader, Save } from "lucide-react";
import lowlight from "@/lib/syntaxHighlight";
import FormField from "@/components/createProject/FormField";

const CreateProjectPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [problem, setProblem] = useState("");
  const [contribution, setContribution] = useState("");
  const [techStack, setTechStack] = useState("");
  const [outcomes, setOutcomes] = useState("");
  const [liveDemo, setLiveDemo] = useState("");
  const [repoLink, setRepoLink] = useState("");

  const editor = useEditor({
    extensions: [
      // We configure StarterKit to use our new CodeBlock extension
      StarterKit.configure({
        codeBlock: false, // Disable the default code block
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      TiptapLink.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image,
    ],
    immediatelyRender: false,
    content:
      "<h2>Getting Started</h2><p>Welcome to the editor! This is where you can tell the story behind your project, detailing the challenges you faced and the solutions you created.</p>",
    editorProps: {
      attributes: {
        class:
          "prose prose-invert border-2 border-gray-700 rounded-2xl p-8 focus:outline-none min-h-[400px] w-full max-w-full form-input",
      },
    },
  });

  const handleSave = async () => {
    setIsSaving(true);

    const challengesAndSolutions = editor?.getJSON();

    const projectData = {
      title,
      problem,
      contribution,
      techStack: techStack
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag), // Convert to array and remove empty tags
      challengesAndSolutions,
      outcomesAndLearnings: outcomes,
      links: {
        liveDemo,
        repository: repoLink,
      },
    };

    const res = await fetch("http://localhost:3000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });

    if (res.ok) {
      router.push("/"); // Redirect to dashboard on success
    } else {
      console.error("Failed to save project");
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-['Syne'] text-4xl font-bold text-white">
          Create a New Story
        </h2>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-white">
            Cancel
          </Link>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="brand flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-transform hover:scale-105 disabled:opacity-50"
          >
            {isSaving ? (
              <Loader className="animate-spin" />
            ) : (
              <Save size={18} />
            )}
            {isSaving ? "Saving..." : "Add Project"}
          </button>
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-white">
          <FormField
            label="Title"
            id="title"
            value={title}
            onChange={setTitle}
            placeholder="Project Title"
          />

          <FormField
            label="Problem"
            id="problem"
            type="textarea"
            value={problem}
            onChange={setProblem}
            placeholder="The 'Why': What was the challenge or user need?"
          />

          <FormField
            label="Contribution"
            id="contribution"
            type="textarea"
            value={contribution}
            onChange={setContribution}
            placeholder="My Role & Contribution: What specific part did I own?"
          />

          <FormField
            label="Tech Stack"
            id="stack"
            value={techStack}
            onChange={setTechStack}
            placeholder="Tech Stack (e.g., React, Node.js, PostgreSQL)"
          />
        </div>
        <div className="glass-pro rounded-lg">
          <label htmlFor="editor" className="text-white text-[1.3rem]">
            The "How" - Key Technical Challenges & Solutions
          </label>
          <div className="mt-4">
            <MenuBar editor={editor} />
            <div className="mt-4" id="editor">
              <EditorContent editor={editor} />
            </div>
          </div>
        </div>

        <div className="text-white">
          <FormField
            label="Outcomes"
            id="outcomes"
            value={outcomes}
            onChange={setOutcomes}
            type="textarea"
            placeholder="Outcomes & Learnings"
          />
          <FormField
            label="Live Demo"
            id="liveDemo"
            value={liveDemo}
            onChange={setLiveDemo}
            type="url"
            placeholder="Live Demo URL"
          />
          <FormField
            label="Repo URL"
            id="repoLink"
            value={repoLink}
            onChange={setRepoLink}
            placeholder="Code Repository URL"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
