# Portfolio source audit

The supplied files were compared using SHA-256 hashes, extracted document content and worksheet values before publication. Originals in Downloads were not modified.

## Canonical documents — Attention Factory

| Work | Retained source | Decision |
| --- | --- | --- |
| Content strategy matrix | Attention Factory Content Strategy Matrix (1) (2).docx | Byte-identical to the (1) copy; one entry only. |
| Three-week calendar | attention_factory_3_week_calendar (1) (2).docx | Byte-identical to the (1) copy. The unnumbered file is an alternate draft of the same 63-post plan; retained the edited version. |
| Community tracker | COMMUNITY ENGAGEMENT TRACKING (2).xlsx | Supersedes (1): retains earlier recorded activity and adds July 21–22. Summary values reflect the additional entries. |
| TranscriptX marketing plan | TranscriptX_30_Day_Marketing_Plan_Natural.docx | Distinct strategy document; assigned to Attention Factory as instructed. |
| Meet the Builders | Meet The Builders strategy.docx | Distinct community strategy; document names Attention Factory. |

Each entry has one public HTML reading view and a download of its unchanged original. HTML views preserve document text and tables; spreadsheet views include all three sheets and saved values, with dates formatted for reading. They require no external viewer or account. These are reading views, not replicas of the Office page layout.

## Images

- Codevant 100K X screenshot added. User confirmed company ownership. Retained the more complete 100K snapshot rather than publishing the overlapping 99.1K snapshot as a second card; no reporting-period dates inferred.
- Codevant 2,056-impression LinkedIn screenshot is byte-identical to `daniel-linkedin.jpg`; reused the existing asset.
- Full TechCrier blog screenshot is byte-identical to `work-blog-list.jpg`; reused it. The cropped blog screenshot repeats the same four articles and was not added separately.
- TechCrier LinkedIn growth screenshot added under TechCrier.
- All previously displayed proof and gallery images now open in an accessible preview with a full-size link.

## Published articles

Verified the titles and Eniolami Saheed bylines on TechCrier and linked the three available article pages:

- https://www.techcrier.com/2025/12/how-to-find-and-quietly-unlink-phone.html
- https://www.techcrier.com/2025/12/10-african-startups-that-folded-in-2025.html
- https://www.techcrier.com/2025/12/bolaji-yusufs-mission-to-build-world.html

The Claude/MCP article remains visible in the original blog screenshot. No live URL was verified for it, so none was invented.

## CV

Replaced `public/Eniolami-Saheed-CV.pdf` byte-for-byte with `Eniolami-Saheed-CV (3).pdf`. All view and download links use this canonical URL.

## Grouby documents

All four supplied Grouby DOCX files have different extracted content and are retained as separate samples. The file named `Content on 3 tips to save money on grocery.docx` contains a DFC Foods vendor showcase rather than money-saving tips, so its public title follows the document content. Each sample has a public HTML reading view and an unchanged DOCX download.

## Verification

Run the production build, then `node scripts/check-portfolio-content.mjs` and `node scripts/check-responsive.mjs`. Preparation scripts are for local imports and are not required for deployment; all preview HTML and originals are checked into the public directory.
