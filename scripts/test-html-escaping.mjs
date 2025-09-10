import { NodeHtmlMarkdown } from "node-html-markdown";

// Test case to reproduce the HTML escaping issue
const testHtml = `
<p>Under the hood: Writer commits atomic updates, Context Manager builds basic or wide or deep or temporal context, and Searcher runs BM25 for explainable retrieval. Clean API with DiffM<emory.get>_context and process_commit session.</p>
<p>Another example with <script>alert('test')</script> tags.</p>
<p>And some <custom-tag>content</custom-tag> here.</p>
`;

console.log("Original HTML:");
console.log(testHtml);
console.log("\nNodeHtmlMarkdown output:");
console.log(NodeHtmlMarkdown.translate(testHtml));