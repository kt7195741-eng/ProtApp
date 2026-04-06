import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoImg from '../assets/carbonit_logo_transparent.png';
import { useLanguage } from '../context/LanguageContext';

const Navbar = ({ isAuthenticated, onLogout }) => {
    const { language, switchLanguage, t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isAuthPage = ['/login', '/signup', '/forgot-password', '/verify-code', '/new-password'].includes(location.pathname);

    let navClasses = "";
    if (isAuthPage) {
        navClasses = "sticky top-0 left-0 w-full z-[1000] bg-white border-b border-gray-100 py-4";
    } else {
        navClasses = `fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${scrolled ? 'bg-white/70 backdrop-blur-md border-b border-gray-200/80 py-3 shadow-sm' : 'bg-transparent py-5'}`;
    }

    const toggleLang = () => {
        switchLanguage(language === 'en' ? 'tr' : 'en');
    };

    const navLinks = [
        { label: t('corp_nav_home'), to: '/' },
        { label: t('corp_nav_solutions'), to: '/solutions' },
        { label: t('corp_nav_calc'), to: '/hesaplama' },
        { label: t('corp_nav_blog'), to: '/blog' },
        { label: t('corp_nav_contact'), to: '/contact' },
    ];

    return (
        <>
            <header className={navClasses}>
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">

                    {/* 1. LEFT SIDE - Logo */}
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center relative z-50">
                        <img src={logoImg} alt="CarbonIT Logo" className="h-[50px] w-auto object-contain block bg-transparent" />
                    </Link>

                    {/* 2. CENTER - Nav Links (Desktop) */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.to || (link.to === '/dashboard' && location.pathname.includes('/login'));
                            return (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => window.scrollTo(0, 0)}
                                    className={`text-[15px] font-semibold transition-colors relative group py-2 ${isActive ? 'text-[#0a3d2e]' : 'text-gray-800 hover:text-[#0a3d2e]'}`}
                                >
                                    {link.label}
                                    {/* Slide-in underline hover effect */}
                                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#0a3d2e] transform origin-left transition-transform duration-300 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                </Link>
                            );
                        })}
                    </nav>

                    {/* 3. RIGHT SIDE - CTAs & Lang Toggle */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Language toggle */}
                        <button onClick={toggleLang} className="text-sm font-bold text-gray-500 hover:text-[#0a3d2e] transition-colors flex items-center gap-1">
                            <span className={language === 'en' ? 'text-[#0a3d2e]' : ''}>EN</span>
                            <span className="text-gray-300 font-light">|</span>
                            <span className={language === 'tr' ? 'text-[#0a3d2e]' : ''}>TR</span>
                        </button>

                        <div className="h-5 w-[1px] bg-gray-200"></div>

                        {/* Auth & CTAs */}
                        {isAuthenticated ? (
                            <>
                                <Link to="/dashboard" className="text-[15px] font-bold text-[#0a3d2e] hover:text-[#06291e] transition-colors">{t('corp_nav_portal')}</Link>
                                <button onClick={onLogout} className="px-5 py-2.5 rounded-full border-2 border-[#0a3d2e] text-[#0a3d2e] font-bold text-sm hover:bg-[#0a3d2e] hover:text-white transition-all">{t('corp_nav_logout')}</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="px-6 py-2.5 rounded-full border-2 border-[#0a3d2e] text-[#0a3d2e] font-bold text-[14px] hover:bg-[#0a3d2e] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-[1px]">
                                    {t('corp_nav_login')}
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Hamburger Icon */}
                    {!mobileMenuOpen && (
                        <button
                            className="lg:hidden relative z-[1001] p-2 -mr-2 text-[#0a3d2e]"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    )}
                </div>
            </header>

            {/* Mobile Menu Overlay - OUTSIDE header to avoid backdrop-filter containing block issue */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-[1000] transition-transform duration-500 ease-in-out lg:hidden flex flex-col pt-28 px-8 pb-10 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close Button inside Overlay */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 p-2 text-[#0a3d2e] hover:scale-110 transition-transform"
                    aria-label="Close menu"
                >
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <nav className="flex flex-col gap-6 text-2xl font-bold text-[#111]">
                    {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className="hover:text-[#0a3d2e] transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="mt-auto flex flex-col gap-6">
                    <button onClick={() => { toggleLang(); setMobileMenuOpen(false); }} className="text-left text-lg font-bold text-gray-500 flex items-center gap-2 w-fit">
                        {t('corp_nav_lang')}: <span className="text-[#0a3d2e]">{language.toUpperCase()}</span>
                    </button>
                    {isAuthenticated ? (
                        <button onClick={() => { onLogout(); setMobileMenuOpen(false); }} className="w-full py-4 text-center rounded-2xl bg-gray-100 text-[#111] font-bold text-lg">{t('corp_nav_logout')}</button>
                    ) : (
                        <>
                            <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="w-full py-4 text-center rounded-2xl bg-[#0a3d2e] text-white font-bold text-lg">{t('corp_nav_login')}</Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;