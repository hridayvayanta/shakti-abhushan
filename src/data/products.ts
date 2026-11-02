import { Product, CollectionMeta } from '../types';
import { assetUrl } from '../utils/assets';

// Showcase reference products (1 per category) serving as client blueprints
// demonstrating cataloguing fields, product details, image galleries, and WhatsApp checkout.
const RAW_PRODUCTS: Product[] = [
  {
    id: 'rajputana-hansli-choker',
    name: 'Rajputana Hansli Choker',
    tagline: 'Hand-forged rigid brass collar torque with antique gold micron plating',
    price: 3850,
    originalPrice: 4500,
    category: 'necklaces',
    categoryLabel: 'Necklaces & Chokers',
    description: 'An artisanal brass hansli collar necklace hand-forged from solid bell-metal brass, adorned with delicate repoussé motifs and an antique gold micron patina. Includes an adjustable zari cord fitting all collar profiles.',
    story: 'Inspired by the royal courts of Mewar, this hansli exemplifies the age-old art of hollow brass tubing and floral repoussé engraving handed down through generations of Jaipur metalsmiths.',
    materials: ['Solid Brass', '24K Antique Gold Micron Plating', 'Hypoallergenic Coating', 'Braided Zari Dori'],
    finish: 'Antique Gold Patina with Lacquer Seal',
    weight: '68 grams',
    dimensions: '14 cm diameter collar with 8 cm adjustable extension cord',
    care: [
      'Wipe with a soft cotton cloth after every wear',
      'Store in a dry velvet or cotton pouch',
      'Keep away from direct perfumes, lotions, and water'
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
    id: 'chandrika-bell-jhumkas',
    name: 'Chandrika Bell Jhumkas',
    tagline: 'Cascading brass jhumkas with handcrafted floral domes and micro ghunghroos',
    price: 1950,
    originalPrice: 2400,
    category: 'earrings',
    categoryLabel: 'Earrings & Jhumkas',
    description: 'Exemplary three-tier bell jhumkas chiseled with intricate floral filigree, suspending micro brass ghunghroo bells that chime softly with movement. Fitted with comfortable hypoallergenic posts.',
    story: 'Modeled after traditional temple earrings worn during festive ceremonies in southern Rajasthan, each bell is individually spun and pierced by hand.',
    materials: ['Recycled Brass', 'Antique Gold Micron Plating', 'Surgical Steel Ear Posts'],
    finish: 'Vintage Brushed Gold',
    weight: '28 grams (pair)',
    dimensions: '6.5 cm drop length × 2.8 cm dome diameter',
    care: [
      'Avoid moisture and direct perfume sprays',
      'Clean with a dry microfiber cloth',
      'Store in an airtight container when not in use'
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
    id: 'gajraj-royal-cuff-kada',
    name: 'Gajraj Royal Cuff Kada',
    tagline: 'Solid brass hinged cuff with twin elephant finials and floral repoussé',
    price: 2450,
    originalPrice: 2950,
    category: 'bangles',
    categoryLabel: 'Bangles & Kadas',
    description: 'A statement royal cuff crafted in dense brass, featuring intricately engraved elephant head finials symbolizing royal grace, equipped with a precision screw clasp for secure daily wear.',
    story: 'Elephant motifs have crowned Indian royal jewellery for centuries. This piece revives heritage royal armour and palace gate carvings in wearable brass.',
    materials: ['Solid Bell Metal Brass', 'Micro-gold Electroplating', 'Screw Lock Mechanism'],
    finish: 'Heritage Matte Gold',
    weight: '85 grams',
    dimensions: '2.6 inch inner diameter (fits wrists 2.4 to 2.8 with screw lock)',
    care: [
      'Store individually to prevent surface rubbing',
      'Polish gently with a dry chamois cloth'
    ],
    inStock: true,
    featured: true,
    badge: 'Bestseller',
    images: [
      '/products/bangle-gold.jpg',
      '/products/bangle-gold-detail.jpg',
      '/products/bangle-gold-macro.jpg'
    ],
    modelType: 'kada'
  },
  {
    id: 'kamal-patra-cocktail-ring',
    name: 'Kamal Patra Statement Ring',
    tagline: 'Multi-layered blooming lotus ring with etched brass petals and adjustable band',
    price: 1450,
    originalPrice: 1750,
    category: 'rings',
    categoryLabel: 'Rings & Accessories',
    description: 'A striking cocktail ring celebrating the sacred lotus, constructed from individual layered brass petals with hand-chased veining and an adjustable double comfort shank.',
    story: 'Hand-pierced from thick sheet brass, each petal is individually curved on a wooden stake before being silver-soldered to create three-dimensional depth and shadow.',
    materials: ['Pure Sheet Brass', 'Antique 22K Gold Finish', 'Lead-Free & Nickel-Free'],
    finish: 'Textured Antique Gold',
    weight: '18 grams',
    dimensions: '3.8 cm crown diameter (Free size adjustable band)',
    care: [
      'Remove before handwashing or applying sanitizers',
      'Keep in a soft fabric-lined jewellery box'
    ],
    inStock: true,
    featured: true,
    badge: 'Signature Masterpiece',
    images: [
      '/products/ring-statement.jpg',
      '/products/ring-statement-detail.jpg',
      '/products/ring-statement-macro.jpg'
    ],
    modelType: 'ring'
  },
  {
    id: 'rajasi-temple-bridal-set',
    name: 'Rajasi Temple Bridal Set',
    tagline: 'Complete bridal set featuring temple choker, matching jhumkas, and maang tikka',
    price: 6850,
    originalPrice: 7990,
    category: 'sets',
    categoryLabel: 'Bridal & Jewellery Sets',
    description: 'A grand bridal ensemble handcrafted in solid brass with authentic temple deity embossing, kundan bezel settings, and matched cascading jhumkas with forehead maang tikka.',
    story: 'Designed for celebratory weddings and heritage ceremonies, this ensemble coordinates uniform antique gold plating across necklace, earrings, and forehead ornament.',
    materials: ['Solid Brass', 'Faux Kundan Glass Inset', 'Adjustable Zari Dori Cord', 'Antique Micron Gold'],
    finish: 'Royal Antique Temple Gold',
    weight: '195 grams (full set)',
    dimensions: 'Choker: 22 cm span | Earrings: 7 cm drop | Tikka: 12 cm length',
    care: [
      'Keep safely in original velvet presentation box',
      'Do not expose to moisture or perfumes',
      'Handle delicate dori threads with care'
    ],
    inStock: true,
    featured: true,
    badge: 'Royal Heirloom',
    images: [
      '/products/necklace-hasli.jpg',
      '/products/necklace-hasli-detail.jpg',
      '/products/necklace-hasli-macro.jpg'
    ],
    modelType: 'choker'
  }
];

const RAW_COLLECTIONS: CollectionMeta[] = [
  {
    id: 'necklaces',
    name: 'Necklaces & Chokers',
    subtitle: 'Chokers, collar torques, and multi-strand haars',
    description: 'Chokers, collar torques, and layered haars hand-forged in solid brass with adjustable cords.',
    image: '/products/choker-gold.jpg',
    count: 1
  },
  {
    id: 'earrings',
    name: 'Earrings & Jhumkas',
    subtitle: 'Temple bells, floral studs, and crescent drops',
    description: 'Jhumkas, chandbalis, and studs balanced to wear comfortably, fitted with brass ghunghroos and secure posts.',
    image: '/products/earring-vintage.jpg',
    count: 1
  },
  {
    id: 'bangles',
    name: 'Bangles & Kadas',
    subtitle: 'Solid cuffs, elephant finials, and pierced bangles',
    description: 'Solid brass cuffs and hinged bangles with screw locks and hand-carved floral repoussé.',
    image: '/products/bangle-antique.jpg',
    count: 1
  },
  {
    id: 'rings',
    name: 'Rings & Accessories',
    subtitle: 'Lotus cocktail rings and chased pendants',
    description: 'Cocktail rings and talismans hand-cut from sheet brass with adjustable double shanks.',
    image: '/products/ring-statement.jpg',
    count: 1
  },
  {
    id: 'sets',
    name: 'Bridal & Jewellery Sets',
    subtitle: 'Full bridal and ceremonial ensembles',
    description: 'Matching chokers, jhumkas, and maang tikkas finished in uniform antique gold patina for weddings and celebrations.',
    image: '/products/necklace-hasli.jpg',
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
