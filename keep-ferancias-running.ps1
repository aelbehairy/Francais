$ErrorActionPreference = 'SilentlyContinue'
$appDir = 'C:\Users\aelbehairy.SBG-EX\Desktop\French\WebSite\Publish\FromGithub\Ferancias'
$portOpen = Test-NetConnection -ComputerName '127.0.0.1' -Port 5555 -InformationLevel Quiet
if (-not $portOpen) {
  Start-Process -FilePath 'node.exe' -ArgumentList @('server.js') -WorkingDirectory $appDir -WindowStyle Hidden -RedirectStandardOutput 'server.out.log' -RedirectStandardError 'server.err.log'
}
