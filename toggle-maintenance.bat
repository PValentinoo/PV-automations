@echo off
echo PV Automation - Maintenance Mode Toggle
echo ======================================

if exist .env (
    findstr /C:"VITE_MAINTENANCE_MODE=true" .env >nul
    if %errorlevel% equ 0 (
        echo Current status: MAINTENANCE MODE ENABLED
        echo.
        echo Disabling maintenance mode...
        powershell -Command "(Get-Content .env) -replace 'VITE_MAINTENANCE_MODE=true', 'VITE_MAINTENANCE_MODE=false' | Set-Content .env"
        echo Maintenance mode DISABLED - Website is now live!
    ) else (
        echo Current status: WEBSITE LIVE
        echo.
        echo Enabling maintenance mode...
        powershell -Command "(Get-Content .env) -replace 'VITE_MAINTENANCE_MODE=false', 'VITE_MAINTENANCE_MODE=true' | Set-Content .env"
        echo Maintenance mode ENABLED - Website is now under maintenance!
    )
) else (
    echo .env file not found! Creating one with maintenance mode disabled...
    echo VITE_MAINTENANCE_MODE=false > .env
    echo Maintenance mode DISABLED - Website is now live!
)

echo.
echo Note: You need to restart your development server or redeploy for changes to take effect.
pause
