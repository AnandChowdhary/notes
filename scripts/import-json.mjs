import { readFile } from "node:fs/promises";
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import dayjs from "dayjs";
import { execSync } from "node:child_process";

const data = async () => {
  const start = Date.now();
  const file = await readFile(join(".", "scripts", "data.json"));
  const json = JSON.parse(file);
  json.forEach(({ date, content, slug }) => {
    date = dayjs(date).format("ddd MMM DD HH:mm:ss YYYY ZZ");
    if (!slug)
      slug = String(content)
        .split(" ")
        .slice(0, 3)
        .join(" ")
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    const dir = join(".", "notes", new Date(date).getFullYear().toString());
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, `${slug}.md`), content.trim());
    console.log(
      execSync(
        `git add . && GIT_AUTHOR_DATE="${date}" GIT_COMMITTER_DATE="${date}" git commit -m ":pencil: Add ${slug}.md"`,
        { stdio: "inherit" }
      )
    );
    console.log("Added", slug);
  });
  console.log(`Completed in ${(Date.now() - start) / 100} seconds`);
};

data();
