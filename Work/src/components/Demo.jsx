import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroEnvironment from '../assets/hero_environment.webp';

const Demo = () => {
    const { t, language } = useLanguage();
    const isEn = language === 'en';

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        promo: '',
        service: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <div className="flex flex-col min-h-screen bg-white pt-32">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full mb-16 relative z-10">
                <div className="text-center mb-16 animate-fadeInUp">
                    <h1 className="text-5xl md:text-6xl font-bold text-[#111] mb-6">
                        {isEn ? "Request a " : "Demo Talebi "}<span className="text-[#22c55e]">{isEn ? "Demo." : "Oluşturun."}</span>
                    </h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        {t('demo_subtitle')}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
                    {/* Left: Form */}
                    <div className="lg:w-1/2 bg-white p-10 lg:p-14 rounded-[40px] shadow-2xl shadow-green-900/5 border border-green-50 animate-slideRight">
                        <form className="space-y-10">
                            {/* Floating Labels */}
                            <div className="relative">
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                                    className="peer w-full border-b border-gray-200 bg-transparent py-3 px-0 text-base md:text-lg focus:outline-none focus:border-[#22c55e] focus:ring-0 placeholder-transparent transition-colors" placeholder="Ad, Soyad" required />
                                <label htmlFor="name" className="absolute left-0 top-3 text-sm md:text-base text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#22c55e] font-medium pointer-events-none">
                                    {t('demo_name')}
                                </label>
                            </div>
                            <div className="relative">
                                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange}
                                    className="peer w-full border-b border-gray-200 bg-transparent py-3 px-0 text-base md:text-lg focus:outline-none focus:border-[#22c55e] focus:ring-0 placeholder-transparent transition-colors" placeholder="Şirket İsmi" required />
                                <label htmlFor="company" className="absolute left-0 top-3 text-sm md:text-base text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#22c55e] font-medium pointer-events-none">
                                    {t('demo_company')}
                                </label>
                            </div>
                            <div className="relative">
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                                    className="peer w-full border-b border-gray-200 bg-transparent py-3 px-0 text-base md:text-lg focus:outline-none focus:border-[#22c55e] focus:ring-0 placeholder-transparent transition-colors" placeholder="E-Posta" required />
                                <label htmlFor="email" className="absolute left-0 top-3 text-sm md:text-base text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#22c55e] font-medium pointer-events-none">
                                    {t('demo_email')}
                                </label>
                            </div>
                            <div className="relative">
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                                    className="peer w-full border-b border-gray-200 bg-transparent py-3 px-0 text-base md:text-lg focus:outline-none focus:border-[#22c55e] focus:ring-0 placeholder-transparent transition-colors" placeholder="Telefon" required />
                                <label htmlFor="phone" className="absolute left-0 top-3 text-sm md:text-base text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#22c55e] font-medium pointer-events-none">
                                    {t('demo_phone')}
                                </label>
                            </div>
                            <div className="relative">
                                <input type="text" id="promo" name="promo" value={formData.promo} onChange={handleChange}
                                    className="peer w-full border-b border-gray-200 bg-transparent py-3 px-0 text-base md:text-lg focus:outline-none focus:border-[#22c55e] focus:ring-0 placeholder-transparent transition-colors" placeholder="Kampanya Kodu" />
                                <label htmlFor="promo" className="absolute left-0 top-3 text-sm md:text-base text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#22c55e] font-medium pointer-events-none">
                                    {t('demo_promo')}
                                </label>
                            </div>

                            <div className="relative pt-2">
                                <select id="service" name="service" value={formData.service} onChange={handleChange}
                                    className="peer w-full border-b border-gray-200 bg-transparent py-3 px-0 text-base md:text-lg focus:outline-none focus:border-[#22c55e] focus:ring-0 text-gray-600 appearance-none transition-colors" required>
                                    <option value="" disabled hidden></option>
                                    <option value="corporate">{isEn ? 'Corporate Carbon Footprint Software & Consulting' : 'Kurumsal Karbon Ayak İzi Yazılımı & Danışmanlığı'}</option>
                                    <option value="skdm">{isEn ? 'CBAM Software & Consulting' : 'SKDM Yazılımı & Danışmanlığı'}</option>
                                    <option value="product">{isEn ? 'Product Carbon Footprint Consulting' : 'Ürün Karbon Ayak İzi Danışmanlığı'}</option>
                                    <option value="water">{isEn ? 'Water Footprint Consulting' : 'Su Ayak İzi Danışmanlığı'}</option>
                                    <option value="offset">{isEn ? 'Carbon Offsetting' : 'Karbon Dengeleme'}</option>
                                    <option value="other">{isEn ? 'Other' : 'Diğer'}</option>
                                </select>
                                <label htmlFor="service" className="absolute left-0 top-0 text-sm text-[#22c55e] transition-all transform -translate-y-2 font-medium pointer-events-none">
                                    {t('demo_service')}
                                </label>
                                {/* Custom Chevron */}
                                <div className="absolute right-0 bottom-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>

                            <div className="pt-4 space-y-4">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="relative flex items-start">
                                        <input type="checkbox" className="w-5 h-5 mt-0.5 border-gray-300 rounded text-[#22c55e] focus:ring-[#22c55e]" required />
                                    </div>
                                    <span className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-medium">
                                        {t('demo_kvkk')}
                                    </span>
                                </label>
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="relative flex items-start">
                                        <input type="checkbox" className="w-5 h-5 mt-0.5 border-gray-300 rounded text-[#22c55e] focus:ring-[#22c55e]" />
                                    </div>
                                    <span className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-medium">
                                        {t('demo_etk')}
                                    </span>
                                </label>
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="w-full md:w-auto bg-[#22c55e] text-white font-bold tracking-wide uppercase text-base py-4 px-12 rounded-full shadow-lg shadow-[#22c55e]/20 hover:shadow-xl hover:shadow-[#22c55e]/30 hover:bg-[#1ea750] transform hover:-translate-y-1 transition-all">
                                    {t('demo_submit')}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Illustration */}
                    <div className="lg:w-1/2 hidden lg:flex items-stretch relative animate-fadeInUp">
                        {/* Blob Background Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/5 rounded-full blur-[80px] pointer-events-none"></div>
                        <img
                            src={heroEnvironment}
                            alt="Dashboard user illustration"
                            className="w-full h-full object-cover rounded-[40px] drop-shadow-2xl z-10"
                        />
                        {/* High-tech overlapping card for visual interest */}
                        <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 animate-float">
                            <div className="w-10 h-10 rounded-full bg-[#22c55e]/10 flex items-center justify-center">
                                <svg className="w-5 h-5 text-[#22c55e]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{isEn ? "Efficiency" : "Verimlilik"}</p>
                                <p className="text-[#111] font-black text-lg">+85%</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="mt-24 pt-16 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-4 animate-fadeInUp">
                    <div className="text-center group">
                        <h3 className="text-4xl lg:text-5xl font-black text-[#22c55e] mb-3 group-hover:scale-110 transition-transform">200+</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{isEn ? 'Total Companies' : 'Toplam Firma Sayısı'}</p>
                    </div>
                    <div className="text-center group">
                        <h3 className="text-4xl lg:text-5xl font-black text-[#22c55e] mb-3 group-hover:scale-110 transition-transform">1,35</h3>
                        <p className="text-xs font-bold text-gray-500 mb-1">milyar ton CO₂-e</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{isEn ? 'Total Reported Footprint' : 'Toplam Raporlanan Karbon Ayak İzi'}</p>
                    </div>
                    <div className="text-center group">
                        <h3 className="text-4xl lg:text-5xl font-black text-[#22c55e] mb-3 group-hover:scale-110 transition-transform">800+</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{isEn ? 'Total Users' : 'Toplam Kullanıcı Sayısı'}</p>
                    </div>
                    <div className="text-center group">
                        <h3 className="text-4xl lg:text-5xl font-black text-[#22c55e] mb-3 group-hover:scale-110 transition-transform">1.000+</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{isEn ? 'Total Facilities' : 'Toplam Tesis Sayısı'}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Demo;
