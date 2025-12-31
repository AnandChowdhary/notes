import { NodeHtmlMarkdown } from "node-html-markdown";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SOCIAL_SET_ID = "31080";

// Helper function to escape HTML-like content that should be treated as literal text
const escapeNonHtmlTags = (html) => {
  // Escape tags with dots (like <emory.get>) which are not valid HTML tags
  return html.replace(/<([^>\s]*\.[^>]*?)>/g, "&lt;$1&gt;");
};

// Helper function to extract first tweet text from preview
const extractFirstTweet = (preview) => {
  if (!preview) return "";

  // Convert HTML to plain text and get first paragraph/segment
  const plainText = preview
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();

  // Take first 280 characters or up to first double newline
  const firstSegment = plainText.split(/\n\n/)[0];
  return firstSegment.substring(0, 280).trim();
};

const generateTitle = async (text, examples) => {
  const token = process.env.GITHUB_TOKEN;
  const model = "openai/gpt-5-nano";

  if (token)
    try {
      const response = await fetch(
        "https://models.github.ai/inference/chat/completions",
        {
          method: "POST",
          headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${token}`,
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model,
            messages: [
              {
                role: "system",
                content: `Generate a short title for the given article. The title should be in sentence case with no punctuation and no more than 4-5 words. Respond only with the title, no other text. Examples:\n- Apple's new iPhone Air is underwhelming\n${examples}`,
              },
              { role: "user", content: text },
            ],
          }),
        }
      );
      const data = await response.json();

      if (!data.choices || !data.choices[0]) {
        console.error("GitHub Models API error:", JSON.stringify(data));
        return undefined;
      }

      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Failed to generate title:", error);
      return undefined;
    }
};

const data = async () => {
  // Fetch all drafts using pagination
  const allDrafts = [];
  let url = `https://api.typefully.com/v2/social-sets/${SOCIAL_SET_ID}/drafts`;

  while (url) {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${process.env.TYPEFULLY_API_KEY}` },
    });

    /**
     * @type {{
     *   count: number;
     *   limit: number;
     *   offset: number;
     *   next: string | null;
     *   previous: string | null;
     *   results: {
     *     id: string;
     *     social_set_id: number;
     *     status: string;
     *     created_at: string;
     *     updated_at: string;
     *     published_at: string;
     *     scheduled_date: string | null;
     *     draft_title: string | null;
     *     preview: string;
     *     tags: string[];
     *     share_url: string | null;
     *     private_url: string | null;
     *     x?: {
     *       url?: string;
     *       publication_url?: string;
     *       published_at?: string;
     *     };
     *     linkedin?: {
     *       url?: string;
     *       published_at?: string;
     *     };
     *   }[];
     * }}
     */
    const paginatedData = await response.json();

    // Debug: log the response structure
    if (!paginatedData.results) {
      console.error(
        "Unexpected API response structure:",
        JSON.stringify(paginatedData, null, 2)
      );
      throw new Error("API response does not contain 'results' field");
    }

    allDrafts.push(...paginatedData.results);
    url = paginatedData.next;
  }

  console.log("Found", allDrafts.length, "drafts");
  await mkdir("./threads", { recursive: true });
  const existing = await readFile("./threads/api.json", "utf-8");
  const existingApi = JSON.parse(existing);
  const api = [...existingApi];

  const examples = api
    .map((item) => `- ${item.title}`)
    .slice(0, 10)
    .join("\n");

  let processedCount = 0;
  let skippedPublishedCount = 0;
  let skippedNoUrlCount = 0;
  let skippedTooShortCount = 0;
  let skippedAlreadyExistsCount = 0;
  let addedCount = 0;

  for (const rawDraft of allDrafts) {
    // Only process published drafts with Twitter/X URLs
    if (rawDraft.status !== "published") {
      skippedPublishedCount++;
      continue;
    }
    if (!rawDraft.x_published_url) {
      skippedNoUrlCount++;
      continue;
    }

    processedCount++;

    // Fetch full draft details to get complete content
    const detailResponse = await fetch(
      `https://api.typefully.com/v2/social-sets/${SOCIAL_SET_ID}/drafts/${rawDraft.id}`,
      {
        headers: { Authorization: `Bearer ${process.env.TYPEFULLY_API_KEY}` },
      }
    );
    const fullDraft = await detailResponse.json();

    // Extract X/Twitter posts
    const xPosts = fullDraft.platforms?.x?.posts || [];
    const threadText = xPosts.map((post) => post.text).join("\n\n");
    const firstTweetText = xPosts[0]?.text || "";

    // Map v2 fields to v1-compatible structure
    const draft = {
      html: threadText,
      twitter_url: rawDraft.x_published_url,
      published_on: rawDraft.published_at,
      text_first_tweet: firstTweetText,
    };

    const threadContent = NodeHtmlMarkdown.translate(
      escapeNonHtmlTags(draft.html)
    );
    if (threadContent.length < 500) {
      skippedTooShortCount++;
      continue;
    }

    const existingItem = api.find(
      (item) => item.attributes.twitter === draft.twitter_url
    );

    if (existingItem) {
      skippedAlreadyExistsCount++;
      continue;
    }

    console.log("Adding new thread:", draft.twitter_url);

    let title = await generateTitle(draft.text_first_tweet, examples);

    // Fallback if title generation fails
    if (!title) {
      console.warn(
        "Title generation failed, using fallback for:",
        draft.twitter_url
      );
      title = draft.text_first_tweet
        .substring(0, 50)
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .trim();
      if (!title) title = "Untitled thread";
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    api.push({
      slug,
      path: `threads/${new Date(
        draft.published_on
      ).getUTCFullYear()}/${slug}.md`,
      source: `https://github.com/AnandChowdhary/notes/blob/main/threads/${new Date(
        draft.published_on
      ).getUTCFullYear()}/${slug}.md`,
      title,
      date: draft.published_on,
      excerpt: draft.text_first_tweet,
      attributes: { twitter: draft.twitter_url },
    });

    await mkdir(`./threads/${new Date(draft.published_on).getUTCFullYear()}`, {
      recursive: true,
    });
    await writeFile(
      `./threads/${new Date(draft.published_on).getUTCFullYear()}/${slug}.md`,
      `---
title: ${title}
date: ${new Date(draft.published_on).toISOString()}
url: ${draft.twitter_url}
---

${NodeHtmlMarkdown.translate(escapeNonHtmlTags(draft.html))}\n`
    );

    addedCount++;

    await writeFile(
      "./threads/api.json",
      JSON.stringify(
        api
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          // Deduplicate by Twitter URL
          .filter(
            (item, index, array) =>
              array.findIndex(
                (i) => i.attributes.twitter === item.attributes.twitter
              ) === index
          ),
        null,
        2
      )
    );
  }

  console.log("\nImport Summary:");
  console.log("  Total drafts from API:", allDrafts.length);
  console.log("  Skipped (not published):", skippedPublishedCount);
  console.log("  Skipped (no Twitter URL):", skippedNoUrlCount);
  console.log("  Processed:", processedCount);
  console.log("  Skipped (too short):", skippedTooShortCount);
  console.log("  Skipped (already exists):", skippedAlreadyExistsCount);
  console.log("  Added new threads:", addedCount);
};

data();
