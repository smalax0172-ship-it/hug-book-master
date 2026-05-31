# Repository Lock

This document locks the current source-of-truth structure for **Sometimes A Hug Is All I Need** and defines the rules future automation must follow before generating, editing, or validating pages.

## Canon Source of Truth Files

The following files are the authoritative canon files for story, character, object, and environment continuity:

- `01_TEXT/STORY_CANON.md` — locked story text and approved book wording.
- `00_CANON/CHILD_CANON.md` — locked child visual and continuity canon.
- `00_CANON/MOM_CANON.md` — locked mom visual and continuity canon.
- `00_CANON/ROOM_CANON.md` — locked room/environment visual and continuity canon.
- `00_CANON/LAMP_CANON.md` — locked lamp visual and continuity canon.

Rules:

- Treat these files as canonical authority over generated text, illustrations, prompts, and page plans.
- Do not rewrite, restructure, paraphrase, summarize into replacement text, or otherwise alter canon automatically.
- Any change to canon requires explicit human approval before the edit is made.
- If generated output conflicts with canon, the generated output is wrong and must be corrected.

## Reference Image Source of Truth Files

The following files are the authoritative visual reference image files:

- `02_REFERENCES/IMAGES/CHILD_Page17.png` — locked child reference image.
- `02_REFERENCES/IMAGES/MOM_Page17.png` — locked mom reference image.
- `02_REFERENCES/IMAGES/ROOM_Page17.png` — locked room reference image.
- `02_REFERENCES/IMAGES/LAMP_Page17.png` — locked neutral lamp reference image.
- `02_REFERENCES/IMAGES/LAMP_Page15.png` — locked activated lamp reference image.

The following files document and assign those references:

- `02_REFERENCES/REF_CHILD_Page17.md`
- `02_REFERENCES/REF_MOM_Page17.md`
- `02_REFERENCES/REF_ROOM_Page17.md`
- `02_REFERENCES/REF_LAMP_Page17.md`
- `02_REFERENCES/REF_LAMP_Page15.md`
- `02_REFERENCES/IMAGES/IMAGE_ASSIGNMENTS.md`
- `02_REFERENCES/IMAGES/README.md`

Rules:

- Future page generation must use the locked reference images above for visual continuity.
- Do not replace, rename, regenerate, optimize, resize, crop, overwrite, or delete locked reference images automatically.
- Do not use images from `02_REFERENCES/UPLOAD_QUEUE/` as final references; that folder is only temporary staging.
- If a reference file is missing, empty, corrupt, or ambiguous, stop and request human review instead of inventing a replacement.

## Page Map Source of Truth

The page map source of truth is:

- `03_PAGES/PAGE_MAP.md`

Supporting page-production workflow files are:

- `03_PAGES/PAGE_CHECKLIST.md`
- `03_PAGES/ILLUSTRATION_WORKFLOW.md`

Rules:

- Page generation must follow `03_PAGES/PAGE_MAP.md` before using any secondary checklist or workflow file.
- Page text must come from `01_TEXT/STORY_CANON.md` only.
- Character, room, and lamp continuity must come from the locked canon and reference files only.
- Do not create new page mappings, renumber pages, merge spreads, split spreads, or infer missing page content automatically.

## Rules for Future Edits

- Make the smallest possible edit that satisfies the approved task.
- Preserve all locked filenames, paths, and repository-relative references.
- Preserve story text exactly unless explicit human approval says otherwise.
- Preserve visual continuity for the child, mom, room, and lamp.
- Never introduce style drift, character redesigns, room redesigns, lamp redesigns, or unapproved props.
- Never treat generated content as canon until a human explicitly approves it and places it in the appropriate canon or reference file.
- Any automation must stop when source-of-truth files are missing, contradictory, incomplete, or placeholders awaiting approval.
- Reports, audits, and status notes may describe canon, but they do not replace canon.

## Files That Must Never Be Modified Automatically

The following files must not be modified by automation without explicit human approval:

- `01_TEXT/STORY_CANON.md`
- `00_CANON/CHILD_CANON.md`
- `00_CANON/MOM_CANON.md`
- `00_CANON/ROOM_CANON.md`
- `00_CANON/LAMP_CANON.md`
- `02_REFERENCES/IMAGES/CHILD_Page17.png`
- `02_REFERENCES/IMAGES/MOM_Page17.png`
- `02_REFERENCES/IMAGES/ROOM_Page17.png`
- `02_REFERENCES/IMAGES/LAMP_Page17.png`
- `02_REFERENCES/IMAGES/LAMP_Page15.png`
- `03_PAGES/PAGE_MAP.md`

If a task appears to require modifying any file in this list, stop and obtain explicit human approval before proceeding.

## Required Workflow Before Any Page Generation

Before generating, editing, or validating any page, complete this workflow in order:

1. Read `REPOSITORY_LOCK.md`.
2. Read `01_TEXT/STORY_CANON.md` and confirm the required story text exists.
3. Read the relevant files in `00_CANON/` for child, mom, room, and lamp continuity.
4. Read `03_PAGES/PAGE_MAP.md` and identify the exact page or spread being generated.
5. Confirm the required locked reference images exist in `02_REFERENCES/IMAGES/`.
6. Confirm none of the required reference images are missing, empty, corrupt, or still awaiting replacement.
7. Review `03_PAGES/PAGE_CHECKLIST.md` and `03_PAGES/ILLUSTRATION_WORKFLOW.md` for production requirements.
8. Generate or edit only the requested page or spread.
9. Validate the result against story canon, visual canon, reference images, and the page map.
10. Stop and report any blocker instead of guessing, inventing, or silently changing canon.

## CURRENT STATUS

- Canon established.
- References established.
- Page map established.
- Audit completed.
- Safe fixes completed.
