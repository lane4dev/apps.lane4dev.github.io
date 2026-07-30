#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TEXT_SUFFIXES = {".yml", ".yaml", ".md", ".html", ".scss", ".css", ".txt"}
PLACEHOLDER = re.compile(r"REPLACE_ME_[A-Z0-9_]+")

errors: list[str] = []

for path in ROOT.rglob("*"):
    if not path.is_file():
        continue
    if any(part in {".git", "_site", "vendor", "node_modules"} for part in path.parts):
        continue
    if path.suffix.lower() not in TEXT_SUFFIXES:
        continue

    text = path.read_text(encoding="utf-8")
    for match in PLACEHOLDER.finditer(text):
        relative = path.relative_to(ROOT)
        line = text.count("\n", 0, match.start()) + 1
        errors.append(f"{relative}:{line}: unresolved {match.group(0)}")

required_paths = [
    ROOT / "index.md",
    ROOT / "_apps" / "beyond-words.md",
    ROOT / "apps" / "beyond-words" / "privacy.md",
    ROOT / "apps" / "beyond-words" / "terms.md",
    ROOT / "apps" / "beyond-words" / "account-deletion.md",
    ROOT / "apps" / "beyond-words" / "support.md",
]

for required in required_paths:
    if not required.exists():
        errors.append(f"missing required file: {required.relative_to(ROOT)}")

if errors:
    print("Site validation failed:")
    for error in errors:
        print(f"  - {error}")
    print("\nReplace every REPLACE_ME_* value before deployment.")
    sys.exit(1)

print("Site validation passed.")
