import { NodeHtmlMarkdown } from "node-html-markdown";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const generateTitle = async (text, examples) => {
  const token = process.env.OPENAI_API_KEY;
  const model = "gpt-5-nano";

  if (token)
    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            model,
            messages: [
              {
                role: "system",
                content: `Generate a short title for the given article. The title should be in sentence case with no punctuation and no more than 4-5 words. Respond only with the title, no other text. Examples:\n${examples}`,
              },
              { role: "user", content: text },
            ],
          }),
        }
      );
      const data = await response.json();
      return data.choices[0].message.content.trim();
    } catch (error) {
      console.error(error);
      return undefined;
    }
};

const data = async () => {
  const response = await fetch(
    "https://api.typefully.com/v1/drafts/recently-published/",
    { headers: { "X-API-Key": process.env.TYPEFULLY_API_KEY } }
  );
  /**
   * @type {{
   *   id: number;
   *   status: string;
   *   html: string;
   *   num_tweets: number;
   *   last_edited: string;
   *   scheduled_date: string;
   *   published_on: string;
   *   share_url: string | null;
   *   twitter_url: string | null;
   *   linkedin_url: string | null;
   *   text_first_tweet: string;
   *   html_first_tweet: string;
   *   text_preview_linkedin: string | null;
   * }[]}
   */
  const data = await response.json();
  console.log("Found", data.length, "drafts");
  await mkdir("./threads", { recursive: true });
  const existing = await readFile("./threads/api.json", "utf-8");
  const existingApi = JSON.parse(existing);
  const api = [...existingApi];

  const examples = api
    .map((item) => `- ${item.title}`)
    .slice(0, 10)
    .join("\n");

  for (const draft of data) {
    if (!draft.twitter_url) continue;
    console.log(draft.twitter_url);

    const existingItem = api.find(
      (item) => item.attributes.twitter === draft.twitter_url
    );
    const title =
      existingItem?.title ??
      (await generateTitle(draft.text_first_tweet, examples));
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

${NodeHtmlMarkdown.translate(draft.html)}\n`
    );

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
};

data();
