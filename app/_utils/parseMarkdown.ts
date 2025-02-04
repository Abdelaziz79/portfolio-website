import { marked } from "marked";

// Create a new instance of the marked renderer
const renderer = new marked.Renderer();

// Helper function to escape HTML
function escapeHtml(html: string) {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return html.replace(/[&<>"']/g, (m) => map[m]);
}

// Override the renderer methods with proper types
renderer.code = function ({ text, lang, escaped }) {
  const language = lang || "";
  const content = escaped ? text : escapeHtml(text);
  return `<div dir="ltr"><pre><code class="language-${language}">${content}</code></pre></div>`;
};

renderer.codespan = function ({ text }) {
  return `<code dir="ltr" style="display: inline-block">${text}</code>`;
};

renderer.paragraph = function ({ text }) {
  const processedText = text.replace(
    /([A-Za-z0-9]+|`.*?`|\{.*?\}|\[.*?\]|\(.*?\))/g,
    (match: string) => {
      if (match.startsWith("`") && match.endsWith("`")) {
        return `<span dir="ltr" style="display: inline-block">${match}</span>`;
      }
      return `<span dir="ltr" style="display: inline-block">${match}</span>`;
    }
  );
  return `<p>${processedText}</p>`;
};

export const parseMarkdown = (content: string) => {
  try {
    return marked.parse(content, { renderer });
  } catch (error) {
    console.error("Error parsing markdown:", error);
    return content;
  }
};
