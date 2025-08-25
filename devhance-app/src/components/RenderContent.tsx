import React from "react";

export function RenderContent({ content }: { content: any }) {
  if (!content?.content) return null;

  return content.content.map((block: any, idx: number) => {
    switch (block.type) {
      case "paragraph":
        return <p key={idx}>{block.content?.map(renderText)}</p>;
      case "heading":
        if (block.attrs?.level === 2) return <h2 key={idx}>{block.content?.map(renderText)}</h2>;
        if (block.attrs?.level === 3) return <h3 key={idx}>{block.content?.map(renderText)}</h3>;
        break;
      case "codeBlock":
        return <pre key={idx}><code>{block.content?.[0]?.text}</code></pre>;
      case "bulletList":
        return <ul key={idx}>{block.content?.map((li: any, liIdx: number) => (
          <li key={liIdx}>{li.content?.map(renderText)}</li>
        ))}</ul>;
      case "orderedList":
        return <ol key={idx}>{block.content?.map((li: any, liIdx: number) => (
          <li key={liIdx}>{li.content?.map(renderText)}</li>
        ))}</ol>;
      case "blockquote":
        return <blockquote key={idx}>{block.content?.map(renderText)}</blockquote>;
      case "image":
        return <img key={idx} src={block.attrs.src} alt={block.attrs.alt || ""} />;
      default:
        return null;
    }
  });
}

function renderText(node: any, idx: number) {
  let text = <span key={idx}>{node.text}</span>;

  if (node.marks) {
    node.marks.forEach((mark: any) => {
      if (mark.type === "bold") text = <strong key={idx}>{text}</strong>;
      if (mark.type === "italic") text = <em key={idx}>{text}</em>;
      if (mark.type === "strike") text = <s key={idx}>{text}</s>;
      if (mark.type === "link") text = (
        <a key={idx} href={mark.attrs.href} target="_blank" rel="noopener noreferrer">{text}</a>
      );
    });
  }
  return text;
}
