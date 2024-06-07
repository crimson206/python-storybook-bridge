#!/bin/bash

# 현재 디렉토리 이름을 환경 이름으로 사용
env_name=$(basename "$PWD")

# 사용자로부터 추가 명령어 받기 (예: Python 버전)
read -p "Enter any additional conda commands (e.g., python=3.8): " additional_commands

# Conda 환경 생성
conda create -n "$env_name" $additional_commands

# 환경 활성화 메시지
echo "To activate this environment, use:"
echo "$ conda activate $env_name"

# 환경 비활성화 메시지
echo "To deactivate an active environment, use:"
echo "$ conda deactivate"
