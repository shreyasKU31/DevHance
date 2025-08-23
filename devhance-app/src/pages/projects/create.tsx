/**
 * @file create.tsx
 * @module CreateProject
 * @description The page for creating a new project story with a full-featured Tiptap editor.
 * @requires react, lucide-react, @tiptap/react, @tiptap/starter-kit, @tiptap/extension-link, @tiptap/extension-image, @tiptap/extension-code-block-lowlight, lowlight
 */
import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import Image from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
// --- SYNTAX HIGHLIGHTING IMPORTS ---
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight } from "lowlight";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import css from "highlight.js/lib/languages/css";
import python from "highlight.js/lib/languages/python";
import java_ from "highlight.js/lib/languages/java"; // 'java' is a reserved keyword
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import xml from "highlight.js/lib/languages/xml"; // For HTML

import {
  Loader,
  Save,
  Bold,
  Italic,
  Strikethrough,
  Code,
  Pilcrow,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link2,
  Image as ImageIcon,
} from "lucide-react";

// --- Import a syntax highlighting theme ---
import "highlight.js/styles/atom-one-dark.css";

const lowlight = createLowlight();
// Register the languages you want to support
lowlight.register("javascript", javascript);
lowlight.register("typescript", typescript);
lowlight.register("css", css);
lowlight.register("python", python);
lowlight.register("java", java_);
lowlight.register("bash", bash);
lowlight.register("json", json);
lowlight.register("html", xml);

// --- Tiptap MenuBar Component ---
const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  const addImage = useCallback(() => {
    const url = window.prompt("URL");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const menuButtonClass =
    "p-2 rounded transition-colors text-gray-400 hover:bg-gray-700 hover:text-white";
  const activeMenuButtonClass = "bg-gray-700 text-white";

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border-b border-white/10 bg-gray-800 p-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${menuButtonClass} ${
          editor.isActive("bold") ? activeMenuButtonClass : ""
        }`}
      >
        <Bold size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${menuButtonClass} ${
          editor.isActive("italic") ? activeMenuButtonClass : ""
        }`}
      >
        <Italic size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`${menuButtonClass} ${
          editor.isActive("strike") ? activeMenuButtonClass : ""
        }`}
      >
        <Strikethrough size={18} />
      </button>
      {/* UPDATED: This now toggles a code block */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${menuButtonClass} ${
          editor.isActive("codeBlock") ? activeMenuButtonClass : ""
        }`}
      >
        <Code size={18} />
      </button>
      <div className="mx-2 h-5 w-px bg-white/20" />
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${menuButtonClass} ${
          editor.isActive("heading", { level: 2 }) ? activeMenuButtonClass : ""
        }`}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${menuButtonClass} ${
          editor.isActive("heading", { level: 3 }) ? activeMenuButtonClass : ""
        }`}
      >
        H3
      </button>
      <div className="mx-2 h-5 w-px bg-white/20" />
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${menuButtonClass} ${
          editor.isActive("bulletList") ? activeMenuButtonClass : ""
        }`}
      >
        <List size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${menuButtonClass} ${
          editor.isActive("orderedList") ? activeMenuButtonClass : ""
        }`}
      >
        <ListOrdered size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${menuButtonClass} ${
          editor.isActive("blockquote") ? activeMenuButtonClass : ""
        }`}
      >
        <Quote size={18} />
      </button>
      <div className="mx-2 h-5 w-px bg-white/20" />
      <button
        onClick={setLink}
        className={`${menuButtonClass} ${
          editor.isActive("link") ? activeMenuButtonClass : ""
        }`}
      >
        <Link2 size={18} />
      </button>
      <button onClick={addImage} className={menuButtonClass}>
        <ImageIcon size={18} />
      </button>
      <div className="mx-2 h-5 w-px bg-white/20" />
      <button
        onClick={() => editor.chain().focus().undo().run()}
        className={menuButtonClass}
      >
        <Undo size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        className={menuButtonClass}
      >
        <Redo size={18} />
      </button>
    </div>
  );
};

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
    // Get the structured JSON content from the Tiptap editor
    const challengesAndSolutions = editor?.getJSON();

    // CORRECTED: Gather all data from the form's state into one object
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
          <div className="mb-6">
            <label htmlFor="title" className="text-[1.3rem]">
              Title :
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Project Title"
              className="inline border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="problem" className="text-[1.3rem]">
              Problem :
            </label>
            <textarea
              value={problem}
              id="problem"
              onChange={(e) => setProblem(e.target.value)}
              placeholder="The 'Why': What was the challenge or user need?"
              className="inline border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="contribution" className="text-[1.3rem]">
              Contribution :
            </label>
            <textarea
              value={contribution}
              id="contribution"
              onChange={(e) => setContribution(e.target.value)}
              placeholder="My Role & Contribution: What specific part did I own?"
              className="border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="stack" className="text-[1.3rem]">
              Tech Stack :
            </label>
            <input
              type="text"
              id="stack"
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
              placeholder="Tech Stack (e.g., React, Node.js, PostgreSQL)"
              className="border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input"
            />
          </div>
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
          <div className="mb-6">
            <label htmlFor="outcomes" className="text-[1.3rem]">
              Outcomes :
            </label>
            <textarea
              id="outcomes"
              value={outcomes}
              onChange={(e) => setOutcomes(e.target.value)}
              placeholder="Outcomes & Learnings"
              className="border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="liveDemo" className="text-[1.3rem]">
              Live Demo :
            </label>
            <input
              type="url"
              id="liveDemo"
              value={liveDemo}
              onChange={(e) => setLiveDemo(e.target.value)}
              placeholder="Live Demo URL"
              className="border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="repoLink" className="text-[1.3rem]">
              Repo URL :
            </label>
            <input
              type="url"
              id="repoLink"
              value={repoLink}
              onChange={(e) => setRepoLink(e.target.value)}
              placeholder="Code Repository URL"
              className="border-2 border-gray-700 rounded-xl mt-2 py-2 px-4 w-full form-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
