# Hug Book Regeneration Pipeline

This workflow prepares the Hug Book for controlled one-page-at-a-time regeneration. It is documentation only; do not generate artwork from this file by itself.

## Pipeline Goals

- Preserve the locked story, character, room, lamp, and style canon.
- Always include the complete six-image locked reference set.
- Use Page 14 as the child identity standard.
- Produce exactly one page per generation request.
- Prevent drift by validating every prompt before any image generation.

## Authority Order

When instructions conflict, use this order:

1. Direct human instruction for the current task.
2. `REPOSITORY_LOCK.md`.
3. `01_TEXT/STORY_CANON.md` for approved page text.
4. Canon files in `00_CANON/`.
5. The six-image locked reference set in `02_REFERENCES/LOCKED_REFERENCE_SET.md`.
6. `03_PAGES/PAGE_MAP.md` for target page planning.
7. Page-production checklists and template files.

Generated output never becomes canon automatically.

## Required Preflight

Complete these checks before assembling a page prompt:

1. Read `REPOSITORY_LOCK.md`.
2. Read `02_REFERENCES/LOCKED_REFERENCE_SET.md` and confirm all six required files exist and are non-empty.
3. Read `00_CANON/CHILD_CANON.md`, `00_CANON/MOM_CANON.md`, `00_CANON/ROOM_CANON.md`, and `00_CANON/LAMP_CANON.md`.
4. Read `01_TEXT/STORY_CANON.md` and confirm the exact approved text for the target page exists.
5. Read `03_PAGES/PAGE_MAP.md` and identify one target page only.
6. Read `03_PAGES/PAGE_GENERATION_TEMPLATE.md` and fill one template instance for the target page.
7. Verify that the filled template includes all six references and names Page 14 as the child identity standard.
8. Stop if canon, page text, or required references are missing or contradictory.

## Prompt Assembly Sequence

For each requested page:

1. Create a fresh copy of the Page Generation Template.
2. Fill only the target page number and page-specific fields.
3. Paste the exact approved page text from `01_TEXT/STORY_CANON.md`; do not paraphrase.
4. Attach or cite all six locked references listed in `02_REFERENCES/LOCKED_REFERENCE_SET.md`.
5. State that `02_REFERENCES/IMG_2756.jpg` is the Page 14 child identity standard.
6. Add page-specific staging, pose, lamp state, and emotional beat from `03_PAGES/PAGE_MAP.md`.
7. Add negative constraints that forbid redesigns, text drift, extra pages, and extra variants.
8. Review the completed prompt against the pre-generation validation checklist below.

## Pre-Generation Validation Checklist

A prompt is ready only when every item is true:

- [ ] Exactly one target page is named.
- [ ] Exact story text is included from `01_TEXT/STORY_CANON.md`.
- [ ] All six locked references are included.
- [ ] Page 14 is explicitly named as the child identity standard.
- [ ] Child identity follows `02_REFERENCES/IMG_2756.jpg` first.
- [ ] Mom, room, and lamp continuity are preserved.
- [ ] Lamp state is specified as neutral warm, activated blue, or intentionally absent.
- [ ] Art style matches the locked watercolor style references.
- [ ] No new character design, room design, lamp design, prop system, or story text is introduced.
- [ ] The prompt forbids generating spreads, batches, alternate versions, or future pages.

## Generation Boundary

This pipeline does not itself authorize image generation. After a filled template passes validation, wait for explicit human approval to generate that one page.

## Post-Generation Review Placeholder

After a future approved generation, record:

- Page number.
- Generation date.
- Exact template version used.
- Six references confirmed.
- Canon files reviewed.
- Deviations found.
- Approval state: approved, conditionally approved, or rejected.
- Required fixes before any retry.
