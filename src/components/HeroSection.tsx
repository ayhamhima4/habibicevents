import React from 'react';
import { BRAND_INFO } from '../data/decorData';

interface HeroSectionProps {
  onExploreCatalog: () => void;
  onOpenHeroLightbox: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCatalog,
  onOpenHeroLightbox
}) => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F0] via-white to-[#FDFBF7] py-12 md:py-20 lg:py-24"
    >
      {/* Subtle Background Accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#800020]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text & Action Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            {/* Prestige Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-[#D4AF37]/30 text-[#1C1917] text-xs sm:text-sm font-semibold shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-ping" />
              <i className="fa-solid fa-crown text-[#D4AF37]" aria-hidden="true"></i>
              <span>الخيار الأول للأعراس الملكية والخطوبة وافتتاح المحلات</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#1C1917] leading-tight sm:leading-snug">
              اجعل مناسبتك وافتتاحك
              <span className="block gold-gradient-text mt-2 font-serif">
                لوحة فنية فاخرة لا تُنسى
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              في <strong className="text-[#1C1917] font-semibold">{BRAND_INFO.name}</strong> نقدم لك أحدث صيحات الديكور المضاء، منصات جلوس العروسين العصرية، أطقم التقديم الكريستالية، وديكورات الافتتاح الحصرية بأعلى معايير النظافة والتعقيم الفندقي مع التوصيل والتركيب الاحترافي.
            </p>

            {/* Dual Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent('مرحبا Habibiç، أريد الاستفسار عن كراء ديكور لمناسبتي في سطيف')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto gold-shimmer-btn text-[#1C1917] px-8 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-3 shadow-lg"
              >
                <i className="fa-brands fa-whatsapp text-2xl text-emerald-800" aria-hidden="true"></i>
                <span>تواصل واحجز عبر واتساب فوراً</span>
              </a>

              <button
                onClick={onExploreCatalog}
                type="button"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white border border-stone-300 hover:border-[#D4AF37] text-stone-800 font-semibold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-amber-50/50 transition-all shadow-sm cursor-pointer"
              >
                <i className="fa-regular fa-images text-[#D4AF37]" aria-hidden="true"></i>
                <span>استكشف كتالوج الديكورات</span>
              </button>
            </div>

            {/* Prominent Contact & Social Channels Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={`tel:+${BRAND_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#800020] border border-amber-300 font-bold text-xs sm:text-sm shadow-xs transition-colors"
              >
                <i className="fa-solid fa-phone text-[#D4AF37]" aria-hidden="true"></i>
                <span dir="ltr">{BRAND_INFO.phone}</span>
                <span className="text-[11px] text-stone-500 font-normal">(اتصال فوري)</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-rose-50 to-pink-50 hover:from-rose-100 hover:to-pink-100 text-rose-800 border border-rose-200 font-bold text-xs shadow-xs transition-colors"
              >
                <i className="fa-brands fa-instagram text-base text-rose-600" aria-hidden="true"></i>
                <span>إنستغرام @habibic.events</span>
              </a>

              <a
                href={BRAND_INFO.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 font-bold text-xs shadow-xs transition-colors"
              >
                <i className="fa-brands fa-tiktok text-sm" aria-hidden="true"></i>
                <span>تيك توك @habibic.events</span>
              </a>

              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-xs shadow-xs transition-colors"
              >
                <i className="fa-brands fa-facebook-f text-sm text-blue-600" aria-hidden="true"></i>
                <span>فيسبوك Habibiç</span>
              </a>
            </div>

            {/* Trust Badges Row */}
            <div className="pt-6 border-t border-amber-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center lg:text-right">
                <span className="block text-2xl font-black text-[#800020] font-serif">+10</span>
                <span className="text-xs text-stone-600 font-medium">مناسبة ناجحة</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block text-2xl font-black text-[#AA820A] font-serif">100%</span>
                <span className="text-xs text-stone-600 font-medium">أثاث عصري وجديد</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block text-2xl font-black text-[#800020] font-serif">فندقي</span>
                <span className="text-xs text-stone-600 font-medium">تعقيم وتغليف محكم</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block text-2xl font-black text-[#AA820A] font-serif">دقيق</span>
                <span className="text-xs text-stone-600 font-medium">التزام بالمواعيد والتركيب</span>
              </div>
            </div>
          </div>

          {/* Visual Hero Showcase Grid */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Luxury Gold Frame Ornament */}
              <div className="absolute -inset-3 rounded-3xl border-2 border-dashed border-[#D4AF37]/50 pointer-events-none transform -rotate-1" />

              <div
                onClick={onOpenHeroLightbox}
                className="relative bg-white p-3 rounded-2xl shadow-xl overflow-hidden border border-[#D4AF37]/30 cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label="عرض صورة ديكور الأجنحة المضيئة"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') onOpenHeroLightbox();
                }}
              >
                <img
                  src={BRAND_INFO.heroMainImg}
                  alt="ديكور الأجنحة المضيئة الملكية من Habibiç"
                  className="w-full h-[400px] sm:h-[460px] object-cover rounded-xl transition duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="bg-white/90 backdrop-blur-sm text-stone-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                    <i className="fa-solid fa-expand text-[#D4AF37]" aria-hidden="true"></i>
                    انقر لمعاينة التفاصيل
                  </span>
                </div>

                {/* Floating Highlight Badge on Hero Image */}
                <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30 shadow-lg flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-[#1C1917]">خلفية الأجنحة المضيئة الملكية</h4>
                    <p className="text-xs text-stone-500">متوفرة الآن مع طاولة وتنسيق الورد</p>
                  </div>
                  <span className="px-3 py-1 bg-[#800020] text-white rounded-lg text-xs font-bold whitespace-nowrap">
                    الأكثر طلباً
                  </span>
                </div>
              </div>

              {/* Small Floating Accessory Card */}
              <div
                onClick={onOpenHeroLightbox}
                className="absolute -bottom-6 -left-2 sm:-left-8 bg-white p-2.5 rounded-2xl shadow-xl border border-[#D4AF37]/40 hidden sm:flex items-center gap-3 max-w-[240px] cursor-pointer hover:scale-105 transition-transform"
                role="button"
                tabIndex={0}
              >
                <img
                  src={BRAND_INFO.heroAccessoryImg}
                  alt="طقم التقطيع والكؤوس الكريستالية"
                  className="w-14 h-14 object-cover rounded-xl border border-stone-200"
                  referrerPolicy="no-referrer"
                />
                <div className="text-right">
                  <p className="text-xs font-bold text-stone-800">أطقم كؤوس وخواتم</p>
                  <p className="text-[11px] text-[#AA820A] font-semibold">إكسسوارات فاخرة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
