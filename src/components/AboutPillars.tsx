import React from 'react';
import { BRAND_INFO } from '../data/decorData';

export const AboutPillars: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-amber-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#AA820A] font-semibold text-xs sm:text-sm tracking-wider uppercase">
            من نحن • À Propos
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917] mt-2">
            نحول مناسباتكم إلى ذكريات ملوكية تفوق التوقعات
          </h2>
          <div className="ornament-divider my-4">
            <i className="fa-solid fa-ring text-[#D4AF37] text-sm" aria-hidden="true"></i>
          </div>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            نحن في <strong className="text-[#1C1917] font-bold">{BRAND_INFO.name}</strong> شغوفون بصناعة الجمال والبهجة. متخصصون في تأجير وتركيب أرقى ديكورات منصات العرائس (Coin Mariée)، جلسات الحناء التقليدية العصرية، طاولات الخطوبة والضيافة، بالإضافة إلى أحدث ديكورات الافتتاح للمحلات والمراكز التجارية مع التوصيل والتركيب الحصري في ولاية سطيف وكافة بلدياتها.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#D4AF37]/20 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-amber-100/70 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors flex items-center justify-center text-[#AA820A] text-2xl shadow-inner">
              <i className="fa-solid fa-couch" aria-hidden="true"></i>
            </div>
            <h3 className="font-bold text-lg text-[#1C1917] mb-2 font-serif">أثاث نظيف بتغليف فندقي</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              يصلك الأثاث والديكور في أكياس حماية مخصصة ومعقمة بالكامل، مما يضمن ظهور كل قطعة وكأنها تُستعمل لأول مرة في ليلتك المميزة.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#D4AF37]/20 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-rose-100/70 group-hover:bg-[#800020] group-hover:text-white transition-colors flex items-center justify-center text-[#800020] text-2xl shadow-inner">
              <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i>
            </div>
            <h3 className="font-bold text-lg text-[#1C1917] mb-2 font-serif">تصاميم مضيئة وحصرية</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              نعتمد أحدث صيحات الديكور العالمية كأجنحة النيون المضيئة وخلفيات الفراشة الملكية والمرايا العاكسة التي تمنح صورك إشراقة ساحرة.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-[#FDFBF7] p-8 rounded-2xl border border-[#D4AF37]/20 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-amber-100/70 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors flex items-center justify-center text-[#AA820A] text-2xl shadow-inner">
              <i className="fa-solid fa-truck-fast" aria-hidden="true"></i>
            </div>
            <h3 className="font-bold text-lg text-[#1C1917] mb-2 font-serif">نقل دقيق وتركيب احترافي</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              فريق عمل مدرب يضمن الحضور قبل الموعد المحدد، والتركيب المتقن مع مراعاة كافة تفاصيل المكان والإضاءة لراحة بالك التامة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
