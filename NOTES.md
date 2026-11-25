# NOTES — Fridge Roast: One Line, Biggest Laugh

## The winning line

> My smart fridge updated itself at 3 a.m., rebooted, and forgot it was a fridge — now it's a $3,000 tablet that keeps my food cold by accident.

- Characters: **142** (limit 200, no trailing newline)
- Bytes: **144** (one em dash, 3 bytes)
- sha256 of `/output/entry.txt`: `380def1526214fa11deaf900e14ac1e5cdba923f16d904546203d6050c8a412f`
- Determinism: `main.ts` run twice, byte-identical output both runs (same sha256).
- `main.ts` also fails loudly if the line ever exceeds 200 characters.

## Why it wins, criterion by criterion (in the judge's order)

1. **Roast of a smart fridge** — the joke is aimed squarely at the fridge itself and its
   firmware: an overnight update + reboot. Passes the on-subject gate with room to spare.
2. **Punchline lands on first read** — the turn is "forgot it was a fridge", paid off by
   "keeps my food cold by accident". One clear surprise, no parsing step required.
3. **Specific to smart fridges** — only a smart fridge updates firmware at 3 a.m. and
   reboots; the gag would not work on a toaster, a phone, or a dumb fridge.
4. **Tight wording** — 142 chars, every clause earns its place: "at 3 a.m." (the classic
   overnight-update image), "rebooted" (the mechanism), "$3,000" (the price of the
   absurdity), "by accident" (the punch). No setup the punchline does not need.
5. **Fresh angle** — avoids both banned-obvious cracks: no grocery ordering, no
   watching/spying. A fridge that updates itself into amnesia is not the first joke
   anyone reaches for.

## Candidates considered and rejected (10 drafted, head-to-head)

Winner: #1 above (revised from "updated at 3 a.m." to "updated itself at 3 a.m." —
the fridge acting on its own is funnier, and the edit also added the 200-char guard).

- #2 (108 chars) "The ice maker in my smart fridge has one job, a union rep, and a strict
  policy of never working on weekends." — Runner-up. Specific (ice maker), tight, fresh.
  Loses to #1: "has one job" is a worn joke format, and its punch is a list rather than
  a single turn.
- #3 (111 chars) "My smart fridge shows me ads for the yogurt it already told me expired,
  like a waiter upselling food poisoning." — Vivid and specific, but the waiter simile
  adds a parsing step; the punchline lands a beat later than #1's.
- #4 (108 chars) "My fridge's touchscreen froze, so now I have a $3,000 icebox that needs
  a reboot to tell me I'm out of milk." — Good "touchscreen froze" pun, but the ending
  ("tell me I'm out of milk") is a weaker payoff than "keeps my food cold by accident".
- #5 (109 chars) "My smart fridge sent me a notification that my milk expired, then asked
  me to rate the experience five stars." — Funny, but the 5-star-rating gag is generic
  app humor; less fridge-specific than #1.
- #6 (99 chars) "My fridge's ice maker produces exactly one cube a day, like it's rationing
  for a siege it invented." — Decent, but "siege it invented" is a second joke competing
  with the first; less clean than #1.
- #7 (112 chars) "The fridge's app says the ice maker is 'experiencing a moment' — it's
  been experiencing that moment since March." — Soft punch; "experiencing a moment"
  under-delivers after the setup.
- #8 (110 chars) "My fridge needs a software update to make ice, but the update needs the
  ice maker to cool the processor first." — Clever circular dependency, but needs a beat
  to parse; fails criterion 2 (lands on first read) against #1.
- #9 (123 chars) "My smart fridge updated its firmware overnight and now the ice maker only
  works if I agree to the new terms and conditions." — Same firmware territory as #1 but
  a flatter payoff; #1's "forgot it was a fridge" is the stronger turn.
- #10 (109 chars) "My fridge runs Android, takes four minutes to boot, and still thinks the
  crisper drawer is a separate device." — Three observations, no single punchline; loses
  on criterion 2 and 4.

## Lessons applied (lessons.md rules 2, 4, 7, 8, 15)

- Concrete specificity over meta framing (rule 15: our one-line-pitches entry lost by
  pitching pitching, not naming a thing — here the line names a concrete event: a 3 a.m.
  firmware update and its consequence).
- 8+ candidates drafted and self-judged head-to-head against the 5 criteria in order
  (rules 2, 4, 7), not just checked against the gate.
- Full character budget used only where the words earn their place (rule 8: winners
  cluster near the cap, but tightness is criterion 4 — 142 chars, no filler added just
  to reach 200).
