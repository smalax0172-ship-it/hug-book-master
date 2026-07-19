# Thinking Buddy Architecture

## File structure

```text
/
├── package.json
├── server.js
├── .env.example
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── README.md
└── ARCHITECTURE.md
```

## Design overview

Thinking Buddy is a plain HTML, CSS, and JavaScript single-page app served by a small Node backend. There is no framework and no build step. The frontend handles level selection, chat rendering, progress stages, state bars, ownership testing, and Reasoning Record display. The backend owns prompt construction and calls GPT-5.6.

## Why it refuses answers

The product premise is that the tutor should verify human thought rather than complete student work. The system prompt is built around attempt before delegation: the student has to make a guess or identify a specific stuck point before the tutor extends anything. This prevents the common failure mode where an AI tutor becomes an answer generator.

The tutor can confirm factual footing and can define a vocabulary word as a tool, but it must not replace the student's sentence with its own conclusion. The student's reasoning remains the artifact being assessed.

## Why the level bar exists

CP, Honors, and AP students should not be judged against the same target. The level bar makes the pass condition explicit and fair:

- CP can pass with plain-language opposite-charge attraction.
- Honors must use polar and ion correctly and describe ion orientation.
- AP must reach the energetic or structural explanation beneath the Honors mechanism.

When the student clears the selected bar, the tutor must say so and stop moving the goalposts. Extra rigor is offered, not forced.

## Why the Record can fail

The Reasoning Record is teacher-facing evidence, not a participation trophy. It is generated from the transcript and final restatement, and it can say **Not met** when the student never reaches the selected level bar. This makes the app useful for accountability: the teacher can see what the student attempted, what gap remained, and whether the final answer was owned.

## Why Own it is closed-book

The ownership test asks whether the student could explain the idea if the AI output were deleted. If tutor output remains readable while the student restates the idea, the test measures reading rather than understanding. Entering **Own it** therefore permanently blurs and fades every tutor message, disables selecting or copying that text, and leaves the student's own reasoning trail readable. The Reasoning Record separately compares the final restatement with the complete tutor transcript and caps ownership at **Partially met** when the student repeats tutor phrasing. The fade removes the output in practice; the echo check catches what the fade misses.

## Backend decisions

The backend exposes one endpoint, `POST /api/model`, with a `mode` field for tutor or record calls. It keeps `OPENAI_API_KEY` on the server, uses GPT-5.6, retries failed model calls three times with increasing backoff, reads model responses as text before parsing JSON, and returns the actual error text on total failure.

Tutor conversation history sent to the model is capped at the last 14 turns to prevent unbounded payload growth. Record generation receives the complete sanitized transcript so it can preserve the student's literal first message and compare the final restatement against every tutor sentence.

## Frontend decisions

The interface is mobile-first because students often use phones. The chat transcript sits above a large text area and action buttons. Student and tutor messages are visually distinct. The four-stage progress strip tracks Predict, Reasoning, Own it, and Record.

Teacher signals are never shown to students. The client strips `[SIG:...]` markers from tutor text and converts them into green, red, dark red, or yellow state bars.
