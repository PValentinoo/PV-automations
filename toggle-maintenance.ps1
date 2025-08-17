# PV Automation - Maintenance Mode Toggle
# ======================================

Write-Host "PV Automation - Maintenance Mode Toggle" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

if (Test-Path ".env") {
    $envContent = Get-Content ".env"
    
    if ($envContent -match "VITE_MAINTENANCE_MODE=true") {
        Write-Host "Current status: " -NoNewline
        Write-Host "MAINTENANCE MODE ENABLED" -ForegroundColor Red
        Write-Host ""
        Write-Host "Disabling maintenance mode..." -ForegroundColor Yellow
        
        $newContent = $envContent -replace "VITE_MAINTENANCE_MODE=true", "VITE_MAINTENANCE_MODE=false"
        Set-Content ".env" $newContent
        
        Write-Host "Maintenance mode " -NoNewline
        Write-Host "DISABLED" -ForegroundColor Green
        Write-Host " - Website is now live!" -ForegroundColor Green
    } else {
        Write-Host "Current status: " -NoNewline
        Write-Host "WEBSITE LIVE" -ForegroundColor Green
        Write-Host ""
        Write-Host "Enabling maintenance mode..." -ForegroundColor Yellow
        
        $newContent = $envContent -replace "VITE_MAINTENANCE_MODE=false", "VITE_MAINTENANCE_MODE=true"
        Set-Content ".env" $newContent
        
        Write-Host "Maintenance mode " -NoNewline
        Write-Host "ENABLED" -ForegroundColor Red
        Write-Host " - Website is now under maintenance!" -ForegroundColor Red
    }
} else {
    Write-Host ".env file not found! Creating one with maintenance mode disabled..." -ForegroundColor Yellow
    "VITE_MAINTENANCE_MODE=false" | Out-File ".env" -Encoding UTF8
    Write-Host "Maintenance mode " -NoNewline
    Write-Host "DISABLED" -ForegroundColor Green
    Write-Host " - Website is now live!" -ForegroundColor Green
}

Write-Host ""
Write-Host "Note: You need to restart your development server or redeploy for changes to take effect." -ForegroundColor Yellow
Write-Host ""
Read-Host "Press Enter to continue"
