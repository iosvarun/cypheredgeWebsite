#!/bin/bash
# Standalone Git Push script that bypasses xcode-select
export PATH="/Users/juhisingh/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/git/bin:$PATH"
export GIT_EXEC_PATH="/Users/juhisingh/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/git/libexec/git-core"

echo "Pushing CypherEdge website to GitHub..."
git push -u origin main
