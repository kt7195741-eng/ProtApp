import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

/* ── Asset Imports ── */

import galleryImg1 from '../assets/vecteezy_sustainable-energy-and-growth-concept_54358197.webp';
import galleryImg2 from '../assets/vecteezy_the-hands-holding-the-earth-and-the-icon-of-reuse-reduce_30722545.webp';
import galleryImg3 from '../assets/vecteezy_crystal-globe-icon-for-environment-social-governance_33881471.webp';
import galleryImg4 from '../assets/vecteezy_green-tropical-leaves-background-illustration_24533437.webp';
import galleryImg5 from '../assets/pexels-carolin-wenske-762365559-33705214.webp';
import galleryImg6 from '../assets/pexels-jd246-8266270.webp';
import galleryImg7 from '../assets/pexels-lorenzo-manera-686693293-34361856.webp';
import galleryImg8 from '../assets/vecteezy_hand-holding-globe-and-tree_1309844.webp';
import galleryImg9 from '../assets/wyxina-background-8653526.webp';


/* ── Intersection Observer for generic reveal ── */
const useReveal = () => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
        }, { threshold: 0.15 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
};

/* ── Count-up Hook ── */
const useCountUp = (end, duration = 2000, trigger = false) => {
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!trigger) return;
        const target = parseFloat(end);
        const isFloat = String(end).includes('.');
        const step = target / (duration / 16);
        let cur = 0;
        const id = setInterval(() => {
            cur += step;
            if (cur >= target) { setVal(target); clearInterval(id); }
            else setVal(isFloat ? parseFloat(cur.toFixed(1)) : Math.floor(cur));
        }, 16);
        return () => clearInterval(id);
    }, [trigger, end, duration]);
    return val;
};

const useInView = (opts = {}) => {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.2, ...opts });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, inView];
};

/* ── Gallery Step Intersection Hook ── */
const GalleryStep = ({ index, setActiveIndex, children }) => {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setActiveIndex(index);
        }, { rootMargin: '-45% 0px -45% 0px' });
        obs.observe(el);
        return () => obs.disconnect();
    }, [index, setActiveIndex]);

    return <div ref={ref} className="min-h-[60vh] flex flex-col justify-center py-20">{children}</div>;
};

/* ─────────────────── COMPONENT ─────────────────── */
const Home = () => {
    const { t, language } = useLanguage();
    const isEn = language === 'en';
    const [statsRef, statsVisible] = useInView();

    const [email, setEmail] = useState('');

    const stat1 = useCountUp(4.8, 2000, statsVisible);
    const stat2 = useCountUp(36.44, 2500, statsVisible);
    const stat3 = useCountUp(2050, 2000, statsVisible);
    const stat4 = useCountUp(90, 1800, statsVisible);

    const galleryImages = [
        { img: galleryImg1, title: 'Sürdürülebilir Enerji' },
        { img: galleryImg2, title: 'Geri Dönüşüm' },
        { img: galleryImg3, title: 'Küresel Standartlar' },
        { img: galleryImg4, title: 'Yeşil Doğa' },
        { img: galleryImg5, title: 'Temiz Çevre' },
        { img: galleryImg6, title: 'Doğal Yaşam' },
        { img: galleryImg7, title: 'Yenilenebilir Kaynaklar' },
        { img: galleryImg8, title: 'Gezegen Koruma' },
        { img: galleryImg9, title: 'Ekolojik Denge' },
    ];
    const marqueeImages = [...galleryImages, ...galleryImages];

    const testimonials = [
        { name: 'Ahmet Yılmaz', role: 'Sürdürülebilirlik Uzmanı', company: 'Koç Holding', text: 'CarboonIT ile emisyon verilerimizi gerçek zamanlı takip edebiliyoruz.', img: 'https://i.pravatar.cc/150?img=11' },
        { name: 'Mehmet Kaya', role: 'Proje Asistanı', company: 'EnerjiTech A.Ş.', text: 'Raporlama sürecimiz %70 kısaldı. Harika bir platform.', img: 'https://i.pravatar.cc/150?img=12' },
        { name: 'Zeynep Arslan', role: 'Çevre Mühendisi', company: 'Arçelik', text: 'SKDM uyumu için ihtiyacımız olan tek araç.', img: 'https://i.pravatar.cc/150?img=5' },
        { name: 'Ali Demir', role: 'Veri Analisti', company: 'Zorlu Enerji', text: 'Karbon vergileri konusunda bizi bir adım öne taşıdı.', img: 'https://i.pravatar.cc/150?img=14' },
        { name: 'Fatma Şahin', role: 'Operasyon Sorumlusu', company: 'EnerjiSa', text: 'Kullanımı çok kolay, raporları çok net.', img: 'https://i.pravatar.cc/150?img=9' },
        { name: 'Burak Öztürk', role: 'Danışman', company: 'McKinsey TR', text: 'Müşterilerimize en çok önerdiğimiz karbon platformu.', img: 'https://i.pravatar.cc/150?img=12' },
    ];
    // Duplicate testimoials for seamless infinite scroll
    const carouselItems = [...testimonials, ...testimonials];

    const pricingFeatures = [
        { label: 'Sera Gazı Kategorileri', tooltip: 'Sistemde hesaplanabilen sera gazı kategorileri ve kapsamlarıdır.' },
        { label: 'Azami Şirket Adedi', tooltip: 'Platforma tanımlayabileceğiniz maksimum yasal varlık ve şirket sayısıdır.' },
        { label: 'Tesis Adedi', tooltip: 'İşletmenize ait emisyonları hesaplanacak fiziksel lokasyonların (fabrika, ofis vb.) toplam sınırıdır.' },
        { label: 'Kullanıcı Adedi', tooltip: 'Sistemde tanımlanabilen azami kullanıcı sayısıdır. Her bir kullanıcı kendi kullanıcı adı ve parolası ile yetki tanımlamaları içindeki emisyonları yönetebilir veya görüntüleyebilir.' },
        { label: 'Standartlara Uygun Raporlama', tooltip: 'Çıktıların ISO 14064, SKDM ve GHG protokollerine tam uyumlu olması.' },
        { label: 'Hedef Belirleme', tooltip: 'Bilimsel temelli (SBTi) emisyon azaltım ve Net Sıfır hedefleri kurgulama.' },
        { label: 'Kanıt Dokümanı Yükleme', tooltip: 'Hesaplamalara dayanak olan belgeleri sisteme güvenle yükleme ve arşivleme.' },
        { label: 'Karbon Ofsetleme', tooltip: 'Sertifikalı projelerden ofsetleme yaparak nötrleme işlemlerinin yönetimi.' },
        { label: 'Toplu Veri Yükleme', tooltip: 'Excel / CSV şablonları üzerinden saniyeler içinde binlerce giriş aktarma.' },
        { label: 'Senaryo Analizi', tooltip: 'Farklı yatırımların (örn. GES) emisyonlara etkisini önceden analiz etme.' },
        { label: 'Konsolide Raporlama', tooltip: 'Tüm şirket/tesislerin verisini kurumsal seviyede entegre biçimde çekme.' },
        { label: 'API Desteği', tooltip: 'ERP (SAP vs.) sistemlerinden otomatik veri aktarımı sağlayan REST API.' },
        { label: 'Eğitim', tooltip: 'Platform yetkinliği kazanmanız için uygulamalı platform eğitimi.' }
    ];

    const handleSubscribe = (e) => { e.preventDefault(); setEmail(''); };

    return (
        <div className="flex flex-col text-[#111]">
            <style>{`
                .stagger-target { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
                .reveal.visible .stagger-target:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
                .reveal.visible .stagger-target:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
                .reveal.visible .stagger-target:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
            `}</style>

            {/* ═══════════ 1. HERO (Parallax & Motion) ═══════════ */}
            <section className="relative min-h-[85vh] flex items-center overflow-hidden" style={{ marginTop: 0, paddingTop: 0, top: 0 }}>
                {/* Parallax Background */}
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-fixed bg-cover bg-center"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1920')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f4]/95 via-[#f8f8f4]/80 to-[#f8f8f4]/30" />
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-32 pb-20">
                    <div className="max-w-4xl">
                        {/* Animated Label */}
                        <div className="section-label animate-fade-in-up">
                            <span className="dot" />
                            <span>{t('corp_hero_label')}</span>
                        </div>

                        {/* Snap-in Headline Words */}
                        <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-8">
                            <span className="inline-block animate-snapIn delay-100">{t('corp_hero_line1')}</span><br />
                            <span className="inline-block animate-snapIn delay-200 font-serif italic text-[#0a3d2e]">{t('corp_hero_line2')}</span><br />
                            <span className="inline-block animate-snapIn delay-300">{t('corp_hero_line3')}</span>
                        </h1>

                        {/* Slide-Up Subtitle */}
                        <p className="text-lg text-gray-500 max-w-xl mb-10 leading-relaxed animate-slideUpFade" style={{ animationDelay: '0.6s' }}>
                            {t('corp_hero_subtitle')}
                        </p>

                        {/* Pop-In CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <a href="#what-is-carbonit" className="btn-primary animate-popIn" style={{ animationDelay: '0.9s' }}>
                                {t('corp_hero_cta1')}
                            </a>
                            <a href="#demo-section" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#111] font-bold text-sm border-2 border-gray-200 hover:border-[#111] transition-all hover:scale-105 shadow-lg animate-popIn" style={{ animationDelay: '1.0s' }}>
                                {t('corp_hero_cta2')}
                            </a>
                        </div>
                    </div>
                </div>

            </section>

            {/* ═══════════ 2. FAST MARQUEE TICKER ═══════════ */}
            <section className="bg-[#0a3d2e] py-5 overflow-hidden z-20 relative shadow-xl shadow-black/10">
                <div className="marquee-track cursor-default">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-white/90 whitespace-nowrap px-4">
                            KARBON TAKİP &nbsp;✦&nbsp; SÜRDÜRÜLEBİLİRLİK &nbsp;✦&nbsp; EMİSYON HESAPLAMA &nbsp;✦&nbsp; ÇEVRE DOSTU GELECEK &nbsp;✦&nbsp; NET SIFIR 2050 &nbsp;✦&nbsp;&nbsp;
                        </span>
                    ))}
                </div>
            </section>

            {/* ═══════════ 3. DEMO TALEBİ CTA ═══════════ */}
            <section id="demo-section" className="relative overflow-hidden bg-white pt-20 lg:pt-28 pb-10 z-10">
                {/* Diagonal background split */}
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#e6f2e6]/60 to-transparent [clip-path:polygon(20%_0%,100%_0,100%_100%,0%_100%)] z-0"></div>

                <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">

                        {/* Left Side: Text & Button */}
                        <div className="lg:w-1/2">
                            <RevealLeft delay={0}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-[#111] mb-6">
                                    {isEn ? "Take Control of Your Corporate Carbon Footprint" : "Kurumsal Karbon Ayak İzinizi Kontrol Altına Alın"}
                                </h2>
                            </RevealLeft>
                            <RevealLeft delay={0.1}>
                                <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed">
                                    {isEn ? "Carbon emission management and reporting is now much easier with CarboonIT." : "CarboonIT ile karbon emisyon yönetimi ve raporlaması artık çok daha kolay."}
                                </p>
                            </RevealLeft>
                            <RevealLeft delay={0.2}>
                                <div>
                                    <Link to="/demo" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#22c55e] hover:bg-[#1ea750] text-[#0a3d2e] font-bold text-lg transition-transform hover:scale-105 shadow-xl shadow-[#22c55e]/20">
                                        {isEn ? "REQUEST A DEMO" : "DEMO TALEBİ GÖNDER"}
                                    </Link>
                                </div>
                            </RevealLeft>
                        </div>

                        {/* Right Side: Floating Dashboard Mockup */}
                        <RevealRight delay={0.2} className="lg:w-1/2 w-full">
                            <div className="animate-floatBob bg-white rounded-[24px] shadow-2xl shadow-[#0a3d2e]/10 border border-gray-100 overflow-hidden relative group hover:scale-[1.02] transition-transform duration-500">
                                {/* Browser Toolbar */}
                                <div className="h-10 bg-gray-50/80 border-b border-gray-100 flex items-center px-5 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>

                                <div className="flex h-[380px]">
                                    {/* Sidebar */}
                                    <div className="w-40 bg-[#0a3d2e] p-5 flex flex-col gap-4">
                                        <div className="w-20 h-5 bg-white/20 rounded mb-4"></div>
                                        {['Anasayfa', 'Veri Girişi', 'Raporlama', 'Senaryolar', 'Yönetim', 'Destek'].map(item => (
                                            <div key={item} className="text-white/60 text-xs font-bold hover:text-white hover:translate-x-1 transition-all cursor-pointer">{item}</div>
                                        ))}
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="flex-1 p-8 bg-gray-50/50 flex flex-col gap-6 overflow-hidden">
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Gösterge Paneli</div>

                                        {/* Stat Grid */}
                                        <div className="grid grid-cols-4 gap-4">
                                            <div className="bg-blue-50/80 border border-blue-100/50 rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                                                <div className="text-xs text-blue-600 font-bold mb-1">CO₂</div>
                                                <div className="text-xl font-black text-blue-900">12K</div>
                                            </div>
                                            <div className="bg-red-50/80 border border-red-100/50 rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                                                <div className="text-xs text-red-600 font-bold mb-1">CH₄</div>
                                                <div className="text-xl font-black text-red-900">4.2K</div>
                                            </div>
                                            <div className="bg-yellow-50/80 border border-yellow-100/50 rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                                                <div className="text-xs text-yellow-600 font-bold mb-1">N₂O</div>
                                                <div className="text-xl font-black text-yellow-900">850</div>
                                            </div>
                                            <div className="bg-purple-50/80 border border-purple-100/50 rounded-xl p-4 hover:-translate-y-1 hover:shadow-md transition-all cursor-default">
                                                <div className="text-xs text-purple-600 font-bold mb-1">HFC</div>
                                                <div className="text-xl font-black text-purple-900">120</div>
                                            </div>
                                        </div>

                                        {/* Fake Chart */}
                                        <div className="bg-white border border-gray-100 rounded-xl p-5 flex-1 flex flex-col shadow-sm">
                                            <div className="text-xs font-bold text-gray-400 mb-auto">Zamana Göre Emisyonlar</div>
                                            <div className="flex items-end h-[100px] gap-3 px-2 pb-2 border-b border-gray-100">
                                                <div className="flex-1 bg-[#0a3d2e]/20 hover:bg-[#0a3d2e] hover:scale-y-110 origin-bottom cursor-pointer rounded-t-md transition-all" style={{ height: '40%' }}></div>
                                                <div className="flex-1 bg-[#0a3d2e]/30 hover:bg-[#0a3d2e] hover:scale-y-110 origin-bottom cursor-pointer rounded-t-md transition-all" style={{ height: '60%' }}></div>
                                                <div className="flex-1 bg-[#0a3d2e]/40 hover:bg-[#0a3d2e] hover:scale-y-110 origin-bottom cursor-pointer rounded-t-md transition-all" style={{ height: '35%' }}></div>
                                                <div className="flex-1 bg-[#0a3d2e] hover:bg-[#0a3d2e] hover:scale-y-110 origin-bottom cursor-pointer rounded-t-md transition-all" style={{ height: '80%' }}></div>
                                                <div className="flex-1 bg-[#0a3d2e]/50 hover:bg-[#0a3d2e] hover:scale-y-110 origin-bottom cursor-pointer rounded-t-md transition-all" style={{ height: '50%' }}></div>
                                                <div className="flex-1 bg-[#0a3d2e]/40 hover:bg-[#0a3d2e] hover:scale-y-110 origin-bottom cursor-pointer rounded-t-md transition-all" style={{ height: '70%' }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </RevealRight>
                    </div>
                </div>
            </section>

            {/* ═══════════ 2.5. WHAT IS CARBONIT SECTION ═══════════ */}
            <section id="what-is-carbonit" className="py-24 relative overflow-hidden bg-white">
                {/* Decorative Ambient Shapes */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#22c55e]/10 blur-[120px] rounded-full"></div>
                    <div className="absolute top-40 -left-60 w-[800px] h-[800px] bg-[#0a3d2e]/5 blur-[120px] rounded-full"></div>
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a3d2e05_1px,transparent_1px),linear-gradient(to_bottom,#0a3d2e05_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">

                    {/* Header */}
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <Reveal delay={0}>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e6f2e6] border border-[#aaddaa] text-[#0a3d2e] text-xs uppercase tracking-widest font-bold mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                                {isEn ? "About Us" : "Hakkımızda"}
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-tight mb-6">
                                {t('corp_hero_btn_what_is')}
                            </h2>
                        </Reveal>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                        {/* Left Content */}
                        <div className="lg:col-span-7">
                            <RevealLeft delay={0.1}>
                                <div className="rounded-[40px] bg-linear-to-br from-[#0a3d2e] via-[#0d4f3b] to-[#11694f] p-8 md:p-12 shadow-2xl shadow-[#0a3d2e]/20 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-40 mix-blend-overlay"></div>
                                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#22c55e]/30 rounded-full blur-[100px] group-hover:bg-[#22c55e]/50 transition-colors duration-500"></div>
                                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>

                                    <div className="relative z-10 text-white font-medium leading-relaxed">
                                        <p className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                            {t('corp_what_is_carbonit_para1').split('\n')[0]}
                                        </p>
                                        <p className="text-lg lg:text-xl text-white/90">
                                            {t('corp_what_is_carbonit_para1').split('\n').slice(1).join('\n')}
                                        </p>
                                        <p className="mt-8 text-white/70">
                                            {t('corp_what_is_carbonit_para2')}
                                        </p>
                                    </div>
                                </div>
                            </RevealLeft>
                        </div>

                        {/* Right Content: Glassmorphic Cards for Points */}
                        <div className="lg:col-span-5 relative">
                            {/* Connective Line */}
                            <div className="absolute left-13 top-10 bottom-10 w-0.5 bg-linear-to-b from-[#22c55e] via-[#22c55e]/30 to-transparent hidden sm:block"></div>

                            <div className="space-y-6">
                                {[
                                    t('corp_what_is_carbonit_point1'),
                                    t('corp_what_is_carbonit_point2'),
                                    t('corp_what_is_carbonit_point3')
                                ].map((point, index) => {
                                    const parts = point.split(' ');
                                    const emoji = parts[0];
                                    const text = parts.slice(1).join(' ');
                                    return (
                                        <RevealRight key={index} delay={0.2 + (index * 0.1)}>
                                            <div className="group relative bg-white rounded-3xl p-6 lg:p-8 shadow-xl shadow-[#0a3d2e]/5 border border-gray-100 hover:border-[#22c55e]/30 hover:shadow-2xl hover:shadow-[#22c55e]/10 transition-all duration-300 transform hover:-translate-y-1 sm:ml-16 overflow-hidden">
                                                {/* Subdued Glow Background */}
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbf6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                                <div className="relative flex items-center gap-5">
                                                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#f4fbf6] border border-[#e6f2e6] flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform duration-300 group-hover:bg-white relative z-10">
                                                        {emoji}
                                                    </div>
                                                    <p className="font-bold text-[#111] text-lg lg:text-xl group-hover:text-[#0a3d2e] transition-colors">{text}</p>
                                                </div>
                                                {/* Connector Node */}
                                                <div className="absolute left-[-4.2rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-4 border-[#22c55e] hidden sm:block group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                                            </div>
                                        </RevealRight>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </section>



            {/* ═══════════ 4. MODERN IMAGE ACCORDION ═══════════ */}
            <section className="bg-white bg-noise pt-16 lg:pt-24 pb-20 relative">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-12 z-10 relative">
                    <Reveal delay={0}>
                        <div className="text-center mb-14">
                            <div className="section-label justify-center">
                                <span className="dot" /><span>Projelerimiz & İlham</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-[#111] mt-4">Sürdürülebilir Geleceğe Bakış</h2>
                            <p className="text-lg text-gray-500 mt-3 max-w-xl mx-auto">Çevre dostu projelerimizden ve sürdürülebilirlik yolculuğumuzdan kareler</p>
                        </div>
                    </Reveal>

                    <div className="accordion-gallery h-[400px] md:h-[500px]">
                        {galleryImages.map((item, i) => (
                            <div key={i} className="accordion-card group">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-full object-cover transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <h3 className="text-white font-bold text-lg md:text-xl whitespace-nowrap opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Seamless Gradient to Pricing (#f0f8ff) */}
                <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-b from-transparent to-[#f0f8ff] pointer-events-none z-0"></div>
                <svg className="absolute bottom-0 left-0 w-full h-[60px] md:h-[100px] pointer-events-none z-0" preserveAspectRatio="none" viewBox="0 0 1440 120" fill="#f0f8ff">
                    <path d="M0,120 L1440,120 L1440,60 C960,180 480,-60 0,60 Z" />
                </svg>
            </section>

            {/* ═══════════ 5. PRICING PLANS (QuickCarbon White Cards Layout) ═══════════ */}
            <section id="pricing-section" className="bg-[#f0f8ff] pt-24 pb-10 lg:pt-32 relative z-20">
                <Reveal delay={0}>
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center mb-16 relative z-10">
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#111]">{isEn ? "Simple plans for serious business" : "Ciddi işler için basit planlar"}</h2>
                        <p className="text-lg text-gray-500 mt-4">{isEn ? "Choose the plan that suits you best" : "Size en uygun planı seçin"}</p>
                    </div>
                </Reveal>

                <div className="max-w-[1400px] mx-auto px-4 overflow-x-auto pb-10 relative z-10">
                    <div className="min-w-0 lg:min-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Headers Card */}
                        <Reveal delay={0.1} className="bg-white rounded-[32px] p-8 shadow-sm flex-col relative z-50 hidden lg:flex">
                            <div className="h-24 flex items-center justify-center border-b border-gray-100 mb-6">
                                <h3 className="text-[#0a3d2e] font-black text-2xl tracking-tighter">CarboonIT</h3>
                            </div>
                            <div className="flex-1 flex flex-col space-y-6">
                                {pricingFeatures.map((feat, i) => (
                                    <div key={i} className={`text-[13px] font-bold text-gray-400 flex items-center justify-between relative group ${i === 0 ? 'h-10' : 'h-8'}`}>
                                        <span>{feat.label}</span>
                                        <div className="text-gray-300 hover:text-blue-500 cursor-help w-4 h-4 rounded-full border border-current flex items-center justify-center text-[10px] font-black transition-colors" title={feat.label}>
                                            ?
                                        </div>
                                        {/* Dropdown Tooltip */}
                                        <div className="absolute left-[calc(100%+15px)] top-1/2 -translate-y-1/2 w-64 bg-white border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] rounded-2xl p-4 text-[12.5px] font-medium text-gray-600 leading-relaxed opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-100 pointer-events-none translate-x-2 group-hover:translate-x-0">
                                            {feat.tooltip}
                                            {/* Left Arrow */}
                                            <div className="absolute top-1/2 -translate-y-1/2 -left-2 w-4 h-4 bg-white border-l border-b border-gray-100 transform rotate-45"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        {/* BASIC Card */}
                        <Reveal delay={0.2} className="bg-white rounded-[32px] p-8 shadow-lg flex flex-col border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-24 flex flex-col items-center justify-center border-b border-gray-100 mb-6 relative">
                                <h3 className="text-[#3b82f6] font-black text-xl tracking-wider">BASIC</h3>
                            </div>
                            <div className="flex-1 flex flex-col space-y-6 text-center">
                                <div className="flex items-center justify-center h-10 w-full relative group">
                                    <div className="flex flex-col leading-[1.3]">
                                        <span className="text-[10px] font-black text-gray-600">ISO 14064-1:2018: Kategori 1-2</span>
                                        <span className="text-[10px] font-bold text-gray-400">GHG Protokolü: Kapsam 1-2</span>
                                    </div>
                                </div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">1</div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">1*</div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">1*</div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CrossIcon /></div>
                                <div className="flex justify-center h-8"><CrossIcon /></div>
                                <div className="flex justify-center h-8"><CrossIcon /></div>
                                <div className="flex justify-center h-8"><CrossIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                            </div>
                            <Link to="/demo" className="mt-8 block w-full py-3 rounded-full bg-blue-50 text-[#3b82f6] font-bold hover:bg-[#3b82f6] hover:text-white transition text-center">{t('corp_pricing_select')}</Link>
                        </Reveal>

                        {/* PREMIUM Card */}
                        <Reveal delay={0.3} className="bg-white rounded-[32px] p-8 shadow-2xl flex flex-col border border-[#22c55e]/30 relative transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-24 flex flex-col items-center justify-center border-b border-gray-100 mb-6 relative">
                                <h3 className="text-[#22c55e] font-black text-xl tracking-wider">PREMIUM</h3>
                            </div>
                            <div className="flex-1 flex flex-col space-y-6 text-center">
                                <div className="flex items-center justify-center h-10 w-full relative group">
                                    <div className="flex flex-col leading-[1.3]">
                                        <span className="text-[10px] font-black text-gray-600">ISO 14064-1:2018: Kategori 1-2-3-4-5-6</span>
                                        <span className="text-[10px] font-bold text-gray-400">GHG Protokolü: Kapsam 1-2-3</span>
                                    </div>
                                </div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">1</div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">2*</div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">2*</div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CrossIcon /></div>
                                <div className="flex justify-center h-8"><CrossIcon /></div>
                                <div className="flex justify-center h-8"><CrossIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                            </div>
                            <Link to="/demo" className="mt-8 block w-full py-3 rounded-full bg-[#22c55e] text-white font-bold hover:bg-[#1ea750] transition shadow-lg shadow-[#22c55e]/30 text-center">{t('corp_pricing_select')}</Link>
                        </Reveal>

                        {/* ENTERPRISE Card */}
                        <Reveal delay={0.4} className="bg-white rounded-[32px] p-8 shadow-lg flex flex-col border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="h-24 flex flex-col items-center justify-center border-b border-gray-100 mb-6 relative">
                                <h3 className="text-[#ec4899] font-black text-xl tracking-wider">ENTERPRISE</h3>
                            </div>
                            <div className="flex-1 flex flex-col space-y-6 text-center">
                                <div className="flex items-center justify-center h-10 w-full relative group">
                                    <div className="flex flex-col leading-[1.3]">
                                        <span className="text-[10px] font-black text-gray-600">ISO 14064-1:2018: Kategori 1-2-3-4-5-6</span>
                                        <span className="text-[10px] font-bold text-gray-400">GHG Protokolü: Kapsam 1-2-3</span>
                                    </div>
                                </div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">1*</div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">3*</div>
                                <div className="text-[13px] font-bold text-gray-600 flex items-center justify-center h-8">3*</div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                                <div className="flex justify-center h-8"><CheckIcon /></div>
                            </div>
                            <Link to="/demo" className="mt-8 block w-full py-3 rounded-full bg-pink-50 text-[#ec4899] font-bold hover:bg-[#ec4899] hover:text-white transition text-center">{t('corp_pricing_demo_req')}</Link>
                        </Reveal>

                    </div>
                    <Reveal delay={0.5}>
                        <p className="text-xs text-gray-400 mt-8 text-center">{isEn ? "* Additional companies, facilities, and users are subject to an extra fee." : "* İlave her şirket, tesis ve kullanıcı ek ücrete tabidir."}</p>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════ 6. VIDEO SHOWCASE ═══════════ */}
            <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                    <Reveal delay={0.1}>
                        <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl shadow-black/15 border border-gray-100">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src="/videocarbon.mp4" type="video/mp4" />
                                {isEn ? "Your browser does not support the video tag." : "Tarayıcınız video etiketini desteklemiyor."}
                            </video>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ═══════════ 6. TESTIMONIALS (Left-Scroll Carousel) ═══════════ */}
            <section className="pt-10 lg:pt-16 pb-24 lg:pb-32 bg-linear-to-b from-[#f0f8ff] to-[#f6faf6] overflow-hidden">
                <Reveal delay={0}>
                    <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-16 text-center">
                        <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-[#111]">{isEn ? "What Our Clients Say?" : "Müşterilerimiz Ne Diyor?"}</h2>
                    </div>
                </Reveal>

                {/* Carousel Wrapper */}
                <div className="flex w-fit animate-scrollLeftCarousel gap-6 px-6 relative z-10">
                    {carouselItems.map((item, i) => (
                        <Reveal key={i} delay={parseFloat((i * 0.1).toFixed(1))} className="w-[400px] bg-white rounded-[24px] border border-[#aaddaa]/30 p-8 shrink-0 flex flex-col justify-between shadow-xl shadow-black/5">
                            <p className="text-[#333] text-lg font-serif italic mb-8 leading-relaxed">"{item.text}"</p>
                            <div className="flex items-center gap-4 mt-auto">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-12 h-12 rounded-full border border-gray-200"
                                />
                                <div>
                                    <p className="font-bold text-sm text-[#111]">{item.name}</p>
                                    <p className="text-[#0a3d2e] font-semibold text-xs">{item.role}</p>
                                    <p className="text-gray-400 text-xs">{item.company}</p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ═══════════ 7. NEW SLEEK NEWSLETTER ═══════════ */}
            <section className="pt-20 lg:pt-28 pb-40 relative bg-[#f6faf6] flex justify-center px-4 md:px-10 overflow-hidden">
                {/* Glossy Abstract Spheres (Decorative) */}
                <div className="absolute top-0 right-10 w-96 h-96 bg-[#22c55e]/20 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#0a3d2e]/30 blur-[100px] rounded-full pointer-events-none"></div>

                <Reveal delay={0} className="w-full max-w-[1200px] rounded-[40px] bg-linear-to-br from-[#0a3d2e] via-[#0d4f3b] to-[#11694f] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-[#0a3d2e]/30 flex flex-col lg:flex-row items-center gap-12 group z-20">
                    {/* Glass Pattern Overlay */}
                    <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-40 mix-blend-overlay"></div>
                    <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-black/40 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Left Column: Typography */}
                    <div className="relative z-10 lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#aaddaa] text-xs uppercase tracking-widest font-bold mb-6 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                            {isEn ? "Newsletter Subscription" : "Bülten Aboneliği"}
                        </div>
                        <h3 className="text-4xl lg:text-[3.2rem] font-black text-white mb-6 tracking-tight leading-[1.1]">
                            CarbonIT <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#22c55e] to-[#aaddaa]">{isEn ? "Stay Informed" : "Haberin Olsun"}</span>
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
                            {isEn ? "Be the first to know about our sustainability solutions, regulatory updates, and new features." : "Sürdürülebilirlik çözümlerimizden, mevzuat güncellemelerinden ve yeni özelliklerden ilk sen haberdar ol."}
                        </p>
                    </div>

                    {/* Right Column: Form */}
                    <div className="relative z-10 lg:w-1/2 w-full max-w-md mx-auto lg:ml-auto mt-6 lg:mt-0">
                        <form onSubmit={handleSubscribe} className="bg-white/10 p-2 pl-6 rounded-full border border-white/20 backdrop-blur-xl flex flex-col sm:flex-row gap-2 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] ring-4 ring-white/5 focus-within:ring-white/10 overflow-hidden transition-all">
                            <input
                                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                                placeholder={isEn ? "Your email address..." : "E-posta adresiniz..."}
                                className="flex-1 bg-transparent border-none text-white placeholder-white/50 focus:outline-none focus:ring-0 text-base font-medium min-w-0"
                            />
                            <button type="submit" className="bg-[#22c55e] hover:bg-[#1ea750] text-[#0a3d2e] font-black px-8 py-4 sm:py-3.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#22c55e]/20 text-lg sm:text-base shrink-0 flex items-center justify-center gap-2">
                                {isEn ? "Subscribe to Newsletter" : "Bültene Kaydol"}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </form>
                        <p className="mt-5 text-xs text-white/40 text-center lg:text-left flex items-center justify-center lg:justify-start gap-1.5 ml-2">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                            {isEn ? "We don't send spam, your data is secure." : "Spam göndermiyoruz, verileriniz güvende."}
                        </p>
                    </div>
                </Reveal>
            </section>
        </div>
    );
};

/* ── Reusable Component Wrappers & Icons ── */
export const useScrollReveal = (options = {}) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.15, ...options });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [options]);
    return ref;
};

export const Reveal = ({ children, className = '', delay = 0 }) => {
    const ref = useScrollReveal();
    return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
};

export const RevealLeft = ({ children, className = '', delay = 0 }) => {
    const ref = useScrollReveal();
    return <div ref={ref} className={`reveal-left ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
};

export const RevealRight = ({ children, className = '', delay = 0 }) => {
    const ref = useScrollReveal();
    return <div ref={ref} className={`reveal-right ${className}`} style={{ transitionDelay: `${delay}s` }}>{children}</div>;
};


const CheckIcon = () => (
    <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-[#22c55e] mx-auto border border-green-200 shadow-sm">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
    </div>
);

const CrossIcon = () => (
    <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 mx-auto border border-red-200 shadow-sm">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
    </div>
);

export default Home;
