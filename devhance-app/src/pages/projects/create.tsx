/**
 * @file create.tsx
 * @module CreateProject
 * @description The page for creating a new project story with a full-featured Tiptap editor.
 * @requires react, lucide-react, @tiptap/react, @tiptap/starter-kit, @tiptap/extension-link, @tiptap/extension-image
 */
import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useEditor, EditorContent, Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "next/link";
import Image from "@tiptap/extension-image";
import TiptapLink from "@tiptap/extension-link";
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
    <div className="flex flex-wrap items-center gap-2 rounded-t-lg border-b border-white/10 bg-gray-800 p-2">
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
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`${menuButtonClass} ${
          editor.isActive("code") ? activeMenuButtonClass : ""
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

  const editor = useEditor({
    extensions: [
      StarterKit,
      TiptapLink.configure({
        openOnClick: false,
        autolink: true,
      }),
      Image,
    ],
    content:
      "<h2>Getting Started</h2><p>Welcome to the editor! This is where you can tell the story behind your project, detailing the challenges you faced and the solutions you created.</p>",
    // FIX: Added 'immediatelyRender: false' to prevent the SSR hydration error.
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          "text-white p-8 border-2 border-gray-600 rounded-2xl focus:outline-none min-h-[400px] w-full max-w-full",
      },
    },
  });

  const handleSave = async () => {
    setIsSaving(true);
    const content = editor?.getJSON();
    const projectData = { title, content };

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(projectData),
    });

    if (res.ok) {
      router.push("/");
    } else {
      console.error("Failed to save project");
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="font-['Syne'] text-3xl font-bold text-white">
          Create a New Story
        </h2>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-400 hover:text-white">
            Cancel
          </Link>
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="aura-gradient flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-white transition-transform hover:scale-105 disabled:opacity-50"
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
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="w-full rounded-lg border border-white/10 bg-white/5 p-4 text-2xl font-bold text-white focus:border-blue-500 focus:outline-none"
        />
        <div className="glass-pro rounded-lg">
          <MenuBar editor={editor} />
          <div className="p-4">
            <EditorContent editor={editor} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectPage;
