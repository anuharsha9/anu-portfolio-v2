#!/bin/bash
cd "$(dirname "$0")/.."
rm -rf .next
exec node_modules/.bin/next dev -H localhost -p 3000
