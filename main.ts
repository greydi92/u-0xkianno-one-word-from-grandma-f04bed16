// One Word From Grandma — make.fun entry (program/v1)
// Competition: u-0xkianno-one-word-from-grandma-f04bed16
// Entrant: @greydi92
//
// The entry is exactly one word: the single word Grandma would text about AI.
// The judge compares words pairwise on, in order:
//   1. reads as the single word a grandma would text about AI
//   2. warm, a little baffled grandmother's texting voice
//   3. funny in one word, joke lands without a caption
//   4. tied to AI / robots / machines
//   5. fresh pick, still instantly readable
//
// ---------------------------------------------------------------------------
// Candidate brainstorm + scoring (1-5 per criterion, criteria in judge order)
// ---------------------------------------------------------------------------
//   word          C1  C2  C3  C4  C5  tot  notes
//   ------------  --  --  --  --  --  ---  ---------------------------------
//   robit          5   5   4   5   4   23  WINNER. The typo IS the joke: she
//                                            means "robot" and her fingers
//                                            (or autocorrect) betray her.
//                                            Grandma voice + robot tie +
//                                            fresh, instantly readable.
//   computery      5   5   3   4   5   22  Strong grandma-ism ("the computery
//                                            thing") but the joke is softer
//                                            than a typo and it reads more
//                                            like an adjective than a text.
//   contraption    5   5   3   4   4   21  Lovely old-fashioned machine word,
//                                            warm and baffled, but less of
//                                            a laugh on its own than robit.
//   witchcraft     4   5   5   3   4   21  Very funny ("it's witchcraft!") and
//                                            very grandma, but the AI tie is
//                                            only "mysterious new tech".
//   hocuspocus     4   4   4   3   4   19  Same magic-tech lane as witchcraft,
//                                            a beat weaker on voice + tie.
//   thingamajig    5   5   3   2   3   18  Peak grandma ("that thingamajig")
//                                            but fits any subject at all —
//                                            fails criterion 4 badly.
//   doohickey      5   5   3   2   3   18  Same problem as thingamajig: warm
//                                            and baffled, zero AI tie.
//   gizmo          4   4   3   4   3   18  A machine word, but reads like a
//                                            gadget review, not a text.
//   beepboop       3   2   4   5   3   17  Robot sounds, but that's a young
//                                            person's joke, not grandma's.
//   magic          4   4   3   3   3   17  Warm and baffled, but generic and
//                                            the obvious pick.
//   scary          4   4   2   2   2   14  Grandma would text it, but about
//                                            anything; no AI tie, no joke.
//   skynet         2   1   2   5   3   13  All AI tie, no grandma at all —
//                                            she would never text this.
//
// Why "robit" wins the pairwise game:
//   - Criterion 1: it IS what she would text — a typo she would actually
//     make is explicitly in the brief ("a typo she would actually make
//     ... all count").
//   - Criterion 2: the misspelling carries the voice by itself — warm,
//     a little baffled, typing to a grandchild.
//   - Criterion 3: the joke lands with no caption — you hear her saying it.
//   - Criterion 4: "robot" is the most direct AI/machine tie available.
//   - Criterion 5: nobody's obvious pick is a misspelling, yet everyone
//     reads it instantly.
//
// Why lowercase, no punctuation, no trailing newline:
//   - Lowercase reads like a real text message, not a dictionary entry.
//   - The gate allows 1-30 chars; the file is exactly 5 bytes, which also
//     wins the size tie-break (fewer bytes places first on an exact tie).
//
// ---------------------------------------------------------------------------
// ITERATE ROUND 1 (2026-11-24, play-test as the judge) — KEEP "robit"
// 12 FRESH candidates, none from the builder's list above, scored 1-5 on the
// judge's criteria in order. Best 3 pairwise vs "robit":
//   word              C1  C2  C3  C4  C5  tot  notes
//   ----------------  --  --  --  --  --  ---  -----------------------------
//   chatty             4   5   4   4   5   22  Grandma nicknaming ChatGPT
//                                            "chatty" — warm and fresh, but
//                                            ambiguous (a talkative person)
//                                            and the AI tie is indirect:
//                                            loses to robit on C1 and C4.
//   robits             5   5   4   5   4   23  Same joke as robit, plural —
//                                            "the robits are coming" adds a
//                                            whisper of humour, but no NEW
//                                            joke, and 6 bytes loses the
//                                            size tie-break. Tied, not
//                                            CLEARLY stronger. KEEP robit.
//   knowitall          4   4   4   4   4   20  AI as the neighbourhood
//                                            know-it-all — funny, but could
//                                            be about a person; loses on C1/C4.
//   googles            4   5   4   3   4   20  "Ask the googles" — peak
//                                            grandma plural, but Google is
//                                            search, not AI. Loses on C4.
//   internets          4   5   4   2   4   19  "The internets" — very grandma,
//                                            but internet, not AI. Fails C4.
//   chatgp             4   4   3   5   3   19  Dropped-T typo of ChatGPT —
//                                            direct AI tie, but the joke is
//                                            mild and less instantly readable.
//   robbot             5   4   3   5   3   20  Double-b typo — reads like a
//                                            stutter, less cute than robit.
//   robo               4   4   2   5   3   18  Grandma shortening, but no joke
//                                            at all — just short for robot.
//   aleksa             3   4   3   3   4   17  Misspelled Alexa — smart speaker,
//                                            not AI in general. Weak C1/C4.
//   frankenstein       3   4   4   3   3   17  "It's a frankenstein" — funny
//                                            reference, 12 bytes, reads like
//                                            a movie quote, not a text.
//   whatchamacallit    4   5   3   1   3   16  Peak grandma, fits any subject.
//                                            Fails C4 outright.
//   terminator         2   2   3   5   3   15  Young person's movie reference;
//                                            grandma would never text this.
// Verdict: nothing beats "robit" clearly. "robit" stays the only candidate
// strong on all five criteria at once, and the only one whose joke (a typo
// she would actually make) is named in the brief itself.
// ---------------------------------------------------------------------------
// ITERATE ROUND 2 (2026-11-24, play-test as the judge) — KEEP "robit"
// 12 FRESH candidates, none from the builder's list or round 1's list,
// scored 1-5 on the judge's criteria in order. Angles: fresh typo lanes
// (other robot-word misspellings, ChatGPT/AI-word typos), grandma-isms
// ("the brainy box"), text-speak tied to machines.
//   word              C1  C2  C3  C4  C5  tot  notes
//   ----------------  --  --  --  --  --  ---  -----------------------------
//   chatgbt            4   5   4   5   4   22  Transposed-letter typo of
//                                            ChatGPT — the fumble screams
//                                            grandma typing, direct AI tie,
//                                            but C1 below robit (a brand
//                                            fumble, not "the word"), and
//                                            7 bytes loses the tie-break.
//   robto              5   4   3   5   4   21  Transposition typo of robot —
//                                            same joke lane as robit, less
//                                            cute, reads a bit like Roberto.
//   computar           5   5   3   4   4   21  Dropped-e typo of computer —
//                                            warm voice, but the joke is
//                                            mild (C3) and computer != AI.
//   artifishal         4   4   4   4   5   21  "Artificial" misspelled with
//                                            fish in it — funny, but alone
//                                            it doesn't say AI (needs the
//                                            "intelligence" it lost).
//   nanobot            4   3   4   5   5   21  Nana + bot pun — clever for
//                                            the reader, but it's the
//                                            entrant's pun, not her voice
//                                            (C2); reads like a tech term.
//   brainybox          4   5   4   3   5   21  "The brainy box" as one word —
//                                            peak grandma-ism, but a box
//                                            could be any gadget (C4 weak).
//   robut              5   4   3   5   3   20  Robot typo o->u — same lane
//                                            as robit, less cute, and reads
//                                            like "rebut"; "but" inside it.
//   roboot             5   4   3   5   3   20  Double-o typo — sounds like
//                                            "reboot", ambiguity hurts the
//                                            instant read (C5).
//   tinman             4   4   4   4   4   20  Her generation's robot (Oz) —
//                                            charming, but a character name,
//                                            not quite "about AI".
//   robby              4   5   3   4   4   20  She names the robot Robby —
//                                            peak grandma (she names
//                                            appliances), but the joke is
//                                            mild and it's a name, not a word.
//   clanky             4   4   3   4   4   19  How she'd describe the robot —
//                                            an adjective, no real joke.
//   whippersnapper     3   5   4   2   4   18  She'd call AI a whippersnapper
//                                            — very grandma, very funny, but
//                                            it's about a young person, and
//                                            fails C4 outright (14 bytes).
// Best 3 pairwise vs "robit" (23, 5 bytes):
//   chatgbt — first differing criterion is C1 (robit 5 vs chatgbt 4):
//     robit wins outright; 7 bytes also loses the size tie-break.
//   robto — C1 ties 5, then C2 (robit 5 vs robto 4): robit wins; same
//     joke, less cute, reads like a name.
//   computar — C1/C2 tie, then C3 (robit 4 vs computar 3): robit wins;
//     the typo joke is softer and computer is not AI.
// Verdict: nothing beats "robit" clearly — two rounds, 24 fresh candidates,
// and every challenger loses at the first criterion where it differs, or
// ties a joke "robit" already tells in fewer bytes. KEEP "robit".
// ---------------------------------------------------------------------------
// ITERATE ROUND 3 (2026-11-24, FINAL iterate round) — KEEP "robit"
// 12 FRESH candidates, none from the builder's list or rounds 1-2, scored
// 1-5 on the judge's criteria in order. Unmined lanes: her mishearing of
// tech words (rowboat, roomba, sirius), foods/objects she compares AI to
// (toaster), old-fashioned words for new things (automaton, metalman),
// what AI does to her (mindreader), text-speak (aiyaiyai).
//   word              C1  C2  C3  C4  C5  tot  notes
//   ----------------  --  --  --  --  --  ---  -----------------------------
//   rowboat            4   5   4   3   5   21  She mishears "robot" as
//                                            "rowboat" — the joke needs the
//                                            reader to reconstruct it, and
//                                            a boat is not AI (C4). Loses
//                                            C1 to robit (5 vs 4); 7 bytes.
//   roomba             4   5   4   4   4   21  She calls any robot a Roomba —
//                                            warm and real, but a brand
//                                            name for a vacuum, not the word
//                                            she'd text about AI. Loses C1.
//   toaster            4   5   4   3   5   21  "Just a fancy toaster" — peak
//                                            grandma appliance comparison,
//                                            but a toaster is not AI (C4).
//                                            Loses C1 to robit.
//   mindreader         4   4   4   4   4   20  "It reads my mind!" — what AI
//                                            does, warm and tied, but no
//                                            real joke (C3) and reads like a
//                                            description, not a text.
//   sirius             3   5   4   3   5   20  She thinks the phone lady is
//                                            called Sirius — funny and fresh,
//                                            but Siri-specific, a name, and
//                                            weak on C1/C4. 6 bytes.
//   algorhythm         3   4   4   4   5   20  "Algorithm" heard as algo-
//                                            rhythm — a known pun, but she'd
//                                            have to know "algorithm" first;
//                                            weak C1, 10 bytes.
//   automaton          4   4   3   5   4   20  The old-fashioned word for a
//                                            self-moving machine — direct AI
//                                            tie, but a dictionary word, not
//                                            a text; no joke (C3).
//   aiyaiyai           4   5   4   3   4   20  Her exclamation "ai yai yai"
//                                            at the machine — warm, funny,
//                                            contains "AI" twice, but fits
//                                            any surprise (C4) and is an
//                                            exclamation, not about AI.
//   talkingbox         4   5   3   4   4   20  "The talking box" — how she'd
//                                            describe a smart speaker, but
//                                            the joke is mild (C3) and it
//                                            reads like a label, not a text.
//   thinkingbox        4   5   3   4   4   20  Same lane as talkingbox —
//                                            warm description, mild joke,
//                                            no typo-voice to carry it.
//   metalman           4   4   3   5   4   20  Old-fashioned "metal man" —
//                                            direct machine tie, but reads
//                                            like a comic character, and
//                                            there is no joke in it (C3).
//   interweb           4   5   4   2   4   19  "The interweb" — peak grandma-
//                                            ism, but internet, not AI.
//                                            Fails C4 outright.
// Best 3 pairwise vs "robit" (23, 5 bytes):
//   rowboat — first differing criterion is C1 (robit 5 vs rowboat 4):
//     robit wins outright; 7 bytes also loses the size tie-break.
//   roomba — C1 (robit 5 vs roomba 4): robit wins; a brand name for a
//     vacuum, not the word she'd text about AI.
//   toaster — C1 (robit 5 vs toaster 4): robit wins; the appliance joke
//     is real, but a toaster is not AI and the word fits any gadget.
// Verdict: nothing beats "robit" clearly — three rounds, 36 fresh
// candidates, and every challenger still loses at the first criterion
// where it differs, or tells a joke "robit" already tells in fewer bytes.
// FINAL: entry stays "robit". KEEP.
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one word Grandma would text about AI.
const ENTRY = "robit";

function outputDir(): string {
  // The grader runs with /output; local checks set MAKEFUN_OUTPUT_DIR.
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // Exactly one word, no trailing newline, no punctuation tricks.
  writeFileSync(join(dir, "entry.txt"), ENTRY, "utf8");
}

main();
