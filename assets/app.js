const CATEGORIES = {
      khosousi: {
        id: 'khosousi',
        title: 'امتحانات تؤوريا خصوصي',
        buttonPrefix: 'اسئلة تؤوريا خصوصي',
        examPrefix: 'امتحان تؤوريا خصوصي',
        count: 23,
        url: '#',
      },
      omoumi: {
        id: 'omoumi',
        title: 'امتحانات تؤوريا عمومي',
        buttonPrefix: 'اسئلة تؤوريا عمومي',
        examPrefix: 'امتحان تؤوريا عمومي',
        count: 23,
        url: '#',
      },
      shahen_khafif: {
        id: 'shahen_khafif',
        title: 'امتحانات تؤوريا شحن خفيف',
        buttonPrefix: 'اسئلة تؤوريا شحن خفيف',
        examPrefix: 'امتحان تؤوريا شحن خفيف',
        count: 30,
        url: '#',
      },
      shahen_thaqil: {
        id: 'shahen_thaqil',
        title: 'امتحانات تؤوريا شحن ثقيل',
        buttonPrefix: 'اسئلة تؤوريا شحن ثقيل',
        examPrefix: 'امتحان تؤوريا شحن ثقيل',
        count: 30,
        url: '#',
      },
      tractor: {
        id: 'tractor',
        title: 'امتحانات تؤوريا تراكتور',
        buttonPrefix: 'اسئلة تؤوريا تراكتور',
        examPrefix: 'امتحان تؤوريا تراكتور',
        count: 30,
        url: '#',
      },
      daraja: {
        id: 'daraja',
        title: 'امتحانات تؤوريا دراجة نارية',
        buttonPrefix: 'اسئلة تؤوريا دراجة نارية',
        examPrefix: 'امتحان تؤوريا دراجة نارية',
        count: 30,
        url: '#',
      }
    };

    function getSignSvg(signCode) {
      const svgs = {
        'أ-1': `<svg viewBox="0 0 100 90" class="w-16 h-16"><polygon points="50,6 94,84 6,84" fill="#fff" stroke="#E22B2B" stroke-width="8" stroke-linejoin="round"/><path d="M30,68 Q40,52 50,68 Q60,52 70,68" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/></svg>`,
        'أ-2': `<svg viewBox="0 0 100 90" class="w-16 h-16"><polygon points="50,6 94,84 6,84" fill="#fff" stroke="#E22B2B" stroke-width="8" stroke-linejoin="round"/><path d="M62,72 L62,52 Q62,40 48,40 L36,40" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/><polygon points="36,33 26,40 36,47" fill="#111"/></svg>`,
        'أ-3': `<svg viewBox="0 0 100 90" class="w-16 h-16"><polygon points="50,6 94,84 6,84" fill="#fff" stroke="#E22B2B" stroke-width="8" stroke-linejoin="round"/><path d="M38,72 L38,52 Q38,40 52,40 L64,40" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/><polygon points="64,33 74,40 64,47" fill="#111"/></svg>`,
        'أ-5': `<svg viewBox="0 0 100 90" class="w-16 h-16"><polygon points="50,6 94,84 6,84" fill="#fff" stroke="#E22B2B" stroke-width="8" stroke-linejoin="round"/><path d="M45,74 C35,62 65,52 48,38" fill="none" stroke="#111" stroke-width="6" stroke-linecap="round"/></svg>`,
        'أ-7': `<svg viewBox="0 0 100 90" class="w-16 h-16"><polygon points="50,6 94,84 6,84" fill="#fff" stroke="#E22B2B" stroke-width="8" stroke-linejoin="round"/><path d="M36,74 L36,58 L44,44 L44,34 M64,74 L64,58 L56,44 L56,34" fill="none" stroke="#111" stroke-width="5"/></svg>`,
        'أ-8': `<svg viewBox="0 0 100 90" class="w-16 h-16"><polygon points="50,6 94,84 6,84" fill="#fff" stroke="#E22B2B" stroke-width="8" stroke-linejoin="round"/><path d="M34,36 L44,50 L44,60 L34,74 M66,36 L56,50 L56,60 L66,74" fill="none" stroke="#111" stroke-width="5"/></svg>`,
        'ب-1': `<svg viewBox="0 0 100 100" class="w-16 h-16"><circle cx="50" cy="50" r="42" fill="#E22B2B" stroke="#fff" stroke-width="3"/><rect x="20" y="42" width="60" height="16" rx="2" fill="#fff"/></svg>`,
        'ب-2': `<svg viewBox="0 0 100 100" class="w-16 h-16"><circle cx="50" cy="50" r="42" fill="#fff" stroke="#E22B2B" stroke-width="9"/><rect x="30" y="54" width="40" height="14" rx="4" fill="#111"/><circle cx="38" cy="70" r="5" fill="#111"/><circle cx="62" cy="70" r="5" fill="#111"/><circle cx="50" cy="34" r="7" fill="#111"/></svg>`,
        'ب-8': `<svg viewBox="0 0 100 100" class="w-16 h-16"><circle cx="50" cy="50" r="42" fill="#fff" stroke="#E22B2B" stroke-width="9"/><rect x="22" y="42" width="24" height="18" rx="2" fill="#E22B2B"/><rect x="54" y="48" width="22" height="12" rx="3" fill="#111"/><circle cx="28" cy="63" r="4" fill="#111"/><circle cx="40" cy="63" r="4" fill="#111"/><circle cx="60" cy="63" r="4" fill="#111"/><circle cx="70" cy="63" r="4" fill="#111"/></svg>`,
        'ب-20': `<svg viewBox="0 0 100 100" class="w-16 h-16"><polygon points="30,8 70,8 92,30 92,70 70,92 30,92 8,70 8,30" fill="#E22B2B" stroke="#fff" stroke-width="4"/><text x="50" y="58" text-anchor="middle" fill="#fff" font-size="22" font-weight="900">قف</text></svg>`,
        'ب-28': `<svg viewBox="0 0 100 100" class="w-16 h-16"><circle cx="50" cy="50" r="42" fill="#1d4ed8" stroke="#E22B2B" stroke-width="9"/><line x1="22" y1="22" x2="78" y2="78" stroke="#E22B2B" stroke-width="9"/><line x1="78" y1="22" x2="22" y2="78" stroke="#E22B2B" stroke-width="9"/></svg>`,
        'ب-35': `<svg viewBox="0 0 100 100" class="w-16 h-16"><circle cx="50" cy="50" r="42" fill="#1d4ed8" stroke="#fff" stroke-width="3"/><path d="M26,50 L74,50 M38,38 L24,50 L38,62 M62,38 L76,50 L62,62" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"/></svg>`,
        'ج-1': `<svg viewBox="0 0 100 100" class="w-16 h-16"><rect x="12" y="12" width="76" height="76" rx="10" fill="#1d4ed8" stroke="#fff" stroke-width="4"/><text x="50" y="68" text-anchor="middle" fill="#fff" font-size="52" font-weight="900">P</text></svg>`,
        'ج-6': `<svg viewBox="0 0 100 100" class="w-16 h-16"><rect x="12" y="12" width="76" height="76" rx="10" fill="#1d4ed8" stroke="#fff" stroke-width="4"/><path d="M50,78 L50,24 M34,40 L50,22 L66,40" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round"/></svg>`,
        'هـ-1': `<svg viewBox="0 0 100 100" class="w-16 h-16"><rect x="30" y="8" width="40" height="84" rx="10" fill="#111" stroke="#cbd5e1" stroke-width="3"/><circle cx="50" cy="26" r="10" fill="#ef4444"/><circle cx="50" cy="50" r="10" fill="#f59e0b"/><circle cx="50" cy="74" r="10" fill="#374151"/></svg>`,
        'هـ-2': `<svg viewBox="0 0 100 100" class="w-16 h-16"><rect x="28" y="10" width="44" height="80" rx="8" fill="#111" stroke="#cbd5e1" stroke-width="3"/><circle cx="50" cy="32" r="11" fill="#374151"/><circle cx="50" cy="66" r="11" fill="#22c55e"/></svg>`
      };
      return svgs[signCode] || svgs['أ-1'];
    }

    const TRAFFIC_SIGNS = [
      { code: 'أ-1', group: 'warning', title: 'طريق وعرة أو مشوشة', desc: 'شاخصة تحذير على بعد 150 متر تقريباً تشير إلى وجود طريق غير مستوية أو مطبات.' },
      { code: 'أ-2', group: 'warning', title: 'انعطاف حاد إلى اليسار', desc: 'تحذر السائق من وجود منعطف حاد جهة اليسار ويجب تخفيف السرعة والسير في اليمين.' },
      { code: 'أ-3', group: 'warning', title: 'انعطاف حاد إلى اليمين', desc: 'تحذر السائق من وجود منعطف حاد جهة اليمين قبل الدخول في المنعطف.' },
      { code: 'أ-5', group: 'warning', title: 'طريق ملتوية', desc: 'تحذر من سلسلة انعطافات متتالية في الطريق التي أمامك.' },
      { code: 'أ-7', group: 'warning', title: 'طريق آخذة في الضيق', desc: 'عرض الطريق يضيق من الجانبين أو من أحد الجانبين حسب الرسم.' },
      { code: 'أ-8', group: 'warning', title: 'جسر ضيق', desc: 'تحذر من الاقتراب من جسر ضيق على الطريق.' },
      { code: 'ب-1', group: 'guidance', title: 'ممنوع الدخول', desc: 'يُمنع دخول جميع المركبات إلى هذه الطريق (اتجاه معاكس لحركة السير).' },
      { code: 'ب-2', group: 'guidance', title: 'ممنوع دخول المركبات الميكانيكية', desc: 'يُمنع دخول جميع المركبات الميكانيكية بما فيها الدراجات النارية.' },
      { code: 'ب-8', group: 'guidance', title: 'ممنوع تجاوز مركبة تجارية يزيد وزنها الإجمالي عن 4000 كغم', desc: 'لا يجوز لسائق مركبة تجارية فوق 4 طن تجاوز مركبة ميكانيكية تسير على أكثر من عجلتين.' },
      { code: 'ب-20', group: 'guidance', title: 'قف ! وأعطِ حق الأولوية', desc: 'التوقف التام وإعطاء حق الأولوية لحركة السير في الطريق القاطعة.' },
      { code: 'ب-28', group: 'guidance', title: 'ممنوع الوقوف والتوقف', desc: 'يُحظر وقوف أو توقف أية مركبة في الجانب الذي أُقيمت فيه الشاخصة حتى المفترق القريب.' },
      { code: 'ب-35', group: 'guidance', title: 'سر إلى اليمين أو إلى اليسار فقط', desc: 'إلزام بالاستدارة يميناً أو يساراً من أمام الشاخصة أو خلفها حسب السهم.' },
      { code: 'ج-1', group: 'info', title: 'موقف للمركبات', desc: 'موقف للمركبات، وإذا ذُكر نوع من المركبات في اللافتة تحت الشاخصة فيكون الموقف للمركبات المذكورة فقط.' },
      { code: 'ج-6', group: 'info', title: 'طريق ذات اتجاه واحد', desc: 'حركة السير باتجاه السهم الأبيض مسموحة لجميع المركبات في اتجاه واحد.' },
      { code: 'هـ-1', group: 'lights', title: 'ضوء أحمر وأصفر معاً في الآلة الضوئية', desc: 'استعد للسير عندما يظهر الضوء الأخضر، ولا تتحرك قبل إضاءة الأخضر.' },
      { code: 'هـ-2', group: 'lights', title: 'آلة ضوئية خاصة بالمشاة بجانب ممر المشاة', desc: 'يجوز عبور الشارع بحذر على ممر المشاة عند الضوء الأخضر، ويُحظر العبور عند الضوء الأحمر.' }
    ];

    const VERIFIED_QUESTIONS = [
      {
        id: 1,
        sign: 'ب-8',
        q: 'الشاخصة تعني :',
        choices: [
          'لا يجوز للشاحنات مجاوزة المركبات الخصوصية فقط.',
          'ممنوع تجاوز مركبة تجارية يزيد وزنها الإجمالي عن 4000كغم .',
          'لا يجوز للشاحنات استعمال المسلك الأيسر .',
          'نهاية مقطع الطريق الذي يسري عليه منع التجاوز .'
        ],
        correct: 1
      },
      {
        id: 2,
        sign: 'أ-1',
        q: 'المسافة بين شاخصة تحذير والشيء التي تحذر منه تكون عادةً :',
        choices: [
          '150م.',
          '170م.',
          '100م.',
          '250م.'
        ],
        correct: 0
      },
      {
        id: 3,
        sign: 'ب-1',
        q: 'يسري مفعول الشاخصة :',
        choices: [
          'على الطريق التي تقود المركبة فيها وحتى المفترق القريب.',
          'فقط على اتجاه حركة السير المقابلة في الطريق التي أمامك.',
          'على الطريق التي أمامك.',
          'على الطريق التي تقود المركبة فيها.'
        ],
        correct: 2
      },
      {
        id: 4,
        sign: 'ب-2',
        q: 'شاخصة تعني :',
        choices: [
          'ممنوع دخول المركبات الميكانيكية.',
          'ممنوع دخول المركبات الخصوصية فقط.',
          'الطريق مغلقة أمام جميع المركبات والحيوانات.',
          'مسموح الدخول للمركبات الميكانيكية فقط.'
        ],
        correct: 0
      },
      {
        id: 5,
        sign: 'ب-35',
        q: 'الشاخصة معناها:',
        choices: [
          'سر إلى اليمين أو إلى اليسار فقط.',
          'احذر من يمينك ومن يسارك.',
          'لا تجوز الاستدارة يميناً أو يساراً.',
          'الطريق تتحول من مسلك إلى مسلكين.'
        ],
        correct: 0
      },
      {
        id: 6,
        sign: 'هـ-1',
        q: 'ضوء احمر واصفر مع بعض في الآلة الضوئية معناه :',
        choices: [
          'قف فوراً قبل خط التوقف لأن الضوء سيتحول إلى أحمر.',
          'استعد للسير عندما يظهر الضوء الأخضر.',
          'اعبر المفترق بسرعة قبل إغلاقه.',
          'الآلة الضوئية معطلة.'
        ],
        correct: 1
      },
      {
        id: 7,
        sign: null,
        q: 'عند إيقاف المركبة بجانب الرصيف، ما هي المسافة المسموحة بين الرصيف والعجلات القريبة منه؟',
        choices: [
          'المسافة غير مهمة ، المهم أن لا يقف بشكل زاوية إلا إذا كانت هناك إشارات تسمح بذلك.',
          'يجب أن لا تزيد المسافة بين الرصيف والعجلات القريبة منه عن 40سم.',
          'يجب أن لا تقل المسافة بين الرصيف والعجلات القريبة منه عن 40سم.',
          'يجب أن تكون المسافة بين الرصيف والعجلات القريبة منه 40سم.'
        ],
        correct: 1
      },
      {
        id: 8,
        sign: null,
        q: 'تُركب في المركبة الميكانيكية لمبة تحذير أمام مقعد السائق تضيء، عندما يضاء نور الطريق، بلون:',
        choices: [
          'أخضر.',
          'أحمر.',
          'أزرق.',
          'أصفر برتقالي.'
        ],
        correct: 2
      },
      {
        id: 9,
        sign: null,
        q: 'يضيء نور الطريق ( العالي ) في المركبة ليلاً لمسافة:',
        choices: [
          'لا تقل عن 100 متر.',
          'لا تقل عن 30 متراً.',
          'لا تزيد عن 50 متراً.',
          'لا تقل عن 150 متراً.'
        ],
        correct: 0
      },
      {
        id: 10,
        sign: null,
        q: 'يضيء نور الالتقاء (العبور) في المركبة ليلاً لمسافة:',
        choices: [
          'لا تقل عن 100 متر.',
          'لا تقل عن 30 متراً.',
          'لا تزيد عن 10 أمتار.',
          'لا تقل عن 250 متراً.'
        ],
        correct: 1
      },
      {
        id: 11,
        sign: null,
        q: 'ينير مصباح الرجوع إلى الخلف الطريق خلف المركبة لمسافة:',
        choices: [
          'لا تزيد عن 10 أمتار.',
          'لا تقل عن 30 متراً.',
          'لا تزيد عن 25 متراً.',
          '50 متراً على الأقل.'
        ],
        correct: 0
      },
      {
        id: 12,
        sign: null,
        q: 'من اجل الانتقال بالغيار من وضع الوقوف (P) إلى وضع السير (R) أو (D)، في مركبة ذات صندوق غيارات أوتوماتكية :',
        choices: [
          'يجب الضغط على دعسة الكلاتش وتعشيق عصا الغيارات.',
          'يجب الضغط على دعسة الفرامل وعلى زر التشغيل في عصا الغيارات وتعشيق عصا الغيارات حسب وضع السير.',
          'يجب الضغط على دعسة الفرامل حيث يحدث التعشيق بشكلٍ أوتوماتيكي.',
          'يجب الضغط على مفتاح (زر) التشغيل حيث يحدث التعشيق بشكلٍ أوتوماتيكي.'
        ],
        correct: 1
      },
      {
        id: 13,
        sign: null,
        q: 'ما هو جهاز مراقبة التوازن (الثبات) الالكتروني في المركبة (إي-إس. بي) (E.S.P. ):',
        choices: [
          'جهاز يصحح أخطاء السائق عند الفرملة يمنع التزحلق ويساعد على زيادة توازن المركبة.',
          'جهاز يمنع إقفال عجلات المركبة عند الفرملة الفجائية، وبهذا تتم المحافظة على عمل مقود المركبة.',
          'جهاز يمنع إمكانية حدوث خلل في جهاز فرامل المركبة.',
          'جهاز يمنع إمكانية حدوث خلل في جهاز مقود المركبة.'
        ],
        correct: 0
      },
      {
        id: 14,
        sign: null,
        q: 'لماذا يجب استعمال فرملة الوقوف (الهاندبريك)-عند الوقوف فقط؟',
        choices: [
          'فرملة الوقوف (الهاندبريك) لا تعمل على جميع عجلات المركبة وقوتها ضعيفة جداً.',
          'لأن اليد أو الرافعة المشغلة لهاغير مريحة في التشغيل.',
          'لا يجوز استعمال فرملة الوقوف (الهاندبريك) كفرملة طوارئ.',
          'لأن عمرها قصير ولا يجب استنفاذها على الفرملة العادية.'
        ],
        correct: 0
      },
      {
        id: 15,
        sign: null,
        q: 'الملحقات التي تخفف من خطورة إصابة الركاب عند وقوع حادث طرق هي:',
        choices: [
          'مصابيح الضباب والمقاعد الطبية.',
          'ماسحات الزجاج الخلفية وساندات الرأس.',
          'أحزمة الأمان وساندات الرأس ووسائد الهواء.',
          'المرايا الجانبية وجهاز الإنذار.'
        ],
        correct: 2
      },
      {
        id: 16,
        sign: null,
        q: 'ما أهمية سائل عادم الديزل (AdBlue) في مركبات الديزل؟',
        choices: [
          'ليس له أية أهمية.',
          'يساعد في عملية احتراق الوقود.',
          'يزيد من قدرة المحرك.',
          'يقلل من خروج الغازات السامة من ماسورة العادم.'
        ],
        correct: 3
      },
      {
        id: 17,
        sign: null,
        q: 'كيف تعرف أن سائل عادم الديزل (AdBlue) قد نفذ ؟',
        choices: [
          'من خلال انخفاض ضغط زيت المحرك.',
          'من خلال ارتفاع حرارة المحرك.',
          'من خلال إشارة خاصة في لوحة البيانات (التابلو) خاصة بذلك.',
          'من خلال انخفاض مستوى الوقود في المركبة.'
        ],
        correct: 2
      },
      {
        id: 18,
        sign: null,
        q: 'عند ظهور إشارة تفقد المحرك (check engine) على شاشة لوحة البيات بشكل متقطع فهذا يعني ؟',
        choices: [
          'وجود خلل في نظام شحن بطارية المركبة و يجب تغيرها.',
          'وجود خلل غير مهم في المحرك ولا يجب نقل المركبة إلى مركز الصيانة.',
          'لا أهمية لذلك.',
          'وجود خلل كبير في المحرك , يجب نقل المركبة إلى مركز الصيانة.'
        ],
        correct: 3
      },
      {
        id: 19,
        sign: null,
        q: 'من أهم ميزات المركبات الهجينة (hybrid veh.) ؟',
        choices: [
          'السير معظم مسافة الرحلة باستعمال محرك البنزين.',
          'توقف انبعاث الغاز العادم طول مسافة الرحلة.',
          'انخفاض تلوث الهواء و المحافظة على البيئة من التلوث.',
          'زيادة في وزن المركبة و التخفيض من سرعتها.'
        ],
        correct: 2
      },
      {
        id: 20,
        sign: null,
        q: 'ما هي العمليات الأولى التي على السائق القيام بها بعد دخوله إلى المركبة ، وقبل بدء السفر؟',
        choices: [
          'فحص وضع عصا الغيارات.',
          'ملاءمة المقعد والمقود والمرايا ومسند الرأس وربط أحزمة الأمان.',
          'التشغيل وتسخين المركبة.',
          'فتح النوافذ وفحص الإطارات.'
        ],
        correct: 1
      },
      {
        id: 21,
        sign: 'ب-28',
        q: 'تعني الإشارة :',
        choices: [
          'ممنوع الوقوف والتوقف.',
          'مسموح الوقوف لحاملي بطاقة وقوف فقط.',
          'نهاية منطقة منع الوقوف.',
          'ممنوع التوقف فقط ويسمح الوقوف.'
        ],
        correct: 0
      },
      {
        id: 22,
        sign: null,
        q: 'ما هو تعريف التراكتور في القانون:',
        choices: [
          'مركبة ميكانيكية معدة للاعمال الزراعية وليست معدة لنقل الركاب أو البضائع.',
          'كل مركبة ثقيلة يزيد وزنها عن 15 طن.',
          'مركبة تجارية مخصصة لنقل الركاب بالأجرة.',
          'مركبة سريعة مخصصة للطرق السريعة فقط.'
        ],
        correct: 0
      }
    ];

    let appState = {
      currentView: 'home',
      currentCategory: 'khosousi',
      currentExamNumber: 1,
      activeQuestions: [],
      currentQuestionIndex: 0,
      userAnswers: {},
      timerSeconds: 1800,
      timerInterval: null,
      completedExams: {},
      darkMode: false
    };

    function loadSavedState() {
      try {
        const raw = localStorage.getItem('driving_theory_completed_exams');
        if (raw) {
          appState.completedExams = JSON.parse(raw) || {};
        }
      } catch (e) {
        appState.completedExams = {};
      }
      updateCompletedCounterUI();
    }

    function saveCompletedExam(catId, examNum, scorePercent) {
      const key = `${catId}_${examNum}`;
      appState.completedExams[key] = scorePercent;
      try {
        localStorage.setItem('driving_theory_completed_exams', JSON.stringify(appState.completedExams));
      } catch (e) {}
      updateCompletedCounterUI();
    }

    function updateCompletedCounterUI() {
      const count = Object.keys(appState.completedExams).length;
      const el = document.getElementById('totalCompletedCount');
      if (el) el.textContent = String(count);
    }

    function navigateTo(viewName) {
      closeAllDropdowns();
      stopExamTimer();

      ['home', 'category', 'exam', 'signs', 'book'].forEach(v => {
        const sec = document.getElementById(`view-${v}`);
        if (sec) {
          sec.classList.toggle('hidden', v !== viewName);
        }
      });

      const navMap = {
        home: 'nav-home',
        category: 'nav-theory',
        exam: 'nav-theory',
        signs: 'nav-study',
        book: 'nav-study',
      };
      ['nav-home', 'nav-theory', 'nav-study'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
          btn.classList.toggle('bg-[#E22B2B]', navMap[viewName] === id);
        }
      });

      appState.currentView = viewName;
      if (viewName === 'signs') {
        renderTrafficSigns('all');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleDropdown(wrapperId) {
      const wrapper = document.getElementById(wrapperId);
      if (!wrapper) return;
      const isOpen = wrapper.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) wrapper.classList.add('open');
    }

    function closeAllDropdowns() {
      document.querySelectorAll('.dropdown-wrapper').forEach(el => el.classList.remove('open'));
    }

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown-wrapper')) {
        closeAllDropdowns();
      }
    });

    // Render Category Page with White Pill Chevron Buttons (.one_sixth.tie-columns)
    function openCategory(catId) {
      const cat = CATEGORIES[catId] || CATEGORIES.khosousi;
      appState.currentCategory = cat.id;

      document.getElementById('categoryBreadcrumb').textContent = cat.title;
      document.getElementById('categoryTitleHeading').textContent = cat.title;
      document.getElementById('categorySubtitleText').textContent =
        `اختر رقم الامتحان للبدء فوراً (${cat.count} نموذج امتحان)`;

      document.getElementById('categoryQuickSelect').value = cat.id;

      const grid = document.getElementById('examButtonsGrid');
      grid.innerHTML = '';

      for (let i = 1; i <= cat.count; i++) {
        const key = `${cat.id}_${i}`;
        const isDone = Object.prototype.hasOwnProperty.call(appState.completedExams, key);
        const col = document.createElement('div');
        col.className = 'one_sixth tie-columns';

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `tie-exam-pill-btn w-full ${isDone ? 'completed-pill' : ''}`;
        btn.onclick = function() {
          openExam(cat.id, i);
        };

        // Preserve site's exact button text (including button 25 on Heavy Truck if desired, or clean label)
        const labelText = `${cat.buttonPrefix} ${i}`;
        btn.innerHTML = `
          <div class="chevron-num-tag">${i}</div>
          <div class="flex-grow px-3.5 py-2 text-right">
            <div class="text-xs sm:text-sm font-extrabold leading-snug">${labelText}</div>
            <div class="text-[10px] font-bold ${isDone ? 'text-emerald-600' : 'text-gray-400'}">
              ${isDone ? 'مكتمل (' + appState.completedExams[key] + '%)' : 'اضغط لبدء الامتحان'}
            </div>
          </div>
        `;
        col.appendChild(btn);
        grid.appendChild(col);
      }

      navigateTo('category');
    }

    function backToCurrentCategory() {
      openCategory(appState.currentCategory);
    }

    function openExam(catId, examNumber) {
      const cat = CATEGORIES[catId] || CATEGORIES.khosousi;
      appState.currentCategory = cat.id;
      appState.currentExamNumber = examNumber;

      const totalPool = VERIFIED_QUESTIONS.length;
      const offset = ((examNumber - 1) * 3 + cat.id.length) % totalPool;
      const selected = [];
      for (let i = 0; i < 15; i++) {
        selected.push(VERIFIED_QUESTIONS[(offset + i) % totalPool]);
      }
      appState.activeQuestions = selected;
      appState.currentQuestionIndex = 0;
      appState.userAnswers = {};

      const fullTitle = `${cat.buttonPrefix} (${examNumber})`;
      document.getElementById('examCategoryBackBreadcrumb').textContent = cat.title;
      document.getElementById('examCurrentBreadcrumb').textContent = fullTitle;
      document.getElementById('examMainTitle').textContent = fullTitle;
      document.getElementById('examStartTitle').textContent = `${cat.examPrefix} ${examNumber}`;
      document.getElementById('examBadgeLabel').textContent = cat.title;
      document.getElementById('examTimerDisplay').textContent = '30:00';
      document.getElementById('examCounterDisplay').textContent = `1 / ${selected.length}`;

      document.getElementById('examStartScreen').classList.remove('hidden');
      document.getElementById('examActiveContainer').classList.add('hidden');
      document.getElementById('examResultScreen').classList.add('hidden');

      navigateTo('exam');
    }

    function startActiveExam() {
      appState.currentQuestionIndex = 0;
      appState.userAnswers = {};
      appState.timerSeconds = 30 * 60;

      document.getElementById('examStartScreen').classList.add('hidden');
      document.getElementById('examResultScreen').classList.add('hidden');
      document.getElementById('examActiveContainer').classList.remove('hidden');

      startExamTimer();
      renderCurrentQuestion();
    }

    function startExamTimer() {
      stopExamTimer();
      updateTimerDisplay();
      appState.timerInterval = setInterval(function() {
        if (appState.timerSeconds > 0) {
          appState.timerSeconds--;
          updateTimerDisplay();
        } else {
          stopExamTimer();
          finishExam();
        }
      }, 1000);
    }

    function stopExamTimer() {
      if (appState.timerInterval) {
        clearInterval(appState.timerInterval);
        appState.timerInterval = null;
      }
    }

    function updateTimerDisplay() {
      const mins = Math.floor(appState.timerSeconds / 60);
      const secs = appState.timerSeconds % 60;
      const el = document.getElementById('examTimerDisplay');
      if (el) {
        el.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    }

    function renderCurrentQuestion() {
      const questions = appState.activeQuestions;
      const idx = appState.currentQuestionIndex;
      const qItem = questions[idx];
      if (!qItem) return;

      const total = questions.length;
      const answeredCount = Object.keys(appState.userAnswers).length;
      const pct = Math.round((answeredCount / total) * 100);

      document.getElementById('examCounterDisplay').textContent = `${idx + 1} / ${total}`;
      document.getElementById('examProgressPercent').textContent = `${pct}%`;
      document.getElementById('examProgressBar').style.width = `${pct}%`;

      // Question Number Pills
      const pillsBox = document.getElementById('questionPillsContainer');
      pillsBox.innerHTML = '';
      for (let i = 0; i < total; i++) {
        const pill = document.createElement('button');
        pill.type = 'button';
        const hasAns = Object.prototype.hasOwnProperty.call(appState.userAnswers, i);
        const isCorrectAns = hasAns && appState.userAnswers[i] === questions[i].correct;
        let cls = 'bg-gray-100 text-gray-700 border-gray-300';
        if (i === idx) {
          cls = 'bg-[#E22B2B] text-white border-[#E22B2B]';
        } else if (hasAns) {
          cls = isCorrectAns ? 'bg-[#1D9E5B] text-white border-[#1D9E5B]' : 'bg-red-600 text-white border-red-600';
        }
        pill.className = `w-7 h-7 rounded text-xs font-extrabold border transition ${cls}`;
        pill.textContent = String(i + 1);
        pill.onclick = function() {
          appState.currentQuestionIndex = i;
          renderCurrentQuestion();
        };
        pillsBox.appendChild(pill);
      }

      // Question Text & Sign
      document.getElementById('questionTextPrompt').textContent = `${idx + 1}. ${qItem.q}`;
      const signWrapper = document.getElementById('questionSignWrapper');
      if (qItem.sign) {
        signWrapper.classList.remove('hidden');
        document.getElementById('questionSignSvgBox').innerHTML = getSignSvg(qItem.sign);
        document.getElementById('questionSignCodeLabel').textContent = `شاخصة (${qItem.sign})`;
      } else {
        signWrapper.classList.add('hidden');
      }

      // Render WP-Pro-Quiz Option List (<ul class="wpProQuiz_questionList">)
      const choicesList = document.getElementById('questionChoicesList');
      choicesList.innerHTML = '';
      const userPicked = appState.userAnswers[idx];
      const hasAnswered = typeof userPicked === 'number';

      qItem.choices.forEach((choiceText, cIdx) => {
        const li = document.createElement('li');
        li.className = 'wpProQuiz_questionListItem';

        let statusClass = '';
        let badgeIcon = `<input class="wpProQuiz_questionInput accent-[#1D9E5B]" type="radio" name="question_${idx}" ${userPicked === cIdx ? 'checked' : ''} />`;

        if (hasAnswered) {
          if (cIdx === qItem.correct) {
            statusClass = 'answer-correct';
            badgeIcon = `<i class="fa-solid fa-circle-check text-white text-base"></i>`;
          } else if (cIdx === userPicked && userPicked !== qItem.correct) {
            statusClass = 'answer-wrong';
            badgeIcon = `<i class="fa-solid fa-circle-xmark text-white text-base"></i>`;
          }
        }

        const label = document.createElement('label');
        label.className = `wpProQuiz_label ${statusClass}`;
        label.innerHTML = `
          ${badgeIcon}
          <span class="text-xs sm:text-sm">${cIdx + 1}. ${choiceText}</span>
        `;
        label.onclick = function(e) {
          e.preventDefault();
          selectAnswer(idx, cIdx);
        };

        li.appendChild(label);
        choicesList.appendChild(li);
      });

      const fb = document.getElementById('questionInstantFeedback');
      if (hasAnswered) {
        fb.classList.remove('hidden');
        if (userPicked === qItem.correct) {
          fb.className = 'rounded p-3 text-xs sm:text-sm font-bold flex items-center gap-2 bg-emerald-100 border border-emerald-300 text-emerald-900';
          fb.innerHTML = `<i class="fa-solid fa-check"></i><span>إجابة صحيحة!</span>`;
        } else {
          fb.className = 'rounded p-3 text-xs sm:text-sm font-bold flex items-center gap-2 bg-red-100 border border-red-300 text-red-900';
          fb.innerHTML = `<i class="fa-solid fa-xmark"></i><span>إجابة خاطئة — الإجابة الصحيحة مظللة باللون الأخضر.</span>`;
        }
      } else {
        fb.classList.add('hidden');
      }

      document.getElementById('prevQuestionBtn').disabled = (idx === 0);
      document.getElementById('prevQuestionBtn').classList.toggle('opacity-50', idx === 0);
    }

    function selectAnswer(qIdx, choiceIdx) {
      appState.userAnswers[qIdx] = choiceIdx;
      renderCurrentQuestion();
    }

    function stepQuestion(delta) {
      const nextIdx = appState.currentQuestionIndex + delta;
      if (nextIdx >= 0 && nextIdx < appState.activeQuestions.length) {
        appState.currentQuestionIndex = nextIdx;
        renderCurrentQuestion();
      } else if (nextIdx >= appState.activeQuestions.length) {
        finishExam();
      }
    }

    function finishExam() {
      stopExamTimer();
      const total = appState.activeQuestions.length;
      let correct = 0;
      appState.activeQuestions.forEach((q, i) => {
        if (appState.userAnswers[i] === q.correct) correct++;
      });
      const wrong = total - correct;
      const percent = total > 0 ? Math.round((correct / total) * 100) : 0;
      const passed = percent >= 80;

      saveCompletedExam(appState.currentCategory, appState.currentExamNumber, percent);

      document.getElementById('examActiveContainer').classList.add('hidden');
      document.getElementById('examResultScreen').classList.remove('hidden');

      const badge = document.getElementById('resultStatusBadgeIcon');
      const headline = document.getElementById('resultHeadlineText');
      const sub = document.getElementById('resultSubText');

      if (passed) {
        badge.className = 'w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl bg-emerald-100 text-emerald-600';
        badge.innerHTML = '<i class="fa-solid fa-check"></i>';
        headline.textContent = 'ناجح في الامتحان!';
        headline.className = 'text-2xl font-black text-emerald-700';
      } else {
        badge.className = 'w-16 h-16 rounded-full mx-auto flex items-center justify-center text-3xl bg-red-100 text-red-600';
        badge.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
        headline.textContent = 'لم تجتز الامتحان — حاول مرة أخرى';
        headline.className = 'text-2xl font-black text-red-700';
      }
      sub.textContent = `حصلت على ${correct} إجابة صحيحة من أصل ${total}`;

      document.getElementById('resultCorrectCount').textContent = String(correct);
      document.getElementById('resultWrongCount').textContent = String(wrong);
      document.getElementById('resultScorePercent').textContent = `${percent}%`;
    }

    function openNextExamInCategory() {
      const cat = CATEGORIES[appState.currentCategory];
      const nextNum = appState.currentExamNumber < cat.count ? appState.currentExamNumber + 1 : 1;
      openExam(cat.id, nextNum);
    }

    function renderTrafficSigns(groupFilter) {
      const grid = document.getElementById('trafficSignsGrid');
      if (!grid) return;
      grid.innerHTML = '';

      const list = groupFilter === 'all'
        ? TRAFFIC_SIGNS
        : TRAFFIC_SIGNS.filter(s => s.group === groupFilter);

      list.forEach(sign => {
        const row = document.createElement('div');
        row.className = 'bg-gray-50 border border-gray-200 rounded-lg p-3.5 flex items-center gap-4';
        row.innerHTML = `
          <div class="w-20 h-20 bg-white border border-gray-200 rounded flex items-center justify-center flex-shrink-0">
            ${getSignSvg(sign.code)}
          </div>
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="bg-[#E22B2B] text-white text-xs font-extrabold px-2 py-0.5 rounded">${sign.code}</span>
              <h4 class="text-sm sm:text-base font-extrabold text-gray-900">${sign.title}</h4>
            </div>
            <p class="text-xs text-gray-600 font-semibold leading-relaxed">${sign.desc}</p>
          </div>
        `;
        grid.appendChild(row);
      });
    }

    function filterTrafficSigns(group) {
      ['all', 'warning', 'guidance', 'info', 'lights'].forEach(g => {
        const btn = document.getElementById(`signTab-${g}`);
        if (btn) {
          btn.className = g === group
            ? 'bg-[#E22B2B] text-white text-xs font-bold px-3.5 py-2 rounded'
            : 'bg-gray-100 text-gray-800 text-xs font-bold px-3.5 py-2 rounded';
        }
      });
      renderTrafficSigns(group);
    }

    function handleGlobalSearch(query) {
      const q = (query || '').trim();
      const panel = document.getElementById('searchResultsPanel');
      const list = document.getElementById('searchResultsList');
      const badge = document.getElementById('searchQueryBadge');

      if (!q) {
        panel.classList.add('hidden');
        return;
      }

      panel.classList.remove('hidden');
      badge.textContent = q;
      list.innerHTML = '';

      const matches = [];
      Object.values(CATEGORIES).forEach(cat => {
        if (cat.title.includes(q) || cat.buttonPrefix.includes(q)) {
          matches.push({
            label: `${cat.title} (${cat.count})`,
            type: 'قسم',
            action: () => { clearGlobalSearch(); openCategory(cat.id); }
          });
        }
        const numMatch = q.match(/\d+/);
        if (numMatch) {
          const n = parseInt(numMatch[0], 10);
          if (n >= 1 && n <= cat.count) {
            matches.push({
              label: `${cat.buttonPrefix} ${n}`,
              type: 'امتحان',
              action: () => { clearGlobalSearch(); openExam(cat.id, n); }
            });
          }
        }
      });

      TRAFFIC_SIGNS.forEach(s => {
        if (s.title.includes(q) || s.code.includes(q) || s.desc.includes(q)) {
          matches.push({
            label: `${s.code}: ${s.title}`,
            type: 'شاخصة',
            action: () => { clearGlobalSearch(); navigateTo('signs'); }
          });
        }
      });

      VERIFIED_QUESTIONS.forEach((item, idx) => {
        if (item.q.includes(q)) {
          matches.push({
            label: item.q.slice(0, 50) + '...',
            type: 'سؤال',
            action: () => { clearGlobalSearch(); openExam('khosousi', (idx % 23) + 1); startActiveExam(); }
          });
        }
      });

      if (matches.length === 0) {
        list.innerHTML = `<div class="col-span-full text-xs font-bold text-gray-600 py-1">لا توجد نتائج مطابقة لـ "${q}".</div>`;
        return;
      }

      matches.slice(0, 9).forEach(m => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'bg-white hover:bg-red-50 border border-amber-300 rounded p-2 text-right flex items-center justify-between gap-2 text-xs font-bold text-gray-900';
        b.innerHTML = `<span class="truncate">${m.label}</span><span class="bg-red-100 text-[#E22B2B] px-1.5 py-0.5 rounded text-[10px]">${m.type}</span>`;
        b.onclick = m.action;
        list.appendChild(b);
      });
    }

    function clearGlobalSearch() {
      const input = document.getElementById('globalSearchInput');
      if (input) input.value = '';
      document.getElementById('searchResultsPanel').classList.add('hidden');
    }

    function triggerSearchButton() {
      const input = document.getElementById('globalSearchInput');
      if (input && input.value.trim()) {
        handleGlobalSearch(input.value);
      } else if (input) {
        input.focus();
      }
    }

    function focusMobileSearch() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const input = document.getElementById('globalSearchInput');
      if (input) input.focus();
    }

    function toggleDarkMode() {
      appState.darkMode = !appState.darkMode;
      document.body.classList.toggle('dark-mode', appState.darkMode);
      document.getElementById('darkModeIcon').className = appState.darkMode
        ? 'fa-solid fa-sun text-amber-300'
        : 'fa-solid fa-moon text-amber-400';
      document.getElementById('darkModeText').textContent = appState.darkMode
        ? 'الوضع النهاري'
        : 'الوضع المظلم';
    }


    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    window.addEventListener('DOMContentLoaded', function() {
      loadSavedState();
      renderTrafficSigns('all');
    });
