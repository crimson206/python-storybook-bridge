#!/bin/bash

# 현재 디렉토리 이름을 환경 이름으로 사용
env_name=$(basename "$PWD")

# 사용자로부터 추가 명령어 받기 (예: Python 버전)
read -p "Enter any additional conda commands (e.g., python=3.8): " additional_commands

# Conda 환경 생성
conda create -n "$env_name" $additional_commands -y

# 환경을 활성화
echo "Activating environment: $env_name"
source activate $env_name

# requirements.txt가 있는지 확인하고, 있으면 pip로 설치
if [ -f "requirements.txt" ]; then
    echo "Installing dependencies from requirements.txt..."
    pip install -r requirements.txt
else
    echo "No requirements.txt found. Skipping dependency installation."
fi

# 환경 활성화 메시지
echo "Environment $env_name is now active."
