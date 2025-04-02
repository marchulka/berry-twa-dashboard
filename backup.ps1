# Backup script for PostgreSQL database on Railway
$timestamp = Get-Date -Format "yyyy-MM-dd-HH-mm"
$backupPath = ".\backups"
$filename = "db-backup-$timestamp.sql"

# Create backups directory if it doesn't exist
if (!(Test-Path -Path $backupPath)) {
    New-Item -ItemType Directory -Path $backupPath
}

# Get DATABASE_URL from Railway
$DATABASE_URL = "postgres://postgres:postgres@expressjs-postgres.railway.internal:5432"

# Create backup using pg_dump
Write-Host "Creating backup..."
pg_dump $DATABASE_URL > "$backupPath\$filename"

Write-Host "Backup created: $backupPath\$filename"

# Keep only last 5 backups
Get-ChildItem -Path $backupPath -Filter "db-backup-*.sql" | 
    Sort-Object CreationTime -Descending | 
    Select-Object -Skip 5 | 
    Remove-Item

Write-Host "Cleanup completed. Only keeping last 5 backups." 