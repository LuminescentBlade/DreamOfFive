#!/usr/bin/env bash
set -e

export BUILD_PATH="/DreamOfFive" && npm run build:gh

if [[ -d docs ]]; then
    rm -rf docs
fi
mkdir docs

cp -a out/. docs
cd docs
grep -rli '_next' * | xargs -I@ sed -i '' 's/_next/next/g' @ 
mv _next next

