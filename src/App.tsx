import React, { useState, useEffect } from 'react';
import { initialCards } from './data/initialCards';
import { CardDetail, CardTypeFilter } from './types';
import CardTile from './components/CardTile';
import CardModal from './components/CardModal';
import CardCreator from './components/CardCreator';
import StokeDeckWidget from './components/StokeDeckWidget';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Sparkles, 
  Plus, 
  Grid, 
  ChevronDown, 
  ArrowRight, 
  Check, 
  Flame, 
  Compass, 
  HelpCircle, 
  BookOpen, 
  Filter, 
  X,
  Mail
} from 'lucide-react';

export default function App() {
  // Primary State
  const [cards, setCards] = useState<CardDetail[]>(initialCards);
  const [selectedFilter, setSelectedFilter] = useState<CardTypeFilter | 'All' | 'Custom'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Persistence States (stored in LocalStorage)
  const [registeredWorkshops, setRegisteredWorkshops] = useState<string[]>([]);
  const [libraryBooks, setLibraryBooks] = useState<string[]>([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Modal / Sidebar Controls
  const [activeCard, setActiveCard] = useState<CardDetail | null>(null);
  const [isCreatorOpen, setIsCreatorOpen] = useState(false);
  const [isStokeOpen, setIsStokeOpen] = useState(false);

  // Load state from LocalStorage on mount
  useEffect(() => {
    try {
      const savedCustomCards = localStorage.getItem('dschool_custom_cards');
      if (savedCustomCards) {
        const parsed: CardDetail[] = JSON.parse(savedCustomCards);
        setCards([...initialCards, ...parsed]);
      }

      const savedRegistrations = localStorage.getItem('dschool_registrations');
      if (savedRegistrations) {
        setRegisteredWorkshops(JSON.parse(savedRegistrations));
      }

      const savedLibrary = localStorage.getItem('dschool_library');
      if (savedLibrary) {
        setLibraryBooks(JSON.parse(savedLibrary));
      }
    } catch (e) {
      console.error('Failed to load local storage data:', e);
    }
  }, []);

  // Save Custom Cards
  const handleAddCard = (newCard: CardDetail) => {
    const updatedCustom = cards.filter(c => c.isCustom);
    const newCustomList = [...updatedCustom, newCard];
    localStorage.setItem('dschool_custom_cards', JSON.stringify(newCustomList));
    setCards([...initialCards, ...newCustomList]);
  };

  // Toggle registration for workshops
  const handleToggleRegister = (id: string) => {
    const isReg = registeredWorkshops.includes(id);
    let updated: string[];
    if (isReg) {
      updated = registeredWorkshops.filter(item => item !== id);
    } else {
      updated = [...registeredWorkshops, id];
    }
    setRegisteredWorkshops(updated);
    localStorage.setItem('dschool_registrations', JSON.stringify(updated));
  };

  // Add/remove from library books
  const handleToggleLibrary = (id: string) => {
    const isAdded = libraryBooks.includes(id);
    let updated: string[];
    if (isAdded) {
      updated = libraryBooks.filter(item => item !== id);
    } else {
      updated = [...libraryBooks, id];
    }
    setLibraryBooks(updated);
    localStorage.setItem('dschool_library', JSON.stringify(updated));
  };

  // Handle Newsletter Submission
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  // Trigger random card exploration
  const handleInspireMe = () => {
    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setActiveCard(randomCard);
  };

  // Filter and search logic
  const filteredCards = cards.filter((card) => {
    const matchesSearch = 
      card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (card.description && card.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (card.tag && card.tag.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Custom') return card.isCustom;
    return card.type === selectedFilter;
  });

  return (
    <div className="bg-[#FAF9F6] text-stone-900 min-h-screen flex flex-col font-sans selection:bg-red-500 selection:text-white">
      
      {/* Top Banner: Quick Stats & Mode Toggles */}
      <div className="bg-stone-900 text-stone-300 text-[11px] font-mono py-2.5 px-6 flex flex-wrap justify-between items-center gap-4 border-b border-stone-800 select-none">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-red-500" />
            Stanford d.school Virtual Hub
          </span>
          <span className="hidden md:inline text-stone-600">|</span>
          <span className="hidden md:inline">
            Active: <strong className="text-white">{cards.length}</strong> Mindsets &amp; Resources
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsStokeOpen(true)}
            className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-bold animate-pulse"
          >
            <Flame className="w-3.5 h-3.5" />
            Warmup: Stoke Deck
          </button>
          <span className="text-stone-700">/</span>
          <button 
            onClick={() => setIsCreatorOpen(true)}
            className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 font-bold"
          >
            <Plus className="w-3.5 h-3.5" />
            Tile Architect
          </button>
        </div>
      </div>

      {/* Primary Header */}
      <header className="py-16 md:py-24 flex flex-col items-center justify-center border-b border-stone-200/60 bg-white relative overflow-hidden select-none">
        {/* Subtle decorative geometry in margins */}
        <div className="absolute top-10 left-10 text-red-500/10 text-9xl font-serif select-none pointer-events-none italic">d</div>
        <div className="absolute bottom-10 right-10 text-stone-900/5 text-9xl font-serif select-none pointer-events-none">!</div>

        <div className="text-center group cursor-pointer relative z-10 max-w-xl px-4">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-3 font-semibold">I'm curious about...</p>
          
          <div 
            onClick={handleInspireMe}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 group"
            title="Click to draw a random creative focus!"
          >
            <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:rotate-12 duration-300 shadow-md">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
              </svg>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif italic text-red-500 group-hover:text-red-600 transition-colors tracking-tight select-none">
              Everything
            </h1>
          </div>
          
          <p className="text-xs text-stone-500 mt-4 font-mono font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click "Everything" to let the d.school guide your focus randomly!
          </p>
        </div>
      </header>

      {/* Control Panel: Search & Dynamic Filters */}
      <section className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-sm px-4 md:px-8 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4.5 w-4.5 text-stone-400" />
            </span>
            <input
              type="text"
              placeholder="Search electives, stories, tools, and guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border-stone-200 hover:border-stone-300 focus:border-red-500 focus:ring-red-500 rounded-none text-sm transition-all text-stone-900 placeholder:text-stone-400 font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filtering Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 select-none">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {(['All', 'Workshop', 'Story', 'Tool', 'Buy Now', 'Read More', 'Custom'] as const).map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all rounded-none border ${
                    isActive
                      ? 'bg-red-500 text-white border-red-500 font-bold'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-stone-300 hover:bg-stone-100'
                  }`}
                >
                  {filter === 'Custom' ? 'My Tiles' : filter}
                </button>
              );
            })}
          </div>

        </div>

        {/* Saved Items Badges Panel */}
        {(registeredWorkshops.length > 0 || libraryBooks.length > 0) && (
          <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 select-none">
            {registeredWorkshops.length > 0 && (
              <div className="flex items-center gap-1.5 bg-sky-50 text-sky-800 px-3 py-1 border border-sky-100 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                Registered Workshops: <strong>{registeredWorkshops.length}</strong>
              </div>
            )}
            {libraryBooks.length > 0 && (
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1 border border-emerald-100 font-medium">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                Library Books: <strong>{libraryBooks.length}</strong>
              </div>
            )}
            <button 
              onClick={() => {
                setRegisteredWorkshops([]);
                setLibraryBooks([]);
                localStorage.removeItem('dschool_registrations');
                localStorage.removeItem('dschool_library');
              }}
              className="text-red-500 hover:underline text-[10px] uppercase font-bold"
            >
              Clear Saved
            </button>
          </div>
        )}
      </section>

      {/* Floating Spark Launcher */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsStokeOpen(true)}
          className="flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-5 py-3 rounded-full font-bold shadow-lg text-sm border border-stone-700 tracking-wider uppercase select-none"
        >
          <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
          <span>Stoke Engine</span>
        </motion.button>
      </div>

      {/* Main Grid Content */}
      <main className="flex-1 bg-white select-none">
        {filteredCards.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-stone-200">
            <AnimatePresence mode="popLayout">
              {filteredCards.map((card) => (
                <CardTile
                  key={card.id}
                  card={card}
                  onClick={() => setActiveCard(card)}
                />
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-24 text-center max-w-md mx-auto space-y-4 px-4 select-text">
            <HelpCircle className="w-12 h-12 text-stone-300 mx-auto" />
            <h3 className="text-lg font-bold text-stone-800 font-sans">No Mindsets Match Your Search</h3>
            <p className="text-sm text-stone-500 leading-relaxed font-sans">
              We couldn't find any resources for "{searchQuery}". Try adjusting your keywords, selecting "All" categories, or create a brand new tile using our Tile Architect!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedFilter('All');
              }}
              className="px-4 py-2 bg-stone-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-stone-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Dynamic Logo/Action Bar inside Grid */}
        <section className="col-span-full py-10 px-8 bg-[#FAF9F6] flex flex-col md:flex-row justify-between items-center gap-6 border-y border-stone-200" data-purpose="logo-bar">
          <div className="text-center md:text-left select-none">
            <h3 className="text-xl md:text-2xl font-black font-sans tracking-tight text-stone-900 uppercase">
              Stanford<br/>d.school
            </h3>
            <p className="text-[10px] uppercase font-mono tracking-widest text-stone-400 mt-1">Hasso Plattner Institute of Design</p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsCreatorOpen(true)}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Custom Tile
            </button>

            <button
              onClick={handleInspireMe}
              className="px-6 py-3 bg-white hover:bg-stone-100 border border-stone-300 text-stone-800 font-extrabold text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-500" /> Inspire Me
            </button>
          </div>
        </section>
      </main>

      {/* Main Footer */}
      <footer className="bg-stone-900 text-white pt-24 pb-12 px-8 relative overflow-hidden select-text">
        {/* Giant decorative exclamation point matching d.school branding */}
        <div className="absolute right-12 bottom-12 text-[320px] font-serif font-black text-red-600 leading-none pointer-events-none opacity-20 select-none">
          !
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {/* Footer Column 1 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold">About Us</h4>
            <div className="space-y-1.5 text-sm text-stone-300 font-sans">
              <a className="block hover:text-red-400 transition-colors" href="#">About the d.school</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Our physical Space</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Stories &amp; Profiles</a>
              <a className="block hover:text-red-400 transition-colors" href="#">News &amp; Media</a>
            </div>
          </div>

          {/* Footer Column 2 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold">Study Programs</h4>
            <div className="space-y-1.5 text-sm text-stone-300 font-sans">
              <a className="block hover:text-red-400 transition-colors" href="#">Undergraduate Degree</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Graduate Program</a>
              <a className="block hover:text-red-400 transition-colors" href="#">University-Wide Electives</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Fellowships &amp; Research</a>
            </div>
          </div>

          {/* Footer Column 3 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold">Innovate</h4>
            <div className="space-y-1.5 text-sm text-stone-300 font-sans">
              <a className="block hover:text-red-400 transition-colors" href="#">Professional Education</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Digital tools</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Official Bookshop</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Method Cards</a>
            </div>
          </div>

          {/* Footer Column 4 */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-stone-500 font-bold">Connect</h4>
            <div className="space-y-1.5 text-sm text-stone-300 font-sans">
              <a className="block hover:text-red-400 transition-colors" href="#">Campus Events</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Staff Directory</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Support &amp; Giving</a>
              <a className="block hover:text-red-400 transition-colors" href="#">Contact &amp; Visit</a>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-2 pt-10 border-t border-stone-800 space-y-4">
            <p className="text-xs text-stone-400 font-mono italic">Updates from the d.school</p>
            <h3 className="text-2xl font-bold font-sans tracking-tight">
              Want to learn more &amp; get involved?{' '}
              <span className="text-stone-400 font-serif italic font-normal">
                Subscribe to our email newsletter for (kinda) regular updates.
              </span>
            </h3>
            
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md select-text">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 bg-stone-800 border-stone-700 text-white rounded-none focus:border-red-500 focus:ring-red-500 text-sm py-2.5 px-4 font-sans"
              />
              <button
                type="submit"
                className="bg-white text-stone-900 px-6 font-bold text-xs uppercase tracking-wider hover:bg-stone-200 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>

            <AnimatePresence>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-emerald-400 font-semibold font-mono"
                >
                  ✓ Dynamic Subscription recorded! Thank you for staying curious.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Brand Bar */}
        <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-end gap-6 relative z-10 select-none">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-white text-stone-950 flex items-center justify-center font-serif font-black text-2xl">
                d.
              </div>
              <div>
                <div className="text-2xl font-black tracking-tighter">Stanford | ENGINEERING</div>
                <p className="text-[9px] uppercase tracking-widest text-stone-500 font-mono">Hasso Plattner Institute of Design</p>
              </div>
            </div>
            <p className="text-xs text-stone-500">
              Stanford University © 2026 Hasso Plattner Institute of Design at Stanford University. All Rights Reserved.{' '}
              <a className="underline hover:text-white" href="#">
                Privacy Policy
              </a>
            </p>
          </div>
          <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-stone-500">
            <a className="hover:text-white transition-colors" href="#">LinkedIn</a>
            <a className="hover:text-white transition-colors" href="#">Instagram</a>
            <a className="hover:text-white transition-colors" href="#">Facebook</a>
            <a className="hover:text-white transition-colors" href="#">Medium</a>
          </div>
        </div>
      </footer>

      {/* Overlays / Modals */}
      <CardModal
        card={activeCard}
        onClose={() => setActiveCard(null)}
        onToggleRegister={handleToggleRegister}
        isRegistered={activeCard ? registeredWorkshops.includes(activeCard.id) : false}
        onAddToLibrary={handleToggleLibrary}
        isAddedToLibrary={activeCard ? libraryBooks.includes(activeCard.id) : false}
      />

      <CardCreator
        isOpen={isCreatorOpen}
        onClose={() => setIsCreatorOpen(false)}
        onAddCard={handleAddCard}
      />

      <StokeDeckWidget
        isOpen={isStokeOpen}
        onClose={() => setIsStokeOpen(false)}
      />

    </div>
  );
}
