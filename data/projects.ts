import { Project } from '@/types/project';

export const projectsData: Project[] = [
  {
    id: '1',
    slug: 'residence-01',
    title: 'Residence No. 01',
    category: 'Residential',
    categories: [{ id: 1, name: 'Residential', slug: 'residential' }],
    location: 'Mumbai, IN',
    year: '2026',
    designNarrative: null,
    excerpt: 'Cinematic, wide-angle interior defined by quiet luxury, raw concrete, warm oak wood, and light beige stone.',
    description: 'Our practice approached Residence No. 01 with an uncompromising commitment to architectural purity and spatial serenity. Custom raw stone coffee tables, low-slung ivory linen sofas, and floor-to-ceiling sheer curtains softly filter daylight to create an unpretentious sanctuary.\n\nEvery structural line was aligned to natural light paths, allowing deep morning shadows to rake across lime wash plaster surfaces.',
    content: 'Our practice approached Residence No. 01 with an uncompromising commitment to architectural purity and spatial serenity. Custom raw stone coffee tables, low-slung ivory linen sofas, and floor-to-ceiling sheer curtains softly filter daylight to create an unpretentious sanctuary.\n\nEvery structural line was aligned to natural light paths, allowing deep morning shadows to rake across lime wash plaster surfaces.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtaX4RaZLK3sEauXvMC1DGCGKXIH_uXpICQfAYzuZsE4_wW8FJzIAC7XH02MrVYec7wN1NgpoAFICf8izRF5AF8yzIHsFpIdyTpkxE2Kt7KvOJ4J9JJUay6iIgfxX1ui7m5Aiel6t3ZcZcWO5C5Vy0aPURBRpimNsOJFN3TCtUxyS_57K4y6KZl7scSFApSgJ7ces9OoDI_f-hZm5o74CuXtSrnqpnCn9GFnUd38fUdX0lCcgdqdAz',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBy4et5UBRWmC0ObwbDbqJ3Oa-05TEJZelegc9uK59rXNnItmzoN2E37g94BvdgZ-JqsT1CIB4f0xzPIEdwyTpSkvvUdfTx18xUC9g01rtQE0zUEAYVU6x1-56KB0Kkb5zJybm3CDSao06-diAdgFyRXwIpYgLlkFXzbnTs8WwhvvuvW-Ogu4hkZonwTOMuZkQzuP8Qt5kdvLwx_LtqU13ZxzNggwAA9TsXOKaxk9kWk82goB4pU3KT',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtaX4RaZLK3sEauXvMC1DGCGKXIH_uXpICQfAYzuZsE4_wW8FJzIAC7XH02MrVYec7wN1NgpoAFICf8izRF5AF8yzIHsFpIdyTpkxE2Kt7KvOJ4J9JJUay6iIgfxX1ui7m5Aiel6t3ZcZcWO5C5Vy0aPURBRpimNsOJFN3TCtUxyS_57K4y6KZl7scSFApSgJ7ces9OoDI_f-hZm5o74CuXtSrnqpnCn9GFnUd38fUdX0lCcgdqdAz'
    ],
    client: 'Private Client',
    services: ['Architectural Interior Design', 'Custom Millwork', 'Lighting & Art Curation'],
    featured: true
  },
  {
    id: '2',
    slug: 'alpine-chalet',
    title: 'The Alpine Chalet',
    category: 'Hospitality',
    categories: [{ id: 2, name: 'Hospitality', slug: 'hospitality' }],
    location: 'Swiss Alps, CH',
    year: '2025',
    designNarrative: null,
    excerpt: 'Honed travertine stone countertops, custom dark walnut cabinetry, and brushed brass details in a high-altitude sanctuary.',
    description: 'Nestled in the mountains, The Alpine Chalet bridges tactile minimalism and winter warmth. Natural grain woods, patinated metals, and warm acoustic plasters envelope guests in quiet splendor.\n\nThe hearth serves as the monolithic central anchor of the main lodge, around which low-profile seating is carefully arranged.',
    content: 'Nestled in the mountains, The Alpine Chalet bridges tactile minimalism and winter warmth. Natural grain woods, patinated metals, and warm acoustic plasters envelope guests in quiet splendor.\n\nThe hearth serves as the monolithic central anchor of the main lodge, around which low-profile seating is carefully arranged.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbPxT8agQc2s203AFF2sw4Zc_zY-afZHhlvOdXtf3Q8I2A5vL5mB1Ql_fdlXEL7nLar6TIKh4XOEK7n4__H8mhOl1fCPmTKuvW02zNIathBradxbP7LJKoM0uLkv2zq4o3mLTN3TWaiMWoUM7OK473nrCUAZRvxI4O45SXfJdVDWSOMtj2LGlvx6IUN1fxuZBMSTk3DOEn9p09EwOE3jePIuE_WKx9DgYk8JbS_r911Q4TNBKJLTnO',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbPxT8agQc2s203AFF2sw4Zc_zY-afZHhlvOdXtf3Q8I2A5vL5mB1Ql_fdlXEL7nLar6TIKh4XOEK7n4__H8mhOl1fCPmTKuvW02zNIathBradxbP7LJKoM0uLkv2zq4o3mLTN3TWaiMWoUM7OK473nrCUAZRvxI4O45SXfJdVDWSOMtj2LGlvx6IUN1fxuZBMSTk3DOEn9p09EwOE3jePIuE_WKx9DgYk8JbS_r911Q4TNBKJLTnO'
    ],
    client: 'Alpine Group',
    services: ['Spatial Architecture', 'FF&E Procurement', 'Material Sourcing'],
    featured: true
  },
  {
    id: '3',
    slug: 'gallery-loft',
    title: 'Gallery Loft',
    category: 'Residential',
    categories: [{ id: 1, name: 'Residential', slug: 'residential' }],
    location: 'New York, US',
    year: '2024',
    designNarrative: null,
    excerpt: 'Monolithic blackened steel dining table, curved sculptural wooden seating, and large-scale monochromatic artworks.',
    description: 'Designed for a contemporary art collector, Gallery Loft utilizes expansive negative space as a fundamental design element. Moody lighting and industrial materiality frame panoramic Manhattan views.',
    content: 'Designed for a contemporary art collector, Gallery Loft utilizes expansive negative space as a fundamental design element. Moody lighting and industrial materiality frame panoramic Manhattan views.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH9FXHnwO301Ty_7UUCPJDGYvgfh8_Mg5IAbl8p-DFpcAGvI9SRbskk1oun6SMqH7QxNfuNPRFRwKXx0k5AYbNy-43Da1p-OWOYXYUIjsrEeXh7NPScY9xuK8zUsBLUql8LRt5_Jl719AgaL1TLXa5vU0F0DwxjkQJ66bt3fWCTgTNiNZ9P4xY4Kom6a87chqm0Yo8-tk6tHS6dBUq6u1bSOQKtg9UXUw02QFqm8NYcqPWlBIVHTLE',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCH9FXHnwO301Ty_7UUCPJDGYvgfh8_Mg5IAbl8p-DFpcAGvI9SRbskk1oun6SMqH7QxNfuNPRFRwKXx0k5AYbNy-43Da1p-OWOYXYUIjsrEeXh7NPScY9xuK8zUsBLUql8LRt5_Jl719AgaL1TLXa5vU0F0DwxjkQJ66bt3fWCTgTNiNZ9P4xY4Kom6a87chqm0Yo8-tk6tHS6dBUq6u1bSOQKtg9UXUw02QFqm8NYcqPWlBIVHTLE'
    ],
    client: 'Private Residence',
    services: ['Interior Design', 'Art Curation', 'Custom Lighting'],
    featured: true
  },
  {
    id: '4',
    slug: 'obsidian-house',
    title: 'The Obsidian House',
    category: 'Residential',
    categories: [{ id: 1, name: 'Residential', slug: 'residential' }],
    location: 'Kyoto, JP',
    year: '2024',
    designNarrative: null,
    excerpt: 'Minimalist residential space with pale ivory walls, polished concrete, and bespoke furniture in neutral taupe.',
    description: 'Drawing inspiration from traditional Japanese joinery and modern spatial proportion, The Obsidian House features seamless indoor-outdoor transitions and delicate daylight shadows.',
    content: 'Drawing inspiration from traditional Japanese joinery and modern spatial proportion, The Obsidian House features seamless indoor-outdoor transitions and delicate daylight shadows.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtuwTFoAyweD53N6mX7Rs8LBOHDIEk-k-z2GqomOyFmDxu0qP-pppH-EwoP994G_jaLFKzcOsuAo1EfuMQokVZDW4YhlS4-8z8B9MeNSXBZDdVRTRJJSZq5jygCNiVizXKmAkI8YEjD_aKozpqM1TQi2nAr9c6RuKFLWdXzjR_me7aNvVqIwXs6ul_5atJ37AFLpJ-RokPdx-RrSDL4r8qBCw7-cTZKgUHtfyBaQH3LPjCS-bj6s7q',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDtuwTFoAyweD53N6mX7Rs8LBOHDIEk-k-z2GqomOyFmDxu0qP-pppH-EwoP994G_jaLFKzcOsuAo1EfuMQokVZDW4YhlS4-8z8B9MeNSXBZDdVRTRJJSZq5jygCNiVizXKmAkI8YEjD_aKozpqM1TQi2nAr9c6RuKFLWdXzjR_me7aNvVqIwXs6ul_5atJ37AFLpJ-RokPdx-RrSDL4r8qBCw7-cTZKgUHtfyBaQH3LPjCS-bj6s7q'
    ],
    client: 'Private Client',
    services: ['Architectural Design', 'Joinery', 'Landscape Integration'],
    featured: true
  },
  {
    id: '5',
    slug: 'atelier-blanc',
    title: 'Atelier Blanc',
    category: 'Commercial',
    categories: [{ id: 3, name: 'Commercial', slug: 'commercial' }],
    location: 'Paris, FR',
    year: '2023',
    designNarrative: null,
    excerpt: 'High-end commercial retail space with sculptural travertine stone counter and focused gallery lighting.',
    description: 'Atelier Blanc represents architectural restraint for luxury retail. Monolithic stone forms and stark ivory backdrops allow curated fashion objects to take center stage.',
    content: 'Atelier Blanc represents architectural restraint for luxury retail. Monolithic stone forms and stark ivory backdrops allow curated fashion objects to take center stage.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZz38OXYGxztOAwXeBZneEOyamclz0y3sTzg7_jH47-DojUK9zoqg8haaqk6GUnCmivCcfd9Q_AUGe73ojD1sHEx02gSN-7aH29kEV9md6KC6mDLLtksW5jcnAQFqpfNJWz5JRSvYsJeAg4hk2OaxTL1IKpuTw4C_0m-KJFY1hRL7TL_QvPAWMXC4Kjg1mfFXsrgukUV23_T1h5je-w6LnBNZJL47XghKnhXftLofKsC_kC8zA-nsC',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCZz38OXYGxztOAwXeBZneEOyamclz0y3sTzg7_jH47-DojUK9zoqg8haaqk6GUnCmivCcfd9Q_AUGe73ojD1sHEx02gSN-7aH29kEV9md6KC6mDLLtksW5jcnAQFqpfNJWz5JRSvYsJeAg4hk2OaxTL1IKpuTw4C_0m-KJFY1hRL7TL_QvPAWMXC4Kjg1mfFXsrgukUV23_T1h5je-w6LnBNZJL47XghKnhXftLofKsC_kC8zA-nsC'
    ],
    client: 'Maison Blanc',
    services: ['Spatial Identity', 'Bespoke Counter Millwork', 'Gallery Lighting'],
    featured: false
  },
  {
    id: '6',
    slug: 'amanera-retreat',
    title: 'Amanera Retreat',
    category: 'Hospitality',
    categories: [{ id: 2, name: 'Hospitality', slug: 'hospitality' }],
    location: 'Milan, IT',
    year: '2023',
    designNarrative: null,
    excerpt: 'Towering ceilings, abstract archways, and a singular bronze lighting fixture suspended over lime wash plaster.',
    description: 'A flagship hospitality experience in Milan. Natural light washes across plaster surfaces, emphasizing pure volume and quiet luxury.',
    content: 'A flagship hospitality experience in Milan. Natural light washes across plaster surfaces, emphasizing pure volume and quiet luxury.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Cl5MESIc64Vy_8sa9jcXCQNZ37IJO_EFul8zi2XEbQeJiNtrXH4n8DgwKCmQlXwFIJstJoKCUFeI_6V0LhVVEjA2cj5Fis2QWl6vEP6sxH9bVGaWmb-6W_YH3jilxgrAYlU0WGuYZ0JAT515gr8NEmXK243PXI27utNS2OphXbvVsXacrvk-mt1geUc-lZVEzY4Huwmra6xrkVYzUdYqYjMahTLX2T0lzZSHWh_IB7ZXHMSS5s_K',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Cl5MESIc64Vy_8sa9jcXCQNZ37IJO_EFul8zi2XEbQeJiNtrXH4n8DgwKCmQlXwFIJstJoKCUFeI_6V0LhVVEjA2cj5Fis2QWl6vEP6sxH9bVGaWmb-6W_YH3jilxgrAYlU0WGuYZ0JAT515gr8NEmXK243PXI27utNS2OphXbvVsXacrvk-mt1geUc-lZVEzY4Huwmra6xrkVYzUdYqYjMahTLX2T0lzZSHWh_IB7ZXHMSS5s_K'
    ],
    client: 'Amanera Hospitality',
    services: ['Concept Architecture', 'Lobby Curation', 'Custom Lighting'],
    featured: false
  },
  {
    id: '7',
    slug: 'steel-oak-residence',
    title: 'Steel & Oak Residence',
    category: 'Residential',
    categories: [{ id: 1, name: 'Residential', slug: 'residential' }],
    location: 'New York, US',
    year: '2022',
    designNarrative: null,
    excerpt: 'Open-plan penthouse kitchen with island clad in brushed charcoal steel contrasting with pale oak.',
    description: 'Clean horizontal lines and deliberate lack of ornamentation define this Manhattan penthouse, blending industrial craftsmanship with cozy elegance.',
    content: 'Clean horizontal lines and deliberate lack of ornamentation define this Manhattan penthouse, blending industrial craftsmanship with cozy elegance.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAwdpHVkeoTYjmwhQzZafqCsvUP4P-_5s7X47Ohp50Cb_0hit10qH0xqbDfH_5UgWC1syPrm81sNb2X3jLXOdJI7hwfJSUSrwPxZ5-BrhnP2aOuB_Acbi1glgtXliOaVIq96J3xzCwez2cHPkXZyTWWpw2vXt_Z1tNqJdh6UoYzhqahXrjCfv1wTHzB-mczM5Tn7QxE8OQDBRDxIEGCRU-MIgTkjv0plQoAYy7OkmgNIHzPEpTRsAB',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAwdpHVkeoTYjmwhQzZafqCsvUP4P-_5s7X47Ohp50Cb_0hit10qH0xqbDfH_5UgWC1syPrm81sNb2X3jLXOdJI7hwfJSUSrwPxZ5-BrhnP2aOuB_Acbi1glgtXliOaVIq96J3xzCwez2cHPkXZyTWWpw2vXt_Z1tNqJdh6UoYzhqahXrjCfv1wTHzB-mczM5Tn7QxE8OQDBRDxIEGCRU-MIgTkjv0plQoAYy7OkmgNIHzPEpTRsAB'
    ],
    client: 'Private Penthouse',
    services: ['Penthouse Architecture', 'Custom Kitchen Millwork'],
    featured: false
  },
  {
    id: '8',
    slug: 'monolith-flagship-store',
    title: 'Monolith Flagship Store',
    category: 'Retail',
    categories: [{ id: 4, name: 'Retail', slug: 'retail' }],
    location: 'London, UK',
    year: '2025',
    designNarrative: null,
    excerpt: 'A luxury retail sanctuary constructed from raw limestone blocks and concealed ambient light troughs.',
    description: 'Monolith Flagship Store challenges high-street retail norms with an austere, gallery-like layout. Customers navigate monolithic limestone displays as if visiting a contemporary sculpture pavilion.',
    content: 'Monolith Flagship Store challenges high-street retail norms with an austere, gallery-like layout. Customers navigate monolithic limestone displays as if visiting a contemporary sculpture pavilion.',
    featuredImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO1MxhkMWegKNyukWwtEFeaTsm9aHM3euoOzh5NWGnW8HpRIPuEMDcS96Wmsap9E6Ou_PjM1ywnfD50JB59kWMHk8dxt7E0nXaxim1SYhZJSkIehKwzdaUEG8EDyzlg6BZp0-7dGnxOkTxVUqEsPaPnX1EYeO_B4sfwXwY_oOpvdYfaBq0svmGSIPPp4qH7uhSAo6HiqCX5KU4h4Fy81E8g0roSk2qY-wqz3fL80FNSMTSLQHnEl1c',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBO1MxhkMWegKNyukWwtEFeaTsm9aHM3euoOzh5NWGnW8HpRIPuEMDcS96Wmsap9E6Ou_PjM1ywnfD50JB59kWMHk8dxt7E0nXaxim1SYhZJSkIehKwzdaUEG8EDyzlg6BZp0-7dGnxOkTxVUqEsPaPnX1EYeO_B4sfwXwY_oOpvdYfaBq0svmGSIPPp4qH7uhSAo6HiqCX5KU4h4Fy81E8g0roSk2qY-wqz3fL80FNSMTSLQHnEl1c'
    ],
    client: 'Monolith Brand',
    services: ['Retail Architecture', 'Limestone Fabrication', 'Lighting Design'],
    featured: false
  }
];
