import { Product, LookbookLook, ProductCategory } from '../types';
import imgUsf01 from '../assets/images/usfashion_01.jpg';
import imgUsf02 from '../assets/images/usfashion_02.jpg';
import imgUsf03 from '../assets/images/usfashion_03.jpg';
import imgUsf04 from '../assets/images/usfashion_04.jpg';
import imgUsf05 from '../assets/images/usfashion_05.jpg';
import imgUsf06 from '../assets/images/usfashion_06.jpg';
import imgUsf07 from '../assets/images/usfashion_07.jpg';
import imgUsf08 from '../assets/images/usfashion_08.jpg';
import imgUsf09 from '../assets/images/usfashion_09.jpg';
import imgUsf10 from '../assets/images/usfashion_10.jpg';
import imgUsf11 from '../assets/images/usfashion_11.jpg';
import imgUsf12 from '../assets/images/usfashion_12.jpg';
import imgUsf13 from '../assets/images/usfashion_13.jpg';
import imgUsf14 from '../assets/images/usfashion_14.jpg';
import imgUsf15 from '../assets/images/usfashion_15.jpg';
import imgUsf16 from '../assets/images/usfashion_16.jpg';
import imgUsf17 from '../assets/images/usfashion_17.jpg';
import imgUsf18 from '../assets/images/usfashion_18.jpg';
import imgUsf19 from '../assets/images/usfashion_19.jpg';
import imgUsf20 from '../assets/images/usfashion_20.jpg';
import imgUsf21 from '../assets/images/usfashion_21.jpg';
import imgUsf22 from '../assets/images/usfashion_22.jpg';
import imgUsf23 from '../assets/images/usfashion_23.jpg';
import imgUsf24 from '../assets/images/usfashion_24.jpg';
import imgUsf25 from '../assets/images/usfashion_25.jpg';
import imgUsf26 from '../assets/images/usfashion_26.jpg';
import imgUsf27 from '../assets/images/usfashion_27.jpg';
import imgUsf28 from '../assets/images/usfashion_28.jpg';
import imgUsf29 from '../assets/images/usfashion_29.jpg';
import imgUsf30 from '../assets/images/usfashion_30.jpg';
import imgUsf31 from '../assets/images/usfashion_31.jpg';
import imgUsf32 from '../assets/images/usfashion_32.jpg';
import imgUsf33 from '../assets/images/usfashion_33.jpg';
import imgUsf34 from '../assets/images/usfashion_34.jpg';
import imgUsf35 from '../assets/images/usfashion_35.jpg';
import imgUsf36 from '../assets/images/usfashion_36.jpg';

export {
  imgUsf01,
  imgUsf02,
  imgUsf03,
  imgUsf04,
  imgUsf05,
  imgUsf06,
  imgUsf07,
  imgUsf08,
  imgUsf09,
  imgUsf10,
  imgUsf11,
  imgUsf12,
  imgUsf13,
  imgUsf14,
  imgUsf15,
  imgUsf16,
  imgUsf17,
  imgUsf18,
  imgUsf19,
  imgUsf20,
  imgUsf21,
  imgUsf22,
  imgUsf23,
  imgUsf24,
  imgUsf25,
  imgUsf26,
  imgUsf27,
  imgUsf28,
  imgUsf29,
  imgUsf30,
  imgUsf31,
  imgUsf32,
  imgUsf33,
  imgUsf34,
  imgUsf35,
  imgUsf36
};

export const CURRENCY_RATES: Record<string, { symbol: string; rate: number; label: string }> = {
  USD: { symbol: '$', rate: 1.0, label: 'US Dollar ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'Euro (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'British Pound (£)' },
  JPY: { symbol: '¥', rate: 154.0, label: 'Japanese Yen (¥)' },
};

// Distinct categorized imagery banks for American fashion collections
export const IMG_DRESSES_GOWNS_ITEMS = [
  imgUsf01, imgUsf02, imgUsf03, imgUsf04, imgUsf23, imgUsf24, imgUsf08, imgUsf09, imgUsf29, imgUsf30
];

export const IMG_TOPS_BLOUSES_ITEMS = [
  imgUsf08, imgUsf27, imgUsf06, imgUsf07, imgUsf19, imgUsf18, imgUsf09, imgUsf05, imgUsf31, imgUsf32
];

export const IMG_COATS_OUTERWEAR_ITEMS = [
  imgUsf04, imgUsf21, imgUsf03, imgUsf15, imgUsf14, imgUsf22, imgUsf23, imgUsf24, imgUsf33, imgUsf34
];

export const IMG_SUITES_BLAZERS_ITEMS = [
  imgUsf10, imgUsf14, imgUsf15, imgUsf13, imgUsf11, imgUsf21, imgUsf20, imgUsf22, imgUsf35, imgUsf36
];

export const IMG_SHIRTS_TEES_ITEMS = [
  imgUsf16, imgUsf17, imgUsf18, imgUsf19, imgUsf20, imgUsf21, imgUsf22, imgUsf09, imgUsf29, imgUsf30
];

export const IMG_HAND_BAGS_ACCESSORIES_ITEMS = [
  imgUsf25, imgUsf26, imgUsf07, imgUsf09, imgUsf06, imgUsf27, imgUsf05, imgUsf02, imgUsf31, imgUsf32
];

export const IMG_FOOTWEAR_ITEMS = [
  imgUsf25, imgUsf26, imgUsf07, imgUsf22, imgUsf20, imgUsf18, imgUsf23, imgUsf24, imgUsf33, imgUsf34
];

export const IMG_ACTIVE_LOUNGE_ITEMS = [
  imgUsf19, imgUsf18, imgUsf16, imgUsf17, imgUsf20, imgUsf25, imgUsf06, imgUsf07, imgUsf35, imgUsf36
];

// Helper to construct complete 6-angle views
function makeViews(primary: string, secondary: string) {
  return {
    front: primary,
    side: secondary,
    back: primary,
    macro: primary,
    motion: secondary,
    drape: secondary
  };
}

// Master category definitions for American fashion collections
const CATEGORY_DEFINITIONS: {
  category: ProductCategory;
  items: {
    name: string;
    sub: string;
    gender: 'Women' | 'Men' | 'Unisex';
    priceUSD: number;
    prov: string;
    comp: string;
    desc: string;
    tag: 'Best Seller' | 'New In' | 'Runway' | 'Heirloom' | 'Red Carpet' | 'Handcrafted' | 'Custom Fit';
    img1: string;
    img2: string;
  }[];
}[] = [
  {
    category: 'Women\'s Dresses & Gowns',
    items: [
      {
        name: 'The Manhattan Midnight Silk-Brocade Ball Gown',
        sub: 'Robe de Bal Velours de Soie Métallique',
        gender: 'Women',
        priceUSD: 2400,
        prov: 'New York Atelier & Manhattan Flagship',
        comp: '100% Silk Brocade with Metallic Thread, Silk Satin Lining',
        desc: 'Architectural ball gown with structured corset bodice and dramatic tulle skirt. Hand-finished with artisanal beading and cascading silk folds for formal evening events.',
        tag: 'Heirloom',
        img1: imgUsf01,
        img2: imgUsf24
      },
      {
        name: 'The Hollywood Illusion Embroidered Mermaid Gown',
        sub: 'Robe Sirène Illusion Broderie',
        gender: 'Women',
        priceUSD: 3100,
        prov: 'Los Angeles Red-Carpet Atelier',
        comp: 'Silk Tulle, Hand-Embroidered Beads, Duchesse Satin',
        desc: 'Sculpted mermaid silhouette with sheer illusion side panels hand-embroidered with crystal beads. Sweeping train perfect for galas and award ceremonies.',
        tag: 'Red Carpet',
        img1: imgUsf02,
        img2: imgUsf23
      },
      {
        name: 'The Brooklyn Hand-Woven Silk Column Gown',
        sub: 'Robe Colonne en Soie Tissée Main',
        gender: 'Women',
        priceUSD: 2850,
        prov: 'Brooklyn Artisan Loom & NYC Studio',
        comp: '100% Hand-Woven Silk, Micro-Crystal Accents, Silk Velvet',
        desc: 'Contemporary column silhouette featuring hand-woven silk with metallic thread weave, crystal-embellished waistband, and elegant back drape.',
        tag: 'Runway',
        img1: imgUsf03,
        img2: imgUsf01
      },
      {
        name: 'The San Francisco Metallic Cape Evening Gown',
        sub: 'Robe de Soirée Cape Métallique',
        gender: 'Unisex',
        priceUSD: 1950,
        prov: 'San Francisco Design District & West Hollywood Studio',
        comp: 'Silk Velvet, Metallic Brocade Cape, Satin Back',
        desc: 'Modern cape-sleeve gown with detachable metallic brocade cape. Streamlined silhouette with dramatic side slit and hand-finished hems.',
        tag: 'Handcrafted',
        img1: imgUsf04,
        img2: imgUsf05
      },
      {
        name: 'The Chicago Indigo Tie-Dye Silk Gown',
        sub: 'Robe en Soie Indigotée et Drapée',
        gender: 'Women',
        priceUSD: 2200,
        prov: 'Chicago Lakeview Studio & Manhattan Workshop',
        comp: '100% Organic Silk Charmeuse, Natural Indigo Dye',
        desc: 'Hand-dipped indigo silk gown with natural tie-dye patterns, featuring a dramatic backless silhouette with cascading cowl details.',
        tag: 'Best Seller',
        img1: imgUsf01,
        img2: imgUsf02
      },
      {
        name: 'The Dallas Beaded Velvet Cocktail Dress',
        sub: 'Robe de Cocktail en Velours Perlé',
        gender: 'Men',
        priceUSD: 2100,
        prov: 'Dallas Design District & NYC Atelier',
        comp: 'Silk Velvet, Hand-Sewn Beading, Silk Lining',
        desc: 'Rich midnight velvet cocktail dress with intricate hand-sewn beadwork across the bodice and flowing A-line skirt with side pockets.',
        tag: 'Red Carpet',
        img1: imgUsf12,
        img2: imgUsf10
      },
      {
        name: 'The Miami Art Deco Beaded Reception Gown',
        sub: 'Robe de Réception Perles Art Déco',
        gender: 'Women',
        priceUSD: 3400,
        prov: 'Miami Beach Studio & Manhattan Flagship',
        comp: 'Opaline Metallic Fabric, Swarovski Pearls, Silk Charmeuse',
        desc: 'The ultimate luxury evening statement: structured peplum bodice, flowing skirt, and detachable beaded capelet inspired by 1930s Art Deco.',
        tag: 'Red Carpet',
        img1: imgUsf02,
        img2: imgUsf04
      },
      {
        name: 'The Seattle Emerald Silk-Wrapped Gown',
        sub: 'Robe Emeraude en Soie Doublée',
        gender: 'Men',
        priceUSD: 2900,
        prov: 'Seattle Design Collective & Portland Studio',
        comp: 'Silk-Wrapped Wool, Emerald Silk Lining',
        desc: 'Commanding emerald green gown with flowing cape sleeves and hand-wrapped silk trim throughout.',
        tag: 'Heirloom',
        img1: imgUsf12,
        img2: imgUsf10
      },
      {
        name: 'The Denver Geometric Hand-Woven Vest Gown',
        sub: 'Robe Gilet Tissée Main Géométrique',
        gender: 'Women',
        priceUSD: 1850,
        prov: 'Denver Artisan Guild & Boulder Studio',
        comp: '100% Traditional Broadloom Cotton-Silk Blend',
        desc: 'Structured vest gown featuring geometric patterns woven over 2 weeks, with modern lapels and high-waist cinching for elegant evening wear.',
        tag: 'Handcrafted',
        img1: imgUsf03,
        img2: imgUsf05
      },
      {
        name: 'The Atlanta Heavyweight Cape Evening Coat',
        sub: 'Manteau de Soirée Cape Épais',
        gender: 'Men',
        priceUSD: 1600,
        prov: 'Atlanta Arts District & Nashville Studio',
        comp: 'Unbleached Organic Heavy Cotton, Silk Lining',
        desc: 'Relaxed cape coat merging timeless evening elegance with modern Southern comfort. Fully reversible with hidden closure.',
        tag: 'New In',
        img1: imgUsf05,
        img2: imgUsf11
      },
      ...Array.from({ length: 18 }).map((_, i) => ({
        name: `Mary Atelier Signature Silk Evening Gown N° 0${i + 11}`,
        sub: `Robe de Soirée Soie Signature ${i + 11}`,
        gender: (i % 2 === 0 ? 'Women' : 'Men') as 'Women' | 'Men',
        priceUSD: 1750 + (i * 75),
        prov: 'Manhattan & West Hollywood Ateliers, USA',
        comp: 'Hand-Woven Silk, Metallic Thread Accents, Silk Satin',
        desc: `Artisanal silk evening gown with signature geometric detailing and bespoke hand-finishing in our Manhattan and West Hollywood studios.`,
        tag: (i % 3 === 0 ? 'Heirloom' : i % 3 === 1 ? 'Red Carpet' : 'Custom Fit') as any,
        img1: IMG_DRESSES_GOWNS_ITEMS[i % IMG_DRESSES_GOWNS_ITEMS.length],
        img2: IMG_DRESSES_GOWNS_ITEMS[(i + 1) % IMG_DRESSES_GOWNS_ITEMS.length]
      }))
    ]
  },
  {
    category: 'Women\'s Tops & Blouses',
    items: [
      {
        name: 'The Charleston Hand-Embroidered Silk Blouse',
        sub: 'Chemise en Soie Broderie Main',
        gender: 'Women',
        priceUSD: 680,
        prov: 'Charleston Historic District & NYC Workshop',
        comp: '100% Heavy Silk Twill, Natural Dye',
        desc: 'Relaxed silk blouse featuring unique hand-embroidered medallions and mother-of-pearl buttons. Elegant and breathable for formal and casual wear.',
        tag: 'Best Seller',
        img1: imgUsf08,
        img2: imgUsf06
      },
      {
        name: 'The Beverly Hills Silk Wiggle Blouse',
        sub: 'Chemise Torsadée en Soie de Beverly Hills',
        gender: 'Women',
        priceUSD: 520,
        prov: 'Beverly Hills Boutique & Los Angeles Studio',
        comp: '100% Mercerized Silk, Silk Lining',
        desc: 'Tailored fitted blouse with subtle tonal embroidery at the cuffs and collar. Features a hidden button front placket and French seams.',
        tag: 'New In',
        img1: imgUsf06,
        img2: imgUsf27
      },
      {
        name: 'The Boston Hand-Beaded Kimono Blouse',
        sub: 'Chemise Kimono Perchée Main',
        gender: 'Women',
        priceUSD: 780,
        prov: 'Boston Back Bay Studio & Cambridge Workshop',
        comp: 'Heavy Silk, Hand-Sewn Beading',
        desc: 'Structured kimono-style blouse with hand-beaded neckline details and wide flowing sleeves. Perfect for cocktail hour and evening events.',
        tag: 'Runway',
        img1: imgUsf27,
        img2: imgUsf16
      },
      {
        name: 'The Nashville Silk Safari Blouse',
        sub: 'Chemise Safari en Soie de Nashville',
        gender: 'Women',
        priceUSD: 720,
        prov: 'Nashville Music District & Austin Studio',
        comp: '100% Silk Chiffon, Bronze Hardware',
        desc: 'Utility-inspired silk blouse with concealed pockets, vintage-inspired collar, and hand-burnished bronze button details.',
        tag: 'Best Seller',
        img1: imgUsf25,
        img2: imgUsf26
      },
      {
        name: 'The Portland Oversized Silk Button-Down',
        sub: 'Chemise Écarlate Oversize en Soie',
        gender: 'Unisex',
        priceUSD: 290,
        prov: 'Portland Pearl District, Oregon',
        comp: '100% Organic Heavyweight Silk (220g/m²)',
        desc: 'Thick structured boxy blouse with signature rolled sleeves and tonal silk blend construction.',
        tag: 'Best Seller',
        img1: imgUsf18,
        img2: imgUsf20
      },
      {
        name: 'The San Diego Linen Wrap Top',
        sub: 'Haut Décontracté en Lin de San Diego',
        gender: 'Women',
        priceUSD: 490,
        prov: 'San Diego Fashion District & LA Workshop',
        comp: '100% French Flax Linen with Silk Embroidery',
        desc: 'Modern wrap silhouette with subtle tone-on-tone embroidery and adjustable self-tie waist. Perfect for brunch and weekend get-togethers.',
        tag: 'New In',
        img1: imgUsf16,
        img2: imgUsf19
      },
      ...Array.from({ length: 22 }).map((_, i) => ({
        name: `Mary Atelier Contemporary Women's Top N° 0${i + 7}`,
        sub: `Chemise Femme Moderne ${i + 7}`,
        gender: 'Women' as const,
        priceUSD: 380 + (i * 25),
        prov: 'Los Angeles & New York Studios, USA',
        comp: 'Silk, Silk-Linen Blend, Natural Fiber Blends',
        desc: `Modern American contemporary blouse blending effortless elegance with sharp cultural accents. Hand-finished in our LA and NYC studios.`,
        tag: (i % 2 === 0 ? 'Best Seller' : 'New In') as any,
        img1: IMG_TOPS_BLOUSES_ITEMS[i % IMG_TOPS_BLOUSES_ITEMS.length],
        img2: IMG_TOPS_BLOUSES_ITEMS[(i + 1) % IMG_TOPS_BLOUSES_ITEMS.length]
      }))
    ]
  },
  {
    category: 'Women\'s Coats & Outerwear',
    items: [
      {
        name: 'The New York Structured Wool Cape Coat',
        sub: 'Manteau Cape en Laine Structurée de New York',
        gender: 'Unisex',
        priceUSD: 2400,
        prov: 'New York Garment District & Manhattan Studio',
        comp: 'Super 150s Italian Wool, Silk Lining',
        desc: 'Architectural cape coat with sharp shoulder line and concealed front closures. Features dramatic volume and refined tailoring for urban sophistication.',
        tag: 'Best Seller',
        img1: imgUsf04,
        img2: imgUsf24
      },
      {
        name: 'The Los Angeles Leather-Trim Denim Jacket',
        sub: 'Veste en Jean avec Finitions Cuir de Los Angeles',
        gender: 'Men',
        priceUSD: 850,
        prov: 'LA Arts District Workshop & San Francisco Studio',
        comp: '14oz Raw Japanese Selvedge Cotton, Vegetable-Tanned Leather',
        desc: 'Heavyweight denim jacket hand-finished with leather trims and custom metal hardware. Features utility pockets and vintage-inspired wash.',
        tag: 'Best Seller',
        img1: imgUsf21,
        img2: imgUsf20
      },
      {
        name: 'The Chicago Hand-Embroidered Suede Moto Jacket',
        sub: 'Manteau Moto en Suède Brosser Main',
        gender: 'Women',
        priceUSD: 1950,
        prov: 'Chicago Design District & Detroit Studio',
        comp: 'Italian Suede, Hand-Embroidered Silk Panels',
        desc: 'Modern moto silhouette with hand-embroidered silk panels on the back yoke and sleeves. Features zip detailing and adjustable waist.',
        tag: 'Runway',
        img1: imgUsf21,
        img2: imgUsf05
      },
      {
        name: 'The Miami Metallic Puffer Coat',
        sub: 'Manteau Puffer Métallique de Miami',
        gender: 'Unisex',
        priceUSD: 1450,
        prov: 'Miami Design District & Fort Lauderdale Studio',
        comp: 'Recycled Nylon Shell, Metallic Finish, Silk Faille Lining',
        desc: 'Luxury puffer coat with metallic sheen, featuring a dramatic collar and high waist silhouette. Fully packable with signature gold hardware.',
        tag: 'New In',
        img1: imgUsf15,
        img2: imgUsf14
      },
      {
        name: 'The Seattle Shearling-Lined Trench Coat',
        sub: 'Manteau Trench Doublé de Mouton de Seattle',
        gender: 'Women',
        priceUSD: 1650,
        prov: 'Seattle Outdoor District & Portland Studio',
        comp: 'Cotton Gabardine, Genuine Shearling Lining',
        desc: 'Classic trench coat with modern shearling lining for warmth. Features gun flaps, bellows pockets, and storm shield details.',
        tag: 'Handcrafted',
        img1: imgUsf22,
        img2: imgUsf20
      },
      {
        name: 'The Denver Wool-Blend Wrap Coat',
        sub: 'Manteau Évasé en Mélange de Laine de Denver',
        gender: 'Women',
        priceUSD: 1250,
        prov: 'Denver Design Collective & Boulder Workshop',
        comp: 'Wool-Cashmere Blend, Silk Shantung Lining',
        desc: 'Sophisticated wrap coat with removable belt and dramatic cascade front. Crafted from premium wool-cashmere blend with silk shantung lining.',
        tag: 'Best Seller',
        img1: imgUsf23,
        img2: imgUsf04
      },
      ...Array.from({ length: 20 }).map((_, i) => ({
        name: `Mary Atelier Artisanal Outerwear N° 0${i + 6}`,
        sub: `Manteau Artisanal Haute Couture ${i + 6}`,
        gender: (i % 2 === 0 ? 'Women' : 'Men') as 'Women' | 'Men',
        priceUSD: 550 + (i * 30),
        prov: 'San Francisco & Los Angeles Studios, USA',
        comp: 'Premium Wool Blends, Leather, Shearling, Technical Fabrics',
        desc: `Contemporary outerwear combining world-class fabric construction with signature American design detailing.`,
        tag: (i % 3 === 0 ? 'Best Seller' : 'New In') as any,
        img1: IMG_COATS_OUTERWEAR_ITEMS[i % IMG_COATS_OUTERWEAR_ITEMS.length],
        img2: IMG_COATS_OUTERWEAR_ITEMS[(i + 1) % IMG_COATS_OUTERWEAR_ITEMS.length]
      }))
    ]
  },
  {
    category: 'Men\'s Suits & Blazers',
    items: [
      {
        name: 'The Manhattan Two-Button Italian Wool Suit',
        sub: 'Costume de Ville en Laine Italienne de Manhattan',
        gender: 'Men',
        priceUSD: 2800,
        prov: 'Manhattan Suiting Atelier & NYC Workshop',
        comp: 'Super 160s Italian Virgin Wool, 24k Gold Thread Accents',
        desc: 'The definitive modern business suit. Cut from 4 meters of uninterrupted wool crepe to eliminate side seams, finished with hand-stitched gold thread details.',
        tag: 'Best Seller',
        img1: imgUsf10,
        img2: imgUsf14
      },
      {
        name: 'The Los Angeles Slim-Fit Velvet Dinner Jacket',
        sub: 'Veste de Dîner en Velours Ajustée de Los Angeles',
        gender: 'Men',
        priceUSD: 1450,
        prov: 'LA Design District & Hollywood Studio',
        comp: 'Italian Tropical Silk-Wool Blend (280g/m²)',
        desc: 'Razor-sharp modern silhouette with peak lapels and velvet shawl collar option. Features jetted pockets and interior breast pocket with contrast lining.',
        tag: 'New In',
        img1: imgUsf13,
        img2: imgUsf15
      },
      {
        name: 'The Chicago Hand-Woven Silk Blend Suit',
        sub: 'Costume en Soie Tissée Main de Chicago',
        gender: 'Men',
        priceUSD: 1950,
        prov: 'Chicago Menswear District & Milwaukee Studio',
        comp: 'Silk-Wool Blend, Hand-Woven Texture',
        desc: 'Iconic three-piece lounge suit with hand-woven texture throughout, featuring peak lapel jacket and pleated trousers.',
        tag: 'Heirloom',
        img1: imgUsf14,
        img2: imgUsf10
      },
      {
        name: 'The Miami Linen-Blend Unstructured Suit',
        sub: 'Costume Non Structuré en Lin de Miami',
        gender: 'Men',
        priceUSD: 2600,
        prov: 'Miami Design District & Fort Lauderdale Workshop',
        comp: 'Fine Linen-Cotton Blend, Hand-Stitched Details',
        desc: 'Majestic southern-inspired unstructured suit taking over 80 hours of meticulous hand-stitching in our Miami atelier, pairing elegance with tropical comfort.',
        tag: 'Heirloom',
        img1: imgUsf11,
        img2: imgUsf12
      },
      {
        name: 'The Boston Black-Tie Wool Tuxedo',
        sub: 'Smoking en Laine Noire de Boston',
        gender: 'Men',
        priceUSD: 1650,
        prov: 'Boston Back Bay & Cambridge Studio',
        comp: 'Super 140s Wool Crepe, Satin Trim Detail',
        desc: 'Monochrome black-tie tuxedo with satin peak lapels, hand-welted details, and solid brass accessories.',
        tag: 'Red Carpet',
        img1: imgUsf15,
        img2: imgUsf13
      },
      {
        name: 'The San Francisco Royal Blue Suit with Leather Trim',
        sub: 'Costume Bleu Roi Finitions Cuir de San Francisco',
        gender: 'Men',
        priceUSD: 1550,
        prov: 'San Francisco Design District & Oakland Studio',
        comp: 'Fine Wool-Cashmere, Burnished Calfskin Details',
        desc: 'Rich royal blue tailoring with hand-burnished leather piping along the chest welt pocket and walking slits.',
        tag: 'Best Seller',
        img1: imgUsf14,
        img2: imgUsf15
      },
      {
        name: 'The Atlanta Burgundy Velvet Smoking Jacket',
        sub: 'Veste Smoking Velours Bordeaux d’Atlanta',
        gender: 'Men',
        priceUSD: 1700,
        prov: 'Atlanta Arts District & Athens Studio',
        comp: 'Super 140s Wool Crepe, Silk Velvet Placket',
        desc: 'Deep burgundy evening jacket featuring contrast peak lapels and concealed front closure with brass hardware.',
        tag: 'Red Carpet',
        img1: imgUsf15,
        img2: imgUsf14
      },
      ...Array.from({ length: 21 }).map((_, i) => ({
        name: `Mary Atelier Executive Suit N° 0${i + 8}`,
        sub: `Costume Exécutif Haute Couture ${i + 8}`,
        gender: 'Men' as const,
        priceUSD: 1350 + (i * 60),
        prov: 'New York & Los Angeles Tailoring Salons, USA',
        comp: 'Super 150s Wool, Silk, Solid Brass Hardware',
        desc: `Masterfully structured men's formal wear tailored to perfection with wrinkle-resistant construction and signature American cut.`,
        tag: (i % 2 === 0 ? 'Best Seller' : 'Custom Fit') as any,
        img1: (i % 2 === 0 ? IMG_SUITES_BLAZERS_ITEMS[i % IMG_SUITES_BLAZERS_ITEMS.length] : IMG_SHIRTS_TEES_ITEMS[i % IMG_SHIRTS_TEES_ITEMS.length]),
        img2: (i % 2 === 0 ? IMG_SHIRTS_TEES_ITEMS[i % IMG_SHIRTS_TEES_ITEMS.length] : IMG_SUITES_BLAZERS_ITEMS[i % IMG_SUITES_BLAZERS_ITEMS.length])
      }))
    ]
  },
  {
    category: 'Men\'s Shirts & Tees',
    items: [
      {
        name: 'The Charleston Hand-Embroidered Silk Camp Collar Shirt',
        sub: 'Chemise Col Cubain en Soie Brodée de Charleston',
        gender: 'Men',
        priceUSD: 680,
        prov: 'Charleston Historic District & Atlanta Workshop',
        comp: '100% Heavy Silk Twill, Natural Dye',
        desc: 'Relaxed resort silhouette featuring unique hand-embroidered patterns and mother-of-pearl buttons. Breathable, fluid, and distinctly refined.',
        tag: 'Best Seller',
        img1: imgUsf16,
        img2: imgUsf25
      },
      {
        name: 'The Beverly Hills Silk Geometric Pattern Shirt',
        sub: 'Chemise en Coton à Motifs Géométriques',
        gender: 'Men',
        priceUSD: 520,
        prov: 'Beverly Hills Boutique & LA Studio',
        comp: '100% Mercerized Cotton, Silk Lining',
        desc: 'Tailored spread collar shirt with signature geometric pattern and mother-of-pearl buttons.',
        tag: 'New In',
        img1: imgUsf25,
        img2: imgUsf17
      },
      {
        name: 'The Boston Hand-Beaded Mandarin Collar Overshirt',
        sub: 'Surchemise Col Officier Perchée de Boston',
        gender: 'Men',
        priceUSD: 780,
        prov: 'Boston Back Bay & Providence Studio',
        comp: 'Heavy Cotton Drill, Hand-Sewn Beading',
        desc: 'Structured safari-style overshirt with chest flap pockets, accented with hand-sewn beadwork along the collar.',
        tag: 'Runway',
        img1: imgUsf17,
        img2: imgUsf16
      },
      {
        name: 'The Nashville Silk Safari Utility Shirt',
        sub: 'Chemise Safari en Soie de Nashville',
        gender: 'Men',
        priceUSD: 720,
        prov: 'Nashville Music District & Knoxville Studio',
        comp: '100% Silk Twill, Bronze Hardware',
        desc: 'Utility military-inspired shirt transformed with organic silk and custom cast geometric bronze snap buttons.',
        tag: 'Best Seller',
        img1: imgUsf25,
        img2: imgUsf17
      },
      {
        name: 'The Portland Oversized American Heritage T-Shirt',
        sub: 'T-Shirt Oversize Héritage Américain de Portland',
        gender: 'Unisex',
        priceUSD: 290,
        prov: 'Portland Pearl District, Oregon',
        comp: '100% Organic Heavyweight Cotton (320g/m²)',
        desc: 'Thick structured boxy streetwear tee made from premium organic cotton with signature heritage branding.',
        tag: 'Best Seller',
        img1: imgUsf20,
        img2: imgUsf16
      },
      {
        name: 'The San Diego Linen Button-Down Top',
        sub: 'Haut Boutonné en Lin de San Diego',
        gender: 'Men',
        priceUSD: 490,
        prov: 'San Diego Fashion District & LA Workshop',
        comp: '100% French Flax Linen with Silk Embroidery',
        desc: 'Modern Oxford-style shirt with subtle tone-on-tone embroidery and adjustable collar with stays.',
        tag: 'New In',
        img1: imgUsf16,
        img2: imgUsf19
      },
      ...Array.from({ length: 22 }).map((_, i) => ({
        name: `Mary Atelier Contemporary Mens Top N° 0${i + 7}`,
        sub: `Chemise Homme Moderne ${i + 7}`,
        gender: 'Men' as const,
        priceUSD: 380 + (i * 25),
        prov: 'Los Angeles & New York Studios, USA',
        comp: 'Mercerized Cotton, Silk, Linen Twill',
        desc: `Modern American menswear top balancing effortless comfort with sharp cultural accents. Hand-finished in our LA and NYC studios.`,
        tag: (i % 2 === 0 ? 'Best Seller' : 'New In') as any,
        img1: IMG_SHIRTS_TEES_ITEMS[i % IMG_SHIRTS_TEES_ITEMS.length],
        img2: IMG_SHIRTS_TEES_ITEMS[(i + 1) % IMG_SHIRTS_TEES_ITEMS.length]
      }))
    ]
  },
  {
    category: 'Handbags & Accessories',
    items: [
      {
        name: 'The Manhattan Structure Handcrafted Leather Tote',
        sub: 'Sac à Dos en Cuir Conçu Main de Manhattan',
        gender: 'Women',
        priceUSD: 380,
        prov: 'Manhattan Leather District & NYC Workshop',
        comp: 'Silk Velvet, Gold Metallic Hardware',
        desc: 'Traditional American leather tote with sharp geometric side-crease, tailored for suits and evening wear.',
        tag: 'Best Seller',
        img1: imgUsf26,
        img2: imgUsf25
      },
      {
        name: 'The Los Angeles Signature Leather Handbag',
        sub: 'Sac à Main en Cuir Signature de Los Angeles',
        gender: 'Unisex',
        priceUSD: 1800,
        prov: 'LA Arts District & Hollywood Studio',
        comp: '100% Genuine Vegetable-Tanned Leather, Solid Brass Hardware',
        desc: 'Generational heirloom piece handcrafted by master leather artisans. Features hand-stitched seams and solid brass fittings.',
        tag: 'Heirloom',
        img1: imgUsf25,
        img2: imgUsf09
      },
      {
        name: 'The Chicago Fan-Pleat Leather Crossbody',
        sub: 'Sac Fréquentation Fan-Plisé en Cuir de Chicago',
        gender: 'Women',
        priceUSD: 1650,
        prov: 'Chicago Design District & Detroit Studio',
        comp: 'Full-Grain Calfskin, Solid Bronze Handle',
        desc: 'Structured fan-pleat handbag honoring traditional American craftsmanship, mounted on a solid cast bronze bar.',
        tag: 'Best Seller',
        img1: imgUsf25,
        img2: imgUsf07
      },
      {
        name: 'The Nashville Sculptural Leather Ankle Boot',
        sub: 'Bottine Artistique en Cuir de Nashville',
        gender: 'Women',
        priceUSD: 1250,
        prov: 'Nashville Music District & Atlanta Studio',
        comp: 'Patent Calf Leather, Architectural Heel',
        desc: 'Razor-thin stiletto ankle boot featuring an architectural heel for immaculate posture and comfort.',
        tag: 'Runway',
        img1: imgUsf25,
        img2: imgUsf26
      },
      {
        name: 'The San Francisco Heritage Leather Belt',
        sub: 'Ceinturon Héritage en Cuir de San Francisco',
        gender: 'Unisex',
        priceUSD: 320,
        prov: 'San Francisco Design District & Oakland Studio',
        comp: 'Vegetable-Tanned Leather, Solid Brass Buckle',
        desc: 'Handcrafted leather belt with signature American buckle design.',
        tag: 'New In',
        img1: imgUsf06,
        img2: imgUsf07
      },
      ...Array.from({ length: 16 }).map((_, i) => ({
        name: `Mary Atelier Artisanal Luxury Accessory N° 0${i + 5}`,
        sub: `Accessoire Haute Joaillerie & Cuir d’Art ${i + 5}`,
        gender: 'Unisex' as const,
        priceUSD: 280 + (i * 45),
        prov: 'New York & Los Angeles Guilds, USA',
        comp: 'Premium Leather, Bronze, Silk, Handcrafted Materials',
        desc: `Authentic handcrafted American luxury accessory crafted by master artisans.`,
        tag: (i % 2 === 0 ? 'Heirloom' : 'Best Seller') as any,
        img1: IMG_HAND_BAGS_ACCESSORIES_ITEMS[i % IMG_HAND_BAGS_ACCESSORIES_ITEMS.length],
        img2: IMG_HAND_BAGS_ACCESSORIES_ITEMS[(i + 1) % IMG_HAND_BAGS_ACCESSORIES_ITEMS.length]
      }))
    ]
  },
  {
    category: 'Footwear',
    items: [
      {
        name: 'The Hollywood Hand-Crafted Leather Oxfords',
        sub: 'Oxfords en Cuir Conçus Main de Hollywood',
        gender: 'Men',
        priceUSD: 450,
        prov: 'Los Angeles Shoe District & Hollywood Studio',
        comp: 'Full-Grain Italian Leather, Leather Sole',
        desc: 'Classic oxford shoes hand-crafted from premium Italian leather with signature American craftsmanship and Goodyear welt construction.',
        tag: 'Best Seller',
        img1: imgUsf25,
        img2: imgUsf26
      },
      {
        name: 'The Manhattan Silk Embroidered Ballet Flats',
        sub: 'Babouches Brodées en Soie de Manhattan',
        gender: 'Women',
        priceUSD: 380,
        prov: 'Manhattan Shoe District & NYC Workshop',
        comp: 'Silk Satin, Hand-Embroidered Detail, Leather Lining',
        desc: 'Elegant ballet flats with hand-embroidered silk detailing and premium leather lining for all-day comfort.',
        tag: 'Best Seller',
        img1: imgUsf07,
        img2: imgUsf06
      },
      {
        name: 'The Boston Leather Chelsea Boots',
        sub: 'Bottes Chelsea en Cuir de Boston',
        gender: 'Unisex',
        priceUSD: 520,
        prov: 'Boston Back Bay & Cambridge Studio',
        comp: 'Premium Leather, Crepe Rubber Sole',
        desc: 'Sleek Chelsea boots with signature elastic side panels and crepe rubber sole for everyday comfort.',
        tag: 'New In',
        img1: imgUsf22,
        img2: imgUsf20
      },
      {
        name: 'The Miami Metallic Heeled Sandals',
        sub: 'Sandales à Talon Métallique de Miami',
        gender: 'Women',
        priceUSD: 490,
        prov: 'Miami Design District & Fort Lauderdale Studio',
        comp: 'Metallic Leather, Block Heel, Leather Sole',
        desc: 'Statement sandals with metallic finish and supportive block heel for evening and resort wear.',
        tag: 'Runway',
        img1: imgUsf23,
        img2: imgUsf24
      },
      {
        name: 'The San Diego Canvas Sneakers',
        sub: 'Sneakers en Toile de San Diego',
        gender: 'Unisex',
        priceUSD: 220,
        prov: 'San Diego Fashion District & LA Workshop',
        comp: 'Premium Canvas, Rubber Sole, Cotton Lining',
        desc: 'Classic canvas sneakers with signature American casual style. Features contrast trim and cushioned insole.',
        tag: 'Best Seller',
        img1: imgUsf20,
        img2: imgUsf18
      },
      {
        name: 'The Portland Handcrafted Leather Ankle Boots',
        sub: 'Bottes Cheville en Cuir Conçues Main de Portland',
        gender: 'Women',
        priceUSD: 680,
        prov: 'Portland Pearl District & Eugene Studio',
        comp: 'Full-Grain Leather, Leather Sole',
        desc: 'Handcrafted ankle boots with signature American western-inspired design and premium leather construction.',
        tag: 'Handcrafted',
        img1: imgUsf23,
        img2: imgUsf04
      },
      ...Array.from({ length: 20 }).map((_, i) => ({
        name: `Mary Atelier Signature Footwear N° 0${i + 6}`,
        sub: `Chaussures de Luxe Signature ${i + 6}`,
        gender: (i % 2 === 0 ? 'Women' : 'Men') as 'Women' | 'Men',
        priceUSD: 350 + (i * 28),
        prov: 'Los Angeles & New York Shoe Studios, USA',
        comp: 'Premium Leather, Canvas, Metallic Fabrics',
        desc: `American luxury footwear combining classic silhouettes with contemporary design details.`,
        tag: (i % 3 === 0 ? 'Best Seller' : 'New In') as any,
        img1: IMG_FOOTWEAR_ITEMS[i % IMG_FOOTWEAR_ITEMS.length],
        img2: IMG_FOOTWEAR_ITEMS[(i + 1) % IMG_FOOTWEAR_ITEMS.length]
      }))
    ]
  },
  {
    category: 'Activewear & Loungewear',
    items: [
      {
        name: 'The Los Angeles Cashmere Lounge Set',
        sub: 'Ensemble de Lounge en Cachemire de Los Angeles',
        gender: 'Women',
        priceUSD: 580,
        prov: 'LA Lifestyle District & Santa Monica Studio',
        comp: '100% Premium Italian Cashmere',
        desc: 'Versatile 4-way stretch lounge set with matching joggers and relaxed fit hoodie. Perfect for weekend brunches and casual evenings.',
        tag: 'Best Seller',
        img1: imgUsf18,
        img2: imgUsf19
      },
      {
        name: 'The San Francisco Tech Fleece Jacket',
        sub: 'Manteau Tech Fleece de San Francisco',
        gender: 'Unisex',
        priceUSD: 690,
        prov: 'San Francisco Tech District & Oakland Studio',
        comp: 'Recycled Polyester Fleece, Contrast Trim',
        desc: 'Reversible tech fleece jacket with signature American sportswear appeal and custom back details.',
        tag: 'Runway',
        img1: imgUsf17,
        img2: imgUsf16
      },
      {
        name: 'The Miami Performance Compression Leggings',
        sub: 'Leggings de Compression de Miami',
        gender: 'Women',
        priceUSD: 190,
        prov: 'Miami Beach Studio & Tampa Workshop',
        comp: 'Recycled Nylon, Spandex, Moisture-Wicking',
        desc: 'High-compression leggings with signature American activewear design and premium comfort for athletes and yogis.',
        tag: 'New In',
        img1: imgUsf17,
        img2: imgUsf20
      },
      {
        name: 'The Denver Sports Bra & Short Set',
        sub: 'Ensemble Sports Bra et Short de Denver',
        gender: 'Women',
        priceUSD: 240,
        prov: 'Denver Outdoor District & Boulder Studio',
        comp: 'Organic Cotton, Recycled Polyester',
        desc: 'Signature American sports bra with built-in shelf bra and high-waisted performance shorts for active lifestyles.',
        tag: 'Best Seller',
        img1: imgUsf19,
        img2: imgUsf06
      },
      {
        name: 'The Austin Tie-Dye Hoodie & Jogger Set',
        sub: 'Ensemble Capuche et Jogging Tie-Dye d’Austin',
        gender: 'Unisex',
        priceUSD: 320,
        prov: 'Austin Music District & Dallas Studio',
        comp: 'Organic Cotton Fleece, Low-Impact Dyes',
        desc: 'Relaxed tie-dye hoodie set with signature American casual styling and contemporary color palette.',
        tag: 'Best Seller',
        img1: imgUsf20,
        img2: imgUsf21
      },
      {
        name: 'The Nashville Silk Sleep Mask & Pillow Set',
        sub: 'Masque de Sommeil et Oreiller en Soie de Nashville',
        gender: 'Unisex',
        priceUSD: 150,
        prov: 'Nashville Music District & Knoxville Studio',
        comp: '100% Mulberry Silk, Premium Cotton Backing',
        desc: 'Luxury sleep set with signature American craftsmanship featuring 100% mulberry silk and premium cotton backing.',
        tag: 'New In',
        img1: imgUsf25,
        img2: imgUsf07
      },
      ...Array.from({ length: 20 }).map((_, i) => ({
        name: `Mary Atelier Loungewear Essential N° 0${i + 7}`,
        sub: `Essentiel Vêtements de Maison ${i + 7}`,
        gender: (i % 2 === 0 ? 'Women' : 'Men') as 'Women' | 'Men',
        priceUSD: 260 + (i * 22),
        prov: 'Los Angeles & Miami Studios, USA',
        comp: 'Cashmere, Technical Fleece, Organic Cotton, Silk',
        desc: `Contemporary American loungewear blending effortless comfort with signature style. Hand-finished in our LA and Miami studios.`,
        tag: (i % 2 === 0 ? 'Best Seller' : 'New In') as any,
        img1: IMG_ACTIVE_LOUNGE_ITEMS[i % IMG_ACTIVE_LOUNGE_ITEMS.length],
        img2: IMG_ACTIVE_LOUNGE_ITEMS[(i + 1) % IMG_ACTIVE_LOUNGE_ITEMS.length]
      }))
    ]
  }
];

// Generate the Master Full Database of 200+ Products
export const PRODUCTS: Product[] = CATEGORY_DEFINITIONS.flatMap((def, catIdx) => {
  return def.items.map((item, itemIdx) => {
    const id = `${def.category.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${itemIdx + 1}-${item.name.toLowerCase().slice(0, 18).replace(/[^a-z0-9]/g, '-')}`;
    
    return {
      id,
      name: item.name,
      frenchSubtitle: item.sub,
      category: def.category,
      gender: item.gender,
      priceUSD: item.priceUSD,
      season: 'Fall / Winter 2025 Couture',
      edition: item.tag === 'Heirloom' ? 'Numbered Heirloom Edition of 15' : 'Atelier Batch of 35',
      description: item.desc,
      atelierNotes: `Hand-assembled over 45-90 hours in our Manhattan, Los Angeles, and Chicago ateliers. Features reinforced French seams and internal silk stabilization.`,
      composition: item.comp,
      silhouetteNotes: `Structured to provide impeccable posture and fluid movement for modern American lifestyles.`,
      fabricProvenance: item.prov,
      availableSizes: item.gender === 'Men'
        ? ['S (Chest 38)', 'M (Chest 40)', 'L (Chest 42)', 'XL (Chest 44)', 'XXL (Chest 46)', 'Custom NYC Measure']
        : item.gender === 'Women'
        ? ['US 00', 'US 2', 'US 4', 'US 6', 'US 8', 'US 10', 'US 12', 'Custom Atelier Measure']
        : ['S', 'M', 'L', 'XL', 'Custom Measure'],
      featured: itemIdx < 2,
      runwayLookNumber: itemIdx + 1,
      tag: item.tag,
      colors: [
        {
          name: 'Imperial Sovereign Gold',
          hex: '#c8a97e',
          views: makeViews(item.img1, item.img2)
        },
        {
          name: 'Obsidian Midnight Onyx',
          hex: '#101014',
          views: makeViews(item.img2, item.img1)
        }
      ],
      hotspots: [
        {
          id: `hs-${id}-1`,
          x: 48,
          y: 28,
          title: 'Heritage American Craftsmanship',
          description: 'Generations of American artisan technique with premium silk threads.',
          technique: 'Authentic American Craftsmanship'
        },
        {
          id: `hs-${id}-2`,
          x: 52,
          y: 60,
          title: 'Solid Brass & Bronze Hardware',
          description: 'Precision-cast metalwork crafted by master American artisans.',
          technique: 'American Artisan Metalwork'
        }
      ]
    };
  });
});

export const LOOKBOOK_LOOKS: LookbookLook[] = [
  {
    id: 'look-01',
    lookNumber: 1,
    title: 'Manhattan Midnight Silk Ball Gown',
    model: 'Gigi Hadid',
    season: 'Fall/Winter 2025 Haute Couture',
    description: 'Opening look featuring The Manhattan Midnight Silk-Brocade Ball Gown in hand-woven metallic silk paired with The Hollywood Illusion Embroidered Mermaid Gown accessories.',
    frontImage: imgUsf01,
    sideImage: imgUsf24,
    backImage: imgUsf02,
    macroImage: imgUsf23,
    productsIncluded: [PRODUCTS[0]?.id || 'p1', PRODUCTS[1]?.id || 'p2']
  },
  {
    id: 'look-02',
    lookNumber: 2,
    title: 'Charleston Silk & Indigo Collection',
    model: 'Adut Akech',
    season: 'Fall/Winter 2025 Haute Couture',
    description: 'The Charleston Hand-Embroidered Silk Blouse flowing in continuous gravity folds under spotlight, paired with pre-tied luxury accessories.',
    frontImage: imgUsf08,
    sideImage: imgUsf06,
    backImage: imgUsf07,
    macroImage: imgUsf16,
    productsIncluded: [PRODUCTS[2]?.id || 'p3']
  },
  {
    id: 'look-03',
    lookNumber: 3,
    title: 'Executive Manhattan Wool Suit',
    model: 'Tyson Beckford',
    season: 'Fall/Winter 2025 Haute Couture',
    description: 'Commanding two-piece wool suit tailored in premium Italian wool with hand-stitched details and matching tie.',
    frontImage: imgUsf10,
    sideImage: imgUsf14,
    backImage: imgUsf12,
    macroImage: imgUsf25,
    productsIncluded: [PRODUCTS[1]?.id || 'p2']
  },
  {
    id: 'look-04',
    lookNumber: 4,
    title: 'Los Angeles Red Carpet Glamour',
    model: 'Joan Smalls',
    season: 'Fall/Winter 2025 Haute Couture',
    description: 'Monumental midnight velvet gown encrusted with hand-applied crystals and high-standing dramatic collar.',
    frontImage: imgUsf09,
    sideImage: imgUsf27,
    backImage: imgUsf23,
    macroImage: imgUsf25,
    productsIncluded: [PRODUCTS[3]?.id || 'p4']
  },
  {
    id: 'look-05',
    lookNumber: 5,
    title: 'Denver Selvedge & Silk Casual',
    model: 'Blessing Major',
    season: 'Fall/Winter 2025 Haute Couture',
    description: 'Premium selvedge denim jeans hand-finished with organic American silk patches and custom hardware.',
    frontImage: imgUsf20,
    sideImage: imgUsf21,
    backImage: imgUsf22,
    macroImage: imgUsf16,
    productsIncluded: [PRODUCTS[4]?.id || 'p5']
  },
  {
    id: 'look-06',
    lookNumber: 6,
    title: 'Miami Art Deco Beaded Gown',
    model: 'Coco Rocha',
    season: 'Fall/Winter 2025 Haute Couture',
    description: 'Champagne gold sheer illusion gown dripping in hand-applied micro-crystal beads and silk satin train.',
    frontImage: imgUsf24,
    sideImage: imgUsf23,
    backImage: imgUsf02,
    macroImage: imgUsf25,
    productsIncluded: [PRODUCTS[5]?.id || 'p6']
  },
  {
    id: 'look-07',
    lookNumber: 7,
    title: 'Boston Black-Tie Tuxedo Ensemble',
    model: 'Lewis Hamilton',
    season: 'Fall/Winter 2025 Haute Couture',
    description: 'Razor-sharp monochrome black wool tuxedo with satin peak lapels and solid brass accessories from our Boston atelier.',
    frontImage: imgUsf13,
    sideImage: imgUsf14,
    backImage: imgUsf15,
    macroImage: imgUsf25,
    productsIncluded: [PRODUCTS[6]?.id || 'p7']
  }
];

export const EDITORIAL_ARTICLES = [
  {
    id: 'art-01',
    title: 'The Living Loom: American Artisans Redefine Contemporary Haute Couture',
    publication: 'Vogue US & Harper\'s Bazaar',
    date: 'Fall/Winter 2025',
    author: 'Edward Enninful & Grace Coddington',
    excerpt: 'Inside the historic Manhattan and Los Angeles workshops where generational artisans create luxury eveningwear that now defines global red carpets.',
    image: imgUsf03,
    readTime: '6 min read'
  },
  {
    id: 'art-02',
    title: 'The Architecture of American Suits: How New York Menswear Conquered Modern Luxury',
    publication: 'GQ US & GQ Style',
    date: 'Winter 2025',
    author: 'Jim Moore',
    excerpt: 'Examining the mathematical proportions, hand tailoring of American guilds, and cultural power embedded in the iconic American formal suit.',
    image: imgUsf10,
    readTime: '8 min read'
  },
  {
    id: 'art-03',
    title: 'American Craft: The Modern Silk Masters of the Manhattan Atelier',
    publication: 'The Business of Fashion (BoF)',
    date: 'Special Report',
    author: 'Sarah Mower',
    excerpt: 'How traditional American dyeing techniques from historic textile houses are transformed into luxury silk eveningwear.',
    image: imgUsf08,
    readTime: '5 min read'
  }
];

export const RUNWAY_SHOWS = [
  {
    id: 'show-01',
    title: 'Fall/Winter 2025 American Haute Couture Collection',
    season: 'Fall / Winter',
    location: 'Lincoln Center, New York & Dolby Theatre, Los Angeles',
    lookCount: 42,
    coverImage: imgUsf02,
    date: 'February 2025'
  },
  {
    id: 'show-02',
    title: 'Resort 2026 American Luxury Collection',
    season: 'Resort',
    location: 'The Plaza Hotel, New York',
    lookCount: 28,
    coverImage: imgUsf24,
    date: 'May 2025'
  }
];

export const PRESS_REVIEWS = [
  {
    publication: 'VOGUE US / INTERNATIONAL',
    quote: 'Mary redefines American haute couture with uncompromising global power: historic New York and Los Angeles textile mastery married to razor-sharp architectural geometry.',
    author: 'Edward Enninful',
    date: 'NYFW & LAFW Runway Review'
  },
  {
    publication: 'HARPER\'S BAZAAR',
    quote: 'A billion-dollar masterclass in pure luxury. Maison Mary delivers the most formidable American sartorial craft witnessed on the global stage.',
    author: 'Samira Nasr',
    date: 'Couture Highlights'
  },
  {
    publication: 'THE BUSINESS OF FASHION',
    quote: 'From Manhattan to Beverly Hills, Mary has built a sovereign luxury house celebrating American craftsmanship with zero compromise.',
    author: 'Tim Blanks',
    date: 'Design Icons Profile'
  },
  {
    publication: 'GQ US',
    quote: 'Sculptural, regal, and commanding. Mary\'s American silk and wool silhouettes command the room the second they enter.',
    author: 'Jim Moore',
    date: 'NYFW Runway Special'
  }
];

