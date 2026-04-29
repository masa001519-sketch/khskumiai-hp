const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    const target = 'TEL: <span class="font-en">048-000-0000</span> / FAX: <span class="font-en">048-000-0001</span>';
    const replacement = 'TEL: <span class="font-en">048-000-0000</span> / FAX: <span class="font-en">048-000-0001</span><br>\r\n                        <span class="mt-4 text-xs tracking-widest inline-block text-white/60 bg-black/20 px-3 py-1 rounded">監理団体許可番号：許2400000000 <span class="mx-3">|</span> 登録支援機関登録番号：24登-000000</span>';
    if (content.includes(target)) {
        content = content.replace(target, replacement);
        fs.writeFileSync(f, content, 'utf8');
        console.log(`Updated footer in: ${f}`);
    }
});
