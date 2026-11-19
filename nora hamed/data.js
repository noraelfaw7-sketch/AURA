/**
 * AURA Accessories (أورا للإكسسوارات)
 * Bilingual Data Store: Products, Governorates, Reviews, & Promo Codes
 */

const AURA_DATA = {
  currentLang: 'ar',

  products: [
    {
      id: 'aura-01',
      sku: 'AUR-NC-101',
      category: 'necklaces',
      material: 'gold_plated',
      name: {
        ar: 'عقد لوتس سوليتير مطلي ذهب عيار 18',
        en: 'Lotus Solitaire 18K Gold Plated Necklace'
      },
      tagline: {
        ar: 'تصميم ملكي مستوحى من زهرة اللوتس المصرية مرصع بزركونيا مكعبة نقية',
        en: 'Royal lotus motif pendant paved with brilliant cut AAA cubic zirconia'
      },
      description: {
        ar: 'عقد استثنائي مصنوع بدقة من النحاس الفاخر المطلي بثلاث طبقات من الذهب الأصفر عيار 18 بتقنية PVD المقاومة لتغير اللون والماء. يتميز بدلاية على شكل زهرة لوتس فرعونية حديثة تحتضن حجر زركون بريليانت فائق النقاء يعكس الضوء ببريق يحاكي الماس الحقيقي. طول السلسلة قابل للتعديل (40-45 سم) ليناسب جميع الإطلالات.',
        en: 'An exceptional piece meticulously crafted with 3-layer 18K yellow gold PVD plating over premium eco-brass. Features a contemporary Egyptian lotus flower pendant cradling an ultra-clarity brilliant cut zirconia that rivals fine diamonds. Adjustable chain (40-45 cm).'
      },
      price: 1350,
      originalPrice: 1750,
      discount: 23,
      rating: 4.9,
      reviewsCount: 38,
      inStock: true,
      stockCount: 8,
      badge: { ar: 'الأكثر مبيعاً', en: 'Best Seller' },
      images: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611591475852-51540306385a?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['40 cm', '45 cm', '50 cm'],
      colors: ['gold', 'rose_gold'],
      careInstructions: {
        ar: 'تجنبي الرش المباشر للعطور أو المستحضرات الكيميائية. يُحفظ في الكيس المخملي المرفق بعد كل استخدام ويُنظف بقطعة القماش الحريرية المرفقة.',
        en: 'Avoid direct contact with perfumes and harsh chemicals. Store in the complimentary velvet pouch and clean with the provided micro-silk cloth.'
      }
    },
    {
      id: 'aura-02',
      sku: 'AUR-RG-204',
      category: 'rings',
      material: 'silver_925',
      name: {
        ar: 'خاتم إتيرنيتي فضة إسترليني عيار 925 مع حجر الزمرد',
        en: 'Eternity 925 Sterling Silver Emerald Cut Ring'
      },
      tagline: {
        ar: 'خاتم كلاسيكي ببريق فاخر مع حجر زمرد نانو الأخضر الملكي',
        en: 'Timeless halo ring featuring an emerald-cut lab gemstone and pave band'
      },
      description: {
        ar: 'صُمم هذا الخاتم ليعكس فخامة الأميرات، صُنع من الفضة الخالصة عيار 925 المطلية بالروديوم الأبيض لحمايتها من الأكسدة ومنحها لمعاناً بلاتينياً يدوم طويلاً. يتوسطه حجر زمرد نانو أخضر عميق مقطوع بعناية فائقة تحيط به هالة من أحجار الزركونيا اللامعة.',
        en: 'Designed with regal sophistication, forged from solid 925 Sterling Silver and coated in white rhodium for anti-tarnish durability and platinum-like shine. Centered with an emerald-cut nano emerald surrounded by a micro-pave halo.'
      },
      price: 1150,
      originalPrice: 1450,
      discount: 21,
      rating: 4.8,
      reviewsCount: 29,
      inStock: true,
      stockCount: 5,
      badge: { ar: 'موصى به', en: 'Curated' },
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['6 (16.5 mm)', '7 (17.3 mm)', '8 (18.1 mm)', '9 (18.9 mm)'],
      colors: ['silver', 'gold'],
      careInstructions: {
        ar: 'الفضة 925 الأصلية تحتفظ ببريقها مع التلميع الدوري. تجنبي ارتداء الخاتم أثناء استخدام المنظفات القوية أو السباحة.',
        en: 'Solid 925 Silver preserves its sheen with periodic gentle buffing. Avoid wearing during swimming or handling household cleaners.'
      }
    },
    {
      id: 'aura-03',
      sku: 'AUR-BR-302',
      category: 'bracelets',
      material: 'gold_plated',
      name: {
        ar: 'إسوارة كليوباترا بانجل ذهب عيار 18 مرصعة باللؤلؤ',
        en: 'Cleopatra Bangle 18K Gold Plated with Cultured Pearl'
      },
      tagline: {
        ar: 'إسوارة صلبة مرنة بتصميم عصري جريء مع حبة لؤلؤ باروكية نادرة',
        en: 'Sculptural open cuff bangle tipped with genuine freshwater baroque pearls'
      },
      description: {
        ar: 'قطعة فنية تجمع بين الأناقة الفرعونية الخالدة والخطوط البسيطة المعاصرة. إسوارة مفتوحة مريحة في الارتداء مطلية بذهب عيار 18، تنتهي بلؤلؤ طبيعي مستزرع في المياه العذبة ومختار يدوياً لنقائه ولمعانه الحريري.',
        en: 'A striking fusion of timeless ancient poise and contemporary minimalism. Open flexible cuff plated in rich 18K yellow gold, punctuated by handpicked natural freshwater pearls with iridescent luster.'
      },
      price: 1650,
      originalPrice: 2100,
      discount: 21,
      rating: 5.0,
      reviewsCount: 44,
      inStock: true,
      stockCount: 12,
      badge: { ar: 'مجموعة النخبة', en: 'VIP Choice' },
      images: [
        'https://images.unsplash.com/photo-1611591475852-51540306385a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['16 cm (صغير)', '18 cm (متوسط)', '20 cm (كبير)'],
      colors: ['gold'],
      careInstructions: {
        ar: 'اللؤلؤ الطبيعي مادة عضوية رقيقة؛ ضعيه كآخر خطوة عند ارتداء ملابسك وتجنبي ملامسته المباشرة لمثبتات الشعر.',
        en: 'Natural pearls are delicate organic gems; put them on last after styling and keep away from hair sprays.'
      }
    },
    {
      id: 'aura-04',
      sku: 'AUR-WT-401',
      category: 'watches',
      material: 'stainless_steel',
      name: {
        ar: 'ساعة رويال كارتييه إنسبيراشن بسوار شبكي ذهبي',
        en: 'AURA Royale Mesh Slim 18K Gold Finish Watch'
      },
      tagline: {
        ar: 'ساعة سويسرية الطابع بحركة كوارتز يابانية فائقة الدقة وزجاج ياقوتي',
        en: 'Ultra-thin dress watch with precision Japanese quartz movement and sapphire crystal'
      },
      description: {
        ar: 'عنوان الفخامة الهادئة للسيدات العصريات في القاهرة والإسكندرية. ميناء مربع نحيف باللون الأبيض العاجي مع عقارب رومانية بلون أسود فحمي، سوار شبكي مصنوع من الستانلس ستيل 316L المقاوم للصدأ ومطلي بالذهب بتقنية الأيونات الفراغية، مقاومة للماء حتى عمق 30 متراً.',
        en: 'The epitome of quiet luxury. Rectangular cream dial with charcoal Roman numerals, fine Milanese mesh strap forged from marine-grade 316L stainless steel, ion-plated in gold. Water resistant up to 3 ATM.'
      },
      price: 2450,
      originalPrice: 3200,
      discount: 23,
      rating: 4.9,
      reviewsCount: 52,
      inStock: true,
      stockCount: 6,
      badge: { ar: 'ضمان عامين', en: '2-Year Warranty' },
      images: [
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['سوار قابل للتعديل (Universal)'],
      colors: ['gold', 'silver', 'rose_gold'],
      careInstructions: {
        ar: 'مقاومة لرذاذ الماء وغسيل اليدين. تأتي مع شهادة ضمان معتمدة لمدة عامين وضمان استبدال فوري للبطارية.',
        en: 'Splash and rain resistant. Includes stamped 2-year warranty certificate and 1-year complimentary battery replacement.'
      }
    },
    {
      id: 'aura-05',
      sku: 'AUR-SG-501',
      category: 'sunglasses',
      material: 'stainless_steel',
      name: {
        ar: 'نظارة شمسية فينيسيا أوفرسايز بإطار ذهبي وحماية UV400',
        en: 'Venezia Oversized Geometric Sunglasses (UV400 Polarized)'
      },
      tagline: {
        ar: 'إطار هندسي خفيف الوزن مع عدسات متدرجة مستقطبة لحماية كاملة من شمس مصر',
        en: 'Geometric lightweight metal frame with gradient polarized UV400 lenses'
      },
      description: {
        ar: 'صممت خصيصاً لأشعة الشمس المشرقة في مصر، توفر حماية 100% من الأشعة فوق البنفسجية UV400 مع تقليل الوهج بفضل العدسات المستقطبة الفاخرة ذات التدرج الدخاني الدافئ. الإطار مصنوع من سبيكة التيتانيوم والستانلس ستيل خفيف الوزن مع وسادات أنف سيليكون مريحة لا تترك أثراً.',
        en: 'Specially engineered for sunny Mediterranean and Egyptian climates. Delivers 100% UV400 protection with polarized glare-reduction filters and gradient warm smoke lenses. Ultra-light titanium/steel frame with gentle silicone nose pads.'
      },
      price: 1250,
      originalPrice: 1600,
      discount: 22,
      rating: 4.7,
      reviewsCount: 31,
      inStock: true,
      stockCount: 14,
      badge: { ar: 'حماية كاملة UV400', en: 'Polarized' },
      images: [
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['مقاس قياسي مريح (Standard)'],
      colors: ['gold_smoke', 'black_gold'],
      careInstructions: {
        ar: 'تأتي داخل حافظة جلدية فاخرة صلبة لحمايتها من الخدوش، مع منديل ميكروفايبر معقم لتنظيف العدسات.',
        en: 'Supplied inside a structured leatherette hard case with a premium microfiber lens polishing cloth.'
      }
    },
    {
      id: 'aura-06',
      sku: 'AUR-NC-105',
      category: 'necklaces',
      material: 'silver_925',
      name: {
        ar: 'عقد التنس الماسي شاين فضة إسترليني 925',
        en: 'Shine Tennis 925 Sterling Silver Choker Necklace'
      },
      tagline: {
        ar: 'صف متصل من أحجار المويسانيت اللامعة بقطع دائري متقن',
        en: 'Continuous row of precision-faceted lab moissanite in four-prong settings'
      },
      description: {
        ar: 'عقد التنس الأيقوني الذي لا غنى عنه في مناسباتك وسهراتك الخاصة. مرصوف بأكثر من 80 حجر مويسانيت فائق التألق بقطر 3 ملم مثبتة بتقنية 4-prongs على قاعدة من الفضة 925 المغطاة بالروديوم اللامع لمنع الاسوداد. مزود بقفل أمان مزدوج.',
        en: 'The definitive tennis choker, engineered for high-society galas and everyday chic. Encrusted with over 80 radiant 3mm moissanite stones set securely in four prongs on rhodium-sealed 925 solid silver. Double security safety clasp.'
      },
      price: 1850,
      originalPrice: 2400,
      discount: 23,
      rating: 4.9,
      reviewsCount: 61,
      inStock: true,
      stockCount: 4,
      badge: { ar: 'مويسانيت فائق', en: 'Top Sparkle' },
      images: [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611591475852-51540306385a?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['38 cm + 5 cm وصلة تمديد'],
      colors: ['silver', 'gold'],
      careInstructions: {
        ar: 'يُنصح بعدم شده بقوة وحفظه ممدوداً في علبة المجوهرات لمنع التواء المفصلات.',
        en: 'Store flat in your velvet jewelry box to maintain chain alignment and prong tension.'
      }
    },
    {
      id: 'aura-07',
      sku: 'AUR-RG-208',
      category: 'rings',
      material: 'gold_plated',
      name: {
        ar: 'محبس أورا سوليتير كلاسيك مطلي ذهب عيار 18',
        en: 'AURA Classic Solitaire 18K Gold Plated Engagement Ring'
      },
      tagline: {
        ar: 'فص دائري بارز عيار 2 قيراط بتصميم 6 مخالب ناعمة',
        en: 'Timeless 2-carat equivalent round brilliant stone in iconic six-prong setting'
      },
      description: {
        ar: 'البساطة هي قمة الفخامة. خاتم سوليتير كلاسيكي يتميز بحجر زركون بريليانت 2 قيراط مثبت على تاج مرتفع يسمح بمرور الضوء من جميع الجوانب ليعطيكِ انعكاسات نارية مبهرة. مطلي بذهب عيار 18 مقاوم لتغير اللون مع الاستخدام اليومي.',
        en: 'Understated elegance at its pinnacle. Classic solitaire ring holding a 2-carat equivalent diamond-simulant atop an elevated cathedral setting that channels light for supreme fire and brilliance. 18K thick gold plating.'
      },
      price: 980,
      originalPrice: 1300,
      discount: 25,
      rating: 4.8,
      reviewsCount: 47,
      inStock: true,
      stockCount: 9,
      badge: { ar: 'الأكثر طلباً', en: 'Most Popular' },
      images: [
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['5 (15.7 mm)', '6 (16.5 mm)', '7 (17.3 mm)', '8 (18.1 mm)'],
      colors: ['gold', 'silver'],
      careInstructions: {
        ar: 'آمن للغسيل الخفيف بالماء الفاتر وصابون سائل خفيف ثم تجفيفه فوراً بقطعة قماش ناعمة.',
        en: 'Safe for gentle lukewarm water rinse with mild soap; pat dry immediately with a soft cloth.'
      }
    },
    {
      id: 'aura-08',
      sku: 'AUR-BR-308',
      category: 'bracelets',
      material: 'stainless_steel',
      name: {
        ar: 'إسوارة كارتييه لوف ستايل المقاومة للماء (ستانلس ستيل)',
        en: 'AURA Eternal Bond Screws Waterproof Bracelet'
      },
      tagline: {
        ar: 'ستانلس ستيل 316L فائق الصلابة مقاوم للماء والعطور تماماً مع مفك صغير',
        en: 'Surgical-grade 316L waterproof bracelet with engraved motifs and secure click lock'
      },
      description: {
        ar: 'القطعة اليومية المثالية التي لن تحتاجي لخلعها أبداً! صُنعت من الستانلس ستيل الطبي عيار 316L الذي لا يتأثر بالماء أو العرق أو البحر أو العطور إطلاقاً. مطلية بطبقة PVD ذهبية حقيقية تمنحها ثباتاً للون يدوم لسنوات طويلة.',
        en: 'The essential everyday luxury piece you never have to take off. Forged from surgical 316L stainless steel that is 100% waterproof, perfume-proof, and tarnish-free. PVD gold bond ensures perpetual golden warmth.'
      },
      price: 890,
      originalPrice: 1150,
      discount: 23,
      rating: 4.9,
      reviewsCount: 78,
      inStock: true,
      stockCount: 20,
      badge: { ar: 'ضد الماء 100%', en: '100% Waterproof' },
      images: [
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611591475852-51540306385a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['16 cm', '17 cm', '19 cm'],
      colors: ['gold', 'silver', 'rose_gold'],
      careInstructions: {
        ar: 'مقاومة تامة للماء والسباحة. لا تحتاج لأي عناية خاصة، فقط امسحيها لتستعيد لمعانها الفوري.',
        en: 'Completely waterproof and shower-safe. Requires minimal maintenance—simply wipe dry for instant mirror sheen.'
      }
    },
    {
      id: 'aura-09',
      sku: 'AUR-WT-403',
      category: 'watches',
      material: 'stainless_steel',
      name: {
        ar: 'ساعة سيرانتينا الثعبان الفاخرة سوار حلزوني مطلي ذهب',
        en: 'Serpentina Spiral Bangle Watch in Polished Gold'
      },
      tagline: {
        ar: 'تصميم إيطالي جريء يلتف حول المعصم كقطعة مجوهرات استثنائية',
        en: 'Sculptural snake-wrap timepiece that doubles as a statement high-jewelry cuff'
      },
      description: {
        ar: 'قطعة تخطف الأنفاس مستوحاة من أساطير الجمال الروماني والفرعوني. ميناء على شكل رأس الثعبان مطعم بكريستالات سواروفسكي دقيقة، وسوار حلزوني مرن يلتف حول المعصم براحة تامة. ماكينة كوارتز معتمدة مع زجاج مقوى ضد الخدش.',
        en: 'A showstopping statement piece. The snakehead dial is framed by pavé crystals, while the flexible coiled tubogas bracelet wraps sensuously around your wrist. High-precision movement with scratch-resistant mineral crystal.'
      },
      price: 2890,
      originalPrice: 3600,
      discount: 20,
      rating: 5.0,
      reviewsCount: 36,
      inStock: true,
      stockCount: 3,
      badge: { ar: 'إصدار محدود', en: 'Limited Edition' },
      images: [
        'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['مرن يلتف لجميع المقاسات (Flex Fit)'],
      colors: ['gold', 'silver_gold'],
      careInstructions: {
        ar: 'تجنبي سحب السوار بقوة تتجاوز مرونته الطبيعية. تحفظ في علبتها الخاصة المبطنة بالساتان الأسود.',
        en: 'Avoid overstretching the flexible coil. Store inside its custom satin-lined presentation case.'
      }
    },
    {
      id: 'aura-10',
      sku: 'AUR-SG-504',
      category: 'sunglasses',
      material: 'stainless_steel',
      name: {
        ar: 'نظارة كليوباترا كات آي بإطار معدني ذهبي رفيع',
        en: 'Cleopatra Cat-Eye Slim Gold Frame Sunglasses'
      },
      tagline: {
        ar: 'شكل عيون القطة الأنيق مع أذرع منقوشة وعدسات بنية متدرجة',
        en: 'Sharp, dramatic cat-eye silhouette with engraved temples and amber gradient lenses'
      },
      description: {
        ar: 'لمسة من الغموض والجاذبية الراقية. تصميم كات آي حاد يناسب ملامح الوجه المختلفة، مصنوع من الفولاذ الذهبي فائق النعومة مع حماية متطورة من الأشعة فوق البنفسجية UV400 لحماية بشرة محيط العينين الحساسة.',
        en: 'An iconic silhouette exuding magnetic allure. Precision cat-eye corners flatter all face shapes, crafted with ultra-light golden steel and premium UV400 lenses that protect delicate periorbital skin.'
      },
      price: 1190,
      originalPrice: 1550,
      discount: 23,
      rating: 4.8,
      reviewsCount: 22,
      inStock: true,
      stockCount: 11,
      badge: { ar: 'موضة 2025', en: 'Trending' },
      images: [
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['مقاس موحد (Standard Fit)'],
      colors: ['gold_amber', 'black_gold'],
      careInstructions: {
        ar: 'تُنظف برفق بالماء الفاتر والمنديل المخصص. تجنبي تركها في درجات حرارة مرتفعة كطبلون السيارة صيفاً.',
        en: 'Gently rinse with cool water and dry with the micro-cloth. Avoid leaving on hot car dashboards during summer.'
      }
    },
    {
      id: 'aura-11',
      sku: 'AUR-NC-108',
      category: 'necklaces',
      material: 'gold_plated',
      name: {
        ar: 'سلسلة طبقات كوين إليزابيث كوين كوين مطلي ذهب',
        en: 'Royal Medallion Layered Double Necklace (18K Gold Plated)'
      },
      tagline: {
        ar: 'سلسلتان متصلتان بقفل واحد: عملة نقدية أثرية مع سلسلة فيجارو ناعمة',
        en: 'Two-in-one layered styling: vintage Roman coin medallion paired with classic Figaro chain'
      },
      description: {
        ar: 'سلسلة الطبقات الجاهزة لتمنحك إطلالة فاشونيستا باريسية في ثوانٍ. تدمج بين سلسلة فيجارو عريضة وسلسلة أطول تنتهي بقرص عملة رومانية منقوشة بدقة. لا تشابك بفضل القفل الذكي الموحد.',
        en: 'Effortless Parisian layering solved. Unites a bold Figaro choker with an elongated antique coin medallion on an integrated no-tangle single clasp mechanism.'
      },
      price: 1280,
      originalPrice: 1650,
      discount: 22,
      rating: 4.9,
      reviewsCount: 41,
      inStock: true,
      stockCount: 15,
      badge: { ar: 'تنسيق مزدوج', en: 'Layered Set' },
      images: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611591475852-51540306385a?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['38 cm + 45 cm (+ 6 cm وصلة)'],
      colors: ['gold'],
      careInstructions: {
        ar: 'احفظيها معلقة أو مفرودة لتجنب تشابك الطبقات.',
        en: 'Hang or keep extended when stored to preserve effortless chain flow.'
      }
    },
    {
      id: 'aura-12',
      sku: 'AUR-RG-212',
      category: 'rings',
      material: 'silver_925',
      name: {
        ar: 'طقم خواتم ميدي توينز فضة 925 مرصع بالباغيت',
        en: 'Twin Baguette Crown Stacking Rings (925 Sterling Silver)'
      },
      tagline: {
        ar: 'خاتمان متطابقان يمكن ارتداؤهما معاً أو منفصلين بقطع الباغيت الهندسي',
        en: 'Interlocking twin band set featuring chevron crests and baguette-cut cubic crystals'
      },
      description: {
        ar: 'طقم استثنائي يجمع بين خاتمين هندسيين متطابقين بتصميم التاج المتقاطع (Chevron). مصنوعان من الفضة الإسترليني عيار 925 المطلية بالبلاتين، مرصعان بأحجار باغيت مستطيلة تمنح بريقاً معمارياً معاصراً.',
        en: 'A striking duo of interlocking V-crown bands. Cast from solid 925 Sterling Silver with platinum flash plating, handset with modern baguette stones for an architectural gleam.'
      },
      price: 1390,
      originalPrice: 1800,
      discount: 23,
      rating: 4.9,
      reviewsCount: 19,
      inStock: true,
      stockCount: 7,
      badge: { ar: 'طقم قطعتين', en: '2-Piece Set' },
      images: [
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=800&q=80'
      ],
      sizes: ['6 (16.5 mm)', '7 (17.3 mm)', '8 (18.1 mm)'],
      colors: ['silver', 'gold'],
      careInstructions: {
        ar: 'امسحي الخاتمين بعد الاستخدام بقماش الفضة الخاص المرفق لحماية لمعانهما البلاتيني.',
        en: 'Wipe with the silver polishing cloth included to sustain bright platinum-like clarity.'
      }
    }
  ],

  governorates: [
    { id: 'cairo', name: { ar: 'القاهرة', en: 'Cairo' }, fee: 45, time: { ar: '24-48 ساعة', en: '24-48 Hours' } },
    { id: 'giza', name: { ar: 'الجيزة', en: 'Giza' }, fee: 45, time: { ar: '24-48 ساعة', en: '24-48 Hours' } },
    { id: 'alexandria', name: { ar: 'الإسكندرية', en: 'Alexandria' }, fee: 55, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'qalyubia', name: { ar: 'القليوبية', en: 'Qalyubia' }, fee: 55, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'sharqia', name: { ar: 'الشرقية (الزقازيق / العاشر)', en: 'Sharqia' }, fee: 65, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'dakahlia', name: { ar: 'الدقهلية (المنصورة)', en: 'Dakahlia (Mansoura)' }, fee: 65, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'gharbia', name: { ar: 'الغربية (طنطا / المحلة)', en: 'Gharbia (Tanta)' }, fee: 65, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'menofia', name: { ar: 'المنوفية (شبين الكوم)', en: 'Menofia' }, fee: 65, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'beheira', name: { ar: 'البحيرة (دمنهور)', en: 'Beheira (Damanhur)' }, fee: 65, time: { ar: '2-4 أيام عمل', en: '2-4 Business Days' } },
    { id: 'damietta', name: { ar: 'دمياط', en: 'Damietta' }, fee: 65, time: { ar: '2-4 أيام عمل', en: '2-4 Business Days' } },
    { id: 'port_said', name: { ar: 'بورسعيد', en: 'Port Said' }, fee: 65, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'ismailia', name: { ar: 'الإسماعيلية', en: 'Ismailia' }, fee: 65, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'suez', name: { ar: 'السويس', en: 'Suez' }, fee: 65, time: { ar: '2-3 أيام عمل', en: '2-3 Business Days' } },
    { id: 'fayoum', name: { ar: 'الفيوم', en: 'Fayoum' }, fee: 75, time: { ar: '3-4 أيام عمل', en: '3-4 Business Days' } },
    { id: 'beni_suef', name: { ar: 'بني سويف', en: 'Beni Suef' }, fee: 75, time: { ar: '3-4 أيام عمل', en: '3-4 Business Days' } },
    { id: 'minya', name: { ar: 'المنيا', en: 'Minya' }, fee: 80, time: { ar: '3-5 أيام عمل', en: '3-5 Business Days' } },
    { id: 'assiut', name: { ar: 'أسيوط', en: 'Assiut' }, fee: 85, time: { ar: '3-5 أيام عمل', en: '3-5 Business Days' } },
    { id: 'sohag', name: { ar: 'سوهاج', en: 'Sohag' }, fee: 85, time: { ar: '3-5 أيام عمل', en: '3-5 Business Days' } },
    { id: 'qena', name: { ar: 'قنا', en: 'Qena' }, fee: 90, time: { ar: '3-5 أيام عمل', en: '3-5 Business Days' } },
    { id: 'luxor', name: { ar: 'الأقصر', en: 'Luxor' }, fee: 95, time: { ar: '4-5 أيام عمل', en: '4-5 Business Days' } },
    { id: 'aswan', name: { ar: 'أسوان', en: 'Aswan' }, fee: 95, time: { ar: '4-5 أيام عمل', en: '4-5 Business Days' } },
    { id: 'red_sea', name: { ar: 'البحر الأحمر (الغردقة / الجونة)', en: 'Red Sea (Hurghada)' }, fee: 95, time: { ar: '3-5 أيام عمل', en: '3-5 Business Days' } },
    { id: 'south_sinai', name: { ar: 'جنوب سيناء (شرم الشيخ / دهب)', en: 'South Sinai (Sharm / Dahab)' }, fee: 95, time: { ar: '3-5 أيام عمل', en: '3-5 Business Days' } }
  ],

  promoCodes: {
    'AURA10': { type: 'percent', value: 10, minSpend: 0, description: { ar: 'خصم 10% على إجمالي الطلب', en: '10% discount on entire order' } },
    'EGYPTFREE': { type: 'free_shipping', value: 0, minSpend: 0, description: { ar: 'شحن مجاني لكافة المحافظات', en: 'Free shipping on all governorates' } },
    'VIP20': { type: 'percent', value: 20, minSpend: 1500, description: { ar: 'خصم 20% للطلبات فوق 1500 ج.م', en: '20% off orders over 1500 EGP' } }
  },

  reviews: [
    {
      author: { ar: 'مريم الشريف', en: 'Mariam El-Sherif' },
      city: { ar: 'التجمع الخامس، القاهرة', en: 'Fifth Settlement, Cairo' },
      rating: 5,
      date: { ar: 'منذ يومين', en: '2 days ago' },
      productName: { ar: 'عقد لوتس سوليتير مطلي ذهب', en: 'Lotus Solitaire Gold Necklace' },
      comment: {
        ar: 'القطعة فاخرة بشكل لا يوصف! التغليف الملكي والكيس المخملي أذهلني، ولمعان حجر السوليتير يحاكي الألماس الحقيقي تماماً. الشحن وصلني في أقل من 24 ساعة.',
        en: 'Indescribably luxurious! The royal packaging and velvet pouch took my breath away, and the sparkle mimics genuine diamonds. Delivered in under 24 hours.'
      }
    },
    {
      author: { ar: 'نور الدين غانم', en: 'Nour El-Din Ghanem' },
      city: { ar: 'سموحة، الإسكندرية', en: 'Smouha, Alexandria' },
      rating: 5,
      date: { ar: 'منذ 5 أيام', en: '5 days ago' },
      productName: { ar: 'ساعة رويال كارتييه إنسبيراشن', en: 'AURA Royale Mesh Gold Watch' },
      comment: {
        ar: 'اشتريتها كهدية لزوجتي في ذكرى زواجنا، وكانت منبهرة بدقة التفاصيل ولمعان الذهب الهادئ. خدمة العملاء عبر واتساب راقية وسريعة جداً.',
        en: 'Bought it as an anniversary gift for my wife, and she was captivated by the subtle gold sheen and crisp craftsmanship. WhatsApp concierge was stellar.'
      }
    },
    {
      author: { ar: 'فرح عبد الرحمن', en: 'Farah Abdel-Rahman' },
      city: { ar: 'الشيخ زايد، الجيزة', en: 'Sheikh Zayed, Giza' },
      rating: 5,
      date: { ar: 'منذ أسبوع', en: '1 week ago' },
      productName: { ar: 'إسوارة كارتييه لوف المقاومة للماء', en: 'AURA Eternal Bond Waterproof Bracelet' },
      comment: {
        ar: 'أرتدي الإسوارة في النادي وأثناء الاستحمام منذ أسبوعين ولم يتغير لونها أو تبهت إطلاقاً! فخورة أن عندنا براند مصري بهذه الجودة العالمية.',
        en: 'I have worn this bangle daily in the gym and shower for two weeks; no tarnishing whatsoever! So proud to have an Egyptian brand with international luxury standards.'
      }
    }
  ],

  livePurchases: [
    { name: { ar: 'ياسمين', en: 'Yasmine' }, city: { ar: 'المعادي', en: 'Maadi' }, item: { ar: 'عقد لوتس سوليتير 18K', en: 'Lotus Solitaire 18K Necklace' } },
    { name: { ar: 'دينا', en: 'Dina' }, city: { ar: 'هليوبوليس', en: 'Heliopolis' }, item: { ar: 'خاتم إتيرنيتي حجر الزمرد', en: 'Eternity Emerald Ring' } },
    { name: { ar: 'رنا', en: 'Rana' }, city: { ar: 'المنصورة', en: 'Mansoura' }, item: { ar: 'إسوارة كليوباترا بانجل اللؤلؤ', en: 'Cleopatra Pearl Bangle' } },
    { name: { ar: 'سلمى', en: 'Salma' }, city: { ar: 'رشدي، الإسكندرية', en: 'Roushdy, Alexandria' }, item: { ar: 'نظارة فينيسيا أوفرسايز', en: 'Venezia Polarized Sunglasses' } },
    { name: { ar: 'أميرة', en: 'Amira' }, city: { ar: 'الشيخ زايد', en: 'Sheikh Zayed' }, item: { ar: 'ساعة رويال كارتييه إنسبيراشن', en: 'Royale Mesh Gold Watch' } }
  ]
};

const AURA_I18N = {
  ar: {
    siteTitle: 'AURA Accessories | أورا للإكسسوارات والمجوهرات الراقية',
    announcement: '✨ شحن مجاني للطلبات أكثر من 1000 ج.م لجميع المحافظات | كود الخصم: AURA10',
    navHome: 'الرئيسية',
    navCatalog: 'المتجر والتشكيلات',
    navCheckout: 'إتمام الطلب',
    navWatches: 'ساعات',
    navRings: 'خواتم',
    navNecklaces: 'سلاسل',
    navBracelets: 'أساور',
    navSunglasses: 'نظارات شمسية',
    searchPlaceholder: 'ابحثي عن قطعة أحلامك (ذهب، لوتس، زمرد)...',
    searchResultsFor: 'نتائج البحث عن:',
    noResults: 'لم يتم العثور على قطع تطابق بحثكِ',
    heroTag: 'صيف 2025 الحصري',
    heroTitle: 'تألقي بتفاصيل تعكس شخصيتكِ',
    heroSubtitle: 'مجوهرات وإكسسوارات راقية صُممت لتمنحكِ سحر الفخامة الهادئة. طلاء ذهب عيار 18، فضة استرليني 925، وقطع مقاومة لتغير اللون والماء تدوم معكِ للأبد.',
    heroShopNow: 'تسوقي الآن',
    heroExplore: 'اكتشفي التشكيلة',
    trustTitle1: 'ضمان عام كامل',
    trustDesc1: 'ضد تغير اللون والأكسدة',
    trustTitle2: 'شحن سريع لمصر',
    trustDesc2: '24-48 ساعة للقاهرة والإسكندرية',
    trustTitle3: 'تغليف هدايا ملكي',
    trustDesc3: 'كيس مخملي وبطاقة إهداء فاخرة',
    trustTitle4: 'دفع متعدد آمن',
    trustDesc4: 'كاش عند الاستلام وإنستاباي وفيزا',
    categoriesTitle: 'تصفحي حسب الفئة',
    categoriesSubtitle: 'كل فئة مصممة بذوق رفيع لتلائم كافة تفاصيل يومك ومناسباتك',
    catNecklaces: 'سلاسل وعقود',
    catRings: 'خواتم ومحابس',
    catBracelets: 'أساور وبناجل',
    catWatches: 'ساعات فاخرة',
    catSunglasses: 'نظارات شمسية',
    catalogHeading: 'تشكيلة أورا المختارة',
    catalogSubtitle: 'قطع مصممة بحرفية دقيقة تحاكي أحدث صيحات الموضة العالمية في المجوهرات',
    filterAll: 'الكل',
    filterMaterial: 'الخامة',
    filterGoldPlated: 'مطلي ذهب 18K',
    filterSilver925: 'فضة إسترليني 925',
    filterStainlessSteel: 'ستانلس ستيل مقاوم للماء',
    filterPrice: 'نطاق السعر (ج.م)',
    sortBy: 'ترتيب حسب:',
    sortFeatured: 'الأكثر تميزاً',
    sortPriceLowHigh: 'السعر: من الأقل للأعلى',
    sortPriceHighLow: 'السعر: من الأعلى للأقل',
    sortRating: 'الأعلى تقييماً',
    quickView: 'نظرة سريعة',
    addToCart: 'أضف للسلة',
    inStock: 'متوفر في المخزن',
    outOfStock: 'نفد من المخزن',
    egp: 'ج.م',
    reviews: 'تقييمات',
    cartTitle: 'حقيبة التسوق',
    cartEmpty: 'حقيبة التسوق فارغة حالياً',
    cartEmptyDesc: 'استمتعي باكتشاف مجموعتنا المختارة وأضيفي لمستكِ الخاصة',
    cartStartShopping: 'تصفحي المجموعات',
    freeShippingGoal: 'أنتِ على بعد {amount} ج.م من الشحن المجاني!',
    freeShippingUnlocked: '🎉 تهانينا! لقد حصلتِ على شحن مجاني لكافة محافظات مصر!',
    promoCodeLabel: 'هل لديكِ كود خصم؟',
    promoCodeApply: 'تطبيق',
    promoCodePlaceholder: 'أدخلي الكود (AURA10)',
    subtotal: 'المجموع الفرعي',
    discount: 'خصم الكوبون',
    shipping: 'الشحن المقدر',
    free: 'مجاني',
    total: 'الإجمالي النهائي',
    checkoutButton: 'متابعة إتمام الطلب',
    wishlistTitle: 'قائمة الأمنيات المفضلة',
    wishlistEmpty: 'قائمة أمنياتكِ فارغة',
    wishlistEmptyDesc: 'احفظي قطعكِ المفضلة بنقرة على رمز القلب لشرائها لاحقاً',
    checkoutModalTitle: 'إتمام الطلب الفاخر',
    step1Title: '1. بيانات التوصيل في مصر',
    fullNameLabel: 'الاسم ثلاثي',
    fullNamePlaceholder: 'مثال: نورا أحمد حسن',
    phoneLabel: 'رقم الموبايل (واتساب)',
    phonePlaceholder: '010XXXXXXXX أو 011 / 012 / 015',
    phoneNote: 'سنرسل لكِ رابط تتبع الشحنة وتأكيد الموعد عبر واتساب',
    governorateLabel: 'المحافظة',
    governorateSelect: 'اختاري المحافظة...',
    addressLabel: 'العنوان التفصيلي',
    addressPlaceholder: 'اسم المنطقة، الشارع، رقم العمارة، الشقة، وأقرب علامة مميزة',
    step2Title: '2. التغليف الملكي والإهداء (مجاناً)',
    giftBoxOption: 'أريد تغليف هدايا ملكي فاخر مع كيس أورا المخملي',
    giftMessageLabel: 'رسالة الإهداء (تُكتب بخط عربي يدوي راقٍ)',
    giftMessagePlaceholder: 'اكتبي كلماتكِ الخاصة لمن تحبين...',
    step3Title: '3. طريقة الدفع المفضلة',
    paymentCod: 'الدفع عند الاستلام (Cash on Delivery)',
    paymentCodDesc: 'ادفعي نقداً لمندوب الشحن عند استلام وفحص طلبيتكِ بعناية',
    paymentInstapay: 'إنستاباي / فودافون كاش (InstaPay / E-Wallet)',
    paymentInstapayDesc: 'تحويل فوري بدون رسوم إلى حساب أورا المعتمد: aura@instapay أو 01012345678',
    paymentCard: 'بطاقة بنكية (Visa / MasterCard / ميزة)',
    paymentCardDesc: 'دفع مشفر وآمن بالكامل يدعم جميع البنوك المصرية',
    placeOrder: 'تأكيد ودفع الطلب',
    orderSuccessTitle: 'تم تأكيد طلبكِ الملكي بنجاح!',
    orderSuccessSubtitle: 'شكراً لاختياركِ أورا للإكسسوارات. يسعدنا أن نكون جزءاً من إطلالتكِ الراقية.',
    orderIdLabel: 'رقم تتبع الطلب:',
    deliveryEstimated: 'الموعد المتوقع للتسليم:',
    whatsappTracking: 'تتبعي طلبكِ عبر واتساب',
    continueShopping: 'العودة للتسوق',
    quickViewSelectSize: 'المقاس:',
    quickViewSelectColor: 'اللون / اللمسة:',
    quickViewQuantity: 'الكمية:',
    quickViewTabSpecs: 'المواصفات والتفاصيل',
    quickViewTabCare: 'إرشادات العناية',
    quickViewTabShipping: 'الشحن والضمان',
    quickViewTabReviews: 'آراء العميلات',
    goldPlatedDesc: 'مطلي بذهب عيار 18 بثلاث طبقات بتقنية PVD المبتكرة',
    silverDesc: 'فضة استرليني نقية عيار 925 مع طلاء روديوم بلاتيني',
    steelDesc: 'ستانلس ستيل 316L فائق المقاومة للماء والأكسدة بنسبة 100%',
    guaranteeText: 'ضمان استبدال واسترجاع مجاني خلال 14 يوماً وفق قانون حماية المستهلك المصري',
    customerLoveTitle: 'ماذا تقول عميلاتنا في مصر؟',
    customerLoveSubtitle: 'آلاف السيدات في القاهرة والإسكندرية والمحافظات تألقن بلمسة أورا الساحرة',
    newsletterTitle: 'انضمي لنادي أورا الحصري',
    newsletterSubtitle: 'سجلي بريدكِ الإلكتروني واحصلي فوراً على قسيمة شراء بقيمة 100 ج.م على أول طلب',
    newsletterPlaceholder: 'أدخلي بريدكِ الإلكتروني...',
    newsletterButton: 'اشتركي الآن',
    footerBrandDesc: 'العلامة المصرية الأولى المتخصصة في تقديم الإكسسوارات والمجوهرات الفاخرة بأسعار معقولة ولمسات ملوك وسيدات المجتمع.',
    footerQuickLinks: 'روابط سريعة',
    footerPolicies: 'السياسات والضمان',
    footerContact: 'تواصلي مع خبرائنا',
    footerAddress: 'الزمالك، القاهرة، جمهورية مصر العربية',
    footerPhone: '+20 100 234 5678',
    footerEmail: 'concierge@aura-accessories.eg',
    footerHours: 'يومياً من 10 صباحاً حتى 10 مساءً',
    footerCopyright: '© 2025 أورا للإكسسوارات (AURA Accessories). جميع الحقوق محفوظة.',
    toastAddedToCart: 'تمت إضافة القطعة إلى حقيبة التسوق بنجاح ✨',
    toastAddedToWishlist: 'تمت إضافة القطعة إلى قائمة أمنياتكِ ❤️',
    toastRemovedWishlist: 'تمت إزالة القطعة من قائمة أمنياتكِ',
    toastPromoApplied: 'تم تطبيق كود الخصم بنجاح 🎉',
    toastPromoInvalid: 'عذراً، كود الخصم غير صالح أو لم يستوفِ الحد الأدنى',
    toastCartUpdated: 'تم تحديث كمية المنتج في السلة',
    conciergeBtn: 'خدمة العملاء | واتساب'
  },
  en: {
    siteTitle: 'AURA Accessories | Egyptian Haute & Luxury Accessories',
    announcement: '✨ Free Shipping across Egypt on orders over 1000 EGP | Use Code: AURA10',
    navHome: 'Home',
    navCatalog: 'Shop & Collections',
    navCheckout: 'Checkout',
    navWatches: 'Watches',
    navRings: 'Rings',
    navNecklaces: 'Necklaces',
    navBracelets: 'Bracelets',
    navSunglasses: 'Sunglasses',
    searchPlaceholder: 'Search dream pieces (Gold, Lotus, Emerald)...',
    searchResultsFor: 'Search results for:',
    noResults: 'No luxury pieces match your search',
    heroTag: 'Summer 2025 Exclusive',
    heroTitle: 'Elevate Your Style With Details That Define You',
    heroSubtitle: 'Haute accessories and fine jewelry curated to deliver effortless quiet luxury. 18K thick gold plating, 925 sterling silver, and 100% waterproof anti-tarnish everyday heirlooms.',
    heroShopNow: 'Shop Now',
    heroExplore: 'Discover Collection',
    trustTitle1: '1-Year Full Warranty',
    trustDesc1: 'Anti-tarnish and color protection',
    trustTitle2: 'Fast Egyptian Delivery',
    trustDesc2: '24-48 hrs in Cairo & Alexandria',
    trustTitle3: 'Royal Gift Packaging',
    trustDesc3: 'Velvet pouch & bespoke wax-seal card',
    trustTitle4: 'Secure Multi-Payment',
    trustDesc4: 'Cash on delivery, InstaPay & Cards',
    categoriesTitle: 'Browse by Category',
    categoriesSubtitle: 'Each silhouette is precision sculpted to grace your everyday rituals and grand evenings',
    catNecklaces: 'Necklaces & Pendants',
    catRings: 'Rings & Bands',
    catBracelets: 'Bracelets & Cuffs',
    catWatches: 'Luxury Timepieces',
    catSunglasses: 'Designer Sunglasses',
    catalogHeading: 'AURA Curated Catalog',
    catalogSubtitle: 'Meticulously crafted jewelry capturing the pinnacle of contemporary global fashion',
    filterAll: 'All Items',
    filterMaterial: 'Material',
    filterGoldPlated: '18K Gold Plated',
    filterSilver925: '925 Sterling Silver',
    filterStainlessSteel: 'Waterproof Stainless Steel',
    filterPrice: 'Price Range (EGP)',
    sortBy: 'Sort by:',
    sortFeatured: 'Featured',
    sortPriceLowHigh: 'Price: Low to High',
    sortPriceHighLow: 'Price: High to Low',
    sortRating: 'Top Rated',
    quickView: 'Quick View',
    addToCart: 'Add to Cart',
    inStock: 'In Stock',
    outOfStock: 'Sold Out',
    egp: 'EGP',
    reviews: 'Reviews',
    cartTitle: 'Shopping Bag',
    cartEmpty: 'Your shopping bag is currently empty',
    cartEmptyDesc: 'Indulge in our exquisite collections and find your signature heirloom',
    cartStartShopping: 'Discover Collections',
    freeShippingGoal: 'You are only {amount} EGP away from Free Delivery!',
    freeShippingUnlocked: '🎉 Congratulations! You unlocked Free Delivery anywhere in Egypt!',
    promoCodeLabel: 'Have a luxury promo code?',
    promoCodeApply: 'Apply',
    promoCodePlaceholder: 'Enter code (AURA10)',
    subtotal: 'Subtotal',
    discount: 'Promo Discount',
    shipping: 'Estimated Shipping',
    free: 'FREE',
    total: 'Final Total',
    checkoutButton: 'Proceed to Checkout',
    wishlistTitle: 'My Wishlist',
    wishlistEmpty: 'Your wishlist is empty',
    wishlistEmptyDesc: 'Tap the heart icon on any piece to save it to your personal jewelry salon',
    checkoutModalTitle: 'Bespoke Checkout Flow',
    step1Title: '1. Egyptian Delivery Address',
    fullNameLabel: 'Full Name',
    fullNamePlaceholder: 'e.g. Nora Ahmed Hassan',
    phoneLabel: 'Egyptian Mobile (WhatsApp)',
    phonePlaceholder: '010XXXXXXXX or 011 / 012 / 015',
    phoneNote: 'We will dispatch live courier tracking & time window via WhatsApp',
    governorateLabel: 'Governorate',
    governorateSelect: 'Select governorate...',
    addressLabel: 'Street & Apartment Details',
    addressPlaceholder: 'District, street name, building number, floor/apt, and nearby landmark',
    step2Title: '2. Complimentary Royal Gift Packaging',
    giftBoxOption: 'Include luxury presentation gift box with velvet pouch',
    giftMessageLabel: 'Handwritten Gift Card Message',
    giftMessagePlaceholder: 'Compose your personal heartfelt note...',
    step3Title: '3. Payment Method',
    paymentCod: 'Cash on Delivery (COD)',
    paymentCodDesc: 'Pay upon doorstep receipt and peaceful inspection of your luxury order',
    paymentInstapay: 'InstaPay / E-Wallets (Vodafone Cash)',
    paymentInstapayDesc: 'Instant fee-free transfer to official AURA handle: aura@instapay or 01012345678',
    paymentCard: 'Debit / Credit Card (Visa / MasterCard / Meeza)',
    paymentCardDesc: 'Full 256-bit encryption supported by all Egyptian domestic and international banks',
    placeOrder: 'Place & Confirm Order',
    orderSuccessTitle: 'Your Royal Order is Confirmed!',
    orderSuccessSubtitle: 'Thank you for choosing AURA Accessories. We are thrilled to elevate your signature style.',
    orderIdLabel: 'Tracking Order Reference:',
    deliveryEstimated: 'Estimated Delivery Window:',
    whatsappTracking: 'Track Order via WhatsApp',
    continueShopping: 'Continue Shopping',
    quickViewSelectSize: 'Size:',
    quickViewSelectColor: 'Tone / Finish:',
    quickViewQuantity: 'Quantity:',
    quickViewTabSpecs: 'Specifications',
    quickViewTabCare: 'Care Guide',
    quickViewTabShipping: 'Delivery & Warranty',
    quickViewTabReviews: 'Client Reviews',
    goldPlatedDesc: 'Triple-layer 18K yellow gold vacuum PVD bonded',
    silverDesc: 'Solid 925 sterling silver sealed with platinum rhodium',
    steelDesc: 'Marine 316L stainless steel, 100% waterproof and anti-allergy',
    guaranteeText: 'Complimentary 14-day exchange and return policy under Egyptian Consumer Law',
    customerLoveTitle: 'Loved by Discerning Women in Egypt',
    customerLoveSubtitle: 'Thousands of clients across Cairo, Alexandria, and all governorates shine with AURA',
    newsletterTitle: 'Join the AURA Private Salon',
    newsletterSubtitle: 'Subscribe to receive an exclusive 100 EGP voucher code towards your inaugural purchase',
    newsletterPlaceholder: 'Enter your email address...',
    newsletterButton: 'Subscribe',
    footerBrandDesc: 'Egypt’s premier destination for accessible quiet luxury, fine jewelry craftsmanship, and iconic design.',
    footerQuickLinks: 'Quick Links',
    footerPolicies: 'Policies & Trust',
    footerContact: 'Private Concierge',
    footerAddress: 'Zamalek, Cairo, Arab Republic of Egypt',
    footerPhone: '+20 100 234 5678',
    footerEmail: 'concierge@aura-accessories.eg',
    footerHours: 'Daily 10:00 AM – 10:00 PM CLT',
    footerCopyright: '© 2025 AURA Accessories (أورا للإكسسوارات). All rights reserved.',
    toastAddedToCart: 'Piece added to your shopping bag ✨',
    toastAddedToWishlist: 'Piece added to your wishlist ❤️',
    toastRemovedWishlist: 'Piece removed from your wishlist',
    toastPromoApplied: 'Promo code applied successfully 🎉',
    toastPromoInvalid: 'Invalid promo code or minimum spend requirement not met',
    toastCartUpdated: 'Shopping bag quantity updated',
    conciergeBtn: 'Client Concierge | WhatsApp'
  }
};
