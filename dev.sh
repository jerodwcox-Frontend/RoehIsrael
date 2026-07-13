#!/bin/bash
cd /Users/jerodcox/roeh-israel-redesign
source ~/.nvm/nvm.sh
nvm use 20 > /dev/null
exec npm run dev -- --port 5173 --strictPort
