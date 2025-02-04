#!/bin/bash

# Check if arguments are supplied
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # Loop through the arguments, up to 3
    for i in {1..3}; do
        if [ -n "${!i}" ]; then
            echo "${!i}"
        fi
    done
fi
