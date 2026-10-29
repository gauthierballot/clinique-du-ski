@echo off
title Envoi de La Clinique du Ski sur GitHub
color 1F
cls
echo ========================================================
echo    ENVOI AUTOMATIQUE SUR GITHUB (gauthierballot)
echo ========================================================
echo.
echo Connexion a ton compte GitHub...
"C:\Program Files\GitHub CLI\gh.exe" auth login --web -h github.com -p https
echo.
echo Configuration Git...
"C:\Program Files\GitHub CLI\gh.exe" auth setup-git
cd /d "A:\clinique-du-ski"
echo.
echo Envoi des fichiers sur https://github.com/gauthierballot/clinique-du-ski ...
"C:\Users\Toyger\AppData\Local\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd\git.exe" push -u origin main
echo.
echo ========================================================
echo   FELICITATIONS ! Tous tes fichiers sont sur GitHub !
echo   Tu peux fermer cette fenetre, aller sur Vercel
echo   et cliquer sur "Deploy" !
echo ========================================================
echo.
pause
