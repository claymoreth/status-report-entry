// Status Report Comedy Sprint — make.fun entry (program/v1, Node 22).
//
// Contract: write exactly ONE line (1-200 characters, no trailing newline)
// to <OUTPUT_DIR>/entry.txt, where OUTPUT_DIR is taken from the
// MAKEFUN_OUTPUT_DIR environment variable, defaulting to '/output'.
// The program needs no input files and works from any working directory.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry line: exactly 102 characters, one line, no trailing newline.
const LINE = "This week I completed 47 tasks, started 12 more, and finished none of the ones you actually asked for.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), LINE, 'utf8');
