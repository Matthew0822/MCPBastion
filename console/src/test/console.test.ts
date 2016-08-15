/**
 * Tests for the console modules, using the Node.js built-in test runner
 * (`node:test`) and `node:assert` — no third-party test framework.
 */

import { test } from "node:test";
import assert from "node:assert/strict";

import { parseLine, parseAuditLog } from "../audit.js";
import { aggregate, filterEvents } from "../report.js";
import { parsePolicy, globMatch } from "../policy.js";
import { renderReport, renderPolicy } from "../render.js";

const SAMPLE = [
  '{"ts_ms":4,"seq":1,"decision":"forward","reason":"allow_tool read_file","method":"tools/call","tool":"read_file","id":"1","bytes_in":110,"bytes_out":110,"redacted":[],"balanced":true,"max_depth":3}',
