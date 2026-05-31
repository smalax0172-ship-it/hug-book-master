# Locked Reference Set for Regeneration

This document defines the six-image reference set that every regeneration prompt must attach or cite before producing a single page. It is a workflow document only; it does not approve any new generated artwork as canon.

## Required Six References

Every Page Generation Template instance must include all six references below, even when the requested page appears to need only one character or one lamp state.

| Required reference | Repository file | Required use in regeneration |
| --- | --- | --- |
| Child identity standard | `02_REFERENCES/IMG_2756.jpg` | Primary child identity standard from Page 14. Match the child's face, age, proportions, hair, eyes, pajamas, and gentle watercolor rendering. |
| Child/page composition reference | `02_REFERENCES/IMG_2792.PNG` | Secondary child/room/lamp composition reference. Use only to support continuity; Page 14 remains the identity standard. |
| Mom and child interaction reference | `02_REFERENCES/IMG_2793.PNG` | Mom appearance, warmth, pose language, scale relationship, and tender interaction with the child. |
| Page 14 style reference | `02_REFERENCES/IMG_2795.PNG` | Page 14 full-page screenshot reference for child identity, watercolor texture, caption zone, room palette, and glowing blue lamp treatment. |
| Page 17 style/reference page | `02_REFERENCES/IMG_2796.PNG` | Page 17 full-page screenshot reference for Mom, warm lamp state, room continuity, and hug/assistance tone. |
| Mom detail reference | `02_REFERENCES/IMG_2755.jpg` | Close detail for Mom's hair, face, rose-pink sweater, soft expression, and watercolor line/texture handling. |

## Child Identity Priority

Page 14 is the child identity standard. If child details differ between references, resolve the conflict in this order:

1. `02_REFERENCES/IMG_2756.jpg` for the child's face, proportions, pajamas, hair, and eyes.
2. `02_REFERENCES/IMG_2795.PNG` for the Page 14 screenshot context and style.
3. `00_CANON/CHILD_CANON.md` for written child canon.
4. Other references only when they do not alter the Page 14 child identity.

## Always-Include Rule

A regeneration prompt is incomplete unless it includes all six required references. Do not omit references because a page is simple, because a character is off-page, or because only the room/lamp is visible. The full set stabilizes identity, style, room geometry, lamp behavior, and emotional tone.

## One-Page Rule

Regenerate exactly one page per prompt/template instance. Do not create spreads, batches, alternates, contact sheets, thumbnails, or page sequences unless a human explicitly requests that separate task.

## Stop Conditions

Stop before prompt assembly or generation if any required reference file is missing, renamed, zero bytes, corrupt, inaccessible, or contradicted by an explicit human direction. Report the blocker instead of substituting another image.
