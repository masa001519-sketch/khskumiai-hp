function renderHeader() {
    const headerContainer = document.getElementById('app-header');
    if (!headerContainer) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // helper for active class
    const getLinkClass = (path) => {
        return currentPath === path 
            ? "px-3 py-2 text-brand-gold" 
            : "px-3 py-2 text-brand-navy hover:text-brand-gold transition-colors";
    };

    headerContainer.innerHTML = `
    <header class="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-md z-50 shadow-sm border-b border-brand-border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 border-b border-brand-border/40">
                <a href="index.html" class="flex flex-col">
                    <span class="text-brand-navy font-black text-xl tracking-tight leading-none">KHS協同組合</span>
                    <span class="text-brand-gold text-[9px] font-en font-bold tracking-widest mt-0.5">NEW ERA OF HR SYSTEMS</span>
                </a>
                <nav class="hidden lg:flex items-center gap-1 text-sm font-bold">
                    <a href="training-system.html" class="${getLinkClass('training-system.html')}">育成就労制度</a><span class="text-brand-border">|</span>
                    <a href="specified-skills.html" class="${getLinkClass('specified-skills.html')}">特定技能</a><span class="text-brand-border">|</span>
                    <a href="acceptance.html" class="${getLinkClass('acceptance.html')}">受入れの流れ</a><span class="text-brand-border">|</span>
                    <a href="cases.html" class="${getLinkClass('cases.html')}">事例紹介</a><span class="text-brand-border">|</span>
                    <a href="compliance.html" class="${getLinkClass('compliance.html')}">法令遵守</a><span class="text-brand-border">|</span>
                    <a href="about.html" class="${getLinkClass('about.html')}">組合概要</a><span class="text-brand-border">|</span>
                    <a href="documents.html" class="${getLinkClass('documents.html')}">書類DL</a>
                </nav>
                <div class="hidden lg:flex items-center gap-4">
                    <a href="tel:0480000000" class="text-lg font-en font-black text-brand-navy hover:text-brand-gold transition-colors">048-000-0000</a>
                    <a href="${currentPath === 'index.html' ? '#contact' : 'index.html#contact'}" class="bg-brand-navy text-white px-5 py-2.5 font-bold text-sm hover:bg-brand-gold transition-colors shadow-md rounded-md">お問い合わせ</a>
                </div>
                <button id="mobileMenuBtn" class="lg:hidden text-brand-navy p-2"><svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button>
            </div>
            <div id="mobileMenu" class="lg:hidden hidden py-4">
                <nav class="flex flex-col gap-1 text-sm font-bold">
                    <a href="training-system.html" class="${getLinkClass('training-system.html')}">育成就労制度</a>
                    <a href="specified-skills.html" class="${getLinkClass('specified-skills.html')}">特定技能</a>
                    <a href="acceptance.html" class="${getLinkClass('acceptance.html')}">受入れの流れ</a>
                    <a href="cases.html" class="${getLinkClass('cases.html')}">事例紹介</a>
                    <a href="compliance.html" class="${getLinkClass('compliance.html')}">法令遵守</a>
                    <a href="about.html" class="${getLinkClass('about.html')}">組合概要</a>
                    <a href="documents.html" class="${getLinkClass('documents.html')}">書類DL</a>
                </nav>
            </div>
        </div>
    </header>
    `;

    // Re-attach event listener for mobile menu
    setTimeout(() => {
        document.getElementById('mobileMenuBtn')?.addEventListener('click', () => {
            document.getElementById('mobileMenu')?.classList.toggle('hidden');
        });
    }, 0);
}

function renderSidebar() {
    const sidebarContainer = document.getElementById('app-sidebar');
    if (!sidebarContainer) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // helper for active class
    const getLinkClass = (path) => {
        return currentPath === path 
            ? "px-5 py-4 border-b border-brand-light text-brand-navy font-bold bg-brand-light transition-colors flex items-center justify-between group"
            : "px-5 py-4 border-b border-brand-light text-brand-navy font-bold hover:bg-brand-light transition-colors flex items-center justify-between group";
    };

    sidebarContainer.innerHTML = `
        <div class="sticky top-24 space-y-6">
            <div class="bg-[#F5F7FA] rounded-xl border border-brand-border shadow-sm overflow-hidden">
                <div class="bg-brand-navy text-white font-bold py-4 px-5 tracking-widest font-en uppercase text-center border-b-[3px] border-brand-gold">
                    Contents
                </div>
                <nav class="flex flex-col text-sm">
                    <a href="training-system.html" class="${getLinkClass('training-system.html')}">育成就労制度<svg class="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
                    <a href="specified-skills.html" class="${getLinkClass('specified-skills.html')}">特定技能<svg class="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
                    <a href="acceptance.html" class="${getLinkClass('acceptance.html')}">受入れの流れ<svg class="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
                    <a href="cases.html" class="${getLinkClass('cases.html')}">事例紹介<svg class="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
                    <a href="compliance.html" class="${getLinkClass('compliance.html')}">法令遵守<svg class="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
                    <a href="about.html" class="${getLinkClass('about.html')}">組合概要<svg class="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg></a>
                </nav>
            </div>
            <div class="space-y-4 mt-8">
                <div class="bg-brand-navy rounded-xl p-5 text-center shadow-lg relative overflow-hidden">
                    <div class="absolute inset-0 opacity-5" style="background-image: repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 10px);"></div>
                    <h4 class="text-white font-bold mb-4 relative z-10 text-sm">外国人材の採用について<br>お気軽にご相談ください</h4>
                    <a href="${currentPath === 'index.html' ? '#contact' : 'index.html#contact'}" class="cta-button w-full !py-3 !text-sm relative z-10 mb-4 flex justify-center items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                        無料相談はこちら
                    </a>
                    <a href="tel:0480000000" class="text-white flex items-center justify-center gap-1.5 font-en font-bold text-lg relative z-10 hover:text-brand-gold transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
                        048-000-0000
                    </a>
                </div>
            </div>
        </div>
    `;
}

function renderFooter() {
    const footerContainer = document.getElementById('app-footer');
    if (!footerContainer) return;
    
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    footerContainer.innerHTML = `
    <footer class="bg-brand-navy text-white pt-16 pb-8 border-t-[12px] border-brand-gold">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
                <!-- 組合情報 -->
                <div class="col-span-2 lg:col-span-2">
                    <h2 class="text-2xl font-black mb-6 tracking-wide">KHS協同組合</h2>
                    <p class="text-white/80 text-sm leading-relaxed mb-8">
                        〒330-0000<br>
                        埼玉県さいたま市大宮区〇〇 1-2-3<br>
                        TEL: <span class="font-en">048-000-0000</span> / FAX: <span class="font-en">048-000-0001</span><br>
                        <span class="mt-4 text-xs font-bold tracking-widest inline-block text-white/60 bg-black/20 px-3 py-1 rounded-sm">監理団体許可番号：許2400000000 <span class="mx-3">|</span> 登録支援機関登録番号：24登-000000</span>
                    </p>
                    <a href="${currentPath === 'index.html' ? '#contact' : 'index.html#contact'}" class="inline-flex items-center bg-white text-brand-navy px-8 py-3 rounded-sm font-bold hover:bg-brand-gold hover:text-white transition-all shadow-md">
                        メールでお問い合わせ
                    </a>
                </div>
                
                <!-- リンク群 -->
                <div>
                    <h3 class="text-brand-gold font-bold mb-6 pb-2 border-b border-white/20">組合について</h3>
                    <ul class="space-y-4 text-sm text-white/80 font-medium">
                        <li><a href="about.html" class="hover:text-brand-gold transition-colors block">組合概要</a></li>
                        <li><a href="access.html" class="hover:text-brand-gold transition-colors block">アクセス</a></li>
                        <li><a href="recruit.html" class="hover:text-brand-gold transition-colors block">採用情報</a></li>
                    </ul>
                </div>
                
                <div>
                    <h3 class="text-brand-gold font-bold mb-6 pb-2 border-b border-white/20">事業内容</h3>
                    <ul class="space-y-4 text-sm text-white/80 font-medium">
                        <li><a href="training-system.html" class="hover:text-brand-gold transition-colors block">育成就労制度のご案内</a></li>
                        <li><a href="specified-skills.html" class="hover:text-brand-gold transition-colors block">特定技能のご案内</a></li>
                        <li><a href="faq.html" class="hover:text-brand-gold transition-colors block">よくあるご質問</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-medium">
                <div class="mb-4 md:mb-0 space-x-6">
                    <a href="privacy.html" class="hover:text-white transition-colors">プライバシーポリシー</a>
                    <a href="links.html" class="hover:text-white transition-colors">リンク集</a>
                </div>
                <p class="font-en tracking-wider">&copy; 2026 KHS Cooperative Association. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
    `;
}

function renderMobileCTA() {
    const ctaContainer = document.getElementById('app-mobile-cta');
    if (!ctaContainer) return;

    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    ctaContainer.innerHTML = `
    <div class="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-brand-border shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 flex h-16 pb-safe">
        <a href="tel:0480000000" class="flex-1 flex flex-col items-center justify-center text-brand-navy border-r border-brand-border hover:bg-gray-50 active:bg-gray-100 transition-colors">
            <svg class="w-5 h-5 mb-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/></svg>
            <span class="text-[11px] font-bold">電話相談</span>
        </a>
        <a href="${currentPath === 'index.html' ? '#contact' : 'index.html#contact'}" class="flex-1 flex flex-col items-center justify-center bg-brand-gold text-white hover:bg-[#D9A404] active:bg-[#C29204] transition-colors">
            <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            <span class="text-[11px] font-bold">無料相談</span>
        </a>
    </div>
    `;
}

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderSidebar();
    renderFooter();
    renderMobileCTA();
});
