$content = Get-Content index.html -Raw -Encoding UTF8

# Replace diamond emoji
$content = $content -replace '<div class="card-icon">💎</div>','<div class="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg></div>'

# Replace shield emoji  
$content = $content -replace '<div class="card-icon">🛡️</div>','<div class="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>'

$content | Set-Content index.html -Encoding UTF8 -NoNewline
