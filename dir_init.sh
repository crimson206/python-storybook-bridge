#!/bin/bash

# Get the basename of the current working directory
directory_to_add=$(basename "$PWD")

# Append the new directory to the PATH variable in .bashrc
echo "export PATH=\"\$PATH:$PWD\"" >> ~/.bashrc

# Reload .bashrc to apply changes
source ~/.bashrc
