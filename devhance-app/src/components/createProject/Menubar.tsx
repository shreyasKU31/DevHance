import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link2,
  Image as ImageIcon,
} from "lucide-react";
import { Editor } from "@tiptap/react";
import { useCallback } from "react";

export const MenuBar = ({ editor }: { editor: Editor | null }) => {
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
