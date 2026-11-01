import { assetUrl } from '../utils/assets';

export interface ShoppableVideo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  posterUrl: string;
  duration?: string;
  productId: string;
  productName: string;
  productPrice: number;
  productImage: string;
  tag: string;
}

const RAW_VIDEOS: ShoppableVideo[] = [
  {
    id: 'reel-1',
    title: 'Rajwada Meenakari Choker Styling',
    description: 'Chiseled brass lattice contours the collarbone with subtle crimson meenakari highlights.',
    videoUrl: '/videos/shakti-abhushan-hero.mp4',
    posterUrl: '/videos/hero-poster.jpg',
    duration: '0:14',
    productId: 'rajwada-meenakari-choker',
    productName: 'Rajwada Meenakari Brass Choker',
    productPrice: 4850,
    productImage: '/products/choker-gold.jpg',
    tag: 'Choker in Motion'
  },
  {
    id: 'reel-2',
    title: 'Mayur Jhumkas Bell Movement',
    description: 'Carved peacock crest with hollow brass bell dome and acoustic ghunghroo chime.',
    videoUrl: '/videos/sample-reel.mp4',
    posterUrl: '/products/earring-vintage.jpg',
    duration: '0:12',
    productId: 'mayur-heritage-jhumkas',
    productName: 'Mayur Antique Brass Jhumkas',
    productPrice: 2450,
    productImage: '/products/earring-vintage.jpg',
    tag: 'Temple Bell Jhumka'
  },
  {
    id: 'reel-3',
    title: 'Gajraj Elephant Kada Clasp Demo',
    description: 'Heavy solid brass cuff featuring facing elephant terminals and concealed screw lock mechanism.',
    videoUrl: '/videos/sample-reel.mp4',
    posterUrl: '/products/bangle-antique.jpg',
    duration: '0:16',
    productId: 'gokhru-elephant-kada',
    productName: 'Gajraj Carved Openable Brass Kada',
    productPrice: 3850,
    productImage: '/products/bangle-antique.jpg',
    tag: 'Screw Lock Demo'
  },
  {
    id: 'reel-4',
    title: 'Chandbali Kundan Crescent Drops',
    description: 'Layered brass crescent silhouettes with hand-set polki glass reflections and pearl hangings.',
    videoUrl: '/videos/sample-reel.mp4',
    posterUrl: '/products/earring-chandbali.jpg',
    duration: '0:15',
    productId: 'chandbali-kundan-drops',
    productName: 'Chandbali Royal Heritage Drops',
    productPrice: 2950,
    productImage: '/products/earring-chandbali.jpg',
    tag: 'Crescent Drops'
  }
];

export const SHOPPABLE_VIDEOS: ShoppableVideo[] = RAW_VIDEOS.map((v) => ({
  ...v,
  videoUrl: assetUrl(v.videoUrl),
  posterUrl: assetUrl(v.posterUrl),
  productImage: assetUrl(v.productImage)
}));

