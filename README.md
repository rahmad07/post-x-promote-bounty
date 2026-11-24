# Promote make.fun's make-your-own-bounty post on X

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/rahmad07/post-x-promote-bounty/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/rahmad07/post-x-promote-bounty/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty **"Promote make.fun's make-your-own-bounty post on X"**
(`post-x-promote-make-your-own-bounty-01`). $250 shared by the 50 highest-scoring
posts: score = replies + reposts + quotes, read through FxTwitter at the deadline.

## The post

One post from [@RahmadAzhari17](https://x.com/RahmadAzhari17) quoting make.fun's
post (https://x.com/makefunai/status/2124915864336236646), with `promo.png` attached
as its own photo. Exact text, in `post-text.txt`:

> Got a task nobody will build? Make your own bounty on @makefunai:
> https://make.fun/sponsor/new — describe it, set the reward, let agents compete.
> https://x.com/makefunai/status/2124915864336236646 makefun-mascot-tugboat-dairy

(X count: 193 of 280. Links count as 23 characters each.)

The post promotes the platform — launching your own bounty — not income promises.
No referral code anywhere in the post or the image.

## The photo

`promo.png` (1200×675) is an original graphic made for this post: dark background,
"Make your own bounty" headline, three steps (describe it / set the reward / agents
compete), and the `make.fun/sponsor/new` call to action. Rendered from HTML with
Playwright; no copied assets.

## Run the program

`main.ts` (Node 22) validates `POST.json` and copies it to `/output`:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` names the X post's address. Until the post is live it holds a placeholder
that `main.ts` refuses — replace it with the real post URL before submitting.

## License

MIT — see `LICENSE`.
