export type AppPage = 'home' | 'shop' | 'runway' | 'stylist' | 'atelier' | 'salons';

export type PerspectiveType = 'front' | 'side' | 'back' | 'macro' | 'motion' | 'drape';

export type LightingMode = 'atelier' | 'midnight' | 'runway';

export type Currency = 'USD' | 'EUR' | 'GBP' | 'JPY';

export interface Hotspot {
  id: string;
  x: number; // percentage 0 - 100
  y: number; // percentage 0 - 100
  title: string;
  description: string;
  technique: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  views: Record<PerspectiveType, string>;
}

export type ProductCategory = 
  | "Women's Dresses & Gowns"
  | "Women's Tops & Blouses"
  | "Women's Coats & Outerwear"
  | "Men's Suits & Blazers"
  | "Men's Shirts & Tees"
  | "Handbags & Accessories"
  | "Footwear"
  | "Activewear & Loungewear";

export interface Product {
  id: string;
  name: string;
  frenchSubtitle: string;
  category: ProductCategory;
  gender?: 'Women' | 'Men' | 'Unisex';
  priceUSD: number;
  season: string;
  edition: string;
  description: string;
  atelierNotes: string;
  composition: string;
  silhouetteNotes: string;
  fabricProvenance: string;
  availableSizes: string[];
  colors: ProductColor[];
  hotspots: Hotspot[];
  featured?: boolean;
  runwayLookNumber?: number;
  tag?: 'Best Seller' | 'New In' | 'Runway' | 'Heirloom' | 'Red Carpet' | 'Handcrafted' | 'Custom Fit';
}

export interface LookbookLook {
  id: string;
  lookNumber: number;
  title: string;
  model: string;
  season: string;
  description: string;
  frontImage: string;
  sideImage: string;
  backImage: string;
  macroImage: string;
  productsIncluded: string[]; // product IDs
}

export interface CartItem {
  product: Product;
  colorName: string;
  size: string;
  monogram?: string;
  quantity: number;
}

export interface AtelierBookingData {
  fullName: string;
  email: string;
  phone: string;
  focus: string;
  serviceType: string;
  preferredDate: string;
  timeSlot: string;
  notes: string;
}
