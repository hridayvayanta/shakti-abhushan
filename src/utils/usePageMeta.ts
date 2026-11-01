import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PRODUCTS } from '../data/products';

interface RouteMeta {
  title: string;
  description: string;
}

const META_MAP: Record<string, RouteMeta> = {
  '/': {
    title: 'SHAKTI ABHUSHAN — Handcrafted Luxury Indian Brass Jewellery',
    description: 'Explore authentic handcrafted Indian brass jewellery. Royal chokers, temple jhumkas, and carved kadas forged with antique gold patina. Direct orders on WhatsApp.'
  },
  '/shop': {
    title: 'Shop Indian Brass Jewellery Collections — Necklaces, Earrings, Bangles | SHAKTI ABHUSHAN',
    description: 'Browse our complete catalog of solid brass ornaments, from bridal chokers to everyday filigree studs. Filter by category, price, and artisan finish.'
  },
  '/collections': {
    title: 'Curated Heritage Collections — Royal Indian Jewellery | SHAKTI ABHUSHAN',
    description: 'Discover thematic collections inspired by Rajasthani darbars and temple architecture. Hand-hammered brass collar torques, ghunghroo bells, and elephant kadas.'
  },
  '/story': {
    title: 'Our Craftsmanship & Heritage — Hereditary Metalsmiths | SHAKTI ABHUSHAN',
    description: 'Learn about our journey with traditional Indian metalsmiths, hand-repoussé techniques, antique micron gold finishing, and devotion to timeless brass artistry.'
  },
  '/care': {
    title: 'Brass Jewellery Care Guide & Concierge Assistance | SHAKTI ABHUSHAN',
    description: 'Expert guidelines on preserving the lustre and antique patina of your solid brass jewellery. Storage advice, cleaning tips, and personal assistance.'
  },
  '/shipping': {
    title: 'Complimentary Insured Shipping & Delivery Information | SHAKTI ABHUSHAN',
    description: 'We deliver tamper-evident, insured luxury parcels across India and worldwide. Track your dispatch timeline and express courier details.'
  },
  '/returns': {
    title: '7-Day Return & Exchange Policy — Our Quality Promise | SHAKTI ABHUSHAN',
    description: 'Hassle-free 7-day returns and exchanges on all unworn brass jewellery pieces. Direct concierge support for size adjustments and transit claims.'
  },
  '/privacy': {
    title: 'Privacy Policy & Customer Data Protection | SHAKTI ABHUSHAN',
    description: 'Our commitment to protecting your privacy, contact information, and browsing data. Encrypted transactions and zero third-party marketing.'
  },
  '/terms': {
    title: 'Terms of Service & Atelier Conditions | SHAKTI ABHUSHAN',
    description: 'Review our terms of service, custom ordering guidelines, handcrafted variance policies, and customer guarantees.'
  }
};

export const usePageMeta = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = 'SHAKTI ABHUSHAN — Luxury Indian Brass Jewellery';
    let description = 'Handcrafted solid brass jewellery inspired by royal Indian heritage. Shop authentic chokers, jhumkas, and bangles.';

    if (META_MAP[pathname]) {
      title = META_MAP[pathname].title;
      description = META_MAP[pathname].description;
    } else if (pathname.startsWith('/product/')) {
      const productId = pathname.replace('/product/', '');
      const product = PRODUCTS.find((p) => p.id === productId);
      if (product) {
        title = `${product.name} (₹${product.price.toLocaleString('en-IN')}) | SHAKTI ABHUSHAN`;
        description = `${product.description} Handcrafted in solid brass with antique gold finish. ${product.materials.join(', ')}.`;
      } else {
        title = 'Jewellery Piece | SHAKTI ABHUSHAN';
      }
    } else {
      title = 'Page Not Found | SHAKTI ABHUSHAN';
      description = 'The requested jewellery page or collection could not be found. Explore our latest brass ornaments or contact our concierge.';
    }

    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);
  }, [pathname]);
};
