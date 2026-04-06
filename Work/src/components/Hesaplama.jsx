import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Reveal, RevealLeft, RevealRight } from './Home';

const Hesaplama = () => {
    const { language } = useLanguage();
    const isEn = language === 'en';

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header / Intro Section */}
            <section className="pt-32 pb-40 px-6 w-full bg-linear-to-b from-green-200 via-green-50 to-white relative overflow-hidden border-none shadow-none">
                {/* Modern Organic & High-Tech Decorative Touches */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0a3d2e]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-[1400px] mx-auto text-center relative z-10">
                    <Reveal delay={0}>
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#e6f2e6] border border-[#aaddaa] text-[#0a3d2e] text-xs uppercase tracking-widest font-bold mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse"></span>
                            {isEn ? "INFORMATION CENTER" : "BİLGİ MERKEZİ"}
                        </div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111] mb-6 leading-tight">
                            {isEn ? "Carbon Footprint Calculation" : "Karbon Ayak İzi Hesaplama"} <br /> <span className="text-[#22c55e]">{isEn ? "Methods" : "Yöntemleri"}</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-[#5a6b5a] max-w-3xl mx-auto leading-relaxed font-medium">
                            {isEn ? "Calculate your carbon footprint and discover ways to enhance sustainability. Contribute to a greener future." : "Karbon ayak izinizi hesaplayın ve sürdürülebilirliği artırmak için neler yapabileceğinizi öğrenin. Çevre dostu bir gelecek için katkıda bulunun."}
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Methodology & Info Cards - Floating Overlap */}
            <section className="bg-white relative">
                <div className="max-w-[1400px] mx-auto px-6 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            {
                                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                title: isEn ? "ISO 14064 Standards" : "ISO 14064 Standartları",
                                desc: isEn ? "Full compliance with global carbon accounting requirements." : "Küresel karbon muhasebesi gerekliliklerine tam uyum."
                            },
                            {
                                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                                title: isEn ? "Direct & Indirect" : "Doğrudan ve Dolaylı",
                                desc: isEn ? "Comprehensive analysis of Scope 1, 2, and 3 emissions." : "Kapsam 1, 2 ve 3 emisyonlarının kapsamlı analizi."
                            },
                            {
                                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                                title: isEn ? "Process Tracking" : "Proses Takibi",
                                desc: isEn ? "Granular monitoring at organizational and product levels." : "Kuruluş ve ürün seviyelerinde ayrıntılı izleme."
                            }
                        ].map((card, i) => (
                            <Reveal key={i} delay={i * 0.1} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100/50 hover:shadow-2xl transition-all duration-300 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e] mb-6 group-hover:scale-110 transition-transform">
                                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-[#111] mb-3">{card.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-medium">{card.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overlapping Presentation Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">

                        {/* Left Content (Editorial Style) */}
                        <div className="lg:w-1/2 relative">
                            <RevealLeft delay={0.1}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a3d2e]/5 text-[#0a3d2e] text-[10px] font-bold uppercase tracking-widest mb-6">
                                    {isEn ? "METHODOLOGY" : "METODOLOJİ"}
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black text-[#111] mb-8 leading-[1.1]">{isEn ? <>Accurate Analysis<br />With Various Methods</> : <>Farklı Yöntemlerle<br />Doğru Analiz</>}</h2>
                                <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                                    {isEn ? "Various methods are used to calculate greenhouse gases. The advantages and disadvantages of these methods, calculation processes, and application areas are meticulously examined to determine the most suitable methodology for your institution." : "Sera gazlarının hesaplanması için farklı yöntemler kullanılmaktadır. Bu yöntemlerin avantajları ve dezavantajları, hesaplama süreçleri ve uygulama alanları titizlikle incelenerek kurumunuza en uygun metodoloji belirlenir."}
                                </p>

                                <div className="bg-[#0a3d2e] rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#22c55e]/20 blur-3xl rounded-full group-hover:bg-[#22c55e]/40 transition-colors duration-500"></div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{isEn ? "Carbon Reduction Techniques" : "Karbon Azaltma Teknikleri"}</h3>
                                    <p className="text-white/80 leading-relaxed font-medium border-l-4 border-[#22c55e] pl-6 py-2">
                                        {isEn ? "Reducing our carbon footprint contributes to the fight against climate change and creates a more livable world for future generations." : "Karbon ayak izimizi azaltmak, iklim değişikliği ile mücadeleye katkıda bulunmamızı ve gelecek nesiller için daha yaşanabilir bir dünya yaratmamızı sağlar."}
                                    </p>
                                </div>
                            </RevealLeft>
                        </div>

                        {/* Right Content (Overlapping Images) */}
                        <div className="lg:w-1/2 relative w-full aspect-square lg:aspect-auto lg:h-[700px]">
                            {/* Main Background Image - Eco City */}
                            <RevealRight delay={0.2} className="absolute top-0 right-0 w-4/5 h-4/5 rounded-[40px] overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=1000" alt="Eco Background" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                {/* Overlay tint */}
                                <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                            </RevealRight>

                            {/* Overlaid Smaller Image - Hands holding globe/plant */}
                            <RevealRight delay={0.4} className="absolute bottom-10 left-[-10%] w-3/4 h-3/5 rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-12 border-white z-10">
                                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800" alt="Hands holding plant" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
                            </RevealRight>

                            {/* Decorative element */}
                            <Reveal delay={0.6} className="absolute top-1/2 -left-10 w-24 h-24 bg-[#22c55e] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-pulse hidden lg:block"></Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hesaplama;
