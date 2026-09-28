import React, { useState } from 'react';
import { DECOR_ITEMS, DecorItem, BRAND_INFO } from '../data/decorData';

interface GalleryShowcaseProps {
  onSelectItem: (item: DecorItem) => void;
  onBookItem: (item: DecorItem) => void;
  onOpenCustomizer?: () => void;
  isFullPage?: boolean;
}

export const GalleryShowcase: React.FC<GalleryShowcaseProps> = ({
  onSelectItem,
  onBookItem,
  isFullPage = false
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'weddings' | 'tables' | 'openings'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = DECOR_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories: { id: 'all' | 'weddings' | 'tables' | 'openings'; label: string }[] = [
    { id: 'all', label: 'الكل (All)' },
    { id: 'weddings', label: 'أعراس وخطوبة' },
    { id: 'tables', label: 'طاولات وضيافة' },
    { id: 'openings', label: 'افتتاح المحلات والفعاليات' }
  ];

  return (
    <section id="gallery" className={`py-16 md:py-24 bg-[#FDFBF7] ${isFullPage ? 'min-h-screen' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#800020] font-bold text-xs sm:text-sm tracking-wider uppercase">
            كتالوج الخدمات والحجوزات
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917] mt-2">
            معرض الديكورات المتوفرة للكراء
          </h2>
          <div className="ornament-divider my-4">
            <i className="fa-solid fa-heart text-[#800020] text-sm" aria-hidden="true"></i>
          </div>
          <p className="text-stone-600 text-sm sm:text-base">
            تصفح تشكيلتنا الواقعية من الأثاث والخلفيات الفاخرة، واختر التنسيق الذي يناسب مناسبتك.
          </p>
        </div>

        {/* Search bar & Category Filter Controls */}
        <div className="max-w-2xl mx-auto mb-8 space-y-4">
          {/* Search box if full page */}
          {isFullPage && (
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن ديكور معين (مثال: أجنحة، فراشة، حناء، كؤوس، طاولة...)"
                className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-3 pr-10 pl-4 shadow-sm"
              />
              <i className="fa-solid fa-magnifying-glass absolute right-3.5 top-3.5 text-stone-400" aria-hidden="true"></i>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  type="button"
                  className="absolute left-3 top-3 text-xs text-stone-400 hover:text-stone-600"
                >
                  مسح
                </button>
              )}
            </div>
          )}

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  type="button"
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#D4AF37] text-white shadow-md'
                      : 'bg-white text-stone-700 hover:bg-amber-100/70 border border-amber-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-amber-200/60 max-w-lg mx-auto">
            <i className="fa-solid fa-box-open text-4xl text-amber-300 mb-3" aria-hidden="true"></i>
            <p className="font-bold text-stone-700">لم يتم العثور على ديكور يطابق بحثك</p>
            <p className="text-xs text-stone-500 mt-1">جربي تغيير الكلمة أو اختيار "الكل" لعرض كافة التشكيلات</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              type="button"
              className="mt-4 px-4 py-2 rounded-lg bg-[#D4AF37] text-white text-xs font-bold"
            >
              عرض جميع الديكورات
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#D4AF37]/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with Zoom effect & badge */}
                <div
                  onClick={() => onSelectItem(item)}
                  className="relative overflow-hidden cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') onSelectItem(item);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="bg-white/20 backdrop-blur-md p-3 rounded-full">
                      <i className="fa-solid fa-magnifying-glass-plus text-xl" aria-hidden="true"></i>
                    </span>
                  </div>
                  <span
                    className={`absolute top-4 right-4 text-xs px-3 py-1 rounded-full font-semibold shadow-sm ${
                      item.category === 'weddings'
                        ? 'bg-[#800020] text-white'
                        : item.category === 'openings'
                        ? 'bg-emerald-800 text-white'
                        : 'bg-[#1C1917]/85 backdrop-blur-md text-[#F3E5AB]'
                    }`}
                  >
                    {item.categoryLabel}
                  </span>

                  {item.isPopular && (
                    <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#1C1917] text-[11px] px-2.5 py-0.5 rounded-full font-bold shadow-sm flex items-center gap-1">
                      <i className="fa-solid fa-fire text-red-600" aria-hidden="true"></i>
                      <span>الأكثر طلباً</span>
                    </span>
                  )}
                </div>

                {/* Content & Details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-right">
                  <div>
                    <h3 className="font-bold text-lg text-[#1C1917] mb-1 font-serif">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm mb-4 leading-relaxed line-clamp-2">
                      {item.subtitle}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold py-1 border-t border-amber-50">
                      <i className="fa-solid fa-truck-ramp-box text-emerald-600" aria-hidden="true"></i>
                      <span>توصيل وتركيب متوفر في كافة بلديات سطيف</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-amber-100 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      type="button"
                      className="text-xs font-bold text-[#800020] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>عرض التفاصيل</span>
                      <i className="fa-solid fa-chevron-left text-[10px]" aria-hidden="true"></i>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(`السلام عليكم Habibiç، أود الاستفسار وحجز ديكور: ${item.title} لمناسبتي في ولاية سطيف`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                      >
                        <i className="fa-brands fa-whatsapp text-sm" aria-hidden="true"></i>
                        <span>احجز عبر واتساب</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* WhatsApp Banner below catalog */}
        <div className="mt-14 bg-gradient-to-r from-[#1C1917] via-stone-900 to-[#1C1917] text-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/40 text-center max-w-4xl mx-auto shadow-xl">
          <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
            <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
          </div>
          <h4 className="font-serif font-bold text-xl sm:text-2xl text-[#F3E5AB] mb-2">
            هل أعجبك أحد الديكورات أو تريد تخصيص لمسة معينة؟
          </h4>
          <p className="text-xs sm:text-sm text-stone-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            تواصل معنا مباشرة عبر محادثة واتساب الفورية؛ سنرسل لك صور وفيديوهات إضافية للديكور مع تأكيد التوفر في موعد مناسبتك ببلديتك في سطيف فوراً.
          </p>
          <a
            href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent('السلام عليكم Habibiç، تصفحت المعرض وأريد الاستفسار عن كراء ديكور لمناسبتي بسطيف')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-shimmer-btn px-8 py-3.5 rounded-full text-[#1C1917] font-bold text-sm shadow-lg inline-flex items-center gap-2 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-lg text-emerald-800" aria-hidden="true"></i>
            <span>تواصل معنا الآن عبر واتساب</span>
          </a>
        </div>
      </div>
    </section>
  );
};
