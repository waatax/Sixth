param([switch]$Force)
$ErrorActionPreference = 'Stop'
$examWorkspace = Split-Path $PSScriptRoot -Parent
Push-Location -LiteralPath $examWorkspace
try {
 node scripts/generateExamPdfs.js --html-only
 if ($LASTEXITCODE -ne 0) { throw 'HTML generation failed' }
 $runMarker = [DateTime]::UtcNow.Ticks
 $failedFiles = @()
 $examChrome = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
 foreach ($handout in Get-ChildItem public/downloads/html/*.html) {
  $pdfTarget = Join-Path $examWorkspace ('public/downloads/pdf/' + $handout.BaseName + '.pdf')
  if (!$Force -and (Test-Path -LiteralPath $pdfTarget) -and (Get-Item -LiteralPath $pdfTarget).Length -gt 1000 -and (Get-Item -LiteralPath $pdfTarget).LastWriteTime -ge $handout.LastWriteTime) { continue }
  $started = Get-Date
  $printArgs = @('--headless','--disable-gpu','--disable-extensions','--no-first-run','--disable-background-networking',"--user-data-dir=`"$examWorkspace/Local/pdf-job-$runMarker-$($handout.BaseName)`"",'--no-pdf-header-footer',"--print-to-pdf=`"$pdfTarget`"","`"$($handout.FullName)`"")
  $printJob = Start-Process -FilePath $examChrome -ArgumentList $printArgs -WindowStyle Hidden -PassThru
  $ready = $false
  for ($tick=0; $tick -lt 60; $tick++) {
   Start-Sleep -Milliseconds 500
   if (Test-Path -LiteralPath $pdfTarget) {
    $result = Get-Item -LiteralPath $pdfTarget
    if ($result.LastWriteTime -ge $started.AddSeconds(-1) -and $result.Length -gt 1000) { $ready=$true; break }
   }
  }
  Start-Sleep -Milliseconds 500
  $profileMarker = "*Antigravity*Sixth*Local*pdf-job-$runMarker-$($handout.BaseName)*"
  Get-CimInstance Win32_Process -Filter "Name='msedge.exe'" | Where-Object { $_.CommandLine -like $profileMarker } | ForEach-Object { Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue }
  if (!$ready) { $failedFiles += $handout.Name; Write-Warning "Retry required: $($handout.Name)" }
 }
 if ($failedFiles.Count) { throw ('Retry files: ' + ($failedFiles -join ', ')) }
 foreach ($subject in 'math','science','mandarin','social','english','arts','health_pe','integrative') {
  Copy-Item -LiteralPath "public/downloads/pdf/${subject}_6B_final.pdf" -Destination "public/downloads/pdf/${subject}_6B_graduation.pdf" -Force
 }
 node scripts/refresh-exam-manifest.mjs
} finally { Pop-Location }
