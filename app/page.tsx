"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const translations = {
  ar: {
    dir: "rtl",
    langBtn: "English",
    heroTitle: "مطور ويب وخبير سيو وصناعة محتوى",
    heroBio: "خبير كتابة المحتوى المتوافق مع السيو ومطور ويب كامل (Full-Stack) بخبرة تزيد عن 11 عاماً. متخصص في صناعة المحتوى الإبداعي، حملات السوشيال ميديا، تصميم فيديوهات الذكاء الاصطناعي، وبناء المواقع باستخدام ووردبريس و Next.js. عملت على أكثر من 400 موقع إلكتروني، وكتبت مئات المقالات وسكريبتات اليوتيوب.",
    toolsTitle: "أدوات تم العمل عليها",
    skillsTitle: "المهارات والخبرات التقنية",
    portfolioTitle: "معرض الأعمال والـ Portfolio",
    testimonialsTitle: "ماذا يقول العملاء عني؟",
    contactTitle: "تواصل معي الآن",
    cvBtn: "📄 عرض السيرة الذاتية (CV)",
    closeBtn: "إغلاق X",
    stats: [
      { num: "11+", label: "سنوات خبرة" },
      { num: "400+", label: "موقع إلكتروني ناجح" },
      { num: "1000+", label: "مقال وسكريبت سيو" },
      { num: "100%", label: "إلتزام ومصداقية" }
    ],
    cats: {
      seo: "كتابة المحتوى والسيو",
      landing: "صفحات الهبوط",
      social: "السوشيال ميديا",
      aiVideo: "السكربتات وفيديوهات AI"
    },
    reviews: [
      {
        name: "د. عبد الرحمن (الرياض)",
        role: "صاحب عيادة جلدية وتجميل",
        text: "تعاملت مع الأستاذ عمرو لتهيئة الموقع الخاص بعيادتنا في الرياض (Local SEO) وزيادة سرعة الصفحات. النتيجة كانت مذهلة، تضاعفت الاتصالات وحجز المواعيد بفضل ظهوره في النتائج الأولى."
      },
      {
        name: "أ. سارة أحمد (براند مستحضرات تجميل)",
        role: "مديرة التسويق وتطوير المنتجات",
        text: "صمم لنا عمرو صفحة هبوط احترافية وسريعة جداً لمنتج Eye Contour Cream. واجهة المستخدم كانت جذابة للغاية ومقنعة، مما ساهم في رفع نسبة المبيعات والتحويل (Conversion Rate) بشكل غير متوقع!"
      },
      {
        name: "أ. منى السيد (مصر)",
        role: "مديرة منصة تعليمية رقمية",
        text: "خبرة عمرو في Next.js وووردبريس جعلت منصتنا تتحمل آلاف الزوار بدون أي بطء، بالإضافة إلى كتابته لسكريبتات اليوتيوب التي حققت انتشاراً واسعاً."
      }
    ],
    footer: "© 2026 جميع الحقوق محفوظة لـ عمرو محمد السيد"
  },
  en: {
    dir: "ltr",
    langBtn: "العربية",
    heroTitle: "Web Developer, SEO & Content Expert",
    heroBio: "SEO Content Specialist & Full-Stack Web Developer with 11+ years of experience. Specializing in SEO-compliant content, social media campaigns, AI video design, WordPress, and Next.js development. Successfully worked on 400+ websites, authoring hundreds of articles, social media strategies, and video scripts.",
    toolsTitle: "Tools & Technologies Used",
    skillsTitle: "Professional Skills & Expertise",
    portfolioTitle: "Featured Portfolio Showcase",
    testimonialsTitle: "Client Testimonials & Reviews",
    contactTitle: "Get in Touch",
    cvBtn: "📄 View Resume / CV",
    closeBtn: "Close X",
    stats: [
      { num: "11+", label: "Years Experience" },
      { num: "400+", label: "Successful Websites" },
      { num: "1000+", label: "SEO Articles & Scripts" },
      { num: "100%", label: "Client Satisfaction" }
    ],
    cats: {
      seo: "SEO Content & Optimization",
      landing: "Landing Pages",
      social: "Social Media Copywriting",
      aiVideo: "Video Scripts & AI Design"
    },
    reviews: [
      {
        name: "Dr. Abdulrahman (Riyadh)",
        role: "Dermatology Clinic Owner",
        text: "Amr optimized our local SEO and site speed in Riyadh. The results were outstanding—our patient bookings and inquiries skyrocketed after ranking on the first page."
      },
      {
        name: "Ms. Sarah Ahmed (Cosmetics Brand)",
        role: "Marketing & Product Manager",
        text: "Amr designed a stunning, blazing-fast landing page for our Eye Contour Cream. The layout was highly persuasive and optimized for user experience, significantly boosting our conversion rates and sales!"
      },
      {
        name: "Ms. Mona El-Sayed (Egypt)",
        role: "Digital E-Learning Platform Manager",
        text: "His mastery of WordPress and Next.js allowed our site to scale smoothly. His strategic YouTube scripts also drove massive organic traffic."
      }
    ],
    footer: "© 2026 All Rights Reserved. Amr Mohamed Elsayed"
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const [lightsOn, setLightsOn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 1200);
    const lightTimer = setTimeout(() => setLightsOn(true), 1400);

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(lightTimer);
    };
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

  const tools = ["WordPress", "Yoast SEO", "Rank Math", "LiteSpeed Cache", "Semrush", "Next.js"];

  const skills = lang === "ar" ? [
    "عمل خطة فحص احترافية للمواقع (Technical Site Auditing)",
    "تحليل المنافسين بدقة (Competitor Analysis)",
    "عمل خطة كلمات مفتاحية ذكية (Keyword Research)",
    "حل مشاكل الموقع التقنية وسرعة الأداء",
    "العمل ضمن فريق والتنسيق الجماعي",
    "التخطيط الاستراتيجي وإدارة الحملات الرقمية"
  ] : [
    "Technical Site Auditing",
    "In-depth Competitor Analysis",
    "Strategic Keyword Research",
    "Advanced Troubleshooting & Performance Optimization",
    "Team Collaboration & Leadership",
    "Strategic Planning & Digital Marketing Campaigns"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: -40 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950"
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            <motion.div
              className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_50px_#10b981,0_0_100px_#34d399] border-2 border-emerald-300"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.1, 1], 
                opacity: 1,
                boxShadow: ["0 0 20px #10b981", "0 0 60px #34d399, 0 0 120px #10b981", "0 0 40px #10b981"]
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.svg
                className="w-12 h-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.9)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeInOut" }}
              >
                <motion.path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </motion.svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden font-sans pb-12" dir={t.dir}>
        
        <div className="fixed inset-0 opacity-[0.05] pointer-events-none grid grid-cols-6 sm:grid-cols-10 md:grid-cols-16 gap-3 p-3 z-10 overflow-hidden w-full h-full drop-shadow-[0_0_35px_rgba(52,211,153,0.6)]">
          {Array.from({ length: 200 }).map((_, i) => (
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
              transition={{ duration: 3.5, delay: (i % 15) * 0.08, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundImage: "linear-gradient(to left, #059669, #34d399, #ffffff)" }}
            />
          ))}
        </div>

        <motion.div variants={containerVariants} initial="hidden" animate={loading ? "hidden" : "show"}>
          
          <motion.header className="relative z-20 max-w-6xl mx-auto px-6 py-6 flex justify-between items-center border-b border-emerald-500/30 bg-slate-950/90 backdrop-blur-xl shadow-lg">
            <div className="text-xl font-bold tracking-wider text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              AMR <span className="text-white">ELSAYED</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="px-5 py-2 border-2 border-emerald-400 text-emerald-400 font-bold rounded-full bg-slate-950/80 hover:bg-emerald-400 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
            >
              {t.langBtn}
            </button>
          </motion.header>

          <main className="relative z-20 max-w-6xl mx-auto px-6 py-12 space-y-24">
            
            <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 bg-slate-950/90 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20 shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                  {lang === "ar" ? "عمرو محمد السيد" : "Amr Mohamed Elsayed"}
                  <span className="block text-xl md:text-2xl text-emerald-400 font-medium mt-2 drop-shadow-[0_0_5px_#10b981]">
                    {t.heroTitle}
                  </span>
                </h1>
                <p className="text-slate-200 text-lg leading-relaxed">{t.heroBio}</p>
                
                <div className="flex flex-wrap gap-4 pt-2">
                  <button 
                    onClick={() => setIsCvOpen(true)}
                    className="px-5 py-3 bg-slate-900 border-2 border-emerald-400 text-emerald-400 font-bold rounded-xl hover:bg-emerald-400 hover:text-black shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all duration-300"
                  >
                    {t.cvBtn}
                  </button>
                </div>
              </div>

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
                      onError={(e) => { (e.target as HTMLImageElement).src = "/amr.png"; }}
                    />
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.stats.map((stat, index) => (
                <div key={index} className="bg-slate-950/90 border border-emerald-500/20 p-6 rounded-2xl text-center backdrop-blur-xl shadow-xl">
                  <div className="text-3xl md:text-4xl font-extrabold text-emerald-400 drop-shadow-[0_0_8px_#10b981] mb-1">{stat.num}</div>
                  <div className="text-slate-300 font-medium text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-8 bg-slate-950/90 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-emerald-400 pl-3 text-white drop-shadow-[0_0_5px_#10b981]">
                {t.toolsTitle}
              </h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.08, borderColor: "#34d399", backgroundColor: "#064e3b", boxShadow: "0 0 15px #10b981" }}
                    className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-emerald-400 font-bold cursor-default transition-all"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-8 bg-slate-950/90 p-8 rounded-2xl backdrop-blur-xl border border-emerald-500/20 shadow-2xl">
              <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-emerald-400 pl-3 text-white drop-shadow-[0_0_5px_#10b981]">
                {t.skillsTitle}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, borderColor: "#34d399" }}
                    className="p-4 bg-slate-900/60 border border-slate-800/80 rounded-xl flex items-center space-x-3 space-x-reverse text-slate-100 font-semibold transition-all duration-300"
                  >
                    <span className="text-emerald-400 font-extrabold text-xl">⚡</span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-emerald-400 pl-3 text-white bg-slate-950/90 px-5 py-2 inline-block rounded border border-emerald-500/20 shadow-xl">
                {t.portfolioTitle}
              </h2>

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
            </motion.section>

            <motion.section variants={itemVariants} className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold border-l-4 border-emerald-400 pl-3 text-white bg-slate-950/90 px-5 py-2 inline-block rounded border border-emerald-500/20 shadow-xl">
                {t.testimonialsTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {t.reviews.map((rev, index) => (
                  <div key={index} className="bg-slate-950/90 border border-emerald-500/10 p-6 rounded-2xl flex flex-col justify-between backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
                    <div className="absolute top-0 right-0 p-4 text-emerald-500/10 text-6xl font-serif select-none pointer-events-none group-hover:text-emerald-500/20 transition-colors">”</div>
                    <p className="text-slate-300 italic leading-relaxed text-sm md:text-base z-10 mb-6">
                      {rev.text}
                    </p>
                    <div className="border-t border-slate-900 pt-4 flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 shadow-inner">
                        {rev.name[0]}
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm md:text-base">{rev.name}</h4>
                        <p className="text-emerald-400 text-xs font-medium">{rev.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section variants={itemVariants} className="bg-slate-950/95 backdrop-blur-xl border-2 border-emerald-400 rounded-2xl p-8 text-center space-y-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
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
            </motion.section>
          </main>

          <footer className="relative z-20 border-t border-slate-900 py-6 text-center text-slate-400 text-sm bg-slate-950/90 backdrop-blur-md">
            {t.footer}
          </footer>
        </motion.div>
      </div>

      <AnimatePresence>
        {isCvOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCvOpen(false)}
          >
            <motion.div 
              className="bg-slate-900 border border-emerald-500/30 p-4 rounded-2xl max-w-2xl w-full relative shadow-[0_0_50px_rgba(16,185,129,0.4)]"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsCvOpen(false)}
                className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-md transition-all"
              >
                {t.closeBtn}
              </button>
              
              <div className="mt-8 max-h-[75vh] overflow-y-auto rounded-lg border border-slate-800 bg-slate-950 p-2">
                <img 
                  src="/arbic.jpg" 
                  alt="Amr Elsayed CV" 
                  className="w-full h-auto object-contain rounded"
                  onError={(e) => { 
                    (e.target as HTMLImageElement).src = "/arbic.png"; 
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
