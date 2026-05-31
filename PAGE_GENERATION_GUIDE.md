# Page Generation Guide

Use this checklist for every future Codex session that generates or reviews book pages. Complete the steps in order and do not generate a page until the required canon, map, and reference checks are complete.

## Required Workflow Checklist

- [ ] **1. Read `REPOSITORY_LOCK.md` first**
  - Confirm repository rules, locked content, and any explicit do-not-modify constraints before touching page work.

- [ ] **2. Read `00_CANON/CHILD_CANON.md`**
  - Confirm the child's fixed appearance, proportions, clothing, expression range, and continuity requirements.

- [ ] **3. Read `00_CANON/MOM_CANON.md`**
  - Confirm Mom's fixed appearance, proportions, clothing, expression range, and continuity requirements.

- [ ] **4. Read `00_CANON/ROOM_CANON.md`**
  - Confirm room layout, furniture placement, color palette, lighting behavior, and background continuity.

- [ ] **5. Read `00_CANON/LAMP_CANON.md`**
  - Confirm lamp appearance, placement, glow, and any page-specific lamp requirements.

- [ ] **6. Read `03_PAGES/PAGE_MAP.md`**
  - Identify the target page, page text, required scene, character presence, emotional beat, and page-specific visual notes.

- [ ] **7. Read all reference image notes**
  - Review every reference note in `02_REFERENCES/` that applies to the page, characters, room, lamp, pose, lighting, or style.
  - Check `02_REFERENCES/IMAGES/IMAGE_ASSIGNMENTS.md` and `02_REFERENCES/IMAGES/README.md` for image-to-page usage notes.

- [ ] **8. Verify visual continuity before generation**
  - Confirm the planned page matches all canon documents and reference notes.
  - Confirm character scale, facial features, clothing, poses, room geometry, lamp placement, lighting direction, mood, and color palette are consistent with prior approved material.
  - Resolve any conflict by prioritizing `REPOSITORY_LOCK.md`, then canon files, then `PAGE_MAP.md`, then reference notes.

- [ ] **9. Generate page**
  - Generate only after all required reading and continuity checks are complete.
  - Use the canon-verified page prompt, including all required page-specific details from `PAGE_MAP.md` and applicable references.

- [ ] **10. Compare generated page against canon and references**
  - Check the generated image against `CHILD_CANON.md`, `MOM_CANON.md`, `ROOM_CANON.md`, `LAMP_CANON.md`, `PAGE_MAP.md`, and all applicable reference notes.
  - Verify no unauthorized changes were introduced to character identity, wardrobe, room layout, props, lamp design, lighting, or emotional tone.
  - Note any mismatch clearly and decide whether regeneration or manual correction is required.

- [ ] **11. Record approval status**
  - Record whether the generated page is approved, conditionally approved, or rejected.
  - Include the page number, generation date, references used, known deviations, required fixes, and final approval decision.

## Approval Status Template

```markdown
## Page Approval Record

- Page number:
- Generation date:
- Canon files reviewed:
  - [ ] REPOSITORY_LOCK.md
  - [ ] 00_CANON/CHILD_CANON.md
  - [ ] 00_CANON/MOM_CANON.md
  - [ ] 00_CANON/ROOM_CANON.md
  - [ ] 00_CANON/LAMP_CANON.md
  - [ ] 03_PAGES/PAGE_MAP.md
- Reference notes reviewed:
- Visual continuity verified before generation: Yes / No
- Generated page compared against canon and references: Yes / No
- Approval status: Approved / Conditionally approved / Rejected
- Known deviations:
- Required fixes:
- Final notes:
```
