@echo off
title jeisson.pro
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js no esta instalado. Descargalo desde https://nodejs.org
  pause
  exit /b 1
)

if not exist ".env" (
  echo Creando .env desde .env.example...
  copy /Y ".env.example" ".env" >nul
  echo Edita .env con tu AUTH_PASSWORD y SESSION_SECRET.
  echo.
)

if not exist "node_modules\" (
  echo Instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo [ERROR] npm install fallo.
    pause
    exit /b 1
  )
)

echo.
echo Portafolio jeisson.pro
echo  Web:  http://localhost:5173
echo  API:  http://localhost:3001
echo  Login CV: http://localhost:5173/login
echo  Usuario por defecto: jeisson (ver .env)
echo.
call npm run dev

pause
