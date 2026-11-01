import { Product, CollectionMeta } from '../types';
import { assetUrl } from '../utils/assets';

const RAW_PRODUCTS: Product[] = [
  {
    id: 'rajwada-meenakari-choker',
    name: 'Rajwada Meenakari Brass Choker',
    hindiName: 'राजवाड़ा मीनाकारी चोकर',
    tagline: 'Collar choker handcrafted in solid brass with antique gold patina',
    price: 4850,
    originalPrice: 5800,
    category: 'necklaces',
    categoryLabel: 'Necklaces & Chokers',
    description: 'Cast in solid brass and finished with an antique gold micron patina, this collar choker features hand-chiseled floral lattice work with crimson meenakari enamel accents and suspended brass droplet clusters.',
    story: 'Inspired by traditional Rajasthani court jewelry, this piece is shaped from sheet brass using repoussé hammering. Artisans chisel the floral lattice by hand, set the enamel accents, and attach clustered brass drops along the lower edge.',
    materials: ['Solid Brass Core', 'Antique Gold Micron Finish', 'Hand Meenakari Enamelling', 'Braided Silk Cord with Adjustable Tassel'],
    finish: 'Warm Antique Brass Patina with Satin Lustre',
    weight: '142 grams',
    dimensions: 'Choker band: 22 cm length × 4.8 cm height; Adjustable silk dori extends up to 45 cm',
    care: [
      'Store in the provided velvet-lined box to protect the finish',
      'Keep away from water, perfumes, and sprays',
      'Wipe with a soft dry microfiber cloth after wearing',
      'Do not use liquid brass polishes; the protective seal preserves the antique color'
    ],
    inStock: true,
    featured: true,
    badge: 'Signature Masterpiece',
    images: [
      '/products/choker-gold.jpg',
      '/products/choker-gold-detail.jpg',
      '/products/choker-gold-macro.jpg'
    ],
    modelType: 'choker'
  },
  {
    id: 'mayur-heritage-jhumkas',
    name: 'Mayur Antique Brass Jhumkas',
    hindiName: 'मयूर नक्काशी झुमके',
    tagline: 'Peacock stud over a temple bell dome with hanging brass droplets',
    price: 2450,
    category: 'earrings',
    categoryLabel: 'Earrings & Jhumkas',
    description: 'Hand-chiseled peacock stud mounted over an arched jhumka bell with suspended ghunghroos that ring softly as you walk. The brass dome is hollowed to keep the pair light enough for all-day wear at 38 grams.',
    story: 'The peacock motif is carved by hand before the bell is lathed and soldered. The hanging ghunghroos are individual brass beads strung on wire loops.',
    materials: ['Recycled Brass Core', 'Hand-chiseled Peacock Stud', 'Bell Dome with Brass Ghunghroos', 'Hypoallergenic Brass Posts'],
    finish: 'Antique Gold with Darkened Recesses',
    weight: '38 grams (pair)',
    dimensions: '7.5 cm height × 3.2 cm dome diameter',
    care: [
      'Wipe the posts and bell rim dry after wear',
      'Store in individual cloth pouches to prevent chain tangling',
      'Avoid pressing on post pins when packing'
    ],
    inStock: true,
    featured: true,
    badge: 'Bestseller',
    images: [
      '/products/earring-vintage.jpg',
      '/products/earring-vintage-detail.jpg',
      '/products/earring-vintage-macro.jpg'
    ],
    modelType: 'jhumka'
  },
  {
    id: 'chandbali-kundan-drops',
    name: 'Chandbali Royal Heritage Drops',
    hindiName: 'चाँदबाली शाही कर्णफूल',
    tagline: 'Crescent frames with hand-set Kundan glass and antique gold filigree',
    price: 2950,
    originalPrice: 3400,
    category: 'earrings',
    categoryLabel: 'Earrings & Jhumkas',
    description: 'Two interlocking crescent frames in brushed brass, set with faceted glass polki stones and finished with freshwater pearl drops.',
    story: 'Based on classical Awadhi crescent earrings. The brass wire frame is shaped by hand and finished with an antique gold wash that avoids the harsh yellow tone of modern electroplate.',
    materials: ['Engraved Brass Base', 'Traditional Kundan Foil Setting', 'Cultured Faux Pearl Hangings', 'Push-back Clasp'],
    finish: 'Warm Metallic Gold Highlight',
    weight: '44 grams (pair)',
    dimensions: '8.2 cm height × 5 cm width',
    care: [
      'Keep stones away from direct moisture',
      'Clean surface dust with a dry brush',
      'Store flat in the supplied pouch'
    ],
    inStock: true,
    featured: true,
    badge: 'Royal Heirloom',
    images: [
      '/products/earring-chandbali.jpg',
      '/products/earring-chandbali-detail.jpg',
      '/products/earring-chandbali-macro.jpg'
    ],
    modelType: 'jhumka'
  },
  {
    id: 'gokhru-elephant-kada',
    name: 'Gajraj Carved Openable Brass Kada',
    hindiName: 'गजराज नक्काशी कड़ा',
    tagline: 'Sculpted brass cuff with elephant finials and floral repoussé carving',
    price: 3850,
    category: 'bangles',
    categoryLabel: 'Bangles & Kadas',
    description: 'Cast solid brass cuff with facing elephant-head finials, embossed floral vines, and a concealed screw lock that opens easily.',
    story: 'Heavy cast brass weighing 86 grams. The screw mechanism lets you slip the cuff on without bending the metal, fitting wrist sizes 2.4 through 2.6 comfortably.',
    materials: ['Cast High-Density Brass', 'Hand-turned Screw Lock', 'Antique Patina Sealant'],
    finish: 'Brushed Antique Brass with Dark Recessed Engraving',
    weight: '86 grams',
    dimensions: 'Inside diameter: 60 mm (Size 2.4 - 2.6 adjustable via screw open mechanism)',
    care: [
      'Loosen the screw to put on or remove; do not pry the cuff open',
      'Wipe with dry flannel to buff raised ridges'
    ],
    inStock: true,
    featured: true,
    badge: 'Artisanal Brass',
    images: [
      '/products/bangle-antique.jpg',
      '/products/bangle-antique-detail.jpg',
      '/products/bangle-antique-macro.jpg'
    ],
    modelType: 'kada'
  },
  {
    id: 'navratna-hasli-choker',
    name: 'Navratna Floral Hasli Collar',
    hindiName: 'नवरत्न पुष्प हंसली',
    tagline: 'Solid brass rigid torque collar with a hand-hammered floral medallion',
    price: 5200,
    category: 'necklaces',
    categoryLabel: 'Necklaces & Chokers',
    description: 'Solid forged brass torque collar resting flush against the collarbone, centered around a hand-hammered floral medallion.',
    story: 'Haslis are traditional rigid neck collars from Rajasthan and Gujarat. We forge this piece from thick brass wire, annealing it repeatedly so the curve holds its shape without pinching.',
    materials: ['Forged Solid Brass Tube', 'Center Mandala Repoussé Medallion', 'Rear Hook Latch'],
    finish: 'Antique Gold with Satin Texture',
    weight: '118 grams',
    dimensions: 'Inner circumference: 38 cm; Center floret: 4.5 cm diameter',
    care: [
      'Store flat in a cloth wrap to protect the torque curve',
      'Avoid bending or twisting the collar tube'
    ],
    inStock: true,
    badge: 'Curated Favourite',
    images: [
      '/products/necklace-hasli.jpg',
      '/products/necklace-hasli-detail.jpg',
      '/products/necklace-hasli-macro.jpg'
    ],
    modelType: 'choker'
  },
  {
    id: 'padma-statement-ring',
    name: 'Padma Royal Brass Statement Ring',
    hindiName: 'पद्म शाही अंगूठी',
    tagline: 'Blooming lotus cocktail ring hand-cut from sheet brass with an adjustable shank',
    price: 1850,
    category: 'rings',
    categoryLabel: 'Rings & Accessories',
    description: 'Three tiers of hand-cut brass petals radiating from a raised cabochon dome, set on an adjustable double-band shank.',
    story: 'Each petal is chiseled individually before being silver-soldered to the base ring. The shank adjusts from Indian ring size 12 to 20 without weakening the solder joints.',
    materials: ['Chiseled Sheet Brass', 'Adjustable Dual-Band Shank', 'Anti-tarnish Coat'],
    finish: 'Antique Brass with Polished Edges',
    weight: '22 grams',
    dimensions: 'Motif diameter: 3.8 cm; Fits Indian Ring Sizes 12 through 20 (Adjustable)',
    care: [
      'Adjust ring size from the base of the shank, not by pulling on petals',
      'Remove before washing hands or applying creams'
    ],
    inStock: true,
    badge: 'Signature Masterpiece',
    images: [
      '/products/ring-statement.jpg',
      '/products/ring-statement-detail.jpg',
      '/products/ring-statement-macro.jpg'
    ],
    modelType: 'ring'
  },
  {
    id: 'emerald-polki-danglers',
    name: 'Panna Emerald Brass Chandlers',
    hindiName: 'पन्ना कुंदन झुमका झालर',
    tagline: 'Green glass cabochons set in brass with four graduated cascading chains',
    price: 3200,
    category: 'earrings',
    categoryLabel: 'Earrings & Jhumkas',
    description: 'Tiered drop earrings with emerald-green glass cabochons in brass bezels and four graduated lengths of brass link chains.',
    story: 'Designed with long link chains that move freely. The emerald-green stones are bezel-set with brass claws rather than glued.',
    materials: ['Brass Alloy', 'Faceted Glass Stones', 'Brass Link Chains'],
    finish: 'Aged 22K Gold Patina Finish',
    weight: '34 grams (pair)',
    dimensions: '9.5 cm length × 2.8 cm width',
    care: ['Store flat in box', 'Wipe with microfiber cloth after use'],
    inStock: true,
    images: [
      '/products/earring-emerald.jpg',
      '/products/earring-emerald-detail.jpg',
      '/products/earring-emerald-macro.jpg'
    ],
    modelType: 'jhumka'
  },
  {
    id: 'motihar-rani-haar',
    name: 'Motihar Heritage Layered Brass Haar',
    hindiName: 'मोतीहार राजसी हार',
    tagline: 'Seven-strand layered necklace with fluted brass beads and seed pearls',
    price: 6400,
    category: 'necklaces',
    categoryLabel: 'Necklaces & Chokers',
    description: 'Seven layered strands of hollow brass fluted beads and knotted glass pearls, joined at an engraved brass centerpiece.',
    story: 'Traditional long haar measuring 65 cm. We use hollow spun brass beads to keep the multi-strand weight at 168 grams so it hangs comfortably over sarees or kurtas.',
    materials: ['Hollow Brass Beads', 'Glass Shell Pearls', 'Chiseled Pendant Plaque', 'Braided Zari Cord'],
    finish: 'Burnished Antique Brass and Pearl White',
    weight: '168 grams',
    dimensions: 'Total necklace length: 65 cm; Pendant size: 7 cm × 6 cm',
    care: ['Do not submerge pearls in water', 'Wipe gently with a dry cloth'],
    inStock: true,
    badge: 'Royal Heirloom',
    images: [
      '/products/necklace-pearl.jpg',
      '/products/necklace-pearl-detail.jpg',
      '/products/necklace-pearl-macro.jpg'
    ],
    modelType: 'choker'
  },
  {
    id: 'surya-mandala-pendant',
    name: 'Surya Mandala Temple Pendant',
    hindiName: 'सूर्य मंडल मंदिर लॉकेट',
    tagline: 'Solid brass solar disk medallion on a woven foxtail chain',
    price: 2650,
    category: 'necklaces',
    categoryLabel: 'Necklaces & Chokers',
    description: 'Solid brass medallion etched with radial sunbeam grooves, suspended from a 50 cm woven brass chain.',
    story: 'The pendant disk is cut from 2 mm thick brass plate with hand-graver cuts across the face and an oxidized background to accentuate the relief.',
    materials: ['Solid Brass Plate', 'Woven Brass Foxtail Chain', 'Antique Patina Seal'],
    finish: 'Brushed Golden Brass with Shadowed Lines',
    weight: '48 grams',
    dimensions: 'Chain length: 50 cm; Pendant: 4.2 cm diameter',
    care: ['Store in cloth bag', 'Keep dry and avoid rough surfaces'],
    inStock: true,
    images: [
      '/products/pendant-temple.jpg',
      '/products/pendant-temple-detail.jpg',
      '/products/pendant-temple-macro.jpg'
    ],
    modelType: 'pendant'
  },
  {
    id: 'shahi-filigree-bangles',
    name: 'Shahi Filigree Brass Bangle Pair',
    hindiName: 'शाही जालीदार कंगन युगल',
    tagline: 'Pair of open-lattice brass bangles with beaded rims and screw-pin closure',
    price: 3400,
    category: 'bangles',
    categoryLabel: 'Bangles & Kadas',
    description: 'Pair of pierced brass bangles with open jaali fretwork, beaded borders, and a threaded pin closure.',
    story: 'Pierced by hand from sheet brass using jewelers sawblades. The screw-pin clasp ensures the bangles stay locked during wear.',
    materials: ['Pierced Brass Sheet', 'Threaded Brass Pin Locks', 'Velvet Polishing'],
    finish: 'Antique Matt Gold Finish',
    weight: '62 grams (pair)',
    dimensions: 'Width: 1.8 cm each; Inner diameter: 62 mm (Size 2.6)',
    care: ['Wipe clean after wear', 'Store in dry velvet box'],
    inStock: true,
    images: [
      '/products/bangle-gold.jpg',
      '/products/bangle-gold-detail.jpg',
      '/products/bangle-gold-macro.jpg'
    ],
    modelType: 'kada'
  },
  {
    id: 'polki-floret-earrings',
    name: 'Polki Floret Antique Studs',
    hindiName: 'पोलकी पुष्प कर्णफूल',
    tagline: 'Brass petal studs cupping raw polki glass stones with screw-back posts',
    price: 1950,
    category: 'earrings',
    categoryLabel: 'Earrings & Jhumkas',
    description: 'Eight hand-folded brass petals cupping a flat-cut glass polki stone, mounted on screw-back posts.',
    story: 'Compact 2.2 cm studs weighing just 14 grams per pair. The threaded posts screw on securely and will not snag hair or clothing.',
    materials: ['Solid Brass Castings', 'Bezel-set Polki Glass', 'Threaded Screw Posts'],
    finish: 'Antique Brass Polish',
    weight: '14 grams (pair)',
    dimensions: '2.2 cm diameter',
    care: ['Do not use alcohol wipes on stones', 'Store in dry pouch'],
    inStock: true,
    images: [
      '/products/earring-polki.jpg',
      '/products/earring-polki-detail.jpg',
      '/products/earring-polki-macro.jpg'
    ],
    modelType: 'jhumka'
  },
  {
    id: 'rajkumari-bridal-set',
    name: 'Rajkumari Complete Temple Choker & Earring Set',
    hindiName: 'राजकुमारी सम्पूर्ण विवाह सेट',
    tagline: 'Complete bridal set: temple collar choker, matching jhumkas, and maang tikka',
    price: 9800,
    originalPrice: 11500,
    category: 'sets',
    categoryLabel: 'Bridal & Jewellery Sets',
    description: 'Complete bridal set including a temple collar choker, matching Mayur jhumkas with hair chains (sahare), and a floral maang tikka.',
    story: 'A full wedding ensemble cast and chiseled in matching antique gold patina. Built in solid brass to provide the presence of traditional temple jewelry at a fraction of golds weight and cost.',
    materials: ['Welded Solid Brass', 'High-micron Antique Gold Finish', 'Glass Cabochons', 'Custom Padded Wooden Presentation Box'],
    finish: 'Royal Temple Antique Gold',
    weight: '290 grams (complete set)',
    dimensions: 'Choker: 24 cm × 6.5 cm; Earrings: 8.5 cm; Maang Tikka: 14 cm',
    care: [
      'Store in the custom velvet presentation box provided',
      'Handle hair chains with care during dressing',
      'Put on the set after applying perfume or hair products'
    ],
    inStock: true,
    featured: true,
    badge: 'Signature Masterpiece',
    images: [
      '/products/necklace-royal.jpg',
      '/products/necklace-royal-detail.jpg',
      '/products/necklace-royal-macro.jpg'
    ],
    modelType: 'choker'
  }
];

const RAW_COLLECTIONS: CollectionMeta[] = [
  {
    id: 'necklaces',
    name: 'Necklaces & Chokers',
    hindiTitle: 'कंठहार एवं हंसली',
    subtitle: 'Chokers, collar torques, and multi-strand haars',
    description: 'Chokers, collar torques, and layered haars hand-forged in solid brass with adjustable cords.',
    image: '/products/choker-gold.jpg',
    count: 4
  },
  {
    id: 'earrings',
    name: 'Earrings & Jhumkas',
    hindiTitle: 'कर्णफूल एवं झुमके',
    subtitle: 'Temple bells, floral studs, and crescent drops',
    description: 'Jhumkas, chandbalis, and studs balanced to wear comfortably, fitted with brass ghunghroos and secure posts.',
    image: '/products/earring-vintage.jpg',
    count: 4
  },
  {
    id: 'bangles',
    name: 'Bangles & Kadas',
    hindiTitle: 'कंगन एवं गजराज कड़ा',
    subtitle: 'Solid cuffs, elephant finials, and pierced bangles',
    description: 'Solid brass cuffs and hinged bangles with screw locks and hand-carved floral repoussé.',
    image: '/products/bangle-antique.jpg',
    count: 2
  },
  {
    id: 'rings',
    name: 'Rings & Accessories',
    hindiTitle: 'मुद्रिका एवं आभूषण',
    subtitle: 'Lotus cocktail rings and chased pendants',
    description: 'Cocktail rings and talismans hand-cut from sheet brass with adjustable double shanks.',
    image: '/products/ring-statement.jpg',
    count: 1
  },
  {
    id: 'sets',
    name: 'Bridal & Jewellery Sets',
    hindiTitle: 'राजसी विवाह संग्रह',
    subtitle: 'Full bridal and ceremonial ensembles',
    description: 'Matching chokers, jhumkas, and maang tikkas finished in uniform antique gold patina for weddings and celebrations.',
    image: '/products/necklace-royal.jpg',
    count: 1
  }
];

export const PRODUCTS: Product[] = RAW_PRODUCTS.map((p) => ({
  ...p,
  images: p.images.map((img) => assetUrl(img))
}));

export const COLLECTIONS_DATA: CollectionMeta[] = RAW_COLLECTIONS.map((c) => ({
  ...c,
  image: assetUrl(c.image)
}));

