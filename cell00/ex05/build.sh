#!/bin/bash

# Check if there are no arguments
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

# Loop through the arguments and create directories with 'ex' prefix
for arg in "$@"; do
    mkdir -p "ex$arg"
done
