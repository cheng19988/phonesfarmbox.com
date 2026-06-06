# Admin login smoke test — reads .env, never prints secrets.
# Usage: powershell -ExecutionPolicy Bypass -File scripts/p2-1c-verify.ps1 [-BaseUrl https://www.phonesfarmbox.com]

param([string]$BaseUrl = "http://localhost:3000")

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$envFile = Join-Path $root '.env'
if (-not (Test-Path $envFile)) { Write-Error "Missing .env — run scripts/restore-local-env.ps1 first" }

function Get-EnvVal([string]$key) {
  $line = Get-Content $envFile | Where-Object { $_ -match "^$key=" } | Select-Object -First 1
  if ($line -match '^[^=]+="(.*)"\s*$') { return $matches[1] }
  if ($line -match '^[^=]+=(.+)$') { return $matches[1].Trim('"') }
  return $null
}

$email = Get-EnvVal 'ADMIN_EMAIL'
$pass = Get-EnvVal 'ADMIN_PASSWORD'
if (-not $email -or -not $pass) { Write-Error "ADMIN_EMAIL / ADMIN_PASSWORD missing in .env" }

$jar = Join-Path $root '.tmp-cookies.txt'
Remove-Item $jar -ErrorAction SilentlyContinue

$loginJson = @{ email = $email; password = $pass } | ConvertTo-Json -Compress
$loginFile = Join-Path $root '.tmp-login-body.json'
Set-Content $loginFile $loginJson -NoNewline -Encoding utf8

$loginCode = curl.exe -s -c $jar -b $jar -X POST "$BaseUrl/api/auth/login" -H "Content-Type: application/json" -d "@$loginFile" -w "%{http_code}" -o (Join-Path $root '.tmp-login-res.json')
Remove-Item $loginFile -Force

if ($loginCode -ne '200') { Write-Error "Login failed HTTP $loginCode" }
$res = Get-Content (Join-Path $root '.tmp-login-res.json') -Raw
if ($res -notmatch '"ok"\s*:\s*true') { Write-Error "Login response not ok" }
Write-Output 'OK: login'

$adminHtml = curl.exe -s -b $jar -L "$BaseUrl/admin"
if ($adminHtml -notmatch 'Admin Dashboard') { Write-Error '/admin not accessible' }
foreach ($label in @('Contacts','Orders','Products')) {
  if ($adminHtml -notmatch $label) { Write-Error "Admin missing: $label" }
}
Write-Output 'OK: admin dashboard (contacts/orders/products)'

Remove-Item $jar,(Join-Path $root '.tmp-login-res.json') -ErrorAction SilentlyContinue
