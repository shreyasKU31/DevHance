import React from "react";

export function RenderContent({ content }: { content: any }) {
  if (!content?.content) return null;

  return (
    <div className="prose prose-lg text-white max-w-none mx-auto px-2 md:px-0 prose-headings:font-syne prose-headings:text-primary prose-p:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-300 prose-blockquote:bg-blue-50 prose-blockquote:p-4 prose-blockquote:rounded-md prose-blockquote:text-gray-600 prose-img:rounded-xl prose-img:shadow-md prose-code:bg-gray-100 prose-code:rounded prose-code:px-1 prose-code:py-0.5 prose-li:marker:text-accent prose-a:text-accent prose-a:underline hover:prose-a:text-blue-700">
      {content.content.map((block: any, idx: number) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={idx} className="mb-5 leading-relaxed text-lg">
                {block.content?.map(renderText)}
              </p>
            );
          case "heading":
            if (block.attrs?.level === 2)
              return (
                <h2
                  key={idx}
                  className="mt-10 mb-4 text-3xl font-syne text-primary"
                >
                  {block.content?.map(renderText)}
                </h2>
              );
            if (block.attrs?.level === 3)
              return (
                <h3
                  key={idx}
                  className="mt-8 mb-3 text-2xl font-syne text-primary"
                >
                  {block.content?.map(renderText)}
                </h3>
              );
            break;
          case "codeBlock":
            return (
              <pre
                key={idx}
                className="my-6 rounded-xl bg-gray-900 text-gray-100 p-4 overflow-x-auto text-base shadow-md"
              >
                <code>{block.content?.[0]?.text}</code>
              </pre>
            );
          case "bulletList":
            return (
              <ul key={idx} className="list-disc pl-8 mb-5 space-y-2 text-left text-gray-800 dark:text-gray-200">
                {block.content?.map((li: any, liIdx: number) => (
                  <li key={liIdx} className="text-lg">
                    {Array.isArray(li.content)
                      ? li.content.map((item: any, itemIdx: number) =>
                          item.type === "bulletList" || item.type === "orderedList"
                            ? RenderContent({ content: { content: [item] } })
                            : renderText(item, itemIdx)
                        )
                      : null}
                  </li>
                ))}
              </ul>
            );
          case "orderedList":
            return (
              <ol key={idx} className="list-decimal pl-8 mb-5 space-y-2 text-left text-gray-800 dark:text-gray-200">
                {block.content?.map((li: any, liIdx: number) => (
                  <li key={liIdx} className="text-lg">
                    {Array.isArray(li.content)
                      ? li.content.map((item: any, itemIdx: number) =>
                          item.type === "bulletList" || item.type === "orderedList"
                            ? RenderContent({ content: { content: [item] } })
                            : renderText(item, itemIdx)
                        )
                      : null}
                  </li>
                ))}
              </ol>
            );
          case "blockquote":
            return (
              <blockquote
                key={idx}
                className="my-8 border-l-4 border-blue-400 bg-blue-50 p-6 rounded-xl text-blue-900 italic shadow-md"
              >
                {block.content?.map(renderText)}
              </blockquote>
            );
          case "image":
            return (
              <div key={idx} className="flex justify-center my-8">
                <img
                  src={block.attrs.src}
                  alt={block.attrs.alt || ""}
                  className="rounded-xl shadow-md max-h-[400px] object-contain"
                />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

function renderText(node: any, idx: number) {
  let text = (
    <span key={idx} className="text-white">
      {node.text}
    </span>
  );

  if (node.marks) {
    node.marks.forEach((mark: any) => {
      if (mark.type === "bold")
        text = (
          <strong key={idx} className="font-bold">
            {text}
          </strong>
        );
      if (mark.type === "italic")
        text = (
          <em key={idx} className="italic">
            {text}
          </em>
        );
      if (mark.type === "strike")
        text = (
          <s key={idx} className="line-through">
            {text}
          </s>
        );
      if (mark.type === "link")
        text = (
          <a
            key={idx}
            href={mark.attrs.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gradient-to-r from-blue-500 via-pink-400 to-blue-400 px-5 py-2 font-lexend text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {text}
          </a>
        );
    });
  }
  return text;
}
