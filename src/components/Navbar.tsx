import React, { useState } from 'react';
import { BRAND_INFO } from '../data/decorData';

export type ScreenType = 'home' | 'catalog';

interface NavbarProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenBookingModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: ScreenType; label: string; iconClass: string }[] = [
    { id: 'home', label: 'الرئيسية', iconClass: 'fa-solid fa-house' },
    { id: 'catalog', label: 'معرض الديكورات بسطيف', iconClass: 'fa-regular fa-images' }
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <aside className="bg-[#1C1917] text-[#F3E5AB] text-xs sm:text-sm py-2 px-4 border-b border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-medium">
              <i className="fa-solid fa-gem text-[#D4AF37]" aria-hidden="true"></i>
              خدمات كراء وتنظيم الديكورات الراقية — التوصيل والتركيب حصرياً في ولاية سطيف وكافة بلدياتها (19)
            </span>
            <span className="hidden sm:inline-block text-[#D4AF37]/50" aria-hidden="true">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-stone-300">
              <i className="fa-regular fa-clock text-[#D4AF37]" aria-hidden="true"></i>
              {BRAND_INFO.hours}
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a
              href={`tel:+${BRAND_INFO.phoneRaw}`}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <i className="fa-solid fa-phone text-[#D4AF37]" aria-hidden="true"></i>
              <bdi dir="ltr" className="phone-number-ltr" style={{ direction: 'ltr', unicodeBidi: 'embed' }}>
                {BRAND_INFO.phone}
              </bdi>
            </a>
            <span className="text-[#D4AF37]/40" aria-hidden="true">|</span>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1"
              title="Instagram @habibic.events"
            >
              <i className="fa-brands fa-instagram text-[#D4AF37]" aria-hidden="true"></i>
              <span>@{BRAND_INFO.handle}</span>
            </a>
            <span className="hidden sm:inline-block text-[#D4AF37]/40" aria-hidden="true">|</span>
            <a
              href={BRAND_INFO.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex hover:text-white transition-colors items-center gap-1"
              title="TikTok @habibic.events"
            >
              <i className="fa-brands fa-tiktok text-[#D4AF37]" aria-hidden="true"></i>
              <span>تيك توك</span>
            </a>
            <span className="hidden sm:inline-block text-[#D4AF37]/40" aria-hidden="true">|</span>
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex hover:text-white transition-colors items-center gap-1"
              title="Facebook @habibic.events"
            >
              <i className="fa-brands fa-facebook-f text-[#D4AF37]" aria-hidden="true"></i>
              <span>فيسبوك</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-100 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Brand Logo & Identity */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group focus:outline-none text-right"
              type="button"
            >
              <img
                src={BRAND_INFO.logoUrl}
                alt="شعار Habibiç Événements & Mariages"
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain rounded-full border border-[#D4AF37]/40 p-0.5 shadow-sm group-hover:scale-105 transition-transform duration-300 bg-white"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl sm:text-3xl text-[#1C1917] tracking-wide group-hover:text-[#800020] transition-colors">
                  {BRAND_INFO.shortName}
                </span>
                <span className="text-[10px] sm:text-xs font-medium tracking-widest text-[#AA820A] -mt-1 font-sans">
                  ÉVÉNEMENTS & MARIAGES
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 font-medium text-stone-700 text-sm">
              {navLinks.map((item) => {
                const isActive = currentScreen === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    type="button"
                    className={`relative py-1 transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-[#800020] font-bold after:content-[\'\'] after:absolute after:bottom-0 after:right-0 after:w-full after:h-0.5 after:bg-[#D4AF37]'
                        : 'hover:text-[#800020] hover:font-bold after:content-[\'\'] after:absolute after:bottom-0 after:right-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#D4AF37] after:transition-all'
                    }`}
                  >
                    <i className={`${item.iconClass} text-xs text-[#D4AF37]`} aria-hidden="true"></i>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Direct Call Button with Number */}
              <a
                href={`tel:+${BRAND_INFO.phoneRaw}`}
                className="hidden lg:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-amber-300 bg-amber-50 hover:bg-amber-100 text-[#800020] font-bold text-xs transition-colors"
                title="اتصال مباشر"
              >
                <i className="fa-solid fa-phone text-[#D4AF37]" aria-hidden="true"></i>
                <bdi dir="ltr" className="phone-number-ltr" style={{ direction: 'ltr', unicodeBidi: 'embed' }}>
                  {BRAND_INFO.phone}
                </bdi>
              </a>

              {/* Instagram, TikTok & Facebook Social Icons in Navbar */}
              <div className="hidden sm:flex items-center gap-1.5">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 flex items-center justify-center transition-all hover:scale-105 border border-rose-200 shadow-xs"
                  title="إنستغرام @habibic.events"
                  aria-label="Instagram @habibic.events"
                >
                  <i className="fa-brands fa-instagram text-base" aria-hidden="true"></i>
                </a>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-100 text-stone-900 hover:bg-stone-200 flex items-center justify-center transition-all hover:scale-105 border border-stone-300 shadow-xs"
                  title="تيك توك @habibic.events"
                  aria-label="TikTok @habibic.events"
                >
                  <i className="fa-brands fa-tiktok text-sm" aria-hidden="true"></i>
                </a>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-all hover:scale-105 border border-blue-200 shadow-xs"
                  title="صفحتنا على فيسبوك"
                  aria-label="Facebook Habibiç"
                >
                  <i className="fa-brands fa-facebook-f text-sm" aria-hidden="true"></i>
                </a>
              </div>

              {/* WhatsApp Main Button */}
              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent('السلام عليكم Habibiç، أود الاستفسار عن كراء ديكور لمناسبتي في سطيف')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-shimmer-btn px-4 sm:px-5 py-2.5 rounded-full text-[#1C1917] font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <i className="fa-brands fa-whatsapp text-emerald-800 text-base" aria-hidden="true"></i>
                <span>راسلنا على واتساب</span>
              </a>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                aria-label="القائمة الرئيسية"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none cursor-pointer"
              >
                <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`} aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-amber-100 bg-white px-4 pt-3 pb-6 shadow-xl space-y-2 text-right">
            {navLinks.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                type="button"
                className={`w-full text-right py-2.5 px-3 rounded-xl flex items-center justify-between font-semibold border-b border-stone-100 transition-colors ${
                  currentScreen === item.id
                    ? 'bg-amber-50 text-[#800020] font-bold'
                    : 'text-stone-800 hover:bg-stone-50'
                }`}
              >
                <span>{item.label}</span>
                <i className={`${item.iconClass} text-[#D4AF37]`} aria-hidden="true"></i>
              </button>
            ))}

            <div className="pt-3 space-y-2">
              <a
                href={`tel:+${BRAND_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#800020] font-bold text-sm border border-amber-300"
              >
                <i className="fa-solid fa-phone text-[#D4AF37]" aria-hidden="true"></i>
                <span>اتصال مباشر: <bdi dir="ltr" className="phone-number-ltr" style={{ direction: 'ltr', unicodeBidi: 'embed' }}>{BRAND_INFO.phone}</bdi></span>
              </a>

              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent('السلام عليكم Habibiç، أود الاستفسار عن كراء ديكور لمناسبتي في سطيف')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i>
                <span>مراسلة مباشرة على واتساب</span>
              </a>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-rose-50 text-rose-700 font-semibold text-xs border border-rose-200"
                >
                  <i className="fa-brands fa-instagram text-sm" aria-hidden="true"></i>
                  <span>إنستغرام</span>
                </a>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-stone-100 text-stone-800 font-semibold text-xs border border-stone-300"
                >
                  <i className="fa-brands fa-tiktok text-sm" aria-hidden="true"></i>
                  <span>تيك توك</span>
                </a>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 rounded-xl bg-blue-50 text-blue-700 font-semibold text-xs border border-blue-200"
                >
                  <i className="fa-brands fa-facebook-f text-sm" aria-hidden="true"></i>
                  <span>فيسبوك</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
