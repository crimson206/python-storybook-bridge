SCRIPT NAME: install_env.sh
PURPOSE: Creates a new Conda environment with the name of the current directory
        and allows the user to specify additional Conda packages at creation.
USAGE: 
    1. Navigate to your desired directory.
    2. Running the script generate the conda env named with the directory name.
USAGE EXAMPLES:
    CASE1: you can create a conda env named 'level2'
        cd level1/level2
        ../../install_env.sh
    CASE2: you can create a conda env named 'level1'
        cd level1
        ../install_env.sh