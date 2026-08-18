import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AtelierBookingModal } from './components/AtelierBookingModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { Product, Currency, CartItem, AppPage } from './types';
import { PRODUCTS } from './data/products';

// Distinctive Page Views
import { HomePage } from './pages/HomePage';
import { ShopCollectionPage } from './pages/ShopCollectionPage';
import { RunwayLookbookPage } from './pages/RunwayLookbookPage';
import { StylistStudioPage } from './pages/StylistStudioPage';
import { BrandAtelierPage } from './pages/BrandAtelierPage';
import { SalonsBookingPage } from './pages/SalonsBookingPage';

export default function App() {
  // Navigation State - Multi-Page Routing
  const [currentPage, setCurrentPage] = useState<AppPage>('home');

  // Default permanently to US Dollar (USD)
  const [currentCurrency, setCurrentCurrency] = useState<Currency>('USD');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[0],
      colorName: 'Onyx & Sovereign Gold',
      size: 'US 4',
      monogram: 'M.R.',
      quantity: 1
    }
  ]);
  const [wishlistProducts, setWishlistProducts] = useState<Product[]>([PRODUCTS[1]]);

  // Modals & Drawers
  const [inspectProduct, setInspectProduct] = useState<Product | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingNote, setBookingNote] = useState('');
  const [bookingLocation, setBookingLocation] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);

  // Handlers
  const handleNavigate = (page: AppPage) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, colorName: string, size: string, monogram?: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.colorName === colorName && item.size === size
      );
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += 1;
        return next;
      }
      return [...prev, { product, colorName, size, monogram, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCartItems((prev) => {
      const next = [...prev];
      next[index].quantity = quantity;
      return next;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleOpenBookingWithData = (notes?: string, location?: string) => {
    setBookingNote(notes || '');
    if (location) setBookingLocation(location);
    setBookingOpen(true);
  };

  const handleMoveWishlistToCart = (product: Product) => {
    handleAddToCart(product, product.colors[0].name, product.availableSizes[0] || 'FR 36');
    setWishlistProducts((prev) => prev.filter((p) => p.id !== product.id));
    setCartOpen(true);
  };

  const handleInspectProduct = (p: Product) => {
    setInspectProduct(p);
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-[#f4f2ee] selection:bg-[#c8a97e] selection:text-[#0b0b0d] flex flex-col font-sans">
      {/* Header with Multi-Page Navigation & Currency */}
      <Header
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        cartCount={totalCartCount}
        wishlistCount={wishlistProducts.length}
        onOpenCart={() => setCartOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenBooking={() => handleOpenBookingWithData()}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Main Multi-Page Content Area */}
      <main className="flex-1 pt-16">
        {currentPage === 'home' && (
          <HomePage
            currentCurrency={currentCurrency}
            onNavigate={handleNavigate}
            onSelectProduct={handleInspectProduct}
            onAddToCart={handleAddToCart}
            onOpenBooking={handleOpenBookingWithData}
          />
        )}

        {currentPage === 'shop' && (
          <ShopCollectionPage
            currentCurrency={currentCurrency}
            onSelectProduct={handleInspectProduct}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistProducts.map((p) => p.id)}
          />
        )}

        {currentPage === 'runway' && (
          <RunwayLookbookPage
            currentCurrency={currentCurrency}
            onSelectProduct={handleInspectProduct}
            onOpenBooking={handleOpenBookingWithData}
          />
        )}

        {currentPage === 'stylist' && (
          <StylistStudioPage
            currentCurrency={currentCurrency}
            onAddToCart={handleAddToCart}
            onOpenBooking={handleOpenBookingWithData}
          />
        )}

        {currentPage === 'atelier' && (
          <BrandAtelierPage
            onOpenBooking={handleOpenBookingWithData}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'salons' && (
          <SalonsBookingPage
            initialLocation={bookingLocation}
            initialNote={bookingNote}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Product Multi-Perspective Modal Inspector */}
      <ProductDetailModal
        product={inspectProduct}
        onClose={() => setInspectProduct(null)}
        currentCurrency={currentCurrency}
        onAddToCart={handleAddToCart}
        onOpenBooking={handleOpenBookingWithData}
      />

      {/* Atelier Private Appointment Modal */}
      <AtelierBookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialNote={bookingNote}
        initialLocation={bookingLocation}
      />

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        currentCurrency={currentCurrency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={() => setCartItems([])}
        onOpenBooking={() => handleOpenBookingWithData('Commission for Cart Items')}
      />

      {/* Saved Silhouettes / Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        products={wishlistProducts}
        currentCurrency={currentCurrency}
        onRemoveWishlist={handleToggleWishlist}
        onMoveToCart={handleMoveWishlistToCart}
      />
    </div>
  );
}
