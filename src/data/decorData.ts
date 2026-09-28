export interface DecorItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'weddings' | 'tables' | 'openings';
  categoryLabel: string;
  tag: string;
  image: string;
  fullImage: string;
  description: string;
  pricePerDay?: number; // kept optional for safety
  includedItems: string[];
  dimensions: string;
  setupTimeHours: number;
  isPopular?: boolean;
  isExclusive?: boolean;
}

export const DECOR_ITEMS: DecorItem[] = [
  {
    id: 'wings-luxury',
    title: 'ديكور الأجنحة المضيئة الملكية',
    subtitle: 'خلفية دائرية مضيئة بأجنحة بيضاء فاخرة مع طاولة استقبال أنيقة',
    category: 'weddings',
    categoryLabel: 'أعراس & مناسبات',
    tag: 'الأكثر طلباً',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7MiBh6LHBUZl5yc8_9E3E2cGiezKJJ3hztA-44KZX8jkWQR3c61L1rWgporhpnZZOAXk8CWcSZ0OZSQFtvXkuzN3EntyaVfWJeTCSTIis2QRP0yy8Fq6gWIjNA4z1VEor-coZpYTBwuyRSyIghaMlKmdtPUp0ePd-FmZ0k87xE1oJMcDSBcnK9Dv1NbJBhtk1zuUALBXz4REHIeM6E6vlBp64InLuhWcKAd_Ko8uwe8bYL7xY3MWS4A-J5Ot1RxdwiYA',
    fullImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyQOe8tilF-1tsufry5xiuZpLC_5nRVsCqIBoLl4kiYF37OI136Z2zq1Df6uA-QJaA1joZVwAIWvnFCTL9cPQV7rk3I5C1oVVai9iO-Ixg_XpxLgNdHn4ZosCGpHHzGXogVhI8VNQiA0_1J5GJHAH__p_J68LQlz9CYmth7ZSuxjHVnHwNgqz9xG9V1UWfVs9iSxBlZ-jOc8QBCSic-3nrpE3Otk4wuPIHhJwd3rr2LN3NdGr0uaYmaEUTvRItwY0iRWE',
    description: 'خلفية دائرية مضيئة بأجنحة بيضاء فاخرة مع طاولة استقبال أنيقة وباقة زهور ذهبية متناسقة، مصممة لإعطاء طابع ملوكي يظهر بوضوح في الصور التذكارية بدون أي انعكاسات مزعجة.',
    pricePerDay: 45000,
    includedItems: [
      'هيكل الأجنحة المزدوج المضاء بإضاءة Warm White دافئة',
      'طاولة الاستقبال الملكية المذهبة بتشطيب زجاجي',
      'فازة التنسيق الزهري الفاخر (أبيض وعسلي)',
      'سجادة منصة ناصعة البياض مع كابلات مخفية بأمان',
      'شامل التوصيل، التركيب، والتفكيك بعد انتهاء الحفل'
    ],
    dimensions: 'عرض 3.20 م × ارتفاع 2.60 م',
    setupTimeHours: 1.5,
    isPopular: true
  },
  {
    id: 'butterfly-exclusive',
    title: 'خلفية الفراشة المضيئة الفاخرة',
    subtitle: 'منصة العروسين المنحوتة بشكل فراشة عملاقة ذات إضاءة داخلية نيون',
    category: 'weddings',
    categoryLabel: 'تصميم حصري',
    tag: 'حصري وجديد',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwN50uWCVFj3OrJjwt1Quk_x3lZm7cI6NRH0I5XFAaeAIKQ5LagK796TAJBdjsw0PmVR3FMmu9neaocsGcBHi71HwgItAkuSVMZ6oulcyyHygLUMokLXHHMKJCmD3_z2_pb1vaHEuhERm6cyBHrwTmF-clgox-WMBwmxXTXDTnUzlIAWZV7wruA5cCkUuUr-3Ioc9OEYmhIrl-k12080OARa22QfDQIc-7swLoM-j32LEcqNJHJ_2uSR1AbKYUmoGH6_g',
    fullImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwyG5BfTmtf4EmVAtIelM3SepgNJYMalo3EUYmeVS3tPZIFDSE7CW_U-jQXNL73gldU1AnW4d8DkTWROHrKoOp63GjQ_7EUzhj_-u3aH_MbrYe_DXLCWUy_u8-YfC0jUS2d-H16zKWy0cr2yxF3mwy_vxbA1qQhRFtp78nqNeYnqdxF9iyB00Fo3ewyM-24VZ9QFJOjAmftA-ao5GrBfAz5XT4uwTdf7-q6u8M9AeP-jkmR3pJOGU920nBquCv_5IKrQM',
    description: 'منصة العروسين المنحوتة بشكل فراشة عملاقة ذات إضاءة نيون داخلية متوهجة، مع أريكة بيضاء مريحة بتنجيد مخملي وباقة ورد نقية تعطي إحساساً بالرقي والراحة.',
    pricePerDay: 50000,
    includedItems: [
      'جناحي الفراشة المنحوتين بأحدث تقنيات CNC مع إضاءة نيون مدمجة',
      'كنبة جلوس العروسين المخملية الملكية (تتسع لشخصين بكل راحة)',
      'تنسيق الأزهار البيضاء الفاخرة المحيطة بالقاعدة',
      'أجهزة تحكم بدرجة سطوع الإضاءة لتناسب إضاءة القاعة',
      'فريق التركيب والتأكد من ثبات الهيكل بنسبة 100%'
    ],
    dimensions: 'عرض 3.50 م × ارتفاع 2.70 م',
    setupTimeHours: 2.0,
    isExclusive: true
  },
  {
    id: 'henna-royal',
    title: 'جلسة الحناء والخطوبة الملكية',
    subtitle: 'ستائر مخملية عنابية وأعمدة مزخرفة محاطة بالورود الطبيعية والكراسي الفاخرة',
    category: 'weddings',
    categoryLabel: 'جلسة حناء ملكية',
    tag: 'تراث & فخامة',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAS5DZjUAd16F4xUjlev3fEtirn6RIjBGZPFlyvwPtQwQ0JZ2cI5fcuOdqXcdzcIvEj9nJ2DXuahG_D9qNtDVsJ8rtJFjDQMkGpXX0QLlUpa7W4o3ouOogDLY11jO9cmIQozYuyU5WqygyPgxe5W7TVCfhDOoCG-O-kHbeUc_K8N_augACuiCVmsMfoW0eGrUgz8edDI1mSGsSOf4SbSQbHEw7so4KUoy9wNrhy49xAJ0w36T2xCqjyA_6tkCAWlSDvPHo',
    fullImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQts1hathGnixvtxP0uh2NKkNItyb_evlzTG_0yIZijUoA3eLBGx8M1LGncDlZtpcTFtaYpuhF6AqqYpL3PEJ6WiaLCw6wZqfezs6GO8NwOopiiK5hvDHcybKH9JIrfKC8BXK8iTa8wjjRZvx3TLls-TXpg0mI2MDNQnORVzCsGF0MKy2SeFjlnVyPCAf4hTzjXNLdB7fnixygki7baLn6b1TIg2xdLhYE3XYvVxLhBDXU3Ffu0ugTORYUAQe5I6KYSnw',
    description: 'ستائر مخملية عنابية ملكية مع أعمدة منقوشة محاطة بالورود المتناسقة، مع كراسي مخملية راقية وإكسسوارات ومستلزمات صينية الحناء العاصمية التقليدية بلمسة عصرية.',
    pricePerDay: 42000,
    includedItems: [
      'ستائر مخملية عنابية فاخرة مقاومة للتجعد مع سكة خلفية ثابتة',
      'كرسيين للعروسين بتصميم أنيق ومساند مريحة',
      'طاولة تقديم الحناء مع صينية مذهبة وإكسسوارات التزيين',
      'فوانيس أرضية مذهبة بإضاءة ليد شمعية آمنة',
      'أعمدة وباقات الورود المنعشة ذات الرائحة العطرية الخفيفة'
    ],
    dimensions: 'عرض 3.00 م × ارتفاع 2.50 م',
    setupTimeHours: 1.5
  },
  {
    id: 'crystal-accessories',
    title: 'طقم كؤوس وتقطيع الكعك الكريستالي',
    subtitle: 'كؤوس العروسين المزينة بالتول واللؤلؤ وسكاكين التقطيع الكريستالية',
    category: 'tables',
    categoryLabel: 'إكسسوارات العروسين',
    tag: 'تفاصيل راقية',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQEvSiJ-gFAQUmK-mzmdRY97JW95vYXRvfFylJqHEZ9KZ3SieKt4Te0CZE161fgcM-AUa5oCoLbDLLz5eMPmQFOonv2jm8FqMNhGQuLL59oEf542Y0fpzGadvovgEGGZD7_eN595RtPvUZQEMTQw3TDOu4B8J3nfWmiu4eXnJy0QHzmY53ovBk2mLls3F1W3evXnU2zsDg4sLxPXAoWNzjFgpZ8MtqTCpuGuGlVEpZlsLRpE60x4eNXCwD0cZY417OWRM',
    fullImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkG6wc20S1GgGhahKf4aF2lpsMKAWEmSvrPV1CqD4vXXoX3nOV--KZBE9eAujyz63wtG82kliAyfw24_rS-hNLBYntK9xx2FdutYOCOJuF9fpY-u1BjD251hRhCMCr8RDc_H6CwD07tdH1i2O7VvwHQs2zVK45JkGuRRmTBzJYdrOAYiHqs1t16C7m8udji22tYLCWt_e9e9kHVGxOZe19KdbJxJPvWtAwjBjiNjwXA1Sl_Ym8OYIbQQr7Woz8MwymlcM',
    description: 'كؤوس العروسين المزينة بالتول واللؤلؤ وأدوات تقطيع الكعكة الكريستالية اللامعة، بالإضافة إلى علب وصواني تقديم الخواتم المطرزة بدقة لأجمل لقطات الفيديو والذكرى.',
    pricePerDay: 12000,
    includedItems: [
      'زوج كؤوس العروسين من الكريستال النقي مع لمسات اللؤلؤ الأبيض',
      'سكين ومجرفة تقطيع كعكة الزفاف بمقابض كريستالية مذهبة',
      'علبة تقديم الخواتم الفاخرة المبطنة بالمخمل العاجي',
      'صينية مرآة عاكسة مذهبة لعرض الطقم بالكامل',
      'علبة حفظ مخملية معقمة لحماية كل قطعة'
    ],
    dimensions: 'طقم كامل من 6 قطع',
    setupTimeHours: 0.5
  },
  {
    id: 'mirrored-table',
    title: 'طاولة الضيافة الزجاجية المودرن',
    subtitle: 'طاولة فاخرة بسطح مرآة عاكس مصحوبة بكراسي بيضاء وفازة ذهبية',
    category: 'tables',
    categoryLabel: 'أثاث VIP',
    tag: 'ضيافة ملكية',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9lkoVlL8X5n-HASDbFbuqgbZE_JhJKMR7s1fM1akjZKhMi-CI78NMTIfhgsnKMJ3zTTrU9CQcbqHD52Nacd4TOlwdKKTpgEHGt8uP6I-d5F2wfe_TJYclt1oyOrX_CIPSxG8GYD70ruazhXaacagYIFpEo6j2xYYn6bnL5ZvDwRtu5hQJOvrqqXfh2UFsWYMa5CMLTvlq2WbzkidGPyIxY7I3svbCk1BOwHWfQU6uVpcxnYm-VIqRrkg5YvlHZxjSoMo',
    fullImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB89qbuQWtJHfDOa4RctJWvJ_SD4tFccnkeZzkOeU0BBd9fvId3k6RVg3voKGZRfJVbPRkt_9x-b6JfzCkfZXPFK4RCUpD37fX1f4CU4y4XUb1kOhY-zcUF1xO70Ms_guodH097g_UQKpMU6lIJXMOnF78cCEoZrfBRGtPT96guTe3IIB0Qb2m01xN_VGuUcV2wP80WsbTwl3x58XMc6Cc-B4EL4Xu5YmpenhbXWgsXTINwECYlQK6nsGH8aRLlqtN0Qe8',
    description: 'طاولة أنيقة بسطح مرآة يعكس جمال القاعة، بأرجل هندسية بيضاء وفازة مذهبة بأزهار الأوركيد البيضاء الملكية، مناسبة لطاولة الشرف أو استقبال كبار الضيوف.',
    pricePerDay: 28000,
    includedItems: [
      'طاولة مرآة زجاجية عالية المقاومة ومصقولة الحواف',
      'فازة أزهار أوركيد بيضاء وذهبية طويلة تضفي فخامة استثنائية',
      'حوامل شموع كرومية كريستالية',
      'تنظيف وتلميع فوري للزجاج فور التركيب',
      'إمكانية حجز كراسي شيافاري بيضاء أو ذهبية متناسقة'
    ],
    dimensions: 'قطر 1.40 م (دائرية) أو طول 2.00 م (مستطيلة)',
    setupTimeHours: 1.0
  },
  {
    id: 'grand-entrance-arch',
    title: 'المدخل الملكي وقوس الورد المضيء',
    subtitle: 'قوس استعراضي ساحر من أوراق الشجر البيضاء المضاءة بنظام LED',
    category: 'openings',
    categoryLabel: 'مثالي للافتتاحات والقاعات',
    tag: 'إبهار الحضور',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWEctykueduM3uOq1oVd5vdIi2Wp6s8-YrELzB6fY3I8696Y_VZvh1XMQjeB8xPqJFnT5V_N69aUipfXnV1k-NntR93fzu1QQ4YSFqkzY9siZPDwVX7xwPfwNALt2a5pezmvVb5pBwrn24sEO6AZ24ZNVH5-hpcC9VPIR1qcxnlZKisyfmhPMMLfYbG2ARhV5AQYXfupiyGNw_ej1uUL6CVOJ1NHOmq0FjBsRraOGzrXYaw7VqcxgBYV6bQ6Nf6tYiL24',
    fullImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdADp8i0H5CEzkGEGE548rXLl3C-8-9qtzWVk-vkvHPwN19HTd3wcADgVKCRIPkbcfiQPXzmBZJkPEwitZ5U9M76xIyDtPNNB6JLrw_3WVVlKOIiyioJ56a5P4_8BJgsaFRNGDPYsfM1P-rtsgdKahb8WKVcERV3otlpeDsevg9efYdTFd5KAvi5EUKL5gNPHsB9F6NH-1ucF-X-gfPPF7JhYFQ_4_61lwnHVTOlqDZPqX-Fndq701y96KcYwTbLfUTyU',
    description: 'قوس شجري مضيء يمنح مداخل الحفلات أو تدشين المحلات هيبة غير مسبوقة، مع منصة الاستقبال ومرآة الترحيب المذهبة المصممة لكتابة أسماء العروسين أو اسم المتجر.',
    pricePerDay: 48000,
    includedItems: [
      'قوس ضخم من أغصان الزهور البيضاء المضيئة بإضاءة ناعمة',
      'مرآة ترحيبية ملكية بإطار ذهبي مع كتابة الأسماء بالخط العربي أو اللاتيني',
      'حامل ثلاثي مذهب مع فازة أرضية منسقة',
      'سجادة حمراء أو بيضاء بطول 6 أمتار للمدخل',
      'تثبيت محكم ضد الرياح ومناسب للمساحات المفتوحة والمغلقة'
    ],
    dimensions: 'عرض 2.80 م × ارتفاع 3.00 م',
    setupTimeHours: 2.0
  }
];

export interface SetifCommune {
  code: string;
  nameAr: string;
  nameFr: string;
}

export const SETIF_COMMUNES: SetifCommune[] = [
  { code: 'setif-centre', nameAr: 'سطيف (وسط المدينة وجميع أحيائها)', nameFr: 'Sétif Centre' },
  { code: 'el-eulma', nameAr: 'العلمة', nameFr: 'El Eulma' },
  { code: 'ain-oulmene', nameAr: 'عين ولمان', nameFr: 'Aïn Oulmene' },
  { code: 'ain-arnat', nameAr: 'عين أرنات', nameFr: 'Aïn Arnat' },
  { code: 'ain-azel', nameAr: 'عين أزال', nameFr: 'Aïn Azel' },
  { code: 'ain-elkebira', nameAr: 'عين الكبيرة', nameFr: 'Aïn El Kebira' },
  { code: 'bouandas', nameAr: 'بوعنداس', nameFr: 'Bouandas' },
  { code: 'beni-ouartilane', nameAr: 'بني ورتيلان', nameFr: 'Beni Ourtilane' },
  { code: 'amoucha', nameAr: 'عموشة', nameFr: 'Amoucha' },
  { code: 'ouricia', nameAr: 'أوريسيا', nameFr: 'Ouriça' },
  { code: 'bazer-sakra', nameAr: 'بازر سكرة', nameFr: 'Bazer Sakhra' },
  { code: 'guellal', nameAr: 'قلال', nameFr: 'Guellal' },
  { code: 'ain-lahdjar', nameAr: 'عين الحجر', nameFr: 'Aïn Lahdjar' },
  { code: 'bir-el-arch', nameAr: 'بئر العرش', nameFr: 'Bir El Arch' },
  { code: 'bellaa', nameAr: 'بيضاء برج', nameFr: 'Beidha Bordj' },
  { code: 'djemila', nameAr: 'جميلة', nameFr: 'Djemila' },
  { code: 'guidjel', nameAr: 'قجال', nameFr: 'Guidjel' },
  { code: 'khalil', nameAr: 'خليل', nameFr: 'Khelil' },
  { code: 'kasr-el-abtal', nameAr: 'قصر الأبطال', nameFr: 'Kasr El Abtal' },
  { code: 'hamam-soukhna', nameAr: 'حمام السخنة', nameFr: 'Hammam Soukhna' },
  { code: 'hamam-guergour', nameAr: 'حمام قرقور', nameFr: 'Hammam Guergour' },
  { code: 'bougaa', nameAr: 'بوقاعة', nameFr: 'Bougaa' },
  { code: 'bousselam', nameAr: 'بوسلام', nameFr: 'Bousselam' },
  { code: 'tizi-nbechar', nameAr: 'تيزي نبشار', nameFr: 'Tizi N\'Bechar' },
  { code: 'tala-ifacene', nameAr: 'تالة إيفاسن', nameFr: 'Tala Ifacene' }
];

// Alias for backwards compatibility if needed
export type Wilaya = SetifCommune;
export const WILAYAS = SETIF_COMMUNES;

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  badge: string;
  quote: string;
  stars: number;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'أمين .ب',
    location: 'عرس بقاعة سطيف الكبرى - سطيف',
    badge: 'حفل زفاف',
    quote: 'حجزت ديكور الأجنحة المضيئة لعرسي في سطيف، ما شاء الله كل الحضور انبهروا بالنظافة ولمعان الطاولة وطقم الكؤوس الكريستالي. المعاملة كانت قمة في الاحترام ودقة بالدقيقة في وقت التوصيل والتركيب.',
    stars: 5,
    date: 'تموز 2025'
  },
  {
    id: 't-2',
    author: 'كريم & هشام',
    location: 'افتتاح متجر تجاري - العلمة',
    badge: 'افتتاح تجاري',
    quote: 'قوس الورد المضيء لافتتاح محلنا في العلمة كان نقطة الجذب الأساسية لجميع الزبائن. التوصيل والتركيب في العلمة كان احترافياً وسريعاً جداً.',
    stars: 5,
    date: 'أغسطس 2025'
  },
  {
    id: 't-3',
    author: 'حمزة .م',
    location: 'حفل خطوبة - عين ولمان',
    badge: 'حفل خطوبة',
    quote: 'ديكور الحناء والخطوبة بالستائر الفاخرة كان تحفة رائعة! تغليف محكم، عطر رائع يفوح من الأقمشة، ومصداقية تامة في التعامل والتوصيل لعين ولمان.',
    stars: 5,
    date: 'سبتمبر 2025'
  },
  {
    id: 't-4',
    author: 'وليد .ق',
    location: 'قاعة الحفلات - عين أرنات',
    badge: 'عرس ملكي',
    quote: 'خلفية الفراشة كانت تحفة فنية لا تتكرر! التثبيت كان متيناً والإضاءة ممتازة للصور التذكارية. شكراً لفريق حبيبتش سطيف على طيب المعاملة.',
    stars: 5,
    date: 'سبتمبر 2025'
  }
];

export const BRAND_INFO = {
  name: 'Habibiç Événements & Mariages',
  shortName: 'Habibiç',
  phone: '0771 95 06 77',
  secondaryPhone: '0555 00 00 00',
  phoneRaw: '213771950677',
  handle: 'habibic.events',
  instagram: 'habibic.events',
  tiktok: 'habibic.events',
  facebook: 'habibic.events',
  instagramUrl: 'https://instagram.com/habibic.events',
  tiktokUrl: 'https://tiktok.com/@habibic.events',
  facebookUrl: 'https://www.facebook.com/share/1C2JPpSrCj/?mibextid=wwXIfr',
  addressAr: 'العلمة، ولاية سطيف (حي شناوة / بالقرب من ثابت بوزيد)',
  googleMapsUrl: 'https://maps.app.goo.gl/QfBDy1zB2CQhuLoU9?g_st=ic',
  googleMapsEmbedQuery: '36.1511169,5.7032182',
  hours: '7 أيام / 7 من 09:00 إلى 21:00 (الجمعة من 14:00 إلى 20:00)',
  logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY_dhx7C7U3mJzgFwLZ0NnaGeQubxO4LqWVuVovaxZjP7RMmNDN-d8ABbRilFF9FkXNdSWoZnNtp7HauD_7IXqG3D3QMYG6eecBjQeuR2SUckFLsg3-QF31nD_kqblTkiQbRpcDB2OLu5M7K8UaUw-qXOIpRjGTEgDCTYObBtk0IlgHhIHFbdKyK0JiDkvRRNZKYVu8VFc7cCpylvmigmc7JODaTV5eKTvcU6C96oLgl846C1DWZQ3vmFdCQZx38RegnU',
  badgeLogoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPkd4Qd9A4k2cXxrM0t9Na0bNApI1jcqF5sQKMDLUYbU66TEJp4aCGgJcxHub-gQi7X7EW34GaDZU6UZho8CQPL_M4158bJhWsU49uDMVJU7Q8lts04RNdg7chhyuuMlZwSjUGMRdAW4hGztaaaf36MhXeUo9ivTzUpuJfnuz1YLhyWd3MKXQ-fge8pdyrLz7HcahJqQ5zzjNV4g63Y50kEc_4SYr_hkTVP1DBT9FdkPzEwVx53-gqjklhqc2QeKuyoEk',
  footerLogoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI-iMPlGqpjt2Ru0xyg4WCXu0mCEhs2IPwRZtz8NGRPFEt8KLqOat53iqIlbVWVHmGrWomgCGghPagfNA4wFjni_eOnmcHUNd1K5GX7YS4wZwJNexweDvqduHGm1R1Iow_hhPvI6A7Yy6wXIvBIFlt738obwMRY51AhI3Iapa5lUmtmVzxVsazvxXW7UI6Pn0bxz86edurJd1xEzIlZ0UVZ3ERml1MybUN8L4kbaPd7G1-lK3O4I-7-ggtUj5W3MfoUWY',
  heroMainImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfkbPNp4qsp-rdrnHZIbZrzgV4QBboz8UOqueF8r0AUyv8ElI8B9hTBhpZVgcaJqEDCsnfvw7MdAEMJW78VPVZXRIABZBzRZJ4yiTHnYRFKYP14j_rDMjdMuKFLRWTtRe3tbZ9XdDaY_46BAG-eCTNfHglZ0USjEBDGBEQRoRVoUh4-LVzd2M_-mCIKBVgjpXwyezTIz7_Yioj-tynJ6EF6lBFCix1Hq4daZUBzIUnNSG5lJBxWESu-UHha3g4rfNpe9w',
  heroAccessoryImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALorHBBl9Dtvz2BwmcP0_Ywr8lqkGn7XbXEfG7SE8z7zC3LZYRQmB7gM3v1Lor7wn9L2ltUhvr55ueBuccqj6i3vLFnpD--lA2hir_hIbf3kun0TL3u9k2FBG3RBtoB5h_lDrgol_l8F9TkIZWKVdr05oCHLLCOPMadaTgUX_-PK6qKYSc2j-WzYiEPLXcEKdLoT1u9eFOMwtLGIvNWu_Ba0jAademqBSnv8s-VvdD7w084rrlCsRMgEdlRyOIczr4jko'
};
