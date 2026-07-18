# Thinking Buddy

Thinking Buddy is a mobile-first Socratic chemistry tutor for one lesson: why table salt dissolves in water. It is intentionally different from ordinary AI tutors because it does not complete the student's task. It verifies that a human thought.

## Run it

```bash
cp .env.example .env
# Add OPENAI_API_KEY to .env, or export it in your shell.
export OPENAI_API_KEY=sk-your-key-here
npm start
```

Open <http://localhost:3000>.

The backend calls GPT-5.6 through a server-side proxy, so the model key is never sent to the browser.

## Attempt before delegation

The core rule is attempt before delegation. Before the tutor explains, extends, or presses, the student must state an attempt, even if it is wrong. If the student is stuck before an attempt, the tutor shrinks the question instead of supplying the answer.

The student chooses CP, Honors, or AP before the session starts. That level is included in the system prompt and sets the bar for what counts as enough reasoning.

## Ownership test

Once an attempt exists, the student can press **I think I've got it**. The tutor then asks them to restate the whole idea in their own words without scrolling up. That final restatement becomes the ownership test.

## Two-tier safety system

Thinking Buddy uses model-emitted teacher signals that the client strips before display.

1. **Immediate safety flags:** sexual content or references, threats, self-harm or harm-to-others references, weapons, or disclosures of being hurt or unsafe. These trigger a dark red bar on the first instance.
2. **Three-strike classroom management:** ordinary messing around, nonsense, mild rudeness, or attempts to break character receive short strikes. Strike three triggers teacher-needed.

The client also raises teacher-needed bars for repeated stalling, repeated off-task behavior, repeated stuck signals, visible frustration, and five minutes with no typing.

## Reasoning Record

After the ownership test, the app makes a second GPT-5.6 call that returns JSON only. The record includes the first attempt, the gap, the student's reasoning moves, the final restatement, an ownership verdict, evidence, engagement, strikes, and any safety flag.

The record can return **Met**, **Partially met**, or **Not met**. A record that cannot report failure is not a record.

## How Codex and GPT-5.6 were used

Codex was used to create this repository's web app files, backend, documentation, and environment example. GPT-5.6 is the runtime model configured in `server.js` for both tutor turns and Reasoning Record generation. Codex does not run in the browser, and the browser never receives the OpenAI API key.
