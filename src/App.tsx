/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar, ScreenType } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutPillars } from './components/AboutPillars';
import { GalleryShowcase } from './components/GalleryShowcase';
import { FeaturesSection } from './components/FeaturesSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { DECOR_ITEMS, DecorItem, BRAND_INFO } from './data/decorData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('home');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<DecorItem | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [bookingPrefillDecor, setBookingPrefillDecor] = useState<string>('');
  const [showDirectBookingModal, setShowDirectBookingModal] = useState(false);

  const handleOpenLightbox = (item: DecorItem) => {
    setSelectedLightboxItem(item);
    setIsLightboxOpen(true);
  };

  const handleOpenHeroLightbox = () => {
    const wingsItem = DECOR_ITEMS.find((d) => d.id === 'wings-luxury') || DECOR_ITEMS[0];
    handleOpenLightbox(wingsItem);
  };

  const handleBookItem = (item: DecorItem) => {
    setBookingPrefillDecor(item.title);
    if (currentScreen !== 'home') {
      setCurrentScreen('home');
    }
    setTimeout(() => {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleOpenBookingModal = () => {
    if (currentScreen === 'home') {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    setShowDirectBookingModal(true);
  };

  return (
    <div className="min-h-screen flex flex-col font-cairo bg-[#FDFBF7] text-[#1C1917] selection:bg-[#D4AF37] selection:text-white">
      {/* Top Navbar & Header */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={(screen) => setCurrentScreen(screen)}
        onOpenBookingModal={handleOpenBookingModal}
      />

      {/* Main Screen Content */}
      <main className="flex-1">
        {currentScreen === 'home' && (
          <>
            {/* Hero Showcase */}
            <HeroSection
              onExploreCatalog={() => {
                const el = document.getElementById('gallery');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenHeroLightbox={handleOpenHeroLightbox}
            />

            {/* 3 Core Pillars */}
            <AboutPillars />

            {/* Gallery Section */}
            <GalleryShowcase
              onSelectItem={handleOpenLightbox}
              onBookItem={handleBookItem}
            />

            {/* Features & Why Choose Us */}
            <FeaturesSection />

            {/* Booking & Direct Contact Section */}
            <BookingSection initialDecor={bookingPrefillDecor} />
          </>
        )}

        {currentScreen === 'catalog' && (
          <GalleryShowcase
            isFullPage
            onSelectItem={handleOpenLightbox}
            onBookItem={handleBookItem}
          />
        )}
      </main>

      {/* Main Footer */}
      <Footer
        onNavigate={(screen) => {
          setCurrentScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenBooking={handleOpenBookingModal}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <aside className="fixed bottom-6 left-6 z-40">
        <a
          href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent('السلام عليكم Habibiç، أود الاستفسار عن كراء ديكور لمناسبتي')}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل مباشر عبر تطبيق واتساب"
          className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        >
          <i className="fa-brands fa-whatsapp text-2xl" aria-hidden="true"></i>
          <span className="font-bold text-xs hidden md:inline-block">
            تواصل فوري عبر واتساب
          </span>
        </a>
      </aside>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        item={selectedLightboxItem}
        onClose={() => setIsLightboxOpen(false)}
        onBookItem={handleBookItem}
      />

      {/* Direct Booking Modal for other screens */}
      {showDirectBookingModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowDirectBookingModal(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#D4AF37]/50 relative text-right my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowDirectBookingModal(false)}
              type="button"
              className="absolute top-4 left-4 z-10 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center"
            >
              ✕
            </button>
            <BookingSection
              initialDecor={bookingPrefillDecor}
              onBookingSuccess={() => {
                setTimeout(() => setShowDirectBookingModal(false), 2500);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
