// design_update.js
// 全HTMLファイルに styles.css リンクを挿入し、border-radius: 0 !important を削除する

const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. border-radius: 0 !important を削除
    content = content.replace(/\*\s*\{\s*border-radius:\s*0\s*!important;\s*\}/g, '/* border-radius: 0 removed by design_update.js */');

    // 2. styles.css の link タグが未挿入なら挿入
    if (!content.includes('href="styles.css"')) {
        content = content.replace(/(<head[^>]*>)/i, '$1\n    <link rel="stylesheet" href="styles.css">');
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${file}`);
});

console.log(`\nDone. Updated ${files.length} files.`);
