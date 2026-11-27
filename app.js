(() => {
  'use strict';

  /* ========================================================================
     VERIFIED WORKSPACE IMAGE INVENTORY (./Images/) & CATALOG DATA
     ======================================================================== */
  const BRAND_LOGOS = {
    hub: { src: './Images/logo_macho_light.png', alt: 'Amul Macho' },
    macho: { src: './Images/logo_macho.png', alt: 'Amul Macho' },
    sporto: { src: './Images/logo_sporto.png', alt: 'Sporto' },
    zoiro: { src: './Images/logo_zoiro.png', alt: 'Zoiro' }
  };

  const BRAND_SUBMARKS = {
    hub: 'J.G. HOSIERY ECOSYSTEM',
    macho: 'BOLD EVERYDAY INNERWEAR',
    sporto: 'ATHLEISURE & PERFORMANCE',
    zoiro: 'QUIET LUXURY ATELIER'
  };

  const HUB_DAY_MOMENTS = [
    {
      index: 0,
      timeLabel: '06:00 AM · SPORTO',
      moodPill: '06:00 AM · DAWN TRAINING',
      brand: 'sporto',
      ctaText: 'Enter Sporto World',
      title: 'Dawn Sweat. Zero Drag.',
      desc: 'Start at 6:00 AM with Sporto Instacool breathable mesh tees and 4-Way Stretch track silhouettes built for relentless pace.',
      heroImg: './Images/sporto_t-shirt.webp',
      heroAlt: 'Sporto athlete wearing flame red Instacool active tee',
      outfitThumb: './Images/sporto_track.webp',
      outfitBrand: 'SPORTO TRAINING SET',
      outfitTitle: 'Instacool Tee + Track Pants',
      outfitPrice: 1070,
      outfitItems: [
        { id: 'sp-tee-active', size: 'M', swatchIdx: 0 },
        { id: 'sp-track-velocity', size: 'M', swatchIdx: 0 }
      ]
    },
    {
      index: 1,
      timeLabel: '10:00 AM · MACHO',
      moodPill: '10:00 AM · DAILY COMMAND',
      brand: 'macho',
      ctaText: 'Enter Macho World',
      title: 'Everyday Hustle. Signature Fit.',
      desc: 'Power through the day in Macho ultra-combed cotton trunks and breathable ribbed vests engineered for Indian summers.',
      heroImg: './Images/macho-combo.webp',
      heroAlt: 'Model holding Macho Comfort & Style 3-Pack Collector Box',
      outfitThumb: './Images/macho.webp',
      outfitBrand: 'MACHO DAILY DUO',
      outfitTitle: 'Trunks 3-Pack + Cotton Black Vest',
      outfitPrice: 900,
      outfitItems: [
        { id: 'ma-trunks-3', size: 'M', swatchIdx: 0 },
        { id: 'ma-vest-black', size: 'M', swatchIdx: 0 }
      ]
    },
    {
      index: 2,
      timeLabel: '08:00 PM · ZOIRO',
      moodPill: '08:00 PM · EVENING ATELIER',
      brand: 'zoiro',
      ctaText: 'Enter Zoiro World',
      title: 'Quiet Luxury After Hours.',
      desc: 'Wind down in Zoiro Micro-Modal executive polos and tailored all-day track trousers—refined texture with zero stiffness.',
      heroImg: './Images/zoiro_polo.webp',
      heroAlt: 'Model wearing Zoiro black Classic Executive Polo and stone trousers',
      outfitThumb: './Images/zoiro_trakpants2.webp',
      outfitBrand: 'ZOIRO EVENING EDIT',
      outfitTitle: 'Executive Polo + All Day Track Pants',
      outfitPrice: 3758,
      outfitItems: [
        { id: 'zo-polo', size: 'M', swatchIdx: 0 },
        { id: 'zo-track', size: 'M', swatchIdx: 0 }
      ]
    }
  ];

  const PRODUCTS = [
    /* --- AMUL MACHO (8 ITEMS) --- */
    {
      id: 'ma-trunks-3',
      brand: 'macho',
      category: 'Trunks · Heritage Core',
      occasions: ['Workday', 'Commute', 'Home Lounge'],
      filterTags: ['Best Sellers', 'Most Popular', 'Value Packs'],
      badge: 'Best Seller',
      desc: '100% super-combed Indian cotton trunks with soft micro-brushed jacquard waistband for all-day Bade Aaram Se poise.',
      name: 'Macho Trunks Pack of 3',
      price: 477,
      mrp: 597,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Combed Cotton', 'Soft Waistband', 'Zero-Roll Fit'],
      swatches: [
        { name: 'Heritage Red', hex: '#9E1B24', img: './Images/macho.webp' },
        { name: 'Assorted Box', hex: '#1A234E', img: './Images/macho-combo.webp' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-vest-black',
      brand: 'macho',
      category: 'Vests · Everyday Layer',
      occasions: ['Workday', 'Gym'],
      filterTags: ['Best Sellers', 'Brand Choice'],
      desc: 'Contoured combed-cotton ribbed vest crafted to absorb moisture smoothly beneath work shirts or stand alone in training.',
      name: 'Cotton Black Ribbed Vest',
      price: 423,
      mrp: 529,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['100% Cotton', 'Ribbed Contour'],
      swatches: [
        { name: 'Pitch Black', hex: '#141416', img: './Images/macho_vests.webp' },
        { name: 'Active Trim', hex: '#D97724', img: './Images/macho-vests.webp' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-briefs-3',
      brand: 'macho',
      category: 'Briefs · Everyday Hold',
      occasions: ['Workday', 'Commute'],
      filterTags: ['Most Popular', 'Value Packs'],
      desc: 'Ergonomic twin-layer contour pouch briefs built for chafe-free city transit and 14-hour breathable stretch.',
      name: 'Combed Cotton Briefs Pack of 3',
      price: 470,
      mrp: 588,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Contour Pouch', 'Stay-Put Band'],
      swatches: [
        { name: 'Midnight Navy', hex: '#1F2E4D', img: './Images/macho-brief.webp' },
        { name: 'Stealth Charcoal', hex: '#374151', img: './Images/macho_brief_charcoal.jpg' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-combo-box',
      brand: 'macho',
      category: 'Combo Pack · Gift Studio',
      occasions: ['Workday', 'Home Lounge'],
      filterTags: ['Best Sellers', 'Brand Choice', 'Value Packs'],
      badge: 'Best Seller',
      desc: 'Curated 3-piece Heritage Collector box pairing our signature trunks with soft jacquard comfort.',
      name: 'Matte Collector Combo Pack',
      price: 796,
      mrp: 995,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['3-Piece Gift Box', 'Best Value'],
      swatches: [
        { name: 'Collector Multi', hex: '#1A234E', img: './Images/macho-combo.webp' },
        { name: 'Heritage Red', hex: '#8F1926', img: './Images/macho.webp' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-gym-vest-pro',
      brand: 'macho',
      category: 'Vests · Racer Cut',
      occasions: ['Gym', 'Commute'],
      filterTags: ['Brand Choice', 'Most Popular'],
      desc: 'Deep-cut athletic armhole ribbed vest with double-stitched shoulder reinforcement for unrestricted movement.',
      name: 'Bade Aaram Active Racer Vest',
      price: 389,
      mrp: 489,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Reinforced Binding', 'Soft Combed Knit'],
      swatches: [
        { name: 'Slate Trim', hex: '#334155', img: './Images/macho-vests.webp' },
        { name: 'Jet Black', hex: '#111827', img: './Images/macho_vests.webp' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-stealth-brief',
      brand: 'macho',
      category: 'Briefs · Comfort Gusset',
      occasions: ['Commute', 'Gym'],
      filterTags: ['Best Sellers', 'Brand Choice'],
      desc: 'Two-pack breathable stealth cotton briefs with zero-pinch navy elastic and stay-dry sweat absorption.',
      name: 'Contour Hold Stealth Briefs (2-Pk)',
      price: 359,
      mrp: 449,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Zero-Chafe Seam', 'Tagless Back'],
      swatches: [
        { name: 'Stealth Charcoal', hex: '#374151', img: './Images/macho_brief_charcoal.jpg' },
        { name: 'Midnight Navy', hex: '#1E293B', img: './Images/macho-brief.webp' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-lounge-trunk',
      brand: 'macho',
      category: 'Trunks · Extended Length',
      occasions: ['Home Lounge', 'Workday'],
      filterTags: ['Most Popular', 'Brand Choice'],
      desc: 'Extended thigh-hugging everyday trunks engineered to sit quietly under chinos or relax at home.',
      name: 'Soft-Waistband Lounge Trunks',
      price: 399,
      mrp: 499,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Anti-Ride Hem', '100% Combed Cotton'],
      swatches: [
        { name: 'Crimson Reserve', hex: '#9E1B24', img: './Images/macho.webp' },
        { name: 'Charcoal Slate', hex: '#334155', img: './Images/macho_brief_charcoal.jpg' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-everyday-value',
      brand: 'macho',
      category: 'Value Packs · 5-Day Set',
      occasions: ['Home Lounge', 'Workday', 'Commute'],
      filterTags: ['Value Packs'],
      desc: 'Full five-day wardrobe rotation in super-combed cotton essentials tailored for consistent Indian sizing.',
      name: '5-Day Everyday Cotton Value Set',
      price: 849,
      mrp: 1099,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['5-Day Pack', 'Heritage Navy Trim'],
      swatches: [
        { name: 'Heritage Assorted', hex: '#1A234E', img: './Images/macho-combo.webp' },
        { name: 'Deep Navy', hex: '#1E293B', img: './Images/macho-brief.webp' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-supima-brief',
      brand: 'macho',
      fitZone: 'bottom',
      lowStockSizes: ['L'],
      category: 'Briefs · Supima Reserve',
      occasions: ['Workday', 'Commute'],
      filterTags: ['Best Sellers', 'Brand Choice'],
      badge: 'Low Stock Drop',
      desc: 'Ultra-long-staple Supima ribbed cotton briefs with tone-on-tone jacquard elastic for breathability in coastal warmth.',
      name: 'Macho Reserve Supima Brief (2-Pk)',
      price: 549,
      mrp: 699,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Supima Reserve', 'Fast Dispatch'],
      swatches: [
        { name: 'Olive Charcoal', hex: '#3B3F33', img: './Images/macho_supima_brief.jpg' },
        { name: 'Stealth Charcoal', hex: '#374151', img: './Images/macho_brief_charcoal.jpg' }
      ],
      inPackBuilder: true
    },
    {
      id: 'ma-modal-trunk',
      brand: 'macho',
      fitZone: 'bottom',
      outOfStockSizes: ['XXL'],
      category: 'Trunks · Modal Signature',
      occasions: ['Workday', 'Home Lounge'],
      filterTags: ['Best Sellers', 'Most Popular'],
      badge: 'Limited Edit',
      desc: 'Two-tone midnight navy and burgundy combed modal trunks finished with a signature twin-stripe gold waistband.',
      name: 'Macho Silk-Touch Modal Trunk (2-Pk)',
      price: 579,
      mrp: 729,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Silk-Touch Modal', 'Zero-Roll Fit'],
      swatches: [
        { name: 'Navy Burgundy', hex: '#2B2B4B', img: './Images/macho_modal_trunk.jpg' },
        { name: 'Heritage Red', hex: '#9E1B24', img: './Images/macho.webp' }
      ],
      inPackBuilder: true
    },

    /* --- SPORTO (8 ITEMS) --- */
    {
      id: 'sp-tee-active',
      brand: 'sporto',
      category: 'T-Shirts · Instacool',
      activities: ['Running', 'Athleisure'],
      filterTags: ['Best Sellers', 'Running'],
      badge: 'Best Seller',
      desc: 'Featherweight breathable Instacool mesh tee engineered for fast heat dissipation on coastal dawn runs.',
      name: 'Instacool Active Mesh Tee',
      price: 431,
      mrp: 539,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['4-Way Stretch', 'Sweat-Wick'],
      swatches: [
        { name: 'Flame Red', hex: '#EA3C1A', img: './Images/sporto_t-shirt.webp' },
        { name: 'Tangerine', hex: '#FF9B42', img: './Images/sporto_t-shirt3.webp' },
        { name: 'Muted Lime', hex: '#D5D97D', img: './Images/sporto_t-shirt2.webp' },
        { name: 'Deep Navy', hex: '#1E2C4F', img: './Images/sporto_t-shirt4.webp' }
      ]
    },
    {
      id: 'sp-gym-vest',
      brand: 'sporto',
      category: 'Gym Vests · Contrast',
      activities: ['Gym', 'Recovery'],
      filterTags: ['Best Sellers', 'Gym Gear', 'Value Packs'],
      badge: 'Best Seller',
      desc: 'Athletic twin-pack contrast gym vests with reinforced flatlock seams and rapid-evaporation airflow.',
      name: 'Pro Contrast Gym Vest (Pack of 2)',
      price: 343,
      mrp: 429,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Sweat-Wick', 'Shapelock'],
      swatches: [
        { name: 'Teal Steel', hex: '#0F4F64', img: './Images/sporto_gymvests.webp' },
        { name: 'Navy Olive', hex: '#1B2337', img: './Images/sporto_gymvests2.webp' },
        { name: 'Black Crimson', hex: '#C81D2B', img: './Images/sporto_gymvests3.webp' },
        { name: 'Ocean Grey', hex: '#19546B', img: './Images/sporto_gymvests4.webp' }
      ]
    },
    {
      id: 'sp-jersey-vest',
      brand: 'sporto',
      category: 'Jersey Vests · Flex',
      activities: ['Gym', 'Running'],
      filterTags: ['Gym Gear', 'Running'],
      desc: 'Dynamic multi-colorway jersey training vest built with 4-way elastane bounce-back.',
      name: 'Instacool Wave Jersey Vest',
      price: 319,
      mrp: 399,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['4-Way Stretch', 'Sweat-Wick'],
      swatches: [
        { name: 'Olive Camo', hex: '#556530', img: './Images/sporto_jersyvest.webp' },
        { name: 'Pacific Teal', hex: '#286470', img: './Images/sporto_jersyvest2.webp' },
        { name: 'Midnight Geo', hex: '#1E2A48', img: './Images/sporto_jersyvest3.webp' },
        { name: 'Crimson Marl', hex: '#8F191C', img: './Images/sporto_jersyvest4.webp' },
        { name: 'Slate Mesh', hex: '#7B8596', img: './Images/sporto_jersyvest5.webp' },
        { name: 'Glacier White', hex: '#E5E7EB', img: './Images/sporto_jersyvest6.webp' }
      ]
    },
    {
      id: 'sp-track-velocity',
      brand: 'sporto',
      category: 'Track Pants · Kinetic',
      activities: ['Running', 'Athleisure', 'Recovery'],
      filterTags: ['Best Sellers', 'Running'],
      desc: 'Tapered kinetic track silhouette with contrast side-stripes, deep zip pockets, and Shapelock elastic cuffing.',
      name: 'Velocity Side-Stripe Track Pants',
      price: 639,
      mrp: 799,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['4-Way Stretch', 'Shapelock'],
      swatches: [
        { name: 'Black Crimson', hex: '#141416', img: './Images/sporto_track.webp' },
        { name: 'Steel Volt Stripe', hex: '#283A52', img: './Images/sporto_track_volt.jpg' }
      ]
    },
    {
      id: 'sp-brief-shapelock',
      brand: 'sporto',
      category: 'Active Briefs · Value',
      activities: ['Gym', 'Athleisure'],
      filterTags: ['Value Packs', 'Gym Gear'],
      desc: 'Three-pack high-output compression support briefs that stay flat without bunching during agility drills.',
      name: 'Shapelock Printed Brief (Pack of 3)',
      price: 470,
      mrp: 588,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Shapelock', '4-Way Stretch'],
      swatches: [
        { name: 'Maroon Geo', hex: '#7C232A', img: './Images/sporto_breif.webp' }
      ]
    },
    {
      id: 'sp-ribbed-vest',
      brand: 'sporto',
      category: 'Everyday Vests · Recovery',
      activities: ['Athleisure', 'Recovery', 'Gym'],
      filterTags: ['Value Packs', 'Best Sellers'],
      desc: 'Three-pack ultra-soft everyday active ribbed vests ideal for cooldown, sleep recovery, and streetwear layering.',
      name: 'Combed Cotton Ribbed Vest (Pack of 3)',
      price: 415,
      mrp: 519,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Sweat-Wick', 'Shapelock'],
      swatches: [
        { name: 'Pure White', hex: '#F3F4F6', img: './Images/sporto_vests.webp' },
        { name: 'Pitch Black', hex: '#18181B', img: './Images/sporto_vastsjpg.webp' },
        { name: 'Grey Melange', hex: '#9CA3AF', img: './Images/sporto_vests3.webp' },
        { name: 'Navy Trim', hex: '#1E3A66', img: './Images/sporto_vests4.webp' },
        { name: 'Slate Block', hex: '#4B5563', img: './Images/sporto_vests5.webp' }
      ]
    },
    {
      id: 'sp-marathon-tee',
      brand: 'sporto',
      category: 'T-Shirts · Distance',
      activities: ['Running', 'Athleisure'],
      filterTags: ['Running', 'Best Sellers'],
      desc: 'Cobalt-dyed dry-touch marathon crew designed with chafe-free raglan seams for endurance blocks.',
      name: 'Cobalt Pace Runner Tee',
      price: 479,
      mrp: 599,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Raglan Mobility', 'Quick-Dry'],
      swatches: [
        { name: 'Deep Navy', hex: '#1E2C4F', img: './Images/sporto_t-shirt4.webp' },
        { name: 'Flame Red', hex: '#EA3C1A', img: './Images/sporto_t-shirt.webp' },
        { name: 'Muted Lime', hex: '#D5D97D', img: './Images/sporto_t-shirt2.webp' }
      ]
    },
    {
      id: 'sp-recovery-kit',
      brand: 'sporto',
      category: 'Value Packs · Combo',
      activities: ['Gym', 'Recovery'],
      filterTags: ['Value Packs', 'Gym Gear'],
      desc: 'Complete training + cooldown bundle uniting the Ocean Grey contrast vest with Velocity track bottoms.',
      name: 'Track & Tank Gym Duo Pack',
      price: 899,
      mrp: 1198,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['2-Piece Set', 'Save 25%'],
      swatches: [
        { name: 'Ocean Steel', hex: '#19546B', img: './Images/sporto_gymvests4.webp' },
        { name: 'Steel Volt', hex: '#283A52', img: './Images/sporto_track_volt.jpg' }
      ]
    },
    {
      id: 'sp-aero-tee',
      brand: 'sporto',
      fitZone: 'top',
      lowStockSizes: ['M'],
      category: 'Compression · Aero-Dry',
      activities: ['Running', 'Gym'],
      filterTags: ['Best Sellers', 'Running', 'Gym Gear'],
      badge: 'Fast Dispatch',
      desc: 'Contoured raglan micro-mesh training tee engineered with side slate gussets for high-output sprint ventilation.',
      name: 'Sporto Aero-Dry Compression Crew',
      price: 529,
      mrp: 699,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Aero-Dry Mesh', '4-Way Compression'],
      swatches: [
        { name: 'Cobalt Steel', hex: '#1E64D8', img: './Images/sporto_aero_tee.jpg' },
        { name: 'Deep Navy', hex: '#1E2C4F', img: './Images/sporto_t-shirt4.webp' }
      ]
    },
    {
      id: 'sp-mesh-shorts',
      brand: 'sporto',
      fitZone: 'bottom',
      outOfStockSizes: ['XXL'],
      category: 'Shorts · Kinetic Mesh',
      activities: ['Running', 'Athleisure', 'Recovery'],
      filterTags: ['Best Sellers', 'Running'],
      badge: 'Low Allocation',
      desc: 'Featherweight perforated athletic shorts finished with signature cobalt side piping and Shapelock internal drawcord.',
      name: 'Sporto Velocity Mesh Training Shorts',
      price: 549,
      mrp: 699,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Instacool Mesh', 'Shapelock Hold'],
      swatches: [
        { name: 'Charcoal Cobalt', hex: '#1E242E', img: './Images/sporto_mesh_shorts.jpg' },
        { name: 'Black Crimson', hex: '#141416', img: './Images/sporto_track.webp' }
      ]
    },

    /* --- ZOIRO (8 ITEMS) --- */
    {
      id: 'zo-polo',
      brand: 'zoiro',
      category: 'Work · Tailored Knits',
      occasions: ['Work', 'Play'],
      categorySlug: 'polos-tees',
      filterTags: ['Best Sellers', 'Brand Choice'],
      badge: 'Best Seller',
      desc: 'Structured mercerized cotton-modal collar paired with whisper-soft airflow for quiet executive polish.',
      name: 'Classic Executive Polo',
      price: 1759,
      mrp: 2199,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Micro-Modal Blend', 'Mercerized Collar'],
      swatches: [
        { name: 'Obsidian Black', hex: '#161616', img: './Images/zoiro_polo_obsidian.webp' },
        { name: 'Basalt Slate', hex: '#6E8388', img: './Images/zoiro_polo_basalt.webp' },
        { name: 'Burnt Chilli', hex: '#9D3B32', img: './Images/zoiro_polo_burnt_chilli.webp' },
        { name: 'Obsidian Pinstripe', hex: '#242426', img: './Images/zoiro_polo_pinstripe.webp' }
      ]
    },
    {
      id: 'zo-track',
      brand: 'zoiro',
      category: 'Travel · Technical Lounge',
      occasions: ['Travel', 'Lounge'],
      categorySlug: 'active-pants',
      filterTags: ['Best Sellers', 'Most Popular'],
      badge: 'Best Seller',
      desc: 'Four-way recovery lounge trousers engineered to stay completely crease-free across long-haul flights.',
      name: 'All Day Track Pants',
      price: 1999,
      mrp: 2499,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['4-Way Micro-Modal', 'Crease Resistant'],
      swatches: [
        { name: 'Matte Onyx', hex: '#1D1E22', img: './Images/zoiro_trakpants2.webp' },
        { name: 'Cool Navy', hex: '#1C324B', img: './Images/zoiro_track_cool_navy.webp' },
        { name: 'Olivine Sage', hex: '#6B7F4B', img: './Images/zoiro_track_olivine.webp' },
        { name: 'Sage Olive', hex: '#68774E', img: './Images/zoiro_trakpants.webp' }
      ]
    },
    {
      id: 'zo-tee',
      brand: 'zoiro',
      category: 'Play · Minimalist Essentials',
      occasions: ['Work', 'Travel', 'Play'],
      categorySlug: 'polos-tees',
      filterTags: ['Most Popular', 'Best Sellers'],
      desc: 'Zero-pilling ultra-fine crew tee with architectural shoulder seams for clean layering under overshirts.',
      name: 'Classic Crew Neck Tee',
      price: 959,
      mrp: 1199,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Ultra-Fine Weave', 'Zero-Pilling'],
      swatches: [
        { name: 'Midnight Navy', hex: '#233142', img: './Images/zoiro_t-shirt.webp' },
        { name: 'Desert Brown', hex: '#6B553B', img: './Images/zoiro_tee_desert_brown.webp' },
        { name: 'Dark Wine', hex: '#632B33', img: './Images/zoiro_tee_dark_wine.webp' },
        { name: 'Cool Navy', hex: '#1E3147', img: './Images/zoiro_tee_cool_navy.webp' }
      ]
    },
    {
      id: 'zo-shorts',
      brand: 'zoiro',
      category: 'Lounge · Resort Comfort',
      occasions: ['Lounge', 'Play'],
      categorySlug: 'lounge-shorts',
      filterTags: ['Brand Choice', 'Most Popular'],
      desc: 'Featherweight interlock cotton lounge shorts cut with tailored thigh proportion for effortless weekend poise.',
      name: 'Soft Cotton Lounge Shorts',
      price: 1759,
      mrp: 2199,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Breathable Interlock', 'Featherweight'],
      swatches: [
        { name: 'Silver Beige', hex: '#C8CCB9', img: './Images/zoiro_shorts_silver_beige.webp' },
        { name: 'Warm Sand', hex: '#DCD5C2', img: './Images/zoiro_shorts.webp' }
      ]
    },
    {
      id: 'zo-overshirt',
      brand: 'zoiro',
      category: 'Travel · Layering Edit',
      occasions: ['Travel', 'Work'],
      categorySlug: 'travel-overshirts',
      filterTags: ['Brand Choice', 'Best Sellers'],
      desc: 'Textured ivory pinstripe knit polo layer engineered to step off a flight without losing collar geometry.',
      name: 'Travel Knit Executive Polo',
      price: 2149,
      mrp: 2699,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Crease Recovery', 'Silk-Touch Knit'],
      swatches: [
        { name: 'Ivory Pinstripe', hex: '#EAE6DF', img: './Images/zoiro_polo2.webp' },
        { name: 'Obsidian Black', hex: '#161616', img: './Images/zoiro_polo.webp' }
      ]
    },
    {
      id: 'zo-modal-trunk',
      brand: 'zoiro',
      category: 'Innerwear · Micro-Modal',
      occasions: ['Work', 'Lounge'],
      categorySlug: 'micro-modal-trunks',
      filterTags: ['Best Sellers', 'Most Popular'],
      desc: 'Second-skin beechwood Micro-Modal trunks finished with soft matte goldstitch waistband and invisible hems.',
      name: 'Atelier Micro-Modal Trunk',
      price: 699,
      mrp: 899,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['3x Softer Modal', 'Moisture Release'],
      swatches: [
        { name: 'Midnight Navy', hex: '#233142', img: './Images/zoiro_t-shirt.webp' },
        { name: 'Matte Onyx', hex: '#1D1E22', img: './Images/zoiro_trakpants2.webp' }
      ]
    },
    {
      id: 'zo-travel-set',
      brand: 'zoiro',
      category: 'Value Packs · Transit Duo',
      occasions: ['Travel', 'Work'],
      categorySlug: 'active-pants',
      filterTags: ['Value Packs', 'Brand Choice'],
      desc: 'Bundled executive travel capsule combining our All Day Track Pants and Executive Polo at 22% bundle value.',
      name: 'Transcontinental Travel Edit Pack',
      price: 3499,
      mrp: 4498,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['2-Piece Transit Set', 'Save 22%'],
      swatches: [
        { name: 'Sage & Onyx', hex: '#68774E', img: './Images/zoiro_trakpants.webp' },
        { name: 'Obsidian Edit', hex: '#161616', img: './Images/zoiro_polo.webp' }
      ]
    },
    {
      id: 'zo-lounge-pack',
      brand: 'zoiro',
      category: 'Value Packs · Atelier Set',
      occasions: ['Lounge', 'Play'],
      categorySlug: 'lounge-shorts',
      filterTags: ['Value Packs'],
      desc: 'Paired weekend relaxation edit uniting Soft Cotton Lounge Shorts and Classic Crew Neck Tee.',
      name: 'Micro-Modal Lounge Duo',
      price: 2399,
      mrp: 3198,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Weekend Duo', 'Save 25%'],
      swatches: [
        { name: 'Warm Sand', hex: '#DCD5C2', img: './Images/zoiro_shorts.webp' },
        { name: 'Midnight Navy', hex: '#233142', img: './Images/zoiro_t-shirt.webp' }
      ]
    },
    {
      id: 'zo-henley-crew',
      brand: 'zoiro',
      fitZone: 'top',
      lowStockSizes: ['M'],
      category: 'Work · Tailored Knits',
      occasions: ['Work', 'Play'],
      categorySlug: 'polos-tees',
      filterTags: ['Best Sellers', 'Brand Choice'],
      badge: 'Limited Batch',
      desc: 'Clean architectural short-sleeve henley knit in silky beechwood Micro-Modal with tonal mother-of-pearl buttons.',
      name: 'Zoiro Mercerized Micro-Modal Henley',
      price: 1549,
      mrp: 1999,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Mercerized Modal', 'Pearl Placket'],
      swatches: [
        { name: 'Warm Sand', hex: '#D4C3A8', img: './Images/zoiro_henley_crew.jpg' },
        { name: 'Midnight Navy', hex: '#233142', img: './Images/zoiro_t-shirt.webp' }
      ]
    },
    {
      id: 'zo-lounge-joggers',
      brand: 'zoiro',
      fitZone: 'bottom',
      outOfStockSizes: ['XXL'],
      category: 'Lounge · Knit Trousers',
      occasions: ['Lounge', 'Travel'],
      categorySlug: 'active-pants',
      filterTags: ['Best Sellers', 'Most Popular', 'Brand Choice'],
      badge: 'Atelier Reserve',
      desc: 'Double-faced cashmere-touch Micro-Modal knit joggers tailored with clean ankle taper for flight transit and evening sanctuary.',
      name: 'Zoiro Cashmere-Touch Knit Joggers',
      price: 2199,
      mrp: 2699,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Zero-Crease Knit', 'Fluid Taper'],
      swatches: [
        { name: 'Deep Espresso', hex: '#3D2E28', img: './Images/zoiro_lounge_joggers.jpg' },
        { name: 'Cool Navy', hex: '#1C2E4A', img: './Images/zoiro_joggers_cool_navy.webp' },
        { name: 'Olivine Sage', hex: '#6B7F4B', img: './Images/zoiro_track_olivine.webp' }
      ]
    },
    {
      id: 'zo-travel-pocket-tee',
      brand: 'zoiro',
      fitZone: 'top',
      category: 'Travel · Functional Knit',
      occasions: ['Travel', 'Play'],
      categorySlug: 'polos-tees',
      filterTags: ['Best Sellers', 'Brand Choice'],
      badge: 'New Drop',
      desc: 'Relaxed beechwood modal travel tee built with an integrated concealed utility pouch pocket for boarding passes and transit essentials.',
      name: 'Zoiro Travel Utility Pocket Tee',
      price: 1299,
      mrp: 1649,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Hidden Transit Pocket', '4-Way Modal'],
      swatches: [
        { name: 'Cool Navy', hex: '#1E3147', img: './Images/zoiro_tee_cool_navy.webp' },
        { name: 'Desert Brown', hex: '#6B553B', img: './Images/zoiro_tee_desert_brown.webp' },
        { name: 'Dark Wine', hex: '#632B33', img: './Images/zoiro_tee_dark_wine.webp' }
      ]
    },
    {
      id: 'zo-work-active-pant',
      brand: 'zoiro',
      fitZone: 'bottom',
      lowStockSizes: ['L'],
      category: 'Work · Tailored Performance',
      occasions: ['Work', 'Travel'],
      categorySlug: 'active-pants',
      filterTags: ['Best Sellers', 'Most Popular'],
      badge: 'Best Seller',
      desc: 'Architectural straight-leg active trouser combining boardroom front tailoring with concealed 4-way Micro-Modal stretch.',
      name: 'Zoiro Work Active Tailored Pant',
      price: 2299,
      mrp: 2799,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Tailored Fly & Belt', 'Crease Resistant'],
      swatches: [
        { name: 'Jet Black', hex: '#171718', img: './Images/zoiro_work_pant_jet_black.webp' },
        { name: 'Cool Navy', hex: '#1C324B', img: './Images/zoiro_track_cool_navy.webp' },
        { name: 'Olivine Sage', hex: '#6B7F4B', img: './Images/zoiro_track_olivine.webp' }
      ]
    },
    {
      id: 'zo-cargo-track',
      brand: 'zoiro',
      fitZone: 'bottom',
      category: 'Travel · Utility Active',
      occasions: ['Travel', 'Play'],
      categorySlug: 'active-pants',
      filterTags: ['Brand Choice', 'Most Popular'],
      badge: 'Transit Edit',
      desc: 'Structured utility cargo track pant with flush bellows side pockets and articulated knees for effortless city mobility.',
      name: 'Zoiro Articulated Cargo Track Pant',
      price: 2399,
      mrp: 2999,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Utility Cargo Pockets', 'Articulated Knee'],
      swatches: [
        { name: 'Jet Black', hex: '#18181B', img: './Images/zoiro_cargo_jet_black.webp' },
        { name: 'Olivine', hex: '#6B7F4B', img: './Images/zoiro_track_olivine.webp' },
        { name: 'Cool Navy', hex: '#1C2E4A', img: './Images/zoiro_joggers_cool_navy.webp' }
      ]
    },
    {
      id: 'zo-pinstripe-polo',
      brand: 'zoiro',
      fitZone: 'top',
      category: 'Work · Pinstripe Edition',
      occasions: ['Work', 'Travel'],
      categorySlug: 'polos-tees',
      filterTags: ['Brand Choice', 'Best Sellers'],
      badge: 'Limited Edit',
      desc: 'Architectural chalk pinstripe mercerized Micro-Modal polo with clean button placket for evening transitions.',
      name: 'Zoiro Atelier Pinstripe Polo',
      price: 1899,
      mrp: 2399,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Atelier Pinstripe', 'Mercerized Finish'],
      swatches: [
        { name: 'Obsidian Pinstripe', hex: '#242426', img: './Images/zoiro_polo_pinstripe.webp' },
        { name: 'Basalt Slate', hex: '#6E8388', img: './Images/zoiro_polo_basalt.webp' },
        { name: 'Burnt Chilli', hex: '#9D3B32', img: './Images/zoiro_polo_burnt_chilli.webp' },
        { name: 'Obsidian Black', hex: '#161616', img: './Images/zoiro_polo_obsidian.webp' }
      ]
    },
    {
      id: 'zo-crest-wine-tee',
      brand: 'zoiro',
      fitZone: 'top',
      category: 'Lounge · Atelier Knit',
      occasions: ['Lounge', 'Work'],
      categorySlug: 'polos-tees',
      filterTags: ['Best Sellers', 'Most Popular'],
      desc: 'Fine-gauge combed modal crew tee finished with tonal embossed Zoiro crest medallion for quiet off-duty polish.',
      name: 'Zoiro Heritage Crest Tee',
      price: 1149,
      mrp: 1499,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      specs: ['Embossed Crest', 'Soft Micro-Modal'],
      swatches: [
        { name: 'Dark Wine', hex: '#632B33', img: './Images/zoiro_tee_dark_wine.webp' },
        { name: 'Desert Brown', hex: '#6B553B', img: './Images/zoiro_tee_desert_brown.webp' },
        { name: 'Cool Navy', hex: '#1E3147', img: './Images/zoiro_tee_cool_navy.webp' }
      ]
    }
  ];

  /* ========================================================================
     APPLICATION STATE
     ======================================================================== */
  const STORAGE_KEY = 'macho_connect_luxury_cart_v1';
  const FIT_STORAGE_KEY = 'macho_connect_fit_profile_v1';
  const SIZES_SCALE = ['S', 'M', 'L', 'XL', 'XXL'];

  const HUB_DEFAULT_EYEBROW = 'J.G. HOSIERY PVT. LTD. · HOUSE OF BRANDS';
  const SOUTH_INDIA_HIGHLIGHTS = {
    0: {
      eyebrow: 'SOUTH INDIA CAMPAIGN · CHENNAI · BENGALURU · KOCHI MONSOON-DRY EDIT',
      title: 'Tropical Breathability. Zero Cling.',
      desc: 'Tuned for humid South Indian mornings—Sporto ultra-wicking mesh tees and breathable Macho cotton engineered from Bengaluru studios to Kochi coastlines.'
    },
    1: {
      eyebrow: 'SOUTH INDIA CAMPAIGN · HIGH-HUMIDITY COMBED COTTON SERIES',
      title: 'Coastal Cool. Signature Fit.',
      desc: 'Crafted in our Tirupur mills for Southern climates—featherweight Macho combed cotton trunks and ventilated ribbed vests built for 14-hour comfort.'
    },
    2: {
      eyebrow: 'SOUTH INDIA CAMPAIGN · HYDERABAD & CHENNAI EVENING ATELIER',
      title: 'Quiet Luxury for Warm Nights.',
      desc: 'Zoiro beechwood Micro-Modal drapes cooler than cotton against the skin—effortless polish for Southern lounges, executive flights, and festive dinners.'
    }
  };

  function loadCart() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function loadFitProfile() {
    try {
      const raw = localStorage.getItem(FIT_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return parsed && parsed.brands && parsed.version === 2 ? parsed : null;
    } catch {
      return null;
    }
  }

  const state = {
    brand: 'hub',
    channelMode: 'd2c', // 'd2c' | 'b2b'
    southIndiaCampaign: false,
    campaign: 'default', // 'default' | 'festive' | 'zoiro-exclusive'
    dayIndex: 0,
    machoFilter: 'All',
    machoCategorySub: null,
    machoHeroIdx: 0,
    machoDeckIndex: 2,
    machoSpecTab: 0,
    sportoActivity: 'All',
    sportoActivitySub: null,
    sportoHeroIdx: 0,
    sportoSimEnv: 0,
    sportoSimSize: 'M',
    zoiroOccasion: 'All',
    zoiroSubCat: null,
    zoiroSubLabel: '',
    zoiroHeroIdx: 0,
    zoiroCapsuleTop: 'zo-polo',
    zoiroCapsuleBottom: 'zo-track',
    zoiroCapsuleTopSwatch: 0,
    zoiroCapsuleBottomSwatch: 0,
    zoiroCapsuleSize: 'M',
    journalIdx: 0,
    cardSelection: {}, // { [productId]: { size, swatchIdx } }
    packSlots: [],     // array of { productId, size } up to 5 items
    cart: loadCart(),  // array of D2C line items
    cartView: 'bag',   // 'bag' | 'checkout' | 'confirmed'
    paymentMode: 'upi',
    fitProfile: loadFitProfile(),
    fitDraft: {
      step: 1,
      unit: 'IN',
      waistIn: 32,
      waistCm: 85,
      chestIn: 38,
      build: 'Athletic',
      pref: 'Classic'
    },
    restockAlerts: {},
    concierge: { occasion: 'Gym + Daily', budget: 'Balanced' },
    b2bFilter: 'all',        // 'all' | 'macho' | 'sporto' | 'zoiro'
    b2bRegion: 'All India',  // 'All India' | 'South India Focus'
    b2bStockFilter: 'all',   // 'all' | 'tirupur' | 'festive' | 'low'
    b2bRatio: 'standard',    // 'standard' | 'south'
    b2bIncludePos: false,
    b2bPosUserToggled: false,
    lastB2bPo: null,
    b2bCart: {}              // { [skuId]: cartons } strictly separate from D2C cart
  };

  const pdpState = {
    isOpen: false,
    productId: null,
    returnBrand: 'hub',
    returnScrollY: 0,
    viewMode: 'studio',
    selectedColor: '',
    selectedSize: '',
    qty: 1
  };

  /* Global safe image fallback handler (catches any failed load gracefully) */
  document.addEventListener(
    'error',
    (e) => {
      const target = e.target;
      if (target && target.tagName === 'IMG' && !target.dataset.fallbackApplied) {
        target.dataset.fallbackApplied = '1';
        target.src = './Images/macho.webp';
      }
    },
    true
  );

  function saveCart() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
    } catch {
      /* ignore storage quota errors */
    }
  }

  function saveFitProfile(profile) {
    state.fitProfile = profile;
    try {
      localStorage.setItem(FIT_STORAGE_KEY, JSON.stringify(profile));
    } catch {
      /* ignore storage quota errors */
    }
  }

  function getProductFitZone(product) {
    if (!product) return 'bottom';
    if (product.fitZone) return product.fitZone;
    const cat = String(product.category || '').toLowerCase();
    if (
      cat.includes('vest') ||
      cat.includes('shirt') ||
      cat.includes('polo') ||
      cat.includes('knit') ||
      cat.includes('layer') ||
      cat.includes('essential') ||
      cat.includes('distance')
    ) {
      return cat.includes('trouser') || cat.includes('jogger') ? 'bottom' : 'top';
    }
    return 'bottom';
  }

  function isProductLowStock(product, size) {
    return Array.isArray(product?.lowStockSizes) && product.lowStockSizes.includes(size);
  }

  function isProductOutOfStock(product, size) {
    return Array.isArray(product?.outOfStockSizes) && product.outOfStockSizes.includes(size);
  }

  function getRestockAlertKey(productId, size) {
    return `${productId}__${size}`;
  }

  function getFitForBrand(brand, zone = 'bottom') {
    if (state.fitProfile && state.fitProfile.brands && state.fitProfile.brands[brand]) {
      const rec = state.fitProfile.brands[brand];
      if (typeof rec === 'string') return rec;
      return rec[zone] || rec.bottom || rec.top || 'M';
    }
    return 'M';
  }

  function getSelection(product) {
    if (!state.cardSelection[product.id]) {
      const zone = getProductFitZone(product);
      const preferred = getFitForBrand(product.brand, zone);
      state.cardSelection[product.id] = {
        size: product.sizes.includes(preferred) ? preferred : (product.sizes.includes('M') ? 'M' : product.sizes[0]),
        swatchIdx: 0
      };
    }
    return state.cardSelection[product.id];
  }

  function formatINR(amount) {
    return `\u20B9${Number(amount).toLocaleString('en-IN')}`;
  }

  /* ========================================================================
     DOM REFERENCES
     ======================================================================== */
  const bodyEl = document.body;
  const submarkEl = document.getElementById('header-brand-submark');
  const headerBrandLogo = document.getElementById('header-brand-logo');
  const brandSwitcherNav = document.getElementById('brand-switcher-nav');
  const brandTabs = Array.from(document.querySelectorAll('[data-brand-tab]'));
  const brandMegaMenu = document.getElementById('brand-mega-menu');
  const mobileBrandTrigger = document.getElementById('mobile-brand-trigger');
  const mobileBrandMenu = document.getElementById('mobile-brand-menu');
  const mobileBrandDot = document.getElementById('mobile-brand-dot');
  const mobileBrandLabel = document.getElementById('mobile-brand-label');
  const worldSections = Array.from(document.querySelectorAll('.world-view[data-world]'));
  const b2bPortalView = document.getElementById('b2b-portal-view');
  const pdpViewEl = document.getElementById('pdp-view');
  const modeD2cBtn = document.getElementById('mode-d2c-btn');
  const modeB2bBtn = document.getElementById('mode-b2b-btn');
  const southIndiaToggleBtn = document.getElementById('south-india-toggle');
  const conciergeFabEl = document.getElementById('concierge-fab');
  const headerFitBadge = document.getElementById('header-fit-badge');
  const headerFitLabel = document.getElementById('header-fit-label');

  const hubHero = document.getElementById('hub-hero');
  const hubEyebrow = document.getElementById('hub-hero-eyebrow');
  const hubTitle = document.getElementById('hub-hero-title');
  const hubDesc = document.getElementById('hub-hero-desc');
  const hubHeroImg = document.getElementById('hub-hero-img');
  const hubMoodPill = document.getElementById('hub-mood-pill');
  const hubEnterWorldBtn = document.getElementById('hub-enter-world-btn');
  const hubOutfitThumb = document.getElementById('hub-outfit-thumb');
  const hubOutfitBrand = document.getElementById('hub-outfit-brand');
  const hubOutfitTitle = document.getElementById('hub-outfit-title');
  const hubOutfitPrice = document.getElementById('hub-outfit-price');
  const hubQuickAddOutfitBtn = document.getElementById('hub-quick-add-outfit');
  const dayMomentBtns = Array.from(document.querySelectorAll('[data-day-index]'));

  const machoGrid = document.getElementById('macho-product-grid');
  const sportoGrid = document.getElementById('sporto-product-grid');
  const zoiroGrid = document.getElementById('zoiro-product-grid');

  const packPickerList = document.getElementById('pack-picker-list');
  const collectorSlotsEl = document.getElementById('collector-slots');
  const packTierStatus = document.getElementById('pack-tier-status');
  const packSlotCount = document.getElementById('pack-slot-count');
  const packProgressBar = document.getElementById('pack-progress-bar');
  const packProgressFill = document.getElementById('pack-progress-fill');
  const packSubtotalEl = document.getElementById('pack-subtotal');
  const packDiscountPctEl = document.getElementById('pack-discount-pct');
  const packDiscountAmtEl = document.getElementById('pack-discount-amt');
  const packTotalEl = document.getElementById('pack-total');
  const addBoxToCartBtn = document.getElementById('add-box-to-cart-btn');
  const clearBoxBtn = document.getElementById('clear-box-btn');

  const fabricStage = document.getElementById('fabric-compare-stage');
  const fabricRange = document.getElementById('fabric-split-range');
  const fabricFocusTitle = document.getElementById('fabric-focus-title');
  const fabricFocusDesc = document.getElementById('fabric-focus-desc');
  const mDrapeCotton = document.getElementById('m-drape-cotton');
  const mDrapeZoiro = document.getElementById('m-drape-zoiro');
  const mBreathCotton = document.getElementById('m-breath-cotton');
  const mBreathZoiro = document.getElementById('m-breath-zoiro');
  const mCreaseCotton = document.getElementById('m-crease-cotton');
  const mCreaseZoiro = document.getElementById('m-crease-zoiro');
  const barDrapeCotton = document.getElementById('bar-drape-cotton');
  const barDrapeZoiro = document.getElementById('bar-drape-zoiro');
  const barBreathCotton = document.getElementById('bar-breath-cotton');
  const barBreathZoiro = document.getElementById('bar-breath-zoiro');
  const barCreaseCotton = document.getElementById('bar-crease-cotton');
  const barCreaseZoiro = document.getElementById('bar-crease-zoiro');

  const cartDialog = document.getElementById('cart-dialog');
  const cartOpenBtn = document.getElementById('cart-open-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBadge = document.getElementById('cart-badge');
  const drawerCount = document.getElementById('drawer-count');
  const cartDrawerEyebrow = document.getElementById('cart-drawer-eyebrow');
  const cartBagView = document.getElementById('cart-bag-view');
  const cartItemsContainer = document.getElementById('cart-items-container');
  const cartUpsellContainer = document.getElementById('cart-upsell-container');
  const cartCheckoutView = document.getElementById('cart-checkout-view');
  const cartConfirmedView = document.getElementById('cart-confirmed-view');
  const cartDrawerFooter = document.getElementById('cart-drawer-footer');
  const cartBagActions = document.getElementById('cart-bag-actions');
  const cartCheckoutActions = document.getElementById('cart-checkout-actions');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartSavingsRow = document.getElementById('cart-savings-row');
  const cartSavingsEl = document.getElementById('cart-savings');
  const cartShippingEl = document.getElementById('cart-shipping');
  const cartTotalEl = document.getElementById('cart-total');
  const cartCheckoutBtn = document.getElementById('cart-checkout-btn');
  const cartClearBtn = document.getElementById('cart-clear-btn');
  const checkoutBackBtn = document.getElementById('checkout-back-btn');
  const confirmOrderBtn = document.getElementById('confirm-order-btn');
  const confirmedDoneBtn = document.getElementById('confirmed-done-btn');
  const checkoutPayableTotal = document.getElementById('checkout-payable-total');
  const checkoutLoyaltyPreview = document.getElementById('checkout-loyalty-preview');
  const confirmedLoyaltyBadge = document.getElementById('confirmed-loyalty-badge');
  const confirmedOrderMeta = document.getElementById('confirmed-order-meta');
  const payUpiFields = document.getElementById('pay-upi-fields');
  const payCardFields = document.getElementById('pay-card-fields');
  const checkoutConfirmMsg = document.getElementById('checkout-confirm-msg');

  const searchDialog = document.getElementById('search-dialog');
  const searchOpenBtn = document.getElementById('search-open-btn');
  const searchCloseBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('catalog-search-input');
  const searchResults = document.getElementById('search-results');

  const liveToast = document.getElementById('live-toast');
  let toastTimer = null;

  function showToast(message) {
    liveToast.textContent = message;
    liveToast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      liveToast.hidden = true;
    }, 2600);
  }

  /* ========================================================================
     CHAMELEON BRAND SWITCHER & CHANNEL MODE (D2C / B2B)
     ======================================================================== */
  const BRAND_DOT_META = {
    hub: { label: 'ALL HUB', hex: '#ffffff' },
    macho: { label: 'MACHO', hex: '#1a234e' },
    sporto: { label: 'SPORTO', hex: '#1e64d8' },
    zoiro: { label: 'ZOIRO', hex: '#9e844e' }
  };

  const activeTimers = {
    zoiroHero: null,
    sportoHero: null,
    machoHero: null
  };

  function clearAllWorldTimers() {
    Object.keys(activeTimers).forEach((k) => {
      if (activeTimers[k]) {
        clearInterval(activeTimers[k]);
        activeTimers[k] = null;
      }
    });
  }

  function syncWorldTimers() {
    clearAllWorldTimers();
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (state.channelMode !== 'd2c') return;

    if (state.brand === 'zoiro' && typeof setZoiroHeroSlide === 'function') {
      activeTimers.zoiroHero = setInterval(() => setZoiroHeroSlide((state.zoiroHeroIdx + 1) % 3), 5000);
    } else if (state.brand === 'sporto' && typeof setSportoHeroSlide === 'function') {
      activeTimers.sportoHero = setInterval(() => setSportoHeroSlide((state.sportoHeroIdx + 1) % 3), 5000);
    } else if (state.brand === 'macho' && typeof setMachoHeroSlide === 'function') {
      activeTimers.machoHero = setInterval(() => setMachoHeroSlide((state.machoHeroIdx + 1) % 3), 5000);
    }
  }

  function syncNavBrandHighlight(activeKey) {
    brandTabs.forEach((tab) => {
      const active = tab.dataset.brandTab === activeKey;
      tab.setAttribute('aria-selected', String(active));
    });
    const dotInfo = BRAND_DOT_META[activeKey] || BRAND_DOT_META.hub;
    if (mobileBrandDot) mobileBrandDot.style.backgroundColor = dotInfo.hex;
    if (mobileBrandLabel) mobileBrandLabel.textContent = dotInfo.label;
    document.querySelectorAll('[data-mobile-brand]').forEach((opt) => {
      opt.classList.toggle('is-active', opt.dataset.mobileBrand === activeKey);
    });
  }

  function setChannelMode(mode, options = {}) {
    if (pdpState.isOpen && typeof closeProductPage === 'function') {
      closeProductPage(false);
    }
    state.channelMode = mode === 'b2b' ? 'b2b' : 'd2c';
    bodyEl.setAttribute('data-channel-mode', state.channelMode);
    if (conciergeFabEl) conciergeFabEl.hidden = state.channelMode !== 'd2c';

    modeD2cBtn.setAttribute('aria-pressed', String(state.channelMode === 'd2c'));
    modeB2bBtn.setAttribute('aria-pressed', String(state.channelMode === 'b2b'));

    if (state.channelMode === 'b2b') {
      clearAllWorldTimers();
      if (headerBrandLogo) {
        headerBrandLogo.src = state.brand === 'hub' ? './Images/logo_macho_light.png' : './Images/logo_macho.png';
        headerBrandLogo.alt = 'Amul Macho · Wholesale B2B';
        headerBrandLogo.hidden = false;
      }
      worldSections.forEach((sec) => {
        sec.hidden = true;
        sec.classList.remove('is-active');
      });
      b2bPortalView.hidden = false;
      b2bPortalView.classList.add('is-active');
      submarkEl.textContent = 'WHOLESALE LINE-SHEET (SAMPLE)';
      syncNavBrandHighlight(state.b2bFilter === 'all' ? 'hub' : state.b2bFilter);
      if (typeof renderB2bPortal === 'function') renderB2bPortal();
    } else {
      b2bPortalView.hidden = true;
      b2bPortalView.classList.remove('is-active');
      setBrand(state.brand, { scrollTop: options.scrollTop });
    }

    if (options.scrollTop !== false) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  function setBrand(brand, options = {}) {
    const valid = ['hub', 'macho', 'sporto', 'zoiro'];
    if (!valid.includes(brand)) return;
    if (pdpState.isOpen && typeof closeProductPage === 'function') {
      closeProductPage(false);
    }
    state.brand = brand;
    state.channelMode = 'd2c';
    bodyEl.setAttribute('data-channel-mode', 'd2c');
    if (conciergeFabEl) conciergeFabEl.hidden = false;

    modeD2cBtn.setAttribute('aria-pressed', 'true');
    modeB2bBtn.setAttribute('aria-pressed', 'false');
    b2bPortalView.hidden = true;
    b2bPortalView.classList.remove('is-active');

    bodyEl.setAttribute('data-brand', brand);
    submarkEl.textContent = BRAND_SUBMARKS[brand];
    if (headerBrandLogo) {
      const logoCfg = BRAND_LOGOS[brand];
      if (logoCfg) {
        headerBrandLogo.src = logoCfg.src;
        headerBrandLogo.alt = logoCfg.alt;
        headerBrandLogo.hidden = false;
      } else {
        headerBrandLogo.hidden = true;
      }
    }
    syncNavBrandHighlight(brand);
    if (typeof updateHeaderFitBadge === 'function') updateHeaderFitBadge();

    worldSections.forEach((sec) => {
      const isMatch = sec.dataset.world === brand;
      sec.hidden = !isMatch;
      sec.classList.toggle('is-active', isMatch);
    });

    syncWorldTimers();

    if (options.scrollTop !== false) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }

  function handleBrandTabSelect(brand) {
    if (pdpState.isOpen && typeof closeProductPage === 'function') {
      closeProductPage(false);
    }
    if (state.channelMode === 'b2b') {
      if (b2bPortalView) {
        b2bPortalView.hidden = false;
        b2bPortalView.classList.add('is-active');
      }
      state.b2bFilter = brand === 'hub' ? 'all' : brand;
      syncNavBrandHighlight(brand);
    if (typeof updateHeaderFitBadge === 'function') updateHeaderFitBadge();
      if (typeof renderB2bPortal === 'function') renderB2bPortal();
      return;
    }
    setBrand(brand);
  }

  /* ========================================================================
     HUB: 24-HOUR DAY MOMENT PILLS & SOUTH INDIA CAMPAIGN PREVIEW
     ======================================================================== */
  function setDayMoment(idx) {
    const clamped = Math.max(0, Math.min(2, idx));
    state.dayIndex = clamped;
    const moment = HUB_DAY_MOMENTS[clamped];
    const regional = state.southIndiaCampaign ? SOUTH_INDIA_HIGHLIGHTS[clamped] : null;

    hubHero.setAttribute('data-day-mood', String(clamped));
    hubMoodPill.textContent = state.southIndiaCampaign ? `SOUTH INDIA · ${moment.moodPill}` : moment.moodPill;
    hubEyebrow.textContent = regional ? regional.eyebrow : HUB_DEFAULT_EYEBROW;
    hubTitle.textContent = regional ? regional.title : moment.title;
    hubDesc.textContent = regional ? regional.desc : moment.desc;
    hubHeroImg.src = moment.heroImg;
    hubHeroImg.alt = moment.heroAlt;
    hubEnterWorldBtn.textContent = moment.ctaText;
    hubEnterWorldBtn.dataset.targetBrand = moment.brand;

    hubOutfitThumb.src = moment.outfitThumb;
    hubOutfitThumb.alt = moment.outfitTitle;
    hubOutfitBrand.textContent = moment.outfitBrand;
    hubOutfitTitle.textContent = moment.outfitTitle;
    hubOutfitPrice.innerHTML = `${formatINR(moment.outfitPrice)} <span class="outfit-note">2-Piece Set</span>`;

    dayMomentBtns.forEach((btn) => {
      const isSel = Number(btn.dataset.dayIndex) === clamped;
      btn.classList.toggle('is-selected', isSel);
      btn.setAttribute('aria-pressed', isSel ? 'true' : 'false');
    });
  }

  dayMomentBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setDayMoment(Number(btn.dataset.dayIndex));
    });
  });

  hubEnterWorldBtn.addEventListener('click', () => {
    setBrand(hubEnterWorldBtn.dataset.targetBrand || 'sporto');
  });

  hubQuickAddOutfitBtn.addEventListener('click', () => {
    const moment = HUB_DAY_MOMENTS[state.dayIndex];
    moment.outfitItems.forEach((entry) => {
      const prod = PRODUCTS.find((p) => p.id === entry.id);
      if (prod) addProductToCart(prod, entry.size, entry.swatchIdx, false);
    });
    updateCartUI();
    showToast(`Added ${moment.outfitTitle} to your bag`);
    openCartDrawer();
  });

  /* ========================================================================
     HUB: TRENDING ACROSS THE ECOSYSTEM (4-COLUMN SHOPPABLE SHOWCASE)
     ======================================================================== */
  const hubTrendingGrid = document.getElementById('hub-trending-grid');
  const hubTrendingFilterBtns = Array.from(document.querySelectorAll('#hub-trending-filters [data-hub-trend]'));
  const HUB_TRENDING_ITEMS = [
    {
      productId: 'ma-lounge-trunk',
      brand: 'macho',
      brandBadge: 'MACHO',
      title: 'Charcoal Cotton Lounge Boxers',
      img: './Images/macho_brief_charcoal.jpg',
      alt: 'Macho Charcoal Cotton Lounge Boxers',
      swatchIdx: 1,
      rating: '4.9'
    },
    {
      productId: 'sp-track-velocity',
      brand: 'sporto',
      brandBadge: 'SPORTO',
      title: 'Tapered Performance Joggers',
      img: './Images/sporto_track.webp',
      alt: 'Sporto Tapered Performance Joggers',
      swatchIdx: 0,
      rating: '4.8'
    },
    {
      productId: 'zo-polo',
      brand: 'zoiro',
      brandBadge: 'ZOIRO',
      title: 'Classic Executive Polo',
      img: './Images/zoiro_polo.webp',
      alt: 'Zoiro Classic Executive Polo',
      swatchIdx: 0,
      rating: '4.9'
    },
    {
      productId: 'zo-overshirt',
      brand: 'zoiro',
      brandBadge: 'ZOIRO',
      title: 'Knit Travel Zip-Polo Overshirt',
      img: './Images/zoiro_polo2.webp',
      alt: 'Zoiro Knit Travel Zip-Polo Overshirt',
      swatchIdx: 0,
      rating: '4.8'
    }
  ];
  let hubTrendingBrandFilter = 'all';

  function renderHubTrendingGrid() {
    if (!hubTrendingGrid) return;
    const filtered =
      hubTrendingBrandFilter === 'all'
        ? HUB_TRENDING_ITEMS
        : HUB_TRENDING_ITEMS.filter((it) => it.brand === hubTrendingBrandFilter);

    hubTrendingGrid.innerHTML = '';
    filtered.forEach((entry) => {
      const prod = PRODUCTS.find((p) => p.id === entry.productId);
      if (!prod) return;
      const card = document.createElement('article');
      card.className = 'hub-trend-card';
      card.innerHTML = `
        <div class="hub-trend-media">
          <img src="${entry.img}" alt="${entry.alt}" class="model-photo" width="600" height="800" loading="lazy">
          <span class="cart-brand-pill hub-trend-badge" data-item-brand="${entry.brand}">${entry.brandBadge}</span>
          <div class="hub-trend-actions">
            <button type="button" class="hub-trend-btn is-primary" data-trend-quick-add>Quick Add</button>
            <button type="button" class="hub-trend-btn" data-trend-view>View Product</button>
          </div>
        </div>
        <div class="hub-trend-body">
          <div class="hub-trend-meta">
            <span>${entry.brandBadge} &middot; Bestseller</span>
            <span class="hub-trend-rating">&#9733; ${entry.rating}</span>
          </div>
          <h3 class="hub-trend-title">${entry.title}</h3>
          <div class="product-price-row">
            <span class="price-sale">${formatINR(prod.price)}</span>
            <span class="price-mrp">${formatINR(prod.mrp)}</span>
          </div>
        </div>
      `;

      card.querySelector('[data-trend-quick-add]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        const fitSize = getFitForBrand(prod.brand, getProductFitZone(prod));
        const chosen = prod.sizes.includes(fitSize) ? fitSize : 'M';
        addProductToCart(prod, chosen, entry.swatchIdx, true);
        openCartDrawer();
      });

      const openDetail = () => {
        const sel = getSelection(prod);
        sel.swatchIdx = entry.swatchIdx;
        if (typeof openProductPage === 'function') openProductPage(prod.id);
      };
      card.querySelector('[data-trend-view]')?.addEventListener('click', (e) => {
        e.stopPropagation();
        openDetail();
      });
      card.querySelector('.hub-trend-media')?.addEventListener('click', (e) => {
        if (e.target.closest('.hub-trend-actions')) return;
        openDetail();
      });

      hubTrendingGrid.appendChild(card);
    });
  }

  hubTrendingFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      hubTrendingBrandFilter = btn.dataset.hubTrend;
      hubTrendingFilterBtns.forEach((b) => {
        const active = b.dataset.hubTrend === hubTrendingBrandFilter;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });
      renderHubTrendingGrid();
    });
  });
  renderHubTrendingGrid();

  function triggerRestockAlert(product, size) {
    const key = getRestockAlertKey(product.id, size);
    state.restockAlerts[key] = true;
    showToast(`Restock alert active for ${size} — we'll notify you via WhatsApp/Email when Tirupur Hub replenishes.`);
  }

  /* ========================================================================
     PRODUCT CARD RENDERER (QUIET AT REST + HOVER QUICK-SIZE & QUICK VIEW)
     ======================================================================== */
  function createProductCard(product) {
    const sel = getSelection(product);
    const activeSwatch = product.swatches[sel.swatchIdx] || product.swatches[0];
    const discountPct = Math.round(((product.mrp - product.price) / product.mrp) * 100);
    const hasLowStock = Array.isArray(product.lowStockSizes) && product.lowStockSizes.length > 0;
    const hasOos = Array.isArray(product.outOfStockSizes) && product.outOfStockSizes.length > 0;
    const topBadgeLabel = hasOos
      ? `${product.outOfStockSizes.join('/')} Out of Stock`
      : hasLowStock
        ? 'Low Stock · 2 Left'
        : (product.badge || `-${discountPct}%`);
    const topBadgeClass = hasOos
      ? 'is-oos-badge'
      : hasLowStock
        ? 'is-low-badge'
        : (product.badge === 'Best Seller' ? 'is-bestseller' : '');
    const brandDisplay = product.brand === 'macho' ? 'AMUL MACHO' : product.brand.toUpperCase();

    const card = document.createElement('article');
    card.className = 'product-card';
    card.dataset.productId = product.id;

    const swatchesHtml = product.swatches.length
      ? `<div class="swatch-row" role="group" aria-label="Color variants for ${product.name}">
          ${product.swatches
            .map(
              (sw, idx) => `
              <button
                type="button"
                class="swatch-btn"
                data-swatch-idx="${idx}"
                aria-label="Color ${sw.name}"
                aria-pressed="${idx === sel.swatchIdx ? 'true' : 'false'}"
                style="--swatch-hex: ${sw.hex};"
              ></button>`
            )
            .join('')}
        </div>`
      : '';

    const quickSizesHtml = product.sizes
      .map((sz) => {
        const oos = isProductOutOfStock(product, sz);
        return `
        <button
          type="button"
          class="quick-size-chip${oos ? ' is-oos' : ''}"
          data-quick-size="${sz}"
          aria-label="${oos ? `Size ${sz} out of stock — select to set alert` : `Quick add size ${sz} to bag`}"
          aria-pressed="${sz === sel.size ? 'true' : 'false'}"
        >${sz}</button>`;
      })
      .join('');

    card.innerHTML = `
      <div class="product-media">
        <img
          src="${activeSwatch.img}"
          alt="${product.name} — ${activeSwatch.name}"
          class="model-photo"
          width="760"
          height="1013"
          loading="lazy"
        >
        <span class="product-top-badge ${topBadgeClass}">${topBadgeLabel}</span>
        <div class="product-hover-reveal">
          <button type="button" class="quick-view-pill" data-hover-action>
            <span>View product</span>
            <span class="btn-arrow-circle" aria-hidden="true">&#8599;</span>
          </button>
          <div class="quick-size-bar" role="group" aria-label="Quick add size for ${product.name}">
            ${quickSizesHtml}
          </div>
        </div>
      </div>
      <div class="product-body">
        <span class="product-cat">${brandDisplay} &middot; ${product.category}</span>
        <button type="button" class="product-title-btn" data-action="quick-view">${product.name}</button>
        <div class="product-price-row">
          <span class="price-sale">${formatINR(product.price)}</span>
          <span class="price-mrp">${formatINR(product.mrp)}</span>
          <span class="price-save">-${discountPct}%</span>
        </div>
        ${swatchesHtml}
        <p class="stock-status-note" data-stock-note role="status" hidden></p>
      </div>
    `;

    const stockNoteEl = card.querySelector('[data-stock-note]');
    const hoverActionBtn = card.querySelector('[data-hover-action]');

    function syncCardStockUI() {
      const sz = sel.size;
      const low = isProductLowStock(product, sz);
      const oos = isProductOutOfStock(product, sz);
      const alerted = Boolean(state.restockAlerts[getRestockAlertKey(product.id, sz)]);

      if (hoverActionBtn) {
        if (oos) {
          hoverActionBtn.className = 'quick-notify-pill';
          hoverActionBtn.innerHTML = alerted
            ? '<span>Restock Alert Active &#10003;</span>'
            : '<span>Notify Me When Back in Stock</span>';
        } else {
          hoverActionBtn.className = 'quick-view-pill';
          hoverActionBtn.innerHTML = '<span>View product</span><span class="btn-arrow-circle" aria-hidden="true">&#8599;</span>';
        }
      }

      if (stockNoteEl) {
        if (oos) {
          stockNoteEl.className = 'stock-status-note is-oos-msg';
          stockNoteEl.textContent = alerted
            ? `● Restock alert active for ${sz} — Tirupur Hub notification scheduled`
            : `● Out of stock in ${sz} — click Notify Me for Tirupur restock alert`;
          stockNoteEl.hidden = false;
        } else if (low) {
          stockNoteEl.className = 'stock-status-note is-low';
          stockNoteEl.textContent = `● Only 2 left in ${sz} — fast dispatch`;
          stockNoteEl.hidden = false;
        } else if (Array.isArray(product.lowStockSizes) && product.lowStockSizes.length) {
          stockNoteEl.className = 'stock-status-note is-low';
          stockNoteEl.textContent = `● Only 2 left in size ${product.lowStockSizes.join('/')} — fast dispatch`;
          stockNoteEl.hidden = false;
        } else if (Array.isArray(product.outOfStockSizes) && product.outOfStockSizes.length) {
          stockNoteEl.className = 'stock-status-note is-oos-msg';
          stockNoteEl.textContent = `● Size ${product.outOfStockSizes.join('/')} sold out — select to set restock alert`;
          stockNoteEl.hidden = false;
        } else {
          stockNoteEl.hidden = true;
          stockNoteEl.textContent = '';
        }
      }

      card.querySelectorAll('.quick-size-chip').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.quickSize === sz));
      });
    }

    /* Wire color swatches */
    const imgEl = card.querySelector('.product-media img');
    card.querySelectorAll('.swatch-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = Number(btn.dataset.swatchIdx);
        sel.swatchIdx = idx;
        const chosen = product.swatches[idx];
        imgEl.src = chosen.img;
        imgEl.alt = `${product.name} — ${chosen.name}`;
        card.querySelectorAll('.swatch-btn').forEach((b) => {
          b.setAttribute('aria-pressed', String(Number(b.dataset.swatchIdx) === idx));
        });
      });
    });

    /* Wire quick-size selector chips inside lower image hover bar */
    card.querySelectorAll('.quick-size-chip').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        sel.size = btn.dataset.quickSize;
        syncCardStockUI();
        if (!isProductOutOfStock(product, sel.size)) {
          addProductToCart(product, sel.size, sel.swatchIdx, true);
        }
      });
    });

    hoverActionBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (isProductOutOfStock(product, sel.size)) {
        triggerRestockAlert(product, sel.size);
        syncCardStockUI();
      } else if (typeof openProductPage === 'function') {
        openProductPage(product.id);
      }
    });

    /* Open Product Detail Page (PDP) on image click or title click */
    card.querySelector('.product-media').addEventListener('click', (e) => {
      if (e.target.closest('.quick-size-bar') || e.target.closest('[data-hover-action]')) return;
      if (typeof openProductPage === 'function') openProductPage(product.id);
    });
    card.querySelectorAll('[data-action="quick-view"]').forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (typeof openProductPage === 'function') openProductPage(product.id);
      });
    });

    syncCardStockUI();
    attachCardPhysics(card);
    return card;
  }

  const CAN_HOVER_TILT =
    typeof window !== 'undefined' &&
    window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function attachCardPhysics(card) {
    if (!CAN_HOVER_TILT) return;
    let rafId = null;

    card.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const clientX = e.clientX;
      const clientY = e.clientY;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        const tiltY = ((px - 0.5) * 5.2).toFixed(2);
        const tiltX = ((0.5 - py) * 4.5).toFixed(2);
        card.style.setProperty('--tilt-x', `${tiltX}deg`);
        card.style.setProperty('--tilt-y', `${tiltY}deg`);
        card.style.setProperty('--sheen-x', `${(px * 100).toFixed(1)}%`);
        card.style.setProperty('--sheen-y', `${(py * 100).toFixed(1)}%`);
        card.style.setProperty('--sheen-opacity', '1');
      });
    });

    card.addEventListener('pointerleave', () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--sheen-opacity', '0');
    });
  }

  function matchesMachoCategorySub(product, catSub) {
    const cat = (product.category || '').toLowerCase();
    const tags = product.filterTags || [];
    if (catSub === 'Trunks') return cat.startsWith('trunks');
    if (catSub === 'Briefs') return cat.startsWith('briefs');
    if (catSub === 'Vests') return cat.startsWith('vests');
    if (catSub === 'Lounge Boxers') {
      return product.id === 'ma-lounge-trunk' || product.id === 'ma-stealth-brief' || product.id === 'ma-modal-trunk' || (product.occasions || []).includes('Home Lounge');
    }
    if (catSub === 'Value Packs') {
      return tags.includes('Value Packs') || cat.includes('combo pack') || cat.includes('value packs');
    }
    return cat.includes(String(catSub).toLowerCase());
  }

  function renderMachoGrid() {
    if (!machoGrid) return;
    machoGrid.innerHTML = '';
    const subRow = document.getElementById('macho-subfilter-row');
    const subLabel = document.getElementById('macho-subfilter-label');
    if (subRow && subLabel) {
      subRow.hidden = !state.machoCategorySub;
      if (state.machoCategorySub) subLabel.textContent = `Category: ${state.machoCategorySub}`;
    }

    const items = PRODUCTS.filter((p) => {
      if (p.brand !== 'macho') return false;
      if (state.machoCategorySub && !matchesMachoCategorySub(p, state.machoCategorySub)) return false;
      if (state.machoFilter === 'All') return true;
      return (p.filterTags || []).includes(state.machoFilter);
    });
    items.forEach((p) => machoGrid.appendChild(createProductCard(p)));
  }

  function renderSportoGrid() {
    if (!sportoGrid) return;
    sportoGrid.innerHTML = '';
    const subRow = document.getElementById('sporto-subfilter-row');
    const subLabel = document.getElementById('sporto-subfilter-label');
    if (subRow && subLabel) {
      subRow.hidden = !state.sportoActivitySub;
      if (state.sportoActivitySub) subLabel.textContent = `Activity: ${state.sportoActivitySub}`;
    }

    const items = PRODUCTS.filter((p) => {
      if (p.brand !== 'sporto') return false;
      if (state.sportoActivitySub && !(p.activities || []).includes(state.sportoActivitySub)) return false;
      if (state.sportoActivity === 'All') return true;
      return (p.filterTags || []).includes(state.sportoActivity) || (p.activities || []).includes(state.sportoActivity);
    });
    items.forEach((p) => sportoGrid.appendChild(createProductCard(p)));
  }

  function renderZoiroGrid() {
    if (!zoiroGrid) return;
    zoiroGrid.innerHTML = '';
    const subRow = document.getElementById('zoiro-subfilter-row');
    const subLabel = document.getElementById('zoiro-subfilter-label');
    if (subRow && subLabel) {
      subRow.hidden = !state.zoiroSubCat;
      if (state.zoiroSubCat) subLabel.textContent = `Capsule: ${state.zoiroSubLabel || state.zoiroSubCat}`;
    }

    const items = PRODUCTS.filter((p) => {
      if (p.brand !== 'zoiro') return false;
      if (state.zoiroSubCat) {
        const matchCat = p.categorySlug === state.zoiroSubCat || (p.occasions || []).includes(state.zoiroSubCat);
        if (!matchCat) return false;
      }
      if (state.zoiroOccasion === 'All') return true;
      return (p.filterTags || []).includes(state.zoiroOccasion) || (p.occasions || []).includes(state.zoiroOccasion);
    });
    items.forEach((p) => zoiroGrid.appendChild(createProductCard(p)));
  }

  /* ========================================================================
     AVATAR-PILL FILTERS & SUBFILTER CONTROLLERS (MACHO / SPORTO / ZOIRO)
     ======================================================================== */
  const machoPills = Array.from(document.querySelectorAll('#macho-pill-filters [data-macho-filter]'));
  function setMachoFilter(tag) {
    state.machoFilter = tag;
    machoPills.forEach((pill) => pill.setAttribute('aria-pressed', String(pill.dataset.machoFilter === tag)));
    renderMachoGrid();
  }
  machoPills.forEach((pill) => pill.addEventListener('click', () => setMachoFilter(pill.dataset.machoFilter)));
  document.getElementById('macho-clear-subfilter')?.addEventListener('click', () => {
    state.machoCategorySub = null;
    renderMachoGrid();
  });

  const sportoPills = Array.from(document.querySelectorAll('#sporto-activity-filters [data-activity]'));
  function setSportoActivity(activity) {
    state.sportoActivity = activity;
    sportoPills.forEach((pill) => {
      pill.setAttribute('aria-pressed', String(pill.dataset.activity === activity));
    });
    renderSportoGrid();
  }

  sportoPills.forEach((pill) => {
    pill.addEventListener('click', () => setSportoActivity(pill.dataset.activity));
  });
  document.getElementById('sporto-clear-subfilter')?.addEventListener('click', () => {
    state.sportoActivitySub = null;
    document.querySelectorAll('#sporto-rail-track [data-rail-activity]').forEach((c) => c.classList.remove('is-active'));
    renderSportoGrid();
  });

  const zoiroTabs = Array.from(document.querySelectorAll('#zoiro-occasion-tabs [data-occasion]'));
  function setZoiroFilter(tag) {
    state.zoiroOccasion = tag;
    zoiroTabs.forEach((t) => t.setAttribute('aria-pressed', String(t.dataset.occasion === tag)));
    renderZoiroGrid();
  }
  zoiroTabs.forEach((tab) => {
    tab.addEventListener('click', () => setZoiroFilter(tab.dataset.occasion));
  });
  document.getElementById('zoiro-clear-subfilter')?.addEventListener('click', () => {
    state.zoiroSubCat = null;
    state.zoiroSubLabel = '';
    renderZoiroGrid();
  });

  /* ========================================================================
     MACHO VISUAL "PACK YOUR BOX" BUILDER (5 SLOTS)
     ======================================================================== */
  function renderPackPicker() {
    packPickerList.innerHTML = '';
    const machoItems = PRODUCTS.filter((p) => p.brand === 'macho' && p.inPackBuilder);
    machoItems.forEach((p) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'pack-picker-item';
      btn.disabled = state.packSlots.length >= 5;
      btn.innerHTML = `
        <div class="pack-picker-thumb">
          <img src="${p.swatches[0].img}" alt="" class="model-photo" width="80" height="100">
        </div>
        <div class="pack-picker-meta">
          <strong>${p.name}</strong>
          <span>${formatINR(p.price)}</span>
        </div>
        <span class="pack-picker-plus">+ Slot</span>
      `;
      btn.addEventListener('click', () => {
        const sel = getSelection(p);
        addToPackBuilder(p.id, sel.size);
      });
      packPickerList.appendChild(btn);
    });
  }

  function addToPackBuilder(productId, size) {
    if (state.packSlots.length >= 5) {
      showToast('Collector box is full (5 / 5 slots)');
      return;
    }
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;
    state.packSlots.push({ productId, size: size || 'M' });
    updatePackBuilderUI();
    showToast(`Dropped ${product.name} (${size || 'M'}) into box`);
  }

  function updatePackBuilderUI() {
    const count = state.packSlots.length;
    const subtotal = state.packSlots.reduce((sum, item) => {
      const p = PRODUCTS.find((x) => x.id === item.productId);
      return sum + (p ? p.price : 0);
    }, 0);

    const discountRate = count >= 5 ? 0.2 : count >= 3 ? 0.1 : 0;
    const discountAmt = Math.round(subtotal * discountRate);
    const total = subtotal - discountAmt;

    packSlotCount.textContent = `${count} / 5 Slots`;
    packProgressBar.setAttribute('aria-valuenow', String(count));
    packProgressFill.style.width = `${(count / 5) * 100}%`;

    if (count >= 5) {
      packTierStatus.textContent = '20% OFF + Free Express Shipping Unlocked!';
    } else if (count >= 3) {
      packTierStatus.textContent = `10% OFF Unlocked! Add ${5 - count} more for 20% OFF + Free Express`;
    } else {
      packTierStatus.textContent = `Add ${3 - count} more item${3 - count === 1 ? '' : 's'} for 10% OFF`;
    }

    document.querySelectorAll('.pack-milestones span').forEach((el) => {
      const needed = Number(el.dataset.milestone);
      el.classList.toggle('is-unlocked', count >= needed);
    });

    /* Render 5 visual slots */
    collectorSlotsEl.innerHTML = '';
    for (let i = 0; i < 5; i += 1) {
      const slotData = state.packSlots[i];
      const slotEl = document.createElement('div');
      if (slotData) {
        const prod = PRODUCTS.find((p) => p.id === slotData.productId);
        slotEl.className = 'box-slot is-filled';
        slotEl.innerHTML = `
          <img src="${prod.swatches[0].img}" alt="${prod.name}" class="model-photo" width="160" height="210">
          <button type="button" class="slot-remove-btn" aria-label="Remove ${prod.name} from slot ${i + 1}">&times;</button>
          <div class="slot-filled-caption">${prod.name} · ${slotData.size}</div>
        `;
        slotEl.querySelector('.slot-remove-btn').addEventListener('click', () => {
          state.packSlots.splice(i, 1);
          updatePackBuilderUI();
        });
      } else {
        slotEl.className = 'box-slot';
        slotEl.innerHTML = `
          <span class="slot-empty-num">0${i + 1}</span>
          <span class="slot-empty-label">Empty Slot</span>
        `;
      }
      collectorSlotsEl.appendChild(slotEl);
    }

    packSubtotalEl.textContent = formatINR(subtotal);
    packDiscountPctEl.textContent = `${Math.round(discountRate * 100)}%`;
    packDiscountAmtEl.textContent = `-${formatINR(discountAmt)}`;
    packTotalEl.textContent = formatINR(total);

    addBoxToCartBtn.disabled = count === 0;
    renderPackPicker();
  }

  addBoxToCartBtn.addEventListener('click', () => {
    const count = state.packSlots.length;
    if (!count) return;
    const subtotal = state.packSlots.reduce((sum, item) => {
      const p = PRODUCTS.find((x) => x.id === item.productId);
      return sum + (p ? p.price : 0);
    }, 0);
    const discountRate = count >= 5 ? 0.2 : count >= 3 ? 0.1 : 0;
    const discountAmt = Math.round(subtotal * discountRate);
    const finalUnit = subtotal - discountAmt;
    const summaryNames = state.packSlots
      .map((s) => {
        const p = PRODUCTS.find((x) => x.id === s.productId);
        return p ? `${p.name.split(' ')[0]} (${s.size})` : s.productId;
      })
      .join(', ');

    state.cart.push({
      key: `macho-box-${Date.now()}`,
      productId: 'macho-custom-box',
      brand: 'macho',
      name: `Macho Collector Box (${count} Items)`,
      variantLabel: summaryNames + (count >= 5 ? ' · Free Express' : ''),
      img: './Images/macho-combo.webp',
      unitPrice: finalUnit,
      mrp: subtotal,
      qty: 1,
      freeExpress: count >= 5
    });

    saveCart();
    updateCartUI();
    state.packSlots = [];
    updatePackBuilderUI();
    showToast(`Custom ${count}-item Macho Box added to bag`);
    openCartDrawer();
  });

  clearBoxBtn.addEventListener('click', () => {
    state.packSlots = [];
    updatePackBuilderUI();
  });

  /* ========================================================================
     ZOIRO INTERACTIVE MICRO-MODAL SPLIT CURTAIN
     ======================================================================== */
  function updateFabricLab(splitPercent) {
    if (!fabricStage || !fabricRange) return;
    const val = Math.max(8, Math.min(92, Number(splitPercent)));
    fabricStage.style.setProperty('--split', `${val}%`);
    fabricRange.value = String(val);
    fabricRange.setAttribute(
      'aria-valuetext',
      `${val}% Conventional Cotton vs ${100 - val}% Zoiro Micro-Modal`
    );

    const zoiroFocus = val < 35;
    const cottonFocus = val > 65;
    const drapeC = cottonFocus ? 58 : 54;
    const drapeZ = zoiroFocus ? 98 : 97;
    const breathC = cottonFocus ? 64 : 62;
    const breathZ = zoiroFocus ? 97 : 96;
    const creaseC = cottonFocus ? 59 : 56;
    const creaseZ = zoiroFocus ? 99 : 98;

    if (mDrapeCotton) mDrapeCotton.textContent = `${drapeC}%`;
    if (mDrapeZoiro) mDrapeZoiro.textContent = `${drapeZ}%`;
    if (mBreathCotton) mBreathCotton.textContent = `${breathC}%`;
    if (mBreathZoiro) mBreathZoiro.textContent = `${breathZ}%`;
    if (mCreaseCotton) mCreaseCotton.textContent = `${creaseC}%`;
    if (mCreaseZoiro) mCreaseZoiro.textContent = `${creaseZ}%`;

    if (barDrapeCotton) {
      barDrapeCotton.style.width = `${drapeC}%`;
      barDrapeCotton.style.opacity = zoiroFocus ? '0.42' : '0.95';
    }
    if (barDrapeZoiro) {
      barDrapeZoiro.style.width = `${drapeZ}%`;
      barDrapeZoiro.style.opacity = cottonFocus ? '0.52' : '1';
    }
    if (barBreathCotton) {
      barBreathCotton.style.width = `${breathC}%`;
      barBreathCotton.style.opacity = zoiroFocus ? '0.42' : '0.95';
    }
    if (barBreathZoiro) {
      barBreathZoiro.style.width = `${breathZ}%`;
      barBreathZoiro.style.opacity = cottonFocus ? '0.52' : '1';
    }
    if (barCreaseCotton) {
      barCreaseCotton.style.width = `${creaseC}%`;
      barCreaseCotton.style.opacity = zoiroFocus ? '0.42' : '0.95';
    }
    if (barCreaseZoiro) {
      barCreaseZoiro.style.width = `${creaseZ}%`;
      barCreaseZoiro.style.opacity = cottonFocus ? '0.52' : '1';
    }

    if (cottonFocus) {
      fabricFocusTitle.textContent = 'Conventional Cotton Baseline Highlighted';
      fabricFocusDesc.textContent =
        'Everyday carded cotton holds noticeably more humidity and relaxes collar and trouser crease structure after extended transit.';
    } else if (zoiroFocus) {
      fabricFocusTitle.textContent = 'Zoiro Micro-Modal Performance Highlighted';
      fabricFocusDesc.textContent =
        'Beechwood Micro-Modal delivers 97%+ fluid drape, superior moisture evaporation, and effortless zero-crease recovery straight out of cabin luggage.';
    } else {
      fabricFocusTitle.textContent = 'Side-by-Side Fiber Performance';
      fabricFocusDesc.textContent =
        'Slide left to reveal Zoiro Micro-Modal performance, or right to compare against Conventional Cotton.';
    }
  }

  fabricRange.addEventListener('input', () => updateFabricLab(fabricRange.value));

  document.querySelectorAll('[data-split-preset]').forEach((btn) => {
    btn.addEventListener('click', () => {
      updateFabricLab(Number(btn.dataset.splitPreset));
    });
  });

  /* ========================================================================
     PERSISTENT SHOPPING BAG & DRAWER
     ======================================================================== */
  function addProductToCart(product, size, swatchIdx = 0, notify = true) {
    const swatch = product.swatches[swatchIdx] || product.swatches[0];
    const key = `${product.id}__${size}__${swatch.name}`;
    const existing = state.cart.find((c) => c.key === key);

    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        key,
        productId: product.id,
        brand: product.brand,
        name: product.name,
        variantLabel: `${swatch.name} · Size ${size}`,
        img: swatch.img,
        unitPrice: product.price,
        mrp: product.mrp,
        qty: 1,
        freeExpress: false
      });
    }

    saveCart();
    updateCartUI();
    if (notify) {
      showToast(`Added ${product.name} (${size}) to bag`);
    }
  }

  function setCartDrawerView(viewName) {
    state.cartView = viewName;
    const total = state.cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);

    if (viewName === 'checkout') {
      cartDrawerEyebrow.textContent = '1-PAGE EXPRESS CHECKOUT';
      cartBagView.hidden = true;
      cartCheckoutView.hidden = false;
      cartConfirmedView.hidden = true;
      cartDrawerFooter.hidden = false;
      cartBagActions.hidden = true;
      cartCheckoutActions.hidden = false;
      checkoutPayableTotal.textContent = formatINR(total);
      checkoutLoyaltyPreview.textContent = `+${Math.max(15, Math.round(total / 10))} pts`;
    } else if (viewName === 'confirmed') {
      cartDrawerEyebrow.textContent = 'ORDER CONFIRMED';
      cartBagView.hidden = true;
      cartCheckoutView.hidden = true;
      cartConfirmedView.hidden = false;
      cartDrawerFooter.hidden = true;
    } else {
      cartDrawerEyebrow.textContent = 'UNIFIED HOUSE OF BRANDS BAG';
      cartBagView.hidden = false;
      cartCheckoutView.hidden = true;
      cartConfirmedView.hidden = true;
      cartDrawerFooter.hidden = false;
      cartBagActions.hidden = false;
      cartCheckoutActions.hidden = true;
    }
  }

  function renderCrossBrandUpsell() {
    if (!state.cart.length) {
      cartUpsellContainer.hidden = true;
      cartUpsellContainer.innerHTML = '';
      return;
    }

    const presentBrands = new Set(state.cart.map((i) => i.brand));
    const presentIds = new Set(state.cart.map((i) => i.productId));
    const recommendations = [];

    if (!presentBrands.has('zoiro')) {
      const polo = PRODUCTS.find((p) => p.id === 'zo-polo');
      if (polo) recommendations.push({ prod: polo, note: 'Smart upgrade: pair everyday picks with Zoiro Executive Polo.' });
    }
    if (!presentBrands.has('sporto')) {
      const track = PRODUCTS.find((p) => p.id === 'sp-track-velocity');
      if (track) recommendations.push({ prod: track, note: 'Complete your workout block with 4-Way Stretch Track Pants.' });
    }
    if (!presentBrands.has('macho')) {
      const combo = PRODUCTS.find((p) => p.id === 'ma-trunks-3');
      if (combo) recommendations.push({ prod: combo, note: 'Add daily foundation: Macho Combed Cotton Trunks 3-Pack.' });
    }
    if (!recommendations.length) {
      const extra = PRODUCTS.find((p) => !presentIds.has(p.id));
      if (extra) recommendations.push({ prod: extra, note: 'Cross-brand top-up tailored to your basket.' });
    }

    const picked = recommendations.slice(0, 2);
    if (!picked.length) {
      cartUpsellContainer.hidden = true;
      return;
    }

    cartUpsellContainer.hidden = false;
    cartUpsellContainer.innerHTML = `
      <div class="upsell-head">
        <span>SMART CROSS-BRAND PAIRING</span>
        <span style="color:var(--muted);letter-spacing:0.06em;">1-CLICK ADD</span>
      </div>
      ${picked
        .map(
          ({ prod, note }) => `
        <article class="upsell-card">
          <div class="upsell-thumb">
            <img src="${prod.swatches[0].img}" alt="${prod.name}" class="model-photo" width="52" height="64">
          </div>
          <div class="upsell-meta">
            <span class="cart-brand-pill" data-item-brand="${prod.brand}">${prod.brand.toUpperCase()}</span>
            <strong>${prod.name} · ${formatINR(prod.price)}</strong>
            <p>${note}</p>
          </div>
          <button type="button" class="btn-accent-sm" data-upsell-id="${prod.id}">+ Add</button>
        </article>
      `
        )
        .join('')}
    `;

    cartUpsellContainer.querySelectorAll('[data-upsell-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const prod = PRODUCTS.find((p) => p.id === btn.dataset.upsellId);
        if (!prod) return;
        const fitSize = getFitForBrand(prod.brand, getProductFitZone(prod));
        const chosenSize = prod.sizes.includes(fitSize) ? fitSize : 'M';
        addProductToCart(prod, chosenSize, 0, true);
      });
    });
  }

  function updateCartUI() {
    const itemCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
    const total = state.cart.reduce((sum, item) => sum + item.unitPrice * item.qty, 0);
    const totalMrp = state.cart.reduce((sum, item) => sum + (item.mrp || item.unitPrice) * item.qty, 0);
    const savings = Math.max(0, totalMrp - total);
    const hasFreeExpress = state.cart.some((i) => i.freeExpress) || total >= 999;

    cartBadge.textContent = String(itemCount);
    drawerCount.textContent = String(itemCount);
    cartSubtotalEl.textContent = formatINR(totalMrp);
    cartTotalEl.textContent = formatINR(total);
    cartCheckoutBtn.disabled = itemCount === 0;

    if (savings > 0) {
      cartSavingsRow.hidden = false;
      cartSavingsEl.textContent = `-${formatINR(savings)}`;
    } else {
      cartSavingsRow.hidden = true;
    }

    cartShippingEl.textContent =
      itemCount === 0 ? '—' : hasFreeExpress ? 'FREE Express' : '₹49 (Free over ₹999)';

    cartItemsContainer.innerHTML = '';
    if (!state.cart.length) {
      cartItemsContainer.innerHTML = `
        <div class="cart-empty">
          <p><strong>Your bag is empty.</strong></p>
          <p>Explore Macho, Sporto, or Zoiro essentials to build your look.</p>
        </div>
      `;
      checkoutConfirmMsg.hidden = true;
    } else {
      state.cart.forEach((item, index) => {
        const pillBrand = ['macho', 'sporto', 'zoiro'].includes(item.brand) ? item.brand : 'macho';
        const row = document.createElement('article');
        row.className = 'cart-item';
        row.innerHTML = `
          <div class="cart-item-img">
            <img src="${item.img}" alt="${item.name}" class="model-photo" width="90" height="112">
          </div>
          <div>
            <div class="cart-item-top">
              <div>
                <span class="cart-brand-pill" data-item-brand="${pillBrand}">${item.brand.toUpperCase()}</span>
                <h3 class="cart-item-title">${item.name}</h3>
              </div>
              <strong>${formatINR(item.unitPrice * item.qty)}</strong>
            </div>
            <p class="cart-item-meta">${item.variantLabel}</p>
            <div class="cart-item-bottom">
              <div class="qty-stepper" aria-label="Quantity for ${item.name}">
                <button type="button" data-qty-delta="-1" aria-label="Decrease quantity">&minus;</button>
                <span>${item.qty}</span>
                <button type="button" data-qty-delta="1" aria-label="Increase quantity">+</button>
              </div>
              <button type="button" class="remove-item-btn">Remove</button>
            </div>
          </div>
        `;

        row.querySelector('[data-qty-delta="-1"]').addEventListener('click', () => {
          if (item.qty > 1) {
            item.qty -= 1;
          } else {
            state.cart.splice(index, 1);
          }
          saveCart();
          updateCartUI();
        });

        row.querySelector('[data-qty-delta="1"]').addEventListener('click', () => {
          item.qty += 1;
          saveCart();
          updateCartUI();
        });

        row.querySelector('.remove-item-btn').addEventListener('click', () => {
          state.cart.splice(index, 1);
          saveCart();
          updateCartUI();
        });

        cartItemsContainer.appendChild(row);
      });
    }

    renderCrossBrandUpsell();
  }

  function openCartDrawer() {
    checkoutConfirmMsg.hidden = true;
    setCartDrawerView('bag');
    if (typeof cartDialog.showModal === 'function') {
      if (!cartDialog.open) cartDialog.showModal();
    } else {
      cartDialog.setAttribute('open', '');
    }
    cartOpenBtn.setAttribute('aria-expanded', 'true');
  }

  function closeCartDrawer() {
    if (cartDialog.open) cartDialog.close();
    cartOpenBtn.setAttribute('aria-expanded', 'false');
    setCartDrawerView('bag');
  }

  cartOpenBtn.addEventListener('click', openCartDrawer);
  cartCloseBtn.addEventListener('click', closeCartDrawer);
  cartDialog.addEventListener('click', (e) => {
    if (e.target === cartDialog) closeCartDrawer();
  });
  cartDialog.addEventListener('close', () => {
    cartOpenBtn.setAttribute('aria-expanded', 'false');
  });

  cartClearBtn.addEventListener('click', () => {
    state.cart = [];
    saveCart();
    updateCartUI();
  });

  cartCheckoutBtn.addEventListener('click', () => {
    if (!state.cart.length) return;
    setCartDrawerView('checkout');
  });

  checkoutBackBtn.addEventListener('click', () => {
    setCartDrawerView('bag');
  });

  document.querySelectorAll('[data-pay-mode]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.paymentMode = btn.dataset.payMode;
      document.querySelectorAll('[data-pay-mode]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.payMode === state.paymentMode));
      });
      payUpiFields.hidden = state.paymentMode !== 'upi';
      payCardFields.hidden = state.paymentMode !== 'card';
    });
  });

  confirmOrderBtn.addEventListener('click', () => {
    const count = state.cart.reduce((s, i) => s + i.qty, 0);
    const total = state.cart.reduce((s, i) => s + i.unitPrice * i.qty, 0);
    const points = Math.max(15, Math.round(total / 10));
    const orderNum = `MC-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const methodLabel = state.paymentMode === 'upi' ? 'Express UPI' : 'Card';

    confirmedLoyaltyBadge.textContent = `+${points} JGH Club Points Earned`;
    confirmedOrderMeta.textContent = `Order #${orderNum} · ${count} item(s) · ${formatINR(total)} via ${methodLabel}`;

    state.cart = [];
    saveCart();
    updateCartUI();
    setCartDrawerView('confirmed');
    showToast(`Order #${orderNum} confirmed (+${points} loyalty pts)`);
  });

  confirmedDoneBtn.addEventListener('click', closeCartDrawer);

  /* ========================================================================
     GLOBAL CATALOG SEARCH DIALOG
     ======================================================================== */
  function renderSearchResults(query) {
    const q = (query || '').trim().toLowerCase();
    const matches = PRODUCTS.filter((p) => {
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.specs || []).some((s) => s.toLowerCase().includes(q))
      );
    });

    searchResults.innerHTML = '';
    if (!matches.length) {
      searchResults.innerHTML = `<p style="color:var(--muted);padding:1rem;">No pieces matched "${q}". Try "trunks", "polo", "vest", or "Zoiro".</p>`;
      return;
    }

    matches.forEach((p) => {
      const hit = document.createElement('article');
      hit.className = 'search-hit';
      hit.innerHTML = `
        <div class="search-hit-thumb">
          <img src="${p.swatches[0].img}" alt="${p.name}" class="model-photo" width="70" height="90">
        </div>
        <div class="search-hit-meta">
          <strong>${p.name}</strong>
          <span>${p.brand.toUpperCase()} · ${p.category} · ${formatINR(p.price)}</span>
        </div>
        <button type="button" class="btn-ghost-sm" data-hit-view>View</button>
        <button type="button" class="btn-accent-sm" data-hit-add>+ Bag</button>
      `;

      hit.querySelector('[data-hit-view]').addEventListener('click', () => {
        if (searchDialog.open) searchDialog.close();
        if (typeof openProductPage === 'function') openProductPage(p.id);
      });

      hit.querySelector('[data-hit-add]').addEventListener('click', () => {
        const sel = getSelection(p);
        addProductToCart(p, sel.size, sel.swatchIdx, true);
      });

      searchResults.appendChild(hit);
    });
  }

  searchOpenBtn.addEventListener('click', () => {
    renderSearchResults(searchInput.value);
    if (typeof searchDialog.showModal === 'function') {
      if (!searchDialog.open) searchDialog.showModal();
    } else {
      searchDialog.setAttribute('open', '');
    }
    searchInput.focus();
  });

  searchCloseBtn.addEventListener('click', () => {
    if (searchDialog.open) searchDialog.close();
  });

  searchDialog.addEventListener('click', (e) => {
    if (e.target === searchDialog) searchDialog.close();
  });

  searchInput.addEventListener('input', () => {
    renderSearchResults(searchInput.value);
  });

  /* ========================================================================
     30-SECOND DUAL-BODY-ZONE SMART FIT FINDER MODAL (INDIAN HOSIERY READY)
     ======================================================================== */
  const fitDialog = document.getElementById('fit-finder-dialog');
  const fitCloseBtn = document.getElementById('fit-close-btn');
  const fitWaistOptions = document.getElementById('fit-waist-options');
  const fitChestOptions = document.getElementById('fit-chest-options');
  const fitUnitInBtn = document.getElementById('fit-unit-in');
  const fitUnitCmBtn = document.getElementById('fit-unit-cm');
  const fitStepEls = [
    document.getElementById('fit-step-1'),
    document.getElementById('fit-step-2'),
    document.getElementById('fit-step-3')
  ];
  const fitChipEls = [
    document.getElementById('fit-chip-1'),
    document.getElementById('fit-chip-2'),
    document.getElementById('fit-chip-3')
  ];
  const fitNext1 = document.getElementById('fit-next-1');
  const fitBack2 = document.getElementById('fit-back-2');
  const fitNext2 = document.getElementById('fit-next-2');
  const fitBack3 = document.getElementById('fit-back-3');
  const fitSaveApplyBtn = document.getElementById('fit-save-apply-btn');
  const fitResMachoTop = document.getElementById('fit-res-macho-top');
  const fitResMachoBottom = document.getElementById('fit-res-macho-bottom');
  const fitResSportoTop = document.getElementById('fit-res-sporto-top');
  const fitResSportoBottom = document.getElementById('fit-res-sporto-bottom');
  const fitResZoiroTop = document.getElementById('fit-res-zoiro-top');
  const fitResZoiroBottom = document.getElementById('fit-res-zoiro-bottom');

  const WAIST_IN_LIST = [28, 30, 32, 34, 36, 38, 40, 42];
  const WAIST_CM_LIST = [75, 80, 85, 90, 95, 100, 105];
  const CHEST_SIZE_OPTIONS = [
    { inVal: 36, cmVal: 90, size: 'S' },
    { inVal: 38, cmVal: 95, size: 'M' },
    { inVal: 40, cmVal: 100, size: 'L' },
    { inVal: 42, cmVal: 105, size: 'XL' },
    { inVal: 44, cmVal: 110, size: 'XXL' }
  ];
  const WAIST_IN_TO_CM = { 28: 75, 30: 80, 32: 85, 34: 90, 36: 95, 38: 100, 40: 105, 42: 105 };
  const WAIST_CM_TO_IN = { 75: 28, 80: 30, 85: 32, 90: 34, 95: 36, 100: 38, 105: 40 };
  const BOTTOM_SIZE_CM = { S: 80, M: 85, L: 90, XL: 95, XXL: 105 };
  const TOP_SIZE_CM = { S: 90, M: 95, L: 100, XL: 105, XXL: 110 };

  function computeFitProfile(draft) {
    const wIn = draft.unit === 'CM' ? (WAIST_CM_TO_IN[draft.waistCm] || 32) : (draft.waistIn || 32);
    const wCm = draft.unit === 'CM' ? (draft.waistCm || 85) : (WAIST_IN_TO_CM[wIn] || 85);
    const chestIn = draft.chestIn || 38;
    const chestObj = CHEST_SIZE_OPTIONS.find((c) => c.inVal === chestIn) || CHEST_SIZE_OPTIONS[1];
    const build = draft.build || 'Athletic';
    const pref = draft.pref || 'Classic';

    let bottomBaseIdx = 1; // M
    if (wIn <= 30) bottomBaseIdx = 0; // S
    else if (wIn === 32) bottomBaseIdx = 1; // M
    else if (wIn === 34) bottomBaseIdx = 2; // L
    else if (wIn <= 38) bottomBaseIdx = 3; // XL
    else bottomBaseIdx = 4; // XXL

    const topBaseIdx = Math.max(0, CHEST_SIZE_OPTIONS.findIndex((c) => c.inVal === chestObj.inVal));
    const clampSize = (idx) => SIZES_SCALE[Math.max(0, Math.min(SIZES_SCALE.length - 1, idx))];

    const buildTopAdj = build === 'Broad' && pref === 'Relaxed' ? 1 : build === 'Lean' && pref === 'Snug' ? -1 : 0;
    const sportoTopAdj = pref === 'Relaxed' || build === 'Broad' ? 1 : 0;
    const zoiroTopAdj = pref === 'Relaxed' && build === 'Broad' ? 1 : pref === 'Snug' && build === 'Lean' ? -1 : 0;

    const machoTop = clampSize(topBaseIdx + buildTopAdj);
    const machoBottom = clampSize(bottomBaseIdx + buildTopAdj);
    const sportoTop = clampSize(topBaseIdx + sportoTopAdj);
    const sportoBottom = clampSize(bottomBaseIdx + sportoTopAdj);
    const zoiroTop = clampSize(topBaseIdx + zoiroTopAdj);
    const zoiroBottom = clampSize(bottomBaseIdx + zoiroTopAdj);

    const brands = {
      macho: { top: machoTop, bottom: machoBottom, topCm: TOP_SIZE_CM[machoTop], bottomCm: BOTTOM_SIZE_CM[machoBottom] },
      sporto: { top: sportoTop, bottom: sportoBottom, topCm: TOP_SIZE_CM[sportoTop], bottomCm: BOTTOM_SIZE_CM[sportoBottom] },
      zoiro: { top: zoiroTop, bottom: zoiroBottom, topCm: TOP_SIZE_CM[zoiroTop], bottomCm: BOTTOM_SIZE_CM[zoiroBottom] }
    };

    return {
      version: 2,
      unit: draft.unit || 'IN',
      waistIn: wIn,
      waistCm: wCm,
      chestIn: chestObj.inVal,
      chestCm: chestObj.cmVal,
      build,
      pref,
      summaryTop: brands.macho.top,
      summaryBottom: brands.macho.bottom,
      brands
    };
  }

  function setFitStep(stepNum) {
    state.fitDraft.step = stepNum;
    fitStepEls.forEach((el, idx) => {
      el.hidden = idx + 1 !== stepNum;
    });
    fitChipEls.forEach((chip, idx) => {
      chip.classList.toggle('is-active', idx + 1 === stepNum);
    });
    if (stepNum === 3) {
      const calc = computeFitProfile(state.fitDraft);
      if (fitResMachoTop) fitResMachoTop.textContent = `Tops/Vests: ${calc.brands.macho.top} (${calc.brands.macho.topCm} cm)`;
      if (fitResMachoBottom) fitResMachoBottom.textContent = `Bottoms/Trunks: ${calc.brands.macho.bottom} (${calc.brands.macho.bottomCm} cm)`;
      if (fitResSportoTop) fitResSportoTop.textContent = `Tops: ${calc.brands.sporto.top} (${calc.brands.sporto.topCm} cm)`;
      if (fitResSportoBottom) fitResSportoBottom.textContent = `Bottoms: ${calc.brands.sporto.bottom} (${calc.brands.sporto.bottomCm} cm)`;
      if (fitResZoiroTop) fitResZoiroTop.textContent = `Tops: ${calc.brands.zoiro.top} (${calc.brands.zoiro.topCm} cm)`;
      if (fitResZoiroBottom) fitResZoiroBottom.textContent = `Bottoms: ${calc.brands.zoiro.bottom} (${calc.brands.zoiro.bottomCm} cm)`;
    }
  }

  function renderMeasurementOptions() {
    const isCm = state.fitDraft.unit === 'CM';
    if (fitUnitInBtn) fitUnitInBtn.setAttribute('aria-pressed', String(!isCm));
    if (fitUnitCmBtn) fitUnitCmBtn.setAttribute('aria-pressed', String(isCm));

    if (fitWaistOptions) {
      if (isCm) {
        const cmLabels = { 75: 'XS / S', 80: 'Small', 85: 'Medium', 90: 'Large', 95: 'L / XL', 100: 'XL', 105: 'XXL' };
        fitWaistOptions.innerHTML = WAIST_CM_LIST.map(
          (w) => `
          <button type="button" class="fit-choice-card" data-waist-val="${w}" aria-pressed="${w === state.fitDraft.waistCm ? 'true' : 'false'}" style="text-align:center;">
            <strong>${w} cm</strong>
            <span>${cmLabels[w] || 'Standard'}</span>
          </button>`
        ).join('');
      } else {
        fitWaistOptions.innerHTML = WAIST_IN_LIST.map(
          (w) => `
          <button type="button" class="fit-choice-card" data-waist-val="${w}" aria-pressed="${w === state.fitDraft.waistIn ? 'true' : 'false'}" style="text-align:center;">
            <strong>${w}"</strong>
            <span>${w <= 30 ? 'Small' : w === 32 ? 'Medium' : w === 34 ? 'Large' : w <= 38 ? 'XL' : 'XXL'}</span>
          </button>`
        ).join('');
      }

      fitWaistOptions.querySelectorAll('[data-waist-val]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const val = Number(btn.dataset.waistVal);
          if (state.fitDraft.unit === 'CM') {
            state.fitDraft.waistCm = val;
            state.fitDraft.waistIn = WAIST_CM_TO_IN[val] || 32;
          } else {
            state.fitDraft.waistIn = val;
            state.fitDraft.waistCm = WAIST_IN_TO_CM[val] || 85;
          }
          fitWaistOptions.querySelectorAll('[data-waist-val]').forEach((b) => {
            b.setAttribute('aria-pressed', String(Number(b.dataset.waistVal) === val));
          });
        });
      });
    }

    if (fitChestOptions) {
      fitChestOptions.innerHTML = CHEST_SIZE_OPTIONS.map((c) => {
        const label = isCm ? `${c.cmVal} cm (${c.size})` : `${c.inVal}" (${c.size})`;
        return `
        <button type="button" class="fit-choice-card" data-chest-in="${c.inVal}" aria-pressed="${c.inVal === state.fitDraft.chestIn ? 'true' : 'false'}" style="text-align:center;">
          <strong>${label}</strong>
          <span>${c.size === 'S' ? 'Slim Cut' : c.size === 'M' ? 'Standard' : c.size === 'L' ? 'Tailored' : c.size === 'XL' ? 'Relaxed' : 'Full Cut'}</span>
        </button>`;
      }).join('');

      fitChestOptions.querySelectorAll('[data-chest-in]').forEach((btn) => {
        btn.addEventListener('click', () => {
          state.fitDraft.chestIn = Number(btn.dataset.chestIn);
          fitChestOptions.querySelectorAll('[data-chest-in]').forEach((b) => {
            b.setAttribute('aria-pressed', String(Number(b.dataset.chestIn) === state.fitDraft.chestIn));
          });
        });
      });
    }
  }

  function updateHeaderFitBadge() {
    headerFitBadge.hidden = false;
    if (state.fitProfile && state.fitProfile.brands) {
      const brandKey = state.brand === 'macho' || state.brand === 'sporto' || state.brand === 'zoiro' ? state.brand : 'macho';
      const rec = state.fitProfile.brands[brandKey];
      const top = typeof rec === 'object' ? rec.top : state.fitProfile.summaryTop || rec || 'M';
      const bottom = typeof rec === 'object' ? rec.bottom : state.fitProfile.summaryBottom || rec || 'M';
      headerFitLabel.textContent = `My Fit: T:${top} / B:${bottom}`;
      headerFitBadge.dataset.hasFit = 'true';
    } else if (state.fitProfile && state.fitProfile.summarySize) {
      headerFitLabel.textContent = `My Fit: T:${state.fitProfile.summarySize} / B:${state.fitProfile.summarySize}`;
      headerFitBadge.dataset.hasFit = 'true';
    } else {
      headerFitLabel.textContent = 'My Fit';
      headerFitBadge.dataset.hasFit = 'false';
    }
  }

  function applyFitToCatalog(profile) {
    PRODUCTS.forEach((p) => {
      const zone = getProductFitZone(p);
      const brandRec = profile.brands[p.brand];
      const target = typeof brandRec === 'object' ? brandRec[zone] : (brandRec || profile.summaryBottom || 'M');
      if (!state.cardSelection[p.id]) {
        state.cardSelection[p.id] = { size: p.sizes.includes(target) ? target : 'M', swatchIdx: 0 };
      } else if (p.sizes.includes(target)) {
        state.cardSelection[p.id].size = target;
      }
    });
    renderMachoGrid();
    renderSportoGrid();
    renderZoiroGrid();
    if (pdpState.isOpen && pdpState.productId) {
      const currentPdpProd = PRODUCTS.find((p) => p.id === pdpState.productId);
      if (currentPdpProd && state.cardSelection[currentPdpProd.id]) {
        pdpState.selectedSize = state.cardSelection[currentPdpProd.id].size;
      }
      if (typeof renderPdpView === 'function') renderPdpView();
    }
    if (typeof renderConciergeKit === 'function') renderConciergeKit();
  }

  function openFitFinder() {
    if (state.fitProfile) {
      state.fitDraft.unit = state.fitProfile.unit || 'IN';
      state.fitDraft.waistIn = state.fitProfile.waistIn || state.fitProfile.waist || 32;
      state.fitDraft.waistCm = state.fitProfile.waistCm || WAIST_IN_TO_CM[state.fitDraft.waistIn] || 85;
      state.fitDraft.chestIn = state.fitProfile.chestIn || 38;
      state.fitDraft.build = state.fitProfile.build || 'Athletic';
      state.fitDraft.pref = state.fitProfile.pref || 'Classic';
    }
    renderMeasurementOptions();
    document.querySelectorAll('[data-fit-build]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.fitBuild === state.fitDraft.build));
    });
    document.querySelectorAll('[data-fit-pref]').forEach((b) => {
      b.setAttribute('aria-pressed', String(b.dataset.fitPref === state.fitDraft.pref));
    });
    setFitStep(1);
    if (typeof fitDialog.showModal === 'function') {
      if (!fitDialog.open) fitDialog.showModal();
    } else {
      fitDialog.setAttribute('open', '');
    }
  }

  [fitUnitInBtn, fitUnitCmBtn].forEach((btn) => {
    btn?.addEventListener('click', () => {
      state.fitDraft.unit = btn.dataset.fitUnit;
      renderMeasurementOptions();
    });
  });

  document.querySelectorAll('[data-open-fit-finder]').forEach((btn) => {
    btn.addEventListener('click', openFitFinder);
  });
  headerFitBadge.addEventListener('click', openFitFinder);
  fitCloseBtn.addEventListener('click', () => fitDialog.close());
  fitDialog.addEventListener('click', (e) => {
    if (e.target === fitDialog) fitDialog.close();
  });

  document.querySelectorAll('[data-fit-build]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.fitDraft.build = btn.dataset.fitBuild;
      document.querySelectorAll('[data-fit-build]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.fitBuild === state.fitDraft.build));
      });
    });
  });

  document.querySelectorAll('[data-fit-pref]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.fitDraft.pref = btn.dataset.fitPref;
      document.querySelectorAll('[data-fit-pref]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.fitPref === state.fitDraft.pref));
      });
      setFitStep(3);
    });
  });

  fitNext1.addEventListener('click', () => setFitStep(2));
  fitBack2.addEventListener('click', () => setFitStep(1));
  fitNext2.addEventListener('click', () => setFitStep(3));
  fitBack3.addEventListener('click', () => setFitStep(2));

  fitSaveApplyBtn.addEventListener('click', () => {
    const profile = computeFitProfile(state.fitDraft);
    saveFitProfile(profile);
    updateHeaderFitBadge();
    applyFitToCatalog(profile);
    fitDialog.close();
    showToast(`Saved Dual Fit: Macho T:${profile.brands.macho.top}/B:${profile.brands.macho.bottom} · Sporto T:${profile.brands.sporto.top}/B:${profile.brands.sporto.bottom} · Zoiro T:${profile.brands.zoiro.top}/B:${profile.brands.zoiro.bottom}`);
  });

  /* ========================================================================
     3-TAP WARDROBE CONCIERGE ("BUILD MY KIT")
     ======================================================================== */
  const conciergeFab = document.getElementById('concierge-fab');
  const conciergeDialog = document.getElementById('concierge-dialog');
  const conciergeCloseBtn = document.getElementById('concierge-close-btn');
  const conciergeKitList = document.getElementById('concierge-kit-list');
  const conciergeFitNote = document.getElementById('concierge-fit-note');
  const conciergeMrpEl = document.getElementById('concierge-mrp');
  const conciergeSaveEl = document.getElementById('concierge-save');
  const conciergeTotalEl = document.getElementById('concierge-total');
  const conciergeAddBtn = document.getElementById('concierge-add-btn');

  const CONCIERGE_RECIPES = {
    'Gym + Daily': {
      Value: ['ma-vest-black', 'sp-gym-vest', 'zo-tee'],
      Balanced: ['ma-trunks-3', 'sp-tee-active', 'zo-track'],
      Premium: ['ma-combo-box', 'sp-track-velocity', 'zo-polo']
    },
    '3-Day Business Trip': {
      Value: ['ma-briefs-3', 'sp-ribbed-vest', 'zo-tee'],
      Balanced: ['ma-trunks-3', 'sp-tee-active', 'zo-polo'],
      Premium: ['ma-combo-box', 'sp-track-velocity', 'zo-track']
    },
    'Complete Refresh': {
      Value: ['ma-trunks-3', 'sp-jersey-vest', 'zo-tee'],
      Balanced: ['ma-combo-box', 'sp-track-velocity', 'zo-polo'],
      Premium: ['ma-combo-box', 'sp-brief-shapelock', 'zo-shorts']
    }
  };

  function getActiveKitProducts() {
    const ids = (CONCIERGE_RECIPES[state.concierge.occasion] || {})[state.concierge.budget] || ['ma-trunks-3', 'sp-tee-active', 'zo-polo'];
    return ids.map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  }

  function renderConciergeKit() {
    const kit = getActiveKitProducts();
    const fitLabel = state.fitProfile
      ? `My Fit: T:${state.fitProfile.summaryTop || getFitForBrand('macho', 'top')} / B:${state.fitProfile.summaryBottom || getFitForBrand('macho', 'bottom')}`
      : 'Default Size M';
    conciergeFitNote.textContent = fitLabel;

    let sumPrice = 0;
    conciergeKitList.innerHTML = kit
      .map((prod) => {
        sumPrice += prod.price;
        const zone = getProductFitZone(prod);
        const recSize = getFitForBrand(prod.brand, zone);
        const size = prod.sizes.includes(recSize) ? recSize : 'M';
        return `
        <article class="concierge-item-card">
          <div class="concierge-item-thumb">
            <img src="${prod.swatches[0].img}" alt="${prod.name}" class="model-photo" width="58" height="72">
          </div>
          <div>
            <span class="cart-brand-pill" data-item-brand="${prod.brand}">${prod.brand.toUpperCase()}</span>
            <h3 style="font-size:0.88rem;font-weight:600;">${prod.name}</h3>
            <p style="font-size:0.74rem;color:var(--muted);">Size ${size} · ${prod.swatches[0].name}</p>
          </div>
          <strong>${formatINR(prod.price)}</strong>
        </article>
      `;
      })
      .join('');

    const discount = Math.round(sumPrice * 0.15);
    const finalTotal = sumPrice - discount;
    conciergeMrpEl.textContent = formatINR(sumPrice);
    conciergeSaveEl.textContent = `-${formatINR(discount)}`;
    conciergeTotalEl.textContent = formatINR(finalTotal);
  }

  conciergeFab.addEventListener('click', () => {
    renderConciergeKit();
    if (typeof conciergeDialog.showModal === 'function') {
      if (!conciergeDialog.open) conciergeDialog.showModal();
    } else {
      conciergeDialog.setAttribute('open', '');
    }
  });

  conciergeCloseBtn.addEventListener('click', () => conciergeDialog.close());
  conciergeDialog.addEventListener('click', (e) => {
    if (e.target === conciergeDialog) conciergeDialog.close();
  });

  document.querySelectorAll('[data-concierge-occasion]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.concierge.occasion = btn.dataset.conciergeOccasion;
      document.querySelectorAll('[data-concierge-occasion]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.conciergeOccasion === state.concierge.occasion));
      });
      renderConciergeKit();
    });
  });

  document.querySelectorAll('[data-concierge-budget]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.concierge.budget = btn.dataset.conciergeBudget;
      document.querySelectorAll('[data-concierge-budget]').forEach((b) => {
        b.setAttribute('aria-pressed', String(b.dataset.conciergeBudget === state.concierge.budget));
      });
      renderConciergeKit();
    });
  });

  conciergeAddBtn.addEventListener('click', () => {
    const kit = getActiveKitProducts();
    kit.forEach((prod) => {
      const zone = getProductFitZone(prod);
      const fit = getFitForBrand(prod.brand, zone);
      const size = prod.sizes.includes(fit) ? fit : 'M';
      const sw = prod.swatches[0];
      const discountedUnit = Math.round(prod.price * 0.85);
      const key = `${prod.id}__${size}__kit15`;
      const existing = state.cart.find((c) => c.key === key);
      if (existing) {
        existing.qty += 1;
      } else {
        state.cart.push({
          key,
          productId: prod.id,
          brand: prod.brand,
          name: prod.name,
          variantLabel: `${sw.name} · Size ${size} · Concierge Kit (-15%)`,
          img: sw.img,
          unitPrice: discountedUnit,
          mrp: prod.mrp,
          qty: 1,
          freeExpress: true
        });
      }
    });
    saveCart();
    updateCartUI();
    conciergeDialog.close();
    showToast(`Added ${state.concierge.occasion} (${state.concierge.budget}) 3-Brand Kit (-15%)`);
    openCartDrawer();
  });

  /* ========================================================================
     B2B DISTRIBUTOR QUICK-ORDER PORTAL & REGIONAL CAMPAIGN BAR
     ======================================================================== */
  const b2bSkuGrid = document.getElementById('b2b-sku-grid');
  const b2bManifestLines = document.getElementById('b2b-manifest-lines');
  const b2bTotalCartons = document.getElementById('b2b-total-cartons');
  const b2bGrossVal = document.getElementById('b2b-gross-val');
  const b2bSchemeAmt = document.getElementById('b2b-scheme-amt');
  const b2bGstAmt = document.getElementById('b2b-gst-amt');
  const b2bNetVal = document.getElementById('b2b-net-val');
  const b2bRetailerMargin = document.getElementById('b2b-retailer-margin');
  const b2bTier5 = document.getElementById('b2b-tier-5');
  const b2bTier10 = document.getElementById('b2b-tier-10');
  const b2bRegionLabel = document.getElementById('b2b-region-label');
  const b2bPrimaryHub = document.getElementById('b2b-primary-hub');
  const b2bRegionalBonus = document.getElementById('b2b-regional-bonus');
  const b2bPartnerCode = document.getElementById('b2b-partner-code');
  const b2bRequestQuoteBtn = document.getElementById('b2b-request-quote-btn');
  const b2bQuoteMsg = document.getElementById('b2b-quote-msg');
  const b2bBackD2cBtn = document.getElementById('b2b-back-d2c-btn');
  const b2bRepeatOrderBtn = document.getElementById('b2b-repeat-order-btn');
  const b2bActiveFilterEl = document.getElementById('b2b-active-filter');
  const b2bSchemeHint = document.getElementById('b2b-scheme-hint');
  const b2bCartonProgressLabel = document.getElementById('b2b-carton-progress-label');
  const b2bSchemeProgressFill = document.getElementById('b2b-scheme-progress-fill');
  const b2bPosCheckbox = document.getElementById('b2b-pos-checkbox');
  const b2bPosAddonWrap = document.getElementById('b2b-pos-addon-wrap');
  const b2bPosStatus = document.getElementById('b2b-pos-status');
  const b2bPoDialog = document.getElementById('b2b-po-dialog');
  const b2bPoCloseBtn = document.getElementById('b2b-po-close-btn');
  const b2bPoDoneBtn = document.getElementById('b2b-po-done-btn');
  const b2bDownloadCsvBtn = document.getElementById('b2b-download-csv-btn');
  const poModalMeta = document.getElementById('po-modal-meta');
  const poModalRows = document.getElementById('po-modal-rows');
  const poModalTotals = document.getElementById('po-modal-totals');

  const B2B_RATIOS = {
    standard: '24 Sets · 4S · 6M · 6L · 4XL · 4XXL',
    south: '24 Sets · 4S · 8M · 8L · 4XL'
  };

  const B2B_SKUS = [
    {
      sku: 'MC-CASE-TRK-24',
      brand: 'macho',
      name: 'Macho Signature Trunks Assorted Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: true,
      stockLow: false,
      hsn: '6107',
      ptrPerCarton: 7680,
      marginPct: '28%',
      marginRate: 0.28,
      img: './Images/macho-combo.webp'
    },
    {
      sku: 'MC-CASE-BRF-24',
      brand: 'macho',
      name: 'Macho Stealth Briefs 3-Pack Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: false,
      stockLow: false,
      hsn: '6107',
      ptrPerCarton: 7200,
      marginPct: '29%',
      marginRate: 0.29,
      img: './Images/macho_brief_charcoal.jpg'
    },
    {
      sku: 'MC-CASE-VST-24',
      brand: 'macho',
      name: 'Macho Ribbed Cotton Vest Bulk Carton',
      hub: 'Kolkata',
      southIndiaPriority: false,
      tirupurDirect: false,
      festiveScheme: true,
      stockLow: false,
      hsn: '6109',
      ptrPerCarton: 6480,
      marginPct: '30%',
      marginRate: 0.3,
      img: './Images/macho_vests.webp'
    },
    {
      sku: 'MC-CASE-BOX-24',
      brand: 'macho',
      name: 'Macho Twin-Layer Comfort Briefs Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: true,
      stockLow: true,
      hsn: '6107',
      ptrPerCarton: 6960,
      marginPct: '29%',
      marginRate: 0.29,
      img: './Images/macho-brief.webp'
    },
    {
      sku: 'SP-CASE-TEE-24',
      brand: 'sporto',
      name: 'Sporto Instacool Mesh Tee Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: true,
      stockLow: false,
      hsn: '6109',
      ptrPerCarton: 7200,
      marginPct: '31%',
      marginRate: 0.31,
      img: './Images/sporto_t-shirt3.webp'
    },
    {
      sku: 'SP-CASE-TRK-24',
      brand: 'sporto',
      name: 'Sporto Velocity Side-Stripe Track Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: false,
      stockLow: true,
      hsn: '6107',
      ptrPerCarton: 10560,
      marginPct: '29%',
      marginRate: 0.29,
      img: './Images/sporto_track_volt.jpg'
    },
    {
      sku: 'SP-CASE-GYM-24',
      brand: 'sporto',
      name: 'Sporto Pro Contrast Gym Vest Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: true,
      stockLow: false,
      hsn: '6109',
      ptrPerCarton: 5760,
      marginPct: '31%',
      marginRate: 0.31,
      img: './Images/sporto_gymvests.webp'
    },
    {
      sku: 'SP-CASE-BRF-24',
      brand: 'sporto',
      name: 'Sporto Shapelock Performance Brief Carton',
      hub: 'Bhiwandi',
      southIndiaPriority: false,
      tirupurDirect: false,
      festiveScheme: false,
      stockLow: false,
      hsn: '6107',
      ptrPerCarton: 7560,
      marginPct: '30%',
      marginRate: 0.3,
      img: './Images/sporto_breif.webp'
    },
    {
      sku: 'ZR-CASE-PLO-24',
      brand: 'zoiro',
      name: 'Zoiro Executive Polo Display Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: true,
      stockLow: false,
      hsn: '6109',
      ptrPerCarton: 26880,
      marginPct: '34%',
      marginRate: 0.34,
      img: './Images/zoiro_polo.webp'
    },
    {
      sku: 'ZR-CASE-CHG-24',
      brand: 'zoiro',
      name: 'Zoiro All Day Track & Lounge Carton',
      hub: 'Bhiwandi',
      southIndiaPriority: false,
      tirupurDirect: false,
      festiveScheme: false,
      stockLow: true,
      hsn: '6107',
      ptrPerCarton: 29760,
      marginPct: '34%',
      marginRate: 0.34,
      img: './Images/zoiro_trakpants.webp'
    },
    {
      sku: 'ZR-CASE-SHT-24',
      brand: 'zoiro',
      name: 'Zoiro Resort Interlock Lounge Carton',
      hub: 'Tirupur',
      southIndiaPriority: true,
      tirupurDirect: true,
      festiveScheme: true,
      stockLow: false,
      hsn: '6107',
      ptrPerCarton: 25440,
      marginPct: '33%',
      marginRate: 0.33,
      img: './Images/zoiro_shorts.webp'
    },
    {
      sku: 'ZR-CASE-KNT-24',
      brand: 'zoiro',
      name: 'Zoiro Travel Knit Overshirt Carton',
      hub: 'Kolkata',
      southIndiaPriority: false,
      tirupurDirect: false,
      festiveScheme: true,
      stockLow: false,
      hsn: '6109',
      ptrPerCarton: 31200,
      marginPct: '35%',
      marginRate: 0.35,
      img: './Images/zoiro_polo2.webp'
    }
  ];

  function filterB2BCatalog() {
    return B2B_SKUS.filter((item) => {
      if (state.b2bFilter !== 'all' && item.brand !== state.b2bFilter) return false;
      if (state.b2bRegion === 'South India Focus' && !item.southIndiaPriority) return false;
      if (state.b2bStockFilter === 'tirupur' && !item.tirupurDirect) return false;
      if (state.b2bStockFilter === 'festive' && !item.festiveScheme) return false;
      if (state.b2bStockFilter === 'low' && !item.stockLow) return false;
      return true;
    });
  }

  function computeB2bFinancials() {
    const entries = B2B_SKUS.filter((s) => (state.b2bCart[s.sku] || 0) > 0);
    const totalCartons = entries.reduce((sum, s) => sum + state.b2bCart[s.sku], 0);
    const gross = entries.reduce((sum, s) => sum + s.ptrPerCarton * state.b2bCart[s.sku], 0);
    const tierPct = totalCartons >= 10 ? 0.07 : totalCartons >= 5 ? 0.04 : 0;
    const isSouthFocus = state.b2bRegion === 'South India Focus';
    const regionalPct = isSouthFocus && totalCartons > 0 ? 0.02 : 0;
    const totalSchemePct = tierPct + regionalPct;
    const schemeAmt = Math.round(gross * totalSchemePct);
    const taxable = gross - schemeAmt;
    const gstAmt = Math.round(taxable * 0.05);
    const netPayable = taxable + gstAmt;
    const retailerMarginVal = entries.reduce((sum, s) => {
      const linePtr = s.ptrPerCarton * state.b2bCart[s.sku];
      return sum + Math.round(linePtr * (s.marginRate / (1 - s.marginRate)));
    }, 0);

    return {
      entries,
      totalCartons,
      gross,
      tierPct,
      regionalPct,
      totalSchemePct,
      schemeAmt,
      taxable,
      gstAmt,
      netPayable,
      retailerMarginVal,
      isSouthFocus
    };
  }

  function renderB2bPortal() {
    const visibleSkus = filterB2BCatalog();
    const isSouthFocus = state.b2bRegion === 'South India Focus';
    const ratioLabel = B2B_RATIOS[state.b2bRatio] || B2B_RATIOS.standard;

    const filterNames = {
      all: 'All Brands',
      macho: 'Macho',
      sporto: 'Sporto',
      zoiro: 'Zoiro'
    };
    if (b2bActiveFilterEl) {
      b2bActiveFilterEl.textContent = `Showing: ${filterNames[state.b2bFilter] || 'All Brands'} (${visibleSkus.length} SKUs)`;
    }

    document.querySelectorAll('[data-b2b-region]').forEach((b) => {
      const active = b.dataset.b2bRegion === state.b2bRegion;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-b2b-stock]').forEach((b) => {
      const active = b.dataset.b2bStock === state.b2bStockFilter;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-b2b-ratio]').forEach((b) => {
      const active = b.dataset.b2bRatio === state.b2bRatio;
      b.classList.toggle('is-active', active);
      b.setAttribute('aria-pressed', String(active));
    });

    if (b2bPrimaryHub) {
      b2bPrimaryHub.textContent = isSouthFocus
        ? 'Tirupur Priority Hub (24–48 hr transit)'
        : 'Multi-Hub (Tirupur · Kolkata · Bhiwandi)';
    }

    b2bSkuGrid.innerHTML = '';
    if (!visibleSkus.length) {
      const empty = document.createElement('div');
      empty.className = 'b2b-empty-state';
      empty.innerHTML = `
        <p>No wholesale cartons match the combined Brand, Territory, and Scheme filter.</p>
        <button type="button" class="btn-ghost-sm" id="b2b-reset-filters-btn">Reset All B2B Filters</button>
      `;
      b2bSkuGrid.appendChild(empty);
      empty.querySelector('#b2b-reset-filters-btn')?.addEventListener('click', () => {
        state.b2bFilter = 'all';
        state.b2bStockFilter = 'all';
        syncNavBrandHighlight('hub');
        renderB2bPortal();
      });
    } else {
      visibleSkus.forEach((item) => {
        const qty = state.b2bCart[item.sku] || 0;
        const row = document.createElement('div');
        row.className = 'b2b-row';
        const dispatchText = item.stockLow
          ? `Low Stock Alert · ${item.hub} Hub`
          : isSouthFocus && item.tirupurDirect
            ? '24–48 hr Priority · Tirupur Hub'
            : `On-Hand · ${item.hub} Hub`;
        const festiveBadge = item.festiveScheme ? '<span class="b2b-scheme-tag">Festive Scheme</span>' : '';

        row.innerHTML = `
          <div class="b2b-row-product">
            <div class="b2b-row-thumb">
              <img src="${item.img}" alt="${item.name}" class="model-photo" width="48" height="58" loading="lazy">
            </div>
            <div>
              <div class="b2b-row-title-line">
                <span class="b2b-brand-dot" data-item-brand="${item.brand}" aria-hidden="true"></span>
                <span>${item.name}</span>
              </div>
              <span class="b2b-row-sku">${item.brand.toUpperCase()} &middot; SKU ${item.sku} &middot; HSN ${item.hsn}${festiveBadge}</span>
            </div>
          </div>
          <div class="b2b-row-pack">
            <span>${ratioLabel}</span>
            <span class="stock-badge ${item.stockLow ? 'is-low' : 'is-ok'}">&#9679; ${dispatchText}</span>
          </div>
          <div class="b2b-row-margin">${item.marginPct} PTR</div>
          <div class="b2b-row-rate">${formatINR(item.ptrPerCarton)}</div>
          <div class="b2b-row-stepper qty-stepper" aria-label="Cartons for ${item.name}">
            <button type="button" data-b2b-delta="-1" aria-label="Decrease cartons">&minus;</button>
            <span>${qty}</span>
            <button type="button" data-b2b-delta="1" aria-label="Increase cartons">+</button>
          </div>
        `;

        row.querySelector('[data-b2b-delta="-1"]').addEventListener('click', () => {
          if ((state.b2bCart[item.sku] || 0) > 0) {
            state.b2bCart[item.sku] -= 1;
            b2bQuoteMsg.hidden = true;
            renderB2bPortal();
          }
        });

        row.querySelector('[data-b2b-delta="1"]').addEventListener('click', () => {
          state.b2bCart[item.sku] = (state.b2bCart[item.sku] || 0) + 1;
          b2bQuoteMsg.hidden = true;
          renderB2bPortal();
        });

        b2bSkuGrid.appendChild(row);
      });
    }

    const fin = computeB2bFinancials();
    const { totalCartons, gross, tierPct, regionalPct, totalSchemePct, schemeAmt, gstAmt, netPayable, retailerMarginVal, entries } = fin;

    const posUnlocked = totalCartons >= 5;
    if (posUnlocked && !state.b2bPosUserToggled) {
      state.b2bIncludePos = true;
    } else if (!posUnlocked) {
      state.b2bIncludePos = false;
      state.b2bPosUserToggled = false;
    }

    if (b2bPosCheckbox) {
      b2bPosCheckbox.disabled = !posUnlocked;
      b2bPosCheckbox.checked = posUnlocked && state.b2bIncludePos;
    }
    if (b2bPosAddonWrap) {
      b2bPosAddonWrap.classList.toggle('is-disabled', !posUnlocked);
      b2bPosAddonWrap.classList.toggle('is-unlocked', posUnlocked);
    }
    if (b2bPosStatus) {
      b2bPosStatus.textContent = posUnlocked
        ? 'Unlocked FREE · Ready to include for 1,00,000+ retail outlet visibility'
        : `Add ${Math.max(1, 5 - totalCartons)} more carton(s) to unlock free in-shop stand & danglers`;
    }

    if (b2bRegionLabel) {
      b2bRegionLabel.textContent = isSouthFocus
        ? 'Dispatch: South India Priority (Tirupur Hub)'
        : 'Dispatch: Pan-India Network (Multi-Hub)';
    }
    if (b2bRegionalBonus) b2bRegionalBonus.hidden = !isSouthFocus;

    b2bTotalCartons.textContent = `${totalCartons} Carton(s) (${totalCartons * 24} Sets)`;
    b2bGrossVal.textContent = formatINR(gross);

    const schemeNotes = [];
    if (tierPct > 0) schemeNotes.push(`${Math.round(tierPct * 100)}% Tier`);
    if (regionalPct > 0) schemeNotes.push('+2% South India');
    const schemeNoteText = schemeNotes.length ? ` (${schemeNotes.join(' ')})` : '';
    b2bSchemeAmt.textContent = totalCartons > 0 && totalSchemePct > 0 ? `-${formatINR(schemeAmt)}${schemeNoteText}` : `-${formatINR(0)}`;
    if (b2bGstAmt) b2bGstAmt.textContent = formatINR(gstAmt);
    b2bNetVal.textContent = formatINR(netPayable);
    if (b2bRetailerMargin) b2bRetailerMargin.textContent = `+${formatINR(retailerMarginVal)}`;
    b2bRequestQuoteBtn.disabled = totalCartons === 0;

    if (b2bCartonProgressLabel) {
      b2bCartonProgressLabel.textContent = `${totalCartons} / 10 ctns`;
    }
    if (b2bSchemeProgressFill) {
      b2bSchemeProgressFill.style.width = `${Math.min(100, (totalCartons / 10) * 100)}%`;
    }
    if (b2bSchemeHint) {
      if (totalCartons < 5) {
        b2bSchemeHint.textContent = `Add ${5 - totalCartons} more carton(s) for +4% Scheme + Free POS Kit`;
      } else if (totalCartons < 10) {
        b2bSchemeHint.textContent = `+4% Scheme & POS unlocked · Add ${10 - totalCartons} more for +7% Fleet Tier`;
      } else {
        b2bSchemeHint.textContent = isSouthFocus
          ? 'Max 9% Rebate (7% Tier + 2% South India) + Priority Tirupur Dispatch'
          : 'Max 7% Tier Rebate + Free POS Stand + Priority Multi-Hub Fleet';
      }
    }

    b2bTier5.classList.toggle('is-unlocked', totalCartons >= 5);
    b2bTier10.classList.toggle('is-unlocked', totalCartons >= 10);

    if (!entries.length) {
      b2bManifestLines.innerHTML = '<p style="color:var(--muted);">Select carton quantities from the line-sheet or click Repeat Last Order.</p>';
    } else {
      b2bManifestLines.innerHTML = entries
        .map(
          (s) => `
        <div style="display:flex;justify-content:space-between;gap:0.5rem;">
          <span>${s.name} &times; ${state.b2bCart[s.sku]} <small style="color:var(--muted);">(${s.hub})</small></span>
          <strong>${formatINR(s.ptrPerCarton * state.b2bCart[s.sku])}</strong>
        </div>
      `
        )
        .join('');
    }
  }

  function openProformaPoDialog(po) {
    if (!b2bPoDialog || !po) return;
    const poBrandLogo = document.getElementById('b2b-po-brand-logo');
    if (poBrandLogo) {
      poBrandLogo.src = state.brand === 'hub' ? './Images/logo_macho_light.png' : './Images/logo_macho.png';
    }
    if (poModalMeta) {
      poModalMeta.innerHTML = `
        <div><span>PO Reference</span><strong>${po.poId}</strong></div>
        <div><span>Account Code</span><strong>${po.partner}</strong></div>
        <div><span>Dispatch Network</span><strong>${po.dispatchLabel}</strong></div>
        <div><span>Carton Ratio</span><strong>${po.ratioLabel}</strong></div>
        <div><span>Retail POS Kit</span><strong>${po.posIncluded ? 'Included Free (Stand + Danglers)' : 'Not Selected'}</strong></div>
      `;
    }
    if (poModalRows) {
      poModalRows.innerHTML = po.entries
        .map(
          (s) => `
        <tr>
          <td><strong>${s.name}</strong><br><small style="color:var(--muted);">${s.sku} &middot; HSN ${s.hsn}</small></td>
          <td>${s.hub}</td>
          <td>${po.quantities[s.sku]}</td>
          <td>${po.quantities[s.sku] * 24}</td>
          <td style="text-align:right;"><strong>${formatINR(s.ptrPerCarton * po.quantities[s.sku])}</strong></td>
        </tr>
      `
        )
        .join('');
    }
    if (poModalTotals) {
      poModalTotals.innerHTML = `
        <div class="summary-row"><span>Gross PTR Value (${po.totalCartons} Cartons / ${po.totalCartons * 24} Sets)</span><strong>${formatINR(po.gross)}</strong></div>
        <div class="summary-row summary-savings"><span>Trade &amp; Regional Scheme Savings (${Math.round(po.totalSchemePct * 100)}%)</span><strong>-${formatINR(po.schemeAmt)}</strong></div>
        <div class="summary-row"><span>5% Apparel GST (HSN 6107/6109)</span><span>${formatINR(po.gstAmt)}</span></div>
        <div class="summary-row summary-total"><span>Net Payable Amount</span><strong>${formatINR(po.netPayable)}</strong></div>
        <div class="summary-row b2b-margin-summary"><span>Estimated Retailer Margin Value</span><strong>+${formatINR(po.retailerMarginVal)}</strong></div>
      `;
    }
    if (!b2bPoDialog.open) b2bPoDialog.showModal();
  }

  function downloadPoCsv() {
    const po = state.lastB2bPo;
    if (!po) return;
    const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const rows = [
      ['Proforma PO Reference', po.poId, 'Account Code', po.partner, 'Region', po.dispatchLabel],
      ['Assortment Ratio', po.ratioLabel, 'In-Shop POS Display Kit', po.posIncluded ? 'Included Free' : 'No'],
      [],
      ['SKU', 'Brand', 'Product Name', 'Dispatch Hub', 'HSN Code', 'Cartons', 'Sets', 'Rate Per Carton (INR)', 'Line Total PTR (INR)']
    ];
    po.entries.forEach((s) => {
      const qty = po.quantities[s.sku];
      rows.push([s.sku, s.brand.toUpperCase(), s.name, s.hub, s.hsn, qty, qty * 24, s.ptrPerCarton, s.ptrPerCarton * qty]);
    });
    rows.push([]);
    rows.push(['Gross PTR Value', '', '', '', '', po.totalCartons, po.totalCartons * 24, '', po.gross]);
    rows.push(['Trade & Regional Scheme Savings', `${Math.round(po.totalSchemePct * 100)}%`, '', '', '', '', '', '', -po.schemeAmt]);
    rows.push(['5% Apparel GST (HSN 6107/6109)', '', '', '', '', '', '', '', po.gstAmt]);
    rows.push(['Net Payable Amount', '', '', '', '', '', '', '', po.netPayable]);
    rows.push(['Estimated Retailer Margin Value', '', '', '', '', '', '', '', po.retailerMarginVal]);

    const csv = rows.map((r) => r.map(esc).join(',')).join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${po.poId}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast(`Downloaded Proforma PO ${po.poId}.csv`);
  }

  modeD2cBtn.addEventListener('click', () => setChannelMode('d2c'));
  modeB2bBtn.addEventListener('click', () => setChannelMode('b2b'));
  b2bBackD2cBtn.addEventListener('click', () => setChannelMode('d2c'));

  b2bPosCheckbox?.addEventListener('change', () => {
    state.b2bIncludePos = Boolean(b2bPosCheckbox.checked);
    state.b2bPosUserToggled = true;
    showToast(state.b2bIncludePos ? 'Free POS Display Stand & Danglers included' : 'Removed POS Display Stand add-on');
  });

  if (b2bRepeatOrderBtn) {
    b2bRepeatOrderBtn.addEventListener('click', () => {
      state.b2bCart = {
        'MC-CASE-TRK-24': 2,
        'MC-CASE-BOX-24': 1,
        'SP-CASE-TEE-24': 2,
        'ZR-CASE-PLO-24': 1
      };
      state.b2bPosUserToggled = false;
      b2bQuoteMsg.hidden = true;
      renderB2bPortal();
      showToast('Loaded last 6-carton order (+4% Trade Scheme & POS Kit unlocked)');
    });
  }

  document.querySelectorAll('[data-b2b-region]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.b2bRegion = btn.dataset.b2bRegion;
      state.b2bRatio = state.b2bRegion === 'South India Focus' ? 'south' : 'standard';
      renderB2bPortal();
    });
  });

  document.querySelectorAll('[data-b2b-stock]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.b2bStockFilter = btn.dataset.b2bStock;
      renderB2bPortal();
    });
  });

  document.querySelectorAll('[data-b2b-ratio]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.b2bRatio = btn.dataset.b2bRatio;
      renderB2bPortal();
    });
  });

  b2bRequestQuoteBtn.addEventListener('click', () => {
    const fin = computeB2bFinancials();
    if (!fin.totalCartons) return;
    const partner = (b2bPartnerCode.value || 'JGH-BLR-1042').trim();
    const poId = `PO-JGH-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const quantities = {};
    fin.entries.forEach((s) => {
      quantities[s.sku] = state.b2bCart[s.sku];
    });
    const po = {
      poId,
      partner,
      dispatchLabel: fin.isSouthFocus ? 'South India Priority (Tirupur Hub)' : 'Pan-India Network (Multi-Hub)',
      ratioLabel: B2B_RATIOS[state.b2bRatio] || B2B_RATIOS.standard,
      posIncluded: fin.totalCartons >= 5 && state.b2bIncludePos,
      quantities,
      ...fin
    };
    state.lastB2bPo = po;
    b2bQuoteMsg.textContent = `SAMPLE ENTERPRISE DATA: Proforma ${poId} generated for ${partner} (${fin.totalCartons} cartons / ${fin.totalCartons * 24} sets · Net ${formatINR(fin.netPayable)} incl. 5% GST). Consumer D2C bag untouched.`;
    b2bQuoteMsg.hidden = false;
    openProformaPoDialog(po);
  });

  b2bDownloadCsvBtn?.addEventListener('click', downloadPoCsv);
  [b2bPoCloseBtn, b2bPoDoneBtn].forEach((b) => {
    b?.addEventListener('click', () => {
      if (b2bPoDialog?.open) b2bPoDialog.close();
    });
  });
  b2bPoDialog?.addEventListener('click', (e) => {
    if (e.target === b2bPoDialog) b2bPoDialog.close();
  });

  southIndiaToggleBtn.addEventListener('click', () => {
    state.southIndiaCampaign = !state.southIndiaCampaign;
    southIndiaToggleBtn.setAttribute('aria-pressed', String(state.southIndiaCampaign));
    if (state.southIndiaCampaign) {
      if (state.channelMode === 'b2b' || state.brand !== 'hub') {
        setBrand('hub');
      }
      setDayMoment(state.dayIndex, false);
      showToast('South India Monsoon-Dry Campaign activated on All Hub');
    } else {
      setDayMoment(state.dayIndex, false);
      showToast('Restored Pan-India Flagship Hub view');
    }
  });

  /* ========================================================================
     GLOBAL KEYBOARD NAVIGATION & BRAND SWITCH LISTENERS
     ======================================================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pdpState.isOpen) {
      const anyModalOpen =
        cartDialog?.open ||
        fitDialog?.open ||
        searchDialog?.open ||
        journalDialog?.open ||
        conciergeDialog?.open ||
        b2bPoDialog?.open;
      if (!anyModalOpen && typeof closeProductPage === 'function') {
        closeProductPage(true);
      }
    }
  });

  /* ========================================================================
     GLOBAL BRAND SWITCH LISTENERS, HOVER MEGA-DROPDOWN & MOBILE DROPDOWN
     ======================================================================== */
  const MEGA_MENUS = {
    hub: {
      kicker: '24-HOUR ECOSYSTEM',
      links: [
        { label: '6:00 AM Workout → Sporto', hint: 'Morning', action: () => { setBrand('hub'); setDayMoment(0, true); } },
        { label: '10:00 AM Everyday → Macho', hint: 'Midday', action: () => { setBrand('hub'); setDayMoment(1, true); } },
        { label: '8:00 PM Evening → Zoiro', hint: 'After Hours', action: () => { setBrand('hub'); setDayMoment(2, true); } },
        { label: 'Amul Comfy · Tier 2/3 Core', hint: 'Preview', action: () => { setBrand('hub', { scrollTop: false }); document.getElementById('legacy-heading')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Amul Kandy Floss · Kids Edit', hint: 'Preview', action: () => { setBrand('hub', { scrollTop: false }); document.getElementById('legacy-heading')?.scrollIntoView({ behavior: 'smooth' }); } }
      ],
      feature: {
        brand: 'hub',
        title: 'Amul Comfy & Kandy Floss',
        desc: 'Expanding J.G. Hosiery into 1.1L+ households across India.',
        img: './Images/comfy_everyday.jpg',
        cta: 'View Legacy Strip',
        onClick: () => { setBrand('hub', { scrollTop: false }); document.getElementById('legacy-heading')?.scrollIntoView({ behavior: 'smooth' }); }
      }
    },
    macho: {
      kicker: 'MACHO INNERWEAR',
      links: [
        { label: 'Combed Cotton Trunks', hint: 'Signature', action: () => { setBrand('macho'); document.getElementById('macho-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Navy & Stealth Charcoal Briefs', hint: 'Support', action: () => { setBrand('macho'); document.getElementById('macho-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Ribbed & Active Cotton Vests', hint: 'Core', action: () => { setBrand('macho'); document.getElementById('macho-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Lounge Boxers & Combo Kits', hint: '3-Pack', action: () => { setBrand('macho'); document.getElementById('macho-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Pack Your Box Builder (Up to 20% Off)', hint: '5 Slots', action: () => { setBrand('macho'); document.getElementById('macho-pack-builder')?.scrollIntoView({ behavior: 'smooth' }); } }
      ],
      feature: {
        brand: 'macho',
        title: 'Macho Trunks Pack of 3',
        desc: 'Combed cotton hold with ultra-soft jacquard band · ₹477',
        img: './Images/macho.webp',
        cta: 'Enter Macho',
        onClick: () => setBrand('macho')
      }
    },
    sporto: {
      kicker: 'SPORTO PERFORMANCE',
      links: [
        { label: 'Gym Gear & Pro Vests', hint: 'Filter', action: () => { setBrand('sporto'); state.sportoActivitySub = 'Gym'; setSportoActivity('All'); document.getElementById('sporto-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Running Mesh Tees', hint: 'Filter', action: () => { setBrand('sporto'); state.sportoActivitySub = null; setSportoActivity('Running'); document.getElementById('sporto-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Athleisure Daily Edit', hint: 'Filter', action: () => { setBrand('sporto'); state.sportoActivitySub = 'Athleisure'; setSportoActivity('All'); document.getElementById('sporto-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Value Packs & Bundles', hint: 'Save', action: () => { setBrand('sporto'); state.sportoActivitySub = null; setSportoActivity('Value Packs'); document.getElementById('sporto-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Velocity Lab · Condition Simulator', hint: 'Lab', action: () => { setBrand('sporto'); document.getElementById('sporto-velocity-sim')?.scrollIntoView({ behavior: 'smooth' }); } }
      ],
      feature: {
        brand: 'sporto',
        title: 'Velocity Side-Stripe Track Pants',
        desc: 'Black Crimson & Steel Volt Stripe · 4-Way Stretch · ₹639',
        img: './Images/sporto_track_volt.jpg',
        cta: 'Enter Sporto',
        onClick: () => setBrand('sporto')
      }
    },
    zoiro: {
      kicker: 'ZOIRO QUIET LUXURY',
      links: [
        { label: 'Work · Mercerized Polos', hint: 'Look', action: () => { setBrand('zoiro'); state.zoiroSubCat = 'Work'; state.zoiroSubLabel = 'Work Edit'; renderZoiroGrid(); document.getElementById('zoiro-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Travel · Crease-Resistant Track', hint: 'Look', action: () => { setBrand('zoiro'); state.zoiroSubCat = 'Travel'; state.zoiroSubLabel = 'Travel Edit'; renderZoiroGrid(); document.getElementById('zoiro-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Play · Minimalist Tees', hint: 'Look', action: () => { setBrand('zoiro'); state.zoiroSubCat = 'Play'; state.zoiroSubLabel = 'Play Edit'; renderZoiroGrid(); document.getElementById('zoiro-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Lounge · Resort Interlock Shorts', hint: 'Look', action: () => { setBrand('zoiro'); state.zoiroSubCat = 'Lounge'; state.zoiroSubLabel = 'Lounge Edit'; renderZoiroGrid(); document.getElementById('zoiro-catalog')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Atelier Capsule Pairing Studio', hint: 'Save 10%', action: () => { setBrand('zoiro'); document.getElementById('zoiro-capsule-studio')?.scrollIntoView({ behavior: 'smooth' }); } },
        { label: 'Micro-Modal Split Curtain', hint: 'Compare', action: () => { setBrand('zoiro'); document.getElementById('zoiro-fabric-lab')?.scrollIntoView({ behavior: 'smooth' }); } }
      ],
      feature: {
        brand: 'zoiro',
        title: 'Classic Executive Polo',
        desc: 'Micro-Modal blend with mercerized drape · ₹1,759',
        img: './Images/zoiro_polo.webp',
        cta: 'Enter Zoiro',
        onClick: () => setBrand('zoiro')
      }
    }
  };

  let megaHideTimer = null;

  function showMegaMenu(brandKey) {
    if (!brandMegaMenu || state.channelMode !== 'd2c' || window.innerWidth < 768) return;
    const cfg = MEGA_MENUS[brandKey];
    if (!cfg) return;
    clearTimeout(megaHideTimer);

    const megaLogoHtml = BRAND_LOGOS[brandKey]
      ? `<span class="mega-logo-plate"><img src="${BRAND_LOGOS[brandKey].src}" alt="${BRAND_LOGOS[brandKey].alt}" class="mega-brand-logo" data-mega-logo="${brandKey}"></span>`
      : `<span class="mega-kicker">${cfg.kicker}</span>`;

    brandMegaMenu.innerHTML = `
      <div class="mega-links-col">
        ${megaLogoHtml}
        ${cfg.links
          .map(
            (l, i) => `
          <button type="button" class="mega-link-btn" data-mega-link-idx="${i}">
            <span>${l.label}</span>
            <span>${l.hint} &rarr;</span>
          </button>
        `
          )
          .join('')}
      </div>
      <div class="mega-feature-card">
        <div class="mega-feature-thumb">
          <img src="${cfg.feature.img}" alt="${cfg.feature.title}" class="model-photo" width="82" height="104">
        </div>
        <div class="mega-feature-meta">
          <span class="mega-kicker" style="margin-bottom:0;">FEATURED SPOTLIGHT</span>
          <strong>${cfg.feature.title}</strong>
          <p>${cfg.feature.desc}</p>
          <button type="button" class="btn-accent-sm" data-mega-cta="true">${cfg.feature.cta}</button>
        </div>
      </div>
    `;

    brandMegaMenu.querySelectorAll('[data-mega-link-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.megaLinkIdx);
        brandMegaMenu.hidden = true;
        cfg.links[idx].action();
      });
    });

    const ctaBtn = brandMegaMenu.querySelector('[data-mega-cta]');
    if (ctaBtn) {
      ctaBtn.addEventListener('click', () => {
        brandMegaMenu.hidden = true;
        cfg.feature.onClick();
      });
    }

    brandMegaMenu.hidden = false;
  }

  function scheduleHideMegaMenu() {
    clearTimeout(megaHideTimer);
    megaHideTimer = setTimeout(() => {
      if (brandMegaMenu) brandMegaMenu.hidden = true;
    }, 120);
  }

  if (brandSwitcherNav && brandMegaMenu) {
    brandMegaMenu.addEventListener('pointerenter', () => clearTimeout(megaHideTimer));
    brandMegaMenu.addEventListener('pointerleave', scheduleHideMegaMenu);
    brandSwitcherNav.addEventListener('pointerleave', scheduleHideMegaMenu);
  }

  brandTabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
      if (brandMegaMenu) brandMegaMenu.hidden = true;
      handleBrandTabSelect(tab.dataset.brandTab);
    });
    tab.addEventListener('pointerenter', (e) => {
      if (e.pointerType === 'mouse') showMegaMenu(tab.dataset.brandTab);
    });
    tab.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const dir = e.key === 'ArrowRight' ? 1 : -1;
        const next = brandTabs[(idx + dir + brandTabs.length) % brandTabs.length];
        next.focus();
        handleBrandTabSelect(next.dataset.brandTab);
      }
      if (e.key === 'Escape' && brandMegaMenu) {
        brandMegaMenu.hidden = true;
      }
    });
  });

  if (mobileBrandTrigger && mobileBrandMenu) {
    mobileBrandTrigger.addEventListener('click', () => {
      const willOpen = mobileBrandMenu.hidden;
      mobileBrandMenu.hidden = !willOpen;
      mobileBrandTrigger.setAttribute('aria-expanded', String(willOpen));
    });

    document.querySelectorAll('[data-mobile-brand]').forEach((opt) => {
      opt.addEventListener('click', () => {
        mobileBrandMenu.hidden = true;
        mobileBrandTrigger.setAttribute('aria-expanded', 'false');
        handleBrandTabSelect(opt.dataset.mobileBrand);
      });
    });

    document.addEventListener('click', (e) => {
      if (!mobileBrandMenu.hidden && !mobileBrandTrigger.contains(e.target) && !mobileBrandMenu.contains(e.target)) {
        mobileBrandMenu.hidden = true;
        mobileBrandTrigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('[data-switch-brand]').forEach((btn) => {
    btn.addEventListener('click', () => setBrand(btn.dataset.switchBrand));
  });

  /* ========================================================================
     GLOBAL CURSOR AURA, HERO 3D HOVER LIGHT & MAGNETIC CTA PHYSICS
     ======================================================================== */
  const SUPPORTS_CURSOR_FX =
    typeof window !== 'undefined' &&
    window.matchMedia('(any-hover: hover)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function attachMagneticButton(btn) {
    if (!SUPPORTS_CURSOR_FX || !btn || btn.dataset.magBound) return;
    btn.dataset.magBound = 'true';
    let magRaf = null;

    btn.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse' || btn.disabled) return;
      const clientX = e.clientX;
      const clientY = e.clientY;
      if (magRaf) cancelAnimationFrame(magRaf);
      magRaf = requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const relX = clientX - rect.left;
        const relY = clientY - rect.top;
        const normX = Math.max(-1, Math.min(1, (relX / rect.width) * 2 - 1));
        const normY = Math.max(-1, Math.min(1, (relY / rect.height) * 2 - 1));
        const pullX = (normX * 3).toFixed(2);
        const pullY = (normY * 3).toFixed(2);
        btn.style.setProperty('--mx', `${pullX}px`);
        btn.style.setProperty('--my', `${pullY}px`);
        btn.style.setProperty('--bx', `${((relX / rect.width) * 100).toFixed(1)}%`);
        btn.style.setProperty('--by', `${((relY / rect.height) * 100).toFixed(1)}%`);
        btn.style.setProperty('--b-glow-opacity', '1');
      });
    });

    btn.addEventListener('pointerleave', () => {
      if (magRaf) {
        cancelAnimationFrame(magRaf);
        magRaf = null;
      }
      btn.style.setProperty('--mx', '0px');
      btn.style.setProperty('--my', '0px');
      btn.style.setProperty('--b-glow-opacity', '0');
    });
  }

  function attachHeroStageTilt(el, maxTiltDeg = 4) {
    if (!SUPPORTS_CURSOR_FX || !el || el.dataset.heroTiltBound) return;
    el.dataset.heroTiltBound = 'true';
    let tiltRaf = null;

    el.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const clientX = e.clientX;
      const clientY = e.clientY;
      if (tiltRaf) cancelAnimationFrame(tiltRaf);
      tiltRaf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        const rotY = ((px - 0.5) * 2 * maxTiltDeg).toFixed(2);
        const rotX = ((0.5 - py) * 2 * maxTiltDeg).toFixed(2);
        el.style.setProperty('--htx', `${rotX}deg`);
        el.style.setProperty('--hty', `${rotY}deg`);
        el.style.setProperty('--hx', `${(px * 100).toFixed(1)}%`);
        el.style.setProperty('--hy', `${(py * 100).toFixed(1)}%`);
        el.style.setProperty('--hero-sheen-opacity', '1');
      });
    });

    el.addEventListener('pointerleave', () => {
      if (tiltRaf) {
        cancelAnimationFrame(tiltRaf);
        tiltRaf = null;
      }
      el.style.setProperty('--htx', '0deg');
      el.style.setProperty('--hty', '0deg');
      el.style.setProperty('--hero-sheen-opacity', '0');
    });
  }

  function initCursorAuraAndInteractiveLights() {
    if (!SUPPORTS_CURSOR_FX) return;

    const cursorAura = document.getElementById('cursor-aura');
    if (cursorAura) {
      let targetX = -999;
      let targetY = -999;
      let currentX = -999;
      let currentY = -999;
      let auraRaf = null;
      let hasMoved = false;

      const stepAura = () => {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        cursorAura.style.transform = `translate3d(${currentX.toFixed(1)}px, ${currentY.toFixed(1)}px, 0)`;

        if (Math.abs(targetX - currentX) > 0.35 || Math.abs(targetY - currentY) > 0.35) {
          auraRaf = requestAnimationFrame(stepAura);
        } else {
          auraRaf = null;
        }
      };

      const targetSelector =
        'button, a, .btn, img, .hero-visual, .hero-photo-frame, .floating-outfit-card, .product-card, .world-card, [role="button"]';

      document.addEventListener(
        'pointermove',
        (e) => {
          if (e.pointerType !== 'mouse') return;
          targetX = e.clientX;
          targetY = e.clientY;
          if (!hasMoved) {
            currentX = targetX;
            currentY = targetY;
            hasMoved = true;
          }
          const isTarget = e.target && e.target.closest ? e.target.closest(targetSelector) : null;
          cursorAura.classList.toggle('is-hovering', Boolean(isTarget));
          if (!auraRaf) {
            auraRaf = requestAnimationFrame(stepAura);
          }
        },
        { passive: true }
      );

      document.addEventListener('mouseleave', () => {
        hasMoved = false;
        cursorAura.classList.remove('is-hovering');
      });
    }

    document.querySelectorAll('.hero-photo-frame, .hero-split-frame, .sporto-hero-frame').forEach((frame) => attachHeroStageTilt(frame, 4));
    document.querySelectorAll('.world-card').forEach((card) => attachHeroStageTilt(card, 3.6));
    document.querySelectorAll('.floating-outfit-card').forEach((card) => attachHeroStageTilt(card, 2.2));
    document
      .querySelectorAll('.hero-cta-row .btn-primary, .hero-cta-row .btn-ghost, #hub-quick-add-outfit, .btn-primary, .btn-accent-sm')
      .forEach((btn) => attachMagneticButton(btn));
  }

  /* ========================================================================
     FLAGSHIP EDITORIAL CONTROLLERS (ZOIRO, SPORTO, MACHO, QUICK VIEW, JOURNAL)
     ======================================================================== */

  /* --- 1. FULL-PAGE PRODUCT DETAIL VIEW (PDP) --- */
  const pdpBackBtn = document.getElementById('pdp-back-btn');
  const pdpBackBrandLabel = document.getElementById('pdp-back-brand-label');
  const pdpCrumbBrand = document.getElementById('pdp-crumb-brand');
  const pdpCrumbCategory = document.getElementById('pdp-crumb-category');
  const pdpCrumbTitle = document.getElementById('pdp-crumb-title');
  const pdpStage = document.getElementById('pdp-stage');
  const pdpStageImg = document.getElementById('pdp-stage-img');
  const pdpStageBrandBadge = document.getElementById('pdp-stage-brand-badge');
  const pdpStageStatusBadge = document.getElementById('pdp-stage-status-badge');
  const pdpFitGuideCard = document.getElementById('pdp-fit-guide-card');
  const pdpFitCut = document.getElementById('pdp-fit-cut');
  const pdpFitGsm = document.getElementById('pdp-fit-gsm');
  const pdpFitComp = document.getElementById('pdp-fit-comp');
  const pdpFitLiveRec = document.getElementById('pdp-fit-live-rec');
  const pdpFitGuideCta = document.getElementById('pdp-fit-guide-cta');
  const pdpModeBtns = Array.from(document.querySelectorAll('#pdp-view-modes [data-pdp-mode]'));

  const pdpBrandLogo = document.getElementById('pdp-brand-logo');
  const pdpCategoryEl = document.getElementById('pdp-category');
  const pdpTitleEl = document.getElementById('pdp-title');
  const pdpRatingEl = document.getElementById('pdp-rating');
  const pdpPriceEl = document.getElementById('pdp-price');
  const pdpMrpEl = document.getElementById('pdp-mrp');
  const pdpSaveEl = document.getElementById('pdp-save');
  const pdpDescEl = document.getElementById('pdp-desc');
  const pdpSpecsEl = document.getElementById('pdp-specs');
  const pdpColorwayLabel = document.getElementById('pdp-colorway-label');
  const pdpSwatchesEl = document.getElementById('pdp-swatches');
  const pdpSizesEl = document.getElementById('pdp-sizes');
  const pdpStockNote = document.getElementById('pdp-stock-note');
  const pdpRestockForm = document.getElementById('pdp-restock-form');
  const pdpRestockContact = document.getElementById('pdp-restock-contact');
  const pdpQtyMinus = document.getElementById('pdp-qty-minus');
  const pdpQtyPlus = document.getElementById('pdp-qty-plus');
  const pdpQtyVal = document.getElementById('pdp-qty-val');
  const pdpAddCartBtn = document.getElementById('pdp-add-cart-btn');
  const pdpAddBoxBtn = document.getElementById('pdp-add-box-btn');
  const pdpPincodeForm = document.getElementById('pdp-pincode-form');
  const pdpPincodeInput = document.getElementById('pdp-pincode-input');
  const pdpPincodeMsg = document.getElementById('pdp-pincode-msg');
  const pdpAccFabric = document.getElementById('pdp-acc-fabric');
  const pdpBentoGrid = document.getElementById('pdp-bento-grid');
  const pdpRelatedGrid = document.getElementById('pdp-related-grid');
  const pdpMobilePrice = document.getElementById('pdp-mobile-price');
  const pdpMobileSize = document.getElementById('pdp-mobile-size');
  const pdpMobileAddBtn = document.getElementById('pdp-mobile-add-btn');

  const MACHO_HOSIERY_CM = {
    S: '80cm',
    M: '85cm',
    L: '90cm',
    XL: '95cm',
    XXL: '100cm'
  };

  const PDP_RETURN_LABELS = {
    hub: 'All Hub',
    macho: 'Macho',
    sporto: 'Sporto',
    zoiro: 'Zoiro'
  };

  const PDP_BRAND_BENTO = {
    macho: [
      {
        kicker: '01 · FIBER PURITY',
        title: '100% Super-Combed Cotton (180 GSM)',
        desc: 'Extra-long-staple Indian cotton carded and combed twice in Tirupur to eliminate lint while maximizing all-day breathability.'
      },
      {
        kicker: '02 · WAISTBAND HOLD',
        title: 'Zero-Roll Jacquard Waistband',
        desc: 'Micro-brushed elastic backing rests smooth against the waist with high tensile recovery and zero pinch marks.'
      },
      {
        kicker: '03 · SUPPORT GEOMETRY',
        title: 'Double-Layer Contour Pouch',
        desc: 'Ergonomic twin-ply support panel with chafe-free flat seams engineered for long commutes and active days.'
      }
    ],
    sporto: [
      {
        kicker: '01 · AIRFLOW MATRIX',
        title: 'Instacool Micro-Perforated Mesh',
        desc: 'Capillary moisture channels evacuate heat and perspiration rapidly across road sprints and humid gym circuits.'
      },
      {
        kicker: '02 · KINETIC ELASTICITY',
        title: '4-Way High-Rebound Stretch',
        desc: 'Engineered spandex-interlock memory follows deep squats, overhead presses, and explosive tempo shifts without bagging.'
      },
      {
        kicker: '03 · FRICTION SHIELD',
        title: 'Anti-Chafe Flatlock Seams',
        desc: 'Low-profile multi-needle flatlock seams sit flush against skin to eliminate chafe under sustained movement.'
      }
    ],
    zoiro: [
      {
        kicker: '01 · BOTANICAL WEAVE',
        title: 'Fine-Gauge Beechwood Micro-Modal',
        desc: 'Spun from sustainable European beechwood cellulose for 3x softer skin contact and effortless moisture dispersion.'
      },
      {
        kicker: '02 · TRANSIT RECOVERY',
        title: 'Zero-Crease Travel Drape',
        desc: 'High-recovery yarn architecture shakes off transit folds cleanly from boarding gate to evening dinner.'
      },
      {
        kicker: '03 · ARCHITECTURAL TRIM',
        title: 'Invisible Tailored Finishing',
        desc: 'Covered inner waistbands, structured mercerized collars, and tonal stitching crafted for understated sophistication.'
      }
    ]
  };

  function getPdpSpecs(product) {
    const zone = getProductFitZone(product);
    if (product.brand === 'macho') {
      return {
        cut: zone === 'top' ? 'Contoured Torso Rib' : 'Contoured Zero-Roll Fit',
        gsm: zone === 'top' ? '170 GSM Combed Rib' : '180 GSM Super-Combed',
        comp: product.id === 'ma-modal-trunk' ? '92% Beechwood Modal, 8% Elastane' : '100% Super-Combed Indian Cotton',
        rating: product.badge ? '4.9' : '4.8',
        reviews: product.badge ? 218 : 146,
        construction: `${product.desc} Knitted at J.G. Hosiery's Tirupur cotton complex using 180 GSM fine-combed single jersey / 1x1 rib with pre-shrunk finish and soft-brushed jacquard trim.`
      };
    }
    if (product.brand === 'sporto') {
      return {
        cut: zone === 'top' ? 'Raglan Kinetic Mobility' : 'Tapered 4-Way Recovery Fit',
        gsm: zone === 'top' ? '155 GSM Instacool Mesh' : '220 GSM Terry / Poly-Elastane',
        comp: '88% Performance Micro-Polyester, 12% Elastane',
        rating: product.badge ? '4.9' : '4.8',
        reviews: product.badge ? 194 : 132,
        construction: `${product.desc} Engineered with quick-dry capillary channels, 4-way Shapelock recovery yarn, and chafe-free flatlock seams calibrated for high-humidity Indian training conditions.`
      };
    }
    return {
      cut: zone === 'top' ? 'Tailored Modern Drape' : 'Architectural Relaxed Taper',
      gsm: zone === 'top' ? '205 GSM Mercerized Knit' : '240 GSM Compact Interlock',
      comp: '62% Beechwood Micro-Modal, 33% Long-Staple Cotton, 5% Elastane',
      rating: product.badge ? '4.9' : '4.8',
      reviews: product.badge ? 168 : 114,
      construction: `${product.desc} Spun from ultra-fine European beechwood Micro-Modal and mercerized long-staple cotton with invisible interior hems, matte fasteners, and crease-recovery finish.`
    };
  }

  function getCrossBrandRotation(product) {
    const sameBrand = PRODUCTS.filter((p) => p.brand === product.brand && p.id !== product.id).slice(0, 2);
    const sisterPairings = {
      macho: ['sp-track-velocity', 'zo-polo'],
      sporto: ['ma-trunks-3', 'zo-overshirt'],
      zoiro: ['ma-modal-trunk', 'sp-track-velocity']
    };
    const sisterIds = sisterPairings[product.brand] || ['ma-trunks-3', 'sp-tee-active'];
    const sisters = sisterIds
      .map((id) => PRODUCTS.find((p) => p.id === id))
      .filter(Boolean);
    return [...sameBrand, ...sisters];
  }

  function syncPdpStageMode() {
    if (!pdpStage || !pdpStageImg) return;
    pdpStage.classList.remove('is-studio-hover');
    pdpStage.classList.toggle('is-weave-zoom', pdpState.viewMode === 'weave');
    if (pdpState.viewMode === 'weave') {
      pdpStageImg.style.transformOrigin = '50% 48%';
    } else if (pdpState.viewMode === 'fit') {
      pdpStageImg.style.transformOrigin = '50% 48%';
    } else {
      pdpStageImg.style.transformOrigin = '50% 48%';
    }
    if (pdpFitGuideCard) {
      pdpFitGuideCard.hidden = pdpState.viewMode !== 'fit';
    }
    pdpModeBtns.forEach((btn) => {
      const active = btn.dataset.pdpMode === pdpState.viewMode;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });
  }

  function syncPdpStockAndActions(product, specs) {
    const activeSize = pdpState.selectedSize || 'M';
    const isLow = isProductLowStock(product, activeSize);
    const isOos = isProductOutOfStock(product, activeSize);
    const alerted = Boolean(state.restockAlerts[getRestockAlertKey(product.id, activeSize)]);

    if (pdpStockNote) {
      if (isOos) {
        pdpStockNote.className = 'stock-status-note is-oos-msg';
        pdpStockNote.textContent = alerted
          ? `● Restock alert active for ${activeSize} — we'll notify you when Tirupur Hub replenishes.`
          : `● Size ${activeSize} is currently out of stock at Tirupur Hub — set a restock alert below.`;
        pdpStockNote.hidden = false;
      } else if (isLow) {
        pdpStockNote.className = 'stock-status-note is-low';
        pdpStockNote.textContent = `● Only 2 left in ${activeSize} — fast Tirupur dispatch`;
        pdpStockNote.hidden = false;
      } else {
        pdpStockNote.hidden = true;
        pdpStockNote.textContent = '';
      }
    }

    if (pdpRestockForm) {
      pdpRestockForm.hidden = !isOos;
    }

    const applyCtaLabel = (btn) => {
      if (!btn) return;
      if (isOos) {
        btn.classList.add('is-notify-mode');
        btn.innerHTML = alerted
          ? 'Restock Alert Active &#10003;'
          : 'Notify Me When Back in Stock <span class="btn-arrow-circle" aria-hidden="true">&#8599;</span>';
      } else {
        btn.classList.remove('is-notify-mode');
        btn.innerHTML = 'Add to Bag <span class="btn-arrow-circle" aria-hidden="true">&#8599;</span>';
      }
    };

    applyCtaLabel(pdpAddCartBtn);
    applyCtaLabel(pdpMobileAddBtn);

    if (pdpAddBoxBtn) {
      pdpAddBoxBtn.hidden = product.brand !== 'macho' || isOos;
    }

    if (pdpMobilePrice) pdpMobilePrice.textContent = formatINR(product.price);
    if (pdpMobileSize) {
      pdpMobileSize.textContent =
        product.brand === 'macho' && MACHO_HOSIERY_CM[activeSize]
          ? `${activeSize} · ${MACHO_HOSIERY_CM[activeSize]}`
          : activeSize;
    }

    if (pdpFitCut) pdpFitCut.textContent = specs.cut;
    if (pdpFitGsm) pdpFitGsm.textContent = specs.gsm;
    if (pdpFitComp) pdpFitComp.textContent = specs.comp;
    if (pdpFitLiveRec) {
      if (state.fitProfile) {
        const zone = getProductFitZone(product);
        const recSize = getFitForBrand(product.brand, zone);
        const cmNote = MACHO_HOSIERY_CM[recSize] ? ` (${MACHO_HOSIERY_CM[recSize]})` : '';
        pdpFitLiveRec.textContent = `Your Smart Fit: ${recSize}${cmNote}`;
        if (pdpFitGuideCta) pdpFitGuideCta.textContent = 'Recalibrate Fit \u2197';
      } else {
        pdpFitLiveRec.textContent = 'Not calibrated yet';
        if (pdpFitGuideCta) pdpFitGuideCta.textContent = 'Calibrate Fit \u2197';
      }
    }
  }

  function handlePdpPrimaryAction() {
    const product = PRODUCTS.find((p) => p.id === pdpState.productId);
    if (!product) return;
    const sel = getSelection(product);
    const activeSize = pdpState.selectedSize || sel.size || 'M';
    if (isProductOutOfStock(product, activeSize)) {
      const key = getRestockAlertKey(product.id, activeSize);
      state.restockAlerts[key] = true;
      renderPdpView();
      if (product.brand === 'macho') renderMachoGrid();
      else if (product.brand === 'sporto') renderSportoGrid();
      else if (product.brand === 'zoiro') renderZoiroGrid();
      showToast(`Restock alert active for ${activeSize} — we'll notify you when Tirupur Hub replenishes.`);
      return;
    }
    for (let i = 0; i < pdpState.qty; i += 1) {
      addProductToCart(product, activeSize, sel.swatchIdx, false);
    }
    showToast(`Added ${pdpState.qty}x ${product.name} (${activeSize}) to bag`);
    openCartDrawer();
  }

  function renderPdpView() {
    if (!pdpViewEl || !pdpState.productId) return;
    const product = PRODUCTS.find((p) => p.id === pdpState.productId);
    if (!product) return;
    const sel = getSelection(product);
    const swatchIdx = product.swatches.findIndex((s) => s.name === pdpState.selectedColor);
    const sw = product.swatches[swatchIdx >= 0 ? swatchIdx : sel.swatchIdx] || product.swatches[0];
    const discPct = Math.round(((product.mrp - product.price) / product.mrp) * 100);
    const specs = getPdpSpecs(product);
    const logoCfg = BRAND_LOGOS[product.brand] || BRAND_LOGOS.macho;
    const brandDisplay = product.brand === 'macho' ? 'AMUL MACHO' : product.brand.toUpperCase();

    pdpViewEl.setAttribute('data-pdp-brand', product.brand);
    bodyEl.setAttribute('data-pdp-brand', product.brand);

    if (pdpBackBrandLabel) pdpBackBrandLabel.textContent = PDP_RETURN_LABELS[pdpState.returnBrand] || 'All Hub';
    if (pdpCrumbBrand) pdpCrumbBrand.textContent = product.brand.toUpperCase();
    if (pdpCrumbCategory) pdpCrumbCategory.textContent = product.category;
    if (pdpCrumbTitle) pdpCrumbTitle.textContent = product.name;

    if (pdpStageImg) {
      pdpStageImg.src = sw.img;
      pdpStageImg.alt = `${product.name} — ${sw.name}`;
    }
    if (pdpStageBrandBadge) {
      pdpStageBrandBadge.dataset.itemBrand = product.brand;
      pdpStageBrandBadge.textContent = brandDisplay;
    }
    if (pdpStageStatusBadge) {
      pdpStageStatusBadge.textContent = product.badge || `-${discPct}% OFF`;
    }

    if (pdpBrandLogo) {
      pdpBrandLogo.src = logoCfg.src;
      pdpBrandLogo.alt = logoCfg.alt;
    }
    if (pdpCategoryEl) pdpCategoryEl.textContent = product.category.toUpperCase();
    if (pdpTitleEl) pdpTitleEl.textContent = product.name;
    if (pdpRatingEl) pdpRatingEl.textContent = `\u2605 ${specs.rating} \u00B7 ${specs.reviews} Verified Reviews`;
    if (pdpPriceEl) pdpPriceEl.textContent = formatINR(product.price);
    if (pdpMrpEl) pdpMrpEl.textContent = formatINR(product.mrp);
    if (pdpSaveEl) pdpSaveEl.textContent = `-${discPct}% OFF`;
    if (pdpDescEl) pdpDescEl.textContent = product.desc || '';
    if (pdpQtyVal) pdpQtyVal.textContent = String(pdpState.qty);

    if (pdpSpecsEl) {
      pdpSpecsEl.innerHTML = (product.specs || [])
        .map((s) => `<span class="pdp-spec-pill">${s}</span>`)
        .join('');
    }

    if (pdpColorwayLabel) pdpColorwayLabel.textContent = sw.name;
    if (pdpSwatchesEl) {
      pdpSwatchesEl.innerHTML = product.swatches
        .map(
          (s, idx) => `
          <button type="button" class="swatch-btn" data-pdp-swatch="${idx}" aria-label="Color ${s.name}" aria-pressed="${s.name === sw.name ? 'true' : 'false'}" style="--swatch-hex: ${s.hex};"></button>
        `
        )
        .join('');
      pdpSwatchesEl.querySelectorAll('[data-pdp-swatch]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const nextIdx = Number(btn.dataset.pdpSwatch);
          const nextSw = product.swatches[nextIdx] || product.swatches[0];
          sel.swatchIdx = nextIdx;
          pdpState.selectedColor = nextSw.name;
          renderPdpView();
          if (product.brand === 'macho') renderMachoGrid();
          else if (product.brand === 'sporto') renderSportoGrid();
          else if (product.brand === 'zoiro') renderZoiroGrid();
        });
      });
    }

    if (pdpSizesEl) {
      pdpSizesEl.innerHTML = product.sizes
        .map((sz) => {
          const oos = isProductOutOfStock(product, sz);
          const cmSub = product.brand === 'macho' && MACHO_HOSIERY_CM[sz]
            ? ` <span class="pdp-size-cm">&middot; ${MACHO_HOSIERY_CM[sz]}</span>`
            : '';
          return `
            <button type="button" class="pdp-size-chip${oos ? ' is-oos' : ''}" data-pdp-size="${sz}" aria-pressed="${sz === pdpState.selectedSize ? 'true' : 'false'}">
              <span>${sz}</span>${cmSub}
            </button>
          `;
        })
        .join('');

      pdpSizesEl.querySelectorAll('[data-pdp-size]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const nextSz = btn.dataset.pdpSize;
          sel.size = nextSz;
          pdpState.selectedSize = nextSz;
          renderPdpView();
          if (product.brand === 'macho') renderMachoGrid();
          else if (product.brand === 'sporto') renderSportoGrid();
          else if (product.brand === 'zoiro') renderZoiroGrid();
        });
      });
    }

    if (pdpAccFabric) {
      pdpAccFabric.innerHTML = `<p>${specs.construction} Composition: <strong>${specs.comp}</strong> (${specs.gsm}).</p>`;
    }

    if (pdpBentoGrid) {
      const cards = PDP_BRAND_BENTO[product.brand] || PDP_BRAND_BENTO.macho;
      pdpBentoGrid.innerHTML = cards
        .map(
          (card) => `
          <article class="pdp-bento-card">
            <span class="pdp-bento-kicker">${card.kicker}</span>
            <h3>${card.title}</h3>
            <p>${card.desc}</p>
          </article>
        `
        )
        .join('');
    }

    if (pdpRelatedGrid) {
      const rotationItems = getCrossBrandRotation(product);
      pdpRelatedGrid.innerHTML = '';
      rotationItems.forEach((rel) => {
        const relSw = rel.swatches[0];
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'pdp-related-card';
        card.innerHTML = `
          <div class="pdp-related-media">
            <img src="${relSw.img}" alt="${rel.name}" class="model-photo" width="480" height="600" loading="lazy">
            <span class="cart-brand-pill pdp-related-badge" data-item-brand="${rel.brand}">${rel.brand.toUpperCase()}</span>
          </div>
          <div class="pdp-related-body">
            <span class="pdp-related-cat">${rel.category}</span>
            <h3 class="pdp-related-title">${rel.name}</h3>
            <span class="pdp-related-price">${formatINR(rel.price)}</span>
          </div>
        `;
        card.addEventListener('click', () => openProductPage(rel.id));
        pdpRelatedGrid.appendChild(card);
      });
    }

    syncPdpStageMode();
    syncPdpStockAndActions(product, specs);
  }

  function openProductPage(productOrId) {
    const resolvedId = typeof productOrId === 'string' ? productOrId : productOrId?.id;
    const product = PRODUCTS.find((p) => p.id === resolvedId);
    if (!product || !pdpViewEl) return;

    if (!pdpState.isOpen) {
      pdpState.returnBrand = state.channelMode === 'b2b' ? 'hub' : (state.brand || 'hub');
      pdpState.returnScrollY = window.scrollY || window.pageYOffset || 0;
    }

    const sel = getSelection(product);
    const sw = product.swatches[sel.swatchIdx] || product.swatches[0];

    pdpState.isOpen = true;
    pdpState.productId = product.id;
    pdpState.viewMode = 'studio';
    pdpState.selectedColor = sw.name;
    pdpState.selectedSize = sel.size || product.sizes[0] || 'M';
    pdpState.qty = 1;

    clearAllWorldTimers();
    worldSections.forEach((sec) => {
      sec.hidden = true;
      sec.classList.remove('is-active');
    });
    if (b2bPortalView) {
      b2bPortalView.hidden = true;
      b2bPortalView.classList.remove('is-active');
    }
    if (searchDialog?.open) searchDialog.close();
    if (journalDialog?.open) journalDialog.close();

    bodyEl.setAttribute('data-pdp-open', 'true');
    bodyEl.setAttribute('data-pdp-brand', product.brand);
    if (headerBrandLogo && state.brand === 'hub') {
      headerBrandLogo.src = './Images/logo_macho.png';
      headerBrandLogo.alt = 'Amul Macho';
      headerBrandLogo.hidden = false;
    }
    pdpViewEl.setAttribute('data-pdp-brand', product.brand);
    pdpViewEl.hidden = false;
    pdpViewEl.classList.add('is-active');

    renderPdpView();

    if (typeof window.scrollTo === 'function') {
      try {
        window.scrollTo({ top: 0, behavior: 'instant' });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  }

  function closeProductPage(restoreScroll = true) {
    if (!pdpState.isOpen || !pdpViewEl) return;
    pdpState.isOpen = false;
    pdpViewEl.hidden = true;
    pdpViewEl.classList.remove('is-active');
    bodyEl.removeAttribute('data-pdp-open');
    bodyEl.removeAttribute('data-pdp-brand');

    if (restoreScroll) {
      const targetBrand = pdpState.returnBrand || 'hub';
      const targetY = pdpState.returnScrollY || 0;
      setBrand(targetBrand, { scrollTop: false });
      const restoreFn = () => {
        if (typeof window.scrollTo === 'function') {
          window.scrollTo({ top: targetY, behavior: 'smooth' });
        }
      };
      if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(restoreFn);
      } else {
        restoreFn();
      }
    }
  }

  pdpBackBtn?.addEventListener('click', () => closeProductPage(true));

  pdpModeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      pdpState.viewMode = btn.dataset.pdpMode || 'studio';
      syncPdpStageMode();
    });
  });

  if (pdpStage && pdpStageImg) {
    pdpStage.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse' || pdpState.viewMode !== 'studio') return;
      const rect = pdpStage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const px = Math.max(10, Math.min(90, ((e.clientX - rect.left) / rect.width) * 100));
      const py = Math.max(10, Math.min(90, ((e.clientY - rect.top) / rect.height) * 100));
      pdpStageImg.style.transformOrigin = `${px.toFixed(1)}% ${py.toFixed(1)}%`;
      pdpStage.classList.add('is-studio-hover');
    });

    pdpStage.addEventListener('pointerleave', () => {
      pdpStage.classList.remove('is-studio-hover');
      pdpStageImg.style.transformOrigin = '50% 48%';
    });
  }

  pdpQtyMinus?.addEventListener('click', () => {
    if (pdpState.qty > 1) {
      pdpState.qty -= 1;
      if (pdpQtyVal) pdpQtyVal.textContent = String(pdpState.qty);
    }
  });

  pdpQtyPlus?.addEventListener('click', () => {
    pdpState.qty = Math.min(10, pdpState.qty + 1);
    if (pdpQtyVal) pdpQtyVal.textContent = String(pdpState.qty);
  });

  pdpAddCartBtn?.addEventListener('click', handlePdpPrimaryAction);
  pdpMobileAddBtn?.addEventListener('click', handlePdpPrimaryAction);

  pdpAddBoxBtn?.addEventListener('click', () => {
    const product = PRODUCTS.find((p) => p.id === pdpState.productId);
    if (!product || product.brand !== 'macho') return;
    addToPackBuilder(product.id, pdpState.selectedSize || 'M');
  });

  pdpRestockForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = PRODUCTS.find((p) => p.id === pdpState.productId);
    if (!product) return;
    const size = pdpState.selectedSize || 'XXL';
    const contactVal = (pdpRestockContact?.value || '').trim();
    const key = getRestockAlertKey(product.id, size);
    state.restockAlerts[key] = contactVal || true;
    renderPdpView();
    if (product.brand === 'macho') renderMachoGrid();
    else if (product.brand === 'sporto') renderSportoGrid();
    else if (product.brand === 'zoiro') renderZoiroGrid();
    showToast(`Restock alert active for ${size} — we'll notify you when Tirupur Hub replenishes.`);
  });

  pdpPincodeInput?.addEventListener('input', () => {
    pdpPincodeInput.value = pdpPincodeInput.value.replace(/\D/g, '').slice(0, 6);
  });

  pdpPincodeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const pin = (pdpPincodeInput?.value || '').trim();
    if (!pdpPincodeMsg) return;
    if (!/^[1-9][0-9]{5}$/.test(pin)) {
      pdpPincodeMsg.className = 'pdp-pincode-msg is-err';
      pdpPincodeMsg.textContent = 'Enter a valid 6-digit Indian pincode.';
      pdpPincodeMsg.hidden = false;
      return;
    }
    pdpPincodeMsg.className = 'pdp-pincode-msg is-ok';
    if (pin.startsWith('5') || pin.startsWith('6')) {
      pdpPincodeMsg.textContent = `\u2713 Deliverable to ${pin} \u00B7 Tirupur Hub Express (1\u20132 Days) \u00B7 Free Shipping & COD`;
    } else {
      pdpPincodeMsg.textContent = `\u2713 Deliverable to ${pin} \u00B7 Pan-India Air Dispatch (3\u20134 Days) \u00B7 Free Shipping & COD`;
    }
    pdpPincodeMsg.hidden = false;
  });

  /* --- 2. ZOIRO AUTO-CHANGING HERO, CATEGORY ACCORDION, SHOP THE LOOK & JOURNAL --- */
  const ZOIRO_HERO_SLIDES = [
    {
      eyebrow: 'LOUNGE · REST MEETS RELAXED MOTION',
      title: 'Quiet Poise.<br>Weightless Drape.',
      desc: 'Beechwood-derived Micro-Modal and long-staple cotton tailored for calm evenings, uninterrupted rest, and resort transitions.',
      img: './Images/zoiro_shorts.webp',
      alt: 'Zoiro Quiet Luxury Lounge relaxation wear',
      occasionFilter: 'Lounge',
      occasionLabel: 'Lounge Edit'
    },
    {
      eyebrow: 'WORK · TAILORED SERENITY',
      title: 'Structured Elegance.<br>Zero Collar Stiffness.',
      desc: 'Mercerized long-staple polos and invisible-hem essentials crafted for clean architectural lines from morning briefings to dinner.',
      img: './Images/zoiro_polo.webp',
      alt: 'Zoiro Work executive black polo',
      occasionFilter: 'Work',
      occasionLabel: 'Work Edit'
    },
    {
      eyebrow: 'TRAVEL · ZERO-CREASE DRAPE',
      title: 'Touch Down Sharp.<br>Pack Half the Bulk.',
      desc: 'Four-way recovery track silhouettes and breathable overshirt layers engineered to stay unwrinkled across red-eye flights.',
      img: './Images/zoiro_trakpants.webp',
      alt: 'Zoiro Travel sage crease-resistant track trousers',
      occasionFilter: 'Travel',
      occasionLabel: 'Travel Edit'
    }
  ];

  const zoiroHeroImg = document.getElementById('zoiro-hero-img');
  const zoiroHeroEyebrow = document.getElementById('zoiro-hero-eyebrow');
  const zoiroHeroTitle = document.getElementById('zoiro-hero-title');
  const zoiroHeroDesc = document.getElementById('zoiro-hero-desc');

  function setZoiroHeroSlide(idx) {
    state.zoiroHeroIdx = (idx + ZOIRO_HERO_SLIDES.length) % ZOIRO_HERO_SLIDES.length;
    const slide = ZOIRO_HERO_SLIDES[state.zoiroHeroIdx];
    if (zoiroHeroImg) {
      zoiroHeroImg.src = slide.img;
      zoiroHeroImg.alt = slide.alt;
    }
    if (zoiroHeroEyebrow) zoiroHeroEyebrow.textContent = slide.eyebrow;
    if (zoiroHeroTitle) zoiroHeroTitle.innerHTML = slide.title;
    if (zoiroHeroDesc) zoiroHeroDesc.textContent = slide.desc;

    document.querySelectorAll('[data-zoiro-slide]').forEach((dot) => {
      dot.setAttribute('aria-current', String(Number(dot.dataset.zoiroSlide) === state.zoiroHeroIdx));
    });
  }

  document.querySelectorAll('[data-zoiro-slide]').forEach((dot) => {
    dot.addEventListener('click', () => {
      setZoiroHeroSlide(Number(dot.dataset.zoiroSlide));
      syncWorldTimers();
    });
  });
  document.getElementById('zoiro-hero-prev')?.addEventListener('click', () => {
    setZoiroHeroSlide(state.zoiroHeroIdx - 1);
    syncWorldTimers();
  });
  document.getElementById('zoiro-hero-next')?.addEventListener('click', () => {
    setZoiroHeroSlide(state.zoiroHeroIdx + 1);
    syncWorldTimers();
  });
  document.getElementById('zoiro-hero-shop-btn')?.addEventListener('click', () => {
    const slide = ZOIRO_HERO_SLIDES[state.zoiroHeroIdx];
    state.zoiroSubCat = slide.occasionFilter;
    state.zoiroSubLabel = slide.occasionLabel;
    setZoiroFilter('All');
    document.getElementById('zoiro-catalog')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* Zoiro Asymmetric Editorial Silhouette Index */
  const ZOIRO_SILHOUETTES = [
    {
      cat: 'polos-tees',
      label: 'Polos & Tailored Knits',
      img: './Images/zoiro_polo2.webp',
      alt: 'Zoiro Mercerized Polos and Crew Tees editorial look',
      weight: '210 GSM Mercerized Modal',
      occasion: 'Executive Work & Evening'
    },
    {
      cat: 'active-pants',
      label: 'Refined Track & Active Pants',
      img: './Images/zoiro_trakpants2.webp',
      alt: 'Zoiro Refined Track and Active Pants editorial look',
      weight: '240 GSM 4-Way Recovery',
      occasion: 'Flights & Daily Commute'
    },
    {
      cat: 'travel-overshirts',
      label: 'Transit & Travel Overshirts',
      img: './Images/zoiro_polo.webp',
      alt: 'Zoiro Transit and Travel Overshirts editorial look',
      weight: '225 GSM Crease-Free Knit',
      occasion: 'Lounge & Airport Transit'
    },
    {
      cat: 'micro-modal-trunks',
      label: 'Second-Skin Micro-Modal Trunks',
      img: './Images/zoiro_t-shirt.webp',
      alt: 'Zoiro Second-Skin Micro-Modal innerwear preview',
      weight: '165 GSM Featherweight Modal',
      occasion: 'Second-Skin Everyday'
    },
    {
      cat: 'lounge-shorts',
      label: 'Resort & Lounge Shorts',
      img: './Images/zoiro_shorts.webp',
      alt: 'Zoiro Resort and Lounge Shorts editorial look',
      weight: '200 GSM Breathable Interlock',
      occasion: 'Weekend & Home Sanctuary'
    }
  ];

  const silhouetteRows = Array.from(document.querySelectorAll('#zoiro-silhouette-index [data-silhouette-idx]'));
  const silhouetteImgA = document.getElementById('silhouette-img-a');
  const silhouetteImgB = document.getElementById('silhouette-img-b');
  const silhouetteWeightEl = document.getElementById('silhouette-weight');
  const silhouetteOccasionEl = document.getElementById('silhouette-occasion');
  const silhouetteViewBtn = document.getElementById('silhouette-view-btn');
  let activeSilhouetteIdx = 0;
  let silhouetteFrontLayer = 'a';

  function setSilhouetteActive(idx, updateImage = true) {
    const safeIdx = Math.max(0, Math.min(ZOIRO_SILHOUETTES.length - 1, idx));
    const entry = ZOIRO_SILHOUETTES[safeIdx];
    if (!entry) return;
    activeSilhouetteIdx = safeIdx;

    silhouetteRows.forEach((row) => {
      const act = Number(row.dataset.silhouetteIdx) === safeIdx;
      row.classList.toggle('is-active', act);
      row.setAttribute('aria-selected', String(act));
    });

    if (silhouetteWeightEl) silhouetteWeightEl.textContent = entry.weight;
    if (silhouetteOccasionEl) silhouetteOccasionEl.textContent = entry.occasion;

    if (updateImage && silhouetteImgA && silhouetteImgB) {
      const nextImg = silhouetteFrontLayer === 'a' ? silhouetteImgB : silhouetteImgA;
      const prevImg = silhouetteFrontLayer === 'a' ? silhouetteImgA : silhouetteImgB;
      if (!nextImg.src.endsWith(entry.img.replace('./', ''))) {
        nextImg.src = entry.img;
      }
      nextImg.alt = entry.alt;
      nextImg.removeAttribute('aria-hidden');
      nextImg.classList.add('is-visible');
      prevImg.classList.remove('is-visible');
      prevImg.setAttribute('aria-hidden', 'true');
      silhouetteFrontLayer = silhouetteFrontLayer === 'a' ? 'b' : 'a';
    }
  }

  function jumpToSilhouetteCatalog(idx) {
    const entry = ZOIRO_SILHOUETTES[idx] || ZOIRO_SILHOUETTES[0];
    state.zoiroSubCat = entry.cat;
    state.zoiroSubLabel = entry.label;
    setZoiroFilter('All');
    document.getElementById('zoiro-catalog')?.scrollIntoView({ behavior: 'smooth' });
  }

  silhouetteRows.forEach((row) => {
    const idx = Number(row.dataset.silhouetteIdx);
    row.addEventListener('pointerenter', () => {
      if (idx !== activeSilhouetteIdx) setSilhouetteActive(idx);
    });
    row.addEventListener('focus', () => {
      if (idx !== activeSilhouetteIdx) setSilhouetteActive(idx);
    });
    row.addEventListener('click', () => {
      setSilhouetteActive(idx);
      jumpToSilhouetteCatalog(idx);
    });
  });

  silhouetteViewBtn?.addEventListener('click', () => jumpToSilhouetteCatalog(activeSilhouetteIdx));
  setSilhouetteActive(0, false);

  /* Zoiro Atelier Capsule Pairing Studio */
  const CAPSULE_SET_META = {
    'zo-polo': { name: 'Classic Executive Polo' },
    'zo-overshirt': { name: 'Knit Travel Overshirt' },
    'zo-tee': { name: 'Classic Crew Tee' },
    'zo-travel-pocket-tee': { name: 'Travel Utility Tee' },
    'zo-track': { name: 'All Day Track Pants' },
    'zo-work-active-pant': { name: 'Work Active Pant' },
    'zo-cargo-track': { name: 'Cargo Track Pant' },
    'zo-shorts': { name: 'Soft Cotton Lounge Shorts' }
  };

  const capsuleTopBtns = Array.from(document.querySelectorAll('[data-capsule-top]'));
  const capsuleBottomBtns = Array.from(document.querySelectorAll('[data-capsule-bottom]'));
  const capsuleSizesEl = document.getElementById('zoiro-capsule-sizes');
  const capsuleTopSwatchesEl = document.getElementById('zoiro-capsule-top-swatches');
  const capsuleBottomSwatchesEl = document.getElementById('zoiro-capsule-bottom-swatches');
  const capsuleTopColorName = document.getElementById('capsule-top-color-name');
  const capsuleBottomColorName = document.getElementById('capsule-bottom-color-name');
  const capsuleTopImg = document.getElementById('capsule-top-img');
  const capsuleBottomImg = document.getElementById('capsule-bottom-img');
  const capsuleSetLabel = document.getElementById('capsule-set-label');
  const capsuleSetTitle = document.getElementById('capsule-set-title');
  const capsuleRegularPrice = document.getElementById('capsule-regular-price');
  const capsuleDiscountAmt = document.getElementById('capsule-discount-amt');
  const capsuleFinalPrice = document.getElementById('capsule-final-price');
  const capsuleAddBtn = document.getElementById('zoiro-capsule-add-btn');

  function renderZoiroCapsuleStudio() {
    if (!capsuleSetTitle) return;
    const topProd = PRODUCTS.find((p) => p.id === state.zoiroCapsuleTop) || PRODUCTS.find((p) => p.id === 'zo-polo');
    const bottomProd = PRODUCTS.find((p) => p.id === state.zoiroCapsuleBottom) || PRODUCTS.find((p) => p.id === 'zo-track');
    if (!topProd || !bottomProd) return;

    const topSwIdx = Math.max(0, Math.min(topProd.swatches.length - 1, state.zoiroCapsuleTopSwatch || 0));
    const bottomSwIdx = Math.max(0, Math.min(bottomProd.swatches.length - 1, state.zoiroCapsuleBottomSwatch || 0));
    state.zoiroCapsuleTopSwatch = topSwIdx;
    state.zoiroCapsuleBottomSwatch = bottomSwIdx;

    const topSw = topProd.swatches[topSwIdx] || topProd.swatches[0];
    const bottomSw = bottomProd.swatches[bottomSwIdx] || bottomProd.swatches[0];
    const topName = (CAPSULE_SET_META[topProd.id] && CAPSULE_SET_META[topProd.id].name) || topProd.name;
    const bottomName = (CAPSULE_SET_META[bottomProd.id] && CAPSULE_SET_META[bottomProd.id].name) || bottomProd.name;

    capsuleTopBtns.forEach((b) => {
      const act = b.dataset.capsuleTop === topProd.id;
      b.classList.toggle('is-active', act);
      b.setAttribute('aria-checked', String(act));
    });
    capsuleBottomBtns.forEach((b) => {
      const act = b.dataset.capsuleBottom === bottomProd.id;
      b.classList.toggle('is-active', act);
      b.setAttribute('aria-checked', String(act));
    });

    if (capsuleTopImg) {
      capsuleTopImg.src = topSw.img;
      capsuleTopImg.alt = `${topName} — ${topSw.name}`;
    }
    if (capsuleBottomImg) {
      capsuleBottomImg.src = bottomSw.img;
      capsuleBottomImg.alt = `${bottomName} — ${bottomSw.name}`;
    }
    if (capsuleTopColorName) capsuleTopColorName.textContent = topSw.name;
    if (capsuleBottomColorName) capsuleBottomColorName.textContent = bottomSw.name;

    if (capsuleTopSwatchesEl) {
      capsuleTopSwatchesEl.innerHTML = topProd.swatches
        .map(
          (s, idx) =>
            `<button type="button" class="swatch-btn" data-cap-top-sw="${idx}" aria-label="${topName} color ${s.name}" aria-pressed="${idx === topSwIdx ? 'true' : 'false'}" style="--swatch-hex: ${s.hex};"></button>`
        )
        .join('');
      capsuleTopSwatchesEl.querySelectorAll('[data-cap-top-sw]').forEach((b) => {
        b.addEventListener('click', () => {
          state.zoiroCapsuleTopSwatch = Number(b.dataset.capTopSw);
          renderZoiroCapsuleStudio();
        });
      });
    }

    if (capsuleBottomSwatchesEl) {
      capsuleBottomSwatchesEl.innerHTML = bottomProd.swatches
        .map(
          (s, idx) =>
            `<button type="button" class="swatch-btn" data-cap-bot-sw="${idx}" aria-label="${bottomName} color ${s.name}" aria-pressed="${idx === bottomSwIdx ? 'true' : 'false'}" style="--swatch-hex: ${s.hex};"></button>`
        )
        .join('');
      capsuleBottomSwatchesEl.querySelectorAll('[data-cap-bot-sw]').forEach((b) => {
        b.addEventListener('click', () => {
          state.zoiroCapsuleBottomSwatch = Number(b.dataset.capBotSw);
          renderZoiroCapsuleStudio();
        });
      });
    }

    const regular = topProd.price + bottomProd.price;
    const discount = Math.round(regular * 0.1);
    const finalPrice = regular - discount;

    if (capsuleSetLabel) {
      const mood = bottomProd.id === 'zo-shorts' ? 'PLAY & RESORT CAPSULE' : 'WORK & TRANSIT CAPSULE';
      capsuleSetLabel.textContent = mood;
    }
    capsuleSetTitle.textContent = `${topName} (${topSw.name}) + ${bottomName} (${bottomSw.name})`;
    if (capsuleRegularPrice) capsuleRegularPrice.textContent = formatINR(regular);
    if (capsuleDiscountAmt) capsuleDiscountAmt.textContent = `-${formatINR(discount)}`;
    if (capsuleFinalPrice) capsuleFinalPrice.textContent = formatINR(finalPrice);

    if (capsuleSizesEl) {
      capsuleSizesEl.innerHTML = SIZES_SCALE.map(
        (sz) => `<button type="button" class="size-pill" data-capsule-size="${sz}" aria-pressed="${sz === state.zoiroCapsuleSize ? 'true' : 'false'}">${sz}</button>`
      ).join('');
      capsuleSizesEl.querySelectorAll('[data-capsule-size]').forEach((b) => {
        b.addEventListener('click', () => {
          state.zoiroCapsuleSize = b.dataset.capsuleSize;
          renderZoiroCapsuleStudio();
        });
      });
    }
  }

  capsuleTopBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.zoiroCapsuleTop = btn.dataset.capsuleTop;
      state.zoiroCapsuleTopSwatch = 0;
      renderZoiroCapsuleStudio();
    });
  });

  capsuleBottomBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      state.zoiroCapsuleBottom = btn.dataset.capsuleBottom;
      state.zoiroCapsuleBottomSwatch = 0;
      renderZoiroCapsuleStudio();
    });
  });

  capsuleAddBtn?.addEventListener('click', () => {
    const topProd = PRODUCTS.find((p) => p.id === state.zoiroCapsuleTop);
    const bottomProd = PRODUCTS.find((p) => p.id === state.zoiroCapsuleBottom);
    const sz = state.zoiroCapsuleSize || 'M';
    if (topProd && bottomProd) {
      addProductToCart(topProd, sz, state.zoiroCapsuleTopSwatch || 0, false);
      addProductToCart(bottomProd, sz, state.zoiroCapsuleBottomSwatch || 0, false);
      showToast(`Added 2-piece Zoiro Capsule (${sz} · 10% Pairing Privilege)`);
      openCartDrawer();
    }
  });

  /* Zoiro Journal Reader Modal */
  const ZOIRO_JOURNAL_ARTICLES = [
    {
      title: 'How to Wear a Polo',
      meta: 'STYLE ARCHITECTURE · 4 MIN READ',
      img: './Images/zoiro_polo2.webp',
      lead: 'A finely knit polo bridges boardroom composure and relaxed coastal dining when shoulder seams sit clean and the collar frames without flaring.',
      bullets: [
        'Pair dark Obsidian Micro-Modal polos with tapered tailored trousers for zero-tie executive meetings.',
        'Choose structured mercerized plackets that retain vertical drape beneath unlined travel blazers.',
        'Keep sleeve cuffs resting midway down the bicep for crisp proportion with pleated shorts.'
      ],
      productId: 'zo-polo'
    },
    {
      title: 'Athleisure vs Activewear',
      meta: 'WARDROBE THEORY · 3 MIN READ',
      img: './Images/sporto_track.webp',
      lead: 'Understanding when to deploy high-compression quick-dry Sporto gear versus quiet Zoiro beechwood knits transforms daily wardrobe endurance.',
      bullets: [
        'Reserve Sporto Instacool mesh and Shapelock compression exclusively for elevated heart-rate sessions.',
        'Transition cleanly to Zoiro 4-Way Micro-Modal track trousers when moving from workout studios to client lunches.',
        'Match innerwear yarn density to activity intensity so waistbands never trap residual dampness.'
      ],
      productId: 'zo-track'
    },
    {
      title: 'What to Wear on a Long Flight',
      meta: 'TRANSIT EDIT · 5 MIN READ',
      img: './Images/zoiro_trakpants.webp',
      lead: 'Cabin dryness paired with humid arrival terminals demands multi-climate natural recovery textiles that stay crisp through 8 hours of seated transit.',
      bullets: [
        'Start with a moisture-releasing Micro-Modal base trunk to avoid seat friction on red-eye sectors.',
        'Combine All Day Track Pants with our Ivory Travel Knit Polo for effortless lounge-to-taxi polish.',
        'Skip starchy poplins—beechwood fibers shed fold creases within 10 minutes of unpacking.'
      ],
      productId: 'zo-overshirt'
    },
    {
      title: 'All-Day Comfort Guide',
      meta: 'TEXTILE LAB · 4 MIN READ',
      img: './Images/zoiro_shorts.webp',
      lead: 'Comfort across an Indian 14-hour workday begins at the micron gauge of inner layers—before a shirt or chino is even chosen.',
      bullets: [
        'Beechwood Micro-Modal fibers spin 3x finer than conventional cotton, cutting surface abrasion.',
        'Ventilated interlock shorts prevent heat buildup during humid coastal evenings.',
        'Prioritize zero-pilling enzyme finishes so lounge and base silhouettes look day-one sharp after 40 washes.'
      ],
      productId: 'zo-shorts'
    }
  ];

  const journalDialog = document.getElementById('journal-dialog');
  const journalDialogTitle = document.getElementById('journal-dialog-title');
  const journalCloseBtn = document.getElementById('journal-close-btn');
  const journalTabRow = document.getElementById('journal-tab-row');
  const journalReaderImg = document.getElementById('journal-reader-img');
  const journalReaderMeta = document.getElementById('journal-reader-meta');
  const journalReaderLead = document.getElementById('journal-reader-lead');
  const journalReaderBullets = document.getElementById('journal-reader-bullets');
  const journalShopPieceBtn = document.getElementById('journal-shop-piece-btn');

  function renderJournalModal() {
    const art = ZOIRO_JOURNAL_ARTICLES[state.journalIdx] || ZOIRO_JOURNAL_ARTICLES[0];
    if (!journalDialog || !art) return;

    journalDialogTitle.textContent = art.title;
    journalReaderImg.src = art.img;
    journalReaderImg.alt = art.title;
    journalReaderMeta.textContent = art.meta;
    journalReaderLead.textContent = art.lead;
    journalReaderBullets.innerHTML = art.bullets.map((b) => `<li>${b}</li>`).join('');

    journalTabRow.innerHTML = ZOIRO_JOURNAL_ARTICLES.map(
      (a, idx) => `
      <button type="button" role="tab" class="filter-pill ${idx === state.journalIdx ? 'is-active' : ''}" data-journal-tab="${idx}" aria-selected="${idx === state.journalIdx ? 'true' : 'false'}">${a.title}</button>
    `
    ).join('');

    journalTabRow.querySelectorAll('[data-journal-tab]').forEach((tab) => {
      tab.addEventListener('click', () => {
        state.journalIdx = Number(tab.dataset.journalTab);
        renderJournalModal();
      });
    });
  }

  function openJournalModal(idx = 0) {
    state.journalIdx = idx;
    renderJournalModal();
    if (typeof journalDialog.showModal === 'function') {
      if (!journalDialog.open) journalDialog.showModal();
    } else {
      journalDialog.setAttribute('open', '');
    }
  }

  document.querySelectorAll('[data-journal-idx]').forEach((card) => {
    card.addEventListener('click', () => openJournalModal(Number(card.dataset.journalIdx)));
  });
  document.getElementById('zoiro-journal-all-btn')?.addEventListener('click', () => openJournalModal(0));
  journalCloseBtn?.addEventListener('click', () => journalDialog.close());
  journalDialog?.addEventListener('click', (e) => {
    if (e.target === journalDialog) journalDialog.close();
  });
  journalShopPieceBtn?.addEventListener('click', () => {
    const art = ZOIRO_JOURNAL_ARTICLES[state.journalIdx];
    const prod = PRODUCTS.find((p) => p.id === art.productId);
    if (journalDialog.open) journalDialog.close();
    if (prod && typeof openProductPage === 'function') openProductPage(prod.id);
  });

  /* --- 3. SPORTO SPLIT KINETIC HERO & HORIZONTAL ACTIVITY RAIL --- */
  const SPORTO_HERO_SLIDES = [
    {
      eyebrow: '06:00 AM · DAWN RUN EDIT',
      title: 'DAWN PACE.<br>ZERO DRAG.',
      desc: 'Micro-perforated Instacool mesh sheds skin moisture 45% faster through road sprints and high-humidity sessions.',
      img: './Images/sporto_t-shirt.webp',
      pill: 'INSTACOOL · 4-WAY STRETCH',
      activity: 'Running'
    },
    {
      eyebrow: '07:30 AM · HEAVY STRENGTH SESSION',
      title: 'HEAVY SETS.<br>INSTACOOL FLOW.',
      desc: 'Contrast Pro Gym Vests built with ergonomic armhole mobility and double-needle seam lock for explosive lifts.',
      img: './Images/sporto_gymvests4.webp',
      pill: 'GYM PRO · SWEAT-WICK TECH',
      activity: 'Gym'
    },
    {
      eyebrow: '05:00 PM · STREET ATHLEISURE',
      title: 'TRACK TO STREET<br>IN 4-WAY STRETCH.',
      desc: 'Tapered kinetic track pants with contrast side striping and anti-roll Shapelock elastic built for nonstop city tempo.',
      img: './Images/sporto_track_volt.jpg',
      pill: 'SHAPELOCK · VELOCITY CUT',
      activity: 'Athleisure'
    }
  ];

  const sportoHeroImg = document.getElementById('sporto-hero-img');
  const sportoHeroPill = document.getElementById('sporto-hero-pill');
  const sportoHeroEyebrow = document.getElementById('sporto-hero-eyebrow');
  const sportoHeroTitle = document.getElementById('sporto-hero-title');
  const sportoHeroDesc = document.getElementById('sporto-hero-desc');

  function setSportoHeroSlide(idx) {
    state.sportoHeroIdx = (idx + SPORTO_HERO_SLIDES.length) % SPORTO_HERO_SLIDES.length;
    const slide = SPORTO_HERO_SLIDES[state.sportoHeroIdx];
    if (sportoHeroImg) {
      sportoHeroImg.src = slide.img;
      sportoHeroImg.alt = slide.title.replace('<br>', ' ');
    }
    if (sportoHeroPill) sportoHeroPill.textContent = slide.pill;
    if (sportoHeroEyebrow) sportoHeroEyebrow.textContent = slide.eyebrow;
    if (sportoHeroTitle) sportoHeroTitle.innerHTML = slide.title;
    if (sportoHeroDesc) sportoHeroDesc.textContent = slide.desc;

    document.querySelectorAll('[data-sporto-slide]').forEach((btn) => {
      const act = Number(btn.dataset.sportoSlide) === state.sportoHeroIdx;
      btn.classList.toggle('is-active', act);
      btn.setAttribute('aria-pressed', String(act));
    });
  }

  document.querySelectorAll('[data-sporto-slide]').forEach((btn) => {
    btn.addEventListener('click', () => {
      setSportoHeroSlide(Number(btn.dataset.sportoSlide));
      syncWorldTimers();
    });
  });
  document.getElementById('sporto-hero-prev')?.addEventListener('click', () => {
    setSportoHeroSlide(state.sportoHeroIdx - 1);
    syncWorldTimers();
  });
  document.getElementById('sporto-hero-next')?.addEventListener('click', () => {
    setSportoHeroSlide(state.sportoHeroIdx + 1);
    syncWorldTimers();
  });
  document.getElementById('sporto-explore-cta')?.addEventListener('click', () => {
    const slide = SPORTO_HERO_SLIDES[state.sportoHeroIdx];
    setSportoRailActivity(slide.activity);
    document.getElementById('sporto-catalog')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* Sporto Scroll-Linked Horizontal "Shop by Activity" Rail */
  const sportoRailTrack = document.getElementById('sporto-rail-track');
  function setSportoRailActivity(activity) {
    state.sportoActivitySub = activity;
    document.querySelectorAll('#sporto-rail-track [data-rail-activity]').forEach((c) => {
      c.classList.toggle('is-active', c.dataset.railActivity === activity);
    });
    setSportoActivity('All');
  }

  if (sportoRailTrack) {
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;
    let draggedDist = 0;

    sportoRailTrack.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      isDragging = true;
      draggedDist = 0;
      startX = e.clientX;
      startScroll = sportoRailTrack.scrollLeft;
      sportoRailTrack.classList.add('is-dragging');
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      draggedDist = Math.abs(dx);
      sportoRailTrack.scrollLeft = startScroll - dx;
    });

    window.addEventListener('pointerup', () => {
      if (!isDragging) return;
      isDragging = false;
      sportoRailTrack.classList.remove('is-dragging');
    });

    sportoRailTrack.querySelectorAll('[data-rail-activity]').forEach((card) => {
      card.addEventListener('click', (e) => {
        if (draggedDist > 8) {
          e.preventDefault();
          return;
        }
        setSportoRailActivity(card.dataset.railActivity);
        document.getElementById('sporto-catalog')?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    document.getElementById('sporto-rail-prev')?.addEventListener('click', () => {
      sportoRailTrack.scrollBy({ left: -320, behavior: 'smooth' });
    });
    document.getElementById('sporto-rail-next')?.addEventListener('click', () => {
      sportoRailTrack.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  document.querySelectorAll('[data-sporto-rail-explore]').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.getElementById('sporto-catalog')?.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* --- 4. AMUL MACHO HERITAGE HERO & AUTO-CYCLING OCCASIONS --- */
  const MACHO_HERO_SLIDES = [
    {
      eyebrow: 'EVERYDAY · BADE AARAM SE',
      title: 'Iconic Ease.<br>Unbroken Command.',
      desc: "Extra-long-staple 100% super-combed cotton trunks, vests, and briefs engineered for India's longest workdays.",
      img: './Images/macho.webp'
    },
    {
      eyebrow: 'SHAPELOCK · ZERO ROLL WAISTBAND',
      title: 'Locked-In Hold.<br>Zero Pinch Marks.',
      desc: 'Micro-brushed jacquard elastic sits flat from morning commute to late evening without rolling or chafing.',
      img: './Images/macho-brief.webp'
    },
    {
      eyebrow: 'COLLECTOR BOX · BUILD YOUR 5-PACK',
      title: 'Curate Five Picks.<br>Unlock 20% Value.',
      desc: 'Mix heritage red trunks, ribbed black vests, and stealth briefs inside our light Collector Studio below.',
      img: './Images/macho-combo.webp'
    }
  ];

  const machoHeroImg = document.getElementById('macho-hero-img');
  const machoHeroEyebrow = document.getElementById('macho-hero-eyebrow');
  const machoHeroTitle = document.getElementById('macho-hero-title');
  const machoHeroDesc = document.getElementById('macho-hero-desc');

  function setMachoHeroSlide(idx) {
    state.machoHeroIdx = (idx + MACHO_HERO_SLIDES.length) % MACHO_HERO_SLIDES.length;
    const slide = MACHO_HERO_SLIDES[state.machoHeroIdx];
    if (machoHeroImg) machoHeroImg.src = slide.img;
    if (machoHeroEyebrow) machoHeroEyebrow.textContent = slide.eyebrow;
    if (machoHeroTitle) machoHeroTitle.innerHTML = slide.title;
    if (machoHeroDesc) machoHeroDesc.textContent = slide.desc;

    document.querySelectorAll('[data-macho-slide]').forEach((dot) => {
      dot.setAttribute('aria-current', String(Number(dot.dataset.machoSlide) === state.machoHeroIdx));
    });
  }

  document.querySelectorAll('[data-macho-slide]').forEach((dot) => {
    dot.addEventListener('click', () => {
      setMachoHeroSlide(Number(dot.dataset.machoSlide));
      syncWorldTimers();
    });
  });
  document.getElementById('macho-hero-prev')?.addEventListener('click', () => {
    setMachoHeroSlide(state.machoHeroIdx - 1);
    syncWorldTimers();
  });
  document.getElementById('macho-hero-next')?.addEventListener('click', () => {
    setMachoHeroSlide(state.machoHeroIdx + 1);
    syncWorldTimers();
  });

  const machoDeckStage = document.getElementById('macho-deck-stage');
  const machoDeckCards = Array.from(document.querySelectorAll('#macho-deck-track [data-deck-idx]'));
  const machoDeckDots = Array.from(document.querySelectorAll('#macho-deck-dots [data-deck-dot]'));
  const machoDeckPrev = document.getElementById('macho-deck-prev');
  const machoDeckNext = document.getElementById('macho-deck-next');
  let machoDeckHoverTimer = null;

  function setMachoDeckActive(idx) {
    if (!machoDeckCards.length) return;
    const clamped = Math.max(0, Math.min(machoDeckCards.length - 1, Number(idx)));
    state.machoDeckIndex = clamped;
    machoDeckCards.forEach((card, index) => {
      const offset = index - clamped;
      const isCenter = offset === 0;
      card.dataset.offset = String(offset);
      card.classList.toggle('is-center', isCenter);
      if (isCenter) {
        card.setAttribute('aria-current', 'true');
      } else {
        card.removeAttribute('aria-current');
      }
    });
    machoDeckDots.forEach((dot) => {
      const active = Number(dot.dataset.deckDot) === clamped;
      dot.classList.toggle('is-active', active);
      dot.setAttribute('aria-selected', String(active));
    });
    if (machoDeckPrev) machoDeckPrev.disabled = clamped === 0;
    if (machoDeckNext) machoDeckNext.disabled = clamped === machoDeckCards.length - 1;
  }

  function shopMachoDeckCategory(categoryName) {
    if (!categoryName) return;
    state.machoCategorySub = categoryName;
    setMachoFilter('All');
    document.getElementById('macho-catalog')?.scrollIntoView({ behavior: 'smooth' });
  }

  machoDeckCards.forEach((card) => {
    const idx = Number(card.dataset.deckIdx);
    const shopBtn = card.querySelector('[data-deck-shop]');

    card.addEventListener('pointerenter', () => {
      if (idx === state.machoDeckIndex) return;
      clearTimeout(machoDeckHoverTimer);
      machoDeckHoverTimer = setTimeout(() => setMachoDeckActive(idx), 120);
    });

    card.addEventListener('pointerleave', () => {
      clearTimeout(machoDeckHoverTimer);
    });

    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-deck-shop]')) return;
      if (idx !== state.machoDeckIndex) {
        setMachoDeckActive(idx);
      } else {
        shopMachoDeckCategory(card.dataset.machoCat);
      }
    });

    shopBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      shopMachoDeckCategory(shopBtn.dataset.deckShop || card.dataset.machoCat);
    });
  });

  machoDeckDots.forEach((dot) => {
    dot.addEventListener('click', () => setMachoDeckActive(Number(dot.dataset.deckDot)));
  });

  machoDeckPrev?.addEventListener('click', () => setMachoDeckActive(state.machoDeckIndex - 1));
  machoDeckNext?.addEventListener('click', () => setMachoDeckActive(state.machoDeckIndex + 1));

  if (machoDeckStage) {
    machoDeckStage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setMachoDeckActive(state.machoDeckIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setMachoDeckActive(state.machoDeckIndex + 1);
      } else if (e.key === 'Enter' && e.target === machoDeckStage) {
        const activeCard = machoDeckCards[state.machoDeckIndex];
        shopMachoDeckCategory(activeCard?.dataset.machoCat);
      }
    });

    let deckSwipeStartX = null;
    let deckSwipeStartY = null;
    machoDeckStage.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      deckSwipeStartX = e.clientX;
      deckSwipeStartY = e.clientY;
    });
    machoDeckStage.addEventListener('pointerup', (e) => {
      if (deckSwipeStartX === null) return;
      const dx = e.clientX - deckSwipeStartX;
      const dy = Math.abs(e.clientY - (deckSwipeStartY ?? e.clientY));
      deckSwipeStartX = null;
      deckSwipeStartY = null;
      if (Math.abs(dx) >= 40 && dy < 70) {
        setMachoDeckActive(state.machoDeckIndex + (dx < 0 ? 1 : -1));
      }
    });
  }

  /* --- 5. MACHO 3-TAB SPEC SHOWCASE (BUILT FOR EVERYDAY EASE) --- */
  const MACHO_SPEC_PILLARS = [
    {
      badge: '01 · FIBER PURITY',
      kicker: '01 · TIRUPUR COMBED YARN',
      title: '100% Super-Combed Cotton',
      desc: 'Long-staple yarns combed in our Tirupur mills remove short lint fibers for whisper-smooth skin feel and high-humidity airflow across 14-hour days.',
      img: './Images/macho_vests.webp',
      alt: 'Amul Macho 100% Super-Combed Cotton vest',
      filterTag: 'Best Sellers',
      scores: { soft: 96, grip: 91, breath: 97 }
    },
    {
      badge: '02 · ZERO ROLL ELASTIC',
      kicker: '02 · JACQUARD WAISTBAND',
      title: 'Signature Jacquard Waistband',
      desc: 'Micro-brushed tagless innerwear waistband anchors cleanly without rolling, folding, or leaving skin marks beneath tailored work trousers.',
      img: './Images/macho.webp',
      alt: 'Amul Macho Signature Jacquard Waistband trunks',
      filterTag: 'Brand Choice',
      scores: { soft: 93, grip: 98, breath: 92 }
    },
    {
      badge: '03 · INDIAN PROPORTIONS',
      kicker: '03 · CONTOURED ALL-DAY FIT',
      title: 'Contoured All-Day Fit',
      desc: 'Twin-layer anatomical pouch and flatlock seams adapt seamlessly from morning commute through gym warmups and evening lounge.',
      img: './Images/macho-brief.webp',
      alt: 'Amul Macho Contoured All-Day Fit briefs',
      filterTag: 'Most Popular',
      scores: { soft: 95, grip: 95, breath: 96 }
    }
  ];

  const machoSpecTabs = Array.from(document.querySelectorAll('[data-macho-tab]'));
  const machoSpecImg = document.getElementById('macho-spec-img');
  const machoSpecBadge = document.getElementById('macho-spec-badge');
  const machoSpecKicker = document.getElementById('macho-spec-kicker');
  const machoSpecTitle = document.getElementById('macho-spec-title');
  const machoSpecDesc = document.getElementById('macho-spec-desc');
  const machoScoreSoft = document.getElementById('macho-score-soft');
  const machoScoreGrip = document.getElementById('macho-score-grip');
  const machoScoreBreath = document.getElementById('macho-score-breath');
  const machoBarSoft = document.getElementById('macho-bar-soft');
  const machoBarGrip = document.getElementById('macho-bar-grip');
  const machoBarBreath = document.getElementById('macho-bar-breath');
  const machoSpecShopBtn = document.getElementById('macho-spec-shop-btn');

  function setMachoSpecTab(idx) {
    state.machoSpecTab = idx;
    const item = MACHO_SPEC_PILLARS[idx] || MACHO_SPEC_PILLARS[0];
    machoSpecTabs.forEach((btn) => {
      const act = Number(btn.dataset.machoTab) === idx;
      btn.classList.toggle('is-active', act);
      btn.setAttribute('aria-selected', String(act));
    });
    if (machoSpecImg) {
      machoSpecImg.src = item.img;
      machoSpecImg.alt = item.alt;
    }
    if (machoSpecBadge) machoSpecBadge.textContent = item.badge;
    if (machoSpecKicker) machoSpecKicker.textContent = item.kicker;
    if (machoSpecTitle) machoSpecTitle.textContent = item.title;
    if (machoSpecDesc) machoSpecDesc.textContent = item.desc;
    if (machoScoreSoft) machoScoreSoft.textContent = `${item.scores.soft} / 100`;
    if (machoScoreGrip) machoScoreGrip.textContent = `${item.scores.grip} / 100`;
    if (machoScoreBreath) machoScoreBreath.textContent = `${item.scores.breath} / 100`;
    if (machoBarSoft) machoBarSoft.style.width = `${item.scores.soft}%`;
    if (machoBarGrip) machoBarGrip.style.width = `${item.scores.grip}%`;
    if (machoBarBreath) machoBarBreath.style.width = `${item.scores.breath}%`;
  }

  machoSpecTabs.forEach((btn) => {
    btn.addEventListener('click', () => setMachoSpecTab(Number(btn.dataset.machoTab)));
  });

  machoSpecShopBtn?.addEventListener('click', () => {
    const item = MACHO_SPEC_PILLARS[state.machoSpecTab] || MACHO_SPEC_PILLARS[0];
    state.machoCategorySub = null;
    setMachoFilter(item.filterTag);
    document.getElementById('macho-catalog')?.scrollIntoView({ behavior: 'smooth' });
  });

  /* --- 6. SPORTO VELOCITY LAB · WORKOUT CONDITION SIMULATOR --- */
  const SPORTO_SIM_CONDITIONS = [
    {
      badge: 'ENVIRONMENT 01 · 82% RH TROPICAL RUN',
      title: 'Coastal Humidity Run Profile',
      desc: 'High-airflow micro-perforated knit sheds perspiration rapidly before damp cling can slow your stride cadence.',
      kitHeading: 'Dawn Pace Sprint Kit',
      meters: { evap: 97, recovery: 94, hold: 92 },
      pieces: [
        { id: 'sp-tee-active', slot: 'UPPER', swatchIdx: 0 },
        { id: 'sp-track-velocity', slot: 'LOWER', swatchIdx: 0 }
      ]
    },
    {
      badge: 'ENVIRONMENT 02 · HEAVY COMPOUND LIFTS',
      title: 'Heavy Barbell Session Profile',
      desc: 'Reinforced elastane bounce-back supports deep squats and overhead presses while Shapelock waistbands stay locked.',
      kitHeading: 'Iron Core Gym Kit',
      meters: { evap: 93, recovery: 98, hold: 97 },
      pieces: [
        { id: 'sp-gym-vest', slot: 'UPPER', swatchIdx: 3 },
        { id: 'sp-brief-shapelock', slot: 'BASE SUPPORT', swatchIdx: 0 }
      ]
    },
    {
      badge: 'ENVIRONMENT 03 · 12-HOUR TRANSIT & STREET',
      title: 'All-Day Street Travel Profile',
      desc: 'Wrinkle-resistant marathon knit pairs dry-touch softness with tapered velocity styling from airport concourse to dinner.',
      kitHeading: 'Street Velocity Travel Kit',
      meters: { evap: 91, recovery: 96, hold: 95 },
      pieces: [
        { id: 'sp-marathon-tee', slot: 'UPPER', swatchIdx: 0 },
        { id: 'sp-track-velocity', slot: 'LOWER', swatchIdx: 1 }
      ]
    }
  ];

  const sportoSimTabs = Array.from(document.querySelectorAll('[data-sporto-env]'));
  const sportoSimBadge = document.getElementById('sporto-sim-badge');
  const sportoSimTitle = document.getElementById('sporto-sim-title');
  const sportoSimDesc = document.getElementById('sporto-sim-desc');
  const sportoMEvap = document.getElementById('sporto-m-evap');
  const sportoMRecovery = document.getElementById('sporto-m-recovery');
  const sportoMHold = document.getElementById('sporto-m-hold');
  const sportoBarEvap = document.getElementById('sporto-bar-evap');
  const sportoBarRecovery = document.getElementById('sporto-bar-recovery');
  const sportoBarHold = document.getElementById('sporto-bar-hold');
  const sportoKitHeading = document.getElementById('sporto-kit-heading');
  const sportoKitPrice = document.getElementById('sporto-kit-price');
  const sportoKitImg1 = document.getElementById('sporto-kit-img-1');
  const sportoKitName1 = document.getElementById('sporto-kit-name-1');
  const sportoKitPrice1 = document.getElementById('sporto-kit-price-1');
  const sportoKitImg2 = document.getElementById('sporto-kit-img-2');
  const sportoKitName2 = document.getElementById('sporto-kit-name-2');
  const sportoKitPrice2 = document.getElementById('sporto-kit-price-2');
  const sportoSimSizes = document.getElementById('sporto-sim-sizes');
  const sportoSimAddBtn = document.getElementById('sporto-sim-add-btn');

  function renderSportoSimulator(idx = state.sportoSimEnv) {
    state.sportoSimEnv = idx;
    const cond = SPORTO_SIM_CONDITIONS[idx] || SPORTO_SIM_CONDITIONS[0];
    sportoSimTabs.forEach((b) => {
      const act = Number(b.dataset.sportoEnv) === idx;
      b.classList.toggle('is-active', act);
      b.setAttribute('aria-selected', String(act));
    });
    if (sportoSimBadge) sportoSimBadge.textContent = cond.badge;
    if (sportoSimTitle) sportoSimTitle.textContent = cond.title;
    if (sportoSimDesc) sportoSimDesc.textContent = cond.desc;
    if (sportoMEvap) sportoMEvap.textContent = `${cond.meters.evap}%`;
    if (sportoMRecovery) sportoMRecovery.textContent = `${cond.meters.recovery}%`;
    if (sportoMHold) sportoMHold.textContent = `${cond.meters.hold}%`;
    if (sportoBarEvap) sportoBarEvap.style.width = `${cond.meters.evap}%`;
    if (sportoBarRecovery) sportoBarRecovery.style.width = `${cond.meters.recovery}%`;
    if (sportoBarHold) sportoBarHold.style.width = `${cond.meters.hold}%`;

    const p1 = PRODUCTS.find((p) => p.id === cond.pieces[0].id);
    const p2 = PRODUCTS.find((p) => p.id === cond.pieces[1].id);
    if (p1 && p2) {
      const sw1 = p1.swatches[cond.pieces[0].swatchIdx] || p1.swatches[0];
      const sw2 = p2.swatches[cond.pieces[1].swatchIdx] || p2.swatches[0];
      if (sportoKitHeading) sportoKitHeading.textContent = cond.kitHeading;
      if (sportoKitPrice) sportoKitPrice.textContent = formatINR(p1.price + p2.price);
      if (sportoKitImg1) {
        sportoKitImg1.src = sw1.img;
        sportoKitImg1.alt = p1.name;
      }
      if (sportoKitName1) sportoKitName1.textContent = p1.name;
      if (sportoKitPrice1) sportoKitPrice1.textContent = formatINR(p1.price);
      if (sportoKitImg2) {
        sportoKitImg2.src = sw2.img;
        sportoKitImg2.alt = p2.name;
      }
      if (sportoKitName2) sportoKitName2.textContent = p2.name;
      if (sportoKitPrice2) sportoKitPrice2.textContent = formatINR(p2.price);
    }

    if (sportoSimSizes) {
      sportoSimSizes.innerHTML = SIZES_SCALE.map(
        (sz) => `<button type="button" class="size-pill" data-sim-size="${sz}" aria-pressed="${sz === state.sportoSimSize ? 'true' : 'false'}">${sz}</button>`
      ).join('');
      sportoSimSizes.querySelectorAll('[data-sim-size]').forEach((b) => {
        b.addEventListener('click', () => {
          state.sportoSimSize = b.dataset.simSize;
          renderSportoSimulator(state.sportoSimEnv);
        });
      });
    }
  }

  sportoSimTabs.forEach((btn) => {
    btn.addEventListener('click', () => renderSportoSimulator(Number(btn.dataset.sportoEnv)));
  });

  sportoSimAddBtn?.addEventListener('click', () => {
    const cond = SPORTO_SIM_CONDITIONS[state.sportoSimEnv] || SPORTO_SIM_CONDITIONS[0];
    const sz = state.sportoSimSize || 'M';
    cond.pieces.forEach((piece) => {
      const prod = PRODUCTS.find((p) => p.id === piece.id);
      if (prod) addProductToCart(prod, sz, piece.swatchIdx, false);
    });
    showToast(`Added ${cond.kitHeading} (${sz}) to Bag`);
    openCartDrawer();
  });

  /* --- 7. CINEMATIC KEN BURNS MOTION BANNERS PAUSE / PLAY --- */
  [
    { bannerId: 'zoiro-motion-banner', btnId: 'zoiro-motion-toggle' },
    { bannerId: 'sporto-motion-banner', btnId: 'sporto-motion-toggle' },
    { bannerId: 'macho-motion-banner', btnId: 'macho-motion-toggle' }
  ].forEach(({ bannerId, btnId }) => {
    const banner = document.getElementById(bannerId);
    const btn = document.getElementById(btnId);
    if (!banner || !btn) return;
    btn.addEventListener('click', () => {
      const paused = banner.classList.toggle('is-paused');
      btn.setAttribute('aria-pressed', String(paused));
      btn.innerHTML = paused ? '&#9654; Play motion' : '&#10074;&#10074; Pause motion';
    });
  });

  /* ========================================================================
     INITIALIZE ON LOAD
     ======================================================================== */
  if (state.fitProfile) {
    applyFitToCatalog(state.fitProfile);
  }
  updateHeaderFitBadge();
  setBrand('hub', { scrollTop: false });
  setDayMoment(0, true);
  setZoiroHeroSlide(0);
  setSportoHeroSlide(0);
  setMachoHeroSlide(0);
  setMachoDeckActive(2);
  setMachoSpecTab(0);
  renderSportoSimulator(0);
  renderZoiroCapsuleStudio();
  renderMachoGrid();
  renderSportoGrid();
  renderZoiroGrid();
  updatePackBuilderUI();
  updateFabricLab(50);
  updateCartUI();
  renderB2bPortal();
  initCursorAuraAndInteractiveLights();
})();
