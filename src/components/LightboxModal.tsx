import React, { useEffect } from 'react';
import { DecorItem, BRAND_INFO } from '../data/decorData';

interface LightboxModalProps {
  isOpen: boolean;
  item: DecorItem | null;
  onClose: () => void;
  onBookItem: (item: DecorItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  item,
  onClose,
  onBookItem
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم Habibiç، أود الاستفسار عن كراء وحجز: ${item.title}`
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-[#D4AF37]/40 flex flex-col md:flex-row my-auto text-right"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="إغلاق النافذة"
          className="absolute top-4 left-4 z-20 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors shadow-md"
        >
          <i className="fa-solid fa-xmark text-lg" aria-hidden="true"></i>
        </button>

        {/* Modal Image Container */}
        <div className="md:w-3/5 bg-stone-950 flex items-center justify-center min-h-[300px] sm:min-h-[420px] p-2 relative group">
          <img
            src={item.fullImage || item.image}
            alt={item.title}
            className="max-h-[500px] w-full object-contain rounded-xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-[#F3E5AB] text-xs px-3 py-1 rounded-full border border-[#D4AF37]/30 flex items-center gap-1.5">
            <i className="fa-solid fa-camera text-[#D4AF37]" aria-hidden="true"></i>
            <span>تصوير واقعي لأثاث Habibiç</span>
          </div>
        </div>

        {/* Modal Details */}
        <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between bg-white text-right">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#800020] text-xs font-bold uppercase tracking-wider block">
                {BRAND_INFO.shortName} Événements
              </span>
              <span className="text-xs font-bold text-[#AA820A] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                {item.categoryLabel}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#1C1917] mb-2 leading-tight">
              {item.title}
            </h3>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-4">
              {item.description}
            </p>

            {/* Specifications & Details (No Prices) */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-stone-100">
                <span className="text-stone-500 font-medium">نطاق التوصيل والتركيب:</span>
                <span className="font-semibold text-emerald-700">ولاية سطيف وكافة بلدياتها</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-stone-100">
                <span className="text-stone-500 font-medium">المقاسات والأبعاد:</span>
                <span className="font-semibold text-stone-800">{item.dimensions}</span>
              </div>
              <div className="flex items-center justify-between text-xs py-1.5 border-b border-stone-100">
                <span className="text-stone-500 font-medium">مدة التركيب المتوقعة:</span>
                <span className="font-semibold text-stone-800">حوالي {item.setupTimeHours} ساعة</span>
              </div>
            </div>

            {/* Included Guarantee Badges */}
            <div className="space-y-2 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/50 mb-5 text-xs text-stone-700">
              <div className="font-bold text-[#AA820A] mb-1 flex items-center gap-1">
                <i className="fa-solid fa-gem" aria-hidden="true"></i>
                <span>ما يشمله العرض:</span>
              </div>
              {item.includedItems.slice(0, 3).map((incl, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-emerald-600 mt-0.5 text-[11px]" aria-hidden="true"></i>
                  <span className="text-[11px] leading-tight">{incl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-2">
            <a
              href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(`السلام عليكم Habibiç، أود الاستفسار عن كراء وحجز: ${item.title} لمناسبتي بولاية سطيف`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full gold-shimmer-btn py-3.5 px-4 rounded-xl text-[#1C1917] font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-lg text-emerald-800" aria-hidden="true"></i>
              <span>طلب هذا الديكور وتأكيد التوفر عبر واتساب</span>
            </a>

            <button
              onClick={() => {
                onBookItem(item);
                onClose();
              }}
              type="button"
              className="w-full py-2.5 px-4 rounded-xl border border-stone-300 hover:border-[#D4AF37] text-stone-700 hover:text-stone-900 font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-clipboard-list text-xs" aria-hidden="true"></i>
              <span>تعبئة استمارة الحجز في الموقع</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
