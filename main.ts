// The Word You'd Delete From the Dictionary
// Entry: "bologna" — spelled "bo-log-na", pronounced "baloney".
// The word is a spelling fraud: delete it from the dictionary and
// nothing changes, because everyone already says it as if it were
// spelled "baloney". The meat and the slang survive; only the lie goes.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "bologna", "utf8");
