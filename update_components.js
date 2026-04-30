const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    // Replace Header
    // Some headers might have different spaces or classes, but they all start with <header class="fixed top-0
    content = content.replace(/<header\s+class="fixed top-0[\s\S]*?<\/header>/i, '<div id="app-header"></div>');

    // Replace Sidebar
    content = content.replace(/<aside\s+class="hidden lg:block[\s\S]*?<\/aside>/i, '<aside id="app-sidebar" class="hidden lg:block w-full lg:w-[280px] shrink-0"></aside>');

    // Replace Footer
    content = content.replace(/<footer\s+class="bg-brand-navy[\s\S]*?<\/footer>/i, '<div id="app-footer"></div>');

    // Replace Mobile CTA
    content = content.replace(/<div\s+class="lg:hidden fixed bottom-0[\s\S]*?<\/div>/i, '<div id="app-mobile-cta"></div>');

    // Add script tag if not exists
    if (!content.includes('components.js')) {
        content = content.replace(/<\/body>/i, '    <script src="components.js"></script>\n</body>');
    }

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${file}`);
    } else {
        console.log(`No changes for ${file}`);
    }
});
