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

// Fictional reel associations and fake prices removed awaiting verified client video clips.
// The main starting hero video (shakti-abhushan-hero.mp4) in HeroVideoSection is strictly preserved.
const RAW_VIDEOS: ShoppableVideo[] = [];

export const SHOPPABLE_VIDEOS: ShoppableVideo[] = RAW_VIDEOS.map((v) => ({
  ...v,
  videoUrl: assetUrl(v.videoUrl),
  posterUrl: assetUrl(v.posterUrl),
  productImage: assetUrl(v.productImage)
}));
