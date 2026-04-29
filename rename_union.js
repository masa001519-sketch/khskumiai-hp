// rename_union.js
// 全HTMLファイルの組合名を「建設未来協同組合」→「KHS協同組合」に一括置換

const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const replacements = [
    // 日本語名
    ['建設未来協同組合', 'KHS協同組合'],
    // 英語名（フッターのcopyright等）
    ['Construction Future Association', 'KHS Cooperative Association'],
    // タイトルタグ内など
    ['建設未来 協同組合', 'KHS協同組合'],
];

let totalChanges = 0;

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    replacements.forEach(([from, to]) => {
        const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = (content.match(regex) || []).length;
        if (matches > 0) {
            content = content.replace(regex, to);
            console.log(`  ${file}: "${from}" → "${to}" (${matches}箇所)`);
            totalChanges += matches;
            changed = true;
        }
    });

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`  ✓ 保存: ${file}`);
    }
});

console.log(`\n完了: 合計 ${totalChanges} 箇所を置換しました。`);
