import React, { useState, useEffect } from 'react';
import { BRAND_INFO, WILAYAS } from '../data/decorData';

interface BookingSectionProps {
  initialDecor?: string;
  onBookingSuccess?: (bookingCode: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialDecor,
  onBookingSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('حفل زفاف (Mariage)');
  const [eventDate, setEventDate] = useState('');
  const [decorChoice, setDecorChoice] = useState('ديكور الأجنحة المضيئة الملكية');
  const [wilayaCode, setWilayaCode] = useState('setif-centre');
  const [hallLocation, setHallLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedBooking, setSubmittedBooking] = useState<{
    code: string;
    name: string;
    date: string;
    decor: string;
  } | null>(null);

  useEffect(() => {
    if (initialDecor) {
      setDecorChoice(initialDecor);
    }
  }, [initialDecor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !eventDate) return;

    const selectedWilaya = WILAYAS.find((w) => w.code === wilayaCode);
    const wilayaName = selectedWilaya ? selectedWilaya.nameAr : 'الجزائر العاصمة';
    const bookingCode = `HB-${Math.floor(1000 + Math.random() * 9000)}`;

    const newReservation = {
      id: `booking-${Date.now()}`,
      code: bookingCode,
      clientName: fullName,
      phone,
      decorName: decorChoice,
      eventDate,
      eventType,
      location: hallLocation ? `${wilayaName} - ${hallLocation}` : wilayaName,
      status: 'pending' as const,
      statusLabelAr: 'قيد المراجعة الفورية',
      statusColor: 'amber',
      notes,
      createdAt: new Date().toISOString().split('T')[0]
    };

    // Save to localStorage
    const saved = localStorage.getItem('habibic_reservations');
    const existing = saved ? JSON.parse(saved) : [];
    localStorage.setItem('habibic_reservations', JSON.stringify([newReservation, ...existing]));

    setSubmittedBooking({
      code: bookingCode,
      name: fullName,
      date: eventDate,
      decor: decorChoice
    });

    if (onBookingSuccess) {
      onBookingSuccess(bookingCode);
    }

    // Construct WhatsApp message URL
    const message = `طلب حجز جديد من موقع Habibiç (رقم الحجز: ${bookingCode}):
• الاسم الكامل: ${fullName}
• رقم الهاتف: ${phone}
• نوع المناسبة: ${eventType}
• تاريخ المناسبة: ${eventDate}
• الديكور المختار: ${decorChoice}
• الولاية والقاعة: ${wilayaName} ${hallLocation ? `(${hallLocation})` : ''}
• ملاحظات إضافية: ${notes || 'لا توجد'}`;

    const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#800020] font-bold text-xs uppercase tracking-wider">
            معاينة الديكور والتواصل
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1C1917] mt-2">
            تواصل معنا لمعاينة الديكور أو الاستفسار
          </h2>
          <div className="ornament-divider my-4">
            <i className="fa-solid fa-comments text-[#D4AF37] text-sm" aria-hidden="true"></i>
          </div>
          <p className="text-stone-600 text-xs sm:text-sm">
            يمكنك إرسال طلب استفسار أو مراسلتنا فوراً عبر واتساب، الاتصال المباشر، أو متابعة حساباتنا الرسمية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Booking Form */}
          <div className="lg:col-span-7 bg-[#FDFBF7] p-6 sm:p-10 rounded-3xl border border-[#D4AF37]/30 shadow-lg text-right">
            {submittedBooking ? (
              <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500/40 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                </div>
                <h3 className="font-serif font-bold text-2xl text-stone-900">
                  تم استلام طلب حجزك بنجاح!
                </h3>
                <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 inline-block text-right text-xs space-y-1">
                  <p>
                    <span className="font-bold text-stone-500">رقم الحجز المرجعي:</span>{' '}
                    <span className="font-mono font-bold text-[#800020] text-sm">{submittedBooking.code}</span>
                  </p>
                  <p>
                    <span className="font-bold text-stone-500">الاسم:</span> {submittedBooking.name}
                  </p>
                  <p>
                    <span className="font-bold text-stone-500">التاريخ:</span> {submittedBooking.date}
                  </p>
                  <p>
                    <span className="font-bold text-stone-500">الديكور:</span> {submittedBooking.decor}
                  </p>
                </div>
                <p className="text-xs text-stone-600">
                  تم فتح نافذة واتساب للتواصل المباشر مع مديرة الحجوزات لتأكيد ساعة الحضور ومخطط القاعة.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmittedBooking(null)}
                    type="button"
                    className="px-5 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50"
                  >
                    تقديم حجز آخر
                  </button>
                  <a
                    href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(`السلام عليكم Habibiç، بخصوص الحجز رقم ${submittedBooking.code}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-shimmer-btn px-6 py-2.5 rounded-xl text-[#1C1917] text-xs font-bold shadow flex items-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp text-base" aria-hidden="true"></i>
                    <span>متابعة المحادثة عبر واتساب</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="fullName">
                      الاسم الكامل *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: كريم بلقاسم"
                      type="text"
                      className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="phone">
                      رقم الهاتف *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05 / 06 / 07 XX XX XX"
                      type="tel"
                      className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="eventType">
                      نوع المناسبة *
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                    >
                      <option value="حفل زفاف (Mariage)">حفل زفاف (Mariage)</option>
                      <option value="حفل خطوبة (Fiançailles)">حفل خطوبة (Fiançailles)</option>
                      <option value="جلسة حناء تقليدية">جلسة حناء تقليدية</option>
                      <option value="افتتاح محل / تدشين تجاري">افتتاح محل / تدشين تجاري</option>
                      <option value="كراء طاولات وضيافة">كراء طاولات وضيافة فقط</option>
                      <option value="مناسبة خاصة أخرى">مناسبة خاصة أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="eventDate">
                      تاريخ المناسبة التقريبي *
                    </label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      required
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      type="date"
                      className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="decorChoice">
                      الديكور المطلوب
                    </label>
                    <select
                      id="decorChoice"
                      name="decorChoice"
                      value={decorChoice}
                      onChange={(e) => setDecorChoice(e.target.value)}
                      className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                    >
                      <option value="ديكور الأجنحة المضيئة الملكية">خلفية الأجنحة المضيئة الملكية</option>
                      <option value="خلفية الفراشة المضيئة الفاخرة">خلفية الفراشة المضيئة الفاخرة</option>
                      <option value="جلسة الحناء والخطوبة الملكية">جلسة الحناء والخطوبة الملكية</option>
                      <option value="المدخل الملكي وقوس الورد المضيء">المدخل الملكي وقوس الورد المضيء</option>
                      <option value="طاولة الضيافة الزجاجية المودرن">طاولات الضيافة العاكسة والكراسي</option>
                      <option value="طقم كؤوس وتقطيع الكعك الكريستالي">طقم كؤوس وخواتم العروسين فقط</option>
                      <option value="باقة كاملة مخصصة">أحتاج باقة مخصصة تجمع أكثر من خيار</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="wilayaCode">
                      بلدية التوصيل والتركيب (ولاية سطيف) *
                    </label>
                    <select
                      id="wilayaCode"
                      value={wilayaCode}
                      onChange={(e) => setWilayaCode(e.target.value)}
                      className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                    >
                      {WILAYAS.map((w) => (
                        <option key={w.code} value={w.code}>
                          {w.nameAr}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="hallLocation">
                    مكان المناسبة بسطيف (اسم القاعة أو الحي أو المنزل)
                  </label>
                  <input
                    id="hallLocation"
                    name="hallLocation"
                    value={hallLocation}
                    onChange={(e) => setHallLocation(e.target.value)}
                    placeholder="مثال: قاعة البارك مول، صالة الأفراح بالعلمة، أو فيلا خاصة"
                    type="text"
                    className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1" htmlFor="notes">
                    ملاحظات أو طلبات إضافية
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="أي تفاصيل تخص الألوان المفضلة، ساعة الحضور المطلوبة، أو خدمات إضافية..."
                    className="w-full text-sm rounded-xl border-amber-200 focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-white py-2.5 px-3.5"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full gold-shimmer-btn text-[#1C1917] font-bold text-sm sm:text-base py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  <span>إرسال طلب الحجز الآن</span>
                </button>
                <p className="text-[11px] text-center text-stone-500">
                  * سيقوم فريق Habibiç بالرد عليك وتأكيد توفر الديكور وتفاصيل التوصيل ببلديتك في سطيف.
                </p>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between text-right">
            {/* Direct Quick Phone & WhatsApp */}
            <div className="bg-gradient-to-br from-[#1C1917] to-stone-900 text-white p-8 rounded-3xl shadow-xl border border-[#D4AF37]/30">
              <h3 className="font-serif font-bold text-xl text-[#F3E5AB] mb-2">تواصل مباشر وسريع</h3>
              <p className="text-xs text-stone-300 leading-relaxed mb-6">
                إذا كان موعد مناسبتك قريباً، يمكنك الاتصال فوراً برقم الإدارة للحصول على الرد الآني وتأكيد حجز الديكور.
              </p>
              <div className="space-y-4 text-sm">
                <a
                  href={`tel:+${BRAND_INFO.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                  </span>
                  <div>
                    <span className="block text-xs text-stone-400">الهاتف المباشر</span>
                    <span className="font-bold text-base sm:text-lg font-sans text-white tracking-wider block" dir="ltr">
                      +213771950677
                    </span>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent('السلام عليكم Habibiç، أود الاستفسار المباشر عن الأسعار والتوفر')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <i className="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i>
                  </span>
                  <div>
                    <span className="block text-xs text-stone-400">واتساب المبيعات والحجوزات</span>
                    <span className="font-bold text-sm sm:text-base">متاح 24/7 للإجابة الفورية</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Store / Atelier Location Card */}
            <div className="bg-[#FDFBF7] p-6 rounded-3xl border border-amber-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <i className="fa-solid fa-location-dot text-[#800020] text-xl" aria-hidden="true"></i>
                  <h4 className="font-bold text-base text-[#1C1917]">مقر وعنوان المعرض</h4>
                </div>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                  العلمة - سطيف
                </span>
              </div>

              <p className="text-xs text-stone-600 leading-relaxed mb-4">
                {BRAND_INFO.addressAr} — نخدم كامل ولاية سطيف مع التوصيل والتركيب حتى باب القاعة أو المنزل.
              </p>

              {/* Interactive Google Map iframe & direct navigation button */}
              <div className="rounded-2xl overflow-hidden border border-amber-300 shadow-inner bg-stone-100 relative group">
                <iframe
                  title="موقع Habibiç على خرائط جوجل"
                  src={`https://maps.google.com/maps?q=${BRAND_INFO.googleMapsEmbedQuery}&hl=ar&z=15&output=embed`}
                  className="w-full h-48 border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={BRAND_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-3 right-3 bg-white/95 hover:bg-white text-stone-900 border border-[#D4AF37] px-4 py-2.5 rounded-xl text-xs font-bold shadow-lg flex items-center justify-center gap-2 backdrop-blur-xs transition-all hover:scale-101"
                >
                  <i className="fa-solid fa-diamond-turn-right text-emerald-600 text-sm" aria-hidden="true"></i>
                  <span>فتح المسار والموقع في تطبيق Google Maps</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-stone-400" aria-hidden="true"></i>
                </a>
              </div>
            </div>

            {/* Social Handles */}
            <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-amber-200 text-stone-700 shadow-sm">
              <span className="text-xs font-bold">تابعوا جديد ديكوراتنا الأسبوعية (@habibic.events):</span>
              <div className="flex items-center gap-2">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                  aria-label="Instagram @habibic.events"
                  title="Instagram: @habibic.events"
                >
                  <i className="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                  aria-label="Facebook @habibic.events"
                  title="Facebook: @habibic.events"
                >
                  <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a
                  href={BRAND_INFO.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                  aria-label="TikTok @habibic.events"
                  title="TikTok: @habibic.events"
                >
                  <i className="fa-brands fa-tiktok" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
