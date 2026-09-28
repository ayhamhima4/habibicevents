import React from 'react';
import { BRAND_INFO } from '../data/decorData';
import { ScreenType } from './Navbar';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1C1917] text-stone-300 pt-16 pb-12 border-t-2 border-[#D4AF37] text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_INFO.footerLogoUrl}
                alt="Habibiç Logo"
                className="w-14 h-14 object-contain rounded-full border border-[#D4AF37]/60 p-0.5 bg-white"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="font-serif font-bold text-2xl text-white block">Habibiç</span>
                <span className="block text-[10px] text-[#D4AF37] tracking-widest font-sans">
                  ÉVÉNEMENTS & MARIAGES
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              الشركة الرائدة في كراء وتصميم ديكورات المناسبات الملكية، قاعات الأفراح، وجلسات الحناء وافتتاح المحلات التجارية بأرقى لمسات الفخامة — التوصيل والتركيب متاح حصرياً في ولاية سطيف وكافة بلدياتها.
            </p>
            <div className="pt-2 space-y-2">
              <a
                href={BRAND_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline"
              >
                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                <span>موقعنا في العلمة على خرائط Google</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" aria-hidden="true"></i>
              </a>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-[#800020] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-800"
                  title="Instagram: @habibic.events"
                  aria-label="Instagram @habibic.events"
                >
                  <i className="fa-brands fa-instagram text-sm" aria-hidden="true"></i>
                </a>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-800"
                  title="TikTok: @habibic.events"
                  aria-label="TikTok @habibic.events"
                >
                  <i className="fa-brands fa-tiktok text-sm" aria-hidden="true"></i>
                </a>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-stone-900 hover:bg-[#1877F2] text-stone-300 hover:text-white flex items-center justify-center transition-colors border border-stone-800"
                  title="Facebook: @habibic.events"
                  aria-label="Facebook @habibic.events"
                >
                  <i className="fa-brands fa-facebook-f text-sm" aria-hidden="true"></i>
                </a>
                <span className="text-xs font-mono text-stone-400 mr-1 font-semibold">@habibic.events</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#D4AF37]">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer text-right"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-white transition-colors cursor-pointer text-right"
                >
                  معرض الديكورات المتاحة
                </button>
              </li>
              <li>
                <a
                  href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent('السلام عليكم Habibiç، أود الاستفسار عن كراء ديكور لمناسبتي في سطيف')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors text-right flex items-center gap-1.5"
                >
                  <i className="fa-brands fa-whatsapp text-emerald-400 text-xs" aria-hidden="true"></i>
                  <span>تواصل فوري عبر واتساب</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:+${BRAND_INFO.phoneRaw}`}
                  className="hover:text-[#D4AF37] transition-colors text-right flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-phone text-[#D4AF37] text-xs" aria-hidden="true"></i>
                  <span>اتصال هاتفي: {BRAND_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors text-right flex items-center gap-1.5"
                >
                  <i className="fa-brands fa-instagram text-rose-400 text-xs" aria-hidden="true"></i>
                  <span>إنستغرام: @habibic.events</span>
                </a>
              </li>
              <li>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-stone-300 transition-colors text-right flex items-center gap-1.5"
                >
                  <i className="fa-brands fa-tiktok text-stone-400 text-xs" aria-hidden="true"></i>
                  <span>تيك توك: @habibic.events</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#D4AF37]">خدماتنا المتميزة</h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>• كراء منصات العروسين المضيئة (LED)</li>
              <li>• تجهيز جلسات الحناء التقليدية العصرية</li>
              <li>• كراء طاولات المرايا وكراسي الشيافاري</li>
              <li>• أطقم كؤوس العروسين وأدوات التقطيع</li>
              <li>• أقواس الزهور ومداخل القاعات والافتتاحات</li>
              <li>• آلات الدخان الثقيل والألعاب النارية الباردة</li>
            </ul>
          </div>

          {/* Working Hours & Direct Call */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-base text-[#D4AF37]">ساعات العمل والاستقبال</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              نستقبل استفساراتكم وحجوزاتكم يومياً على مدار الأسبوع:
            </p>
            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs space-y-1">
              <div className="flex justify-between">
                <span>السبت - الخميس:</span>
                <span className="text-[#D4AF37] font-sans">09:00 - 21:00</span>
              </div>
              <div className="flex justify-between">
                <span>الجمعة:</span>
                <span className="text-[#D4AF37] font-sans">14:00 - 20:00</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:underline"
              >
                <i className="fa-brands fa-whatsapp text-sm" aria-hidden="true"></i>
                <span>تواصل فوري مع المدير التجارية</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© 2026 {BRAND_INFO.name}. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1">
            <span>صُمم بكل فخامة وإتقان</span>
            <i className="fa-solid fa-heart text-[#800020] text-[10px]" aria-hidden="true"></i>
            <span>لأجمل ليالي العمر</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
