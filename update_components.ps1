$dir = "."
$files = Get-ChildItem -Path $dir -Filter "*.html"

foreach ($file in $files) {
    $filePath = $file.FullName
    $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
    $original = $content

    # Header
    $content = [regex]::Replace($content, '(?si)<header\s+class="fixed top-0[^>]*>.*?</header>', '<div id="app-header"></div>')

    # Sidebar
    $content = [regex]::Replace($content, '(?si)<aside\s+class="hidden lg:block[^>]*>.*?</aside>', '<aside id="app-sidebar" class="hidden lg:block w-full lg:w-[280px] shrink-0"></aside>')

    # Footer
    $content = [regex]::Replace($content, '(?si)<footer\s+class="bg-brand-navy[^>]*>.*?</footer>', '<div id="app-footer"></div>')

    # Mobile CTA
    $content = [regex]::Replace($content, '(?si)<!-- スマホ専用：画面下部固定CTA -->\s*<div class="lg:hidden fixed bottom-0.*?</div>', '<!-- スマホ固定CTA -->`r`n    <div id="app-mobile-cta"></div>')
    $content = [regex]::Replace($content, '(?si)<div class="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-brand-border shadow-\[0_-4px_10px_rgba\(0,0,0,0\.05\)\] z-50 flex h-16 pb-safe">.*?</div>', '<div id="app-mobile-cta"></div>')

    # Script tag
    if (-not $content.Contains("components.js")) {
        $content = [regex]::Replace($content, '(?i)</body\s*>', "    <script src=`"components.js`"></script>`n</body>")
    }

    if ($original -ne $content) {
        [System.IO.File]::WriteAllText($filePath, $content, [System.Text.Encoding]::UTF8)
        Write-Host "Updated $($file.Name)" -ForegroundColor Green
    } else {
        Write-Host "No changes for $($file.Name)" -ForegroundColor Yellow
    }
}
