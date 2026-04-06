import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t, language } = useLanguage();
    const isEn = language === 'en';
    const [email, setEmail] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'Europe/Istanbul' }));
        };
        update();
        const id = setInterval(update, 1000);
        return () => clearInterval(id);
    }, []);

    const handleSubscribe = (e) => { e.preventDefault(); setEmail(''); };

    const navLinks = [
        { key: 'corp_nav_home', to: '/' },
        { key: 'corp_nav_solutions', to: '/solutions' },
        { key: 'corp_nav_calc', to: '/hesaplama' },
        { key: 'corp_nav_blog', to: '/blog' },
        { key: 'corp_nav_contact', to: '/contact' },
    ];

    const socialLinks = [
        { label: 'WhatsApp', href: 'https://wa.me/905538755415' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/company/carbon-it-global/posts/?feedView=all' },
        { label: 'Email', to: '/contact' },
    ];

    return (
        <footer className="footer-premium bg-noise">
            <div className="footer-glow"></div>
            {/* Main grid */}
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-10 lg:py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">

                    {/* Col 1: Brand + Location + Time */}
                    <div>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="text-2xl font-bold text-[#22c55e] tracking-tight inline-block mb-6">CarboonIT</Link>
                        <p className="text-sm text-white/80 mb-2">{t('corp_footer_location')}</p>
                        <p className="text-sm md:text-base text-white/70 font-mono tabular-nums">
                            {isEn ? "Time" : "Zaman"} : {currentTime}
                        </p>
                    </div>

                    {/* Col 2: Navigation */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[#aaddaa]/90 mb-8">{t('corp_footer_nav_title')}</h4>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map(({ key, to }) => (
                                <Link key={key} to={to} onClick={() => window.scrollTo(0, 0)} className="text-[15px] font-medium text-white/80 hover:text-[#22c55e] transition-colors w-fit">
                                    {t(key)}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Col 3: Location */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-[#aaddaa]/90 mb-8">{t('location_title')}</h4>
                        <div className="space-y-3 text-[15px] font-medium text-white/80 leading-relaxed">
                            <p>Hacettepe Üniversitesi Teknokent</p>
                            <p>3. Arge Binası No:1-2</p>
                            <p>Beytepe/Ankara</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Social links */}
            <div className="border-t border-white/5 relative z-10">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-8">
                        {socialLinks.map(({ label, href, to }) => (
                            to ? (
                                <Link key={label} to={to} onClick={() => window.scrollTo(0, 0)}
                                    className="social-link text-[11px] font-bold tracking-widest uppercase text-white/50 hover:text-[#22c55e]">
                                    {label}
                                    <span className="chevron opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 ml-1">›</span>
                                </Link>
                            ) : (
                                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                                    className="social-link text-[11px] font-bold tracking-widest uppercase text-white/50 hover:text-[#22c55e]">
                                    {label}
                                    <span className="chevron opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 ml-1">›</span>
                                </a>
                            )
                        ))}
                    </div>
                    <div className="flex items-center gap-4 text-[11px] font-medium text-white/50 uppercase tracking-widest">
                        <a href="https://ankarabt.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white/80 transition-all flex items-center gap-2 group">
                            <svg className="w-5 h-5 text-[#22c55e] group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 7.5l-6-3v7.5l6 3 6-3v-7.5l-6 3z" /></svg>
                            <span className="font-extrabold tracking-tighter text-sm text-white group-hover:text-white/90">Ankara<span className="text-[#22c55e]">BT</span></span>
                        </a>
                        <span>·</span>
                        <span>© {new Date().getFullYear()} CarboonIT — {t('corp_footer_rights_text')}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;