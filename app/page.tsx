"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const translations = {
  ar: {
    dir: "rtl",
    langBtn: "English",
    heroTitle: "مطور ويب وخبير سيو وصناعة محتوى",
    heroBio: "خبير كتابة المحتوى المتوافق مع السيو ومطور ويب كامل (Full-Stack) بخبرة تزيد عن 11 عاماً. متخصص في صناعة المحتوى الإبداعي، حملات السوشيال ميديا، تصميم فيديوهات الذكاء الاصطناعي، وبناء المواقع باستخدام ووردبريس و Next.js. عملت على أكثر من 400 موقع إلكتروني، وكتبت مئات المقالات وسكريبتات اليوتيوب.",
    skillsTitle: "المهارات والخبرات التقنية",
    portfolioTitle: "معرض الأعمال والـ Portfolio",
    contactTitle: "تواصل معي الآن",
    cats: {
      seo: "كتابة المحتوى والسيو",
      landing: "صفحات الهبوط",
      social: "السوشيال ميديا",
      aiVideo: "السكربتات وفيديوهات AI"
    },
    footer: "© 2026 جميع الحقوق محفوظة لـ عمرو محمد السيد"
  },
  en: {
    dir: "ltr",
    langBtn: "العربية",
    heroTitle: "Web Developer, SEO & Content Expert",
    heroBio: "SEO Content Specialist & Full-Stack Web Developer with 11+ years of experience. Specializing in SEO-compliant content, social media campaigns, AI video design, WordPress, and Next.js development. Successfully worked on 400+ websites, authoring hundreds of articles, social media strategies, and video scripts.",
    skillsTitle: "Skills & Technical Expertise",
    portfolioTitle: "Featured Portfolio Showcase",
    contactTitle: "Get in Touch",
    cats: {
      seo: "SEO Content & Optimization",
      landing: "Landing Pages",
      social: "Social Media Copywriting",
      aiVideo: "Video Scripts & AI Design"
    },
    footer: "© 2026 All Rights Reserved. Amr Mohamed Elsayed"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [lightsOn, setLightsOn] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const timer = setTimeout(() => setLightsOn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const toggleLanguage = () => setLang(lang === "ar" ? "en" : "ar");

  const projects = [
    { name: "Galenus Translation", url: "https://galenus-translation.com/", cat: "seo" },
    { name: "Tech Motivations", url: "https://techmotivations.com/ar/", cat: "seo" },
    { name: "Slife Home", url: "https://slifehome.com/", cat: "seo" },
    { name: "Eye Contour Cream", url: "https://artistic-touch1.myeasyorders.com/products/Eye-Contour-Cream", cat: "landing" },
    { name: "Puvograbi Lip Serum", url: "https://artistic-touch1.myeasyorders.com/products/Puvograbi-Lip-Serum", cat: "landing" },
    { name: "Baraa Pharmacy", url: "https://www.facebook.com/Baraapharmacy", cat: "social" },
    { name: "Dr. Hazem Hafez", url: "https://www.facebook.com/Dr.HazemHafez", cat: "social" },
    { name: "Dr. Ibrahim Farag", url: "https://www.facebook.com/Dr.Ibrahim.Farag.dermatologist", cat: "social" },
    { name: "YouTube Script Sample", url: "https://www.youtube.com/watch?v=ZjW6mpw8NQk", cat: "aiVideo" },
    { name: "AI Video Reel Design", url: "https://www.facebook.com/reel/841692428981510", cat: "aiVideo" },
  ];

  const skills = [
    "WordPress", "Elementor", "Next.js", "Semrush", 
    "Google PageSpeed Insights", "Yoast SEO", "Rank Math", 
    "LiteSpeed Cache", "WP Rocket", "Technical Site Auditing", 
    "Strategic Planning", "Team Collaboration", "Working Under Pressure"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden font-sans pb-12" dir={t.dir}>
      
      {/* شبكة اللمبات الخارقة الساطعة بالتدرج اللوني الأفقي الساحر من اليمين لليسار (أخضر فوسفوري -> أبيض) */}
      <div className="fixed inset-0 opacity-100 pointer-events-none grid grid-cols-6 sm:grid-cols-10 md:grid-cols-16 gap-3 p-3 z-10 overflow-hidden w-full h-full drop-shadow-[0_0_35px_rgba(52,211,153,0.6)]">
        {Array.from({ length: 320 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-6 w-full rounded-sm shadow-[0_0_25px_#10b981,0_0_45px_#34d399]"
            initial={{ opacity: 0.2, scale: 0.95 }}
            animate={lightsOn ? { 
              opacity: [0.3, 1, 0.5, 1, 0.3],
              scale: [0.95, 1.02, 0.97, 1.03, 0.95],
              backgroundColor: ["#047857", "#10b981", "#059669", "#34d399", "#047857"],
              boxShadow: [
                "0 0 10px #10b981", 
                "0 0 35px #10b981, 0 0 60px #34d399", 
                "0 0 15px #059669", 
                "0 0 45px #34d399, 0 0 80px #10b981", 
                "0 0 10px #10b981"
              ]
            } : {}}
            transition={{ 
              duration: 3.5, 
              delay: (i % 15) * 0.08, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            style={{ 
              backgroundImage: "linear-gradient(to left, #059669, #34d399, #ffffff)" 
            }}
          />
        ))}
      </div>

      {/* المحتوى الأساسي معزول بالكامل فوق الخلفية بـ z-20 */}
      <header className="relative z-20 max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-emerald-500/30 bg-slate-950/90 backdrop-blur-xl shadow-lg">
        <div className="text-xl font-bold tracking-wider text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
          AMR <span className="text-white">ELSAYED</span>
        </div>
        <button
          onClick={toggleLanguage}
          className="px-5 py-2 border-2 border-emerald-400 text-emerald-400 font-bold rounded-full bg-slate-950/80 hover:bg-emerald-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
        >
          {t.langBtn}
        </button>
      </header>

      <main className="relative z-20 max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* الـ Hero وصورتك الشخصية */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-slate-950/90 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20 shadow-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {lang === "ar" ? "عمرو محمد السيد" : "Amr Mohamed Elsayed"}
              <span className="block text-xl md:text-2xl text-emerald-400 font-medium mt-2 drop-shadow-[0_0_5px_#10b981]">
                {t.heroTitle}
              </span>
            </h1>
            <p className="text-slate-200 text-lg leading-relaxed">{t.heroBio}</p>
            <div className="inline-block bg-emerald-950 border-2 border-emerald-400 px-4 py-2 rounded-lg text-emerald-400 font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              🚀 {lang === "ar" ? "400+ موقع إلكتروني ناجح" : "400+ Successful Websites"}
            </div>
          </motion.div>

          {/* تأثير الدوامة وصورتك amr.jpg */}
          <div className="flex justify-center relative py-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
              {[...Array(3)].map((_, idx) => (
                <motion.div
                  key={idx}
                  className="absolute inset-0 border-2 border-dashed border-emerald-400 rounded-full shadow-[0_0_10px_#10b981]"
                  animate={{ rotate: idx % 2 === 0 ? 360 : -360 }}
                  transition={{ repeat: Infinity, duration: 5 + idx * 2, ease: "linear" }}
                  style={{ scale: 1 + idx * 0.15 }}
                />
              ))}

              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-emerald-400 shadow-[0_0_30px_#10b981] z-20 bg-slate-900">
                <img 
                  src="/amr.jpg" 
                  alt="عمرو محمد السيد" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/amr.png";
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* المهارات */}
        <section className="space-y-8 bg-slate-950/90 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20 shadow-2xl">
          <motion.h2 className="text-2xl md:text-3xl font-bold border-l-4 border-emerald-400 pl-3 text-white drop-shadow-[0_0_5px_#10b981]">
            {t.skillsTitle}
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.08, borderColor: "#34d399", backgroundColor: "#064e3b", boxShadow: "0 0 15px #10b981" }}
                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white font-semibold cursor-default transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>

        {/* معرض الأعمال */}
        <section className="space-y-8">
          <motion.h2 className="text-2xl md:text-3xl font-bold border-l-4 border-emerald-400 pl-3 text-white bg-slate-950/90 px-5 py-2 inline-block rounded border border-emerald-500/20 shadow-xl">
            {t.portfolioTitle}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(t.cats).map((catKey) => (
              <div key={catKey} className="bg-slate-950/95 border border-emerald-500/10 p-6 rounded-xl space-y-4 shadow-2xl backdrop-blur-xl">
                <h3 className="text-xl font-bold text-emerald-400 border-b border-emerald-950 pb-2 drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">
                  {t.cats[catKey as keyof typeof t.cats]}
                </h3>
                <ul className="space-y-3">
                  {projects.filter(p => p.cat === catKey).map((proj, i) => (
                    <li key={i}>
                      <a
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex justify-between items-center p-3 bg-slate-900/80 border border-slate-800 rounded-lg hover:border-emerald-400 hover:bg-emerald-950/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300"
                      >
                        <span className="text-slate-100 group-hover:text-white font-bold">{proj.name}</span>
                        <span className="text-emerald-400 font-bold group-hover:translate-x-1 transition-transform text-sm">
                          {lang === "ar" ? "زيارة الموقع ←" : "Visit Site →"}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* التواصل السريع */}
        <section className="bg-slate-950/95 backdrop-blur-xl border-2 border-emerald-400 rounded-2xl p-8 text-center space-y-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
          <h2 className="text-2xl md:text-3xl font-bold text-white drop-shadow-[0_0_8px_#10b981]">{t.contactTitle}</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4">
            <a href="mailto:amrw28940@gmail.com" className="w-full md:w-auto px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-400 hover:shadow-[0_0_10px_#10b981] text-white font-semibold transition-all">
              📧 amrw28940@gmail.com
            </a>
            <a href="https://wa.me/201020347946" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-6 py-3 bg-emerald-500 text-black font-extrabold rounded-xl hover:bg-emerald-400 hover:shadow-[0_0_20px_#10b981] transition-all">
              💬 WhatsApp
            </a>
            <a href="https://www.facebook.com/nadersalm123" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-400 hover:shadow-[0_0_10px_#10b981] text-white font-semibold transition-all">
              👤 Facebook Profile
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-20 border-t border-slate-900 py-6 text-center text-slate-400 text-sm bg-slate-950/90 backdrop-blur-md">
        {t.footer}
      </footer>
    </div>
  );
}