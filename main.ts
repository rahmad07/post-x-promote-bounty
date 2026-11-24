// Entry program for the make.fun bounty "Promote make.fun's make-your-own-bounty
// post on X" (post-x-promote-make-your-own-bounty-01).
//
// Node 22, standard library only. The entry is the X post itself: one post that
// quotes (or links) make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646), with a photo of its own
// attached, make.fun / @makefunai and the play code in its text. POST.json at the
// repository root names that post's address; this program copies POST.json to the
// output directory, where the grader reads it and scores the post's replies,
// reposts and quotes. Nothing this program writes about the post is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// A post address looks like https://x.com/<handle>/status/<id> (twitter.com works
// too). Anything else — including the placeholder POST.json ships with — is refused
// loudly here instead of being silently copied.
const POST_URL = /^https:\/\/(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

const raw = readFileSync(join(botDir, "POST.json"), "utf8");
const data: unknown = JSON.parse(raw);
if (typeof data !== "object" || data === null || Array.isArray(data)) {
  throw new Error("POST.json must hold a JSON object with a url field");
}
const url = (data as { url?: unknown }).url;
if (typeof url !== "string" || !POST_URL.test(url)) {
  throw new Error(
    "POST.json must name the posted X post: https://x.com/<handle>/status/<id>",
  );
}

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
