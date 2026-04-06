import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Reveal, RevealLeft, RevealRight } from './Home';

const Contact = () => {
    const { t, language } = useLanguage();
    const isEn = language === 'en';
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState({ success: false, message: '' });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/contact/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setStatus({ success: true, message: t('message_sent_title') });
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus({ success: false, message: t('error_server_connection') });
            }
        } catch (error) {
            setStatus({ success: false, message: t('error_server_connection') });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Hero Section */}
            <div className="pt-32 pb-40 px-6 w-full bg-linear-to-b from-green-200 via-green-50 to-white relative overflow-hidden border-none shadow-none">
                {/* Modern Organic & High-Tech Decorative Touches */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0a3d2e]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] pointer-events-none"></div>

                <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center relative z-10">
                    <Reveal delay={0}>
                        <div className="section-label mx-auto mb-6">
                            <span className="dot" />
                            <span>{t('corp_nav_contact')}</span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#111] mb-6 leading-tight">
                            {t('contact_title').split(' ').map((word, i) => (word.includes('Ulaşın') || word.includes('Us')) ? <span key={i} className="text-[#22c55e]">{word} </span> : word + ' ')}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto">{t('corp_contact_subtitle')}</p>
                    </Reveal>
                </div>
            </div>

            {/* Logical Split Content */}
            <div className="flex-1 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-6 pb-20 lg:pb-24 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-20 lg:mb-24">

                        {/* Left Column: Integrated Map */}
                        <div className="relative">
                            <RevealLeft delay={0.1} className="h-full min-h-[400px] lg:min-h-full">
                                <div className="w-full h-full rounded-[40px] overflow-hidden border border-gray-100 shadow-2xl shadow-[#0a3d2e]/10 relative group bg-white p-0">
                                    <iframe
                                        title="Office Location"
                                        src="https://maps.google.com/maps?q=39.8654,32.7336&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: '400px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full grayscale-20 contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]"></div>
                                </div>
                            </RevealLeft>
                        </div>

                        {/* Right Column: Send Message Form */}
                        <div className="relative">
                            <RevealRight delay={0.2} className="h-full">
                                <div className="bg-white border border-gray-50 rounded-[40px] p-8 lg:p-12 shadow-2xl shadow-[#0a3d2e]/10 h-full flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-[#111] mb-8">{t('send_message_btn')}</h3>
                                    {status.message && (
                                        <div className={`p-5 mb-8 rounded-2xl font-medium text-sm flex items-center gap-3 ${status.success ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                                            <span className="w-2 h-2 rounded-full bg-current animate-pulse"></span>
                                            {status.message}
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                { name: 'name', label: t('name_label'), type: 'text', placeholder: t('name_placeholder') },
                                                { name: 'email', label: t('email_label'), type: 'email', placeholder: t('email_placeholder') },
                                            ].map(({ name, label, type, placeholder }) => (
                                                <div key={name}>
                                                    <label className="block text-xs font-bold text-[#0a3d2e] mb-2 uppercase tracking-widest">{label}</label>
                                                    <input type={type} name={name} required value={formData[name]} onChange={handleChange}
                                                        className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-[#22c55e] focus:border-transparent outline-none transition-all text-sm" placeholder={placeholder} />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-[#0a3d2e] mb-2 uppercase tracking-widest">{t('subject_label')}</label>
                                            <input type="text" name="subject" required value={formData.subject} onChange={handleChange}
                                                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-[#22c55e] focus:border-transparent outline-none transition-all text-sm" placeholder={t('subject_placeholder')} />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-[#0a3d2e] mb-2 uppercase tracking-widest">{t('message_label')}</label>
                                            <textarea name="message" required value={formData.message} onChange={handleChange} rows="6"
                                                className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-white focus:ring-2 focus:ring-[#22c55e] focus:border-transparent outline-none transition-all text-sm resize-none" placeholder={t('message_placeholder')} />
                                        </div>
                                        <button type="submit" className="w-full inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-linear-to-r from-[#0a3d2e] to-[#22c55e] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#22c55e]/20 transition-all transform hover:-translate-y-1">
                                            {t('send_message_btn')}
                                        </button>
                                    </form>
                                </div>
                            </RevealRight>
                        </div>
                    </div>

                    {/* Horizontal Get In Touch Cards */}
                    <Reveal delay={0.4}>
                        <div className="text-center mb-12">
                            <h2 className="text-3xl lg:text-4xl font-bold text-[#111]">{isEn ? "Get In Touch" : "Bizimle İletişime Geçin"}</h2>
                            <div className="w-16 h-1.5 bg-[#22c55e] rounded-full mx-auto mt-6"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: '📍', title: isEn ? 'Office HQ' : 'Merkez Ofis', text: 'Hacettepe Üniversitesi Teknokent\n3. Arge Binası No:1-2\nBeytepe/Ankara' },
                                { icon: '📞', title: isEn ? 'Phone Support' : 'Telefon Desteği', text: '+90 553 875 54 15' },
                                { icon: '✉️', title: 'Email Address', text: 'info@ankarabt.com' },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center text-center p-10 rounded-[32px] bg-white border border-gray-100 shadow-xl shadow-[#0a3d2e]/5 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                                    <div className="w-20 h-20 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-[#22c55e] group-hover:text-white transition-all duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="font-bold text-[#111] mb-3 text-lg uppercase tracking-wider">{item.title}</h4>
                                    {item.link ? (
                                        <a href={item.link} className="text-[#0a3d2e] font-medium hover:text-[#22c55e] transition-colors">{item.text}</a>
                                    ) : (
                                        <p className="text-gray-500 font-medium leading-relaxed whitespace-pre-line">{item.text}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Contact;