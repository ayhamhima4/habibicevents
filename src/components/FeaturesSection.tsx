import React from 'react';
import { BRAND_INFO } from '../data/decorData';

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Brand Visual Badge Card */}
          <div className="lg:col-span-5 text-center">
            <div className="luxury-border-decor p-8 rounded-3xl bg-[#FDFBF7] inline-block max-w-sm shadow-md">
              <img
                src={BRAND_INFO.badgeLogoUrl}
                alt="شعار Habibiç الرسمي"
                className="w-48 h-48 mx-auto object-contain rounded-full shadow-lg border-2 border-[#D4AF37]/60 mb-6 bg-white"
                referrerPolicy="no-referrer"
              />
              <h3 className="font-serif font-bold text-2xl text-[#1C1917]">
                {BRAND_INFO.shortName} Événements
              </h3>
              <p className="text-xs text-[#AA820A] font-semibold tracking-widest mt-1 mb-4 font-sans">
                ÉVÉNEMENTS & MARIAGES
              </p>
              <p className="text-stone-600 text-xs leading-relaxed">
                علامتكم الموثوقة لأفخم ليالي العمر وتنسيق الفعاليات التي تخلد في الذاكرة. نخدمكم بشغف وإتقان في كافة بلديات ولاية سطيف.
              </p>
            </div>
          </div>

          {/* Right Side: Detailed Benefit Points */}
          <div className="lg:col-span-7 space-y-6 text-right">
            <div>
              <span className="text-[#800020] font-bold text-xs uppercase tracking-wider">
                لماذا نحن خيارك الأفضل؟
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917] mt-2">
                كل تفصيلة صغيرة محسوبة لراحتك وتألق ليلتك
              </h2>
            </div>

            <div className="space-y-4">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-[#AA820A] text-lg shrink-0 mt-1">
                  <i className="fa-solid fa-shield-heart" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1917]">أثاث مصان ومغلف باحترافية</h4>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    لا نعتمد الأثاث المستهلك أو المخدوش. يتم فحص كل كرسي، طاولة، وقوس مضيء بعد كل مناسبة وإعادة تلميعها وتغليفها بأكياس واقية لحمايتها أثناء النقل.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-rose-100 flex items-center justify-center text-[#800020] text-lg shrink-0 mt-1">
                  <i className="fa-solid fa-clock-rotate-left" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1917]">الالتزام الصارم بالمواعيد</h4>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    ندرك قيمة وقتك وحساسية يوم الزفاف، لذا يصل فريقنا مبكراً لإنهاء التجهيزات كاملة قبل ساعات من دخول المعازيم والضيوف لالتقاط الصور الأولية بدون أي ارتباك.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-[#AA820A] text-lg shrink-0 mt-1">
                  <i className="fa-solid fa-camera" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#1C1917]">
                    إضاءة مصممة خصيصاً للتصوير (Photogenic)
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">
                    توزيع أضواء الـ LED والأجنحة المضيئة مدروس بعناية ليعطي نتائج ساحرة في كاميرات المصورين المحترفين وهواتف الزوار بدون أي وهج مزعج أو ظلال غير مرغوب فيها.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Connect Quick Action Bar */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex flex-wrap items-center justify-between gap-3 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#800020] text-white flex items-center justify-center text-xs">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </span>
                <div>
                  <span className="block text-[11px] text-stone-500 font-medium">خط الاتصال السريع بسطيف:</span>
                  <a href={`tel:+${BRAND_INFO.phoneRaw}`} className="font-bold text-sm text-[#800020] font-sans" dir="ltr">
                    {BRAND_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-rose-200 text-rose-700 hover:bg-rose-50 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <i className="fa-brands fa-instagram text-rose-600" aria-hidden="true"></i>
                  <span>إنستغرام</span>
                </a>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-stone-300 text-stone-800 hover:bg-stone-50 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                  <span>تيك توك</span>
                </a>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-blue-300 text-blue-800 hover:bg-blue-50 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <i className="fa-brands fa-facebook-f text-blue-600" aria-hidden="true"></i>
                  <span>فيسبوك</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
