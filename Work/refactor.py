import re

with open('/home/khaled/carboonit/frontend/src/components/Home.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Extract WHAT IS CARBONIT SECTION
pattern = re.compile(r'(/\* ═══════════ 2\.5\. WHAT IS CARBONIT SECTION ═══════════ \*/.*?</section>\n)', re.DOTALL)
match = pattern.search(content)
if not match:
    print("Could not find WHAT IS CARBONIT section")
    exit(1)

what_is_section = match.group(1)

# Remove it from original position
content = content.replace(what_is_section, '')

# 2. Modify the section
# 2.a. Make heading smaller
# from: className="text-4xl md:text-5xl lg:text-7xl font-black text-[#111] leading-tight mb-6"
what_is_section = what_is_section.replace(
    'className="text-4xl md:text-5xl lg:text-7xl font-black text-[#111] leading-tight mb-6"',
    'className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111] leading-tight mb-6"'
)

# 2.b. Replace Left Content with Green Card and speech marks inside
# We'll use regex to replace the interior of Left Content
left_content_pattern = re.compile(r'(<div className="lg:col-span-7">\s*<RevealLeft delay=\{0\.1\}>)(.*?)(</RevealLeft>\s*</div>)', re.DOTALL)
new_left_content = """
                                <div className="rounded-[40px] bg-linear-to-br from-[#0a3d2e] via-[#0d4f3b] to-[#11694f] p-8 md:p-12 shadow-2xl shadow-[#0a3d2e]/20 relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] opacity-40 mix-blend-overlay"></div>
                                    <div className="absolute -top-32 -right-32 w-80 h-80 bg-[#22c55e]/30 rounded-full blur-[100px] group-hover:bg-[#22c55e]/50 transition-colors duration-500"></div>
                                    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-[100px]"></div>

                                    {/* Decorative Quote Mark */}
                                    <div className="absolute top-4 left-6 text-8xl text-white/10 font-serif leading-none select-none pointer-events-none z-0">"</div>

                                    <div className="relative z-10 text-white font-medium leading-relaxed">
                                        <p className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">
                                            {t('corp_what_is_carbonit_para1').split('\\n')[0]}
                                        </p>
                                        <p className="text-lg lg:text-xl text-white/90">
                                            {t('corp_what_is_carbonit_para1').split('\\n').slice(1).join('\\n')}
                                        </p>
                                        <p className="mt-8 text-white/70">
                                            {t('corp_what_is_carbonit_para2')}
                                        </p>
                                    </div>
                                </div>
"""

what_is_section = left_content_pattern.sub(r'\1' + new_left_content + r'\3', what_is_section)

# 2.c. Remove the Outro Banner
outro_pattern = re.compile(r'(\s*\{/\* Outro Banner \*/\}\s*<Reveal delay=\{0\.6\}>.*?</Reveal>)', re.DOTALL)
what_is_section = outro_pattern.sub('', what_is_section)

# 3. Insert it after VIDEO SECTION
# Video section ends with:
# {/* ═══════════ 4. MODERN IMAGE ACCORDION ═══════════ */}
insert_target = "{/* ═══════════ 4. MODERN IMAGE ACCORDION ═══════════ */}"
if insert_target in content:
    content = content.replace(insert_target, what_is_section + "\n            " + insert_target)
else:
    print("Could not find insert target")
    exit(1)

with open('/home/khaled/carboonit/frontend/src/components/Home.jsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
