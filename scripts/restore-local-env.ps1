# Restore local .env from .env.secrets (never committed).
# Create .env.secrets manually with all keys from Vercel/Neon (one KEY="value" per line).
# Usage: powershell -ExecutionPolicy Bypass -File scripts/restore-local-env.ps1

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$src = Join-Path $root '.env.secrets'
$dest = Join-Path $root '.env'

if (-not (Test-Path $src)) {
  Write-Error "Missing .env.secrets — copy your Vercel/Neon variables into that file (see .env.example for keys)."
}

$content = Get-Content $src -Raw
if ($content -notmatch 'DATABASE_URL\s*=\s*"postgres') {
  Write-Error ".env.secrets must include DATABASE_URL starting with postgresql://"
}

Copy-Item $src $dest -Force
Write-Output 'Restored .env from .env.secrets (values not printed)'
