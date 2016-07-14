/**
 * Rendering helpers: turn aggregates and policies into plain-text reports.
 *
 * Output is deliberately ASCII and colour-free so it is stable across
 * terminals, easy to snapshot in tests, and safe to paste into logs.
 */

import type { Aggregate } from "./report.js";
import { sortedEntries } from "./report.js";
import type { ParsedPolicy, PolicyIssue } from "./policy.js";

function bar(count: number, max: number, width = 24): string {
  if (max <= 0) return "";
  const filled = Math.round((count / max) * width);
  return "#".repeat(filled) + ".".repeat(Math.max(0, width - filled));
}

function pad(s: string, n: number): string {
  return s.length >= n ? s : s + " ".repeat(n - s.length);
}

function padLeft(s: string, n: number): string {
  return s.length >= n ? s : " ".repeat(n - s.length) + s;
