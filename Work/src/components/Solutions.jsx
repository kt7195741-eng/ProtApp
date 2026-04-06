import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Reveal, RevealLeft, RevealRight } from './Home';

const Solutions = () => {
    const { language } = useLanguage();
    const isEn = language === 'en';

    const avantajlar = [
        {
            title: isEn ? "Sustainability" : "Sürdürülebilirlik",
            desc: isEn ? "Track and manage your organization's carbon emissions securely with CarbonIT." : "CarbonIT ile kuruluşunuzun ürettiği karbon salınımını güvenli bir şekilde takip edip yönetebilirsiniz.",
            img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: isEn ? "Emission Calculation" : "Emisyon Hesaplama",
            desc: isEn ? "Calculate your corporate emissions easily and accurately via embedded interfaces and tools." : "Uygulama içerisinde bulunan arayüzler ve yönlendirme araçları ile kurumsal faaliyetlerinize yönelik emisyonları hem kolayca hem de en doğru şekilde hesaplayabilirsiniz.",
            img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: isEn ? "User Roles" : "Kullanıcı - Rol",
            desc: isEn ? "Each user logs into the system with role-appropriate permissions and performs only authorized operations." : "Her kullanıcı kendi rolüne uygun yetkilerle sisteme giriş yapmakta ve sadece yetkili olduğu işlemleri gerçekleştirebilmektedir.",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: isEn ? "Result Monitoring" : "Sonuç İzleme",
            desc: isEn ? "Track the results of emission reduction measures and projects implemented by the enterprise." : "Hesaplama sonuçlarına göre kuruluş tarafından uygulanan emisyon azaltıcı önlemler ve yürütülen projelerin de sonuçları izlenebilir.",
            img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: isEn ? "Reporting and Verification" : "Raporlama ve Doğrulama",
            desc: isEn ? "Report your organization's carbon footprint in accordance with globally accepted legislation and standards." : "CarbonPress ile bireylerin, şirketlerin ve kurumların karbon ayak izlerinin dünyada kabul görmüş mevzuat ve standartlara uygun raporlanması.",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        {
            title: isEn ? "Monitoring and Processes" : "İzleme ve Kuruluş Proses",
            desc: isEn ? "Easily monitor direct and indirect emissions at the organization, process, and product levels." : "CarbonPress ile kuruluş, proses ve ürün bazında oluşan doğrudan ve dolaylı emisyonlarını kolay bir şekilde güncel olarak izleme.",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            {/* Header Section */}
            <div className="pt-32 pb-40 px-6 w-full bg-linear-to-b from-green-200 via-green-50 to-white relative overflow-hidden border-none outline-none shadow-none">
                {/* Modern Organic & High-Tech Decorative Touches */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0a3d2e]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
                <div className="absolute inset-0 bottom-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-[1400px] mx-auto text-center relative z-10">
                    <Reveal delay={0}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111] mb-6 leading-tight">
                            {isEn ? "Advantages Provided by Our" : "Karbon Ayak İzi Hesaplama Yazılımının"} <br /> <span className="text-[#22c55e]">{isEn ? "Carbon Footprint Software" : "Sağlayacağı Avantajlar"}</span>
                        </h1>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto leading-relaxed font-medium">
                            {isEn ? "Calculate your carbon footprint and learn what you can do to increase sustainability. Contribute to an eco-friendly future." : "Karbon ayak izinizi hesaplayın ve sürdürülebilirliği artırmak için neler yapabileceğinizi öğrenin. Çevre dostu bir gelecek için katkıda bulunun."}
                        </p>
                    </Reveal>
                </div>
            </div>

            {/* Advantages Grid */}
            <div className="flex-1 bg-white relative" style={{ borderTop: 'none' }}>
                <div className="max-w-[1400px] mx-auto px-6 pb-20 lg:pb-28 -mt-24 relative z-20" style={{ borderTop: 'none' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                        {avantajlar.map((item, idx) => (
                            <Reveal key={idx} delay={parseFloat((idx * 0.1).toFixed(1))} className="flex flex-col group cursor-default bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                <div className="rounded-3xl overflow-hidden mb-6 aspect-video shadow-lg shadow-[#0a3d2e]/10 border border-gray-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-[#111] mb-4 text-center group-hover:text-[#22c55e] transition-colors">{item.title}</h3>
                                <p className="text-gray-500 text-[15px] leading-relaxed text-center font-medium">
                                    {item.desc}
                                </p>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal delay={0.6}>
                        <div className="mt-20 text-center">
                            <Link
                                to="/contact"
                                onClick={() => window.scrollTo(0, 0)}
                                className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-[#111] text-white font-bold text-lg hover:bg-[#22c55e] transition-colors shadow-xl shadow-black/10"
                            >
                                {isEn ? "Contact Us" : "Bize Ulaşın"}
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
