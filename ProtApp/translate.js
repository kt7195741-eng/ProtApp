const fs = require('fs');

const pages = ['index', 'features', 'how-it-works', 'contact'];

const dictionary = {
    // Navbar
    "Home": { tr: "Ana Sayfa", ar: "الرئيسية" },
    "Features": { tr: "Özellikler", ar: "الميزات" },
    "Process": { tr: "Süreç", ar: "العملية" },
    "Contact": { tr: "İletişim", ar: "اتصل بنا" },
    "Request a Demo": { tr: "Demo İste", ar: "طلب عرض" },
    "Request\n                    a Demo": { tr: "Demo\n                    İste", ar: "طلب\n                    عرض" },
    
    // Index Hero
    "Web-Based Project Management": { tr: "Web Tabanlı Proje Yönetimi", ar: "إدارة المشاريع عبر الإنترنت" },
    "One Platform.": { tr: "Tek Platform.", ar: "منصة واحدة." },
    "Every Project.": { tr: "Her Proje.", ar: "كل مشروع." },
    "Total Control.": { tr: "Tam Kontrol.", ar: "سيطرة كاملة." },
    "ProtApp is a comprehensive web-based project tracking system purpose-built for institutions\n                        managing\n                        investments, procurement, and performance — all from a single unified dashboard.": { 
        tr: "ProtApp, kurumlar için özel olarak tasarlanmış kapsamlı bir web tabanlı proje takip sistemidir, yatırımlar, satın alma ve performans — tümü tek bir birleşik gösterge panelinden.", 
        ar: "<bdi>ProtApp</bdi> هو نظام شامل لتتبع المشاريع عبر الويب تم تصميمه خصيصًا للمؤسسات التي تدير الاستثمارات والمشتريات والأداء — كلها من لوحة تحكم واحدة موحدة." 
    },
    ">Learn More<": { tr: ">Daha Fazla Bilgi<", ar: ">اعرف المزيد<" },
    
    // Index Stats Container
    "Projects<": { tr: "Projeler<", ar: "المشاريع<" },
    "Budget<": { tr: "Bütçe<", ar: "الميزانية<" },
    "On-Time<": { tr: "Zamanında<", ar: "في الموعد<" },
    "Progress Overview<": { tr: "İlerleme Özeti<", ar: "نظرة عامة على التقدم<" },
    "✦ Live Data<": { tr: "✦ Canlı Veri<", ar: "✦ بيانات حية<" },
    
    // What is ProtApp?
    "What is ProtApp?": { tr: "ProtApp Nedir?", ar: "ما هو <bdi>ProtApp</bdi>؟" },
    "Powerful Features": { tr: "Güçlü Özellikler", ar: "ميزات قوية" },
    "Nine integrated modules covering the entire project\n                        lifecycle.": { tr: "Tüm projeyi kapsayan dokuz entegre modül.", ar: "تسع وحدات متكاملة تغطي المشروع بأكمله." },
    
    // Modules Overview (Index)
    "Project Planning": { tr: "Proje Planlama", ar: "تخطيط المشاريع" },
    "Define project scopes, milestones, and\n                            deliverables with structured planning workflows.": { tr: "Proje kapsamlarını, kilometre taşlarını ve teslimatları yapılandırılmış iş akışlarıyla belirleyin.", ar: "حدد نطاقات المشروع والمعالم والتسليمات بسير عمل تخطيط منظم." },
    "Budget & Payments": { tr: "Bütçe ve Ödemeler", ar: "الميزانية والمدفوعات" },
    "Track budgets, manage invoices, and process\n                            progress payments with precision.": { tr: "Bütçeleri takip edin, faturaları yönetin ve hakedişleri hassasiyetle işleyin.", ar: "تتبع الميزانيات وإدارة الفواتير ومعالجة المدفوعات المرحلية بدقة." },
    "Performance Monitoring": { tr: "Performans İzleme", ar: "مراقبة الأداء" },
    "Real-time KPIs, dynamic dashboards, and\n                            graphical\n                            performance reports.": { tr: "Gerçek zamanlı KPI'lar, dinamik paneller ve grafiksel performans raporları.", ar: "مؤشرات الأداء في الوقت الحقيقي، اللوحات الديناميكية، وتقارير الأداء." },
    "See All 9 Modules": { tr: "Tüm 9 Modülü Gör", ar: "عرض جميع الوحدات الـ 9" },
    
    // CTA Section
    "Ready to Transform Your Project\n                    Management?": { tr: "Proje Yönetiminizi Dönüştürmeye Hazır mısınız?", ar: "مستعد لتحويل إدارة مشاريعك؟" },
    "Join institutions that\n                    trust\n                    ProtApp to manage\n                    investments, procurement, and performance from a single unified platform.": { 
        tr: "Yatırımları, satın almayı ve performansı tek bir platformdan kontrol eden kurumlara katılın.", 
        ar: "انضم إلى المؤسسات التي تثق في <bdi>ProtApp</bdi> لإدارة الاستثمارات والمشتريات والأداء من منصة واحدة موحدة." 
    },
    ">Our Models<": { tr: ">Modellerimiz<", ar: ">نماذجنا<" },
    ">See How It Works<": { tr: ">Nasıl Çalıştığını Görün<", ar: ">انظر كيف تعمل<" },
    
    // Footer
    "Built for institutions. Designed for\n                        clarity.": { tr: "Kurumlar için tasarlandı. Netlik için geliştirildi.", ar: "بنيت للمؤسسات. صممت من أجل الوضوح." },
    "Built for institutions. Designed for clarity.": { tr: "Kurumlar için tasarlandı. Netlik için geliştirildi.", ar: "بنيت للمؤسسات. صممت من أجل الوضوح." },
    "© 2026 AnkaraBT. All rights\n                    reserved.": { tr: "© 2026 AnkaraBT. Tüm hakları saklıdır.", ar: "© 2026 AnkaraBT. جميع الحقوق محفوظة." },
    "© 2026 AnkaraBT. All rights reserved.": { tr: "© 2026 AnkaraBT. Tüm hakları saklıdır.", ar: "© 2026 AnkaraBT. جميع الحقوق محفوظة." },
    
    // Features & Modules
    "Features & Modules": { tr: "Özellikler ve Modüller", ar: "الميزات والوحدات" },
    "Nine integrated modules covering the entire\n                    project\n                    lifecycle — from initial planning through procurement, execution, and archival.": { 
        tr: "Yaşam döngüsü — ilk planlamadan satın alma, uygulama ve arşivlemeye kadar tümünü kapsayan dokuz entegre modül.", 
        ar: "تسع وحدات متكاملة تغطي بالكامل دورة الحياة — من التخطيط الأولي إلى الشراء والتنفيذ والأرشفة." 
    },
    "Project Plan Creation": { tr: "Proje Planı Oluşturma", ar: "إنشاء خطة المشروع" },
    "Define project scopes, milestones, and\n                            deliverables with structured planning workflows. Nothing is left vague — everything is\n                            documented and trackable.": { tr: "Proje kapsamlarını, teslimatları yapılandırılmış iş akışlarıyla belirleyin. Hiçbir şey belirsiz kalmaz belgelenir ve izlenebilir.", ar: "حدد نطاقات المشروع والتسليمات مع سير عمل التخطيط المنظم. لا شيء يترك غامضًا." },
    "Project Resource Management": { tr: "Proje Kaynak Yönetimi", ar: "إدارة موارد المشروع" },
    "Allocate human, financial, and material\n                            resources\n                            efficiently across all active projects and investments.": { tr: "İnsan, finans ve malzeme kaynaklarını tüm aktif projeler ve yatırımlar arasında verimli bir şekilde dağıtın.", ar: "تخصيص الموارد البشرية والمالية والمادية بكفاءة عبر جميع المشاريع النشطة والاستثمارات." },
    "Control Organization Setup": { tr: "Kontrol Organizasyonu Kurulumu", ar: "إعداد منظمة التحكم" },
    "Establish oversight structures, audit trails,\n                            and\n                            institutional governance frameworks for full accountability.": { tr: "Gözetim yapıları, denetim yolları ve tam hesap verebilirlik için kurumsal yönetişim çerçeveleri oluşturun.", ar: "إنشاء هياكل الرقابة ومسارات المراجعة وأطر حوكمة مؤسسية للمساءلة الكاملة." },
    "Supplier Management": { tr: "Tedarikçi Yönetimi", ar: "إدارة الموردين" },
    "Manage vendor relationships, qualifications,\n                            and\n                            compliance documentation. Know who is doing what, how fast, and at what cost.": { tr: "Tedarikçi ilişkilerini, niteliklerini ve uyumluluk belgelerini yönetin. Kimin, neyi, ne kadar hızlı yaptığını bilin.", ar: "إدارة العلاقات مع الموردين والمؤهلات ووثائق الامتثال." },
    "EKAP-Integrated Tendering": { tr: "EKAP Entegreli İhale", ar: "العطاءات المتكاملة مع EKAP" },
    "Streamline procurement with EKAP-integrated\n                            tendering and bidding workflows — ensuring full legal compliance and transparency.": { tr: "EKAP entegreli satın almayı kolaylaştırın — tam yasal uyumluluk ve şeffaflık sağlar.", ar: "تبسيط المشتريات المتكاملة مع EKAP — ضمان الامتثال القانوني الكامل." },
    "Budget & Progress Payments": { tr: "Bütçe ve Hakediş", ar: "الميزانية والمدفوعات المرحلية" },
    "Track budgets, manage invoices, and process\n                            progress payments with precision. No money moves without visibility.": { tr: "Bütçeleri takip edin, faturaları yönetin ve hakedişleri hassasiyetle işleyin. Görünürlük olmadan para hareket etmez.", ar: "تتبع الميزانيات، وإدارة الفواتير، ومعالجة المدفوعات المرحلية بدقة." },
    "Real-time KPIs, dynamic graphical dashboards,\n                            and\n                            live performance reports — not static, but continuously updated.": { tr: "Gerçek zamanlı KPI'lar, dinamik grafik panelleri, ve canlı performans raporları — sürekli güncellenir.", ar: "مؤشرات الأداء في الوقت الحقيقي، اللوحات القيادة الرسومية." },
    "Approval & Acceptance": { tr: "Onay ve Kabul", ar: "الموافقة والقبول" },
    "Digital approval chains, acceptance workflows,\n                            and\n                            sign-off processes — eliminating paper-based delays entirely.": { tr: "Dijital onay zincirleri, kabul iş akışları ve imza süreçleri — kağıt tabanlı gecikmeleri ortadan kaldırır.", ar: "سلاسل الموافقة الرقمية، سير عمل القبول والقضاء التام على التأخير الورقي." },
    "Digital Archive Operations": { tr: "Dijital Arşiv", ar: "الأرشيف الرقمي" },
    "Centralized document storage, retrieval, and\n                            lifecycle management. Every contract and certificate, instantly searchable.": { tr: "Merkezi belge depolama, ve yaşam döngüsü yönetimi. Her sözleşme anında aranabilir.", ar: "التخزين المركزي للوثائق وإدارة دورة الحياة." },
    "Want to see these modules in action?": { tr: "Bu modülleri iş başında görmek ister misiniz?", ar: "هل ترغب في رؤية هذه الوحدات وهي تعمل؟" },
    "Interested in seeing ProtApp\n                    in action? Reach out and we'll schedule a personalized walkthrough for your team.": { tr: "ProtApp'i iş başında görmek mi istiyorsunuz? Ulaşın, özel bir sunum ayarlayalım.", ar: "هل أنت مهتم برؤية <bdi>ProtApp</bdi> في العمل؟ تواصل معنا وسنقوم بجدولة جولة مخصصة لفريقك." },
    "Request a Personalized Demo": { tr: "Özel Bir Demo İsteyin", ar: "طلب عرض توضيحي مخصص" },
    
    // How It Works
    "How It Works": { tr: "Nasıl Çalışır", ar: "كيف تعمل" },
    "Four streamlined phases to take your projects\n                    from\n                    concept to completion.": { tr: "Projelerinizi konseptten tamamlanmaya kadar götürecek dört kolaylaştırılmış aşama.", ar: "أربع مراحل مبسطة لأخذ مشاريعك من المفهوم إلى الاكتمال." },
    "Plan<": { tr: "Planla<", ar: "خطط<" },
    "Define project\n                                scopes,\n                                allocate resources, and set milestones for every investment.": { tr: "Proje kapsamlarını belirleyin, kaynakları tahsis edin ve kilometre taşları belirleyin.", ar: "حدد نطاقات المشروع وتخصيص الموارد ووضع المنجزات." },
    "Procure<": { tr: "Tedarik Et<", ar: "تدبير<" },
    "Manage tendering,\n                                vendor\n                                selection, and contract execution with full EKAP integration.": { tr: "İhaleleri ve tedarikçi seçimini EKAP entegrasyonu ile yönetin.", ar: "إدارة المناقصات واختيار الموردين." },
    "Track<": { tr: "İzle<", ar: "تتبع<" },
    "Monitor progress in\n                                real\n                                time with dynamic dashboards, KPIs, and performance reports.": { tr: "Gerçek zamanlı ilerlemeyi dinamik panolarla izleyin.", ar: "مراقبة التقدم في الوقت الفعلي مع اللوحات التفاعلية." },
    "Archive<": { tr: "Arşivle<", ar: "أرشفة<" },
    "Store all documents,\n                                approvals, and records in a secure, searchable digital archive.": { tr: "Tüm belgeleri güvenli ve dijital bir arşivde saklayın.", ar: "حفظ جميع الوثائق في أرشيف آمن." },
    "Benefits": { tr: "Faydalar", ar: "الفوائد" },
    "Why ProtApp?": { tr: "Neden ProtApp?", ar: "لماذا <bdi>ProtApp</bdi>؟" },
    "Centralized Control": { tr: "Merkezi Kontrol", ar: "رقابة مركزية" },
    "Manage all investment activities — planning,\n                                procurement, execution, monitoring, and archival — from a single, unified web-based\n                                platform. No more scattered tools or disconnected workflows.": { tr: "Tüm planlama, satın alma, izleme ve arşivleme faaliyetlerini tek platformdan yönetin.", ar: "إدارة جميع أنشطة الاستثمار من منصة واحدة موحدة." },
    "Smart Reporting": { tr: "Akıllı Raporlama", ar: "تقارير ذكية" },
    "Dynamic graphical dashboards and intelligent KPI\n                                tracking empower decision-makers with the data they need. Generate comprehensive reports\n                                at\n                                any level of detail.": { tr: "Dinamik panolarla karar vericilere güç verin. Ayrıntılı raporlar oluşturun.", ar: "لوحات بيانية تفاعلية ومؤشرات أداء تمكن صناع القرار بالبيانات." },
    "GIS-Powered Visibility": { tr: "CBS Destekli Görünürlük", ar: "رؤية مدعومة بـ GIS" },
    "Track projects geographically from budget\n                                allocation\n                                to final delivery. Visualize the spatial distribution of investments, monitor field\n                                operations on a map, and make location-aware decisions.": { tr: "Projeleri bütçeden teslimata kadar coğrafi olarak izleyin. Konum farkındalıklı kararlar alın.", ar: "تتبع جغرافياً من التخصيص إلى التسليم." },
    "Ready to Get Started?": { tr: "Başlamaya Hazır Mısınız?", ar: "مستعد للبدء؟" },
    "See how ProtApp can\n                    transform your organization's project management and investment tracking.": { tr: "ProtApp'ın organizasyonunuzu nasıl dönüştüreceğini görün.", ar: "انظر كيف يمكن لـ <bdi>ProtApp</bdi> تغيير مؤسستك." },
    
    // Contact
    "Get in Touch": { tr: "Bize Ulaşın", ar: "ابق على تواصل" },
    "Reach out to any of our offices worldwide. We'd\n                    love\n                    to discuss how ProtApp can transform your organization.": { tr: "Dünya çapındaki ofislerimize ulaşın. Dönüşümü konuşalım.", ar: "تواصل مع أي من مكاتبنا في جميع أنحاء العالم. نود أن نناقش تأثير <bdi>ProtApp</bdi>." },
    "Turkey — Ankara": { tr: "Türkiye — Ankara", ar: "تركيا — أنقرة" },
    "AnkaraBT Headquarters": { tr: "AnkaraBT Merkez Ofis", ar: "المقر الرئيسي AnkaraBT" },
    "Hacettepe University Technopark 3rd R&D Building No:1-2 Beytepe/Ankara": { tr: "Hacettepe Üniv. Teknokent 3. Ar-Ge Binası No:1-2 Beytepe/Ankara", ar: "تكنوبارك جامعة حجة تبة مبنى البحث." },
    "USA — Franklin Park": { tr: "ABD — Franklin Park", ar: "الولايات المتحدة — فرانكلين بارك" },
    "TOBB Trade Center": { tr: "TOBB Ticaret Merkezi", ar: "مركز التجارة TOBB" },
    "UK — London": { tr: "İngiltere — Londra", ar: "المملكة المتحدة — لندن" },
    "Queen Elizabeth Olympic Park": { tr: "Kraliçe Elizabeth Olimpiyat Parkı", ar: "حديقة الملكة إليزابيث الأولمبية" },
    "Interested in seeing ProtApp in action? Reach out and\n                            we'll\n                            schedule a personalized walkthrough for your team.": { tr: "ProtApp'i iş başında görmek ister misiniz? Özel demo ayarlayalım.", ar: "مهتم برؤية <bdi>ProtApp</bdi> على الطبيعة؟ تواصل وسنقوم بتحديد موعد." },
    "Send Us an Email": { tr: "E-posta Gönderin", ar: "أرسل لنا رسالة" }
};

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

pages.forEach(page => {
    let content = fs.readFileSync(`${page}.html`, 'utf-8');
    
    // IMPORTANT: Sort keys by length descending to prevent substring substitution errors (e.g. "Features" replacing inside "Powerful Features")
    const sortedKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length);
    
    ['tr', 'ar'].forEach(lang => {
        let newContent = content;

        for (const en of sortedKeys) {
            const trans = dictionary[en];
            const rx = new RegExp(escapeRegExp(en), 'g');
            newContent = newContent.replace(rx, trans[lang]);
        }
        
        // Update HTML attributes for Arabic
        if (lang === 'ar') {
            newContent = newContent.replace('<html lang="en">', '<html lang="ar" dir="rtl">');
            newContent = newContent.replace('dir="ltr"', 'dir="rtl"');
        } else {
            newContent = newContent.replace('<html lang="en">', '<html lang="tr">');
        }

        let oldDesktopBlock = `
                    <div
                        class="flex items-center gap-3 text-xs font-bold text-slate-400 border-l border-slate-200 pl-6 ml-2">
                        <a href="${page}.html" class="text-blue-600 hover:text-blue-700 transition-colors">EN</a>
                        <span class="opacity-40">|</span>
                        <a href="${page}-tr.html" class="hover:text-blue-600 transition-colors">TR</a>
                        <span class="opacity-40">|</span>
                        <a href="${page}-ar.html" class="hover:text-blue-600 transition-colors">AR</a>
                    </div>`;

        // Update with regex since whitespace might vary slightly
        let activeClass = 'class="text-blue-600 hover:text-blue-700 transition-colors"';
        let inactiveClass = 'class="hover:text-blue-600 transition-colors"';
        let inactiveEn = `href="${page}.html" class="hover:text-blue-600 transition-colors"`;
        let activeEn = `href="${page}.html" class="text-blue-600 hover:text-blue-700 transition-colors"`;
        
        let activeTr = `href="${page}-tr.html" class="text-blue-600 hover:text-blue-700 transition-colors"`;
        let inactiveTr = `href="${page}-tr.html" class="hover:text-blue-600 transition-colors"`;
        
        let activeAr = `href="${page}-ar.html" class="text-blue-600 hover:text-blue-700 transition-colors"`;
        let inactiveAr = `href="${page}-ar.html" class="hover:text-blue-600 transition-colors"`;

        let activeEnMob = `href="${page}.html" class="text-blue-600"`;
        let inactiveEnMob = `href="${page}.html" class="hover:text-blue-600"`;

        let activeTrMob = `href="${page}-tr.html" class="text-blue-600"`;
        let inactiveTrMob = `href="${page}-tr.html" class="hover:text-blue-600"`;

        let activeArMob = `href="${page}-ar.html" class="text-blue-600"`;
        let inactiveArMob = `href="${page}-ar.html" class="hover:text-blue-600"`;

        if (lang === 'tr') {
            newContent = newContent.replace(activeEn, inactiveEn);
            newContent = newContent.replace(inactiveTr, activeTr);
            newContent = newContent.replace(activeEnMob, inactiveEnMob);
            newContent = newContent.replace(inactiveTrMob, activeTrMob);
        } else {
            newContent = newContent.replace(activeEn, inactiveEn);
            newContent = newContent.replace(inactiveAr, activeAr);
            newContent = newContent.replace(activeEnMob, inactiveEnMob);
            newContent = newContent.replace(inactiveArMob, activeArMob);
        }

        fs.writeFileSync(`${page}-${lang}.html`, newContent, 'utf-8');
    });
});
console.log("Translation generation complete with sorted dictionary and RTL fixes.");
