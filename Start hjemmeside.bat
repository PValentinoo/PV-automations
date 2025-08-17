@echo off
echo Starting PV Automations website...
echo.
echo This will start the development server on http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo.
cd /d "%~dp0"
npm run dev
pause
