@echo off
echo 🚀 Deploying MentorshipMatters to Vercel...

REM Build the project
echo 📦 Building the project...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful!
    
    REM Deploy to Vercel
    echo 🌐 Deploying to Vercel...
    call vercel --prod
    
    if %ERRORLEVEL% EQU 0 (
        echo 🎉 Deployment successful!
        echo Your site is now live on Vercel!
    ) else (
        echo ❌ Deployment failed!
    )
) else (
    echo ❌ Build failed! Please fix the errors and try again.
)

pause