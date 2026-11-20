// News image entry for make.fun — news-image-20261119
// Program: copy the entry image (entry.png, 19 Nov 2026 world news)
// to the grader output directory as entry.png.
// The image is a fixed 1024x1024 PNG under 1 MiB, so both grader
// runs write exactly the same bytes. Node 22, stdlib only, no network.
import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const src = new URL('./entry.png', import.meta.url);
if (!existsSync(src)) throw new Error('entry.png missing beside main.ts');
mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, 'entry.png'));
