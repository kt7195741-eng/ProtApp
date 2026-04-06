import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Reveal } from './Home';

const Blog = () => {
    const { t } = useLanguage();

    const posts = [
        { date: 'corp_blog_date_1', author: 'corp_blog_author_1', title: 'corp_blog_title_1', excerpt: 'corp_blog_excerpt_1', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600' },
        { date: 'corp_blog_date_2', author: 'corp_blog_author_2', title: 'corp_blog_title_2', excerpt: 'corp_blog_excerpt_2', img: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=600' },
        { date: 'corp_blog_date_3', author: 'corp_blog_author_3', title: 'corp_blog_title_3', excerpt: 'corp_blog_excerpt_3', img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80&w=600' },
        { date: 'corp_blog_date_4', author: 'corp_blog_author_4', title: 'corp_blog_title_4', excerpt: 'corp_blog_excerpt_4', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=600' },
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="pt-32 pb-40 px-6 w-full bg-linear-to-b from-green-200 via-green-50 to-white relative overflow-hidden border-none shadow-none">
                {/* Modern Organic & High-Tech Decorative Touches */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22c55e]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0a3d2e]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>
                <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] bg-[size:20px_20px] opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-[1400px] mx-auto text-center flex flex-col items-center relative z-10">
                    <Reveal delay={0}>
                        <div className="section-label mx-auto mb-6"><span className="dot" /><span>{t('corp_journal_label')} / {t('corp_journal_sublabel')}</span></div>
                    </Reveal>
                    <Reveal delay={0.1}>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#111] mb-6 leading-tight">
                            {t('corp_page_blog_title').split(' ').map((word, i) => (word.includes('Günlüğü') || word.includes('Diary')) ? <span key={i} className="text-[#22c55e]">{word} </span> : word + ' ')}
                        </h1>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <p className="text-lg text-[#5a6b5a] max-w-2xl mx-auto font-medium">{t('corp_page_blog_desc')}</p>
                    </Reveal>
                </div>
            </div>

            <div className="flex-1 bg-white relative">
                <div className="max-w-[1400px] mx-auto px-6 pb-20 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {posts.map((post, i) => (
                            <Reveal key={i} delay={parseFloat((i * 0.1).toFixed(1))} className="group bg-white border border-gray-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-lift flex flex-col">
                                <div className="blog-img-wrap h-40 md:h-48 overflow-hidden relative">
                                    <img src={post.img} alt="" loading="lazy" decoding="async" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs font-bold text-[#0a3d2e]/60 mb-4 tracking-widest uppercase">
                                        <span>{t(post.date)}</span><span className="w-1 h-1 rounded-full bg-[#22c55e]"></span><span>{t(post.author)}</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4 text-[#111] group-hover:text-[#22c55e] transition-colors leading-tight">
                                        {t(post.title)}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed line-clamp-3 font-medium mb-2">{t(post.excerpt)}</p>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
