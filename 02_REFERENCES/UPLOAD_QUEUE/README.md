# Upload Queue

This folder is a temporary staging area for incoming source-of-truth image uploads.

Place uploaded reference images here only long enough to verify filenames and move them into the locked image folder.

## Expected Uploads

| Upload filename | Final locked path |
| --- | --- |
| `CHILD_Page17.png` | `02_REFERENCES/IMAGES/CHILD_Page17.png` |
| `MOM_Page17.png` | `02_REFERENCES/IMAGES/MOM_Page17.png` |
| `ROOM_Page17.png` | `02_REFERENCES/IMAGES/ROOM_Page17.png` |
| `LAMP_Page17.png` | `02_REFERENCES/IMAGES/LAMP_Page17.png` |
| `LAMP_Page15.png` | `02_REFERENCES/IMAGES/LAMP_Page15.png` |

## Handoff Process

1. Add uploaded files to this `02_REFERENCES/UPLOAD_QUEUE/` staging folder.
2. Verify each upload uses the exact expected filename.
3. Move each verified upload to its matching final locked path in `02_REFERENCES/IMAGES/`, replacing the zero-byte placeholder file.
4. Leave `02_REFERENCES/UPLOAD_QUEUE/` empty after the move is complete.

The authoritative visual references for the book are the final files in `02_REFERENCES/IMAGES/`, not copies left in this staging folder.

Future illustration work must use the images in `02_REFERENCES/IMAGES/` as the primary visual source of truth after the placeholders have been replaced.
