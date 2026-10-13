@echo off
title UEF Landing Page Local Server
echo Dang khoi dong Web Server cho Landing Page UEF...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
