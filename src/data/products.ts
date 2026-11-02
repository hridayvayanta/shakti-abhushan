import { Product, CollectionMeta } from '../types';
import { assetUrl } from '../utils/assets';

// All fictional/unverified placeholder products, fake prices, and fabricated discounts have been purged.
// Awaiting verified client inventory and pricing per CLIENT_CONTENT_REQUIREMENTS.md.
const RAW_PRODUCTS: Product[] = [];

const RAW_COLLECTIONS: CollectionMeta[] = [
  {
    id: 'necklaces',
    name: 'Necklaces & Chokers',
    hindiTitle: 'कंठहार एवं हंसली',
    subtitle: 'Chokers, collar torques, and multi-strand haars',
    description: 'Chokers, collar torques, and layered haars hand-forged in solid brass with adjustable cords.',
    image: '/products/choker-gold.jpg',
    count: 0
  },
  {
    id: 'earrings',
    name: 'Earrings & Jhumkas',
    hindiTitle: 'कर्णफूल एवं झुमके',
    subtitle: 'Temple bells, floral studs, and crescent drops',
    description: 'Jhumkas, chandbalis, and studs balanced to wear comfortably, fitted with brass ghunghroos and secure posts.',
    image: '/products/earring-vintage.jpg',
    count: 0
  },
  {
    id: 'bangles',
    name: 'Bangles & Kadas',
    hindiTitle: 'कंगन एवं गजराज कड़ा',
    subtitle: 'Solid cuffs, elephant finials, and pierced bangles',
    description: 'Solid brass cuffs and hinged bangles with screw locks and hand-carved floral repoussé.',
    image: '/products/bangle-antique.jpg',
    count: 0
  },
  {
    id: 'rings',
    name: 'Rings & Accessories',
    hindiTitle: 'मुद्रिका एवं आभूषण',
    subtitle: 'Lotus cocktail rings and chased pendants',
    description: 'Cocktail rings and talismans hand-cut from sheet brass with adjustable double shanks.',
    image: '/products/ring-statement.jpg',
    count: 0
  },
  {
    id: 'sets',
    name: 'Bridal & Jewellery Sets',
    hindiTitle: 'राजसी विवाह संग्रह',
    subtitle: 'Full bridal and ceremonial ensembles',
    description: 'Matching chokers, jhumkas, and maang tikkas finished in uniform antique gold patina for weddings and celebrations.',
    image: '/products/necklace-hasli.jpg',
    count: 0
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
