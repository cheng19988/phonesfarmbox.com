# Merge secrets into .env without printing values.
# Usage:
#   1. Create .env.database-url (gitignored) with one line: postgresql://...
#   2. Run: powershell -ExecutionPolicy Bypass -File scripts/apply-local-env.ps1

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$envPath = Join-Path $root '.env'
$urlPath = Join-Path $root '.env.database-url'

if (-not (Test-Path $urlPath)) {
  Write-Error "Missing .env.database-url — paste your Neon connection string (one line, postgresql://...) into that file."
}

$url = (Get-Content $urlPath -Raw).Trim()
if ($url -notmatch '^postgres(ql)?://') {
  Write-Error ".env.database-url must start with postgresql:// or postgres://"
}

function Parse-EnvMap([string]$path) {
  $map = @{}
  if (-not (Test-Path $path)) { return $map }
  Get-Content $path | ForEach-Object {
    $line = $_.Trim()
    if ($line -eq '' -or $line.StartsWith('#')) { return }
    $idx = $line.IndexOf('=')
    if ($idx -lt 1) { return }
    $key = $line.Substring(0, $idx).Trim()
    $val = $line.Substring($idx + 1).Trim()
    if ($val.StartsWith('"') -and $val.EndsWith('"')) { $val = $val.Substring(1, $val.Length - 2) }
    $map[$key] = $val
  }
  return $map
}

$existing = Parse-EnvMap $envPath
$existing['DATABASE_URL'] = $url

$keys = @(
  'DATABASE_URL','JWT_SECRET','ADMIN_EMAIL','ADMIN_PASSWORD',
  'TELEGRAM_BOT_TOKEN','TELEGRAM_CHAT_ID','RESEND_API_KEY',
  'CONTACT_NOTIFY_EMAIL','CONTACT_FROM_EMAIL','TRON_API_KEY'
)

$out = @(
  '# Local environment — not committed (.gitignore)',
  '# DATABASE_URL from .env.database-url (Neon PostgreSQL)'
)
foreach ($k in $keys) {
  if ($existing.ContainsKey($k) -and $existing[$k]) {
    $escaped = $existing[$k] -replace '"','\"'
    $out += "$k=`"$escaped`""
  }
}

Set-Content -Path $envPath -Value $out -Encoding utf8
Write-Output 'Updated .env (DATABASE_URL set to postgresql; secrets not printed)'
