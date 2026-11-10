// Self-sufficiency roadmap for the Stitching Centre. All figures were supplied by the family.
// Set SHOW_FINANCIALS to false to hide every money figure on the page in one step.
import type { L } from './site';

export const SHOW_FINANCIALS = true;

// Planning figures (family data, Pakistani rates). The daily rate is used only to estimate machine payback.
export const FIG = {
  hoursPerDay: 3,
  daysPerWeek: 6,
  months: 6,
  weeks: 26,
  totalHours: 468, // 3 h x 6 days x 26 weeks
  earnUsdPerDay: 5,
  livingUsdPerDay: 2,
  planRsPerDay: 1200, // conservative planning figure from the family's earlier numbers
  usedRs: 6000,
  newRs: 18000,
  electricRs: 25000,
};

export const page = {
  title: { en: 'From learner to teacher', ur: 'سیکھنے والی سے سکھانے والی تک', ar: 'من متعلّمة إلى معلّمة' },
  sub: {
    en: 'How a woman with no skill becomes self-sufficient in six months, and then trains others.',
    ur: 'ہنر سے خالی ہاتھ ایک خاتون چھ ماہ میں کیسے خود کفیل بنتی ہے اور پھر دوسروں کو سکھاتی ہے۔',
    ar: 'كيف تصبح امرأة بلا مهنة مكتفية ذاتيًا في ستة أشهر، ثم تدرّب غيرها.',
  },
  banner: '/img/w/s84.jpg',
  draft: {
    en: 'Draft for the family to review. Figures are in Pakistani rates and will be refined.',
    ur: 'یہ خاندان کے جائزے کے لیے مسودہ ہے۔ اعداد و شمار پاکستانی نرخوں میں ہیں اور بہتر کیے جائیں گے۔',
    ar: 'مسودة لمراجعة العائلة. الأرقام بالأسعار الباكستانية وستُحسَّن لاحقًا.',
  },
};

/* ---- 1. The path ---- */
export const path = {
  eyebrow: { en: 'The roadmap', ur: 'راستہ', ar: 'خارطة الطريق' },
  title: { en: 'Five steps to independence', ur: 'خود مختاری کے پانچ قدم', ar: 'خمس خطوات نحو الاستقلال' },
  steps: [
    {
      n: '01', when: { en: 'Day one', ur: 'پہلا دن', ar: 'اليوم الأول' },
      title: { en: 'Join the centre', ur: 'مرکز میں داخلہ', ar: 'الالتحاق بالمركز' },
      body: { en: 'After the midday meal, women and their daughters start training in our hall.', ur: 'دوپہر کے کھانے کے بعد خواتین اور ان کی بیٹیاں ہمارے ہال میں تربیت شروع کرتی ہیں۔', ar: 'بعد غداء الظهيرة تبدأ النساء وبناتهن التدرّب في قاعتنا.' },
    },
    {
      n: '02', when: { en: 'Months 1 to 6', ur: 'ماہ ۱ تا ۶', ar: 'الأشهر ١ إلى ٦' },
      title: { en: 'Train, 3 hours a day, 6 days a week', ur: 'تربیت، روزانہ ۳ گھنٹے، ہفتے میں ۶ دن', ar: 'تدريب ٣ ساعات يوميًا، ٦ أيام أسبوعيًا' },
      body: { en: 'About 470 hours of practice, first on cloth and thread, then on machines.', ur: 'تقریباً ۴۷۰ گھنٹے کی مشق، پہلے کپڑے اور دھاگے پر، پھر مشین پر۔', ar: 'نحو ٤٧٠ ساعة من التمرين، أولًا على القماش والخيط ثم على الآلات.' },
    },
    {
      n: '03', when: { en: 'Month 7', ur: 'ساتواں ماہ', ar: 'الشهر ٧' },
      title: { en: 'Fully trained', ur: 'مکمل تربیت یافتہ', ar: 'تدريب كامل' },
      body: { en: 'She can stitch professionally and no longer needs training.', ur: 'اب وہ پیشہ ورانہ سلائی کر سکتی ہے اور اسے مزید تربیت کی ضرورت نہیں۔', ar: 'تستطيع الخياطة باحتراف ولم تعد بحاجة إلى تدريب.' },
    },
    {
      n: '04', when: { en: 'Within a month', ur: 'ایک ماہ کے اندر', ar: 'خلال شهر' },
      title: { en: 'Earn and own her machine', ur: 'کمائی اور اپنی مشین', ar: 'تكسب وتمتلك آلتها' },
      body: { en: 'Working 3 to 4 hours a day she earns at least $5 and buys her own machine.', ur: 'روزانہ ۳ سے ۴ گھنٹے کام کر کے وہ کم از کم ۵ ڈالر کماتی ہے اور اپنی مشین خرید لیتی ہے۔', ar: 'بالعمل ٣ إلى ٤ ساعات يوميًا تكسب ٥ دولارات على الأقل وتشتري آلتها الخاصة.' },
    },
    {
      n: '05', when: { en: 'Then', ur: 'پھر', ar: 'ثم' },
      title: { en: 'Train others', ur: 'دوسروں کو سکھانا', ar: 'تدريب الأخريات' },
      body: { en: 'Some of our graduates in town already train other women, and the circle grows.', ur: 'ہماری کچھ تربیت یافتہ خواتین قصبے میں پہلے ہی دوسری خواتین کو سکھا رہی ہیں اور دائرہ بڑھتا جا رہا ہے۔', ar: 'بعض خريجاتنا في البلدة يدرّبن نساء أخريات بالفعل، والدائرة تكبر.' },
    },
  ] as { n: string; when: L; title: L; body: L }[],
};

/* ---- 2. The numbers ---- */
export const numbers = {
  eyebrow: { en: 'Time and value', ur: 'وقت اور قدر', ar: 'الوقت والقيمة' },
  title: { en: 'What six months gives a woman', ur: 'چھ ماہ ایک خاتون کو کیا دیتے ہیں', ar: 'ما تمنحه ستة أشهر للمرأة' },
  cards: [
    { target: 3, label: { en: 'hours of training a day', ur: 'گھنٹے روزانہ تربیت', ar: 'ساعات تدريب يوميًا' } },
    { target: 6, label: { en: 'days a week', ur: 'دن ہفتے میں', ar: 'أيام في الأسبوع' } },
    { target: 6, label: { en: 'months to full training', ur: 'ماہ مکمل تربیت تک', ar: 'أشهر حتى التدريب الكامل' } },
    { target: 470, prefix: '~', label: { en: 'hours of practice in total', ur: 'گھنٹے کل مشق', ar: 'ساعة تمرين إجمالًا' } },
  ] as { target: number; prefix?: string; label: L }[],
  barsTitle: { en: 'Daily earning against daily living cost', ur: 'روزانہ کی کمائی اور روزانہ کا خرچ', ar: 'الكسب اليومي مقابل تكلفة المعيشة اليومية' },
  earn: { en: 'Earns after training (3 to 4 hours of work)', ur: 'تربیت کے بعد کمائی (۳ سے ۴ گھنٹے کام)', ar: 'تكسب بعد التدريب (٣ إلى ٤ ساعات عمل)' },
  live: { en: 'Enough to live on in Pakistan', ur: 'پاکستان میں گزر بسر کے لیے کافی', ar: 'يكفي للعيش في باكستان' },
  barsNote: {
    en: 'She earns at least two and a half times what she needs to live on, every working day.',
    ur: 'وہ ہر کام کے دن میں اپنی ضرورت سے کم از کم ڈھائی گنا کماتی ہے۔',
    ar: 'تكسب في كل يوم عمل ما لا يقل عن ضعفين ونصف ما تحتاجه للعيش.',
  },
};

/* ---- 3. Machine ladder ---- */
export const machines = {
  eyebrow: { en: 'Her own machine', ur: 'اپنی مشین', ar: 'آلتها الخاصة' },
  title: { en: 'How fast a machine pays for itself', ur: 'مشین کتنی جلدی اپنی قیمت پوری کرتی ہے', ar: 'كم تحتاج الآلة لتسدّد ثمنها' },
  lede: {
    en: 'Working days of earning needed to pay for each machine, using a cautious planning figure of Rs 1,200 a day.',
    ur: 'ہر مشین کی قیمت پوری کرنے کے لیے کمائی کے کام کے دن، احتیاطی اندازے ۱٬۲۰۰ روپے روزانہ کے مطابق۔',
    ar: 'أيام العمل اللازمة لسداد ثمن كل آلة، بتقدير حذر قدره ١٬٢٠٠ روبية في اليوم.',
  },
  items: [
    { kind: { en: 'Used machine', ur: 'استعمال شدہ مشین', ar: 'آلة مستعملة' }, rs: 6000, days: 5, note: { en: 'The quickest way to start', ur: 'آغاز کا سب سے تیز راستہ', ar: 'أسرع طريق للبدء' } },
    { kind: { en: 'New machine', ur: 'نئی مشین', ar: 'آلة جديدة' }, rs: 18000, days: 15, note: { en: 'About two and a half weeks of work', ur: 'تقریباً ڈھائی ہفتے کا کام', ar: 'نحو أسبوعين ونصف من العمل' } },
    { kind: { en: 'Electric machine', ur: 'بجلی کی مشین', ar: 'آلة كهربائية' }, rs: 25000, days: 21, note: { en: 'For fully trained women, faster output', ur: 'مکمل تربیت یافتہ خواتین کے لیے، زیادہ پیداوار', ar: 'للمدرَّبات تمامًا، وإنتاج أسرع' } },
  ] as { kind: L; rs: number; days: number; note: L }[],
  daysLabel: { en: 'working days', ur: 'کام کے دن', ar: 'يوم عمل' },
  note: {
    en: 'Used and electric prices are the family’s estimates. Everything is in Pakistani rupees.',
    ur: 'استعمال شدہ اور بجلی کی مشین کی قیمتیں خاندان کا اندازہ ہیں۔ سب کچھ پاکستانی روپوں میں ہے۔',
    ar: 'أسعار الآلات المستعملة والكهربائية تقديرات من العائلة. كل المبالغ بالروبية الباكستانية.',
  },
};

/* ---- 4. The pyramid ---- */
export const pyramid = {
  eyebrow: { en: 'The pyramid', ur: 'اہرام', ar: 'الهرم' },
  title: { en: 'One skill, passed on and on', ur: 'ایک ہنر، آگے سے آگے', ar: 'مهارة واحدة تنتقل من يد إلى يد' },
  lede: {
    en: 'Not everyone we train becomes a teacher, but a few already do. Each one who does makes the base wider.',
    ur: 'ہر تربیت یافتہ استانی نہیں بنتی، مگر کچھ بن چکی ہیں۔ جو بنتی ہے وہ بنیاد کو اور چوڑا کر دیتی ہے۔',
    ar: 'ليست كل من ندرّبها تصبح معلّمة، لكن بعضهن فعلن. وكل واحدة تفعل تُوسّع القاعدة.',
  },
  levels: [
    { name: { en: 'Teachers', ur: 'استانیاں', ar: 'المعلّمات' }, body: { en: 'Graduates who train others. A few in town already do.', ur: 'تربیت یافتہ خواتین جو دوسروں کو سکھاتی ہیں۔ قصبے میں کچھ پہلے ہی ایسا کر رہی ہیں۔', ar: 'خريجات يدرّبن غيرهن. وبعضهن في البلدة يفعلن ذلك بالفعل.' } },
    { name: { en: 'Self-sufficient women', ur: 'خود کفیل خواتین', ar: 'نساء مكتفيات ذاتيًا' }, body: { en: 'Own machine, own income, working from home.', ur: 'اپنی مشین، اپنی آمدنی، گھر سے کام۔', ar: 'آلة خاصة ودخل خاص وعمل من البيت.' } },
    { name: { en: 'Learners', ur: 'سیکھنے والی', ar: 'المتعلّمات' }, body: { en: 'In the six-month programme, 3 hours a day.', ur: 'چھ ماہ کے پروگرام میں، روزانہ ۳ گھنٹے۔', ar: 'في البرنامج ذي الأشهر الستة، ٣ ساعات يوميًا.' } },
    { name: { en: 'New girls and women', ur: 'نئی لڑکیاں اور خواتین', ar: 'فتيات ونساء جدد' }, body: { en: 'The doors stay open to everyone who wants to learn.', ur: 'سیکھنے کی خواہش مند ہر ایک کے لیے دروازہ کھلا ہے۔', ar: 'الأبواب مفتوحة لكل من تريد التعلّم.' } },
  ] as { name: L; body: L }[],
  illustrative: { en: 'Illustration of the idea, not a head count.', ur: 'یہ خیال کی تصویر ہے، تعداد نہیں۔', ar: 'رسم توضيحي للفكرة وليس عددًا.' },
};

export const hiddenNote: L = {
  en: 'Detailed figures are available on request.',
  ur: 'تفصیلی اعداد و شمار درخواست پر دستیاب ہیں۔',
  ar: 'الأرقام التفصيلية متاحة عند الطلب.',
};
