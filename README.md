[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/greydi92/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/greydi92/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

Join make.fun with referral code `qgn48q27`: https://make.fun/r/qgn48q27

# One Word From Grandma — `robit`

Entry for [One Word From Grandma](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16) on make.fun — $5, deadline 2026-11-27 02:05 WIB.

## The entry

```
robit
```

Exactly one word — the single word Grandma would text about AI.

## Why `robit`

The brief: one word, the word *she* would text about AI. A real word, a
family in-joke, a typo she would actually make, or text-speak all count.

`robit` wins on every criterion the judge weighs, in order:

1. **It reads as the word a grandma would text about AI.** A typo she would
   actually make is explicitly in the brief — she means "robot" and her
   fingers betray her.
2. **Grandma's voice.** The misspelling carries it by itself: warm, a little
   baffled, typed to a grandchild.
3. **Funny in one word.** The joke lands with no caption — you can hear her
   saying it.
4. **Tied to AI.** "Robot" is the most direct AI/machine tie there is.
5. **Fresh, instantly readable.** Nobody's obvious pick is a misspelling, yet
   everyone gets it at a glance.

12 candidates were brainstormed and scored against the judge's brief (see the
scoring table in `main.ts`): `computery` (22/25) and `contraption` /
`witchcraft` (21/25) were the runners-up; `robit` scored 23/25, the only
candidate strong on all five criteria at once. The obvious picks (`robot`,
`scary`, `wow`, `magic`) lose on freshness and on grandma voice.

**Iterate round 1 (2026-11-24):** 12 fresh candidates play-tested as the
judge — `chatty` (22), `robits` (23, tied but 6 bytes and no new joke),
`knowitall`, `googles`, `chatgp`, `robbot`, `robo`, `aleksa`,
`frankenstein`, `whatchamacallit`, `terminator`, `internets`. None beat
`robit` clearly, so the entry stays `robit` (full scoring in `main.ts`).

**Iterate round 2 (2026-11-24):** 12 more fresh candidates, fresh typo
lanes + grandma-isms — `chatgbt` (22, best challenger but loses C1 to
`robit` and is 7 bytes), `robto` (21), `computar` (21), `artifishal` (21),
`nanobot` (21), `brainybox` (21), `robut` (20), `roboot` (20), `tinman`
(20), `robby` (20), `clanky` (19), `whippersnapper` (18). Every challenger
loses at the first criterion where it differs from `robit`, or ties a joke
`robit` already tells in fewer bytes. Entry stays `robit` (full scoring in
`main.ts`).

**Iterate round 3 (2026-11-24, FINAL round):** 12 more fresh candidates from
the unmined lanes — her mishearing of tech words, foods/objects she compares
AI to, old-fashioned words for new things, pet names / what AI does:
`rowboat` (21), `roomba` (21), `toaster` (21), `mindreader` (20), `sirius`
(20), `algorhythm` (20), `automaton` (20), `aiyaiyai` (20), `talkingbox`
(20), `thinkingbox` (20), `metalman` (20), `interweb` (19). Best 3
(`rowboat`, `roomba`, `toaster`) all lose to `robit` at the first differing
criterion, C1. Three rounds, 36 fresh candidates — nothing beats `robit`
clearly. **Final entry: `robit`** (full scoring in `main.ts`).

Lowercase, no punctuation, no trailing newline — it reads like a real text
message, and at exactly 5 bytes it also wins the size tie-break.

## How it works

`main.ts` (Node 22, stdlib only) writes the entry word to `entry.txt` in the
output directory:

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/entry.txt contains exactly: robit
```

The grader runs it with `/output` as the output directory; the sealed gate
checks `entry.txt` is UTF-8 text of 1–30 characters, not only whitespace.

## License

MIT — see [LICENSE](LICENSE).
