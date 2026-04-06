import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const SKDM = () => {
    const { t } = useLanguage();

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="pt-32 pb-16 px-6 bg-[#f5f5f0]">
                <div className="max-w-[1400px] mx-auto">
                    <div className="section-label"><span className="dot" /><span>{t('corp_nav_skdm')}</span></div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#111] mb-4 leading-tight">{t('corp_page_skdm_title')}</h1>
                    <p className="text-lg text-gray-500 max-w-2xl">{t('corp_page_skdm_desc')}</p>
                </div>
            </div>

            <div className="flex-1 bg-white">
                <div className="max-w-[1400px] mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <div className="bg-[#f0f0eb] rounded-2xl p-8 card-lift">
                            <span className="text-[#0a3d2e] font-mono text-sm font-bold tracking-wider">{'{01}'}</span>
                            <h3 className="text-xl font-bold text-[#111] mt-3 mb-4">{t('corp_svc_title_3')} —</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{t('corp_svc_desc_3')}</p>
                            <div className="flex flex-wrap gap-2 mt-5">
                                {['corp_tag_ab', 'corp_tag_sertifika', 'corp_tag_dogrulama'].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-500">{t(tag)}</span>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden card-lift group min-h-[280px]">
                            <img src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=800" alt="" loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <p className="text-white text-lg font-bold">{t('corp_bento_card6_title')}</p>
                                <p className="text-white/60 text-sm mt-1">{t('corp_bento_card6_desc')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0d0d0d] rounded-2xl p-10 card-lift">
                        <h3 className="text-2xl font-bold text-white mb-4">{t('corp_cta_heading')}</h3>
                        <p className="text-white/50 text-sm mb-8 max-w-xl">{t('corp_cta_subheading')}</p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact" className="btn-primary">{t('corp_cta_btn_contact')}</Link>
                            <a href="https://wa.me/903122992350" target="_blank" rel="noopener noreferrer" className="btn-ghost text-white border-white/20 hover:border-white/50 hover:text-white">
                                {t('corp_cta_btn_whatsapp')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SKDM;