#!/bin/bash
# CypherEdge Pure-Node GitHub Push Script
# Requires ZERO Xcode / macOS system git tools
NODE="/Users/juhisingh/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"

if [ -f "$NODE" ]; then
  "$NODE" git-push.cjs "$1" "$2"
else
  node git-push.cjs "$1" "$2"
fi
