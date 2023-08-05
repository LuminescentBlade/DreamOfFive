#!/usr/bin/env bash
set -e

NODE_ENV='gh' npm run build

if [[ -d docs ]]; then
    rm -rf docs
fi
mkdir docs

cp -a out/. docs
