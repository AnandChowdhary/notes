import { NodeHtmlMarkdown } from "node-html-markdown";
import { mkdir, writeFile } from "node:fs/promises";

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

  for (const draft of data) {
    if (!draft.twitter_url) continue;
    console.log(draft.twitter_url);
    await writeFile(
      `./threads/${new Date(draft.published_on)
        .toISOString()
        .substring(0, 10)}-${draft.twitter_url.split("/").pop()}.md`,
      `---
date: ${new Date(draft.published_on).toISOString()}
url: ${draft.twitter_url}
---

${NodeHtmlMarkdown.translate(draft.html)}`
    );
  }
};

data();
