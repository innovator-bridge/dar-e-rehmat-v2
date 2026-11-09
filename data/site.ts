// ALL COPY LIVES HERE. Edit wording in this file only.
// Every string has English (en), Urdu (ur) and Arabic (ar).
// *asterisks* mark words that glow in the accent colour inside the manifesto.
// No prices appear anywhere on this site by design.

export type Lang = 'en' | 'ur' | 'ar';
export type L = { en: string; ur: string; ar: string };

export const LANGS: { code: Lang; label: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'en', label: 'EN', dir: 'ltr' },
  { code: 'ur', label: 'اردو', dir: 'rtl' },
  { code: 'ar', label: 'عربي', dir: 'rtl' },
];

export const MAPS_URL = 'https://maps.app.goo.gl/1qZxiJmNrYEC8BU86';
// PLACEHOLDER: replace with the real contact details before launch.
export const CONTACT = { email: 'hello@dar-e-rehmat.example', phone: '+92 000 0000000' };

export const brand: { name: L; short: L; tagline: L } = {
  name: { en: 'Dar-e-Rehmat', ur: 'دارِ رحمت', ar: 'دار الرحمة' },
  short: { en: 'Dar-e-Rehmat', ur: 'دارِ رحمت', ar: 'دار الرحمة' },
  tagline: {
    en: 'Named for the sake of Muhammad Hayat',
    ur: 'محمد حیات کے نام اور ان کے ایصالِ ثواب کے لیے',
    ar: 'باسم محمد حيات وإكرامًا لذكراه',
  },
};

export const nav: { href: string; label: L }[] = [
  { href: '/', label: { en: 'Home', ur: 'ہوم', ar: 'الرئيسية' } },
  { href: '/langar-khana/', label: { en: 'Langar Khana', ur: 'لنگر خانہ', ar: 'مطبخ الخير' } },
  { href: '/stitching-centre/', label: { en: 'Stitching Centre', ur: 'سلائی مرکز', ar: 'مركز الخياطة' } },
  { href: '/#transport', label: { en: 'Transport and Medical', ur: 'ٹرانسپورٹ اور طبی امداد', ar: 'النقل والطبي' } },
  { href: '/#contact', label: { en: 'Contact', ur: 'رابطہ', ar: 'تواصل' } },
];

export const ui = {
  learnMore: { en: 'Read more', ur: 'مزید پڑھیں', ar: 'اقرأ المزيد' },
  backHome: { en: 'Back to home', ur: 'ہوم پر واپس', ar: 'العودة إلى الرئيسية' },
  comingSoon: { en: 'Photo coming soon', ur: 'تصویر جلد شامل ہو گی', ar: 'الصورة قريبًا' },

  cta: { en: 'Support us', ur: 'ہمارا ساتھ دیں', ar: 'ادعمنا' },
  menu: { en: 'Menu', ur: 'مینو', ar: 'القائمة' },
  close: { en: 'Close menu', ur: 'مینو بند کریں', ar: 'إغلاق القائمة' },
  scroll: { en: 'Scroll', ur: 'نیچے جائیں', ar: 'مرّر' },
  language: { en: 'Language', ur: 'زبان', ar: 'اللغة' },
  watch: { en: 'Watch', ur: 'دیکھیں', ar: 'شاهد' },
  captions: { en: 'Captions', ur: 'سب ٹائٹل', ar: 'الترجمة' },
  captionsOn: { en: 'English captions on', ur: 'انگریزی سب ٹائٹل آن', ar: 'الترجمة الإنجليزية مفعّلة' },
  captionsOff: { en: 'Captions off', ur: 'سب ٹائٹل بند', ar: 'الترجمة متوقفة' },
  soon: {
    en: 'Her words, with a full English translation and live captions, are coming soon.',
    ur: 'ان کے الفاظ، مکمل انگریزی ترجمے اور لائیو سب ٹائٹل کے ساتھ، جلد شامل کیے جائیں گے۔',
    ar: 'كلماتها، مع ترجمة إنجليزية كاملة وترجمة مباشرة، ستُضاف قريبًا.',
  },
  inHerWords: { en: 'In her own words', ur: 'ان کی اپنی زبان میں', ar: 'بكلماتها' },
  english: { en: 'English translation', ur: 'انگریزی ترجمہ', ar: 'الترجمة الإنجليزية' },
  original: { en: 'Original in Urdu', ur: 'اصل اردو', ar: 'الأصل بالأردية' },
  openMap: { en: 'Open in Google Maps', ur: 'گوگل میپس میں کھولیں', ar: 'افتح في خرائط جوجل' },
  demo: {
    en: 'Demo version. Content is being finalised.',
    ur: 'یہ ڈیمو ورژن ہے۔ مواد کو حتمی شکل دی جا رہی ہے۔',
    ar: 'نسخة تجريبية. يجري إعداد المحتوى النهائي.',
  },
};

/* ---------------- HERO ---------------- */
export const hero = {
  pill: {
    en: 'Feeding our town every day since 20 December 2025',
    ur: '۲۰ دسمبر ۲۰۲۵ سے روزانہ اپنے علاقے کو کھانا کھلا رہے ہیں',
    ar: 'نطعم أهل بلدتنا كل يوم منذ ٢٠ ديسمبر ٢٠٢٥',
  },
  h1: {
    en: 'A meal. A skill. A way to heal.',
    ur: 'ایک نوالہ۔ ایک ہنر۔ شفا کا راستہ۔',
    ar: 'وجبة. ومهارة. وطريق إلى الشفاء.',
  },
  sub: {
    en: 'Dar-e-Rehmat is a community charity in Rajajang. We serve a free midday meal, train women to earn with their own hands, and carry patients to hospital.',
    ur: 'دارِ رحمت راجہ جنگ میں ایک فلاحی ادارہ ہے۔ ہم دوپہر کا مفت کھانا کھلاتے ہیں، خواتین کو اپنے ہاتھوں سے کمانے کا ہنر سکھاتے ہیں اور مریضوں کو ہسپتال پہنچاتے ہیں۔',
    ar: 'دار الرحمة جمعية خيرية في راجاجانغ. نقدّم وجبة غداء مجانية، ونعلّم النساء مهنة يكسبن بها بأيديهن، وننقل المرضى إلى المستشفى.',
  },
  primary: { en: 'See our work', ur: 'ہمارا کام دیکھیں', ar: 'شاهد عملنا' },
  secondary: { en: 'Support us', ur: 'ہمارا ساتھ دیں', ar: 'ادعمنا' },
};

// Numbers supplied by the family. target = count-up value.
export const stats: { target: number; prefix?: string; suffix?: string; label: L }[] = [
  { target: 300, suffix: '', prefix: '', label: { en: 'People fed on a typical day', ur: 'روزانہ کھانا کھانے والے', ar: 'شخص يُطعَمون يوميًا' } },
  { target: 70, prefix: '', suffix: '', label: { en: 'Women served every day', ur: 'روزانہ خواتین کو کھانا', ar: 'امرأة يُخدَمن يوميًا' } },
  { target: 600, prefix: '', suffix: '+', label: { en: 'People given full healthcare support', ur: 'افراد کو مکمل طبی معاونت', ar: 'شخص حصلوا على رعاية صحية كاملة' } },
  { target: 30, prefix: '', suffix: '', label: { en: 'Girls learning to sew', ur: 'سلائی سیکھنے والی لڑکیاں', ar: 'فتاة يتعلمن الخياطة' } },
];

export const marquee: L[] = [
  { en: 'Free midday meal', ur: 'دوپہر کا مفت کھانا', ar: 'غداء مجاني' },
  { en: 'Open every day since 20 December 2025', ur: '۲۰ دسمبر ۲۰۲۵ سے روزانہ کھلا', ar: 'مفتوح كل يوم منذ ٢٠ ديسمبر ٢٠٢٥' },
  { en: 'Women and children at our table', ur: 'ہمارے دسترخوان پر خواتین اور بچے', ar: 'نساء وأطفال على مائدتنا' },
  { en: 'Skills that last a lifetime', ur: 'عمر بھر کا ہنر', ar: 'مهارات تدوم مدى الحياة' },
  { en: 'Self-sufficient in six months', ur: 'چھ ماہ میں خود کفالت', ar: 'اكتفاء ذاتي في ستة أشهر' },
  { en: 'A hospital trip every morning', ur: 'ہر صبح ہسپتال کا سفر', ar: 'رحلة إلى المستشفى كل صباح' },
  { en: 'Doctors, scans and medicines', ur: 'ڈاکٹر، سکین اور ادویات', ar: 'أطباء وفحوصات وأدوية' },
  { en: 'Run by family and volunteers', ur: 'خاندان اور رضاکاروں کی خدمت', ar: 'بإدارة العائلة والمتطوعين' },
];

/* ---------------- ABOUT / MANIFESTO ---------------- */
export const about = {
  eyebrow: { en: 'Who we are', ur: 'ہم کون ہیں', ar: 'من نحن' },
  statement: {
    en: 'Dar-e-Rehmat is a *family* promise, named for the sake of our grandfather Muhammad Hayat. No one in our town should go *hungry*. Every woman should be able to learn a *skill* and stand on her own. And no patient should be left without a way to reach *care*.',
    ur: 'دارِ رحمت ایک *خاندانی* وعدہ ہے، جو ہمارے دادا محمد حیات کے نام اور ان کے ایصالِ ثواب کے لیے قائم ہوا۔ ہمارے علاقے میں کوئی *بھوکا* نہ رہے۔ ہر عورت کوئی *ہنر* سیکھ کر اپنے پاؤں پر کھڑی ہو سکے۔ اور کوئی مریض *علاج* تک پہنچنے کے راستے سے محروم نہ رہے۔',
    ar: 'دار الرحمة *عهد* عائلي، سُمّي باسم جدّنا محمد حيات وإكرامًا لذكراه. ينبغي ألّا يبقى أحد في بلدتنا *جائعًا*. وأن تتعلم كل امرأة *مهنة* تقف بها على قدميها. وألّا يُترك مريض بلا طريق يصل به إلى *العلاج*.',
  },
};

/* ---------------- THE CHALLENGE ---------------- */
export const challenge = {
  eyebrow: { en: 'The need', ur: 'ضرورت', ar: 'الحاجة' },
  title: { en: 'What our neighbours face', ur: 'ہمارے پڑوسی کن مشکلات میں ہیں', ar: 'ما يواجهه جيراننا' },
  items: [
    {
      img: '/img/w/l2787.jpg',
      title: { en: 'Hunger is daily, not occasional', ur: 'بھوک روزانہ کا مسئلہ ہے', ar: 'الجوع يومي وليس عابرًا' },
      body: {
        en: 'Children, women and elders in our town often go without a proper midday meal.',
        ur: 'ہمارے علاقے میں بچے، خواتین اور بزرگ اکثر دوپہر کے مناسب کھانے سے محروم رہتے ہیں۔',
        ar: 'كثيرًا ما يبقى الأطفال والنساء وكبار السن في بلدتنا بلا وجبة غداء مناسبة.',
      },
    },
    {
      img: '/img/w/s76.jpg',
      title: { en: 'Women work hard with no ladder up', ur: 'خواتین محنت کرتی ہیں مگر آگے بڑھنے کا راستہ نہیں', ar: 'نساء يكدحن بلا سُلَّم للصعود' },
      body: {
        en: 'Many mothers work in other people’s homes. Their daughters have no route to a skill of their own.',
        ur: 'بہت سی مائیں دوسروں کے گھروں میں کام کرتی ہیں۔ ان کی بیٹیوں کے پاس اپنا ہنر سیکھنے کا کوئی ذریعہ نہیں۔',
        ar: 'كثير من الأمهات يعملن في بيوت الآخرين، وبناتهن لا يجدن طريقًا لتعلّم مهنة خاصة بهن.',
      },
    },
    {
      img: '/img/w/l2797.jpg',
      title: { en: 'The hospital is far away', ur: 'ہسپتال دور ہے', ar: 'المستشفى بعيد' },
      body: {
        en: 'For a sick villager, getting to a good hospital can be harder than the illness itself.',
        ur: 'ایک بیمار دیہاتی کے لیے اچھے ہسپتال تک پہنچنا بعض اوقات بیماری سے بھی مشکل ہوتا ہے۔',
        ar: 'قد يكون الوصول إلى مستشفى جيد أصعب على المريض القروي من المرض نفسه.',
      },
    },
    {
      img: '/img/w/l2754.jpg',
      title: { en: 'Good care is out of reach', ur: 'اچھا علاج پہنچ سے باہر', ar: 'الرعاية الجيدة بعيدة المنال' },
      body: {
        en: 'Qualified doctors, scans and medicines are rarely within a family’s means.',
        ur: 'اہل ڈاکٹر، سکین اور ادویات عموماً ایک خاندان کی پہنچ میں نہیں ہوتیں۔',
        ar: 'نادرًا ما تكون خدمات الأطباء المؤهلين والفحوصات والأدوية في متناول الأسرة.',
      },
    },
    {
      img: '/img/w/l2795.jpg',
      title: { en: 'Aid alone does not last', ur: 'صرف امداد پائیدار نہیں', ar: 'المساعدة وحدها لا تدوم' },
      body: {
        en: 'Handing out help is not enough. People need a way to stand on their own feet.',
        ur: 'صرف مدد دے دینا کافی نہیں۔ لوگوں کو اپنے پاؤں پر کھڑا ہونے کا راستہ چاہیے۔',
        ar: 'لا يكفي توزيع العون. يحتاج الناس إلى طريق يقفون به على أقدامهم.',
      },
    },
  ] as { img: string; title: L; body: L }[],
};

/* ---------------- THREE PILLARS (pinned rail) ---------------- */
export const work = {
  eyebrow: { en: 'What we deliver', ur: 'ہم کیا کرتے ہیں', ar: 'ما نقدّمه' },
  title: { en: 'Three programmes, one purpose', ur: 'تین پروگرام، ایک مقصد', ar: 'ثلاثة برامج، غاية واحدة' },
  pillars: [
    {
      n: '01',
      icon: 'bowl',
      img: '/img/w/l2796.jpg',
      href: '/langar-khana/',
      title: { en: 'Langar Khana', ur: 'لنگر خانہ', ar: 'مطبخ الخير' },
      body: {
        en: 'A hot meal for anyone who comes, served at midday in a clean hall, with dignity.',
        ur: 'جو بھی آئے، اس کے لیے دوپہر کو صاف ستھرے ہال میں عزت کے ساتھ گرم کھانا۔',
        ar: 'وجبة ساخنة لكل من يأتي، تُقدَّم عند الظهيرة في قاعة نظيفة وبكل كرامة.',
      },
      facts: [
        { en: '280 to 300 people served daily', ur: 'روزانہ ۲۸۰ سے ۳۰۰ افراد', ar: 'من ٢٨٠ إلى ٣٠٠ شخص يوميًا' },
        { en: '60 to 70 women every day', ur: 'روزانہ ۶۰ سے ۷۰ خواتین', ar: 'من ٦٠ إلى ٧٠ امرأة يوميًا' },
        { en: 'About 40 bring their children to dine', ur: 'تقریباً ۴۰ اپنے بچوں کے ساتھ کھانا کھاتی ہیں', ar: 'نحو ٤٠ منهنّ يأتين بأطفالهن' },
        { en: 'Packed meals for children at home', ur: 'گھر پر بچوں کے لیے پیک کھانا', ar: 'وجبات معبّأة للأطفال في البيت' },
      ] as L[],
    },
    {
      n: '02',
      icon: 'needle',
      img: '/img/w/s61.jpg',
      href: '/stitching-centre/',
      title: { en: 'Stitching Centre', ur: 'سلائی مرکز', ar: 'مركز الخياطة' },
      body: {
        en: 'Each afternoon, after the meal, women and girls learn to sew garments and become self-sufficient.',
        ur: 'ہر دوپہر کھانے کے بعد خواتین اور لڑکیاں کپڑے سینا سیکھتی ہیں اور خود کفیل بنتی ہیں۔',
        ar: 'كل عصر، بعد الوجبة، تتعلم النساء والفتيات خياطة الملابس ويصبحن مكتفيات ذاتيًا.',
      },
      facts: [
        { en: 'About 30 girls training now', ur: 'اس وقت تقریباً ۳۰ لڑکیاں زیرِ تربیت', ar: 'نحو ٣٠ فتاة تتدرّب الآن' },
        { en: 'Self-sufficient in six months', ur: 'چھ ماہ میں خود کفیل', ar: 'اكتفاء ذاتي في ستة أشهر' },
        { en: 'Taught by a volunteer teacher', ur: 'رضاکار استانی کی تدریس', ar: 'تُدرَّس على يد معلمة متطوعة' },
        { en: 'Cloth and thread first, electric machines later', ur: 'پہلے کپڑا اور دھاگہ، پھر بجلی کی مشین', ar: 'القماش والخيط أولًا ثم الآلات الكهربائية' },
      ] as L[],
    },
    {
      n: '03',
      icon: 'car',
      img: '',
      href: '/#transport',
      title: { en: 'Transport and Medical Aid', ur: 'ٹرانسپورٹ اور طبی امداد', ar: 'النقل والمساعدة الطبية' },
      body: {
        en: 'Every morning our car carries patients from Rajajang to a hospital nearby and brings them home.',
        ur: 'ہر صبح ہماری گاڑی مریضوں کو راجہ جنگ سے قریبی ہسپتال لے جاتی ہے اور واپس گھر پہنچاتی ہے۔',
        ar: 'كل صباح تنقل سيارتنا المرضى من راجاجانغ إلى مستشفى قريب وتعيدهم إلى بيوتهم.',
      },
      facts: [
        { en: 'One hospital trip each morning', ur: 'ہر صبح ہسپتال کا ایک سفر', ar: 'رحلة واحدة إلى المستشفى كل صباح' },
        { en: 'Consultations with qualified doctors', ur: 'اہل ڈاکٹروں سے معائنہ', ar: 'استشارات مع أطباء مؤهلين' },
        { en: 'Full body scans', ur: 'مکمل باڈی سکین', ar: 'فحوصات شاملة للجسم' },
        { en: 'Free medicines, including specialist ones', ur: 'مفت ادویات، بشمول خصوصی ادویات', ar: 'أدوية مجانية، منها الأدوية المتخصصة' },
      ] as L[],
    },
  ],
};

/* ---------------- HOW THE SEWING MODEL WORKS (stacking cards) ---------------- */
export const model = {
  eyebrow: { en: 'The stitching model', ur: 'سلائی مرکز کا ماڈل', ar: 'نموذج مركز الخياطة' },
  title: { en: 'From first stitch to own machine', ur: 'پہلے ٹانکے سے اپنی مشین تک', ar: 'من الغرزة الأولى إلى آلتك الخاصة' },
  lede: {
    en: 'Our food programme feeds people today. Our stitching centre is different. It is built so that each woman leaves needing us less.',
    ur: 'ہمارا لنگر آج کی بھوک مٹاتا ہے۔ سلائی مرکز مختلف ہے۔ اسے اس طرح بنایا گیا ہے کہ ہر خاتون ہمارے سہارے کی کم سے کم محتاج رہے۔',
    ar: 'مطبخنا يُشبع الناس اليوم. أما مركز الخياطة فهي مختلفة؛ فقد صُمّمت لتحتاج كل امرأة إلينا أقل فأقل.',
  },
  steps: [
    {
      n: '01',
      img: '/img/w/s63.jpg',
      tag: { en: 'Day one', ur: 'پہلا دن', ar: 'اليوم الأول' },
      title: { en: 'Come after the meal', ur: 'کھانے کے بعد آئیں', ar: 'تعالَي بعد الوجبة' },
      body: {
        en: 'When the midday meal ends, the hall turns into a classroom. Maids bring their daughters here to train.',
        ur: 'دوپہر کا کھانا ختم ہوتے ہی ہال کلاس روم بن جاتا ہے۔ گھروں میں کام کرنے والی خواتین اپنی بیٹیوں کو تربیت کے لیے یہاں لاتی ہیں۔',
        ar: 'عند انتهاء وجبة الغداء تتحول القاعة إلى صف دراسي. تُحضر العاملات في البيوت بناتهن للتدرّب هنا.',
      },
    },
    {
      n: '02',
      img: '/img/w/s15.jpg',
      tag: { en: 'Months 1 to 6', ur: 'ماہ ۱ تا ۶', ar: 'الأشهر ١ إلى ٦' },
      title: { en: 'Learn on cloth and thread', ur: 'کپڑے اور دھاگے پر سیکھیں', ar: 'تعلَّمي على القماش والخيط' },
      body: {
        en: 'Beginners practise by hand on ordinary cloth, with thread and needle, guided by our volunteer teacher.',
        ur: 'ابتدا میں سیکھنے والی عام کپڑے پر سوئی دھاگے سے ہاتھ کی مشق کرتی ہیں، ہماری رضاکار استانی کی رہنمائی میں۔',
        ar: 'تتدرّب المبتدئات يدويًا على قماش عادي بالإبرة والخيط، بإشراف معلمتنا المتطوعة.',
      },
    },
    {
      n: '03',
      img: '/img/w/s18.jpg',
      tag: { en: 'After training', ur: 'تربیت کے بعد', ar: 'بعد التدريب' },
      title: { en: 'Sew real garments and earn', ur: 'اصل ملبوسات سیئیں اور کمائیں', ar: 'خيطي ملابس حقيقية واكسبي' },
      body: {
        en: 'Trained women move to electric machines and produce garments. Larger work can come from companies that give clothing to be stitched.',
        ur: 'تربیت یافتہ خواتین بجلی کی مشینوں پر ملبوسات تیار کرتی ہیں۔ جو کمپنیاں سلائی کے لیے کپڑے دیتی ہیں، ان سے بڑے آرڈر بھی مل سکتے ہیں۔',
        ar: 'تنتقل المتدرّبات إلى الآلات الكهربائية وتنتجن الملابس. وقد تأتي أعمال أكبر من شركات تسلّم الملابس للخياطة.',
      },
    },
    {
      n: '04',
      img: '/img/w/s61.jpg',
      tag: { en: 'Independence', ur: 'خود کفالت', ar: 'الاستقلال' },
      title: { en: 'Own machine, own income', ur: 'اپنی مشین، اپنی آمدنی', ar: 'آلتها الخاصة، ودخلها الخاص' },
      body: {
        en: 'With a skill and an income, a woman can buy her own machine, work from home and move on. A whole family stands a little taller.',
        ur: 'ہنر اور آمدنی کے ساتھ خاتون اپنی مشین خرید کر گھر سے کام کر سکتی ہے اور آگے بڑھ سکتی ہے۔ پورا گھرانہ اپنے پاؤں پر کھڑا ہوتا ہے۔',
        ar: 'بالمهارة والدخل تستطيع المرأة شراء آلتها الخاصة والعمل من بيتها والمضيّ قدمًا، فتقف الأسرة كلها بثبات أكبر.',
      },
    },
  ],
  assurances: [
    { title: { en: 'Open to every girl', ur: 'ہر لڑکی کے لیے دروازہ کھلا', ar: 'مفتوحة لكل فتاة' }, body: { en: 'Maids and their daughters are welcome to train here.', ur: 'گھروں میں کام کرنے والی خواتین اور ان کی بیٹیوں کا یہاں خیرمقدم ہے۔', ar: 'العاملات في البيوت وبناتهن مرحّب بهن للتدرّب هنا.' } },
    { title: { en: 'Taught with care', ur: 'خلوص سے تدریس', ar: 'تعليم بإخلاص' }, body: { en: 'A volunteer teacher guides every girl.', ur: 'ایک رضاکار استانی ہر لڑکی کی رہنمائی کرتی ہے۔', ar: 'معلمة متطوعة ترشد كل فتاة.' } },
    { title: { en: 'Built to last', ur: 'پائیدار بنیاد', ar: 'مبني ليدوم' }, body: { en: 'A skill is something no one can take away.', ur: 'ہنر وہ دولت ہے جو کوئی چھین نہیں سکتا۔', ar: 'المهارة ثروة لا يستطيع أحد أن يسلبها.' } },
  ] as { title: L; body: L }[],
  notice: {
    en: 'Dar-e-Rehmat is currently completing its legal registration. Figures on this page describe our daily work as it stands today.',
    ur: 'دارِ رحمت اس وقت اپنی قانونی رجسٹریشن مکمل کر رہا ہے۔ اس صفحے کے اعداد و شمار ہمارے موجودہ روزمرہ کام کو ظاہر کرتے ہیں۔',
    ar: 'تُنجز دار الرحمة حاليًا إجراءات تسجيلها القانوني. الأرقام في هذه الصفحة تصف عملنا اليومي كما هو اليوم.',
  },
};

/* ---------------- PROOF BAND + KPIs + TIMELINE ---------------- */
export const proof = {
  eyebrow: { en: 'Our record', ur: 'ہمارا ریکارڈ', ar: 'سجلّنا' },
  title: {
    en: 'Not one day off since 20 December 2025',
    ur: '۲۰ دسمبر ۲۰۲۵ سے ایک دن کی بھی چھٹی نہیں',
    ar: 'دون يوم عطلة واحد منذ ٢٠ ديسمبر ٢٠٢٥',
  },
  body: {
    en: 'Every day, the kitchen opens, the pots are lit and the doors stay open to anyone who is hungry.',
    ur: 'ہر روز چولہا جلتا ہے، دیگیں چڑھتی ہیں اور ہر بھوکے کے لیے دروازہ کھلا رہتا ہے۔',
    ar: 'كل يوم يُفتح المطبخ وتُشعل النار وتبقى الأبواب مفتوحة لكل جائع.',
  },
  kpis: [
    { target: 300, suffix: '', label: { en: 'People fed daily', ur: 'روزانہ کھانا کھانے والے', ar: 'يُطعَمون يوميًا' } },
    { target: 70, suffix: '', label: { en: 'Women served daily', ur: 'روزانہ خواتین', ar: 'نساء يوميًا' } },
    { target: 600, suffix: '+', label: { en: 'People with full healthcare support', ur: 'افراد کو مکمل طبی معاونت', ar: 'أشخاص حصلوا على رعاية صحية كاملة' } },
    { target: 30, suffix: '', label: { en: 'Girls learning to sew', ur: 'سلائی سیکھنے والی لڑکیاں', ar: 'فتيات يتعلمن الخياطة' } },
  ] as { target: number; suffix: string; label: L }[],
  timelineTitle: { en: 'How the work has grown', ur: 'کام کیسے بڑھا', ar: 'كيف نما العمل' },
  // Only the opening date was given. The other phases are deliberately undated.
  timeline: [
    {
      when: { en: '20 December 2025', ur: '۲۰ دسمبر ۲۰۲۵', ar: '٢٠ ديسمبر ٢٠٢٥' },
      title: { en: 'The kitchen opens', ur: 'لنگر کا آغاز', ar: 'افتتاح المطبخ' },
      body: { en: 'The first pots go on and the midday meal begins. It has not stopped since.', ur: 'پہلی دیگ چڑھی اور دوپہر کا کھانا شروع ہوا۔ تب سے یہ ایک دن نہیں رکا۔', ar: 'نُصبت أولى القدور وبدأت وجبة الغداء، ولم تتوقف منذ ذلك اليوم.' },
    },
    {
      when: { en: 'Soon after', ur: 'اس کے بعد', ar: 'بعد ذلك' },
      title: { en: 'Women and children join the table', ur: 'خواتین اور بچے دسترخوان پر', ar: 'النساء والأطفال على المائدة' },
      body: { en: 'Daily numbers climb to 280 to 300, with 60 to 70 women, many with their children.', ur: 'روزانہ تعداد ۲۸۰ سے ۳۰۰ تک پہنچی، جن میں ۶۰ سے ۷۰ خواتین ہیں، بہت سی اپنے بچوں کے ساتھ۔', ar: 'ارتفع العدد اليومي إلى ما بين ٢٨٠ و٣٠٠، منهم ٦٠ إلى ٧٠ امرأة، كثيرات مع أطفالهن.' },
    },
    {
      when: { en: 'Every morning', ur: 'ہر صبح', ar: 'كل صباح' },
      title: { en: 'The hospital trip', ur: 'ہسپتال کا سفر', ar: 'رحلة المستشفى' },
      body: { en: 'A seven-seater car takes patients to hospital for doctors, scans and medicines, then brings them home. Nearly 600 people have been supported.', ur: 'سات سیٹوں والی گاڑی مریضوں کو ڈاکٹر، سکین اور ادویات کے لیے ہسپتال لے جاتی ہے اور واپس گھر پہنچاتی ہے۔ تقریباً ۶۰۰ افراد کی مدد ہو چکی ہے۔', ar: 'تنقل سيارة من سبعة مقاعد المرضى إلى المستشفى للأطباء والفحوصات والأدوية ثم تعيدهم. وقد استفاد نحو ٦٠٠ شخص.' },
    },
    {
      when: { en: 'Every afternoon', ur: 'ہر سہ پہر', ar: 'كل عصر' },
      title: { en: 'The stitching centre', ur: 'سلائی مرکز', ar: 'مركز الخياطة' },
      body: { en: 'Once the diners leave, the same hall becomes a classroom for about 30 girls.', ur: 'کھانے والے رخصت ہوتے ہیں تو وہی ہال تقریباً ۳۰ لڑکیوں کے لیے کلاس روم بن جاتا ہے۔', ar: 'بعد انصراف الضيوف تتحول القاعة نفسها إلى صف دراسي لنحو ٣٠ فتاة.' },
    },
  ],
};

/* ---------------- TEAMS ---------------- */
type Person = { img: string; name: L; role: L; note: L };
const helper = (img: string, name: L): Person => ({
  img, name,
  role: { en: 'Helper', ur: 'معاون', ar: 'مساعد' },
  note: { en: 'Helps prepare, carry and clean up.', ur: 'تیاری، اٹھانے رکھنے اور صفائی میں ہاتھ بٹاتے ہیں۔', ar: 'يساعد في التحضير والحمل والتنظيف.' },
});

export const teamFood = {
  eyebrow: { en: 'The people', ur: 'ہمارے لوگ', ar: 'أهلنا' },
  title: { en: 'The hands behind every meal', ur: 'ہر نوالے کے پیچھے ہاتھ', ar: 'الأيدي وراء كل وجبة' },
  lede: {
    en: 'Six or seven men run the kitchen each day, including our cook.',
    ur: 'ہر روز چھ سات افراد لنگر چلاتے ہیں، جن میں باورچی بھی شامل ہے۔',
    ar: 'يدير المطبخ كل يوم ستة أو سبعة رجال، منهم الطبّاخ.',
  },
  people: [
    { img: '/img/team/shafique_supervisor.jpg', name: { en: 'Shafique', ur: 'شفیق', ar: 'شفيق' }, role: { en: 'Supervisor', ur: 'سپروائزر', ar: 'المشرف' }, note: { en: 'Oversees the kitchen and the dining hall each day.', ur: 'روزانہ لنگر اور ہال کی نگرانی کرتے ہیں۔', ar: 'يشرف يوميًا على المطبخ وقاعة الطعام.' } },
    { img: '/img/team/aziz_chef.jpg', name: { en: 'Aziz', ur: 'عزیز', ar: 'عزيز' }, role: { en: 'Chef', ur: 'باورچی', ar: 'الطبّاخ' }, note: { en: 'Cooks the midday meal for up to 300 people.', ur: 'تین سو افراد تک کے لیے دوپہر کا کھانا پکاتے ہیں۔', ar: 'يطبخ وجبة الغداء لما يصل إلى ٣٠٠ شخص.' } },
    { img: '/img/team/janna_distributor.jpg', name: { en: 'Janna', ur: 'جنّا', ar: 'جنّا' }, role: { en: 'Distributor', ur: 'تقسیم کار', ar: 'موزّع الطعام' }, note: { en: 'Serves the food and makes sure everyone is looked after.', ur: 'کھانا تقسیم کرتے ہیں اور ہر ایک کا خیال رکھتے ہیں۔', ar: 'يوزّع الطعام ويحرص على أن يُعتنى بالجميع.' } },
    helper('/img/team/manzoor_helper.jpg', { en: 'Manzoor', ur: 'منظور', ar: 'منظور' }),
    helper('/img/team/jaj_shah_helper.jpg', { en: 'Jaj Shah', ur: 'جاج شاہ', ar: 'جاج شاه' }),
    helper('/img/team/rehamt_ali_helper.jpg', { en: 'Rehmat Ali', ur: 'رحمت علی', ar: 'رحمت علي' }),
    helper('/img/team/waris_helper.jpg', { en: 'Waris', ur: 'وارث', ar: 'وارث' }),
  ] as Person[],
};

export const teamCentre = {
  eyebrow: { en: 'The people', ur: 'ہمارے لوگ', ar: 'أهلنا' },
  title: { en: 'The hands behind every stitch', ur: 'ہر ٹانکے کے پیچھے ہاتھ', ar: 'الأيدي وراء كل غرزة' },
  lede: {
    en: 'The centre is led by its director and taught by a volunteer teacher.',
    ur: 'مرکز کی سربراہی ڈائریکٹر کرتی ہیں اور تدریس ایک رضاکار استانی کے ذمے ہے۔',
    ar: 'تقود المركزَ مديرتُه وتتولى التدريسَ معلمة متطوعة.',
  },
  people: [
    { img: '/img/team/director.jpg', name: { en: 'Director', ur: 'ڈائریکٹر', ar: 'المديرة' }, role: { en: 'Director of the Stitching Centre', ur: 'سلائی مرکز کی ڈائریکٹر', ar: 'مديرة مركز الخياطة' }, note: { en: 'Leads the centre and the training of every girl.', ur: 'مرکز اور ہر لڑکی کی تربیت کی سربراہی کرتی ہیں۔', ar: 'تقود المركز وتدريب كل فتاة.' } },
    { img: '/img/team/yasmeen.jpg', name: { en: 'Yasmeen Iqbal Master', ur: 'یاسمین اقبال ماسٹر', ar: 'ياسمين إقبال ماستر' }, role: { en: 'Volunteer teacher', ur: 'رضاکار استانی', ar: 'معلمة متطوعة' }, note: { en: 'Teaches stitching to the girls every afternoon.', ur: 'ہر سہ پہر لڑکیوں کو سلائی سکھاتی ہیں۔', ar: 'تعلّم الفتيات الخياطة كل عصر.' } },
  ] as Person[],
};

/* ---------------- STITCHING CENTRE PAGE ---------------- */
export const centre = {
  eyebrow: { en: 'Dastakari Centre', ur: 'دستکاری مرکز', ar: 'مركز الحِرَف' },
  pageTitle: { en: 'The Stitching Centre', ur: 'سلائی مرکز', ar: 'مركز الخياطة' },
  pageSub: {
    en: 'Every afternoon, after the midday meal, the same hall becomes a classroom where women and girls learn a skill that lasts a lifetime.',
    ur: 'ہر سہ پہر دوپہر کے کھانے کے بعد وہی ہال کلاس روم بن جاتا ہے جہاں خواتین اور لڑکیاں عمر بھر کا ہنر سیکھتی ہیں۔',
    ar: 'كل عصر، بعد غداء الظهيرة، تتحول القاعة نفسها إلى صف تتعلم فيه النساء والفتيات مهارة تدوم مدى الحياة.',
  },
  banner: '/img/w/s65.jpg',
  title: { en: 'Skills that outlast any meal', ur: 'ایسا ہنر جو ہر کھانے سے بڑھ کر ہے', ar: 'مهارة تدوم أكثر من أي وجبة' },
  lede: {
    en: 'Giving a skill to someone who knows nothing, and making her self-sufficient in six months, is a model the world needs. It is sustainable because it ends in independence, not in waiting for the next handout.',
    ur: 'جو کچھ نہیں جانتی اسے ہنر دینا اور چھ ماہ میں خود کفیل بنا دینا، ایسا ماڈل ہے جس کی دنیا کو ضرورت ہے۔ یہ پائیدار اس لیے ہے کہ اس کا انجام اگلی امداد کا انتظار نہیں بلکہ خود مختاری ہے۔',
    ar: 'أن نمنح مهارة لمن لا تعرف شيئًا ونجعلها مكتفية ذاتيًا في ستة أشهر هو نموذج يحتاجه العالم. وهو مستدام لأنه ينتهي بالاستقلال، لا بانتظار المساعدة التالية.',
  },
  teacherName: { en: 'Yasmeen Iqbal Master', ur: 'یاسمین اقبال ماسٹر', ar: 'ياسمين إقبال ماستر' },
  teacherRole: { en: 'Volunteer teacher', ur: 'رضاکار استانی', ar: 'معلمة متطوعة' },
  videoTitle: { en: 'Meet our teacher', ur: 'ہماری استانی سے ملیں', ar: 'تعرّف على معلمتنا' },
  clipsTitle: { en: 'Inside the classroom', ur: 'کلاس روم کے اندر', ar: 'داخل الصف' },
  garmentsEyebrow: { en: 'The end product', ur: 'تیار شدہ ملبوسات', ar: 'المنتج النهائي' },
  garmentsTitle: { en: 'Garments made by our girls', ur: 'ہماری لڑکیوں کے بنائے ملبوسات', ar: 'ملابس صنعتها فتياتنا' },
  garmentsNote: {
    en: 'More garment photos will be added here as the girls complete them.',
    ur: 'جیسے جیسے لڑکیاں ملبوسات مکمل کریں گی، مزید تصاویر یہاں شامل کی جائیں گی۔',
    ar: 'ستُضاف صور أخرى للملابس هنا كلما أنجزتها الفتيات.',
  },
  garments: [
    { src: '/img/w/s14.jpg', alt: { en: 'A finished printed dress for a child', ur: 'بچی کا تیار شدہ پرنٹڈ فراک', ar: 'فستان مطبوع جاهز لطفلة' } },
    { src: '/img/w/s21.jpg', alt: { en: 'A finished blue patterned dress', ur: 'نیلے ڈیزائن کا تیار شدہ فراک', ar: 'فستان أزرق منقوش جاهز' } },
  ] as { src: string; alt: L }[],
  galleryEyebrow: { en: 'In the hall', ur: 'ہال کے اندر', ar: 'داخل القاعة' },
  galleryTitle: { en: 'Learning, cutting, ironing, sewing', ur: 'سیکھنا، کاٹنا، استری کرنا، سینا', ar: 'التعلّم والقص والكيّ والخياطة' },
  gallery: [
    { src: '/img/w/s1.jpg', alt: { en: 'Hands guiding cloth under the needle', ur: 'سوئی کے نیچے کپڑا سرکاتے ہاتھ', ar: 'أيدٍ توجّه القماش تحت الإبرة' } },
    { src: '/img/w/s17.jpg', alt: { en: 'Cutting bright fabric with scissors', ur: 'قینچی سے چمکدار کپڑا کاٹا جا رہا ہے', ar: 'قص قماش زاهٍ بالمقص' } },
    { src: '/img/w/s55.jpg', alt: { en: 'A trainee at her sewing machine', ur: 'اپنی مشین پر کام کرتی ایک سیکھنے والی', ar: 'متدرّبة عند آلة الخياطة' } },
    { src: '/img/w/s39.jpg', alt: { en: 'A student notebook on machine parts', ur: 'مشین کے پرزوں پر طالبہ کی کاپی', ar: 'دفتر طالبة عن أجزاء الآلة' } },
    { src: '/img/w/s12.jpg', alt: { en: 'Sewing a floral fabric', ur: 'پھولدار کپڑے کی سلائی', ar: 'خياطة قماش مزهّر' } },
    { src: '/img/w/s59.jpg', alt: { en: 'Stitching blue cloth by hand', ur: 'نیلے کپڑے پر ہاتھ کی سلائی', ar: 'خياطة قماش أزرق يدويًا' } },
    { src: '/img/w/s25.jpg', alt: { en: 'Ironing a finished piece', ur: 'تیار ٹکڑے کی استری', ar: 'كيّ قطعة منتهية' } },
    { src: '/img/w/s49.jpg', alt: { en: 'A pattern drawn in a notebook', ur: 'کاپی میں بنایا گیا پیٹرن', ar: 'نموذج مرسوم في دفتر' } },
    { src: '/img/w/s68.jpg', alt: { en: 'Sewing yellow fabric', ur: 'پیلے کپڑے کی سلائی', ar: 'خياطة قماش أصفر' } },
    { src: '/img/w/s84.jpg', alt: { en: 'A teacher at her machine, guiding a student', ur: 'استانی مشین پر طالبہ کی رہنمائی کرتے ہوئے', ar: 'معلمة عند آلتها ترشد طالبة' } },
    { src: '/img/w/s83.jpg', alt: { en: 'Hand finishing a bright garment', ur: 'روشن ملبوس پر ہاتھ کی تکمیل', ar: 'إتمام ثوب زاهٍ يدويًا' } },
    { src: '/img/w/s89.jpg', alt: { en: 'Two learners at work', ur: 'دو سیکھنے والیاں کام کرتے ہوئے', ar: 'متعلّمتان تعملان' } },
    { src: '/img/w/s51.jpg', alt: { en: 'Pattern shapes and scissors in a notebook', ur: 'کاپی میں پیٹرن کی شکلیں اور قینچی', ar: 'أشكال نماذج ومقص في دفتر' } },
    { src: '/img/w/s27.jpg', alt: { en: 'The whole hall during class', ur: 'کلاس کے دوران پورا ہال', ar: 'القاعة كلها أثناء الدرس' } },
  ] as { src: string; alt: L }[],
};

/* ---------------- LANGAR KHANA PAGE ---------------- */
export const langar = {
  pageTitle: { en: 'Langar Khana', ur: 'لنگر خانہ', ar: 'مطبخ الخير' },
  pageSub: {
    en: 'A hot midday meal for 280 to 300 people every day, served with dignity and never closed.',
    ur: 'روزانہ ۲۸۰ سے ۳۰۰ افراد کے لیے دوپہر کا گرم کھانا، عزت کے ساتھ اور بغیر ناغے کے۔',
    ar: 'وجبة غداء ساخنة لما بين ٢٨٠ و٣٠٠ شخص كل يوم، تُقدَّم بكرامة ولا تتوقف.',
  },
  banner: '/img/w/l2768.jpg',
  intro: {
    en: 'The kitchen opens every day at midday. Children, women and elders sit together on clean mats and eat. Around 40 of the 60 to 70 women who come each day bring their children to dine, and the rest take packed food home for the little ones.',
    ur: 'لنگر ہر روز دوپہر کو کھلتا ہے۔ بچے، خواتین اور بزرگ صاف چٹائیوں پر ساتھ بیٹھ کر کھاتے ہیں۔ روز آنے والی ۶۰ سے ۷۰ خواتین میں سے تقریباً ۴۰ اپنے بچوں کو ساتھ لاتی ہیں اور باقی چھوٹوں کے لیے گھر پیک کھانا لے جاتی ہیں۔',
    ar: 'يفتح المطبخ أبوابه كل يوم عند الظهيرة. يجلس الأطفال والنساء وكبار السن معًا على حصائر نظيفة ويأكلون. نحو ٤٠ من النساء اللواتي يأتين كل يوم، وعددهن بين ٦٠ و٧٠، يُحضرن أطفالهن لتناول الطعام، والبقية يأخذن طعامًا معبّأً إلى الصغار في البيت.',
  },
  galleryEyebrow: { en: 'The kitchen and the hall', ur: 'باورچی خانہ اور ہال', ar: 'المطبخ والقاعة' },
  galleryTitle: { en: 'Where the work happens', ur: 'جہاں یہ کام ہوتا ہے', ar: 'حيث يتم العمل' },
  gallery: [
    { src: '/img/w/l2777.jpg', alt: { en: 'Bowls being filled from the pot', ur: 'دیگ سے پیالے بھرے جا رہے ہیں', ar: 'تُملأ الأوعية من القدر' } },
    { src: '/img/w/l2792.jpg', alt: { en: 'Serving the diners', ur: 'کھانے والوں کو کھانا پیش کیا جا رہا ہے', ar: 'تقديم الطعام للضيوف' } },
    { src: '/img/w/l2753.jpg', alt: { en: 'Green herbs cooking in a large pot', ur: 'بڑی دیگ میں ہری ترکاری پک رہی ہے', ar: 'أعشاب خضراء تُطبخ في قدر كبير' } },
    { src: '/img/w/l2728.jpg', alt: { en: 'Spices and rice prepared for cooking', ur: 'پکانے کے لیے مصالحے اور چاول', ar: 'توابل وأرز مجهزة للطبخ' } },
    { src: '/img/w/l2725.jpg', alt: { en: 'The clean prayer-mat hall before service', ur: 'کھانے سے پہلے صاف ستھرا ہال', ar: 'القاعة النظيفة قبل التقديم' } },
    { src: '/img/w/l2744.jpg', alt: { en: 'Grain roasting in a pan', ur: 'کڑاہی میں اناج بھونا جا رہا ہے', ar: 'حبوب تُحمَّص في مقلاة' } },
    { src: '/img/w/l2740.jpg', alt: { en: 'A large pot of curry being stirred', ur: 'بڑی دیگ میں سالن چلایا جا رہا ہے', ar: 'قدر كبير يُحرَّك فيه المرق' } },
    { src: '/img/w/l2796.jpg', alt: { en: 'Men eating together', ur: 'مرد مل کر کھانا کھا رہے ہیں', ar: 'رجال يأكلون معًا' } },
    { src: '/img/w/l2734.jpg', alt: { en: 'A rich curry simmering under its lid', ur: 'ڈھکن کے نیچے پکتا گاڑھا سالن', ar: 'مرق دسم يغلي تحت غطائه' } },
    { src: '/img/w/l2770.jpg', alt: { en: 'A visitor arriving for the meal', ur: 'کھانے کے لیے آنے والا ایک مہمان', ar: 'زائر يصل لتناول الوجبة' } },
  ] as { src: string; alt: L }[],
};

/* ---------------- TRANSPORT AND MEDICAL (home section) ---------------- */
export const transport = {
  eyebrow: { en: 'Transport and medical aid', ur: 'ٹرانسپورٹ اور طبی امداد', ar: 'النقل والمساعدة الطبية' },
  title: { en: 'A ride to the hospital, every morning', ur: 'ہر صبح ہسپتال تک سواری', ar: 'رحلة إلى المستشفى كل صباح' },
  body: {
    en: 'Each morning our seven-seater car takes patients from Rajajang to a hospital nearby, with a driver we hire for the work. They see highly qualified doctors, get full body scans and receive free medicines, including specialist ones, and then we bring them home.',
    ur: 'ہر صبح ہماری سات سیٹوں والی گاڑی مریضوں کو راجہ جنگ سے قریبی ہسپتال لے جاتی ہے، جس کے لیے ہم نے ڈرائیور رکھا ہوا ہے۔ وہاں وہ اعلیٰ تعلیم یافتہ ڈاکٹروں سے معائنہ کراتے ہیں، مکمل باڈی سکین کراتے ہیں اور مفت ادویات پاتے ہیں، جن میں خصوصی ادویات بھی شامل ہیں، پھر ہم انہیں گھر واپس پہنچاتے ہیں۔',
    ar: 'كل صباح تنقل سيارتنا ذات السبعة مقاعد المرضى من راجاجانغ إلى مستشفى قريب، مع سائق استأجرناه لهذا العمل. يلتقون أطباء ذوي كفاءة عالية، ويُجرون فحوصات شاملة للجسم، ويحصلون على أدوية مجانية، منها المتخصصة، ثم نعيدهم إلى بيوتهم.',
  },
  facts: [
    { en: 'One trip every morning', ur: 'ہر صبح ایک سفر', ar: 'رحلة واحدة كل صباح' },
    { en: 'Seven-seater car', ur: 'سات سیٹوں والی گاڑی', ar: 'سيارة بسبعة مقاعد' },
    { en: 'Nearly 600 people supported', ur: 'تقریباً ۶۰۰ افراد کی معاونت', ar: 'دعم نحو ٦٠٠ شخص' },
    { en: 'Doctors, scans and free medicines', ur: 'ڈاکٹر، سکین اور مفت ادویات', ar: 'أطباء وفحوصات وأدوية مجانية' },
  ] as L[],
  // Car photos and video frames go here once supplied. Empty list shows labelled placeholders.
  images: [
    { src: '/img/car/van-side.jpg', alt: { en: 'Our white van parked in the lane with its door open', ur: 'گلی میں کھڑی ہماری سفید گاڑی، دروازہ کھلا ہوا', ar: 'سيارتنا البيضاء في الزقاق وبابها مفتوح' } },
    { src: '/img/car/van-loading.jpg', alt: { en: 'Patients sitting inside the van before the trip', ur: 'سفر سے پہلے گاڑی میں بیٹھے مریض', ar: 'مرضى جالسون في السيارة قبل الرحلة' } },
    { src: '/img/car/van-rear.jpg', alt: { en: 'The van leaving for the hospital', ur: 'ہسپتال کے لیے روانہ ہوتی گاڑی', ar: 'السيارة تنطلق نحو المستشفى' } },
    { src: '/img/car/van-plate.jpg', alt: { en: 'Women and children boarding in the morning', ur: 'صبح سوار ہوتی خواتین اور بچے', ar: 'نساء وأطفال يصعدون صباحًا' } },
  ] as { src: string; alt: L }[],
  clips: [1, 2, 3, 4],
  driverRole: { en: 'Driver', ur: 'ڈرائیور', ar: 'السائق' },
  driverNote: { en: 'Drives our patients to hospital and brings them home.', ur: 'ہمارے مریضوں کو ہسپتال لے جاتے اور گھر واپس پہنچاتے ہیں۔', ar: 'ينقل مرضانا إلى المستشفى ويعيدهم إلى بيوتهم.' },
  // PLACEHOLDER: driver photo and name not yet supplied.
  driver: { img: '', name: { en: 'Our driver', ur: 'ہمارے ڈرائیور', ar: 'سائقنا' } },
};

/* ---------------- SUPPORT (sticky split) ---------------- */
export const support = {
  eyebrow: { en: 'Get involved', ur: 'ہمارا ساتھ دیں', ar: 'شاركنا' },
  title: { en: 'Help us keep the doors open', ur: 'دروازہ کھلا رکھنے میں ہماری مدد کریں', ar: 'ساعدنا في إبقاء الأبواب مفتوحة' },
  body: {
    en: 'We are a family-run effort and we are opening up to donors and partners. Tell us how you would like to help and we will reply personally.',
    ur: 'ہم ایک خاندانی کوشش ہیں اور اب مخیر حضرات اور شراکت داروں کے لیے دروازے کھول رہے ہیں۔ بتائیں آپ کیسے مدد کرنا چاہتے ہیں، ہم خود جواب دیں گے۔',
    ar: 'نحن جهد تقوده عائلة، ونفتح اليوم أبوابنا للمتبرعين والشركاء. أخبرنا كيف تودّ المساعدة وسنردّ عليك شخصيًا.',
  },
  cta: { en: 'Contact us', ur: 'ہم سے رابطہ کریں', ar: 'تواصل معنا' },
  steps: [
    { title: { en: 'Visit us in Rajajang', ur: 'راجہ جنگ آ کر ہمیں دیکھیں', ar: 'زُرنا في راجاجانغ' }, body: { en: 'Come at midday and see the kitchen, the hall and the classroom for yourself.', ur: 'دوپہر کو آئیں اور لنگر، ہال اور کلاس روم خود دیکھیں۔', ar: 'تعالَ عند الظهيرة وشاهد المطبخ والقاعة والصف بنفسك.' } },
    { title: { en: 'Sponsor a day of meals', ur: 'ایک دن کے کھانے کی کفالت', ar: 'اكفل وجبات يوم كامل' }, body: { en: 'Fund the midday meal for a day, in your name or in memory of someone you love.', ur: 'ایک دن کا کھانا اپنے نام سے یا اپنے کسی پیارے کے ایصالِ ثواب کے لیے کھلائیں۔', ar: 'موّل غداء يوم كامل باسمك أو إحياءً لذكرى عزيز عليك.' } },
    { title: { en: 'Equip a learner', ur: 'ایک سیکھنے والی کو مشین دلائیں', ar: 'جهّز متعلّمة' }, body: { en: 'Help a trained girl own her sewing machine and start earning at home.', ur: 'ایک تربیت یافتہ لڑکی کو اپنی سلائی مشین دلانے میں مدد کریں تاکہ وہ گھر پر کمانا شروع کرے۔', ar: 'ساعد فتاة متدرّبة على امتلاك آلة الخياطة الخاصة بها لتبدأ الكسب من بيتها.' } },
    { title: { en: 'Back a medical day', ur: 'طبی دن کی معاونت', ar: 'ادعم يومًا طبيًا' }, body: { en: 'Support the morning trip, the doctors, the scans and the medicines.', ur: 'صبح کے سفر، ڈاکٹروں، سکین اور ادویات میں شریک ہوں۔', ar: 'ساهم في رحلة الصباح وأتعاب الأطباء والفحوصات والأدوية.' } },
  ] as { title: L; body: L }[],
};

/* ---------------- LOCATION + CONTACT ---------------- */
export const location = {
  eyebrow: { en: 'Find us', ur: 'ہمیں تلاش کریں', ar: 'موقعنا' },
  title: { en: 'Rajajang', ur: 'راجہ جنگ', ar: 'راجاجانغ' },
  body: {
    en: 'The langar, the stitching centre and the patient car all run from our town. Open the pin to find us.',
    ur: 'لنگر، سلائی مرکز اور مریضوں کی گاڑی سب ہمارے اسی قصبے سے چلتے ہیں۔ ہمیں ڈھونڈنے کے لیے نقشہ کھولیں۔',
    ar: 'المطبخ ومركز الخياطة وسيارة المرضى كلها تنطلق من بلدتنا. افتح الموقع لتجدنا.',
  },
};

export const contact = {
  eyebrow: { en: 'Contact', ur: 'رابطہ', ar: 'تواصل' },
  title: { en: 'Let us talk', ur: 'آئیے بات کریں', ar: 'لنتحدث' },
  body: {
    en: 'Donors, volunteers, companies with sewing work and journalists are all welcome.',
    ur: 'مخیر حضرات، رضاکار، سلائی کا کام دینے والی کمپنیاں اور صحافی سب خوش آمدید ہیں۔',
    ar: 'نرحّب بالمتبرعين والمتطوعين والشركات التي لديها أعمال خياطة والصحفيين.',
  },
  tags: [
    { en: 'Donations', ur: 'عطیات', ar: 'التبرعات' },
    { en: 'Volunteering', ur: 'رضاکاری', ar: 'التطوع' },
    { en: 'Sewing contracts', ur: 'سلائی کے آرڈر', ar: 'عقود الخياطة' },
    { en: 'Visits', ur: 'دورے', ar: 'الزيارات' },
  ] as L[],
  form: {
    name: { en: 'Your name', ur: 'آپ کا نام', ar: 'اسمك' },
    org: { en: 'Organisation (optional)', ur: 'ادارہ (اختیاری)', ar: 'الجهة (اختياري)' },
    email: { en: 'Email', ur: 'ای میل', ar: 'البريد الإلكتروني' },
    topic: { en: 'I would like to', ur: 'میں چاہتا یا چاہتی ہوں کہ', ar: 'أودّ أن' },
    topics: [
      { en: 'Donate', ur: 'عطیہ دوں', ar: 'أتبرع' },
      { en: 'Volunteer', ur: 'رضاکارانہ مدد کروں', ar: 'أتطوع' },
      { en: 'Offer sewing work', ur: 'سلائی کا کام دوں', ar: 'أقدّم عمل خياطة' },
      { en: 'Visit', ur: 'دورہ کروں', ar: 'أزور' },
    ] as L[],
    message: { en: 'Your message', ur: 'آپ کا پیغام', ar: 'رسالتك' },
    send: { en: 'Send message', ur: 'پیغام بھیجیں', ar: 'أرسل الرسالة' },
    thanks: {
      en: 'Thank you. Your message is noted. This demo form does not send anything yet.',
      ur: 'شکریہ۔ آپ کا پیغام نوٹ کر لیا گیا۔ یہ ڈیمو فارم ابھی کچھ بھیجتا نہیں۔',
      ar: 'شكرًا لك. سُجّلت رسالتك. هذا النموذج تجريبي ولا يرسل شيئًا بعد.',
    },
  },
};

export const footer = {
  line: {
    en: 'A meal, a skill and a way to heal, for the people of Rajajang.',
    ur: 'ایک نوالہ، ایک ہنر اور شفا کا راستہ، راجہ جنگ کے لوگوں کے لیے۔',
    ar: 'وجبة ومهارة وطريق إلى الشفاء، لأهل راجاجانغ.',
  },
  rights: {
    en: 'Dar-e-Rehmat. Legal registration in progress.',
    ur: 'دارِ رحمت۔ قانونی رجسٹریشن جاری ہے۔',
    ar: 'دار الرحمة. التسجيل القانوني قيد الإنجاز.',
  },
  disclaimer: {
    en: 'Figures are approximate and describe daily operations.',
    ur: 'اعداد و شمار تخمینی ہیں اور روزمرہ کام کو ظاہر کرتے ہیں۔',
    ar: 'الأرقام تقريبية وتصف العمل اليومي.',
  },
};

export const heroImages = ['/img/w/l2784.jpg', '/img/w/l2788.jpg', '/img/w/l2750.jpg', '/img/w/l2799.jpg'];
export const bandImage = '/img/w/l2790.jpg';
export const contactImage = '/img/w/l2782.jpg';
