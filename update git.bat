#!/bin/bash

# Get the folder where this script lives
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd "$SCRIPT_DIR" || exit

# Check if there are changes
if [[ -n "$(git status --porcelain)" ]]; then
    git add .
    git commit -m "Auto update: $(date '+%Y-%m-%d %H:%M:%S')"
    git push
    echo "✅ Changes committed and pushed from $SCRIPT_DIR"
else
    echo "⚡ No changes to commit in $SCRIPT_DIR"
fi